import React from 'react';
import { useApp } from '../context/AppContext';
import { Opportunity } from '../types';
import { X, Calendar, MapPin, Award, Users, Bookmark, BookmarkCheck, ExternalLink, CheckCircle, ShieldAlert, ArrowRight, Clock } from 'lucide-react';

interface OpportunityDetailsModalProps {
  opportunity: Opportunity;
  onClose: () => void;
}

export const OpportunityDetailsModal: React.FC<OpportunityDetailsModalProps> = ({ opportunity, onClose }) => {
  const { isOpportunitySaved, toggleSaveOpportunity } = useApp();
  const saved = isOpportunitySaved(opportunity.id);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1.5">
              <span className="text-indigo-600 font-bold">{opportunity.category}</span>
              <span aria-hidden="true">·</span>
              <span>{opportunity.mode}</span>
              <span aria-hidden="true">·</span>
              <span>{opportunity.location}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
              {opportunity.title}
            </h3>
            <p className="text-sm font-medium text-slate-600 mt-0.5">
              Organized by <span className="font-semibold text-slate-800">{opportunity.organization}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Key Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px] font-medium">Deadline</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                {opportunity.deadline}
              </span>
              <span className="text-[10px] text-amber-700 font-medium">
                ({opportunity.daysLeft} days left)
              </span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px] font-medium">Reward / Stipend</span>
              <span className="font-bold text-emerald-700 mt-0.5 block truncate">
                {opportunity.rewardOrStipend || 'Certificate & Perks'}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px] font-medium">Location</span>
              <span className="font-bold text-slate-900 mt-0.5 block truncate">
                {opportunity.location}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px] font-medium">Team / Mode</span>
              <span className="font-bold text-slate-900 mt-0.5 block truncate">
                {opportunity.teamSize || opportunity.mode}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Overview
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              {opportunity.fullDescription}
            </p>
          </div>

          {/* Eligibility */}
          <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              Eligibility Criteria
            </h4>
            <p className="text-xs text-indigo-950 font-medium leading-relaxed">
              {opportunity.eligibility}
            </p>
          </div>

          {/* Requirements & Dates */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Requirements & Guidelines
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {opportunity.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Benefits, Perks & Prizes
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {opportunity.benefits.map((ben, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Award className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizer External Notice */}
          <div className="text-xs text-slate-500 bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Application Notice:</strong> Applications are submitted directly to the verified organizer. Clicking &ldquo;Apply Now&rdquo; opens the organizer&apos;s official application portal in a new browser tab.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          <button
            onClick={() => toggleSaveOpportunity(opportunity.id)}
            className={`px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 ${
              saved
                ? 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
            }`}
          >
            {saved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-amber-600" />
                <span>Saved to Profile</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-slate-500" />
                <span>Save Opportunity</span>
              </>
            )}
          </button>

          <a
            href={opportunity.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center gap-2"
          >
            <span>Apply on Organizer Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
