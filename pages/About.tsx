import React from 'react';
import { Zap, Globe, Target, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 text-center mb-24">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">The Automation <span className="text-blue-500">Manifesto</span></h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          InurPC Digital was born from a simple realization: Australian SMBs are losing millions to scattered tools and manual follow-ups. We fixed it.
        </p>
      </div>

      <div className="container mx-auto px-4 mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Why We Exist</h2>
          <p className="text-slate-400 leading-relaxed">
            Local service providers, clinics, and creators are the backbone of the Australian economy. But while big tech companies have armies of engineers to automate their growth, our local businesses are left struggling with Zapier, spreadsheets, and sticky notes.
          </p>
          <p className="text-slate-400 leading-relaxed font-bold italic">
            "InurPC Digital exists to level the playing field for Australians. We provide the enterprise-grade engine that runs your business for you."
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="p-8 bg-slate-900 rounded-3xl border border-white/5 flex flex-col items-center text-center">
             <Cpu className="w-10 h-10 text-blue-500 mb-4" />
             <div className="text-white font-bold uppercase tracking-tight text-sm">Tech First</div>
           </div>
           <div className="p-8 bg-slate-900 rounded-3xl border border-white/5 flex flex-col items-center text-center">
             <Target className="w-10 h-10 text-indigo-500 mb-4" />
             <div className="text-white font-bold uppercase tracking-tight text-sm">ROI Driven</div>
           </div>
           <div className="p-8 bg-slate-900 rounded-3xl border border-white/5 flex flex-col items-center text-center">
             <Globe className="w-10 h-10 text-cyan-500 mb-4" />
             <div className="text-white font-bold uppercase tracking-tight text-sm">Local Focus</div>
           </div>
           <div className="p-8 bg-slate-900 rounded-3xl border border-white/5 flex flex-col items-center text-center">
             <Zap className="w-10 h-10 text-yellow-500 mb-4" />
             <div className="text-white font-bold uppercase tracking-tight text-sm">Speed Obsessed</div>
           </div>
        </div>
      </div>

      <section className="bg-blue-600 rounded-[3rem] mx-4 py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">The Brand Promise</h2>
           <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-white text-2xl font-bold leading-tight">
                "We plug a real automation engine and digital assets into your business so it makes more while you work and while you sleep."
              </p>
              <div className="h-1 w-24 bg-white/30 mx-auto"></div>
              <p className="text-blue-100 text-sm uppercase font-bold tracking-[0.2em]">100% Australian owned business serving Australian Business.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;