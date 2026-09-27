import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { opportunitiesData } from '../data/opportunitiesData';
import { Opportunity, OpportunityCategory } from '../types';
import { 
  Sparkles, 
  Search, 
  MapPin, 
  Clock, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  Flame, 
  Filter, 
  Calendar,
  Layers,
  Award,
  Users,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export const OpportunitiesView: React.FC = () => {
  const { 
    openOpportunityDetails, 
    isOpportunitySaved, 
    toggleSaveOpportunity,
    opportunityCategoryFilter,
    setOpportunityCategoryFilter,
    opportunitySearchQuery,
    setOpportunitySearchQuery
  } = useApp();

  const [selectedLocation, setSelectedLocation] = useState<string>('All Locations');
  const [selectedMode, setSelectedMode] = useState<string>('All Modes');
  const [selectedSort, setSelectedSort] = useState<'deadline' | 'newest' | 'relevant'>('deadline');

  const categories: string[] = [
    'All',
    'Hackathons',
    'Internships',
    'Scholarships',
    'Competitions',
    'Open Source Programs',
    'Student Programs',
    'Fellowships',
    'Research Opportunities',
    'Volunteering'
  ];

  const locations = [
    'All Locations',
    'Online',
    'Bengaluru',
    'Hyderabad',
    'Delhi NCR',
    'Mumbai',
    'Pune',
    'Chennai',
    'Kolkata',
    'Ahmedabad',
    'Jaipur'
  ];

  const modes = ['All Modes', 'Online', 'Offline', 'Hybrid'];

  // Filter opportunities
  const filteredOpportunities = opportunitiesData.filter(opp => {
    const matchesCategory = 
      opportunityCategoryFilter === 'All' || opp.category === opportunityCategoryFilter;
    
    const matchesLocation = 
      selectedLocation === 'All Locations' || opp.location.toLowerCase().includes(selectedLocation.toLowerCase());

    const matchesMode = 
      selectedMode === 'All Modes' || opp.mode === selectedMode;

    const matchesSearch = 
      opportunitySearchQuery === '' ||
      opp.title.toLowerCase().includes(opportunitySearchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(opportunitySearchQuery.toLowerCase()) ||
      opp.domain.toLowerCase().includes(opportunitySearchQuery.toLowerCase()) ||
      opp.shortDescription.toLowerCase().includes(opportunitySearchQuery.toLowerCase()) ||
      opp.location.toLowerCase().includes(opportunitySearchQuery.toLowerCase());

    return matchesCategory && matchesLocation && matchesMode && matchesSearch;
  });

  // Sort opportunities
  const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
    if (selectedSort === 'deadline') {
      return a.daysLeft - b.daysLeft;
    }
    if (selectedSort === 'newest') {
      return b.daysLeft - a.daysLeft;
    }
    return 0;
  });

  // Featured items for top strip
  const featuredItems = opportunitiesData.filter(o => o.featured);

  // Closing soon items
  const closingSoonItems = opportunitiesData
    .filter(o => o.daysLeft <= 10)
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 4);

  return (
    <div className="space-y-10 pb-16">
      
      {/* Title Header */}
      <div className="text-center sm:text-left space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Discover Opportunities
        </h1>
        <p className="text-sm text-slate-500 max-w-3xl leading-relaxed">
          Find opportunities that help you learn, build your skills, and grow your career. Explore 20+ hackathons across India, high-stipend engineering internships, and national scholarships.
        </p>
      </div>

      {/* OPPORTUNITY COUNTERS STAT STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 rounded-2xl text-white shadow-md">
        <div className="text-center sm:text-left space-y-0.5">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
            2,500+
          </span>
          <span className="block text-xs text-indigo-200">Hackathons & Sprints</span>
        </div>

        <div className="text-center sm:text-left space-y-0.5">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
            500+
          </span>
          <span className="block text-xs text-indigo-200">Internship Openings</span>
        </div>

        <div className="text-center sm:text-left space-y-0.5">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
            100+
          </span>
          <span className="block text-xs text-indigo-200">Verified Scholarships</span>
        </div>

        <div className="text-center sm:text-left space-y-0.5">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
            300+
          </span>
          <span className="block text-xs text-indigo-200">Competitions & Awards</span>
        </div>
      </div>

      {/* FEATURED OPPORTUNITIES CAROUSEL STRIP */}
      {opportunityCategoryFilter === 'All' && !opportunitySearchQuery && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Featured Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredItems.slice(0, 3).map((opp) => {
              const saved = isOpportunitySaved(opp.id);
              return (
                <div
                  key={opp.id}
                  className="bg-gradient-to-b from-white to-slate-50/80 rounded-2xl p-5 border border-indigo-200/80 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {opp.category}
                      </span>
                      <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                        {opp.daysLeft} days left
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 line-clamp-1">
                        {opp.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium">
                        {opp.organization} · {opp.location}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2">
                      {opp.shortDescription}
                    </p>

                    <div className="p-2.5 bg-white rounded-xl border border-slate-200/60 text-xs flex items-center justify-between">
                      <span className="text-slate-500 text-[11px]">Reward / Stipend:</span>
                      <span className="font-bold text-emerald-700">{opp.rewardOrStipend}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      onClick={() => openOpportunityDetails(opp)}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      View Details
                    </button>

                    <a
                      href={opp.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5"
                    >
                      <span>Apply</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* CLOSING SOON URGENT SECTION */}
      {opportunityCategoryFilter === 'All' && !opportunitySearchQuery && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-600" />
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Closing Soon
            </h2>
            <span className="text-xs text-slate-400 font-normal">
              (Deadlines within 10 days)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {closingSoonItems.map((opp) => (
              <div
                key={opp.id}
                onClick={() => openOpportunityDetails(opp)}
                className="bg-white rounded-xl p-4 border border-amber-200/80 hover:border-amber-400 transition-all cursor-pointer shadow-sm hover:shadow group space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide truncate max-w-[120px]">
                    {opp.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                    {opp.daysLeft} days left
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {opp.title}
                </h3>

                <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
                  <span>{opp.location}</span>
                  <span className="font-semibold text-emerald-700">{opp.rewardOrStipend}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* DISCOVERY SEARCH & MULTI-FILTER TOOLBAR */}
      <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
        
        {/* Search input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={opportunitySearchQuery}
            onChange={(e) => setOpportunitySearchQuery(e.target.value)}
            placeholder="Search hackathons, internships, scholarships across Bengaluru, Hyderabad, Online..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = opportunityCategoryFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setOpportunityCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors focus:outline-none ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Secondary Filters: Location, Mode, Sort */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100 text-xs">
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Location Filter
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full py-1.5 px-2.5 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Mode (Online / Offline / Hybrid)
            </label>
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="w-full py-1.5 px-2.5 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {modes.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Sort By
            </label>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as any)}
              className="w-full py-1.5 px-2.5 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="deadline">Deadline Soon (Urgent First)</option>
              <option value="newest">Recently Added</option>
              <option value="relevant">Most Relevant</option>
            </select>
          </div>
        </div>

      </section>

      {/* OPPORTUNITY CARDS DISCOVERY GRID */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Showing <strong>{sortedOpportunities.length}</strong> opportunities matching criteria</span>
          <span>Category: {opportunityCategoryFilter}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedOpportunities.map((opp) => {
            const saved = isOpportunitySaved(opp.id);

            return (
              <div
                key={opp.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category & Save */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {opp.category}
                    </span>

                    <button
                      onClick={() => toggleSaveOpportunity(opp.id)}
                      className="p-1.5 text-slate-400 hover:text-amber-500 transition-colors"
                      title={saved ? 'Saved to profile' : 'Save opportunity'}
                    >
                      {saved ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <span className="text-xs text-slate-500 block">
                      {opp.organization}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug mt-0.5">
                      {opp.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {opp.shortDescription}
                  </p>

                  {/* Metadata strip */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Location & Mode:</span>
                      <span className="font-semibold text-slate-800">
                        {opp.location} · {opp.mode}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Deadline:</span>
                      <span className="font-semibold text-amber-700 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {opp.deadline} ({opp.daysLeft}d left)
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Reward / Stipend:</span>
                      <span className="font-bold text-emerald-700 truncate max-w-[140px] text-right">
                        {opp.rewardOrStipend || 'Certificate & Perks'}
                      </span>
                    </div>
                  </div>

                  {/* Eligibility snippet */}
                  <div className="p-2.5 bg-slate-50 rounded-lg text-[11px] text-slate-600 line-clamp-1 border border-slate-100">
                    <span className="font-semibold text-slate-700">Eligibility: </span>
                    {opp.eligibility}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => openOpportunityDetails(opp)}
                    className="text-xs font-semibold text-slate-700 hover:text-indigo-600"
                  >
                    View Details
                  </button>

                  <a
                    href={opp.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {sortedOpportunities.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <Sparkles className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No opportunities found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try changing your filters, clearing search terms, or resetting location to explore all available engineering opportunities.
            </p>
            <button
              onClick={() => {
                setOpportunityCategoryFilter('All');
                setOpportunitySearchQuery('');
                setSelectedLocation('All Locations');
                setSelectedMode('All Modes');
              }}
              className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </section>

    </div>
  );
};
