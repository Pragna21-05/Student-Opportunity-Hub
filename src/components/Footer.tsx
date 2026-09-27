import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, setSelectedRoadmapId, setOpportunityCategoryFilter, setViewingRoadmapId } = useApp();

  const handleRoadmapClick = (roadmapId: string) => {
    setSelectedRoadmapId(roadmapId);
    setViewingRoadmapId(roadmapId);
    setActiveTab('roadmaps');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: string) => {
    setOpportunityCategoryFilter(cat);
    setActiveTab('opportunities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Student Opportunity Hub
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A single platform built for engineering students to choose step-by-step career roadmaps, master skills with verified external resources, and apply in real hackathons, internships, and scholarships.
            </p>
            <div className="text-xs text-indigo-400 font-semibold tracking-wide">
              Tagline: Discover · Learn · Build · Grow.
            </div>
          </div>

          {/* Column 1: Roadmaps */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Career Roadmaps
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleRoadmapClick('frontend-dev')} className="hover:text-white transition-colors">
                  Frontend Developer
                </button>
              </li>
              <li>
                <button onClick={() => handleRoadmapClick('backend-dev')} className="hover:text-white transition-colors">
                  Backend Developer
                </button>
              </li>
              <li>
                <button onClick={() => handleRoadmapClick('fullstack-dev')} className="hover:text-white transition-colors">
                  Full Stack Engineer
                </button>
              </li>
              <li>
                <button onClick={() => handleRoadmapClick('ai-engineer')} className="hover:text-white transition-colors">
                  AI & Generative AI
                </button>
              </li>
              <li>
                <button onClick={() => handleRoadmapClick('core-vlsi')} className="hover:text-white transition-colors">
                  VLSI & Semiconductors
                </button>
              </li>
              <li>
                <button onClick={() => handleRoadmapClick('higher-gate-mtech')} className="hover:text-white transition-colors">
                  GATE & Higher Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Opportunities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Opportunities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleCategoryClick('Hackathons')} className="hover:text-white transition-colors">
                  Student Hackathons (20+)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Internships')} className="hover:text-white transition-colors">
                  Engineering Internships
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Scholarships')} className="hover:text-white transition-colors">
                  Scholarships & Grants
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Competitions')} className="hover:text-white transition-colors">
                  Coding Competitions
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Open Source Programs')} className="hover:text-white transition-colors">
                  Open Source (GSoC)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Research Opportunities')} className="hover:text-white transition-colors">
                  Research Fellowships
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Verified Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => { setActiveTab('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Student Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('learn'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Verified Learning Resources
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('feedback'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Feedback & Suggestions
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Student Profile
                </button>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Open Ecosystem</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom border & note */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Student Opportunity Hub. Designed for engineering students.</p>
          <div className="flex items-center gap-1">
            <span>Built with focus on real learning and opportunity discovery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
