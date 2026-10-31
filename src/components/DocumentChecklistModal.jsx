import React, { useState } from 'react';
import { 
  X, 
  CheckSquare, 
  Square, 
  ExternalLink, 
  Printer, 
  AlertCircle
} from 'lucide-react';

export default function DocumentChecklistModal({ service, onClose }) {
  // Hooks must run before any early return (rules of hooks)
  const [checkedItems, setCheckedItems] = useState({});

  if (!service) return null;

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      
      {/* Modal Dialog */}
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-3">
          <div className="min-w-0 pr-2">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full truncate">
                {service.subCategory}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                {service.authority}
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
              Required Documents: {service.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              Keep these documents ready before opening the application portal.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 sm:space-y-4 text-sm no-scrollbar">
          
          {/* Checklist progress */}
          <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
            <span>Tick documents you have ready:</span>
            <span className="font-semibold text-brand-600">
              {Object.values(checkedItems).filter(Boolean).length} of {service.documentsRequired?.length || 0} Ready
            </span>
          </div>

          {/* Checklist items */}
          <div className="space-y-2">
            {service.documentsRequired && service.documentsRequired.length > 0 ? (
              service.documentsRequired.map((doc, idx) => {
                const isChecked = !!checkedItems[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex items-start space-x-2.5 sm:space-x-3 select-none ${
                      isChecked 
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 text-brand-600">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-emerald-700' : ''}`}>
                      {doc}
                    </span>
                  </div>
                );
              })
            ) : (
              <p className="text-slate-500 text-xs italic">
                Standard identity proof and registered mobile number required.
              </p>
            )}
          </div>

          {/* Security Advisory */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start space-x-2 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed text-[11px] sm:text-xs">
              <strong className="block text-amber-950 mb-0.5">Online Safety Tip:</strong>
              Never share OTPs, ATM PINs, or banking passwords on third-party websites. Only enter information on the verified official sovereign portal.
            </div>
          </div>

        </div>

        {/* Modal Footer Actions: Mobile Stacking */}
        <div className="p-3.5 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-3.5 py-2.5 sm:py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors no-print"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Checklist</span>
          </button>

          <a
            href={service.officialUrl}
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center space-x-1.5 shadow-sm transition-colors sm:ml-auto"
          >
            <span>Launch Official Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
