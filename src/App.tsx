import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthScreen } from './components/AuthScreen';
import { DashboardView } from './components/DashboardView';
import { RoadmapsView } from './components/RoadmapsView';
import { LearnView } from './components/LearnView';
import { OpportunitiesView } from './components/OpportunitiesView';
import { FeedbackView } from './components/FeedbackView';
import { ProfileView } from './components/ProfileView';
import { OpportunityDetailsModal } from './components/OpportunityDetailsModal';

const MainLayout: React.FC = () => {
  const { user, activeTab, selectedOpportunity, closeOpportunityDetails } = useApp();

  // If user is logged out, render AuthScreen
  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-indigo-600 selection:text-white">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'roadmaps' && <RoadmapsView />}
          {activeTab === 'learn' && <LearnView />}
          {activeTab === 'opportunities' && <OpportunitiesView />}
          {activeTab === 'feedback' && <FeedbackView />}
          {activeTab === 'profile' && <ProfileView />}
        </main>
      </div>

      {/* Global Opportunity Details Modal */}
      {selectedOpportunity && (
        <OpportunityDetailsModal
          opportunity={selectedOpportunity}
          onClose={closeOpportunityDetails}
        />
      )}

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
