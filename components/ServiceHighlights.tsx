import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceHighlights: React.FC = () => {
    return (
        <section className="py-20 bg-white text-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Column 1: WEBDESIGN */}
                    <div className="bg-slate-100 p-10 rounded-none flex flex-col justify-between min-h-[500px] border-t-8 border-blue-600 relative overflow-hidden group hover:shadow-2xl transition-all">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200 rounded-bl-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-black mb-1 tracking-tighter uppercase text-slate-800">Web Design</h3>
                            <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-8">Creative Solutions</p>
                            <p className="text-slate-600 font-medium leading-relaxed mb-8">
                                Professional and modern websites designed to dominate your industry.
                                Mobile-responsive, high-speed, and built to convert visitors into paying clients instantly.
                            </p>
                        </div>

                        <button className="relative z-10 w-full bg-slate-800 hover:bg-blue-600 text-white font-bold py-4 px-6 mt-auto transition-colors uppercase tracking-wider flex items-center justify-between group-hover:pl-8">
                            Get In Touch <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Column 2: SEO */}
                    <div className="bg-slate-800 p-10 rounded-none flex flex-col justify-between min-h-[500px] border-t-8 border-blue-500 relative overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-black mb-1 tracking-tighter uppercase text-white">SEO</h3>
                            <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-8">Get More Leads</p>
                            <p className="text-slate-300 font-medium leading-relaxed mb-8">
                                Smash your competitors in Google's organic search results.
                                With a proven track record, we get you to the top where the money is.
                            </p>
                        </div>

                        <button className="relative z-10 w-full bg-blue-600 hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-6 mt-auto transition-colors uppercase tracking-wider flex items-center justify-between group-hover:pl-8">
                            More About SEO <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Column 3: DIGITAL/DOMAINS */}
                    <div className="bg-blue-600 p-10 rounded-none flex flex-col justify-between min-h-[500px] border-t-8 border-white relative overflow-hidden group hover:shadow-2xl transition-all">
                        {/* Hexagon pattern overlay */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-black mb-1 tracking-tighter uppercase text-white">Digital</h3>
                            <p className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-8">Multimedia & Signage</p>
                            <p className="text-blue-100 font-medium leading-relaxed mb-8">
                                We handle everything digital. From hosting and domains to video production, podcasting, and digital signage. The complete package.
                            </p>
                        </div>

                        <button className="relative z-10 w-full bg-slate-900 hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-6 mt-auto transition-colors uppercase tracking-wider flex items-center justify-between group-hover:pl-8">
                            View Options <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceHighlights;
