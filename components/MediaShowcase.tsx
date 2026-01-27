import React from 'react';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

const MediaShowcase: React.FC = () => {
    const assets = [
        {
            type: 'image',
            src: '/BEAT_THE_BRISBANE_HEAT__version_1.png',
            title: 'Viral Social Posts',
            description: 'High-engagement graphics custom designed for your brand.'
        },
        {
            type: 'video',
            src: '/CLEAN_AIR_IS_COOL_AIR__version_1.mp4',
            title: 'Short-Form Video',
            description: 'Reels and TikToks that capture attention instantly.'
        },
        {
            type: 'image',
            src: '/The_$4,000_Surprise__version_1.png',
            title: 'Educational Reels',
            description: 'StopScroll™ graphics that educate and convert homeowners.'
        },
        {
            type: 'image',
            src: '/Preventative_Care_is_Your_Insurance__version_1.png',
            title: 'Value Stack',
            description: 'Visualizing the invisible value of your services.'
        },
        {
            type: 'image',
            src: '/NO__1__INITIAL_QUOTE_version_1.png',
            title: 'Process Visuals',
            description: 'Clear, step-by-step infographics that build trust.'
        },
        {
            type: 'image',
            src: '/EXPERT_DEEP_CLEANING__version_1.png',
            title: 'Campaign Assets',
            description: 'Cohesive visual identity for all your marketing channels.'
        }
    ];

    return (
        <section className="py-20 bg-slate-950 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-purple-500 font-bold uppercase tracking-wider text-sm mb-2 block">Content That Converts</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Your 24/7 Content Team</h2>
                        <p className="text-slate-400 mt-4 text-lg">
                            Included in our Dominator package: Professional video, graphics, and copy delivered to your inbox every month.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {assets.map((asset, index) => (
                        <div key={index} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 aspect-[9/16] hover:border-purple-500/50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2">
                            {/* Media Container */}
                            <div className="absolute inset-0">
                                {asset.type === 'video' ? (
                                    <video
                                        src={asset.src}
                                        className="w-full h-full object-cover"
                                        loop
                                        muted
                                        playsInline
                                        autoPlay
                                    />
                                ) : (
                                    <img
                                        src={asset.src}
                                        alt={asset.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider mb-3">
                                    {asset.type === 'video' ? <PlayCircle size={12} className="text-purple-400" /> : <ImageIcon size={12} className="text-blue-400" />}
                                    {asset.type === 'video' ? 'Reel' : 'Post'}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 leading-tight">{asset.title}</h3>
                                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{asset.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaShowcase;
