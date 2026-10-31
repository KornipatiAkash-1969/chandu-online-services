# Aadhaar Links Update — Verification Report

**Date:** 31 October 2026  
**Project:** `C:\Users\user\.gemini\antigravity\scratch\digital-seva-portal`

## Summary

UIDAI has moved myAadhaar to a new portal. UIDAI's own home page (`uidai.gov.in`) now sends visitors to `myaadhaarbeta.uidai.gov.in`, and the older `myaadhaar.uidai.gov.in` landing page says "The new myAadhaar portal has arrived". The new portal carries a "beta" banner and a "Switch back to legacy" link. All Aadhaar service cards now use the new portal's individual service pages where one exists and loads correctly. 15 Aadhaar services were checked; **9 URLs were replaced**, 4 were confirmed unchanged and 2 remain flagged for manual checking.

**What was and was not done in testing:** pages were opened in the in-app browser and portal tiles were clicked to see where they lead. No Aadhaar number, OTP, captcha or login was entered, nothing was downloaded, and no request was submitted.

## The four services you asked about

| Aadhaar Service | Updated Official URL | Status |
|---|---|---|
| Aadhaar Update (document update) | https://myaadhaar.uidai.gov.in/du/en_IN | Working |
| Appointment Booking | https://bookappointment.uidai.gov.in/ | Working |
| Aadhaar Download | https://myaadhaarbeta.uidai.gov.in/genericDownloadAadhaar/en | Working |
| Aadhaar PVC Card | https://myaadhaarbeta.uidai.gov.in/pvc/en | Working |

*Working* means the page loaded at exactly that address (no redirect) and showed the right service. Every one of these then asks for an Aadhaar number or mobile OTP, which was not entered.

Notes on the four:
- **Update:** the online update the project offers is document update (proof of identity/address), and the page above is the one UIDAI's own 'Document update' tile opens. It is on the legacy host because the new portal has no verified equivalent. **The new portal's own "Update Address" tile (and the matching tile on UIDAI's home page) links to the enrolment/update *status* page, so it was not used.** The project has no address-update service. Mobile number update is the separate 'Phone / Mobile Update' card, which books an appointment.
- **Appointment:** the booking site is an app that draws on a canvas, so its text can't be read by script. A screenshot shows its "Login to Appointment Portal via OTP Authentication" screen.
- **Download:** the working route is spelled `genericDownloadAadhaar`. The spelling `genricDownloadAadhaar` (used on UIDAI's home page and the legacy host) redirects to the portal home from the new host.
- **PVC:** the page shows a ₹75 fee. The project said ₹50, so the card text and checklist were corrected.

## All 15 Aadhaar services

| Aadhaar Service | Previous URL | Updated Official URL | Status | Notes |
|---|---|---|---|---|
| UIDAI Official Portal | https://uidai.gov.in/en/ | https://uidai.gov.in/en/ | Working | Unchanged. UIDAI's main site; its menu now links to the new myAadhaar portal. |
| Aadhaar Card Download | https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en | https://myaadhaarbeta.uidai.gov.in/genericDownloadAadhaar/en | Working | Download Aadhaar page (Regular/Masked, OTP). Note the spelling: UIDAI's own home page links `genricDownloadAadhaar/en`, which bounces to the portal home; the correct route is `generic…`. |
| Aadhaar Phone / Mobile Update | https://bookappointment.uidai.gov.in/ | https://bookappointment.uidai.gov.in/ | Working | Unchanged. UIDAI's 'Update Aadhaar' page lists visiting an enrolment centre for registering a mobile number, so booking a slot is the matching route. |
| Book an Appointment | https://bookappointment.uidai.gov.in/ | https://bookappointment.uidai.gov.in/ | Working | Unchanged. Confirmed as the target of the official 'Book an appointment' tile and referenced by the new portal's code. Shows an OTP login. |
| Order Aadhaar PVC Card | https://myaadhaar.uidai.gov.in/login | https://myaadhaarbeta.uidai.gov.in/pvc/en | Working | Order Aadhaar PVC Card page (₹75 fee, up to 30 days). Previously only the generic login page. |
| Check PVC Card Status | https://myaadhaar.uidai.gov.in/checkStatus | https://myaadhaarbeta.uidai.gov.in/checkStatus/en | Working | Aadhaar PVC Card Status page (SRN). |
| Check Enrolment & Update Status | https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en | https://myaadhaarbeta.uidai.gov.in/CheckAadhaarStatus/en | Working | Check Enrolment / Update Status page (EID / SRN / URN / SID). |
| Aadhaar Document Update | https://myaadhaar.uidai.gov.in/login | https://myaadhaar.uidai.gov.in/du/en_IN | Working | Document Update page ('Upload documents in support of identity and address'). Opened from the official Document update tile. Stays on the legacy host: the new portal has no verified equivalent. |
| Verify Phone Number & Email | https://myaadhaar.uidai.gov.in/verify-email-mobile | https://myaadhaarbeta.uidai.gov.in/verify-email-mobile/en | Working | Check Email / Mobile Link page. |
| Check Bank Seeding Status | https://myaadhaar.uidai.gov.in/bank-seeding-status | https://myaadhaar.uidai.gov.in/bank-seeding-status | Manual | Unchanged. Opens a login screen; the new portal tile goes to the UIDAI login (tathya.uidai.gov.in) with no public deep link. |
| Locate Enrolment Center | https://bhuvan-app3.nrsc.gov.in/aadhaar/ | https://bhuvan-app3.nrsc.gov.in/aadhaar/ | Working | Unchanged. Identical to the 'Seva Kendra Locator' link on UIDAI's home page. |
| Retrieve Lost EID / UID | https://myaadhaar.uidai.gov.in/retrieve-eid-uid | https://myaadhaarbeta.uidai.gov.in/retrieve-eid-uid/en | Working | Retrieve Aadhaar Number / EID / SID page. Same link UIDAI's home page uses. |
| Lock / Unlock Biometrics | https://myaadhaar.uidai.gov.in/login | https://myaadhaarbeta.uidai.gov.in/lock-unlock-biometrics/en | Working | Lock / Unlock Biometrics page (the action itself needs OTP; not tested). |
| Virtual ID (VID) Generator | https://myaadhaar.uidai.gov.in/vid-generation | https://myaadhaarbeta.uidai.gov.in/genericGenerateOrRetrieveVID/ | Working | Generate / Retrieve Virtual ID page. Old route was not a real page (fell back to login). Same link UIDAI's home page uses. |
| File Complaint & Feedback | https://myaadhaar.uidai.gov.in/file-complaint | https://myaadhaar.uidai.gov.in/file-complaint | Manual | Unchanged. Opens a login screen; no public filing page was found. A public status page exists at `/grievance-feedback-status/en` on the new portal. |

Status: **Working** = loads the right service page at that address with no redirect. **Manual** = needs a person to sign in and check.

## Where Aadhaar links appear on the site

Every Aadhaar link on the site reads from `src/data/servicesData.js` by service id, so one update covers all of them:
- **Service cards and search results** (directory, hero search suggestions, quick-shortcut pills): read each card's own URL.
- **Top-8 Popular Services:** includes Aadhaar Card Download (new URL).
- **Pinned shortcuts:** default pin is Aadhaar Card Download; any pinned Aadhaar card follows the config.
- **Quick Access tile** 'UIDAI Official Portal' and the **footer** 'UIDAI Official Portal' link: both come from the `aadhaar-uidai-portal` entry (`https://uidai.gov.in/en/`).
- **Document checklist pop-up:** opens with the same card URL.
The browser test confirmed the page renders exactly the URLs in the config and none of the removed ones.

## Outdated URLs removed

Nothing in the project now points to these (all were on `myaadhaar.uidai.gov.in`):
`/login` (used by PVC, Document Update, Lock/Unlock), `/genricDownloadAadhaar/en`, `/checkStatus`, `/CheckAadhaarStatus/en`, `/verify-email-mobile`, `/retrieve-eid-uid`, `/vid-generation`.
Three legacy-host URLs remain on purpose: `/du/en_IN` (no new equivalent), `/bank-seeding-status` and `/file-complaint` (login-gated, flagged Manual).

## Text corrected to match the official pages

- PVC card: fee ₹50 → ₹75 (badge, checklist and description); steps no longer say "click the tile on your dashboard", because the card now opens the PVC page directly.
- Document Update and Lock/Unlock Biometrics steps updated the same way.

## Official addresses seen but deliberately NOT used

| Address | Why not |
|---|---|
| `downloadaadhaarbeta`, `orderpvc`, `addressupdatebeta`, `updatedocument`, `statuscheckbeta` (all `.uidai.gov.in`) | Named in the new portal's code, but they are internal components (page titles such as `order-pvc-ui-microfrontend`), not customer pages. |
| `myaadhaarbeta.uidai.gov.in/document-update` | Named in the portal's code; did not finish loading, so not verified. |
| `appointments.uidai.gov.in/easearch.aspx` | Mentioned on UIDAI's 'Update Aadhaar' page as a centre search; could not be opened from the test browser. |
| `tathya.uidai.gov.in/access/login?role=resident` | The UIDAI login host reached from the new portal's Login and Bank seeding tiles. A login page, not a service page. |

## Things to know / still to do

1. **The new portal is labelled beta.** UIDAI itself links to it and says changes made there update your Aadhaar record, so it is a live service. If UIDAI later renames the host (for example drops `beta`), only `servicesData.js` needs changing. Each service's check date and note is in `src/data/linkVerification.js`.
2. **Run `npm run build` and look at the Aadhaar cards on your PC.** The build could not be run in this workspace (no npm access); the source was compiled and tested in Chromium instead (25 of 25 checks pass).
3. **Manual checks:** Bank Seeding Status and File Complaint (both ask you to sign in first).
4. **Address update:** if you want an "Update Address" card, wait until UIDAI fixes the tile link on its new portal, or check the signed-in dashboard by hand.
5. Re-check these links every few months. UIDAI is replacing the legacy portal with the new one, so routes can move again.
