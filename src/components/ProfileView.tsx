import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { opportunitiesData } from '../data/opportunitiesData';
import { learningSkillsData } from '../data/learningResourcesData';
import { 
  UserCircle, 
  GraduationCap, 
  Building, 
  Mail, 
  Bookmark, 
  CheckCircle, 
  Edit3, 
  ExternalLink, 
  Sparkles, 
  Trash2, 
  Plus, 
  X,
  Clock,
  Compass
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { 
    user, 
    updateProfile, 
    completedSkills, 
    openOpportunityDetails, 
    toggleSaveOpportunity,
    navigateToLearnSkill,
    setActiveTab
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);

  // Edit form states
  const [name, setName] = useState(user?.name || '');
  const [branch, setBranch] = useState(user?.branch || '');
  const [year, setYear] = useState(user?.year || '');
  const [college, setCollege] = useState(user?.college || '');
  const [careerGoal, setCareerGoal] = useState(user?.careerGoal || '');
  const [skillsList, setSkillsList] = useState<string[]>(user?.skills || []);
  const [interestsList, setInterestsList] = useState<string[]>(user?.interests || []);
  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');

  if (!user) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
        <UserCircle className="w-12 h-12 text-slate-300 mx-auto" />
        <h3 className="text-lg font-bold text-slate-900">Please Sign In</h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Sign in to view and personalize your student profile, track completed learning topics, and manage saved opportunities.
        </p>
      </div>
    );
  }

  // Get full objects for saved opportunities
  const savedOpportunities = opportunitiesData.filter(o => user.savedOpportunityIds.includes(o.id));

  // Get full objects for completed skills
  const completedSkillsList = learningSkillsData.filter(s => completedSkills.includes(s.id));

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      branch,
      year,
      college,
      careerGoal,
      skills: skillsList,
      interests: interestsList
    });
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !skillsList.includes(newSkill.trim())) {
      setSkillsList([...skillsList, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkillsList(skillsList.filter(s => s !== skillToRemove));
  };

  const addInterest = () => {
    if (newInterest.trim() && !interestsList.includes(newInterest.trim())) {
      setInterestsList([...interestsList, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setInterestsList(interestsList.filter(i => i !== interestToRemove));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Profile Header Card */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <img
                src={user.avatarUrl || '/src/assets/images/student_avatar_profile_1790505732664.jpg'}
                alt={user.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-indigo-100 shadow-md"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white" title="Active Student">
                ✓
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {user.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Engineering Student
                </span>
              </div>

              <p className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                {user.branch} · {user.year}
              </p>

              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                {user.college}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setName(user.name);
              setBranch(user.branch);
              setYear(user.year);
              setCollege(user.college);
              setCareerGoal(user.careerGoal);
              setSkillsList(user.skills);
              setInterestsList(user.interests);
              setIsEditing(true);
            }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </button>

        </div>

        {/* Quick Student Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-100 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-slate-400 block text-[11px]">Saved Opportunities</span>
            <span className="text-lg font-bold text-slate-900 mt-0.5 block tabular-nums">
              {user.savedOpportunityIds.length}
            </span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-slate-400 block text-[11px]">Skills Completed</span>
            <span className="text-lg font-bold text-emerald-600 mt-0.5 block tabular-nums">
              {completedSkills.length}
            </span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-slate-400 block text-[11px]">Target Career Goal</span>
            <span className="text-xs font-bold text-indigo-700 mt-1 block truncate">
              {user.careerGoal}
            </span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-slate-400 block text-[11px]">Email Verified</span>
            <span className="text-xs font-semibold text-slate-800 mt-1 block truncate">
              {user.email}
            </span>
          </div>
        </div>
      </section>

      {/* Skills & Interests Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Technical Skills */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              Technical Skills & Proficiencies
            </h3>
            <span className="text-xs text-slate-400">{user.skills.length} skills</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {user.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-lg border border-indigo-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Career Interests */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              Fields of Interest & Domains
            </h3>
            <span className="text-xs text-slate-400">{user.interests.length} topics</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {user.interests.map((interest, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* COMPLETED LEARNING TOPICS */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Completed Learning Topics</span>
            </h2>
            <p className="text-xs text-slate-500">
              Verified skills marked as mastered on Student Opportunity Hub
            </p>
          </div>

          <button
            onClick={() => setActiveTab('learn')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Go to Learn Directory
          </button>
        </div>

        {completedSkillsList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {completedSkillsList.map(skill => (
              <div 
                key={skill.id}
                onClick={() => navigateToLearnSkill(skill.id)}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-slate-50/70 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div className="space-y-0.5 truncate">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                    {skill.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {skill.category} · {skill.level}
                  </div>
                </div>

                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-xs text-slate-400">
            No completed skills yet. Browse the Learn section to mark your completed subjects.
          </div>
        )}
      </section>

      {/* SAVED OPPORTUNITIES */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-indigo-600" />
              <span>Saved Opportunities</span>
            </h2>
            <p className="text-xs text-slate-500">
              Hackathons, internships, and scholarships bookmarked for application
            </p>
          </div>

          <button
            onClick={() => setActiveTab('opportunities')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Discover More
          </button>
        </div>

        {savedOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {savedOpportunities.map(opp => (
              <div
                key={opp.id}
                className="p-4 rounded-xl border border-slate-200/90 hover:border-indigo-300 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-indigo-600 text-[11px]">
                      {opp.category}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {opp.daysLeft} days left
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {opp.title}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {opp.organization} · {opp.location}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openOpportunityDetails(opp)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => toggleSaveOpportunity(opp.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-xs text-slate-400">
            No saved opportunities yet. Click the bookmark icon on any hackathon or internship to save it here.
          </div>
        )}
      </section>

      {/* EDIT PROFILE MODAL */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="text-base font-bold text-slate-900">
                Edit Student Profile
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="p-5 overflow-y-auto space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Engineering Branch
                  </label>
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Year of Study
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  College / University
                </label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Primary Career Goal
                </label>
                <input
                  type="text"
                  value={careerGoal}
                  onChange={(e) => setCareerGoal(e.target.value)}
                  placeholder="e.g. Full Stack & AI Engineer"
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Skills edit */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Skills (press Add to include)
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="e.g. React, Docker, Python"
                    className="flex-1 p-2 border border-slate-300 rounded-lg text-xs text-slate-900"
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {skillsList.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[11px] font-semibold flex items-center gap-1"
                    >
                      {s}
                      <button type="button" onClick={() => removeSkill(s)}>
                        <X className="w-3 h-3 text-indigo-500 hover:text-indigo-800" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests edit */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Interests
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="e.g. Hackathons, Cloud, AI"
                    className="flex-1 p-2 border border-slate-300 rounded-lg text-xs text-slate-900"
                  />
                  <button
                    type="button"
                    onClick={addInterest}
                    className="px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {interestsList.map((i, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium flex items-center gap-1"
                    >
                      {i}
                      <button type="button" onClick={() => removeInterest(i)}>
                        <X className="w-3 h-3 text-slate-400 hover:text-slate-700" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
