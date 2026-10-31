import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PinnedShortcuts from './components/PinnedShortcuts';
import PopularServices from './components/PopularServices';
import QuickAccessPortals from './components/QuickAccessPortals';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import DocumentChecklistModal from './components/DocumentChecklistModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDocsService, setActiveDocsService] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Manage Pinned / Favorite Shortcuts in localStorage
  const [pinnedIds, setPinnedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('my_pinned_seva_shortcuts');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    // Default initial shortcuts for personal convenience
    return ['aadhaar-download', 'pan-new', 'travel-train-booking', 'fin-electricity-bill', 'pf-balance-passbook'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('my_pinned_seva_shortcuts', JSON.stringify(pinnedIds));
    } catch (e) {}
  }, [pinnedIds]);

  const togglePin = (id) => {
    setPinnedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowFavorites = () => {
    const el = document.getElementById('pinned-shortcuts-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* 1. Header Navigation */}
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        favoritesCount={pinnedIds.length}
        onShowFavorites={handleShowFavorites}
      />

      {/* 2. Hero Section with Live Search */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectService={(service) => setActiveDocsService(service)}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 4. My Pinned Shortcuts (User's Favorites Shelf) */}
      <PinnedShortcuts
        pinnedIds={pinnedIds}
        onTogglePin={togglePin}
        onOpenDocsModal={(service) => setActiveDocsService(service)}
      />

      {/* 5. 8 Frequently Accessed Everyday Services */}
      <PopularServices
        onOpenDocsModal={(service) => setActiveDocsService(service)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        pinnedIds={pinnedIds}
        onTogglePin={togglePin}
      />

      {/* 6. Quick Access Sovereign Gateway Tiles */}
      <QuickAccessPortals />

      {/* 7. Categorized All Services Directory */}
      <CategorySection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenDocsModal={(service) => setActiveDocsService(service)}
        pinnedIds={pinnedIds}
        onTogglePin={togglePin}
      />

      {/* 8. Footer */}
      <Footer onSelectCategory={(cat) => setSelectedCategory(cat)} />

      {/* Document Checklist Modal */}
      {activeDocsService && (
        <DocumentChecklistModal
          service={activeDocsService}
          onClose={() => setActiveDocsService(null)}
        />
      )}

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-40 p-3 bg-white text-slate-700 hover:text-brand-600 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-105"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
