export type NavTab = 'dashboard' | 'roadmaps' | 'learn' | 'opportunities' | 'feedback' | 'profile';

export interface UserProfile {
  name: string;
  email: string;
  branch: string;
  year: string;
  college: string;
  skills: string[];
  interests: string[];
  careerGoal: string;
  savedOpportunityIds: string[];
  completedSkillIds: string[];
  avatarUrl?: string;
}

export type RoadmapCategory = 
  | 'Technology Career Paths'
  | 'Engineering Education Paths'
  | 'Engineering Branches'
  | 'Core Engineering Careers'
  | 'Higher Studies'
  | 'Government & Competitive Exams'
  | 'Research & Academia'
  | 'Entrepreneurship';

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  skillId?: string; // links to learning resource
  topics: string[];
  estimatedWeeks: string;
}

export interface CareerRoadmap {
  id: string;
  title: string;
  category: RoadmapCategory;
  shortDescription: string;
  longDescription: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Comprehensive';
  estimatedDuration: string;
  skillsSummary: string[];
  steps: RoadmapStep[];
  popularRoles: string[];
  relatedOpportunityTags: string[];
}

export interface ExternalResourceLink {
  title: string;
  provider: string; // e.g. "MDN Web Docs", "W3Schools", "freeCodeCamp", "Official Docs"
  url: string;
  type: 'Documentation' | 'Interactive Tutorial' | 'Official Guide' | 'Course';
  free: boolean;
}

export interface LearningSkill {
  id: string;
  name: string;
  category: 
    | 'Programming Fundamentals'
    | 'Frontend Development'
    | 'Backend Development'
    | 'Database'
    | 'AI & Machine Learning'
    | 'Data Science'
    | 'Cloud & DevOps'
    | 'Cybersecurity'
    | 'Mobile Development'
    | 'UI/UX Design'
    | 'Core Engineering'
    | 'Tools & Technologies';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  shortDescription: string;
  whatYouWillLearn: string[];
  estimatedHours: string;
  resources: ExternalResourceLink[];
  relatedCareerIds: string[];
  recommendedOpportunityKeywords: string[];
}

export type OpportunityCategory = 
  | 'Hackathons'
  | 'Internships'
  | 'Scholarships'
  | 'Jobs'
  | 'Competitions'
  | 'Fellowships'
  | 'Workshops'
  | 'Certifications'
  | 'Open Source Programs'
  | 'Student Programs'
  | 'Campus Ambassador'
  | 'Research Opportunities'
  | 'Volunteering';

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  category: OpportunityCategory;
  location: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  deadline: string; // ISO date string e.g. "2026-10-15"
  daysLeft: number;
  eventDate?: string;
  eligibility: string;
  shortDescription: string;
  fullDescription: string;
  requirements: string[];
  benefits: string[];
  rewardOrStipend?: string;
  teamSize?: string;
  applyUrl: string;
  featured?: boolean;
  closingSoon?: boolean;
  domain: string;
}

export interface FeedbackSubmission {
  id: string;
  timestamp: string;
  overallRating: number;
  easeOfUse: 'Very Easy' | 'Easy' | 'Neutral' | 'Difficult' | 'Very Difficult';
  mostUsefulSection: 'Career Roadmaps' | 'Learn' | 'Opportunities' | 'Dashboard';
  facedDifficulties: boolean;
  difficultyDescription?: string;
  changesDesired?: string;
  featuresToAdd?: string;
  additionalSuggestions?: string;
}
