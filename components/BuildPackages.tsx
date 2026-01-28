import React from 'react';
import { Check, Zap, Server, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const BuildPackages: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-2 block">Own Your Structure</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">One-Time Build Packages</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Get a high-performance "Ferrari Engine" website built on modern tech stacks like Next.js or React.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Business Bundle - $350 */}
                    <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col hover:border-blue-500/30 transition-colors">
                        {/* Badge */}
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                            Only 5 Grants Left
                        </div>

                        <h3 className="text-2xl font-black text-white mb-2">Business Bundle</h3>
                        <p className="text-slate-400 text-sm mb-6">Perfect entry point with the InurPC Business Grant.</p>

                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-extrabold text-white">$350</span>
                            <span className="text-slate-500 text-sm ml-2">one-time</span>
                        </div>

                        <div className="feature-list space-y-4 flex-grow mb-8 text-sm text-slate-300">
                            <div className="flex items-start gap-3">
                                <Zap className="w-5 h-5 text-blue-500 shrink-0" />
                                <span><strong>Modern Pricing Grant:</strong> Subsidized build cost.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Database className="w-5 h-5 text-blue-500 shrink-0" />
                                <span><strong>Complimentary CRM:</strong> Includes basic setup.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>Next.js / React "Ferrari Engine" Site</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>Social Media Integration</span>
                            </div>
                        </div>

                        <Link to="/contact" className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl text-center transition-colors">
                            Claim Grant Build
                        </Link>
                    </div>

                    {/* Professional - $850 */}
                    <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-3xl p-8 relative flex flex-col hover:border-blue-500/50 transition-colors">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-b-lg uppercase tracking-widest shadow-lg shadow-blue-600/20">
                            Best Value
                        </div>

                        <h3 className="text-2xl font-black text-white mb-2">Professional</h3>
                        <p className="text-slate-400 text-sm mb-6">For businesses ready to automate growth.</p>

                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-extrabold text-white">$850</span>
                            <span className="text-slate-500 text-sm ml-2">one-time</span>
                        </div>

                        <div className="feature-list space-y-4 flex-grow mb-8 text-sm text-slate-300">
                            <div className="flex items-start gap-3">
                                <Server className="w-5 h-5 text-blue-400 shrink-0" />
                                <span><strong>Free Hosting:</strong> Included for first 12 months.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Database className="w-5 h-5 text-blue-400 shrink-0" />
                                <span><strong>Full CRM Supplied:</strong> White-labelled HighLevel account.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>Automated Social Media Capabilities</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>Self-Managed CRM Setup</span>
                            </div>
                        </div>

                        <Link to="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-center transition-colors shadow-lg shadow-blue-900/40">
                            Get Professional Build
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BuildPackages;
