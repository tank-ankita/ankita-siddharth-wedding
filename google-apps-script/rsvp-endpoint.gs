function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Full Name',
      'Attending',
      'Email',
      'Guest Count',
      'Celebrations',
      'Arrival Date',
      'Accommodation Needed',
      'Airport Pickup Needed',
      'Dietary Notes',
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.fullName || '',
    data.attendance === 'accepts' ? 'Yes' : 'No',
    data.email || '',
    data.guestCount || '',
    Array.isArray(data.celebrations) ? data.celebrations.join(', ') : '',
    data.arrivalDate || '',
    data.accommodation || '',
    data.airportPickup || '',
    data.dietaryNotes || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
