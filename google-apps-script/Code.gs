/*
 * BrightRise Academy form receiver
 *
 * Open the target Google Sheet, choose Extensions > Apps Script, replace the
 * default file with this code, set the WEBHOOK_TOKEN Script Property, then
 * deploy it as a Web app. Use this same file in each destination sheet.
 */

const HEADERS = [
  "Timestamp",
  "Form Type",
  "Parent Name",
  "Email Address",
  "Phone / WhatsApp",
  "Student Grade",
  "Subjects",
  "Preferred Time",
  "Country / Time Zone",
  "Message",
  "Source Page",
];

function doPost(event) {
  try {
    const body = JSON.parse(event.postData.contents || "{}");
    const expectedToken = PropertiesService.getScriptProperties().getProperty("WEBHOOK_TOKEN");

    if (!expectedToken || body.token !== expectedToken) {
      return jsonResponse({ ok: false, error: "Unauthorized request" });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName("Form Submissions") || spreadsheet.insertSheet("Form Submissions");
    ensureHeaders(sheet);
    sheet.appendRow([
      new Date(),
      clean(body.formType),
      clean(body.name),
      clean(body.email),
      clean(body.phone),
      clean(body.grade),
      clean(body.subject),
      clean(body.timing),
      clean(body.country),
      clean(body.message),
      clean(body.sourcePage),
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: "Unable to save submission" });
  }
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() !== 0) return;
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  sheet.setFrozenRows(1);
}

function clean(value) {
  return String(value || "").trim();
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
