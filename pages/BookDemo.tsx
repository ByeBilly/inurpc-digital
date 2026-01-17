
import React from 'react';
import { Calendar, Monitor, Users, Zap, CheckCircle } from 'lucide-react';

const BookDemo: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Strategy & <span className="text-blue-500 underline decoration-blue-500 decoration-8 underline-offset-8">Demo</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            See the InurPC Growth Engine in action. We'll show you exactly how to automate your leads and save 20+ hours per week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-900 border border-white/5 rounded-[3rem] overflow-hidden">
          <div className="lg:col-span-4 p-8 md:p-12 bg-blue-600 text-white flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold uppercase tracking-tight">On the call:</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
                  <span className="font-medium">Live walkthrough of our high-convert snapshot templates.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
                  <span className="font-medium">Analysis of your current lead-to-booking bottleneck.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
                  <span className="font-medium">Custom automation logic map for your specific industry.</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
               <div className="flex items-center space-x-4 mb-4">
                  <Monitor className="w-8 h-8 text-blue-200" />
                  <span className="text-sm font-bold uppercase tracking-widest">Held via Google Meet</span>
               </div>
               <div className="flex items-center space-x-4">
                  <Users className="w-8 h-8 text-blue-200" />
                  <span className="text-sm font-bold uppercase tracking-widest">1-on-1 Strategy</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8 p-4 md:p-12">
             <div className="bg-slate-950 rounded-2xl border border-white/10 h-[600px] flex flex-col items-center justify-center text-center space-y-6 p-8">
                <Calendar className="w-20 h-20 text-blue-500 animate-pulse" />
                <div className="space-y-2">
                   <h4 className="text-2xl font-bold text-white uppercase tracking-tight">Calendar Loading...</h4>
                   <p className="text-slate-500 max-w-sm">Please wait while we sync our real-time availability with the booking engine.</p>
                </div>
                <div className="w-full max-w-xs h-2 bg-slate-900 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-600 w-2/3"></div>
                </div>
                <p className="text-[10px] text-slate-700 font-bold uppercase tracking-widest">SECURE BOOKING SYSTEM v2.4</p>
             </div>
          </div>
        </div>

        <div className="mt-20 text-center">
           <h3 className="text-white font-bold mb-6 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>Who is this for?</span>
           </h3>
           <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-slate-900 border border-white/5 px-6 py-2 rounded-full text-slate-400 text-sm font-bold">Local Service Biz</span>
              <span className="bg-slate-900 border border-white/5 px-6 py-2 rounded-full text-slate-400 text-sm font-bold">Dental/Medical Clinics</span>
              <span className="bg-slate-900 border border-white/5 px-6 py-2 rounded-full text-slate-400 text-sm font-bold">Coach/Consultants</span>
              <span className="bg-slate-900 border border-white/5 px-6 py-2 rounded-full text-slate-400 text-sm font-bold">E-commerce Brands</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
