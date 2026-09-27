import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavTab, UserProfile, Opportunity, FeedbackSubmission } from '../types';
import { opportunitiesData } from '../data/opportunitiesData';
import { careerRoadmapsData } from '../data/roadmapsData';
import { learningSkillsData } from '../data/learningResourcesData';

interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  user: UserProfile | null;
  loginUser: (email: string, name?: string, branch?: string, year?: string) => void;
  signupUser: (profile: Partial<UserProfile>) => void;
  logoutUser: () => void;
  updateProfile: (updated: Partial<UserProfile>) => void;
  
  // Connected Flow
  selectedRoadmapId: string;
  setSelectedRoadmapId: (roadmapId: string) => void;
  activeSkillId: string | null;
  navigateToLearnSkill: (skillId: string, roadmapId?: string) => void;
  
  // Opportunities
  selectedOpportunity: Opportunity | null;
  openOpportunityDetails: (opportunity: Opportunity) => void;
  closeOpportunityDetails: () => void;
  toggleSaveOpportunity: (opportunityId: string) => void;
  isOpportunitySaved: (opportunityId: string) => boolean;
  opportunityCategoryFilter: string;
  setOpportunityCategoryFilter: (category: string) => void;
  navigateToOpportunitiesWithFilter: (category?: string, search?: string) => void;
  opportunitySearchQuery: string;
  setOpportunitySearchQuery: (query: string) => void;
  
  // Learning progress
  completedSkills: string[];
  toggleSkillCompletion: (skillId: string) => void;
  isSkillCompleted: (skillId: string) => boolean;

  // Feedback
  feedbacks: FeedbackSubmission[];
  addFeedback: (submission: Omit<FeedbackSubmission, 'id' | 'timestamp'>) => void;

  // View state for specific roadmap detail
  viewingRoadmapId: string | null;
  setViewingRoadmapId: (id: string | null) => void;
}

const defaultDemoUser: UserProfile = {
  name: 'Aarav Sharma',
  email: 'aarav.sharma@engg.edu.in',
  branch: 'Computer Science & Engineering',
  year: '3rd Year (B.Tech)',
  college: 'Osmania University College of Engineering, Hyderabad',
  skills: ['HTML5', 'CSS3', 'JavaScript', 'Git & GitHub', 'Python', 'React 19', 'SQL'],
  interests: ['Generative AI', 'Frontend Architecture', 'Hackathons', 'Cloud Computing'],
  careerGoal: 'Full Stack & AI Engineer',
  savedOpportunityIds: ['hack-smart-india', 'hack-hyd-devcon', 'intern-google-swe', 'sch-reliance-foundation'],
  completedSkillIds: ['html', 'css', 'javascript', 'git-github'],
  avatarUrl: '/src/assets/images/student_avatar_profile_1790505732664.jpg'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved state or default
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('soh_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultDemoUser;
      }
    }
    return defaultDemoUser; // Starts with pre-authenticated demo state for instant usability, with full login/signup flow available
  });

  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>('frontend-dev');
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [opportunityCategoryFilter, setOpportunityCategoryFilter] = useState<string>('All');
  const [opportunitySearchQuery, setOpportunitySearchQuery] = useState<string>('');
  const [viewingRoadmapId, setViewingRoadmapId] = useState<string | null>(null);

  const [completedSkills, setCompletedSkills] = useState<string[]>(() => {
    const saved = localStorage.getItem('soh_completed_skills');
    return saved ? JSON.parse(saved) : ['html', 'css', 'javascript', 'git-github'];
  });

  const [feedbacks, setFeedbacks] = useState<FeedbackSubmission[]>(() => {
    const saved = localStorage.getItem('soh_feedbacks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('soh_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('soh_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('soh_completed_skills', JSON.stringify(completedSkills));
  }, [completedSkills]);

  useEffect(() => {
    localStorage.setItem('soh_feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const loginUser = (email: string, name?: string, branch?: string, year?: string) => {
    const defaultCompleted = ['html', 'css', 'javascript', 'git-github'];
    const newUser: UserProfile = {
      name: name || (email.split('@')[0].replace('.', ' ').replace(/^./, str => str.toUpperCase())),
      email,
      branch: branch || 'Computer Science & Engineering',
      year: year || '3rd Year (B.Tech)',
      college: 'Indian Institute of Engineering & Technology',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
      interests: ['Web Development', 'Hackathons', 'Cloud'],
      careerGoal: 'Software Development Engineer',
      savedOpportunityIds: ['hack-smart-india', 'intern-google-swe'],
      completedSkillIds: defaultCompleted,
      avatarUrl: '/src/assets/images/student_avatar_profile_1790505732664.jpg'
    };
    setUser(newUser);
    setCompletedSkills(defaultCompleted);
    setActiveTab('dashboard');
  };

  const signupUser = (profile: Partial<UserProfile>) => {
    const newUser: UserProfile = {
      name: profile.name || 'New Engineering Student',
      email: profile.email || 'student@university.edu',
      branch: profile.branch || 'Computer Science & Engineering',
      year: profile.year || '1st Year (B.Tech)',
      college: profile.college || 'Engineering College',
      skills: profile.skills || ['Programming Basics', 'HTML5'],
      interests: profile.interests || ['Hackathons', 'Learning Roadmaps'],
      careerGoal: profile.careerGoal || 'Full Stack Developer',
      savedOpportunityIds: [],
      completedSkillIds: [],
      avatarUrl: '/src/assets/images/student_avatar_profile_1790505732664.jpg'
    };
    setUser(newUser);
    setCompletedSkills([]);
    setActiveTab('dashboard');
  };

  const logoutUser = () => {
    setUser(null);
  };

  const updateProfile = (updated: Partial<UserProfile>) => {
    setUser(prev => {
      if (!prev) return null;
      return { ...prev, ...updated };
    });
  };

  const navigateToLearnSkill = (skillId: string, roadmapId?: string) => {
    if (roadmapId) {
      setSelectedRoadmapId(roadmapId);
    }
    setActiveSkillId(skillId);
    setViewingRoadmapId(null);
    setActiveTab('learn');
  };

  const openOpportunityDetails = (opp: Opportunity) => {
    setSelectedOpportunity(opp);
  };

  const closeOpportunityDetails = () => {
    setSelectedOpportunity(null);
  };

  const toggleSaveOpportunity = (oppId: string) => {
    if (!user) return;
    const isSaved = user.savedOpportunityIds.includes(oppId);
    const updatedIds = isSaved
      ? user.savedOpportunityIds.filter(id => id !== oppId)
      : [...user.savedOpportunityIds, oppId];
    
    setUser({ ...user, savedOpportunityIds: updatedIds });
  };

  const isOpportunitySaved = (oppId: string) => {
    return user ? user.savedOpportunityIds.includes(oppId) : false;
  };

  const toggleSkillCompletion = (skillId: string) => {
    setCompletedSkills(prev => {
      const next = prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId];
      return next;
    });

    setUser(prev => {
      if (!prev) return null;
      const isDone = prev.completedSkillIds.includes(skillId);
      const updated = isDone
        ? prev.completedSkillIds.filter(id => id !== skillId)
        : [...prev.completedSkillIds, skillId];
      return { ...prev, completedSkillIds: updated };
    });
  };

  const isSkillCompleted = (skillId: string) => {
    return completedSkills.includes(skillId);
  };

  const navigateToOpportunitiesWithFilter = (category?: string, search?: string) => {
    if (category) {
      setOpportunityCategoryFilter(category);
    }
    if (search !== undefined) {
      setOpportunitySearchQuery(search);
    }
    setActiveTab('opportunities');
  };

  const addFeedback = (submission: Omit<FeedbackSubmission, 'id' | 'timestamp'>) => {
    const newFeedback: FeedbackSubmission = {
      id: 'fb-' + Date.now(),
      timestamp: new Date().toISOString(),
      ...submission
    };
    setFeedbacks(prev => [newFeedback, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        user,
        loginUser,
        signupUser,
        logoutUser,
        updateProfile,
        selectedRoadmapId,
        setSelectedRoadmapId,
        activeSkillId,
        navigateToLearnSkill,
        selectedOpportunity,
        openOpportunityDetails,
        closeOpportunityDetails,
        toggleSaveOpportunity,
        isOpportunitySaved,
        opportunityCategoryFilter,
        setOpportunityCategoryFilter,
        navigateToOpportunitiesWithFilter,
        opportunitySearchQuery,
        setOpportunitySearchQuery,
        completedSkills,
        toggleSkillCompletion,
        isSkillCompleted,
        feedbacks,
        addFeedback,
        viewingRoadmapId,
        setViewingRoadmapId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
