import { NextResponse } from "next/server";
import { site } from "@/lib/site-data";

const limits = { name: 100, email: 254, phone: 40, grade: 50, subject: 200, country: 100, timing: 160, message: 2000, sourcePage: 300 };

function isTrustedFormOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const originHost = new URL(origin).host;
    const trustedHosts = new Set([
      new URL(site.url).host,
      "brightriseacademy.objectsquare.in",
      request.headers.get("host"),
      request.headers.get("x-forwarded-host"),
    ].filter(Boolean));
    return trustedHosts.has(originHost);
  } catch {
    return false;
  }
}

export async function POST(request) {
  if (!isTrustedFormOrigin(request)) {
    return NextResponse.json({ error: "Please submit your enquiry from this website." }, { status: 403 });
  }
  let data;
  try {
    const body = await request.text();
    if (body.length > 7000) return NextResponse.json({ error: "Please shorten your message." }, { status: 413 });
    data = JSON.parse(body);
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid data");
  } catch {
    return NextResponse.json({ error: "Please check your form details." }, { status: 400 });
  }
  if (data.website) return NextResponse.json({ error: "Unable to submit this enquiry." }, { status: 400 });
  if (data.formType !== "demo" && data.formType !== "contact") {
    return NextResponse.json({ error: "Please check your form details." }, { status: 400 });
  }
  const payload = {};
  for (const [field, limit] of Object.entries(limits)) {
    if (data[field] !== undefined && typeof data[field] !== "string" && !Array.isArray(data[field])) {
      return NextResponse.json({ error: "Please check your form details." }, { status: 400 });
    }
    const val = Array.isArray(data[field]) ? data[field].join(", ") : (data[field] || "");
    payload[field] = String(val).trim();
    if (payload[field].length > limit) return NextResponse.json({ error: "One of your answers is too long." }, { status: 400 });
  }
  payload.country = payload.country || "Online / Worldwide";
  payload.subject = payload.subject || (Array.isArray(data.subjects) ? data.subjects.join(", ") : (data.subjects || "General Tutoring"));
  payload.formType = data.formType;
  if (!payload.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) || payload.phone.replace(/\D/g, "").length < 6 || !payload.grade) {
    return NextResponse.json({ error: "Please enter your name, valid email, phone number, and student grade." }, { status: 400 });
  }
  try {
    const endpoint = data.formType === "contact" ? process.env.CONTACT_SHEETS_ENDPOINT : process.env.DEMO_SHEETS_ENDPOINT;
    const webhookToken = process.env.SHEET_WEBHOOK_SECRET;
    if (!endpoint || !webhookToken) {
      return NextResponse.json({ error: "Form submissions are not configured yet." }, { status: 503 });
    }
    const response = await fetch(endpoint, {
      method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, token: webhookToken }), signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error("Enquiry delivery failed");
    const result = await response.text();
    // Some Apps Script endpoints report application errors with HTTP 200.
    try {
      const parsed = JSON.parse(result);
      if (parsed.error || parsed.success === false || parsed.status === "error" || parsed.result === "error") throw new Error("Enquiry rejected");
    } catch (error) {
      if (!(error instanceof SyntaxError)) throw error;
      if (/<html|<!doctype/i.test(result)) throw new Error("Unexpected enquiry response");
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    const details = error instanceof Error ? error.message : "Unknown delivery error";
    console.error("Google Sheets form delivery failed:", details);
    return NextResponse.json({
      error: "We couldn't confirm delivery. Please contact us on WhatsApp or email before sending again.",
      ...(process.env.NODE_ENV === "development" ? { details } : {}),
    }, { status: 502 });
  }
}
