import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { learningSkillsData } from '../data/learningResourcesData';
import { careerRoadmapsData } from '../data/roadmapsData';
import { LearningSkill, ExternalResourceLink } from '../types';
import { 
  BookOpen, 
  CheckCircle, 
  Circle, 
  ExternalLink, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Clock, 
  GraduationCap, 
  Layers,
  ChevronRight,
  TrendingUp,
  BookmarkCheck,
  Compass
} from 'lucide-react';

export const LearnView: React.FC = () => {
  const { 
    selectedRoadmapId, 
    setSelectedRoadmapId, 
    activeSkillId, 
    completedSkills, 
    toggleSkillCompletion,
    isSkillCompleted,
    navigateToOpportunitiesWithFilter
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const skillRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const currentRoadmap = careerRoadmapsData.find(r => r.id === selectedRoadmapId) || careerRoadmapsData[0];

  // Auto-scroll to activeSkillId if passed from Roadmaps
  useEffect(() => {
    if (activeSkillId && skillRefs.current[activeSkillId]) {
      skillRefs.current[activeSkillId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeSkillId]);

  const categories = [
    'All',
    'Programming Fundamentals',
    'Frontend Development',
    'Backend Development',
    'Database',
    'AI & Machine Learning',
    'Data Science',
    'Cloud & DevOps',
    'Cybersecurity',
    'UI/UX Design',
    'Tools & Technologies'
  ];

  // Skills belonging to current roadmap
  const roadmapSkillIds = currentRoadmap.steps.map(s => s.skillId).filter(Boolean) as string[];
  const completedInRoadmap = roadmapSkillIds.filter(id => completedSkills.includes(id));
  const progressPercent = roadmapSkillIds.length > 0 
    ? Math.round((completedInRoadmap.length / roadmapSkillIds.length) * 100) 
    : 0;

  // Next recommended skill
  const nextSkillStep = currentRoadmap.steps.find(s => s.skillId && !completedSkills.includes(s.skillId));
  const nextSkillData = nextSkillStep?.skillId 
    ? learningSkillsData.find(l => l.id === nextSkillStep.skillId) 
    : null;

  // Filter skills
  const filteredSkills = learningSkillsData.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.whatYouWillLearn.some(w => w.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-16">
      
      {/* Title Header */}
      <div className="text-center sm:text-left space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          What should you learn?
        </h1>
        <p className="text-sm text-slate-500 max-w-3xl leading-relaxed">
          Follow your career roadmap and learn the skills you need step by step. Every topic connects to authentic documentation, official guides, and interactive tutorials.
        </p>
      </div>

      {/* PERSONALIZED CAREER LEARNING TRACKER */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">
              Your Selected Career Roadmap
            </span>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {currentRoadmap.title}
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              {completedInRoadmap.length} of {roadmapSkillIds.length} foundational skills completed ({progressPercent}%)
            </p>
          </div>

          {/* Quick Career Selector Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Switch Target:</span>
            <select
              value={selectedRoadmapId}
              onChange={(e) => setSelectedRoadmapId(e.target.value)}
              className="text-xs font-semibold py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
            >
              {careerRoadmapsData.map(r => (
                <option key={r.id} value={r.id}>{r.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200/60">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.max(progressPercent, 4)}%` }}
            />
          </div>
        </div>

        {/* Visual Learning Path Sequence */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Your Step-by-Step Learning Path:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {currentRoadmap.steps.map((step, idx) => {
              const completed = step.skillId ? completedSkills.includes(step.skillId) : false;
              const isCurrent = nextSkillStep?.id === step.id;

              return (
                <div 
                  key={step.id}
                  onClick={() => {
                    if (step.skillId && skillRefs.current[step.skillId]) {
                      skillRefs.current[step.skillId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className={`px-3 py-2 rounded-xl border text-xs font-medium shrink-0 cursor-pointer transition-all flex items-center gap-1.5 ${
                    completed
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : isCurrent
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm font-bold'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {completed ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  ) : isCurrent ? (
                    <span className="w-3.5 h-3.5 rounded-full bg-white text-indigo-600 text-[10px] font-bold flex items-center justify-center">
                      →
                    </span>
                  ) : (
                    <Circle className="w-3 h-3 text-slate-400" />
                  )}
                  <span>{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight next recommended topic */}
        {nextSkillData && (
          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                Current Recommended Focus
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                {nextSkillData.name} · {nextSkillData.level} Level
              </h3>
              <p className="text-xs text-slate-600 line-clamp-1">
                {nextSkillData.shortDescription}
              </p>
            </div>

            <button
              onClick={() => {
                if (skillRefs.current[nextSkillData.id]) {
                  skillRefs.current[nextSkillData.id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <span>Jump to Resources</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </section>

      {/* OPPORTUNITY CONNECTION BANNER */}
      {completedSkills.length > 0 && (
        <section className="bg-gradient-to-r from-violet-900 via-indigo-900 to-blue-900 text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-violet-300">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Ready to build your experience?</span>
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              You have mastered {completedSkills.length} key engineering skill{completedSkills.length > 1 ? 's' : ''}!
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              Put your knowledge to work in real hackathons, student software internships, and national competitions.
            </p>
          </div>

          <button
            onClick={() => navigateToOpportunitiesWithFilter('Hackathons')}
            className="px-5 py-3 bg-white text-indigo-900 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors shrink-0 flex items-center justify-center gap-2"
          >
            <span>Explore Matching Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      )}

      {/* Search & Category Filter Toolbar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies & skills (e.g. React, Python, SQL, Docker, APIs)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
          />
        </div>

        {/* Category Filter Buttons */}
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

      {/* REAL LEARNING RESOURCE DIRECTORY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill) => {
          const completed = isSkillCompleted(skill.id);
          const isHighlighted = activeSkillId === skill.id;

          return (
            <div
              key={skill.id}
              ref={el => { skillRefs.current[skill.id] = el; }}
              className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                isHighlighted
                  ? 'border-indigo-500 ring-4 ring-indigo-100 shadow-lg'
                  : 'border-slate-200/80 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header Strip */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                      <span className="text-indigo-600 font-bold">{skill.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Level: {skill.level}</span>
                      <span aria-hidden="true">·</span>
                      <span>{skill.estimatedHours}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Complete Checkbox Button */}
                  <button
                    onClick={() => toggleSkillCompletion(skill.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1.5 shrink-0 ${
                      completed
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                    title={completed ? 'Mark as incomplete' : 'Mark as completed'}
                  >
                    {completed ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mark Done</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {skill.shortDescription}
                </p>

                {/* What you'll learn */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Competencies & Concepts:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {skill.whatYouWillLearn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* REAL EXTERNAL LEARNING RESOURCES (No fake courses!) */}
              <div className="pt-5 mt-5 border-t border-slate-100 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Authentic Documentation & Guides:
                </span>
                
                <div className="space-y-2">
                  {skill.resources.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="space-y-0.5 truncate">
                        <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                          {res.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {res.provider} · {res.type}
                        </div>
                      </div>

                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <span>Study Now</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">No learning resources matched your search</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or reset category filter to see all engineering technologies.
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
  );
};
