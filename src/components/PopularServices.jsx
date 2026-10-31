import React from 'react';
import { Star, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import DynamicIcon from './DynamicIcon';

export default function PopularServices({ onOpenDocsModal, onSelectCategory, pinnedIds, onTogglePin }) {
  const popularServiceIds = [
    "aadhaar-download",
    "pan-new",
    "voter-new",
    "caste-certificate",
    "income-certificate",
    "pf-withdrawal",
    "travel-train-booking",
    "licence-learner"
  ];

  const popularList = popularServiceIds
    .map(id => servicesData.find(s => s.id === id))
    .filter(Boolean);

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-3 mb-5 sm:mb-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-200 mb-1 sm:mb-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Frequently Accessed</span>
            </div>
            <h2 className="text-lg xs:text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Top 8 Everyday Portals
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Instant shortcuts to the most frequently used citizen, identity, and booking services.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-800 inline-flex items-center space-x-1 shrink-0 group self-start sm:self-auto pt-1 sm:pt-0"
          >
            <span>View All 50+ Portals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {popularList.map((service) => {
            const isPinned = pinnedIds?.includes(service.id);
            return (
              <div 
                key={service.id} 
                className="bg-slate-50 hover:bg-white rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      <DynamicIcon name={service.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => onTogglePin(service.id)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isPinned 
                            ? 'text-amber-500 bg-amber-100/70' 
                            : 'text-slate-300 hover:text-slate-500'
                        }`}
                        title={isPinned ? 'Pinned' : 'Pin to shortcuts'}
                        aria-label="Pin"
                      >
                        <Star className={`w-3.5 h-3.5 ${isPinned ? 'fill-amber-400 text-amber-500' : ''}`} />
                      </button>
                      <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center">
                        <ShieldCheck className="w-3 h-3 mr-0.5 text-emerald-600" />
                        Official
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-700 transition-colors line-clamp-1">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-2 text-[10px] sm:text-[11px] text-slate-400 font-medium truncate">
                    Authority: <span className="text-slate-600">{service.authority}</span>
                  </div>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-200 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenDocsModal(service)}
                    className="text-[11px] font-medium text-slate-600 hover:text-brand-700 hover:underline py-1"
                  >
                    Docs Needed
                  </button>

                  <a
                    href={service.officialUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center space-x-1 text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white px-3 sm:px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
                    title={`Open official portal for ${service.title}`}
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
