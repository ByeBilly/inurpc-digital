
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Quote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      <HeroSection />
      
      {/* Social Proof Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 bg-slate-900/40 rounded-3xl border border-white/5">
             <div className="text-4xl font-black text-blue-500 mb-2">98%</div>
             <p className="text-slate-400 font-medium">Lead response rate increase for our clinic clients using InurPC Platform.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-slate-900/40 rounded-3xl border border-white/5">
             <div className="text-4xl font-black text-blue-500 mb-2">$2.4M</div>
             <p className="text-slate-400 font-medium">Revenue automated through InurPC Snapshots in the last 12 months.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-slate-900/40 rounded-3xl border border-white/5">
             <div className="text-4xl font-black text-blue-500 mb-2">15k+</div>
             <p className="text-slate-400 font-medium">Hours saved across our user base by eliminating manual follow-ups.</p>
          </div>
        </div>
      </section>

      <FeatureGrid />

      {/* Comparison Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/20 p-8 md:p-16 rounded-[2rem] shadow-2xl relative">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-center text-white">Unified Beats Scattered.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span> The Old Way
                </h3>
                <ul className="space-y-4 text-slate-500 text-sm">
                  <li>❌ Calendly for booking ($15/mo)</li>
                  <li>❌ Mailchimp for email ($50/mo)</li>
                  <li>❌ ClickFunnels for pages ($97/mo)</li>
                  <li>❌ Twilio for texting ($??/mo)</li>
                  <li>❌ Manual CRM data entry (Hours/week)</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> The InurPC Way
                </h3>
                <ul className="space-y-4 text-slate-300 text-sm font-medium">
                  <li>✅ All core tools in ONE platform</li>
                  <li>✅ Unified data & lead tracking</li>
                  <li>✅ Native AI automations</li>
                  <li>✅ Fixed monthly cost</li>
                  <li>✅ Everything syncs while you sleep</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase">Asset Store</h2>
              <p className="text-slate-400 max-w-xl">Plug-and-play snapshots, prompt packs, and royalty-free MP3 packs for creators and business owners.</p>
            </div>
            <Link to="/digital-products" className="inline-flex items-center space-x-2 text-blue-500 font-bold hover:text-blue-400 transition-colors uppercase tracking-widest text-sm">
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-600 rounded-[3rem] mx-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-20" />
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase">Join 500+ High-Performance Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
             <div className="p-8 bg-white/10 rounded-3xl text-left border border-white/10 backdrop-blur-sm">
               <p className="text-lg italic mb-6">"The MP3 packs for my YouTube channel are fantastic. High quality, royalty-free, and they actually sound modern. Highly recommend their digital asset store."</p>
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">MJ</div>
                  <div>
                    <div className="font-bold uppercase tracking-tight">Mark Jensen</div>
                    <div className="text-white/60 text-xs">Content Creator (1M+ Subs)</div>
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
