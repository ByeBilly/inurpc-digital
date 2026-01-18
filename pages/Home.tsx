
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import { ArrowRight, Quote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      <HeroSection />

      {/* WORKFLOW SECTION - "How It Works" */}
      <section className="py-20 bg-slate-900/50 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-white mb-16 uppercase">How Your AI Team Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform bg-slate-900">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-white font-bold mb-2">Caller Rings</h3>
              <p className="text-slate-400 text-sm">Customer calls your <br />Australian virtual number.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 border-2 border-blue-400 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-white font-bold mb-2">AI Answers Instantly</h3>
              <p className="text-slate-400 text-sm">Converses naturally, answers questions, <br />and qualifies the lead.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform bg-slate-900">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-white font-bold mb-2">Data Captured</h3>
              <p className="text-slate-400 text-sm">Name, intent, and urgency <br />extracted instantly.</p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform bg-slate-900">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-white font-bold mb-2">You Get Notified</h3>
              <p className="text-slate-400 text-sm">Instant SMS/Email summary + <br />Zoom booked on your cal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section (Modified for new context) */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 bg-slate-900/40 rounded-3xl border border-white/5">
            <div className="text-4xl font-black text-blue-500 mb-2">100%</div>
            <p className="text-slate-400 font-medium">Answer rate. Never get a "busy" signal again.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-slate-900/40 rounded-3xl border border-white/5">
            <div className="text-4xl font-black text-blue-500 mb-2">24/7</div>
            <p className="text-slate-400 font-medium">Operational hours. You sleep, it sells.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-slate-900/40 rounded-3xl border border-white/5">
            <div className="text-4xl font-black text-blue-500 mb-2">0</div>
            <p className="text-slate-400 font-medium">Missed opportunities.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white uppercase">Built For Australian Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">🏠 Real Estate</h3>
            <p className="text-slate-400">Instant inquiry qualification. Book viewings automatically while you're at an open house.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">🛠️ Tradies</h3>
            <p className="text-slate-400">Stop answering the phone under a sink. Let AI quote and schedule jobs for you.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">🏥 Health & Wellness</h3>
            <p className="text-slate-400">Manage patient bookings and FAQs without hiring extra reception staff.</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/20 p-8 md:p-16 rounded-[2rem] shadow-2xl relative">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-center text-white">Why It Beats Starting From Scratch.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span> The Old Way
                </h3>
                <ul className="space-y-4 text-slate-500 text-sm">
                  <li>❌ Paying a receptionist ($50k+/yr)</li>
                  <li>❌ Missing calls after 5 PM</li>
                  <li>❌ Slow email follow-up</li>
                  <li>❌ Chaotic spreadsheets</li>
                  <li>❌ Generic website chatbots</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> The InurPC Way
                </h3>
                <ul className="space-y-4 text-slate-300 text-sm font-medium">
                  <li>✅ Fraction of the cost of staff</li>
                  <li>✅ Answers instantly, 24/7/365</li>
                  <li>✅ Instant SMS & Calendar sync</li>
                  <li>✅ Real Australian phone voice</li>
                  <li>✅ Full conversation transcripts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-black text-center text-white mb-12 uppercase">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="text-white font-bold mb-2">Is the voice robotic?</h4>
            <p className="text-slate-400">No. We use ultra-realistic neural voice synthesis. Most callers don't realize they're talking to an AI.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="text-white font-bold mb-2">Does it work with Australian numbers?</h4>
            <p className="text-slate-400">Yes. We provision a local Australian mobile or landline number for your business.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="text-white font-bold mb-2">Is it compliant?</h4>
            <p className="text-slate-400">Absolutely. We handle call recording announcements and data privacy according to Australian standards.</p>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-24 bg-blue-600 rounded-[3rem] mx-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-20" />
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase">Join 500+ High-Performance Businesses</h2>
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-white/10 rounded-3xl text-left border border-white/10 backdrop-blur-sm">
              <p className="text-lg italic mb-6">"InurPC changed our clinic forever. We went from manual spreadsheets to a fully automated patient booking engine in under a week. The snapshot templates are gold."</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">DR</div>
                <div>
                  <div className="font-bold uppercase tracking-tight">Dr. Sarah Reynolds</div>
                  <div className="text-white/60 text-xs">Aesthetic Clinic Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center container mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">Ready to scale?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/book-demo" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 text-center">
            Book Your Free Demo
          </Link>
          <Link to="/contact" className="w-full sm:w-auto border border-white/10 hover:border-blue-500/50 text-white px-10 py-5 rounded-full font-bold text-xl transition-all text-center">
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
