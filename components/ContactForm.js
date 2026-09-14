"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Check, ShieldCheck, Sparkles, Clock, CreditCard, Lock } from "lucide-react";
import { site } from "@/lib/site-data";

const TRIAL_SUBJECTS = [
  "Math",
  "Science",
  "English",
  "Coding",
  "Social Studies",
];

const GRADE_OPTIONS = [
  "Kindergarten (KG)",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
  "Other",
];

export default function ContactForm({ enquiry = false }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState(["Math"]);

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) => {
      if (prev.includes(subject)) {
        return prev.length > 1 ? prev.filter((s) => s !== subject) : prev;
      }
      return [...prev, subject];
    });
  };

  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;

    if (!enquiry && selectedSubjects.length === 0) {
      setError("Please select at least one subject.");
      return;
    }

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.formType = enquiry ? "contact" : "demo";
    data.sourcePage = window.location.pathname;

    if (!enquiry) {
      data.subjects = selectedSubjects;
      data.subject = selectedSubjects.join(", ");
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't send your details. Please try again.");
      setStatus("success");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again or contact us directly.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form form-success" role="status">
        <CheckCircle2 size={46} strokeWidth={1.5} className="success-icon" />
        <h2>{enquiry ? "Your message has been sent!" : "Your FREE Trial is Reserved!"}</h2>
        <p>
          {enquiry
            ? "Thank you for getting in touch. The BrightRise team will get back to you shortly."
            : "Thank you! Our academic coordinator will reach out on WhatsApp/Email within 24 hours to match the best tutor and confirm your convenient class time."}
        </p>
        <div className="success-reassurance">
          <span><Clock size={15} /> Fast response within 24 hours</span>
          <span><ShieldCheck size={15} /> 100% Free • Zero commitment</span>
        </div>
        <button type="button" className="button button-outline" onClick={() => setStatus("idle")}>
          {enquiry ? "Send another enquiry" : "Book for another student"}
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form trial-premium-card" onSubmit={submit}>
      <div className="form-heading">
        {/* {!enquiry && (
          <span className="form-badge">
            <Sparkles size={13} /> 100% FREE INTRODUCTORY CLASS
          </span>
        )} */}
        <h2>{enquiry ? "Let’s start a conversation." : "Book Your FREE Trial"}</h2>
        <p>
          {enquiry
            ? "Tell us what’s on your mind. We’re here to help."
            : "Live 1-on-1 session tailored to your child • No credit card needed"}
        </p>
      </div>

      <div className="form-grid">
        <div className="form-field form-field-wide">
          <label htmlFor="name">Parent Name *</label>
          <input
            name="name"
            id="name"
            placeholder="e.g. Priya Sharma"
            autoComplete="name"
            required
            maxLength={100}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address *</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone / WhatsApp *</label>
          <input
            name="phone"
            id="phone"
            type="tel"
            placeholder="You Phone Number"
            autoComplete="tel"
            required
            maxLength={40}
          />
        </div>

        <div className="form-field">
          <label htmlFor="grade">Student Grade *</label>
          <select id="grade" name="grade" defaultValue="" required>
            <option value="" disabled>Select Grade</option>
            {GRADE_OPTIONS.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="timing">Preferred Time</label>
          <input
            name="timing"
            id="timing"
            placeholder="e.g. Weekday evenings, 5–8 PM"
            maxLength={160}
          />
        </div>

        <div className="form-field form-field-wide">
          <label htmlFor="country">Country / Time Zone *</label>
          <input
            name="country"
            id="country"
            placeholder="e.g. United States (EST), UK (GMT), India (IST)"
            autoComplete="country-name"
            required
            maxLength={100}
          />
        </div>

        {!enquiry ? (
          <div className="form-field form-field-wide">
            <div className="label-row">
              <label>Subjects *</label>
              <span className="field-hint">(Select all that apply)</span>
            </div>
            <div className="subject-chips-grid">
              {TRIAL_SUBJECTS.map((subject) => {
                const isSelected = selectedSubjects.includes(subject);
                return (
                  <button
                    key={subject}
                    type="button"
                    className={`subject-chip ${isSelected ? "selected" : ""}`}
                    onClick={() => toggleSubject(subject)}
                    aria-pressed={isSelected}
                  >
                    <span className="chip-indicator">
                      {isSelected ? <Check size={12} strokeWidth={3} /> : <span className="chip-empty-dot" />}
                    </span>
                    <span>{subject}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="form-field form-field-wide">
            <label htmlFor="message">How can we help?</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your questions, learning goals, or preferred timing..."
              rows={3}
              maxLength={2000}
            />
          </div>
        )}
      </div>

      <div hidden aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error} You can also <a className="underline" href={`https://wa.me/${site.whatsapp}`}>message us on WhatsApp</a>.
        </p>
      )}

      <button
        type="submit"
        className={`button ${enquiry ? "button-dark" : "button-orange"} submit-trial-btn`}
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Reserving your trial…
          </>
        ) : (
          <>
            {enquiry ? "Send Message" : "Book My FREE Trial"} <ArrowUpRight size={18} />
          </>
        )}
      </button>

      {!enquiry && (
        <>
          <div className="form-privacy-note">
            <Lock size={14} className="privacy-lock-icon" />
            <span>Your information is private and will only be used to contact you about your trial.</span>
          </div>
        </>
      )}
    </form>
  );
}
