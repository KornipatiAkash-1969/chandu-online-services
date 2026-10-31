# Chandu - Personal Online Services Hub

A fast, responsive personal dashboard providing instant 1-click access to official Indian sovereign portals, banking utilities, bill payments, transit bookings, and educational applications.

---

## 🌐 Live Deployments

| Platform | Live Link | Status |
| :--- | :--- | :---: |
| **Vercel (Primary Custom URL)** | **[chandu-online-services.vercel.app](https://chandu-online-services.vercel.app)** | `HTTP 200 OK` (Live) |
| **Vercel (Alternate URL)** | **[digital-seva-portal.vercel.app](https://digital-seva-portal.vercel.app)** | `HTTP 200 OK` (Live) |
| **GitHub Pages** | **[kornipatiakash-1969.github.io/chandu-online-services/](https://kornipatiakash-1969.github.io/chandu-online-services/)** | `Active` |
| **GitHub Repository** | **[github.com/KornipatiAkash-1969/chandu-online-services](https://github.com/KornipatiAkash-1969/chandu-online-services)** | `Synced` (Up to date) |

- **Vercel Project Dashboard:** [https://vercel.com/akash1969/digital-seva-portal](https://vercel.com/akash1969/digital-seva-portal)
- **Automatic Continuous Deployment:** This repository is connected directly to Vercel. Every commit pushed to the `main` branch automatically triggers a production build and deployment.

---

## 🚀 Key Features

- **66+ Verified 1-Click Sovereign Shortcuts:**
  - **Government Services:** UIDAI myAadhaar (Update, Appointment, e-Aadhaar Download, PVC Card Order, Bank Seeding Status, Lost EID/UID Retrieval), Protean / NSDL PAN (New Form 49A, Corrections, Instant e-PAN, PAN-Aadhaar Link, UTIITSL), ECI Voter ID (Form 6, Form 8, e-EPIC Download), State e-District Certificates (Caste, Income, Domicile via ServicePlus), MEA Passport Seva (New, Renewal, Appointments), MoRTH Parivahan Sarathi (Learner's Licence, Driving Licence, Renewal, DL/RC Download), Ration Card NFSA, EPFO PF Services (Unified Portal, UAN Activation, Passbook & Balance, Claim Withdrawal), and Civil Registration (Birth & Death Certificates via Digital CRS).
  - **Banking & Financial:** Bharat Connect (formerly BBPS) Electricity & Water Bills, Domestic Money Transfer, Mobile & DTH Recharge, FASTag Toll Recharge, LIC & Insurance Premium Payments, PMJDY Zero Balance Account Opening, and Income Tax e-filing.
  - **Travel & Booking:** IRCTC NextGen Train Ticket Booking, Real-Time PNR Status, NTES Live Train Running Status, IRCTC Official Bus Ticket Booking, IRCTC Air Flight Booking, and IRCTC Tourism Hotel Reservations.
  - **Education & Recruitment:** SSC / UPSC / IBPS Online Exam Applications, National Career Service (NCS Jobs), Admit Card & Hall Ticket Downloads, CBSE & National Board Results (NIC), National Scholarship Portal (NSP), CUET & NTA Admissions, APAAR / Academic Bank of Credits, and SBI Collect Online Fee Payments.

- **Smart Multi-Token Instant Search (Ctrl + K):**
  - Type keywords in any order (e.g. `Aadhaar Phone Update`) to immediately highlight and filter services across all categories.
  - Quick action pills for one-click access.

- **Personal Pinned Shortcuts (Favorites):**
  - Star any portal to pin it to your personal "My Pinned Shortcuts" shelf at the top of the dashboard.
  - Pinned shortcuts persist across sessions in `localStorage`.

- **100% Direct Official Sovereign Links:**
  - Every link points directly to authentic `.gov.in`, `.nic.in`, or certified service domains.
  - Zero advertisements, zero third-party proxies, and zero credential storage.

- **Offline Document Checklist Reference:**
  - Clean modal reference showing required documents before applying for each service.

---

## 🛠️ Technology Stack

- **Frontend:** React 18
- **Build Tool:** Vite 5 (Relative base paths `./` for universal hosting)
- **Styling:** Tailwind CSS (Dark/Slate personal dashboard theme)
- **Icons:** Lucide React (Tree-shaken, ultra-lightweight)
- **Deployment:** Vercel + GitHub Pages (Automated GitHub Actions workflow)

---

## 🏃 Local Development

```powershell
# Clone the repository
git clone https://github.com/KornipatiAkash-1969/chandu-online-services.git

# Navigate into directory
cd chandu-online-services

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

---

## 📦 Deployment Commands

- **Build for Production:** `npm run build`
- **Deploy to GitHub Pages:** `npm run deploy`
- **Deploy to Vercel:** `npx vercel --prod`
