
import React from 'react';
import { Layout, Search, BarChart3, Bot, Video, Megaphone } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'High-Impact Websites',
      description: 'Stunning, high-conversion websites that dominate your local market. Built to sell.',
      icon: Layout,
      color: 'text-blue-500'
    },
    {
      title: 'SEO Dominance',
      description: 'Be the first thing customers see. We optimize your "In Your PC" presence for maximum visibility.',
      icon: Search,
      color: 'text-indigo-500'
    },
    {
      title: 'CRM & Automation',
      description: 'A white-labelled high-level account to automate everything from social posts to client follow-ups.',
      icon: BarChart3,
      color: 'text-cyan-500'
    },
    {
      title: 'AI Receptionists',
      description: 'Never miss a call. Our AI staff handles inquiries, bookings, and qualifications 24/7.',
      icon: Bot,
      color: 'text-yellow-500'
    },
    {
      title: 'Content Engine',
      description: 'We create monthly podcasts, videos, and news stories to position you as the industry authority.',
      icon: Video,
      color: 'text-purple-500'
    },
    {
      title: 'Social Amplification',
      description: 'Automated social media posting and ad management to keep your brand top-of-mind.',
      icon: Megaphone,
      color: 'text-green-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white uppercase tracking-tight">Everything In Your PC</h2>
        <p className="text-slate-400 max-w-xl mx-auto">The complete digital ecosystem for your business. From websites to AI employees, we handle it all.</p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-1 group">
            <f.icon className={`w-12 h-12 mb-6 ${f.color} transition-transform group-hover:scale-110`} />
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
