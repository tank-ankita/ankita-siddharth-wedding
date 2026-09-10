# Women’s measurement submissions

The script in `women-measurements.gs` targets spreadsheet
`1H4nNyu086JZ0dX5PtD8CGbMztG4WQQn-eTAbnGxTEL4`, tab ID `0` (the tab in the supplied link).
It saves timestamp, name, the 12 measurements in centimeters, and a submission ID.
The submission ID prevents duplicate rows when a request is retried.

## Set up in your Google account

1. Open the women’s spreadsheet and choose **Extensions → Apps Script**.
2. In this spreadsheet’s script project, paste the contents of `women-measurements.gs` into `Code.gs` and save. If the project already contains scripts, use a new standalone project instead; do not overwrite existing scripts or combine this with the RSVP endpoint.
3. Choose **Deploy → New deployment → Web app**.
4. Set **Execute as** to **Me** and **Who has access** to **Anyone**, so guests can submit without signing in. The spreadsheet itself can remain private.
5. Click **Deploy** and authorize the script with the Google account that can edit the spreadsheet.
6. Copy the **Web app URL** ending in `/exec` and send it back for the website connection. Do not send the `/dev` test URL.

The target tab should be empty for initial setup; the script creates its header row on the first valid submission. If it already contains data, preserve that data and use a dedicated empty tab instead, updating `WOMEN_TAB_ID` to its `gid` before deployment. The script refuses mismatched headers rather than appending values into unrelated columns.

Opening the deployed URL should show `{"status":"ready","form":"women"}`. This only verifies deployment; a test submission still needs to confirm sheet access and saving.

The women’s endpoint is connected in `src/pages/WomenMeasurementPage.jsx`. A browser submission successfully returned a confirmed save. The sheet contains a test row named `TEST — website connection check (safe to delete)`. The women’s form checks the response before displaying success and reuses the submission ID for unchanged retries. The men’s Submit button remains disabled until its separate spreadsheet and endpoint are supplied.

Google deployment reference: https://developers.google.com/apps-script/guides/web
