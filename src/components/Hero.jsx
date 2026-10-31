import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  ExternalLink, 
  Zap, 
  X
} from 'lucide-react';
import { servicesData, serviceStats } from '../data/servicesData';
import DynamicIcon from './DynamicIcon';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  onSelectService, 
  setSelectedCategory 
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef(null);

  // Quick search keywords
  const popularKeywords = [
    { label: "Aadhaar Phone Update", category: "government" },
    { label: "Aadhaar Download", category: "government" },
    { label: "PAN Card", category: "government" },
    { label: "Voter ID", category: "government" },
    { label: "Parivahan Sarathi", category: "government" },
    { label: "PF Passbook", category: "government" },
    { label: "IRCTC Train", category: "travel" },
    { label: "Electricity Bill", category: "banking" }
  ];

  // Filtered live results for autocomplete dropdown with multi-token smart search
  const query = searchQuery.trim().toLowerCase();
  const searchTokens = query ? query.split(/\s+/).filter(Boolean) : [];

  const filteredSuggestions = searchTokens.length === 0 
    ? [] 
    : servicesData.filter(s => {
        const text = [
          s.title,
          s.shortDesc,
          s.subCategory,
          s.authority,
          s.badge || '',
          ...(s.documentsRequired || [])
        ].join(' ').toLowerCase();
        return searchTokens.every(t => text.includes(t));
      }).slice(0, 8);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-slate-50 to-white pt-6 pb-10 sm:pt-12 sm:pb-16 border-b border-slate-200">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-brand-100/80 border border-brand-200 text-brand-900 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold shadow-2xs">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-700 shrink-0" />
            <span className="truncate">Direct Official Links Gateway</span>
            <span className="text-brand-400 hidden xs:inline">|</span>
            <span className="text-slate-600 font-normal hidden sm:inline">1-Click Fast Shortcuts</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-3xl mx-auto px-2">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-[1.2]">
            Online Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-indigo-600">Shortcuts Portal</span>
          </h1>
          <p className="mt-2.5 sm:mt-3 text-xs xs:text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Centralized quick access to {serviceStats.total} official government portals and authorized providers for banking services, utility bill payments, travel bookings, and educational applications.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="mt-5 sm:mt-7 max-w-2xl mx-auto" ref={searchContainerRef}>
          <div className="relative shadow-md rounded-2xl bg-white border border-slate-300 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition-all">
            <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3.5">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-brand-600 shrink-0 mr-2 sm:mr-3" />
              <input
                id="hero-search-input"
                type="text"
                placeholder="Find any portal (Aadhaar, PAN, DL, PF, Train)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIsDropdownOpen(false);
                    scrollToServices();
                  }
                }}
                className="w-full text-xs sm:text-base text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 mr-1.5"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={scrollToServices}
                className="shrink-0 bg-brand-600 hover:bg-brand-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center space-x-1 sm:space-x-1.5 shadow-xs"
              >
                <span>Browse</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Instant Suggestions Dropdown with DIRECT 1-Click Launch */}
            {isDropdownOpen && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 sm:px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 font-medium">
                  <span>Found {filteredSuggestions.length} matching portals</span>
                  <span className="hidden xs:inline">Click to open directly</span>
                </div>

                {filteredSuggestions.length > 0 ? (
                  <div className="max-h-72 sm:max-h-80 overflow-y-auto divide-y divide-slate-100 no-scrollbar">
                    {filteredSuggestions.map((item) => (
                      <div
                        key={item.id}
                        className="p-2.5 sm:p-3 hover:bg-brand-50/70 flex items-center justify-between group transition-colors"
                      >
                        <div 
                          className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer flex-1 mr-2 min-w-0"
                          onClick={() => {
                            onSelectService(item);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                            <DynamicIcon name={item.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-brand-700 truncate">
                              {item.title}
                            </div>
                            <div className="text-[10px] sm:text-xs text-slate-500 flex items-center space-x-1 sm:space-x-2 truncate">
                              <span className="truncate">{item.authority}</span>
                              <span>•</span>
                              <span className="capitalize text-slate-600 truncate">{item.subCategory}</span>
                            </div>
                          </div>
                        </div>

                        {/* Direct Launch Button */}
                        <a
                          href={item.officialUrl}
                          target="_blank"
                          rel="noopener"
                          className="px-2.5 sm:px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold flex items-center space-x-1 shrink-0 transition-colors shadow-2xs"
                          title="Open in new tab"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-5 sm:p-6 text-center text-slate-500 text-xs sm:text-sm">
                    <p className="font-semibold text-slate-700">No portal found matching "{searchQuery}"</p>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1">Try keywords like "Aadhaar", "PAN", "Licence", "Bill", or "Train"</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Keyword Pills */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs">
            <span className="text-slate-500 font-medium text-[11px] sm:text-xs mr-0.5">Quick Shortcuts:</span>
            {popularKeywords.map((kw, i) => (
              <button
                key={i}
                onClick={() => {
                  setSearchQuery(kw.label);
                  if (setSelectedCategory) setSelectedCategory('all');
                  setIsDropdownOpen(false);
                  scrollToServices();
                }}
                className="bg-white hover:bg-brand-50 hover:border-brand-300 text-slate-700 text-[11px] sm:text-xs px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs transition-colors shrink-0"
              >
                {kw.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="mt-7 sm:mt-10 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
          <div className="bg-white/80 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-slate-700 shadow-2xs">
            <div className="text-lg sm:text-xl font-extrabold text-brand-700">{serviceStats.total}</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Direct Shortcuts</div>
          </div>
          <div className="bg-white/80 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-slate-700 shadow-2xs">
            <div className="text-lg sm:text-xl font-extrabold text-emerald-600">100%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Official / Authorized Links</div>
          </div>
          <div className="bg-white/80 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-slate-700 shadow-2xs">
            <div className="text-lg sm:text-xl font-extrabold text-blue-600">1-Click</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Instant Launch</div>
          </div>
          <div className="bg-white/80 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-slate-700 shadow-2xs">
            <div className="text-lg sm:text-xl font-extrabold text-indigo-600">Safe</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Zero Data Stored</div>
          </div>
        </div>

      </div>
    </section>
  );
}
