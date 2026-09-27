import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquareHeart, Star, CheckCircle, ArrowRight, Sparkles, Send } from 'lucide-react';

export const FeedbackView: React.FC = () => {
  const { addFeedback, setActiveTab } = useApp();
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [overallRating, setOverallRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [easeOfUse, setEaseOfUse] = useState<'Very Easy' | 'Easy' | 'Neutral' | 'Difficult' | 'Very Difficult'>('Very Easy');
  const [mostUsefulSection, setMostUsefulSection] = useState<'Career Roadmaps' | 'Learn' | 'Opportunities' | 'Dashboard'>('Career Roadmaps');
  const [facedDifficulties, setFacedDifficulties] = useState<boolean>(false);
  const [difficultyDescription, setDifficultyDescription] = useState('');
  const [changesDesired, setChangesDesired] = useState('');
  const [featuresToAdd, setFeaturesToAdd] = useState('');
  const [additionalSuggestions, setAdditionalSuggestions] = useState('');

  const easeOptions: ('Very Easy' | 'Easy' | 'Neutral' | 'Difficult' | 'Very Difficult')[] = [
    'Very Easy',
    'Easy',
    'Neutral',
    'Difficult',
    'Very Difficult'
  ];

  const sectionOptions: ('Career Roadmaps' | 'Learn' | 'Opportunities' | 'Dashboard')[] = [
    'Career Roadmaps',
    'Learn',
    'Opportunities',
    'Dashboard'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addFeedback({
      overallRating,
      easeOfUse,
      mostUsefulSection,
      facedDifficulties,
      difficultyDescription: facedDifficulties ? difficultyDescription : undefined,
      changesDesired: changesDesired || undefined,
      featuresToAdd: featuresToAdd || undefined,
      additionalSuggestions: additionalSuggestions || undefined
    });
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(false);
    setOverallRating(5);
    setEaseOfUse('Very Easy');
    setMostUsefulSection('Career Roadmaps');
    setFacedDifficulties(false);
    setDifficultyDescription('');
    setChangesDesired('');
    setFeaturesToAdd('');
    setAdditionalSuggestions('');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      
      {/* Title Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
          <MessageSquareHeart className="w-3.5 h-3.5 text-indigo-600" />
          <span>Student Feedback</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Help Us Improve Student Opportunity Hub
        </h1>
        <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Your feedback helps us make the platform better for engineering students nationwide.
        </p>
      </div>

      {submitted ? (
        /* THANK YOU CONFIRMATION SCREEN */
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-md text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200 shadow-sm">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Thank you! Your feedback helps us improve.
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We appreciate your valuable insights. Your suggestions directly influence upcoming roadmaps, verified learning materials, and partner hackathon listings.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>Back to Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      ) : (
        /* FEEDBACK FORM */
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          {/* Question 1: Overall Experience */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <label className="block text-sm font-bold text-slate-900">
              1. Overall Experience
            </label>
            <p className="text-xs text-slate-500">
              How would you rate your overall experience with Student Opportunity Hub?
            </p>

            <div className="flex items-center gap-2 pt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setOverallRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 text-slate-300 hover:scale-110 transition-transform focus:outline-none"
                  aria-label={`Rate ${star} star`}
                >
                  <Star
                    className={`w-7 h-7 sm:w-8 sm:h-8 ${
                      (hoverRating || overallRating) >= star
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-slate-200'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-slate-700 ml-3">
                {overallRating === 5 && 'Outstanding (5/5)'}
                {overallRating === 4 && 'Very Good (4/5)'}
                {overallRating === 3 && 'Average (3/5)'}
                {overallRating === 2 && 'Needs Work (2/5)'}
                {overallRating === 1 && 'Poor (1/5)'}
              </span>
            </div>
          </div>

          {/* Question 2: How easy was the website to use? */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <label className="block text-sm font-bold text-slate-900">
              2. How easy was the website to use?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
              {easeOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setEaseOfUse(opt)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all ${
                    easeOfUse === opt
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Which section did you find most useful? */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <label className="block text-sm font-bold text-slate-900">
              3. Which section did you find most useful?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {sectionOptions.map((sec) => (
                <button
                  type="button"
                  key={sec}
                  onClick={() => setMostUsefulSection(sec)}
                  className={`py-2.5 px-3 text-xs font-semibold rounded-xl border text-center transition-all ${
                    mostUsefulSection === sec
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* Question 4 & 5: Difficulties Faced */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <label className="block text-sm font-bold text-slate-900">
              4. Did you face any difficulties while using the website?
            </label>
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => setFacedDifficulties(false)}
                className={`py-2 px-5 text-xs font-semibold rounded-xl border transition-all ${
                  !facedDifficulties
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                No
              </button>
              <button
                type="button"
                onClick={() => setFacedDifficulties(true)}
                className={`py-2 px-5 text-xs font-semibold rounded-xl border transition-all ${
                  facedDifficulties
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Yes
              </button>
            </div>

            {facedDifficulties && (
              <div className="pt-3 animate-in fade-in duration-150">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  5. If yes, describe the difficulty:
                </label>
                <textarea
                  value={difficultyDescription}
                  onChange={(e) => setDifficultyDescription(e.target.value)}
                  rows={3}
                  placeholder="Please describe what was unclear, difficult to locate, or broken..."
                  className="w-full p-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
                />
              </div>
            )}
          </div>

          {/* Question 6: What changes would you like to see? */}
          <div className="space-y-2 pb-6 border-b border-slate-100">
            <label className="block text-sm font-bold text-slate-900">
              6. What changes would you like to see?
            </label>
            <p className="text-xs text-slate-500">
              Any improvements to design, navigation, roadmap organization, or filters?
            </p>
            <textarea
              value={changesDesired}
              onChange={(e) => setChangesDesired(e.target.value)}
              rows={3}
              placeholder="e.g. More regional language resources, additional mechanical engineering branches..."
              className="w-full p-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
            />
          </div>

          {/* Question 7: What features should we add? */}
          <div className="space-y-2 pb-6 border-b border-slate-100">
            <label className="block text-sm font-bold text-slate-900">
              7. What features should we add?
            </label>
            <p className="text-xs text-slate-500">
              What new capabilities would make this the ultimate engineering student portal?
            </p>
            <textarea
              value={featuresToAdd}
              onChange={(e) => setFeaturesToAdd(e.target.value)}
              rows={3}
              placeholder="e.g. Peer hackathon teammate finder, resume critique checklists, mock interview timer..."
              className="w-full p-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
            />
          </div>

          {/* Question 8: Additional Suggestions */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-900">
              8. Additional Suggestions
            </label>
            <textarea
              value={additionalSuggestions}
              onChange={(e) => setAdditionalSuggestions(e.target.value)}
              rows={2}
              placeholder="Any other comments or feedback for the Student Opportunity Hub team..."
              className="w-full p-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
            />
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Send className="w-4 h-4" />
              <span>Submit Feedback</span>
            </button>
          </div>

        </form>
      )}

    </div>
  );
};
