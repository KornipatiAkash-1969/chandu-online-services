// Centralized Configuration for All Online Services
// All URLs link directly to official government portals or authorized service providers.
// Every service URL lives in this file only. Components read it through the helpers
// exported at the bottom (servicesData, quickAccessPortals, footerPortals, serviceStats).
// Verification status of each URL is kept in ./linkVerification.js.

import { linkVerification } from './linkVerification';

const baseCategories = [
  {
    id: "all",
    label: "All Services",
    icon: "LayoutGrid",
    description: "Browse all 45+ citizen, financial, travel and educational online services"
  },
  {
    id: "government",
    label: "Government Services",
    icon: "Landmark",
    description: "Official identity documents, certificates, licences, and welfare schemes",
    subcategories: [
      "Aadhaar Services",
      "PAN Card Services",
      "Voter ID Services",
      "Certificates (Caste/Income/Residence)",
      "Passport Services",
      "Driving & Vehicle Licences",
      "Ration Card Services",
      "PF & Pension Services",
      "Birth & Death Certificates"
    ]
  },
  {
    id: "banking",
    label: "Banking & Financial",
    icon: "Building2",
    description: "Utility bill payments, direct money transfers, recharge, and banking assistance",
    subcategories: [
      "Utility & Bill Payments",
      "Recharge & FASTag",
      "Insurance & Banking Support"
    ]
  },
  {
    id: "travel",
    label: "Travel & Booking",
    icon: "PlaneTakeoff",
    description: "Train, bus, flight reservations, PNR status, and itinerary management",
    subcategories: [
      "Railway Services",
      "Bus & Flights",
      "Hotels & Travel Tools"
    ]
  },
  {
    id: "education",
    label: "Education Services",
    icon: "GraduationCap",
    description: "Exam admissions, job recruitment, scholarships, results, and fee payments",
    subcategories: [
      "Competitive Exams & Jobs",
      "Scholarships & Admissions",
      "Results & Fee Payments"
    ]
  }
];

const baseServices = [
  // ==========================================
  // GOVERNMENT SERVICES - AADHAAR (UIDAI OFFICIAL PORTAL)
  // ==========================================
  {
    id: "aadhaar-uidai-portal",
    title: "UIDAI Official Portal",
    shortDesc: "Official Unique Identification Authority of India (UIDAI) portal for all citizen Aadhaar services, updates, and guidelines.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://uidai.gov.in/en/",
    icon: "Fingerprint",
    isPopular: true,
    badge: "Official Main Portal",
    documentsRequired: [
      "12-digit Aadhaar Card Number",
      "Registered Mobile Number for OTP Verification"
    ]
  },
  {
    id: "aadhaar-download",
    title: "Aadhaar Card Download",
    shortDesc: "Download digitally signed and password-protected electronic Aadhaar PDF card (e-Aadhaar).",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaarbeta.uidai.gov.in/genericDownloadAadhaar/en",
    icon: "Download",
    isPopular: true,
    badge: "Direct Download",
    documentsRequired: [
      "12-digit Aadhaar Number or 28-digit Enrollment ID",
      "Registered Mobile Number for OTP Verification"
    ]
  },
  {
    id: "aadhaar-mobile-update",
    title: "Aadhaar Phone / Mobile Update",
    shortDesc: "Guidelines and appointment slot booking to link or update your mobile phone number in Aadhaar at nearest Seva Kendra.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://bookappointment.uidai.gov.in/",
    icon: "Smartphone",
    isPopular: true,
    badge: "Book Update Slot",
    documentsRequired: [
      "12-digit Aadhaar Card Number",
      "New Mobile / Phone Number to be linked",
      "Biometric Verification (Fingerprint/Iris scan at Seva Kendra)",
      "No identity/address proof documents required for mobile update",
      "Govt fee: ₹50"
    ]
  },
  {
    id: "aadhaar-appointment",
    title: "Book an Appointment",
    shortDesc: "Book online appointment slot at nearest Aadhaar Seva Kendra (ASK) for fresh enrollment, biometric or child update.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://bookappointment.uidai.gov.in/",
    icon: "CalendarCheck",
    isPopular: true,
    badge: "Book ASK Slot",
    documentsRequired: [
      "Mobile number for appointment OTP",
      "Proof of Identity (POI) & Proof of Address (POA)",
      "Date of birth proof"
    ]
  },
  {
    id: "aadhaar-pvc",
    title: "Order Aadhaar PVC Card",
    shortDesc: "Order a durable plastic Aadhaar PVC card on the official myAadhaar portal (Aadhaar OTP required); it is delivered by post.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaarbeta.uidai.gov.in/pvc/en",
    icon: "CreditCard",
    isPopular: true,
    badge: "Order Online (₹75)",
    documentsRequired: [
      "12-digit Aadhaar Number or 16-digit Virtual ID (VID)",
      "Registered Mobile Number for OTP Login",
      "Online payment of the ₹75 fee shown on the official page (UPI, Net Banking, or Card)",
      "Steps: Click 'Open Official Portal' -> Enter your Aadhaar number or VID and verify with the OTP -> Complete the payment"
    ]
  },
  {
    id: "aadhaar-pvc-status",
    title: "Check PVC Card Status",
    shortDesc: "Track printing and Speed Post dispatch status of your ordered PVC card using the 28-digit Service Request Number (SRN).",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaarbeta.uidai.gov.in/checkStatus/en",
    icon: "Clock",
    isPopular: false,
    badge: "Track Dispatch",
    documentsRequired: [
      "28-digit Service Request Number (SRN)",
      "Aadhaar Number & Captcha"
    ]
  },
  {
    id: "aadhaar-status",
    title: "Check Enrolment & Update Status",
    shortDesc: "Check whether your recent Aadhaar update or new enrollment has been generated using Enrolment ID (EID) or URN.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaarbeta.uidai.gov.in/CheckAadhaarStatus/en",
    icon: "RotateCw",
    isPopular: false,
    badge: "Track EID / URN",
    documentsRequired: [
      "28-digit Enrolment ID (14 digit EID + 14 digit Date & Time stamp)",
      "Captcha verification"
    ]
  },
  {
    id: "aadhaar-document-update",
    title: "Aadhaar Document Update",
    shortDesc: "Log in with Aadhaar OTP on myAadhaar to upload and update your Proof of Identity (POI) and Proof of Address (POA) online.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaar.uidai.gov.in/du/en_IN",
    icon: "FileCheck",
    isPopular: true,
    badge: "Free Online Update",
    documentsRequired: [
      "Proof of Identity document (Voter ID, PAN, Driving Licence, Passport)",
      "Proof of Address document (Electricity bill, Bank passbook, Ration card)",
      "Aadhaar OTP mobile",
      "Steps: Click 'Open Official Portal' -> Sign in with Aadhaar + OTP when asked -> Upload your identity and address documents"
    ]
  },
  {
    id: "aadhaar-verify-mobile",
    title: "Verify Phone Number & Email",
    shortDesc: "Check and verify whether your mobile phone number and email address are linked and authenticated in UIDAI records.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaarbeta.uidai.gov.in/verify-email-mobile/en",
    icon: "ShieldCheck",
    isPopular: false,
    badge: "Verify Mobile/Email",
    documentsRequired: [
      "12-digit Aadhaar Number",
      "Mobile number or email you wish to verify",
      "Captcha verification code"
    ]
  },
  {
    id: "aadhaar-bank-status",
    title: "Check Bank Seeding Status",
    shortDesc: "Check which bank account is actively seeded with your Aadhaar for Direct Benefit Transfer (DBT) government subsidies.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaar.uidai.gov.in/bank-seeding-status",
    icon: "Building2",
    isPopular: true,
    badge: "NPCI Bank Mapping",
    documentsRequired: [
      "12-digit Aadhaar Number",
      "Aadhaar Registered Mobile OTP"
    ]
  },
  {
    id: "aadhaar-locate",
    title: "Locate Enrolment Center",
    shortDesc: "Find official bank, post office, and ASK Aadhaar centres near you by state, district, or 6-digit PIN code.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://bhuvan-app3.nrsc.gov.in/aadhaar/",
    icon: "MapPin",
    isPopular: false,
    badge: "Bhuvan Locator",
    documentsRequired: [
      "State / District or 6-digit Area PIN Code"
    ]
  },
  {
    id: "aadhaar-retrieve",
    title: "Retrieve Lost EID / UID",
    shortDesc: "Retrieve lost or forgotten 12-digit Aadhaar number or 28-digit enrollment ID directly on your mobile via SMS.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaarbeta.uidai.gov.in/retrieve-eid-uid/en",
    icon: "Search",
    isPopular: false,
    badge: "Recover UID / EID",
    documentsRequired: [
      "Full Name (as per Aadhaar record)",
      "Registered Mobile Number or Email ID",
      "Captcha verification"
    ]
  },
  {
    id: "aadhaar-lock",
    title: "Lock / Unlock Biometrics",
    shortDesc: "Log in with Aadhaar OTP on myAadhaar to securely lock or unlock your fingerprint, face, and iris biometrics.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaarbeta.uidai.gov.in/lock-unlock-biometrics/en",
    icon: "Lock",
    isPopular: false,
    badge: "Biometric Security",
    documentsRequired: [
      "12-digit Aadhaar Number or 16-digit Virtual ID",
      "Aadhaar Registered Mobile for OTP Login",
      "Steps: Click 'Open Official Portal' -> Verify with Aadhaar + OTP -> Choose Lock or Unlock"
    ]
  },
  {
    id: "aadhaar-vid",
    title: "Virtual ID (VID) Generator",
    shortDesc: "Generate or retrieve a 16-digit temporary Virtual ID (VID) for authentication without disclosing your Aadhaar number.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaarbeta.uidai.gov.in/genericGenerateOrRetrieveVID/",
    icon: "KeyRound",
    isPopular: false,
    badge: "16-digit VID",
    documentsRequired: [
      "12-digit Aadhaar Number",
      "Aadhaar Registered Mobile for OTP"
    ]
  },
  {
    id: "aadhaar-complaint",
    title: "File Complaint & Feedback",
    shortDesc: "Register a complaint or track resolution status regarding Aadhaar enrolment, update delays, or operator charges.",
    category: "government",
    subCategory: "Aadhaar Services",
    authority: "UIDAI (Govt. of India)",
    officialUrl: "https://myaadhaar.uidai.gov.in/file-complaint",
    icon: "FileHeart",
    isPopular: false,
    badge: "Official Grievance",
    documentsRequired: [
      "Complaint details / 28-digit Enrolment ID (EID) or URN",
      "Mobile number and Email ID"
    ]
  },

  // ==========================================
  // GOVERNMENT SERVICES - PAN CARD
  // ==========================================
  {
    id: "pan-new",
    title: "New PAN Card Application",
    shortDesc: "Apply for a fresh 10-digit Permanent Account Number (Form 93) with paperless digital e-KYC.",
    category: "government",
    subCategory: "PAN Card Services",
    authority: "Protean / NSDL (Income Tax Dept)",
    officialUrl: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
    icon: "FileBadge",
    isPopular: true,
    badge: "Instant e-PAN",
    documentsRequired: [
      "Aadhaar Card (with updated mobile number)",
      "Passport size photographs",
      "Signature on plain white paper"
    ]
  },
  {
    id: "pan-correction",
    title: "PAN Card Correction & Reprint",
    shortDesc: "Request name correction, date of birth change, father's name update, or reprint lost PAN card.",
    category: "government",
    subCategory: "PAN Card Services",
    authority: "Protean / UTIITSL",
    officialUrl: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
    icon: "FilePenLine",
    isPopular: true,
    badge: "Official Portal",
    documentsRequired: [
      "Existing PAN Card Number",
      "Aadhaar Card",
      "Supporting proof for requested correction (e.g. Matriculation mark sheet)"
    ]
  },
  {
    id: "pan-download",
    title: "Download e-PAN Card",
    shortDesc: "Download official digitally signed e-PAN PDF issued by Income Tax Department using your Aadhaar number.",
    category: "government",
    subCategory: "PAN Card Services",
    authority: "Income Tax Department (e-Filing)",
    officialUrl: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan",
    icon: "FileDown",
    isPopular: true,
    badge: "Official e-Filing",
    documentsRequired: [
      "12-digit Aadhaar Number or 10-digit PAN",
      "Aadhaar Linked Mobile Number (for instant OTP verification)"
    ]
  },
  {
    id: "pan-aadhaar-link",
    title: "Link Aadhaar with PAN",
    shortDesc: "Check status and complete mandatory Aadhaar-PAN linkage on Income Tax e-Filing portal.",
    category: "government",
    subCategory: "PAN Card Services",
    authority: "Income Tax Department",
    officialUrl: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar",
    icon: "Link2",
    isPopular: true,
    badge: "Mandatory Tax Compliance",
    documentsRequired: [
      "10-digit PAN Number",
      "12-digit Aadhaar Number",
      "Name & DOB matching in both records"
    ]
  },
  {
    id: "pan-utiitsl",
    title: "UTIITSL PAN Portal & e-PAN",
    shortDesc: "Access UTIITSL portal for PAN verification, e-PAN download, reprint, and tracking UTIITSL applications.",
    category: "government",
    subCategory: "PAN Card Services",
    authority: "UTIITSL Portal",
    officialUrl: "https://www.pan.utiitsl.com/",
    icon: "FileCheck2",
    isPopular: false,
    badge: "Official UTIITSL",
    documentsRequired: [
      "PAN Number or Application Coupon Number",
      "Date of birth / Incorporation",
      "Registered Mobile / Email for OTP"
    ]
  },

  // ==========================================
  // GOVERNMENT SERVICES - VOTER ID
  // ==========================================
  {
    id: "voter-new",
    title: "New Voter ID Registration (Form 6)",
    shortDesc: "Apply for a new voter card if you have turned 18 or never registered in the electoral roll.",
    category: "government",
    subCategory: "Voter ID Services",
    authority: "Election Commission of India",
    officialUrl: "https://voters.eci.gov.in/",
    icon: "UserCheck",
    isPopular: true,
    badge: "Form 6",
    documentsRequired: [
      "Recent passport photograph",
      "Proof of Age (Birth cert, Aadhaar, 10th marksheet, PAN)",
      "Proof of Residence (Electricity bill, Ration card, Bank passbook)"
    ]
  },
  {
    id: "voter-correction",
    title: "Voter ID Correction & Shifting (Form 8)",
    shortDesc: "Update name, address, photo, epic number or change constituency due to relocation.",
    category: "government",
    subCategory: "Voter ID Services",
    authority: "Election Commission of India",
    officialUrl: "https://voters.eci.gov.in/",
    icon: "UserCog",
    isPopular: false,
    badge: "Form 8",
    documentsRequired: [
      "Existing EPIC Number",
      "Aadhaar Number",
      "Supporting document for change"
    ]
  },
  {
    id: "voter-download",
    title: "Download e-EPIC Digital Voter Card",
    shortDesc: "Download official non-editable digital voter card in PDF format directly to your phone or computer.",
    category: "government",
    subCategory: "Voter ID Services",
    authority: "Election Commission of India",
    officialUrl: "https://voters.eci.gov.in/",
    icon: "DownloadCloud",
    isPopular: true,
    badge: "Digital e-EPIC",
    documentsRequired: [
      "EPIC Number or Form Reference Number",
      "Mobile number registered with Voter ID"
    ]
  },

  // ==========================================
  // GOVERNMENT SERVICES - CERTIFICATES
  // ==========================================
  {
    id: "caste-certificate",
    title: "Caste Certificate Application",
    shortDesc: "Apply for SC / ST / OBC / EWS community certificate through Government of India's ServicePlus national portal.",
    category: "government",
    subCategory: "Certificates (Caste/Income/Residence)",
    authority: "National Informatics Centre (NIC) / ServicePlus",
    officialUrl: "https://serviceonline.gov.in/",
    icon: "Award",
    isPopular: true,
    badge: "ServicePlus NIC",
    documentsRequired: [
      "Aadhaar Card of Applicant",
      "Parent's / Family Caste Certificate or Land records (Khasra/Khatauni)",
      "Ration Card or Parivar Register copy",
      "Self-Declaration Affidavit"
    ]
  },
  {
    id: "income-certificate",
    title: "Income Certificate Application",
    shortDesc: "Obtain official revenue income certificate required for scholarships, fee concessions, and government welfare schemes.",
    category: "government",
    subCategory: "Certificates (Caste/Income/Residence)",
    authority: "National Informatics Centre (NIC) / ServicePlus",
    officialUrl: "https://serviceonline.gov.in/",
    icon: "ReceiptText",
    isPopular: true,
    badge: "ServicePlus NIC",
    documentsRequired: [
      "Salary Slip / ITR / Gram Pradhan verification / Patwari report",
      "Aadhaar Card & PAN Card",
      "Bank Account Statement (last 6 months)",
      "Ration Card"
    ]
  },
  {
    id: "residence-certificate",
    title: "Residence & Domicile Certificate",
    shortDesc: "Official proof of permanent residence / domicile in the state for admissions and government jobs.",
    category: "government",
    subCategory: "Certificates (Caste/Income/Residence)",
    authority: "National Informatics Centre (NIC) / ServicePlus",
    officialUrl: "https://serviceonline.gov.in/",
    icon: "Home",
    isPopular: true,
    badge: "ServicePlus NIC",
    documentsRequired: [
      "Aadhaar Card",
      "Electricity bill / Land registry / House tax receipt",
      "School leaving certificate showing years of schooling in state",
      "Passport size photograph"
    ]
  },

  // ==========================================
  // GOVERNMENT SERVICES - PASSPORT
  // ==========================================
  {
    id: "passport-new",
    title: "New Passport Application",
    shortDesc: "Apply for ordinary fresh Indian Passport (36/60 pages) via official Passport Seva portal.",
    category: "government",
    subCategory: "Passport Services",
    authority: "Ministry of External Affairs (MEA)",
    officialUrl: "https://www.passportindia.gov.in/",
    icon: "BookOpenCheck",
    isPopular: false,
    badge: "Official MEA Portal",
    documentsRequired: [
      "Proof of Date of Birth (Aadhaar, Birth Certificate, School Certificate)",
      "Proof of Identity & Address (Aadhaar, Voter ID, Bank Passbook)",
      "Annexures / Non-ECR Proof (10th/12th/Degree certificate for Non-ECR)"
    ]
  },
  {
    id: "passport-renewal",
    title: "Passport Renewal / Re-issue",
    shortDesc: "Re-issue expired passport, passport exhausted of pages, or damaged/lost passport.",
    category: "government",
    subCategory: "Passport Services",
    authority: "Ministry of External Affairs (MEA)",
    officialUrl: "https://www.passportindia.gov.in/",
    icon: "RefreshCw",
    isPopular: false,
    badge: "Fast Re-issue",
    documentsRequired: [
      "Old Original Passport with self-attested copies of first 2 and last 2 pages",
      "Current address proof if changed",
      "Passport Seva portal login credentials"
    ]
  },
  {
    id: "passport-appointment",
    title: "Passport Appointment & Status Check",
    shortDesc: "Check available appointment slots at nearest PSK / POPSK and track real-time application file status.",
    category: "government",
    subCategory: "Passport Services",
    authority: "Ministry of External Affairs (MEA)",
    officialUrl: "https://www.passportindia.gov.in/",
    icon: "Calendar",
    isPopular: false,
    badge: "Slot Availability",
    documentsRequired: [
      "Passport Application File Reference Number (ARN)",
      "Applicant Date of Birth"
    ]
  },

  // ==========================================
  // GOVERNMENT SERVICES - DRIVING LICENCE
  // ==========================================
  {
    id: "licence-learner",
    title: "Learner's Licence (LL) Application",
    shortDesc: "Apply online for motorcycle, car, or commercial vehicle learner licence with Aadhaar-based test.",
    category: "government",
    subCategory: "Driving & Vehicle Licences",
    authority: "Ministry of Road Transport (Parivahan)",
    officialUrl: "https://sarathi.parivahan.gov.in/",
    icon: "Car",
    isPopular: true,
    badge: "Contactless Online Test",
    documentsRequired: [
      "Aadhaar Card (Aadhaar authenticated for online LL test)",
      "Age Proof (10th Marks Sheet, Birth Cert)",
      "Form 1 (Self-declaration of physical fitness)",
      "Passport size photo & signature"
    ]
  },
  {
    id: "licence-permanent",
    title: "Permanent Driving Licence (DL)",
    shortDesc: "Apply for driving licence test slot after holding an active learner licence for at least 30 days.",
    category: "government",
    subCategory: "Driving & Vehicle Licences",
    authority: "Parivahan Sarathi",
    officialUrl: "https://sarathi.parivahan.gov.in/",
    icon: "ShieldCheck",
    isPopular: true,
    badge: "Official Sarathi",
    documentsRequired: [
      "Valid Learner Licence Number",
      "Application fee receipt",
      "Slot booking confirmation slip"
    ]
  },
  {
    id: "licence-renewal",
    title: "Driving Licence Renewal & Services",
    shortDesc: "Renew expired driving licence, change address, or add endorsement for hazardous / heavy vehicles.",
    category: "government",
    subCategory: "Driving & Vehicle Licences",
    authority: "Parivahan Sarathi",
    officialUrl: "https://sarathi.parivahan.gov.in/",
    icon: "RotateCw",
    isPopular: false,
    badge: "Online Renewal",
    documentsRequired: [
      "Original Driving Licence",
      "Medical Certificate (Form 1A) for applicants over 40 yrs",
      "Address proof & passport photo"
    ]
  },
  {
    id: "licence-download",
    title: "Download Driving Licence & RC",
    shortDesc: "Download verified digital Driving Licence and Vehicle RC via DigiLocker / Parivahan portal.",
    category: "government",
    subCategory: "Driving & Vehicle Licences",
    authority: "MoRTH / DigiLocker",
    officialUrl: "https://parivahan.gov.in/",
    icon: "FileCheck2",
    isPopular: false,
    badge: "Legally Valid",
    documentsRequired: [
      "DL Number or Vehicle Registration Number + Chassis last 5 digits",
      "DigiLocker / Aadhaar linked Mobile OTP"
    ]
  },

  // ==========================================
  // GOVERNMENT SERVICES - RATION CARD
  // ==========================================
  {
    id: "ration-new",
    title: "New Ration Card Application",
    shortDesc: "Apply for BPL, APL, Antyodaya (AAY), or NFSA Priority Household ration card in your state.",
    category: "government",
    subCategory: "Ration Card Services",
    authority: "National Food Security Portal (NFSA)",
    officialUrl: "https://nfsa.gov.in/portal/State_UT_Portals",
    icon: "Utensils",
    isPopular: false,
    badge: "NFSA Portal",
    documentsRequired: [
      "Aadhaar cards of all family members",
      "Income certificate or proof of income",
      "Electricity bill / Residence proof",
      "Bank passbook copy of female head of family",
      "Family group photograph"
    ]
  },
  {
    id: "ration-corrections",
    title: "Ration Card Corrections & Updates",
    shortDesc: "Correct names, update address, link Aadhaar with ration card, or change fair price shop.",
    category: "government",
    subCategory: "Ration Card Services",
    authority: "State Food & Civil Supplies",
    officialUrl: "https://nfsa.gov.in/portal/State_UT_Portals",
    icon: "ClipboardEdit",
    isPopular: false,
    badge: "State PDS",
    documentsRequired: [
      "Existing Ration Card Number",
      "Aadhaar cards of members needing correction",
      "Proof supporting requested change"
    ]
  },
  {
    id: "ration-members",
    title: "Ration Card Member Addition / Deletion",
    shortDesc: "Add newborn child, newly married bride, or remove deceased/separated family member.",
    category: "government",
    subCategory: "Ration Card Services",
    authority: "State Food & Civil Supplies",
    officialUrl: "https://nfsa.gov.in/portal/State_UT_Portals",
    icon: "Users",
    isPopular: false,
    badge: "Family Registry",
    documentsRequired: [
      "For Addition: Birth certificate of child / Marriage certificate & Aadhaar",
      "For Deletion: Death certificate or Marriage transfer certificate"
    ]
  },

  // ==========================================
  // GOVERNMENT SERVICES - PROVIDENT FUND (EPFO)
  // ==========================================
  {
    id: "pf-account",
    title: "EPFO Member Unified Portal",
    shortDesc: "Login to Employee Provident Fund portal to manage profile, KYC documents, and nominations.",
    category: "government",
    subCategory: "PF & Pension Services",
    authority: "EPFO (Ministry of Labour)",
    officialUrl: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
    icon: "Briefcase",
    isPopular: false,
    badge: "Official EPFO",
    documentsRequired: [
      "12-digit Universal Account Number (UAN)",
      "EPFO Member Password",
      "Mobile number linked to Aadhaar for 2FA"
    ]
  },
  {
    id: "pf-uan-activate",
    title: "UAN Activation Online",
    shortDesc: "Activate your Universal Account Number (UAN) to access online PF claims, passbooks, and balance.",
    category: "government",
    subCategory: "PF & Pension Services",
    authority: "EPFO",
    officialUrl: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
    icon: "KeyRound",
    isPopular: true,
    badge: "One-Time Activation",
    documentsRequired: [
      "Click 'Activate UAN' on the right panel of the EPFO Member portal",
      "UAN Number or Member ID",
      "Aadhaar Number",
      "Name & Date of birth exactly matching Aadhaar",
      "Aadhaar registered mobile number"
    ]
  },
  {
    id: "pf-balance-passbook",
    title: "PF Balance Check & Passbook",
    shortDesc: "View and download complete Provident Fund passbook showing employer & employee contributions.",
    category: "government",
    subCategory: "PF & Pension Services",
    authority: "EPFO Passbook Portal",
    officialUrl: "https://passbook.epfindia.gov.in/MemberPassBook/Login",
    icon: "BookMarked",
    isPopular: true,
    badge: "Instant Passbook",
    documentsRequired: [
      "Activated UAN Number",
      "EPFO Password",
      "Captcha verification"
    ]
  },
  {
    id: "pf-withdrawal",
    title: "PF Online Withdrawal & Advance (Form 31/19/10C)",
    shortDesc: "Apply for PF advance (illness, house purchase, marriage) or final settlement after leaving employment.",
    category: "government",
    subCategory: "PF & Pension Services",
    authority: "EPFO Unified Portal",
    officialUrl: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
    icon: "BadgeDollarSign",
    isPopular: true,
    badge: "Direct Bank Transfer",
    documentsRequired: [
      "UAN linked with verified Aadhaar & PAN",
      "Bank Account seeded with IFSC and cancelled cheque copy",
      "Aadhaar OTP mobile"
    ]
  },

  // ==========================================
  // GOVERNMENT SERVICES - BIRTH & DEATH
  // ==========================================
  {
    id: "cert-birth",
    title: "Birth Certificate Application & Search",
    shortDesc: "Register new birth or search & download digitally certified birth record from Civil Registration System.",
    category: "government",
    subCategory: "Birth & Death Certificates",
    authority: "Registrar General of India (CRS)",
    officialUrl: "https://dc.crsorgi.gov.in/",
    icon: "Baby",
    isPopular: false,
    badge: "Official CRS Portal",
    documentsRequired: [
      "Hospital Discharge / Birth Slip",
      "Aadhaar cards of Parents",
      "Address proof of place of birth",
      "Marriage proof of parents (if requested)"
    ]
  },
  {
    id: "cert-death",
    title: "Death Certificate Application",
    shortDesc: "Apply for official death certificate or search registered records through Municipal / CRS portal.",
    category: "government",
    subCategory: "Birth & Death Certificates",
    authority: "Civil Registration System (CRS)",
    officialUrl: "https://dc.crsorgi.gov.in/",
    icon: "FileHeart",
    isPopular: false,
    badge: "Official Registry",
    documentsRequired: [
      "Doctor / Hospital Death summary slip or Cremation / Burial ground receipt",
      "Deceased person's Aadhaar / ID proof",
      "Applicant's ID proof & relation declaration"
    ]
  },

  // ==========================================
  // BANKING & FINANCIAL SERVICES
  // ==========================================
  {
    id: "fin-money-transfer",
    title: "Domestic Money Transfer (DMT)",
    shortDesc: "Instant 24x7 IMPS / NEFT cash-to-bank account money transfer anywhere across India.",
    category: "banking",
    subCategory: "Utility & Bill Payments",
    authority: "Authorized Bharat Connect / NPCI Network",
    officialUrl: "https://www.bharat-connect.com/",
    icon: "ArrowRightLeft",
    isPopular: true,
    badge: "Instant 24x7",
    documentsRequired: [
      "Receiver's Bank Account Number & IFSC code",
      "Sender's Mobile Number for Transaction OTP",
      "Bank Name and Beneficiary Name"
    ]
  },
  {
    id: "fin-electricity-bill",
    title: "Electricity Bill Payments",
    shortDesc: "Pay monthly electricity bills across all state DISCOMs with instant receipt and BBPS confirmation.",
    category: "banking",
    subCategory: "Utility & Bill Payments",
    authority: "Bharat Connect (NPCI)",
    officialUrl: "https://www.bharat-connect.com/",
    icon: "Zap",
    isPopular: true,
    badge: "Zero Late Surcharge",
    documentsRequired: [
      "Electricity Board / DISCOM Name",
      "Consumer Number (CA Number / Account ID / K Number)"
    ]
  },
  {
    id: "fin-water-bill",
    title: "Water Bill Payments",
    shortDesc: "Pay municipal water board and jal board bills online with instant digitally verified receipt.",
    category: "banking",
    subCategory: "Utility & Bill Payments",
    authority: "Bharat Connect (NPCI)",
    officialUrl: "https://www.bharat-connect.com/",
    icon: "Droplets",
    isPopular: false,
    badge: "Official Portal",
    documentsRequired: [
      "Water Board / Municipal Corporation Name",
      "Consumer Connection Number / K-Number"
    ]
  },
  {
    id: "fin-mobile-recharge",
    title: "Mobile Prepaid & Postpaid Recharge",
    shortDesc: "Instant talktime, data packs, and unlimited plan recharges for Jio, Airtel, Vi, and BSNL.",
    category: "banking",
    subCategory: "Recharge & FASTag",
    authority: "Telecom Service Providers",
    officialUrl: "https://www.jio.com/selfcare/recharge/mobility/",
    icon: "Smartphone",
    isPopular: true,
    badge: "Instant Cashback Plans",
    documentsRequired: [
      "10-digit Mobile Number",
      "Operator & Circle Name",
      "Selected Recharge Plan"
    ]
  },
  {
    id: "fin-dth-recharge",
    title: "DTH Satellite TV Recharge",
    shortDesc: "Recharge Tata Play, Airtel DTH, Dish TV, Sun Direct, and D2H satellite connections immediately.",
    category: "banking",
    subCategory: "Recharge & FASTag",
    authority: "DTH Providers / Bharat Connect",
    officialUrl: "https://www.bharat-connect.com/",
    icon: "Tv",
    isPopular: false,
    badge: "24x7 Activation",
    documentsRequired: [
      "DTH Subscriber ID / Viewing Card Number / Registered Mobile Number",
      "Amount / Package choice"
    ]
  },
  {
    id: "fin-fastag",
    title: "FASTag Toll Recharge",
    shortDesc: "Recharge NETC FASTag of any bank (SBI, Paytm, ICICI, HDFC, Kotak) to avoid 2x toll cash penalty.",
    category: "banking",
    subCategory: "Recharge & FASTag",
    authority: "IHMCL / NETC Portal",
    officialUrl: "https://www.ihmcl.co.in/",
    icon: "Tag",
    isPopular: false,
    badge: "National Electronic Toll",
    documentsRequired: [
      "Vehicle Registration Number (VRN)",
      "Issuing Bank Name (e.g. SBI, Paytm Payments, ICICI)",
      "UPI / Debit Card / Net Banking"
    ]
  },
  {
    id: "fin-insurance-premium",
    title: "Insurance Premium Payments (LIC & General)",
    shortDesc: "Pay Life Insurance (LIC) policy premiums and vehicle/health insurance with official acknowledgement.",
    category: "banking",
    subCategory: "Insurance & Banking Support",
    authority: "Life Insurance Corporation (LIC)",
    officialUrl: "https://licindia.in/",
    icon: "ShieldAlert",
    isPopular: false,
    badge: "Official LIC Portal",
    documentsRequired: [
      "Policy Number",
      "Date of Birth of Policyholder",
      "Premium Amount due"
    ]
  },
  {
    id: "fin-account-opening",
    title: "Bank Account Opening Online",
    shortDesc: "Open digital accounts via Pradhan Mantri Jan Dhan Yojana (PMJDY) or India Post Payments Bank (IPPB) with instant video e-KYC.",
    category: "banking",
    subCategory: "Insurance & Banking Support",
    authority: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    officialUrl: "https://pmjdy.gov.in/",
    icon: "Building",
    isPopular: false,
    badge: "Paperless e-KYC",
    documentsRequired: [
      "Aadhaar Card",
      "PAN Card (or Form 60)",
      "Registered Mobile Number for OTP"
    ]
  },
  {
    id: "fin-pan-financial",
    title: "Income Tax & Financial Services",
    shortDesc: "e-Verify returns, download Form 26AS, check TDS credit, and inspect tax filing status.",
    category: "banking",
    subCategory: "Insurance & Banking Support",
    authority: "Income Tax Department",
    officialUrl: "https://eportal.incometax.gov.in/",
    icon: "FileSpreadsheet",
    isPopular: false,
    badge: "e-Filing Portal",
    documentsRequired: [
      "PAN Number",
      "Income Tax Portal Password",
      "Bank Account details"
    ]
  },

  // ==========================================
  // TRAVEL & BOOKING SERVICES
  // ==========================================
  {
    id: "travel-train-booking",
    title: "IRCTC Train Ticket Booking",
    shortDesc: "Book confirmed General and Tatkal train tickets on Indian Railways through official IRCTC NextGen portal.",
    category: "travel",
    subCategory: "Railway Services",
    authority: "Indian Railway Catering and Tourism Corp (IRCTC)",
    officialUrl: "https://www.irctc.co.in/nget/train-search",
    icon: "Train",
    isPopular: true,
    badge: "Official IRCTC",
    documentsRequired: [
      "Traveler Names, Age, Gender, and Berth Preference",
      "Valid ID Proof (Aadhaar/Voter ID) to carry while traveling",
      "IRCTC User ID & Registered Mobile for OTP"
    ]
  },
  {
    id: "travel-pnr-status",
    title: "Train PNR Status Checking",
    shortDesc: "Check real-time coach number, berth allocation, and confirmation status of your railway ticket.",
    category: "travel",
    subCategory: "Railway Services",
    authority: "Indian Railways Passenger Enquiry",
    officialUrl: "https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html",
    icon: "SearchCheck",
    isPopular: true,
    badge: "Real-Time Berth Status",
    documentsRequired: [
      "10-digit PNR Number printed on the top-left of your train ticket"
    ]
  },
  {
    id: "travel-train-schedule",
    title: "Train Schedule & Live Running Status",
    shortDesc: "Track live train location, expected platform number, and delay timings via National Train Enquiry System.",
    category: "travel",
    subCategory: "Railway Services",
    authority: "National Train Enquiry System (NTES)",
    officialUrl: "https://enquiry.indianrail.gov.in/mntes/",
    icon: "Clock",
    isPopular: false,
    badge: "Official NTES Live",
    documentsRequired: [
      "Train Number or Train Name",
      "Journey Date"
    ]
  },
  {
    id: "travel-bus-booking",
    title: "State RTC & Private Bus Ticket Booking",
    shortDesc: "Book AC sleeper, Volvo, and luxury bus seats across all state roadways and certified operators.",
    category: "travel",
    subCategory: "Bus & Flights",
    authority: "IRCTC Bus Official Portal",
    officialUrl: "https://www.bus.irctc.co.in/",
    icon: "Bus",
    isPopular: false,
    badge: "Official IRCTC Bus",
    documentsRequired: [
      "Origin and Destination Station",
      "Date of travel",
      "Passenger Contact Mobile & Name"
    ]
  },
  {
    id: "travel-flight-booking",
    title: "Domestic & International Flight Booking",
    shortDesc: "Search best airfares, baggage rules, and book cheap flight tickets with web check-in assistance.",
    category: "travel",
    subCategory: "Bus & Flights",
    authority: "IRCTC Air / Authorized Airlines",
    officialUrl: "https://www.air.irctc.co.in/",
    icon: "Plane",
    isPopular: false,
    badge: "IRCTC Air Certified",
    documentsRequired: [
      "Government Photo ID (Aadhaar/Passport for domestic, Passport + Visa for international)",
      "Frequent flyer number (optional)"
    ]
  },
  {
    id: "travel-hotel-booking",
    title: "Hotel & Retiring Room Reservations",
    shortDesc: "Reserve IRCTC Railway retiring rooms, pilgrim guesthouses, and budget hotels across top destinations.",
    category: "travel",
    subCategory: "Hotels & Travel Tools",
    authority: "IRCTC Tourism",
    officialUrl: "https://www.irctctourism.com/",
    icon: "Hotel",
    isPopular: false,
    badge: "Official IRCTC Tourism",
    documentsRequired: [
      "Train PNR Number (for Railway Retiring Rooms)",
      "Govt ID Proof of primary guest"
    ]
  },
  {
    id: "travel-itinerary-print",
    title: "Travel Ticket & Itinerary Reprint",
    shortDesc: "Reprint booked train, bus, and flight tickets with QR codes and check electronic itinerary.",
    category: "travel",
    subCategory: "Hotels & Travel Tools",
    authority: "IRCTC / Travel Portals",
    officialUrl: "https://www.irctc.co.in/nget/train-search",
    icon: "Printer",
    isPopular: false,
    badge: "Official Portal",
    documentsRequired: [
      "PNR Number / Transaction ID / Registered Mobile"
    ]
  },

  // ==========================================
  // EDUCATION SERVICES
  // ==========================================
  {
    id: "edu-exam-applications",
    title: "Online Exam Applications (SSC / UPSC / IBPS)",
    shortDesc: "Assistance with filling online recruitment application forms for Central & State civil services and police.",
    category: "education",
    subCategory: "Competitive Exams & Jobs",
    authority: "SSC, UPSC & State PSCs",
    officialUrl: "https://ssc.gov.in/",
    icon: "PenTool",
    isPopular: true,
    badge: "OTR Portal",
    documentsRequired: [
      "10th, 12th, and Graduation mark sheets & passing certificates",
      "Scanned photo & signature (as per exact KB & DPI specification)",
      "Caste / EWS certificate (if applicable)",
      "Valid Email ID and Mobile number"
    ]
  },
  {
    id: "edu-govt-jobs",
    title: "Government Job Notifications & Apply",
    shortDesc: "Browse latest vacancies, age criteria, notifications, and apply via National Career Service portal.",
    category: "education",
    subCategory: "Competitive Exams & Jobs",
    authority: "National Career Service (NCS - MoLE)",
    officialUrl: "https://www.ncs.gov.in/",
    icon: "BriefcaseBusiness",
    isPopular: false,
    badge: "Official NCS Portal",
    documentsRequired: [
      "Updated Resume / Bio-data",
      "Educational qualification certificates",
      "Experience certificates (if any)"
    ]
  },
  {
    id: "edu-hall-tickets",
    title: "Hall Ticket & Admit Card Downloads",
    shortDesc: "Print admit cards for board exams, university semester exams, and state/national competitive tests.",
    category: "education",
    subCategory: "Competitive Exams & Jobs",
    authority: "Exam Conducting Bodies",
    officialUrl: "https://ssc.gov.in/",
    icon: "Ticket",
    isPopular: true,
    badge: "Instant Print",
    documentsRequired: [
      "Registration Number / Roll Number",
      "Date of Birth / Candidate Password"
    ]
  },
  {
    id: "edu-results",
    title: "Results Checking (Board & Competitive)",
    shortDesc: "Check official board examination results (CBSE and other boards) and national scorecards on the Government of India DigiLocker results portal.",
    category: "education",
    subCategory: "Results & Fee Payments",
    authority: "CBSE / DigiLocker (Govt. of India)",
    officialUrl: "https://results.digilocker.gov.in/",
    icon: "FileCheck",
    isPopular: true,
    badge: "Official Results Portal",
    documentsRequired: [
      "Exam Roll Number",
      "School / Center code (as given on admit card)",
      "Date of birth"
    ]
  },
  {
    id: "edu-scholarships",
    title: "National Scholarship Portal (NSP)",
    shortDesc: "Apply for Pre-Matric, Post-Matric, Merit-cum-Means, and Central Sector government scholarships.",
    category: "education",
    subCategory: "Scholarships & Admissions",
    authority: "Ministry of Electronics & IT (NSP)",
    officialUrl: "https://scholarships.gov.in/",
    icon: "GraduationCap",
    isPopular: true,
    badge: "Direct DBT Scholarship",
    documentsRequired: [
      "Aadhaar Card linked to Bank Account (NPCI mapped)",
      "Previous year academic mark sheet (min 50-60% marks)",
      "Current fee receipt & Bonafide certificate from school/college",
      "Family Income Certificate & Caste Certificate"
    ]
  },
  {
    id: "edu-college-admissions",
    title: "College Admissions & CUET Registration",
    shortDesc: "Common University Entrance Test (CUET UG/PG) and state university central admission portal filling.",
    category: "education",
    subCategory: "Scholarships & Admissions",
    authority: "National Testing Agency (NTA)",
    officialUrl: "https://exams.nta.ac.in/",
    icon: "School",
    isPopular: false,
    badge: "Official NTA",
    documentsRequired: [
      "Class 10th & 12th Board marksheet",
      "Category certificate (SC/ST/OBC-NCL/EWS)",
      "Scanned passport photo & signature"
    ]
  },
  {
    id: "edu-abc-apaar",
    title: "Academic Bank of Credits (ABC / APAAR ID)",
    shortDesc: "Create 12-digit One Nation One Student ID (APAAR ID) to store university credits digitally via DigiLocker.",
    category: "education",
    subCategory: "Scholarships & Admissions",
    authority: "Ministry of Education (ABC / DigiLocker)",
    officialUrl: "https://www.abc.gov.in/",
    icon: "FileBadge2",
    isPopular: false,
    badge: "One Nation One Student",
    documentsRequired: [
      "Aadhaar Number",
      "College / University Student ID / Roll Number",
      "Aadhaar Linked Mobile OTP"
    ]
  },
  {
    id: "edu-fee-payments",
    title: "Online Exam & University Fee Payments",
    shortDesc: "Submit college tuition fees, exam fees, and recruitment application fees securely via State Bank Collect.",
    category: "education",
    subCategory: "Results & Fee Payments",
    authority: "State Bank Collect (SBI)",
    officialUrl: "https://sbcollect.sbi.bank.in/sbicollect/icollecthome.htm",
    icon: "CreditCard",
    isPopular: false,
    badge: "SBI Collect Portal",
    documentsRequired: [
      "Institution Name & State",
      "Student Enrollment / Roll / Registration Number",
      "UPI / Net Banking / Debit Card"
    ]
  }
];

// Quick Access Portals for frequently accessed high-traffic destinations
const baseQuickAccess = [
  {
    name: "UIDAI Official Portal",
    dept: "UIDAI, Govt of India",
    serviceId: "aadhaar-uidai-portal",
    icon: "Fingerprint",
    badge: "Identity",
    color: "from-blue-600 to-indigo-700"
  },
  {
    name: "Parivahan Sarathi",
    dept: "MoRTH, Road Transport",
    serviceId: "licence-learner",
    icon: "Car",
    badge: "Transport",
    color: "from-sky-600 to-cyan-700"
  },
  {
    name: "NSDL / Protean PAN",
    dept: "Income Tax Department",
    serviceId: "pan-new",
    icon: "FileBadge",
    badge: "Taxation",
    color: "from-blue-700 to-indigo-800"
  },
  {
    name: "Voters Service Portal",
    dept: "Election Commission of India",
    serviceId: "voter-new",
    icon: "UserCheck",
    badge: "Elections",
    color: "from-emerald-600 to-teal-700"
  },
  {
    name: "EPFO Member Portal",
    dept: "Ministry of Labour",
    serviceId: "pf-account",
    icon: "Briefcase",
    badge: "PF & Pension",
    color: "from-amber-600 to-orange-700"
  },
  {
    name: "IRCTC NextGen",
    dept: "Indian Railways",
    serviceId: "travel-train-booking",
    icon: "Train",
    badge: "Railway",
    color: "from-red-600 to-rose-700"
  },
  {
    name: "National Scholarship",
    dept: "Govt of India (NSP)",
    serviceId: "edu-scholarships",
    icon: "GraduationCap",
    badge: "Scholarships",
    color: "from-purple-600 to-violet-700"
  },
  {
    name: "Bharat Connect",
    dept: "NPCI Network",
    serviceId: "fin-electricity-bill",
    icon: "Zap",
    badge: "Utilities",
    color: "from-teal-600 to-emerald-700"
  }
];

// ------------------------------------------------------------------
// Derived exports (do not hard-code URLs or counts anywhere else)
// ------------------------------------------------------------------

// All services, each carrying its link-verification metadata
export const servicesData = baseServices.map((service) => ({
  ...service,
  link: linkVerification[service.id] || { status: 'unverified', note: '' }
}));

export const getService = (id) => servicesData.find((s) => s.id === id);

export const getServiceUrl = (id) => {
  const service = getService(id);
  if (!service) {
    throw new Error(`servicesData.js: unknown service id "${id}"`);
  }
  return service.officialUrl;
};

// Live counts used in headings and badges
export const serviceStats = {
  total: servicesData.length,
  byCategory: servicesData.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1;
    return acc;
  }, {})
};

export const categories = baseCategories.map((cat) =>
  cat.id === 'all'
    ? { ...cat, description: `Browse all ${serviceStats.total} citizen, financial, travel and educational online services` }
    : cat
);

// Quick access tiles: URL comes from the referenced service
export const quickAccessPortals = baseQuickAccess.map((portal) => ({
  ...portal,
  url: getServiceUrl(portal.serviceId)
}));

// Footer "Official Portals" list: URL comes from the referenced service
export const footerPortals = [
  { label: 'UIDAI Official Portal', serviceId: 'aadhaar-uidai-portal' },
  { label: 'ECI Voters Service', serviceId: 'voter-new' },
  { label: 'Parivahan Sarathi (DL)', serviceId: 'licence-learner' },
  { label: 'EPFO Unified Portal', serviceId: 'pf-account' },
  { label: 'IRCTC NextGen', serviceId: 'travel-train-booking' }
].map((item) => ({ ...item, url: getServiceUrl(item.serviceId) }));

// Offline Center Amenities / Value Added Services
export const offlineServices = [
  {
    title: "High-Speed Color & B/W Printout",
    desc: "Single/Double sided printing for exam admit cards, resumes, e-Aadhaar, and official forms.",
    icon: "Printer",
    rate: "From ₹2 / page"
  },
  {
    title: "Waterproof Lamination",
    desc: "A4, A3, and ID card hot lamination to preserve valuable certificates and documents.",
    icon: "Shield",
    rate: "From ₹10 / card"
  },
  {
    title: "High-Resolution Scanning",
    desc: "Scanning documents in high DPI PDF / JPG format tailored to online exam file-size limits.",
    icon: "Scan",
    rate: "Instant Scanning"
  },
  {
    title: "Urgent Passport Size Photos",
    desc: "Ready in 5 minutes with white/blue background compliant with official govt portal guidelines.",
    icon: "Camera",
    rate: "8 Photos in 5 Mins"
  },
  {
    title: "Color Smart PVC Card Printing",
    desc: "Get your e-Aadhaar, PAN, Voter ID, or Ayushman card printed on high-durability plastic PVC.",
    icon: "CreditCard",
    rate: "Premium Smart Card"
  },
  {
    title: "Online Form Filling Assistance",
    desc: "Trained operators assist in error-free online application form filling and fee payment.",
    icon: "Headphones",
    rate: "Dedicated Operator"
  }
];
