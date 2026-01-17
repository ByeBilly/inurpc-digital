
import React from 'react';
import PricingTable from '../components/PricingTable';
import { Rocket, BarChart3, Settings, ShieldCheck, MessageCircle, Globe, TrendingUp, Zap } from 'lucide-react';

const Platform: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 mb-24 text-center">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">Set the bar, be a gamechanger</h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          The InurPC Platform is more than a CRM. It's a complete operating system for your business marketing, sales, and reputation management.
        </p>
      </div>

      <section className="container mx-auto px-4 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* High-Level Feature Grid with specific copy */}
        <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-blue-500/20 transition-all space-y-4">
           <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center">
             <Rocket className="w-6 h-6" />
           </div>
           <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">
             INURPC DIGITAL
           </h3>
           <p className="text-slate-400 text-sm leading-relaxed">
             The best platform that you could ever hope for your business to be running on, and furthermore you can have it securely running in your pc, no concerns about losing data online. We guarantee that you will be thanking yourself often for the decision you are about to make, many times in the times ahead.
           </p>
        </div>

        <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-indigo-500/20 transition-all space-y-4">
           <div className="w-12 h-12 bg-indigo-600/20 text-indigo-500 rounded-xl flex items-center justify-center">
             <Settings className="w-6 h-6" />
           </div>
           <h3 className="text-2xl font-bold text-white uppercase tracking-tight">DFY Implementation</h3>
           <p className="text-slate-400 text-sm leading-relaxed">
             Don't want to build it? Our experts handle the setup, migration, and workflow logic for you. We transform your manual headaches into automated revenue streams.
           </p>
        </div>

        <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-cyan-500/20 transition-all space-y-4">
           <div className="w-12 h-12 bg-cyan-600/20 text-cyan-500 rounded-xl flex items-center justify-center">
             <BarChart3 className="w-6 h-6" />
           </div>
           <h3 className="text-2xl font-bold text-white uppercase tracking-tight">ADVANCED REPORTING</h3>
           <p className="text-slate-400 text-sm leading-relaxed">
             Track ROI, conversion rates, and staff performance with real-time data visual dashboards. Know exactly where your money is going and where your leads are coming from.
           </p>
        </div>

        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/30 hover:border-blue-500 transition-all space-y-4">
           <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center">
             <TrendingUp className="w-6 h-6" />
           </div>
           <h3 className="text-2xl font-bold text-white uppercase tracking-tight">PROGRESS</h3>
           <p className="text-slate-400 text-sm leading-relaxed">
             You will now easily maintain your high level state ahead of the game, consider it now to be a given. This is absolutely the sort of security and peace of mind that you can now relax into.
           </p>
        </div>
      </section>

      {/* Every Tool You Need Section */}
      <section className="bg-slate-900/50 py-24 mb-24">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 uppercase tracking-tight">Every Tool You Need</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center font-bold text-2xl text-white">01</div>
                <div>
                   <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Lead Capture & Nurture</h4>
                   <p className="text-slate-400 text-sm">Capture leads from Facebook, Instagram, Google, and your website. Automatically nurture them with personalized multi-channel sequences until they book.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center font-bold text-2xl text-white">02</div>
                <div>
                   <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Automated Booking</h4>
                   <p className="text-slate-400 text-sm">Our native calendar system eliminates double bookings and manual reminders. Integration with Stripe allows for upfront deposit collection.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center font-bold text-2xl text-white">03</div>
                <div>
                   <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Reputation Management</h4>
                   <p className="text-slate-400 text-sm">The best local SEO strategy is high-quality reviews. InurPC automatically asks happy customers for Google and Facebook reviews.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center font-bold text-2xl text-white">04</div>
                <div>
                   <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Full CRM Pipelines</h4>
                   <p className="text-slate-400 text-sm">Know exactly where your money is. Drag-and-drop pipelines show you who is a new lead, who is hot, and who just converted.</p>
                </div>
              </div>
           </div>

           {/* High-Level WhatsApp Full Width Integration */}
           <div className="relative p-8 md:p-12 rounded-[3rem] bg-gradient-to-r from-green-600/20 via-blue-600/10 to-indigo-600/20 border border-green-500/30 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageCircle className="w-64 h-64 text-green-500" />
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                 <div className="flex-shrink-0 w-24 h-24 bg-green-500 rounded-[2.5rem] flex items-center justify-center shadow-lg shadow-green-500/30">
                    <MessageCircle className="w-12 h-12 text-white" />
                 </div>
                 <div className="flex-grow text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full mb-4">
                       <Globe className="w-3 h-3 text-green-400" />
                       <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Global Business Standard</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none">High Level WhatsApp Integration</h3>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
                      Globally atm WhatsApp is proving itself as the next high level system for business. Our integrated engine allows you to communicate with clients on the world's most popular messaging app with full automation, tracking, and security. It is the definitive game-changer for businesses that demand a high-level state of presence.
                    </p>
                 </div>
                 <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 p-6 bg-slate-950/50 rounded-2xl border border-white/10">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                    <span className="text-white font-bold text-center uppercase text-[10px] tracking-widest">End-to-End Secure</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Your Best Ever Business Decision</h2>
          <p className="text-slate-400">Choose the plan that matches your current business velocity.</p>
        </div>
        <PricingTable />
      </section>

      {/* Service Commitment Section */}
      <section className="max-w-6xl mx-auto px-4 text-center pb-24">
        <div className="p-12 md:p-16 rounded-[3.5rem] bg-gradient-to-b from-blue-600 to-indigo-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <Zap className="w-16 h-16 text-white mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">
              WE ARE HERE TO SERVE YOU,<br />YOU ARE IMPORTANT TO US
            </h2>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
            <p className="text-blue-100 text-xl md:text-2xl font-bold leading-relaxed max-w-2xl mx-auto italic">
              "YOU WILL NEVER FIND ANYONE EVER WHO IS BETTER TO DEAL WITH THAN US, TELL US WHAT YOU WANT and it will become our goal to deliver."
            </p>
            <div className="mt-12">
              <span className="inline-block px-8 py-2 rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                The InurPC Promise
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
