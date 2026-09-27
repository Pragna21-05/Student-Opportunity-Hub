import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Sparkles, ArrowRight, CheckCircle, ShieldCheck, Mail, Lock, User, GraduationCap, Building } from 'lucide-react';

interface AuthScreenProps {
  onSuccess?: () => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onSuccess }) => {
  const { loginUser, signupUser } = useApp();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForgotNotice, setShowForgotNotice] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('Computer Science & Engineering');
  const [year, setYear] = useState('3rd Year (B.Tech)');
  const [college, setCollege] = useState('National Institute of Technology');
  const [errorMsg, setErrorMsg] = useState('');

  const branches = [
    'Computer Science & Engineering',
    'Artificial Intelligence & Data Science',
    'Electronics & Communication Engineering',
    'Electrical & Electronics Engineering',
    'Information Technology',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering'
  ];

  const years = [
    '1st Year (B.Tech / B.E.)',
    '2nd Year (B.Tech / B.E.)',
    '3rd Year (B.Tech / B.E.)',
    '4th Year (B.Tech / B.E.)',
    'Diploma / Polytechnic',
    'M.Tech / Postgraduate'
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both your student email and password.');
      return;
    }
    setErrorMsg('');
    loginUser(email);
    if (onSuccess) onSuccess();
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify.');
      return;
    }
    setErrorMsg('');
    signupUser({
      name,
      email,
      branch,
      year,
      college
    });
    if (onSuccess) onSuccess();
  };

  const handleDemoSignIn = () => {
    loginUser('aarav.sharma@engg.edu.in', 'Aarav Sharma', 'Computer Science & Engineering', '3rd Year (B.Tech)');
    if (onSuccess) onSuccess();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
        
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Visual Illustration & Brand Pitch */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 text-white p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-indigo-700 flex items-center justify-center shadow-md font-bold">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white">
                    Student Opportunity Hub
                  </h1>
                  <p className="text-xs text-indigo-200 font-medium">
                    Discover · Learn · Build · Grow
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  Build Your Engineering Career, One Step at a Time.
                </h2>
                <p className="text-xs text-indigo-100 mt-2 leading-relaxed">
                  Join thousands of engineering students discovering career roadmaps, real learning resources, and curated opportunities across India.
                </p>
              </div>

              {/* Illustration container */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-indigo-500/30 bg-indigo-950/40 my-4 aspect-[4/3]">
                <img
                  src="/src/assets/images/student_auth_illustration_1790505711901.jpg"
                  alt="Student Opportunity Hub Engineering Career Paths"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Feature bullets */}
              <div className="space-y-2 text-xs text-indigo-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>16+ Step-by-step career & education roadmaps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real external learning resources (MDN, W3Schools, etc.)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2,500+ Hackathons, internships & scholarships</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-indigo-700/50 mt-6 relative z-10 text-[11px] text-indigo-200">
              Free and open platform dedicated to undergraduate engineers.
            </div>
          </div>

          {/* Right Column: Interactive Login / Signup Form */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
            
            {/* Header Switcher */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {isSignUp ? 'Create Student Account' : 'Welcome Back'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isSignUp
                    ? 'Enter your engineering details to personalize your career roadmaps'
                    : 'Sign in to access your roadmaps, progress, and saved opportunities'}
                </p>
              </div>

              {/* Demo Sign In Button */}
              <button
                type="button"
                onClick={handleDemoSignIn}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5"
                title="Explore without creating an account"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Demo Student Sign In</span>
              </button>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                {errorMsg}
              </div>
            )}

            {showForgotNotice && (
              <div className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-700">
                Password reset link has been dispatched to your student email. In this prototype, you can also use <strong>Demo Student Sign In</strong> above to proceed immediately.
              </div>
            )}

            {!isSignUp ? (
              /* LOGIN FORM */
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Email or Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. aarav.sharma@engg.edu.in"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowForgotNotice(true)}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span>Sign In to Student Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-xs text-slate-500">New here? </span>
                    <button
                      type="button"
                      onClick={() => { setIsSignUp(true); setErrorMsg(''); }}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      Create an account
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              /* SIGNUP FORM */
              <form onSubmit={handleSignUpSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Iyer"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="priya.iyer@college.edu.in"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Engineering Branch
                    </label>
                    <div className="relative">
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
                      >
                        {branches.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Year of Study
                    </label>
                    <div className="relative">
                      <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
                      >
                        {years.map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-900"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span>Create Account & Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center pt-1">
                    <span className="text-xs text-slate-500">Already have an account? </span>
                    <button
                      type="button"
                      onClick={() => { setIsSignUp(false); setErrorMsg(''); }}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
