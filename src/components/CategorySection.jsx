import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Landmark, 
  Building2, 
  PlaneTakeoff, 
  GraduationCap, 
  Search, 
  Filter, 
  RotateCcw
} from 'lucide-react';
import { categories, servicesData } from '../data/servicesData';
import ServiceCard from './ServiceCard';

export default function CategorySection({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onOpenDocsModal,
  pinnedIds,
  onTogglePin
}) {
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  // Find active category config
  const currentCategory = categories.find(c => c.id === selectedCategory) || categories[0];

  // Filter services by category, subcategory, and tokenized smart search query
  const query = searchQuery.trim().toLowerCase();
  const searchTokens = query ? query.split(/\s+/).filter(Boolean) : [];

  const filteredServices = servicesData.filter((service) => {
    // Multi-token search match across all searchable fields
    const searchableText = [
      service.title,
      service.shortDesc,
      service.authority,
      service.subCategory,
      service.badge || '',
      ...(service.documentsRequired || [])
    ].join(' ').toLowerCase();

    const searchMatch = searchTokens.length === 0 || searchTokens.every(token => searchableText.includes(token));

    // When an active search query is present, search across all portals; otherwise respect active category tabs
    const categoryMatch = 
      searchTokens.length > 0 || 
      selectedCategory === 'all' || 
      service.category === selectedCategory;
    
    const subCategoryMatch = 
      selectedSubCategory === 'All' || 
      searchTokens.length > 0 || 
      service.subCategory === selectedSubCategory;

    return categoryMatch && subCategoryMatch && searchMatch;
  });

  const availableSubcategories = [
    'All',
    ...(currentCategory.subcategories || Array.from(new Set(
      servicesData
        .filter(s => selectedCategory === 'all' || s.category === selectedCategory)
        .map(s => s.subCategory)
    )))
  ];

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setSelectedSubCategory('All');
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubCategory('All');
    setSearchQuery('');
  };

  return (
    <section id="services-section" className="py-8 sm:py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            All Online Services & Portals
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Browse through categories or filter down to any specific department shortcut.
          </p>
        </div>

        {/* Category Tabs: Touch-Friendly Scrollable Bar */}
        <div className="flex justify-start sm:justify-center mb-4 sm:mb-5 overflow-x-auto pb-1.5 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 no-scrollbar">
          <div className="inline-flex p-1 bg-white rounded-2xl border border-slate-200 shadow-2xs space-x-1 shrink-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center space-x-1.5 sm:space-x-2 shrink-0 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.id === 'all' && <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />}
                  {cat.id === 'government' && <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />}
                  {cat.id === 'banking' && <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />}
                  {cat.id === 'travel' && <PlaneTakeoff className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />}
                  {cat.id === 'education' && <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Header & Subcategory Pills */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-2xs mb-5 sm:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm sm:text-base font-bold text-slate-900">
                {currentCategory.label}
              </span>
              <span className="bg-brand-100 text-brand-800 text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full">
                {filteredServices.length} {filteredServices.length === 1 ? 'Portal' : 'Portals'}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              {currentCategory.description}
            </p>
          </div>

          {/* Sub-Category Pills: Horizontally Swipeable on mobile */}
          {availableSubcategories.length > 2 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-xl no-scrollbar -mx-1 px-1">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 mr-0.5 flex items-center shrink-0">
                <Filter className="w-3 h-3 mr-1" /> Filter:
              </span>
              {availableSubcategories.map((sub, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-colors shrink-0 whitespace-nowrap ${
                    selectedSubCategory === sub
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Feedback Header */}
        {searchQuery.trim() !== '' && (
          <div className="mb-4 sm:mb-5 p-2.5 sm:p-3 bg-brand-50 border border-brand-200 rounded-xl flex items-center justify-between text-xs text-brand-900">
            <div className="flex items-center space-x-2 min-w-0 pr-2">
              <Search className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="truncate">
                Showing results for "<strong>{searchQuery}</strong>"
              </span>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-brand-700 hover:text-brand-900 font-semibold underline shrink-0"
            >
              Clear
            </button>
          </div>
        )}

        {/* Services Grid or Empty State */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOpenDocsModal={onOpenDocsModal}
                isPinned={pinnedIds?.includes(service.id)}
                onTogglePin={onTogglePin}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-12 text-center max-w-lg mx-auto shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">
              No matching portal found
            </h3>
            <p className="text-xs text-slate-500 mb-4 sm:mb-5">
              We couldn't find any service matching "<strong>{searchQuery}</strong>".
            </p>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
