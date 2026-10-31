import React, { useState, useEffect } from 'react';
import { 
  Landmark, 
  Search, 
  Menu, 
  X, 
  ChevronRight,
  Bookmark,
  LayoutGrid,
  Building2,
  PlaneTakeoff,
  GraduationCap
} from 'lucide-react';

export default function Header({ 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery,
  favoritesCount,
  onShowFavorites
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (catId) => {
    setSelectedCategory(catId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const focusSearchInput = () => {
    setIsMobileMenuOpen(false);
    const searchEl = document.getElementById('hero-search-input');
    if (searchEl) {
      searchEl.focus();
      searchEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled ? 'shadow-md py-2 sm:py-2.5' : 'shadow-xs border-b border-slate-200/90 py-2.5 sm:py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo & Portal Title */}
            <div 
              onClick={() => { setSelectedCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group select-none min-w-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <span className="text-base sm:text-xl font-bold tracking-tight text-slate-900 font-sans truncate">
                    Chandu
                  </span>
                  <span className="hidden xs:inline-block bg-brand-50 text-brand-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-200 shrink-0">
                    Quick Access
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium hidden sm:block truncate">
                  Direct Official Shortcuts • 50+ Citizen & Financial Services
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
              <button 
                onClick={() => { setSelectedCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all' && window.scrollY < 400
                    ? 'text-brand-600 font-semibold bg-brand-50' 
                    : 'hover:text-brand-600 hover:bg-slate-100'
                }`}
              >
                All Portals
              </button>

              <button 
                onClick={() => handleNavClick('government')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'government' 
                    ? 'text-brand-600 font-semibold bg-brand-50' 
                    : 'hover:text-brand-600 hover:bg-slate-100'
                }`}
              >
                Government
              </button>

              <button 
                onClick={() => handleNavClick('banking')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'banking' 
                    ? 'text-brand-600 font-semibold bg-brand-50' 
                    : 'hover:text-brand-600 hover:bg-slate-100'
                }`}
              >
                Banking & Bills
              </button>

              <button 
                onClick={() => handleNavClick('travel')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'travel' 
                    ? 'text-brand-600 font-semibold bg-brand-50' 
                    : 'hover:text-brand-600 hover:bg-slate-100'
                }`}
              >
                Travel & Booking
              </button>

              <button 
                onClick={() => handleNavClick('education')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'education' 
                    ? 'text-brand-600 font-semibold bg-brand-50' 
                    : 'hover:text-brand-600 hover:bg-slate-100'
                }`}
              >
                Education & Jobs
              </button>
            </nav>

            {/* Actions: Search Trigger & Pinned Button & Mobile Menu */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              
              {/* Pinned / Favorites Shortcut Button */}
              {favoritesCount > 0 && (
                <button
                  onClick={onShowFavorites}
                  className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                  title="View Pinned Shortcuts"
                >
                  <Bookmark className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                  <span className="hidden sm:inline">Pinned</span>
                  <span className="bg-amber-200/80 text-amber-900 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {favoritesCount}
                  </span>
                </button>
              )}

              {/* Search Button */}
              <button
                onClick={focusSearchInput}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs sm:text-sm transition-colors border border-slate-200"
                title="Search Portals (Ctrl+K)"
                aria-label="Search Portals"
              >
                <Search className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-medium hidden md:inline">Search...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-slate-300 rounded text-slate-400">
                  Ctrl+K
                </kbd>
              </button>

              {/* Mobile Menu Toggle Button (44px min tap area) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Full-Width Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            
            {/* Mobile Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search Aadhaar, PAN, DL, PF, Train..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            {/* Category Navigation Links */}
            <div className="grid grid-cols-1 gap-1 text-sm font-medium text-slate-700 pt-1">
              <button
                onClick={() => handleNavClick('all')}
                className={`flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                  selectedCategory === 'all' ? 'bg-brand-50 text-brand-700 font-bold' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <LayoutGrid className="w-4 h-4 text-brand-600" />
                  <span>All 54 Portals</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => handleNavClick('government')}
                className={`flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                  selectedCategory === 'government' ? 'bg-brand-50 text-brand-700 font-bold' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Landmark className="w-4 h-4 text-blue-600" />
                  <span>Government Services</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => handleNavClick('banking')}
                className={`flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                  selectedCategory === 'banking' ? 'bg-brand-50 text-brand-700 font-bold' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>Banking & Utility Bills</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => handleNavClick('travel')}
                className={`flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                  selectedCategory === 'travel' ? 'bg-brand-50 text-brand-700 font-bold' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <PlaneTakeoff className="w-4 h-4 text-amber-600" />
                  <span>Travel & Bookings</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => handleNavClick('education')}
                className={`flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                  selectedCategory === 'education' ? 'bg-brand-50 text-brand-700 font-bold' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                  <span>Education & Recruitment</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick Favorites Action inside Drawer */}
            {favoritesCount > 0 && (
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onShowFavorites();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Bookmark className="w-4 h-4 fill-amber-500 text-amber-600" />
                  <span>Jump to My Pinned Shortcuts ({favoritesCount})</span>
                </button>
              </div>
            )}

          </div>
        )}
      </header>
    </>
  );
}
