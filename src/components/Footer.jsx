import React, { useState } from 'react';
import { 
  ExternalLink, 
  ShieldCheck, 
  Lock, 
  FileText, 
  ArrowUp,
  X
} from 'lucide-react';
import { footerPortals } from '../data/servicesData';
import logoFull from '../assets/brand/logo-full.webp';

export default function Footer({ onSelectCategory }) {
  const [activeModal, setActiveModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryLink = (catId) => {
    onSelectCategory(catId);
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-8 sm:pb-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Col 1: Brand & Purpose */}
            <div className="space-y-2.5 sm:space-y-3">
              {/* Full logo. Its black background blends into the dark footer. */}
              <button type="button" onClick={scrollToTop} className="block cursor-pointer" aria-label="Back to top">
                <img
                  src={logoFull}
                  alt="Chandu Online Services - Your Online Service Partner"
                  width="900"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="block w-56 sm:w-64 max-w-full h-auto mix-blend-screen"
                />
              </button>

              <p className="text-slate-400 text-xs leading-relaxed">
                Centralized personal dashboard providing instant 1-click shortcuts to official Indian sovereign portals and authorized utilities.
              </p>

              <div className="pt-0.5 flex items-center space-x-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Official &amp; Authorized Links</span>
              </div>
            </div>

            {/* Col 2: Categories */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2.5 sm:mb-3">
                Service Categories
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => handleCategoryLink('government')} className="hover:text-white transition-colors text-left py-0.5">
                    Government Services (Aadhaar, PAN, Voter, DL)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryLink('banking')} className="hover:text-white transition-colors text-left py-0.5">
                    Banking, Utility Bills & DMT
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryLink('travel')} className="hover:text-white transition-colors text-left py-0.5">
                    Travel & Booking (IRCTC, Flights, Bus)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryLink('education')} className="hover:text-white transition-colors text-left py-0.5">
                    Education, Exams & Scholarships
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Official Portals */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2.5 sm:mb-3">
                Official Sovereign Portals
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                {footerPortals.map((portal) => (
                  <li key={portal.serviceId}>
                    <a href={portal.url} target="_blank" rel="noopener" className="hover:text-white flex items-center space-x-1 py-0.5">
                      <span>{portal.label}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Safety & Privacy */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2.5 sm:mb-3">
                Security & Information
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => setActiveModal('security')} className="hover:text-white transition-colors text-left flex items-center space-x-1 py-0.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Security & Privacy Info</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('disclaimer')} className="hover:text-white transition-colors text-left flex items-center space-x-1 py-0.5">
                    <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Portal Disclaimer</span>
                  </button>
                </li>
              </ul>

              <div className="mt-3.5 p-2.5 sm:p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-[11px] text-slate-400 leading-relaxed">
                🔒 <strong>Zero Data Retention:</strong> All buttons open official external websites directly. No personal credentials are ever stored.
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2.5">
            <div className="text-center sm:text-left">
              Chandu Online Services • Personal Online Services Shortcuts
              <span className="block sm:inline sm:ml-2">
                • Independent directory, not an official government website.
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="hover:text-slate-300 flex items-center space-x-1 text-xs py-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>

      {/* Info Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col text-slate-800">
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">
                {activeModal === 'security' && 'Security & Data Privacy'}
                {activeModal === 'disclaimer' && 'Directory Disclaimer'}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed no-scrollbar">
              {activeModal === 'security' && (
                <>
                  <p>
                    <strong>1. Direct Link Redirection:</strong> This application acts solely as a personal web portal directory. Clicking any service link directs your browser straight to the official government or service provider domain.
                  </p>
                  <p>
                    <strong>2. Zero Personal Data Storage:</strong> No personal details, Aadhaar numbers, PAN records, passwords, or transaction histories are saved, collected, or transmitted.
                  </p>
                  <p>
                    <strong>3. Local Storage:</strong> Only your starred/pinned shortcuts are stored in your own browser's local storage for your personal convenience.
                  </p>
                </>
              )}

              {activeModal === 'disclaimer' && (
                <>
                  <p>
                    <strong>Independent Quick-Access Directory:</strong> This website is an independent personal shortcut directory and is not an official government platform.
                  </p>
                  <p>
                    <strong>Authentic Sovereign Domains:</strong> All service URLs point exclusively to legitimate government extensions (e.g. <code>.gov.in</code>, <code>.nic.in</code>) and authorized service providers.
                  </p>
                </>
              )}
            </div>

            <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
