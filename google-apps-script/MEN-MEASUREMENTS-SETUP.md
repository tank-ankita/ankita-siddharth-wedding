# Men’s measurement submissions

`men-measurements.gs` saves to spreadsheet `1OggFR0Hd3DW77C3njlW1NSRJWlM4r8Sg5rv1jSCdr90`, tab ID `0`, matching the supplied link. It records the name, timestamp, all 17 measurements in centimeters, and a submission ID to prevent duplicate retries. It rejects women’s form submissions.

1. Open the men’s spreadsheet and select **Extensions → Apps Script**.
2. Paste `men-measurements.gs` into `Code.gs` and save. Use a separate project from the women’s and RSVP scripts. If this project already has code in use, create a new standalone project instead of overwriting it.
3. Select **Deploy → New deployment → Web app**.
4. Set **Execute as: Me** and **Who has access: Anyone**.
5. Deploy and authorize with the account that can edit the men’s spreadsheet.
6. Send back the **Web app URL** ending in `/exec` to complete the website connection.

Keep the destination tab empty initially; the first valid submission creates the headers. If the tab already holds unrelated data, use a dedicated empty tab and change `MEN_TAB_ID` to that tab’s `gid` before deployment. Existing mismatched headers are rejected without overwriting data.

Opening the deployed URL should return `{"status":"ready","form":"men"}`. The men’s Submit button is now enabled and connected to the verified men’s endpoint in `src/pages/MenMeasurementPage.jsx`. Browser checks confirmed saving all 17 measurements. Two test rows named `TEST — website connection check (safe to delete)` were created during verification; they may be removed. Success is shown only after the endpoint confirms the matching submission ID.

Deployment reference: https://developers.google.com/apps-script/guides/web
