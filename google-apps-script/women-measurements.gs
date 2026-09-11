// Deploy in a separate Apps Script project from the RSVP endpoint.
const WOMEN_SPREADSHEET_ID = '1H4nNyu086JZ0dX5PtD8CGbMztG4WQQn-eTAbnGxTEL4';
const WOMEN_TAB_ID = 0;
const WOMEN_FIELDS = [
  'Shoulder to Shoulder Width', 'Back Neck Depth', 'Neck', 'Sleeve Length',
  'Sleeve Circumference', 'Blouse Length', 'Waist / Midriff', 'Front Neck Depth',
  'Shoulders', 'Chest / Bust', 'Shoulder to Apex', 'Armhole',
];

function doGet() {
  return jsonResponse({ status: 'ready', form: 'women', inspirationSupported: true });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.form !== 'women') throw new Error('Incorrect measurement form.');
    const name = typeof data.name === 'string' ? data.name.trim() : '';
    if (!name || name.length > 200) throw new Error('Please enter a name of up to 200 characters.');
    if (!Array.isArray(data.measurements) || data.measurements.length !== WOMEN_FIELDS.length) {
      throw new Error('All 12 measurements are required.');
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
    const sheet = SpreadsheetApp.openById(WOMEN_SPREADSHEET_ID).getSheetById(WOMEN_TAB_ID);
    if (!sheet) throw new Error('The configured women’s tab could not be found.');
    const headers = ['Timestamp', 'Name', ...WOMEN_FIELDS.map(label => label + ' (cm)'), 'Submission ID', 'Outfit Inspiration'];
    const idColumn = headers.length - 1;
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    } else {
      const existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
      // Accept the previous labels and rename only those two header cells.
      const normalized = existing.map((header, index) => {
        if (index === 2 && header === 'Neck Width (cm)') return headers[index];
        if (index === 4 && header === 'Neck & Shoulder (cm)') return headers[index];
        return header;
      });
      if (headers.some((header, index) => normalized[index] !== header && !(index === headers.length - 1 && normalized[index] === ''))) {
        throw new Error('Sheet headers do not match. Please contact the organizers.');
      }
      if (existing[2] !== headers[2]) sheet.getRange(1, 3).setValue(headers[2]);
      if (existing[4] !== headers[4]) sheet.getRange(1, 5).setValue(headers[4]);
    }

    if (sheet.getRange(1, headers.length).getValue() === '') sheet.getRange(1, headers.length).setValue('Outfit Inspiration');

    // Retrying a request with the same identifier must not add a second row.
    if (sheet.getLastRow() > 1) {
      const found = sheet.getRange(2, idColumn, sheet.getLastRow() - 1, 1)
        .createTextFinder(data.submissionId).matchEntireCell(true).findNext();
      if (found) return jsonResponse({ status: 'success', form: 'women', submissionId: data.submissionId });
    }
    // Keep names as text, including names beginning with formula characters.
    const safeName = /^[=+@\-]/.test(name) ? "'" + name : name;
    const safeInspiration = /^[=+@\-]/.test(inspiration) ? "'" + inspiration : inspiration;
    sheet.appendRow([new Date(), safeName, ...values, data.submissionId, safeInspiration]);
    SpreadsheetApp.flush();
    return jsonResponse({ status: 'success', form: 'women', submissionId: data.submissionId });
  } catch (error) {
    return jsonResponse({ status: 'error', message: error.message || 'Unable to save measurements.' });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
