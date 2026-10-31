import React from 'react';
import { ExternalLink, FileText, Star } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function ServiceCard({ service, onOpenDocsModal, isPinned, onTogglePin }) {
  const {
    id,
    title,
    shortDesc,
    authority,
    officialUrl,
    icon,
    badge,
    subCategory,
    documentsRequired
  } = service;

  const getCategoryColor = () => {
    switch (service.category) {
      case 'government':
        return {
          iconBg: 'bg-blue-100 text-blue-700',
          badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
          btnBg: 'bg-brand-600 hover:bg-brand-700'
        };
      case 'banking':
        return {
          iconBg: 'bg-emerald-100 text-emerald-700',
          badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          btnBg: 'bg-emerald-600 hover:bg-emerald-700'
        };
      case 'travel':
        return {
          iconBg: 'bg-amber-100 text-amber-700',
          badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
          btnBg: 'bg-amber-600 hover:bg-amber-700'
        };
      case 'education':
        return {
          iconBg: 'bg-purple-100 text-purple-700',
          badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
          btnBg: 'bg-purple-600 hover:bg-purple-700'
        };
      default:
        return {
          iconBg: 'bg-slate-100 text-slate-700',
          badgeBg: 'bg-slate-50 text-slate-700 border-slate-200',
          btnBg: 'bg-slate-800 hover:bg-slate-900'
        };
    }
  };

  const colors = getCategoryColor();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-brand-300">
      
      {/* Card Header & Content */}
      <div className="p-4 sm:p-5">
        
        {/* Top Badges & Pin Shortcut Button */}
        <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
          <span className={`text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border ${colors.badgeBg} truncate`}>
            {subCategory}
          </span>

          <div className="flex items-center space-x-1 shrink-0">
            {badge && (
              <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 sm:px-2 py-0.5 rounded">
                {badge}
              </span>
            )}

            {/* Pin to favorites toggle (min 36px tap target) */}
            <button
              onClick={() => onTogglePin(id)}
              className={`p-1.5 rounded-md transition-colors ${
                isPinned 
                  ? 'text-amber-500 bg-amber-50 hover:bg-amber-100' 
                  : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
              }`}
              title={isPinned ? 'Remove from pinned shortcuts' : 'Pin to my shortcuts'}
              aria-label="Pin shortcut"
            >
              <Star className={`w-4 h-4 ${isPinned ? 'fill-amber-400 text-amber-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start space-x-3 mb-2">
          <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
            <DynamicIcon name={icon} className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-brand-700 transition-colors">
              {title}
            </h3>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5 truncate">
              Authority: <span className="text-slate-600">{authority}</span>
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
          {shortDesc}
        </p>

        {/* Document Requirements trigger */}
        {documentsRequired && documentsRequired.length > 0 && (
          <div className="mt-3 pt-2 sm:pt-2.5 border-t border-slate-100">
            <button
              onClick={() => onOpenDocsModal(service)}
              className="text-[11px] sm:text-xs text-brand-700 hover:text-brand-900 font-medium flex items-center space-x-1.5 hover:underline focus:outline-none py-0.5"
            >
              <FileText className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span>Document Requirements ({documentsRequired.length})</span>
            </button>
          </div>
        )}
      </div>

      {/* Card Action Footer: Direct 1-Click Launch with min 42px touch height */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 mt-auto">
        <a
          href={officialUrl}
          target="_blank"
          rel="noopener"
          className={`w-full inline-flex items-center justify-center space-x-2 py-2.5 sm:py-3 px-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white ${colors.btnBg} shadow-xs transition-colors active:scale-[0.99]`}
          title={`Launch ${authority} portal in a new tab`}
        >
          <span>Open Official Portal</span>
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
      </div>

    </div>
  );
}
