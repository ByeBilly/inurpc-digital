
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 text-center">
        {/* Mobile-first Logo/Image Handling */}
        <div className="flex flex-col items-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="relative group cursor-pointer mb-6 w-full max-w-[350px] md:max-w-[500px]">
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"></div>

            <div className="relative w-full aspect-[2/1] flex items-center justify-center transition-transform group-hover:scale-105 duration-500 overflow-hidden bg-transparent rounded-2xl border border-white/5">
              <img
                src="/logo-inurpc.jpg"
                alt="INURPC DIGITAL AI"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Live 24/7 AI Receptionist</span>
            </div>
          </div>
        </div>

        {/* All White Heading as requested */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] uppercase">
          The Ultimate <br className="hidden md:block" />
          Digital Ecosystem.
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed px-4">
          Everything your business needs, In Your PC. From AI Receptionists to complete market domination packages.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book-demo" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all group shadow-lg shadow-blue-900/20">
            <span>Book Your Free Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="w-full sm:w-auto border border-white/10 hover:border-blue-500/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/5">
            Get Connected
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Updated trust indicators */}
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <span className="font-bold uppercase tracking-widest text-[10px] text-slate-300">Australian Virtual Numbers</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span className="font-bold uppercase tracking-widest text-[10px] text-slate-300">Call Recording Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
