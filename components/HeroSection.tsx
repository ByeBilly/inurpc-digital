
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 text-center">
        {/* Large Centered Logo */}
        <div className="flex flex-col items-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="relative group cursor-pointer mb-6">
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"></div>

            <div className="relative w-[600px] h-[300px] max-w-full flex items-center justify-center transition-transform group-hover:scale-105 duration-500 overflow-hidden bg-transparent rounded-2xl border border-white/5">
              <img
                src="/logo-inurpc.jpg"
                alt="INURPC DIGITAL"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Your All-In-One Revenue System</span>
            </div>
          </div>
        </div>

        {/* All White Heading as requested */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] uppercase">
          Make More While You <br />
          Work and Sleep.
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          We plug a world-class automation engine and high-converting digital assets into your business. No more scattered tools. No more missed leads.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/platform" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all group">
            <span>Explore The Platform</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/digital-products" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/5">
            Browse Digital Assets
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center space-x-2"><ShieldCheck className="w-5 h-5" /> <span className="font-bold uppercase tracking-widest text-[10px]">GDPR COMPLIANT</span></div>
          <div className="flex items-center space-x-2 font-bold italic tracking-tighter text-sm">STRIPE PARTNER</div>
          <div className="flex items-center space-x-2 font-black uppercase text-[10px] tracking-widest">500+ Local Businesses Scaled</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
