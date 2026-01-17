import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../context/AuthContext';
import { Mail, Lock, User, UserPlus } from 'lucide-react';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp, session } = useSession();
  const navigate = useNavigate();

  const loading = session.status === 'loading';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = await signUp(name, email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('This email is already registered. Try logging in.');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="w-full max-w-md">
        <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-2 leading-tight">with your 24/7 365 day AI team</h1>
            <p className="text-slate-400 text-sm italic">Join the InurPC Digital ecosystem today.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-black py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all hover:scale-[1.02] shadow-lg shadow-indigo-500/20 uppercase tracking-widest"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  <span>Create Account</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Already have an account? {' '}
              <Link to="/login" className="text-white font-bold hover:text-blue-400 transition-colors underline underline-offset-4">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;