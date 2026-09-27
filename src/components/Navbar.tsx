import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NavTab } from '../types';
import { Compass, BookOpen, Sparkles, MessageSquareHeart, UserCircle, LogOut, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, user, logoutUser, setViewingRoadmapId } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { tab: NavTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'dashboard', label: 'Home', icon: <Compass className="w-4 h-4" /> },
    { tab: 'roadmaps', label: 'Career Roadmaps', icon: <Compass className="w-4 h-4" /> },
    { tab: 'learn', label: 'Learn', icon: <BookOpen className="w-4 h-4" /> },
    { tab: 'opportunities', label: 'Opportunities', icon: <Sparkles className="w-4 h-4" /> },
    { tab: 'feedback', label: 'Feedback', icon: <MessageSquareHeart className="w-4 h-4" /> },
  ];

  const handleNav = (tab: NavTab) => {
    if (tab === 'roadmaps') {
      setViewingRoadmapId(null);
    }
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Brand Wordmark (Single text element with distinctive logo mark) */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNav('dashboard')}
              className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm shadow-indigo-200 transition-transform group-hover:scale-105">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Student Opportunity Hub
                </span>
                <span className="text-[11px] text-slate-500 font-medium hidden sm:inline -mt-0.5">
                  Discover · Learn · Build · Grow
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Clean text links with active states) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(({ tab, label }) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleNav(tab)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Profile & Logout) */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNav('profile')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    activeTab === 'profile'
                      ? 'border-indigo-400 bg-indigo-50 text-indigo-700'
                      : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                  }`}
                  title="View Profile"
                >
                  <img
                    src={user.avatarUrl || '/src/assets/images/student_avatar_profile_1790505732664.jpg'}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-xs font-semibold max-w-[100px] truncate hidden sm:inline">
                    {user.name}
                  </span>
                </button>

                <button
                  onClick={logoutUser}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  title="Log Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setActiveTab('dashboard')}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center gap-1.5"
              >
                Sign In <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-4 space-y-1 shadow-lg">
          {navLinks.map(({ tab, label, icon }) => (
            <button
              key={tab}
              onClick={() => handleNav(tab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left ${
                activeTab === tab
                  ? 'text-indigo-600 bg-indigo-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
          {user && (
            <button
              onClick={() => handleNav('profile')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left ${
                activeTab === 'profile'
                  ? 'text-indigo-600 bg-indigo-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <UserCircle className="w-4 h-4" />
              <span>Student Profile ({user.name})</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
