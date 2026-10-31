import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import { quickAccessPortals } from '../data/servicesData';
import DynamicIcon from './DynamicIcon';

export default function QuickAccessPortals() {
  return (
    <section className="py-8 sm:py-12 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-7">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-800 bg-brand-100/80 px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-200 mb-1.5">
            <Globe className="w-3.5 h-3.5 text-brand-600" />
            <span>Direct Portal Gateway</span>
          </div>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Accessed Portals
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            1-click direct launcher to official central government and sovereign utility portals.
          </p>
        </div>

        {/* Portals Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4">
          {quickAccessPortals.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noopener"
              className="group relative overflow-hidden bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <DynamicIcon name={portal.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 bg-slate-100 group-hover:bg-brand-50 group-hover:text-brand-700 px-1.5 sm:px-2 py-0.5 rounded transition-colors">
                    {portal.badge}
                  </span>
                </div>

                <h3 className="font-bold text-xs sm:text-base text-slate-900 group-hover:text-brand-700 transition-colors line-clamp-1">
                  {portal.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
                  {portal.dept}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-brand-600 font-semibold group-hover:text-brand-800">
                <span>Launch</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
