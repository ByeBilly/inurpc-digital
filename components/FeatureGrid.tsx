
import React from 'react';
import { MessageSquare, Calendar, Globe, Star, Zap, BarChart3 } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Unified Communication',
      description: 'Manage 2-way SMS, Email, and Social DMs in a single, high-speed unified inbox.',
      icon: MessageSquare,
      color: 'text-blue-500'
    },
    {
      title: 'Seamless Calendars',
      description: 'Ditch the third-party apps. Our native booking system handles appointments and reminders.',
      icon: Calendar,
      color: 'text-indigo-500'
    },
    {
      title: 'High-Convert Funnels',
      description: 'Drag-and-drop page builder designed for fast loading and maximum conversion rates.',
      icon: Globe,
      color: 'text-cyan-500'
    },
    {
      title: 'Reputation Engine',
      description: 'Automatically solicit reviews from happy customers and boost your local SEO.',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      title: 'Deep Automations',
      description: 'Visual workflow builder that triggers actions based on user behavior 24/7.',
      icon: Zap,
      color: 'text-purple-500'
    },
    {
      title: 'Sales Pipelines',
      description: 'Visualize your entire sales process and never let another lead fall through the cracks.',
      icon: BarChart3,
      color: 'text-green-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white uppercase tracking-tight">THE INURPC DIGITAL AI EMPLOYEE PLATFORM</h2>
        <p className="text-slate-400 max-w-xl mx-auto">One engine. Unlimited growth potential. Replaces 10+ expensive software subscriptions.</p>
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
