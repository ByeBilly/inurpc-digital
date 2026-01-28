import React from 'react';
import { Smartphone, Download, Star } from 'lucide-react';

const AppShowcase: React.FC = () => {
    // These could be props, but hardcoding for this specific promo section request
    const apps = [
        {
            title: 'Client Portal App',
            description: 'Your clients can book, pay, and chat with you directly from their home screen.',
            image: '/uploaded_media_0_1769528769670.png' // Using uploaded placeholder until user provides specific filenames
        },
        {
            title: 'Admin Dashboard',
            description: 'Run your entire business from your pocket. Notifications, CRM, and Pipelines.',
            image: '/uploaded_media_1_1769528769670.png'
        },
        {
            title: 'Lead Connector',
            description: 'Instant lead alerts and speed-to-lead automation tools on the go.',
            image: '/uploaded_media_0_1769528769670.png' // Reusing placeholder for demo
        }
    ];

    return (
        <section className="py-24 bg-white text-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">In Your Pocket, Too.</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto font-medium">Native Android Apps on the Google Play Store included with select packages.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {apps.map((app, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="relative w-full max-w-[280px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl mb-8 overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                                {/* Mobile Frame Simulation */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-full h-full object-cover z-10"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                            <p className="text-slate-500 text-sm max-w-xs">{app.description}</p>
                            <div className="mt-4 flex items-center gap-1 text-yellow-500">
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                        <Smartphone size={20} />
                        <span>View on Google Play Store</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
