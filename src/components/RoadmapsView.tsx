import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { careerRoadmapsData } from '../data/roadmapsData';
import { CareerRoadmap, RoadmapCategory } from '../types';
import { 
  Compass, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Search, 
  Filter, 
  Sparkles, 
  Briefcase,
  GraduationCap,
  Cpu,
  Layers,
  Award
} from 'lucide-react';

export const RoadmapsView: React.FC = () => {
  const { 
    selectedRoadmapId, 
    setSelectedRoadmapId, 
    navigateToLearnSkill,
    completedSkills,
    viewingRoadmapId,
    setViewingRoadmapId
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected roadmap to display in detailed step-by-step visual view
  const activeRoadmap = viewingRoadmapId 
    ? careerRoadmapsData.find(r => r.id === viewingRoadmapId) 
    : null;

  const categories: string[] = [
    'All',
    'Technology Career Paths',
    'Engineering Education Paths',
    'Engineering Branches',
    'Core Engineering Careers',
    'Higher Studies',
    'Government & Competitive Exams',
    'Research & Academia',
    'Entrepreneurship'
  ];

  const filteredRoadmaps = careerRoadmapsData.filter(roadmap => {
    const matchesCategory = selectedCategory === 'All' || roadmap.category === selectedCategory;
    const matchesSearch = 
      roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roadmap.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roadmap.skillsSummary.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSelectActiveCareer = (roadmapId: string) => {
    setSelectedRoadmapId(roadmapId);
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* If viewing a specific visual roadmap */}
      {activeRoadmap ? (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Back button & Action banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewingRoadmapId(null)}
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Roadmaps</span>
              </button>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                {activeRoadmap.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {selectedRoadmapId === activeRoadmap.id ? (
                <span className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Active Career Path
                </span>
              ) : (
                <button
                  onClick={() => handleSelectActiveCareer(activeRoadmap.id)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                >
                  Set as My Target Career
                </button>
              )}
            </div>
          </div>

          {/* Roadmap Header Overview */}
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-800">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
                <span>Estimated Mastery: {activeRoadmap.estimatedDuration}</span>
                <span aria-hidden="true">·</span>
                <span>{activeRoadmap.steps.length} Progression Steps</span>
                <span aria-hidden="true">·</span>
                <span>Difficulty: {activeRoadmap.difficulty}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeRoadmap.title}
              </h1>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeRoadmap.longDescription}
              </p>

              {/* Roles */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="font-semibold text-white">Target Roles:</span>
                {activeRoadmap.popularRoles.map((role, idx) => (
                  <span key={idx} className="bg-white/10 px-2.5 py-1 rounded-md text-white/90">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* VISUAL STEP-BY-STEP PROGRESSION CHAIN */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                  Step-by-Step Learning Progression
                </h2>
                <p className="text-xs text-slate-500">
                  Each step indicates what to learn. Click &ldquo;Learn This Skill&rdquo; to jump straight to real verified documentation.
                </p>
              </div>
            </div>

            {/* Vertical interactive timeline with connectors */}
            <div className="space-y-4 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-indigo-100 before:hidden md:before:block">
              {activeRoadmap.steps.map((step, index) => {
                const isCompleted = step.skillId ? completedSkills.includes(step.skillId) : false;

                return (
                  <div 
                    key={step.id} 
                    className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-indigo-300 transition-all ml-0 md:ml-12"
                  >
                    {/* Node indicator */}
                    <div className="hidden md:flex absolute -left-12 top-6 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-white shadow-sm items-center justify-center text-xs font-bold bg-indigo-600 text-white">
                      {isCompleted ? <CheckCircle className="w-4 h-4 text-white" /> : index + 1}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="md:hidden w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                            {index + 1}
                          </span>
                          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                            Step {index + 1} · {step.estimatedWeeks}
                          </span>
                          {isCompleted && (
                            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                              ✓ Completed
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-bold text-slate-900">
                          {step.title}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Topics list */}
                        <div className="pt-2">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                            Key Subjects & Topics:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {step.topics.map((t, idx) => (
                              <span 
                                key={idx} 
                                className="text-xs text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action: LEARN THIS SKILL */}
                      <div className="shrink-0 pt-2 md:pt-0">
                        {step.skillId ? (
                          <button
                            onClick={() => navigateToLearnSkill(step.skillId!, activeRoadmap.id)}
                            className="w-full md:w-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 group"
                          >
                            <BookOpen className="w-4 h-4 text-indigo-200" />
                            <span>Learn This Skill</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        ) : (
                          <button
                            onClick={() => navigateToLearnSkill('html', activeRoadmap.id)}
                            className="w-full md:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                          >
                            <span>Browse Resources</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      ) : (
        /* ROADMAPS CATALOG VIEW */
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Header */}
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore Career Roadmaps
            </h1>
            <p className="text-sm text-slate-500 max-w-3xl leading-relaxed">
              Choose a career path and understand the skills you need to build step by step. Each roadmap connects directly to real learning resources and active student opportunities.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search roadmaps by title, skill (e.g. React, Python, VLSI, GATE, AI)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
              />
            </div>

            {/* Category Segmented Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
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
          </div>

          {/* Roadmaps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoadmaps.map((roadmap) => {
              const isCurrent = selectedRoadmapId === roadmap.id;

              return (
                <div
                  key={roadmap.id}
                  className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between group ${
                    isCurrent
                      ? 'border-indigo-400 ring-2 ring-indigo-100 shadow-md'
                      : 'border-slate-200/80 hover:border-indigo-300 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-indigo-600">
                        {roadmap.category}
                      </span>
                      <span className="text-slate-400 font-medium">
                        {roadmap.estimatedDuration}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {roadmap.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-1.5">
                        {roadmap.shortDescription}
                      </p>
                    </div>

                    {/* Step progression preview chain */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Skill Progression:
                      </span>
                      <div className="text-xs text-slate-700 font-medium leading-relaxed">
                        {roadmap.skillsSummary.join(' → ')}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setViewingRoadmapId(roadmap.id)}
                      className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      <span>View Roadmap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-xs text-slate-400 font-medium">
                      {roadmap.steps.length} Steps
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRoadmaps.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <Compass className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">No roadmaps matched your filters</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching with different terms or reset your category filter to explore all engineering career paths.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
