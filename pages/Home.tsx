
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import ServiceHighlights from '../components/ServiceHighlights';
import PricingTable from '../components/PricingTable';
import BuildPackages from '../components/BuildPackages';
import AppShowcase from '../components/AppShowcase';
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
      title: 'Scrubbing Biological Sludge',
      description: 'The hidden health hazards in your AC and how to fix them.',
      duration: '18:45',
      audioUrl: '/Scrubbing_Biological_Sludge_From_Your_AC.m4a'
    },
    {
      id: '3',
      title: 'Heatwaves & The Honest Tradie',
      description: 'Surviving the Brisbane heat without getting ripped off.',
      duration: '12:30',
      audioUrl: '/Heatwaves,_AC_Sludge,_and_the_Honest_Tradie.m4a'
    }
  ];

  return (
    <div className="pb-20">
      <HeroSection />

      {/* SERVICE HIGHLIGHTS - 3 COLUMN (WebAbility Style) */}
      <ServiceHighlights />

      {/* FEATURE GRID - "Everything In Your PC" */}
      <FeatureGrid />

      {/* MEDIA SHOWCASE - "Content Engine" */}
      <MediaShowcase />

      {/* APP SHOWCASE - Google Play */}
      <AppShowcase />

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

      {/* BUILD PACKAGES (One-Time) */}
      <BuildPackages />

      {/* PRICING SECTION (Managed Subscriptions) */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Partner With Us</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Long-term growth partners get the best results. info@inurpc.com</p>
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
