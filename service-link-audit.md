# Service Link Audit — Digital Seva Portal (project `chandu-online-services`)

**Audit date:** 31 October 2026  
**Project:** `C:\Users\user\.gemini\antigravity\scratch\digital-seva-portal` (React 18 + Vite 5 + Tailwind 3.4)

> **Update (31 Oct 2026, later the same day):** the 15 Aadhaar services were re-audited against UIDAI's new myAadhaar portal and several URLs were replaced. The Aadhaar rows below show the state at the first audit. See `aadhaar-links-report.md` for the current Aadhaar URLs and statuses.

## How this audit was done (read first)

- **Link testing** used the Claude desktop app's built-in browser on this computer. For each URL it recorded the final address, page title and visible text after the page rendered. Where a page only shows a login screen or a captcha, it was **not** logged into and no form was submitted. No payments, bookings or applications were made.
- The cloud workspace that ran the audit cannot reach government sites (its network blocks them), so plain HTTP status codes (200/404/403/500) were **not** collected. A page "works" here means it loaded in a real browser and showed the expected site and title. Status codes were not recorded, so a soft-404 that still renders a page is something the browser check can miss.
- **The production build (`npm run build`) was NOT run.** The workspace cannot reach the npm registry, and no shell on this computer was available. Instead the source was compiled with esbuild and exercised in Chromium (see section D). **Please run `npm run build` once on your machine** before deploying.
- URLs were only changed when the replacement was opened on the official site and confirmed. Where the right official URL could not be confirmed, the service was kept and flagged for manual review.

## Differences between the brief and the actual project

The audit brief describes a site with a Contact section, WhatsApp button, shop address, Google Maps, business hours, About Us, Privacy Policy, Terms & Conditions, Disclaimer page and social links. **None of these exist in this project.** It is a single-page "Chandu — Online Services Shortcuts Portal" with: header, hero + search, pinned shortcuts, top-8 services, quick-access tiles, a filterable directory of 66 services, and a footer (categories, 5 portal links, Security & Privacy modal, Disclaimer modal). No phone number, email, address or map is in the code. These were **not invented**; they need the shop's real details from the owner (see section E). The brief's service list does map onto the 66 services in `servicesData.js`.

## A. Overall Audit Summary

| Metric | Unique URLs (43) | Services (66), as found | Services (66), after fixes |
|---|---|---|---|
| Total Services Identified | – | 66 (Government 42, Banking 9, Travel 7, Education 8) | 66 |
| Total Links Tested | 43 original + 3 replacement URLs | covers all 66 | – |
| Working Links | 35 | 47 | 50 |
| Broken Links | 1 | 1 | 0 |
| Incorrect / Unofficial Links | 0 / 0 | 1 / 0 | 0 / 0 |
| Redirected | 1 | 1 | 0 |
| Manual Verification Required | 6 | 16 | 16 |
| Links Corrected | 3 (+1 description text) | 3 | – |

Notes: the 43 unique URLs cover all 66 services (many services share one portal). The 8 Quick Access tiles and 5 footer links reuse URLs from the same list. Plain redirects that still land on the right site (www/non-www, `/psp`, `/home`, Sarathi state selection) are counted as Working. No unofficial or look-alike domain was found: every destination belongs to the relevant government body or a named provider (Jio, LIC, SBI, IRCTC, NBBL/Bharat Connect, Protean, UTIITSL).

### Links corrected

| Service | Old URL | New URL | Why |
|---|---|---|---|
| Aadhaar Card Download | https://myaadhaar.uidai.gov.in/genricDownloadAadhaar | https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en | Old URL redirected to the myAadhaar home page. Replaced with the route opened by the official 'Download Aadhaar' tile (title 'eAadhaar Download'). |
| Check Enrolment & Update Status | https://myaadhaar.uidai.gov.in/checkStatus | https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en | Old URL is the PVC-order status page. Replaced with the route opened by the official 'Check enrolment or update status' tile. |
| Results Checking (Board & Competitive) | https://cbseresults.nic.in/ | https://results.digilocker.gov.in/ | cbseresults.nic.in has an expired TLS certificate. Replaced with results.digilocker.gov.in, which is linked from the CBSE site's own RESULTS button and shows CBSE results (authority text updated). |

Text correction: *New PAN Card Application* said "Form 49A"; the Protean page now lists New PAN Form Nos. 93–96 (and UTIITSL's notice says old forms are not accepted after 31.03.2026), so the description now says Form 93.

## B. Service-Wise Testing Report

Status is what was found **before** any fix. "Manual Verification Required" means the link was not found broken, but a person must confirm it (login-gated, generic landing page, or the site could not be opened from the test browser).

| # | Service Name | Category | URL (as found) | Status | Action Taken | Notes |
|---|---|---|---|---|---|---|
| 1 | UIDAI Official Portal | Government | https://uidai.gov.in/en/ | Working | No Change | Browser: loads UIDAI home, canonical /en |
| 2 | Aadhaar Card Download | Government | https://myaadhaar.uidai.gov.in/genricDownloadAadhaar | Redirected | Corrected | Old URL redirected to the myAadhaar home page. Replaced with the route opened by the official 'Download Aadhaar' tile (title 'eAadhaar Download'). |
| 3 | Aadhaar Phone / Mobile Update | Government | https://bookappointment.uidai.gov.in/ | Working | No Change | Appointment portal; mobile update is booked here. Page body renders via JavaScript. |
| 4 | Book an Appointment | Government | https://bookappointment.uidai.gov.in/ | Working | No Change | Appointment portal title confirmed. |
| 5 | Order Aadhaar PVC Card | Government | https://myaadhaar.uidai.gov.in/login | Working | No Change | Opens myAadhaar login; ordering needs Aadhaar + OTP (not tested). |
| 6 | Check PVC Card Status | Government | https://myaadhaar.uidai.gov.in/checkStatus | Working | No Change | Browser: 'Check Aadhaar PVC card order status' page |
| 7 | Check Enrolment & Update Status | Government | https://myaadhaar.uidai.gov.in/checkStatus | Incorrect Destination | Corrected | Old URL is the PVC-order status page. Replaced with the route opened by the official 'Check enrolment or update status' tile. |
| 8 | Aadhaar Document Update | Government | https://myaadhaar.uidai.gov.in/login | Working | No Change | Opens myAadhaar login; needs Aadhaar + OTP (not tested). |
| 9 | Verify Phone Number & Email | Government | https://myaadhaar.uidai.gov.in/verify-email-mobile | Working | No Change | Browser: Verify Email / Mobile form |
| 10 | Check Bank Seeding Status | Government | https://myaadhaar.uidai.gov.in/bank-seeding-status | Manual Verification Required | Pending Verification | URL shows a login screen; the official tile routes to tathya.uidai.gov.in login. Confirm manually after signing in. |
| 11 | Locate Enrolment Center | Government | https://bhuvan-app3.nrsc.gov.in/aadhaar/ | Working | No Change | Browser: ISRO Bhuvan 'Aadhaar Centers' locator |
| 12 | Retrieve Lost EID / UID | Government | https://myaadhaar.uidai.gov.in/retrieve-eid-uid | Working | No Change | Browser: Retrieve Aadhaar number/EID form |
| 13 | Lock / Unlock Biometrics | Government | https://myaadhaar.uidai.gov.in/login | Working | No Change | Opens myAadhaar login; lock/unlock is inside the signed-in dashboard (not tested). |
| 14 | Virtual ID (VID) Generator | Government | https://myaadhaar.uidai.gov.in/vid-generation | Manual Verification Required | Pending Verification | URL shows a login screen; VID route not confirmed. |
| 15 | File Complaint & Feedback | Government | https://myaadhaar.uidai.gov.in/file-complaint | Manual Verification Required | Pending Verification | URL shows a login screen. A public 'Check Grievance / Feedback Status' page exists at /grievance-feedback-status/en; owner to decide if it should be used. |
| 16 | New PAN Card Application | Government | https://onlineservices.proteantech.in/paam/endUserRegisterContact.html | Working | Description corrected | Link fine. Description said 'Form 49A'; the Protean page now lists New PAN Form Nos. 93-96, so the text was corrected to Form 93. |
| 17 | PAN Card Correction & Reprint | Government | https://onlineservices.proteantech.in/paam/endUserRegisterContact.html | Working | No Change | Same Protean page includes 'Changes or Correction / Reprint' in its application-type list. |
| 18 | Download e-PAN Card | Government | https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan | Working | No Change | Browser: Income Tax 'instant E-PAN' page |
| 19 | Link Aadhaar with PAN | Government | https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar | Working | No Change | Browser: Income Tax 'Link Aadhaar' page |
| 20 | UTIITSL PAN Portal & e-PAN | Government | https://www.pan.utiitsl.com/ | Working | No Change | Browser: UTIITSL PAN portal |
| 21 | New Voter ID Registration (Form 6) | Government | https://voters.eci.gov.in/ | Working | No Change | Opens the ECI portal landing page (not form-specific). |
| 22 | Voter ID Correction & Shifting (Form 8) | Government | https://voters.eci.gov.in/ | Working | No Change | Opens the ECI portal landing page (not form-specific). |
| 23 | Download e-EPIC Digital Voter Card | Government | https://voters.eci.gov.in/ | Working | No Change | Opens the ECI portal landing page (not form-specific). |
| 24 | Caste Certificate Application | Government | https://serviceonline.gov.in/ | Manual Verification Required | Pending Verification | Generic ServicePlus national page ('Select Instance'); it does not show Andhra Pradesh certificate services. AP candidates (AP Seva vswsonline.ap.gov.in, MeeSeva ap.meeseva.gov.in) appear in AP government documents but could not be opened from the test browser, so they were not substituted. |
| 25 | Income Certificate Application | Government | https://serviceonline.gov.in/ | Manual Verification Required | Pending Verification | Generic ServicePlus national page ('Select Instance'); it does not show Andhra Pradesh certificate services. AP candidates (AP Seva vswsonline.ap.gov.in, MeeSeva ap.meeseva.gov.in) appear in AP government documents but could not be opened from the test browser, so they were not substituted. |
| 26 | Residence & Domicile Certificate | Government | https://serviceonline.gov.in/ | Manual Verification Required | Pending Verification | Generic ServicePlus national page ('Select Instance'); it does not show Andhra Pradesh certificate services. AP candidates (AP Seva vswsonline.ap.gov.in, MeeSeva ap.meeseva.gov.in) appear in AP government documents but could not be opened from the test browser, so they were not substituted. |
| 27 | New Passport Application | Government | https://www.passportindia.gov.in/ | Working | No Change | Opens the Passport Seva landing page (not service-specific). |
| 28 | Passport Renewal / Re-issue | Government | https://www.passportindia.gov.in/ | Working | No Change | Opens the Passport Seva landing page (not service-specific). |
| 29 | Passport Appointment & Status Check | Government | https://www.passportindia.gov.in/ | Working | No Change | Opens the Passport Seva landing page (not service-specific). |
| 30 | Learner's Licence (LL) Application | Government | https://sarathi.parivahan.gov.in/ | Working | No Change | Redirects to Sarathi state-selection page (expected). |
| 31 | Permanent Driving Licence (DL) | Government | https://sarathi.parivahan.gov.in/ | Working | No Change | Redirects to Sarathi state-selection page (expected). |
| 32 | Driving Licence Renewal & Services | Government | https://sarathi.parivahan.gov.in/ | Working | No Change | Redirects to Sarathi state-selection page (expected). |
| 33 | Download Driving Licence & RC | Government | https://parivahan.gov.in/ | Manual Verification Required | Pending Verification | parivahan.gov.in is the generic Parivahan Sewa home, not a DL/RC download page. |
| 34 | New Ration Card Application | Government | https://nfsa.gov.in/portal/State_UT_Portals | Working | No Change | National NFSA directory of State/UT portals; Andhra Pradesh links are listed there. Not a direct application page. |
| 35 | Ration Card Corrections & Updates | Government | https://nfsa.gov.in/portal/State_UT_Portals | Working | No Change | National NFSA directory of State/UT portals; Andhra Pradesh links are listed there. Not a direct application page. |
| 36 | Ration Card Member Addition / Deletion | Government | https://nfsa.gov.in/portal/State_UT_Portals | Working | No Change | National NFSA directory of State/UT portals; Andhra Pradesh links are listed there. Not a direct application page. |
| 37 | EPFO Member Unified Portal | Government | https://unifiedportal-mem.epfindia.gov.in/memberinterface/ | Working | No Change | Browser: EPFO 'Member Home' |
| 38 | UAN Activation Online | Government | https://unifiedportal-mem.epfindia.gov.in/memberinterface/ | Working | No Change | Member portal banner says UAN activation/generation is done through the UMANG app; description may need updating. |
| 39 | PF Balance Check & Passbook | Government | https://passbook.epfindia.gov.in/MemberPassBook/Login | Working | No Change | Browser: EPFO Member Passbook (URL case-normalised to /login) |
| 40 | PF Online Withdrawal & Advance (Form 31/19/10C) | Government | https://unifiedportal-mem.epfindia.gov.in/memberinterface/ | Working | No Change | Browser: EPFO 'Member Home' |
| 41 | Birth Certificate Application & Search | Government | https://dc.crsorgi.gov.in/ | Working | No Change | CRS portal loads; Andhra Pradesh is in its list of enabled states. |
| 42 | Death Certificate Application | Government | https://dc.crsorgi.gov.in/ | Working | No Change | CRS portal loads; Andhra Pradesh is in its list of enabled states. |
| 43 | Domestic Money Transfer (DMT) | Banking & Financial | https://www.bharat-connect.com/ | Manual Verification Required | Pending Verification | Bharat Connect is the BBPS bill-payment operator; no money-transfer service was seen. Owner should name an authorised money-transfer provider. |
| 44 | Electricity Bill Payments | Banking & Financial | https://www.bharat-connect.com/ | Manual Verification Required | Pending Verification | Loads the Bharat Connect (NBBL / BBPS operator) corporate site, not a bill-payment form. No payment path was verified. |
| 45 | Water Bill Payments | Banking & Financial | https://www.bharat-connect.com/ | Manual Verification Required | Pending Verification | Loads the Bharat Connect (NBBL / BBPS operator) corporate site, not a bill-payment form. No payment path was verified. |
| 46 | Mobile Prepaid & Postpaid Recharge | Banking & Financial | https://www.jio.com/selfcare/recharge/mobility/ | Manual Verification Required | Pending Verification | Jio-only recharge page, while the description promises Jio, Airtel, Vi and BSNL. |
| 47 | DTH Satellite TV Recharge | Banking & Financial | https://www.bharat-connect.com/ | Manual Verification Required | Pending Verification | Loads the Bharat Connect (NBBL / BBPS operator) corporate site, not a bill-payment form. No payment path was verified. |
| 48 | FASTag Toll Recharge | Banking & Financial | https://www.ihmcl.co.in/ | Manual Verification Required | Pending Verification | IHMCL corporate home; no recharge flow was seen on it. |
| 49 | Insurance Premium Payments (LIC & General) | Banking & Financial | https://licindia.in/ | Working | No Change | LIC only (Pay Premium is in LIC's menu). |
| 50 | Bank Account Opening Online | Banking & Financial | https://pmjdy.gov.in/ | Working | No Change | Browser: PMJDY home (title confirmed) |
| 51 | Income Tax & Financial Services | Banking & Financial | https://eportal.incometax.gov.in/ | Working | No Change | Browser: redirects to e-Filing login page |
| 52 | IRCTC Train Ticket Booking | Travel & Booking | https://www.irctc.co.in/nget/train-search | Working | No Change | Browser: IRCTC portal |
| 53 | Train PNR Status Checking | Travel & Booking | https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html | Working | No Change | Browser: Indian Railways PNR enquiry |
| 54 | Train Schedule & Live Running Status | Travel & Booking | https://enquiry.indianrail.gov.in/mntes/ | Working | No Change | Browser: NTES |
| 55 | State RTC & Private Bus Ticket Booking | Travel & Booking | https://www.bus.irctc.co.in/ | Working | No Change | Browser: IRCTC Bus, redirects to /home |
| 56 | Domestic & International Flight Booking | Travel & Booking | https://www.air.irctc.co.in/ | Working | No Change | Browser: IRCTC Air |
| 57 | Hotel & Retiring Room Reservations | Travel & Booking | https://www.irctctourism.com/ | Working | No Change | Browser: IRCTC Tourism |
| 58 | Travel Ticket & Itinerary Reprint | Travel & Booking | https://www.irctc.co.in/nget/train-search | Manual Verification Required | Pending Verification | Deep link to train search. Printing needs an IRCTC login; no print page was verified. |
| 59 | Online Exam Applications (SSC / UPSC / IBPS) | Education | https://ssc.gov.in/ | Working | No Change | Browser: Staff Selection Commission home |
| 60 | Government Job Notifications & Apply | Education | https://www.ncs.gov.in/ | Working | No Change | Browser: National Career Service, redirects to non-www |
| 61 | Hall Ticket & Admit Card Downloads | Education | https://ssc.gov.in/ | Working | No Change | Browser: Staff Selection Commission home |
| 62 | Results Checking (Board & Competitive) | Education | https://cbseresults.nic.in/ | Broken | Corrected | cbseresults.nic.in has an expired TLS certificate. Replaced with results.digilocker.gov.in, which is linked from the CBSE site's own RESULTS button and shows CBSE results (authority text updated). |
| 63 | National Scholarship Portal (NSP) | Education | https://scholarships.gov.in/ | Manual Verification Required | Pending Verification | Browser could not open the site; WebFetch returned 'NSP : National Scholarship Portal'. |
| 64 | College Admissions & CUET Registration | Education | https://exams.nta.ac.in/ | Manual Verification Required | Pending Verification | Browser could not open the site; WebFetch result was inconclusive about it being the NTA portal. |
| 65 | Academic Bank of Credits (ABC / APAAR ID) | Education | https://www.abc.gov.in/ | Working | No Change | Browser: Academic Bank of Credits |
| 66 | Online Exam & University Fee Payments | Education | https://sbcollect.sbi.bank.in/sbicollect/icollecthome.htm | Working | No Change | Browser: State Bank Collect |

### Evidence per unique URL (as found)

| URL | Result | What was seen |
|---|---|---|
| https://uidai.gov.in/en/ | Working | Browser: loads UIDAI home, canonical /en |
| https://myaadhaar.uidai.gov.in/genricDownloadAadhaar | Redirected | Browser: redirected to myaadhaarbeta.uidai.gov.in home, not the download page |
| https://bookappointment.uidai.gov.in/ | Working | Browser: title 'Appointment Portal - UIDAI'; body renders via JS |
| https://myaadhaar.uidai.gov.in/login | Working | Browser: myAadhaar login (Aadhaar + OTP) |
| https://myaadhaar.uidai.gov.in/checkStatus | Working | Browser: 'Check Aadhaar PVC card order status' page |
| https://myaadhaar.uidai.gov.in/verify-email-mobile | Working | Browser: Verify Email / Mobile form |
| https://myaadhaar.uidai.gov.in/bank-seeding-status | Manual Verification Required | Browser: shows login screen (login-gated) |
| https://bhuvan-app3.nrsc.gov.in/aadhaar/ | Working | Browser: ISRO Bhuvan 'Aadhaar Centers' locator |
| https://myaadhaar.uidai.gov.in/retrieve-eid-uid | Working | Browser: Retrieve Aadhaar number/EID form |
| https://myaadhaar.uidai.gov.in/vid-generation | Manual Verification Required | Browser: shows login screen (login-gated) |
| https://myaadhaar.uidai.gov.in/file-complaint | Manual Verification Required | Browser: shows login screen (login-gated) |
| https://onlineservices.proteantech.in/paam/endUserRegisterContact.html | Working | Browser: Protean online PAN application; offers New PAN (Forms 93-96) and Changes/Correction/Reprint |
| https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan | Working | Browser: Income Tax 'instant E-PAN' page |
| https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar | Working | Browser: Income Tax 'Link Aadhaar' page |
| https://www.pan.utiitsl.com/ | Working | Browser: UTIITSL PAN portal |
| https://voters.eci.gov.in/ | Working | Browser: ECI Citizen Service Portal (shows 'Loading...' for several seconds first) |
| https://serviceonline.gov.in/ | Manual Verification Required | Browser: generic ServicePlus page ('Select Instance'); AP certificates not shown |
| https://www.passportindia.gov.in/ | Working | Browser: Passport Seva, redirects to /psp |
| https://sarathi.parivahan.gov.in/ | Working | Browser: redirects to /sarathiservice/stateSelection.do (Sarathi) |
| https://parivahan.gov.in/ | Working | Browser: Parivahan Sewa home (generic) |
| https://nfsa.gov.in/portal/State_UT_Portals | Working | Browser: NFSA State/UT portals list; includes Andhra Pradesh |
| https://unifiedportal-mem.epfindia.gov.in/memberinterface/ | Working | Browser: EPFO 'Member Home' |
| https://passbook.epfindia.gov.in/MemberPassBook/Login | Working | Browser: EPFO Member Passbook (URL case-normalised to /login) |
| https://dc.crsorgi.gov.in/ | Working | Browser: Civil Registration System, redirects to /crs/; Andhra Pradesh listed |
| https://www.bharat-connect.com/ | Working | Browser: Bharat Connect by NBBL (BBPS operator) corporate site |
| https://www.jio.com/selfcare/recharge/mobility/ | Working | Browser: Jio mobile recharge page |
| https://www.ihmcl.co.in/ | Working | Browser: IHMCL corporate home (redirects to non-www) |
| https://licindia.in/ | Working | Browser: LIC home |
| https://pmjdy.gov.in/ | Working | Browser: PMJDY home (title confirmed) |
| https://eportal.incometax.gov.in/ | Working | Browser: redirects to e-Filing login page |
| https://www.irctc.co.in/nget/train-search | Working | Browser: IRCTC portal |
| https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html | Working | Browser: Indian Railways PNR enquiry |
| https://enquiry.indianrail.gov.in/mntes/ | Working | Browser: NTES |
| https://www.bus.irctc.co.in/ | Working | Browser: IRCTC Bus, redirects to /home |
| https://www.air.irctc.co.in/ | Working | Browser: IRCTC Air |
| https://www.irctctourism.com/ | Working | Browser: IRCTC Tourism |
| https://ssc.gov.in/ | Working | Browser: Staff Selection Commission home |
| https://www.ncs.gov.in/ | Working | Browser: National Career Service, redirects to non-www |
| https://cbseresults.nic.in/ | Broken | Browser: ERR_CERT_DATE_INVALID (TLS certificate expired); other sites loaded on same machine |
| https://scholarships.gov.in/ | Manual Verification Required | Browser could not open it (no reason given); WebFetch returned 'NSP : National Scholarship Portal' |
| https://exams.nta.ac.in/ | Manual Verification Required | Browser could not open it (no reason given); WebFetch result inconclusive |
| https://www.abc.gov.in/ | Working | Browser: Academic Bank of Credits |
| https://sbcollect.sbi.bank.in/sbicollect/icollecthome.htm | Working | Browser: State Bank Collect |

### Replacement URLs verified

| URL | What was seen |
|---|---|
| https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en | Opened by clicking the official 'Download Aadhaar' tile; page title 'eAadhaar Download' |
| https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en | Opened by clicking the official 'Check enrolment or update status' tile; page 'Check Enrolment or Update Status' |
| https://results.digilocker.gov.in/ | gov.in site showing CBSE Class X / XII 2026 results; it is the target of the RESULTS button on https://www.cbse.gov.in/ |

### Candidates seen but NOT adopted (could not be confirmed)

- **Andhra Pradesh certificates (caste, income, residence):** AP government documents and district sites name the AP Seva portal (`vswsonline.ap.gov.in`) and MeeSeva (`ap.meeseva.gov.in`). Neither opened in the test browser, so `serviceonline.gov.in` was left in place and flagged. The NFSA directory page does list AP ration-card links (`epds1.ap.gov.in`, `nfsa.gov.in/State/AP`).
- **CBSE:** `results.cbse.nic.in` is widely cited but could not be opened from the test browser; `results.digilocker.gov.in` (linked from CBSE's own site) was used instead.
- **Aadhaar grievance:** a public status page exists at `https://myaadhaar.uidai.gov.in/grievance-feedback-status/en`, but it tracks a complaint rather than filing one.

## C. Internal Functionality Report

Tested in Chromium against the real source (see section D for the method). Layout/CSS-dependent items could not be tested because Tailwind could not be compiled in the workspace.

| Area | Result | Detail |
|---|---|---|
| Header navigation (desktop) | Pass | All Portals / Government / Banking & Bills / Travel & Booking / Education & Jobs set the category and scroll to the directory. Bug fixed: switching category after choosing a sub-filter used to show 0 cards. |
| Mobile navigation menu | Pass | Opens, lists all five categories, filters and closes on tap (375 px wide viewport). |
| Hero search + Browse button | Pass | Typing filters live; Enter/Browse scrolls to results. |
| Ctrl+K shortcut | Fixed | The Search button advertised Ctrl+K but nothing listened for it. Ctrl/Cmd+K now focuses the search box. |
| Search: by name, category word, partial, case-insensitive, any word order | Pass | 'aadhaar', 'AADHAAR', 'aadh' → 40 each; 'recharge' → 3; 'download aadhaar' → matches. |
| Search: empty result and clear | Pass | 'zzzz' shows 'No matching portal found'; Reset Filters and Clear both restore all 66. |
| Category + search combination | Pass (by design) | While a search is active it searches all categories and ignores the category tab; category alone gives e.g. 7 travel services. |
| Category / sub-category filtering | Fixed | Stale sub-filter hid every card after an outside category change; now resets. |
| Hero quick-shortcut pills (8) | Pass | Every pill returns at least one result. |
| Service cards, Open Official Portal / Launch buttons | Pass | All 66 cards render; every external link opens in a new tab with `noopener noreferrer`; no empty or `#` links; all https. |
| Pin / favourites | Pass | Star toggles, stored in browser localStorage; Pinned shelf and header count work. |
| Document Requirements modal | Pass | Opens, ticks, closes; print button present. (Hooks-order issue fixed.) |
| Quick Access tiles | Pass | 8 tiles; URLs now come from the services list, not a second copy. |
| Footer links | Pass | Category links filter the directory; 5 portal links (now from the services list); Security & Privacy and Disclaimer modals open and close. |
| Visible disclaimer | Fixed | The 'independent directory, not an official government website' wording was only inside a modal; a short line now shows in the footer. |
| Contact number, WhatsApp, email, address, Google Maps, business hours | Not present | No such feature exists in the project. Nothing to test, nothing invented. |
| About Us, Privacy Policy, Terms & Conditions pages, social links | Not present | Only the Security & Privacy and Disclaimer modals exist. |
| Responsive layout (desktop/laptop/tablet/phone), no horizontal scroll, overlaps | Not verified | Needs the real Tailwind build. One cause of wrong layout was fixed (see D): the `xs` breakpoint used in 10 places was never defined. Please check visually at 375, 480–640, 768 and 1280 px. |

## D. Technical Testing Report

**Build status:** `npm run build` **not run** (workspace has no npm registry access and no shell on this computer). Substitute checks done instead:
- The whole source (all 10 components, data, `main.jsx`) bundled with esbuild with no errors; all imports resolve.
- All 77 distinct `lucide-react` icon names imported by the components were checked against the project's installed `lucide-react` 0.460.0 type file: none missing. The data file names 64 icons; the 61 used by services all exist in the icon map, and the other 3 (Landmark, LayoutGrid, PlaneTakeoff) are category icons imported directly.
- 25 behaviour checks run in Chromium (Playwright) against the original source and the fixed source. Original: 5 failed. Fixed: 25 of 25 pass. The 44 links rendered on the page match the 44 URLs in the config exactly.

**Console errors / React warnings:** none during the tests. Caveat: the test harness used React 19 and stub icons; the project uses React 18. Check the browser console once on the real build.  
**Network errors in the app:** the app makes no API calls. It loads Google Fonts from `fonts.googleapis.com` (not exercised in the harness).

**Bugs fixed**

| Bug | Fix |
|---|---|
| Ctrl+K advertised, not implemented | Added key handler in `Header.jsx` |
| Sub-category filter stayed selected when category changed from header/footer/hero, giving 0 results | `CategorySection.jsx` resets it when the category changes |
| Hard-coded counts ("54+", "All 54 Portals", "50+", "45+") while the directory has 66 services | Counts now computed from the services list (`serviceStats`) |
| Footer had 5 URLs typed in by hand (one differed from the services list); Quick Access tiles had a second copy of 8 URLs | Both now read from `servicesData.js` by service id |
| `xs:` breakpoint used 10 times but undefined in `tailwind.config.js`, so those styles never applied (e.g. 2-column Popular grid, header 'Quick Access' badge) | Defined `xs: 480px` (screen list kept in order) |
| `shadow-xs`, `shadow-2xs`, `backdrop-blur-xs` (Tailwind v4 names) used with Tailwind 3.4.19, so they produced no CSS | Defined in the Tailwind config |
| `rel="noopener"` only | Now `noopener noreferrer` on all external links |
| Checklist modal called `useState` after an early return (rules of hooks) | Moved above the return |
| 3 wrong/broken service URLs, outdated 'Form 49A' text | See section A |
| 'Official Portals 100%' / '100% Direct Sovereign Links' wording although some links go to authorized private providers (Jio, LIC, SBI, NBBL) | Reworded to 'Official / Authorized Links' |
| Link verification data did not exist | `src/data/linkVerification.js` added; each service now carries `link: { status, note }` |

**Files changed:** `src/data/servicesData.js`, `src/data/linkVerification.js` (new), `tailwind.config.js`, and in `src/components/`: `Header`, `Hero`, `PopularServices`, `CategorySection`, `Footer`, `ServiceCard`, `PinnedShortcuts`, `QuickAccessPortals`, `DocumentChecklistModal`.  
The existing `servicesData.js` was kept as the central config (rather than creating a second file such as `services.js`). No service was removed.

**Remaining issues**
- Production build and visual/responsive check not done (above).
- `animate-in`, `fade-in`, `zoom-in-95`, `slide-in-from-top-2` classes need the `tailwindcss-animate` plugin, which is not installed; the pop-up animations do nothing. Harmless; install the plugin if you want them.
- `offlineServices` in `servicesData.js` (printing, lamination, etc. with prices) is never displayed. It looks like content for a shop-services section that was not built.
- Brand mismatch: the site is branded "Chandu" (page title, header, footer, `package.json`), not "Digital Seva & Online Service Center".
- 16 services flagged for manual verification (section B).

## Security and legal check

- The site has no forms, no password/OTP/Aadhaar/PAN fields and no backend. The only text input is the search box (not stored). Only pinned service ids are kept in the visitor's own browser localStorage.
- Document lists mention Aadhaar/PAN only as items the visitor should have ready; nothing is requested or stored.
- No government logos or emblems are used (only generic icons).
- All 44 external links are https and open in a new tab with `noopener noreferrer`.
- The independent-directory disclaimer is now shown in the footer as well as in the modal.
- Banking: money-transfer, bill and recharge services point to Bharat Connect (NBBL), Jio, IHMCL, LIC and SBI Collect. These are named operators, but several land on a corporate homepage rather than a payment page (see B). The brief asks for authorised providers only, so the owner should confirm which provider each of those tiles should name.

## E. Final Recommendations

**Manual verification still needed (16 services)**
1. Run `npm run build`, then open the site at phone, tablet and desktop widths and check the console.
2. Andhra Pradesh caste / income / residence certificates: confirm the AP portal (AP Seva `vswsonline.ap.gov.in` or MeeSeva `ap.meeseva.gov.in`) in your own browser, then update those three entries in `servicesData.js`.
3. Aadhaar bank-seeding status, VID generator, file complaint: sign in once and confirm what these pages offer; replace the URLs if needed.
4. Money transfer, electricity, water, DTH, FASTag, mobile recharge: decide the provider each tile should open (a payment page, not a corporate homepage). Mobile recharge is Jio-only while the text lists four operators.
5. Download Driving Licence & RC: find the specific Parivahan/DigiLocker page; the link opens the Parivahan home page.
6. Scholarships (NSP) and CUET/NTA: open in your own browser and confirm; they could not be opened from the test browser.
7. Travel itinerary print: IRCTC booked-ticket history needs a login; confirm the right page.
8. PF UAN Activation: the EPFO banner says activation is done through the UMANG app; update the description if so.

**To make this match the brief:** supply the shop name, phone, WhatsApp number, email, address, map link, opening hours and social links so a Contact section and About/Privacy/Terms pages can be added with real details.

**Reliability**
- Re-check every service link each quarter. Government portals change routes often (the Aadhaar download and status paths had both moved). Update `linkVerification.js` after each check.
- Consider a scheduled link-check script in CI (it must run from a normal network; many government sites block cloud IP ranges).
- Use `npm ci` in `.github/workflows/deploy.yml` for repeatable builds.
- Replace the hard-coded `README.md` claims ('100% Direct Official Sovereign Links', '66+ Verified') with wording that matches the verification status.
