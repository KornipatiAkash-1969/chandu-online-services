import React from 'react';
import { Bookmark, ExternalLink, X } from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import { servicesData } from '../data/servicesData';

export default function PinnedShortcuts({ pinnedIds, onTogglePin }) {
  if (!pinnedIds || pinnedIds.length === 0) return null;

  const pinnedServices = pinnedIds
    .map(id => servicesData.find(s => s.id === id))
    .filter(Boolean);

  if (pinnedServices.length === 0) return null;

  return (
    <section id="pinned-shortcuts-section" className="py-6 sm:py-8 bg-amber-50/60 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center space-x-2">
            <span className="p-1 rounded-lg bg-amber-100 text-amber-700">
              <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500" />
            </span>
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
              My Pinned Shortcuts ({pinnedServices.length})
            </h2>
            <span className="text-xs text-slate-500 hidden sm:inline">
              • Quick 1-click launch
            </span>
          </div>

          <span className="text-[10px] sm:text-xs text-amber-900 font-semibold bg-amber-200/70 px-2 py-0.5 rounded-full shrink-0">
            Quick Launch
          </span>
        </div>

        {/* Pinned Items Responsive Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
          {pinnedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-2.5 sm:p-3 border border-amber-200 shadow-2xs hover:shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between group relative"
            >
              {/* Unpin button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTogglePin(service.id);
                }}
                className="absolute top-1.5 right-1.5 text-slate-300 hover:text-rose-500 p-1 rounded"
                title="Unpin from shortcuts"
                aria-label="Unpin"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="pr-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center mb-1.5">
                  <DynamicIcon name={service.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <h3 className="font-bold text-[11px] sm:text-xs text-slate-900 group-hover:text-brand-700 transition-colors line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-[9px] sm:text-[10px] text-slate-400 truncate mt-0.5">
                  {service.authority}
                </p>
              </div>

              <div className="mt-2 pt-1.5 border-t border-slate-100">
                <a
                  href={service.officialUrl}
                  target="_blank"
                  rel="noopener"
                  className="w-full inline-flex items-center justify-center space-x-1 py-1.5 px-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-[11px] sm:text-xs font-semibold shadow-2xs transition-colors"
                >
                  <span>Launch</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
