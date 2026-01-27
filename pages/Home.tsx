
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import PricingTable from '../components/PricingTable';
import PodcastPlayer from '../components/PodcastPlayer';
import MediaShowcase from '../components/MediaShowcase';
import { ArrowRight, Quote, ExternalLink, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  const [currentEpisode, setCurrentEpisode] = useState({
    id: '1',
    title: 'The Truth About HVAC Repair Quotas',
    description: 'Why independent tradies are beating corporate giants by being honest.',
    duration: '14:20',
    audioUrl: '/Honest_AC_Repair_Without_Corporate_Quotas_createdfor_amendedair_a_brisbanesb.m4a'
  });

  const episodes = [
    {
      id: '1',
      title: 'The Truth About HVAC Repair Quotas',
      description: 'Why independent tradies are beating corporate giants by being honest.',
      duration: '14:20',
      audioUrl: '/Honest_AC_Repair_Without_Corporate_Quotas_createdfor_amendedair_a_brisbanesb.m4a'
    },
    {
      id: '2',
      title: 'How AI is Changing Local SEO (Coming Soon)',
      description: 'The future of search and how to stay ahead.',
      duration: 'Coming Soon',
      audioUrl: '#'
    },
    {
      id: '3',
      title: 'Automating the Boring Stuff (Coming Soon)',
      description: 'Save 20 hours a week with simple workflows.',
      duration: 'Coming Soon',
      audioUrl: '#'
    }
  ];

  return (
    <div className="pb-20">
      <HeroSection />

      {/* FEATURE GRID - "Everything In Your PC" */}
      <FeatureGrid />

      {/* MEDIA SHOWCASE - "Content Engine" */}
      <MediaShowcase />

      {/* PODCAST SECTION */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-2 block">InurPC Studios</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Listen to the Future</h2>
            <p className="text-slate-400 mt-4 text-lg">We don't just build tech; we build authority. Check out our latest productions that we create for our clients.</p>
          </div>
        </div>
        <PodcastPlayer
          currentEpisode={currentEpisode}
          episodes={episodes}
          onEpisodeSelect={setCurrentEpisode}
        />
      </section>

      {/* PARTNER PROMO - Receptionists.net.au */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-y border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
              <CheckCircle2 size={12} /> Trusted Partner
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Looking for dedicated overflow support?</h3>
            <p className="text-slate-400 mb-6 max-w-xl">
              Our partners at <span className="text-white font-semibold">receptionists.net.au</span> provide specialized live answering services compatible with our AI systems.
              Perfect for businesses needing a human touch for specific scenarios.
            </p>
            <a
              href="https://receptionists.net.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-blue-500 hover:text-blue-400 transition-colors pb-1"
            >
              Visit Receptionists.net.au <ExternalLink size={16} />
            </a>
          </div>
          {/* Visual Flair for partner */}
          <div className="hidden md:flex items-center justify-center w-full md:w-1/3">
            <div className="relative w-full aspect-video bg-slate-900 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
              <span className="text-slate-500 font-black text-2xl uppercase tracking-widest opacity-50">Partner Ad</span>
            </div>
          </div>
        </div>
      </section>


      {/* PRICING SECTION */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Choose Your Weapon</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Whether you need a simple starter kit or total market domination, we have the package.</p>
        </div>
        <PricingTable />

        {/* HVAC Demo Link Context */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">Curious about what a "Dominator" website looks like?</p>
          <a
            href="https://v0-hvac-website-build-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold transition-colors"
          >
            View Live Demo Site <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
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
