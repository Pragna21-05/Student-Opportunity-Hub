import React from 'react';
import { useApp } from '../context/AppContext';
import { careerRoadmapsData } from '../data/roadmapsData';
import { opportunitiesData } from '../data/opportunitiesData';
import { learningSkillsData } from '../data/learningResourcesData';
import { 
  Compass, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle, 
  Flame, 
  ChevronRight,
  TrendingUp,
  Award,
  Layers,
  ExternalLink
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { 
    user, 
    setActiveTab, 
    setSelectedRoadmapId, 
    selectedRoadmapId, 
    openOpportunityDetails, 
    isOpportunitySaved, 
    toggleSaveOpportunity,
    completedSkills,
    navigateToLearnSkill,
    setViewingRoadmapId
  } = useApp();

  const currentRoadmap = careerRoadmapsData.find(r => r.id === selectedRoadmapId) || careerRoadmapsData[0];
  
  // Calculate learning progress for current roadmap
  const roadmapSkillIds = currentRoadmap.steps.map(s => s.skillId).filter(Boolean) as string[];
  const completedInRoadmap = roadmapSkillIds.filter(id => completedSkills.includes(id));
  const progressPercent = roadmapSkillIds.length > 0 
    ? Math.round((completedInRoadmap.length / roadmapSkillIds.length) * 100) 
    : 0;

  // Next recommended skill in current roadmap
  const nextSkillStep = currentRoadmap.steps.find(s => s.skillId && !completedSkills.includes(s.skillId));
  const nextSkillData = nextSkillStep?.skillId 
    ? learningSkillsData.find(l => l.id === nextSkillStep.skillId) 
    : null;

  // Upcoming hackathons (closing soon or featured)
  const upcomingHackathons = opportunitiesData
    .filter(o => o.category === 'Hackathons')
    .slice(0, 4);

  // Featured internships
  const featuredInternships = opportunitiesData
    .filter(o => o.category === 'Internships')
    .slice(0, 3);

  // Recommended roadmaps
  const recommendedRoadmaps = careerRoadmapsData.slice(0, 4);

  return (
    <div className="space-y-10 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl border border-indigo-950/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Single Platform for Engineering Careers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Build Your Career, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-violet-300 bg-clip-text text-transparent">
              One Step at a Time.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Explore structured engineering roadmaps, master the right skills using authentic open resources, and apply your skills in verified hackathons, internships, and scholarships.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('roadmaps')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 group"
            >
              <span>Explore Roadmaps</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab('opportunities')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <span>Find Opportunities</span>
            </button>

            <button
              onClick={() => setActiveTab('learn')}
              className="px-5 py-3 text-slate-300 hover:text-white font-semibold text-sm transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Learning Directory</span>
            </button>
          </div>
        </div>

        {/* Small Statistics Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 mt-10 border-t border-slate-800 text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
              16+
            </span>
            <span className="block text-xs text-slate-400 font-medium">Career Paths</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
              120+
            </span>
            <span className="block text-xs text-slate-400 font-medium">Learning Resources</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-indigo-300 tabular-nums">
              2,500+
            </span>
            <span className="block text-xs text-slate-400 font-medium">Opportunities</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-400 tabular-nums">
              45,000+
            </span>
            <span className="block text-xs text-slate-400 font-medium">Students Connected</span>
          </div>
        </div>
      </section>

      {/* CORE UX JOURNEY CONNECTION BANNER */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
        <div className="max-w-2xl mb-6">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>The Student Opportunity Hub Journey</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            How our three connected sections guide engineering students from exploration to real-world experience:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Step 1 */}
          <div 
            onClick={() => setActiveTab('roadmaps')}
            className="p-5 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white hover:border-blue-300 transition-all cursor-pointer group space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                What to learn?
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Career Roadmaps
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Choose your goal (Frontend, Backend, AI, VLSI, GATE). Get a clear, step-by-step skill progression.
            </p>
            <div className="text-xs text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>View roadmaps</span> <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Step 2 */}
          <div 
            onClick={() => setActiveTab('learn')}
            className="p-5 rounded-xl border border-indigo-100 bg-gradient-to-b from-indigo-50/50 to-white hover:border-indigo-300 transition-all cursor-pointer group space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                Where to learn?
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Verified Learn Directory
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every skill connects to real official docs (MDN, W3Schools, Python.org, React). No fake courses.
            </p>
            <div className="text-xs text-indigo-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Start learning</span> <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Step 3 */}
          <div 
            onClick={() => setActiveTab('opportunities')}
            className="p-5 rounded-xl border border-violet-100 bg-gradient-to-b from-violet-50/50 to-white hover:border-violet-300 transition-all cursor-pointer group space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                Where to apply?
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
              Real Opportunities
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Apply your verified skills directly in hackathons, internships, scholarships, and student programs.
            </p>
            <div className="text-xs text-violet-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Find hackathons</span> <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUE LEARNING SECTION (Connected to active career) */}
      <section className="bg-gradient-to-r from-indigo-50/70 via-blue-50/40 to-slate-50 rounded-2xl p-6 sm:p-8 border border-indigo-100/80 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-indigo-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-wider">
              <span>Continue Learning</span>
              <span aria-hidden="true">·</span>
              <span>Your Selected Career</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
              {currentRoadmap.title}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {completedInRoadmap.length} of {roadmapSkillIds.length} key skills completed ({progressPercent}%)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab('learn');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>Go to Learning Path</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden my-5">
          <div 
            className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.max(progressPercent, 5)}%` }}
          />
        </div>

        {/* Next recommended topic prompt */}
        {nextSkillData ? (
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                Recommended Next Step
              </span>
              <h3 className="text-base font-bold text-slate-900">
                {nextSkillData.name}
              </h3>
              <p className="text-xs text-slate-600 max-w-xl">
                {nextSkillData.shortDescription}
              </p>
            </div>

            <button
              onClick={() => navigateToLearnSkill(nextSkillData.id, currentRoadmap.id)}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1.5"
            >
              <span>Study Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="bg-emerald-50 rounded-xl p-4 text-xs text-emerald-800 font-medium flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Congratulations! You have completed all foundational skills in this roadmap. Ready to build portfolio capstones and apply for opportunities!</span>
          </div>
        )}
      </section>

      {/* RECOMMENDED ROADMAPS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Recommended Roadmaps
            </h2>
            <p className="text-xs text-slate-500">
              Clear progression roadmaps chosen by engineering students
            </p>
          </div>

          <button
            onClick={() => setActiveTab('roadmaps')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View all 16 roadmaps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedRoadmaps.map((roadmap) => (
            <div
              key={roadmap.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-indigo-600 font-semibold">{roadmap.category}</span>
                  <span>{roadmap.estimatedDuration}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {roadmap.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {roadmap.shortDescription}
                </p>

                {/* Skill progression preview */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Path Progression:
                  </span>
                  <div className="text-[11px] text-slate-700 font-medium truncate">
                    {roadmap.skillsSummary.slice(0, 4).join(' → ')}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedRoadmapId(roadmap.id);
                    setViewingRoadmapId(roadmap.id);
                    setActiveTab('roadmaps');
                  }}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>View Roadmap</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <span className="text-[11px] text-slate-400">
                  {roadmap.steps.length} Steps
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING HACKATHONS (Closing Soon) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              <span>Closing Soon</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Upcoming Hackathons Across India
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveTab('opportunities');
            }}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>Explore 20+ hackathons</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingHackathons.map((opp) => {
            const saved = isOpportunitySaved(opp.id);
            return (
              <div
                key={opp.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60">
                      {opp.daysLeft} days left
                    </span>
                    <button
                      onClick={() => toggleSaveOpportunity(opp.id)}
                      className="text-slate-400 hover:text-amber-500 transition-colors p-1"
                      title={saved ? 'Remove from Saved' : 'Save Opportunity'}
                    >
                      {saved ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-500 block truncate">
                      {opp.organization}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2 mt-0.5 leading-snug">
                      {opp.title}
                    </h3>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Location:</span>
                      <span className="font-medium text-slate-800">{opp.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Prize Pool:</span>
                      <span className="font-semibold text-emerald-700 truncate max-w-[130px] text-right">
                        {opp.rewardOrStipend}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
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
                    className="text-xs font-bold text-slate-800 hover:text-indigo-600 flex items-center gap-1"
                  >
                    <span>Apply</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED INTERNSHIPS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Featured Engineering Internships
            </h2>
            <p className="text-xs text-slate-500">
              High-stipend summer and semester internships at top tech firms
            </p>
          </div>

          <button
            onClick={() => setActiveTab('opportunities')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View all internships</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredInternships.map((opp) => {
            const saved = isOpportunitySaved(opp.id);
            return (
              <div
                key={opp.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-600">
                      {opp.domain}
                    </span>
                    <button
                      onClick={() => toggleSaveOpportunity(opp.id)}
                      className="text-slate-400 hover:text-amber-500 transition-colors p-1"
                    >
                      {saved ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {opp.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      {opp.organization} · {opp.location}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {opp.shortDescription}
                  </p>

                  <div className="p-2.5 bg-slate-50 rounded-lg text-xs flex items-center justify-between">
                    <span className="text-slate-500 text-[11px]">Monthly Stipend:</span>
                    <span className="font-bold text-emerald-700">{opp.rewardOrStipend}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openOpportunityDetails(opp)}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900"
                  >
                    Eligibility & Details
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

    </div>
  );
};
