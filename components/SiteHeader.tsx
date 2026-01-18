
import React, { useState } from 'react';
import { Menu, X, Rocket, ShoppingBag, Info, Mail, LogOut, Layout } from 'lucide-react';
import { useSession } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SiteHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { session, signOut } = useSession();
  const navigate = useNavigate();

  const user = session.user;

  const handleLogout = () => {
    signOut();
    setIsProfileOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Platform', href: '/platform', icon: Rocket },

    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group h-full py-2">
          <div className="h-full w-auto flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src="/logo-inurpc.jpg"
              alt="InurPC Digital"
              className="h-full w-auto max-w-[180px] group-hover:brightness-110 transition-all object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
              {link.name}
            </Link>
          ))}

          <div className="h-6 w-px bg-white/10 mx-2"></div>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 bg-slate-900 border border-white/10 px-4 py-2 rounded-full hover:border-blue-500/50 transition-all group"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-tight">{user.name || 'User'}</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-56 glass border border-white/10 rounded-2xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/5 mb-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Account</p>
                    <p className="text-xs font-bold text-white truncate">{user.email}</p>
                  </div>
                  <Link to="/dashboard" onClick={() => setIsProfileOpen(false)} className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                    <Layout className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>

                  <div className="h-px bg-white/5 my-1"></div>
                  <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-500/5 transition-all">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
                Log In
              </Link>
              <Link to="/book-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all transform hover:scale-105 uppercase tracking-widest">
                Book Demo
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 px-4 py-6 space-y-4 max-h-screen overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="flex items-center space-x-3 text-lg font-medium text-slate-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              <link.icon className="w-5 h-5 text-blue-500" />
              <span>{link.name}</span>
            </Link>
          ))}
          <div className="h-px bg-white/5 my-2"></div>
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 text-lg font-medium text-slate-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Layout className="w-5 h-5 text-blue-500" />
                <span>Dashboard</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 text-lg font-medium text-rose-500 py-2 w-full text-left"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block w-full text-center text-slate-300 py-3 rounded-lg font-bold border border-white/10"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/book-demo"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold"
                onClick={() => setIsOpen(false)}
              >
                Book Demo
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
