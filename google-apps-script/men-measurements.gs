// Deploy in a separate Apps Script project from the women’s and RSVP endpoints.
const MEN_SPREADSHEET_ID = '1OggFR0Hd3DW77C3njlW1NSRJWlM4r8Sg5rv1jSCdr90';
const MEN_TAB_ID = 0;
const MEN_FIELDS = [
  'Neck Circumference', 'Chest', 'Waist', 'Hips', 'Sleeve Length',
  'Shoulder Width', 'Back Length (Neck to Waist)', 'Total Length (Shoulder to Hem)',
  'Bicep Circumference', 'Forearm Circumference', 'Wrist Circumference', 'Armhole',
  'Thigh Circumference', 'Knee Circumference', 'Calf Circumference',
  'Inseam Length', 'Outseam Length',
];

function doGet() {
  return jsonResponse({ status: 'ready', form: 'men', inspirationSupported: true });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.form !== 'men') throw new Error('Incorrect measurement form.');
    const name = typeof data.name === 'string' ? data.name.trim() : '';
    if (!name || name.length > 200) throw new Error('Please enter a name of up to 200 characters.');
    if (!Array.isArray(data.measurements) || data.measurements.length !== MEN_FIELDS.length) {
      throw new Error('All 17 measurements are required.');
    }
    if (data.inspiration != null && typeof data.inspiration !== 'string') throw new Error('Inspiration must be text.');
    const inspiration = (data.inspiration || '').trim();
    if (inspiration.length > 2000) throw new Error('Please keep inspiration under 2,000 characters.');
    const values = data.measurements;
    if (values.some(value => typeof value !== 'number' || !Number.isFinite(value) || value < 0.01)) {
      throw new Error('Measurements must be positive numbers in centimeters.');
    }
    if (typeof data.submissionId !== 'string' || !/^[a-zA-Z0-9-]{16,80}$/.test(data.submissionId)) {
      throw new Error('Missing submission identifier.');
    }

    lock.waitLock(20000);
    const sheet = SpreadsheetApp.openById(MEN_SPREADSHEET_ID).getSheetById(MEN_TAB_ID);
    if (!sheet) throw new Error('The configured men’s tab could not be found.');
    const headers = ['Timestamp', 'Name', ...MEN_FIELDS.map(label => label + ' (cm)'), 'Submission ID', 'Outfit Inspiration'];
    const idColumn = headers.length - 1;
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    } else {
      const existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
      if (headers.some((header, index) => existing[index] !== header && !(index === headers.length - 1 && existing[index] === ''))) {
        throw new Error('Sheet headers do not match. Please contact the organizers.');
      }
    }

    if (sheet.getRange(1, headers.length).getValue() === '') sheet.getRange(1, headers.length).setValue('Outfit Inspiration');

    // Retrying a request with the same identifier must not add a second row.
    if (sheet.getLastRow() > 1) {
      const found = sheet.getRange(2, idColumn, sheet.getLastRow() - 1, 1)
        .createTextFinder(data.submissionId).matchEntireCell(true).findNext();
      if (found) return jsonResponse({ status: 'success', form: 'men', submissionId: data.submissionId });
    }
    // Keep names as text, including names beginning with formula characters.
    const safeName = /^[=+@\-]/.test(name) ? "'" + name : name;
    const safeInspiration = /^[=+@\-]/.test(inspiration) ? "'" + inspiration : inspiration;
    sheet.appendRow([new Date(), safeName, ...values, data.submissionId, safeInspiration]);
    SpreadsheetApp.flush();
    return jsonResponse({ status: 'success', form: 'men', submissionId: data.submissionId });
  } catch (error) {
    return jsonResponse({ status: 'error', message: error.message || 'Unable to save measurements.' });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
