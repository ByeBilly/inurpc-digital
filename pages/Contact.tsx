import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    businessName: '',
    website: '',
    industry: '',
    interest: 'Platform',
    budget: '$100 - $500/mo',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">Talk to a <span className="text-blue-500">Human</span></h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Whether you have questions about the platform, need a custom snapshot, or want to discuss a strategic partnership—our Australian-based team is ready.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                   <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight">Email Support</h4>
                  <p className="text-slate-500 text-sm">esupport@inurpc.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                   <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight">Direct Line</h4>
                  <p className="text-slate-500 text-sm">Australia-Wide Support</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                   <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight">HQ Office</h4>
                  <p className="text-slate-500 text-sm">Proudly Australian Owned & Operated</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-900/50 rounded-3xl border border-white/5 italic text-slate-400 text-sm">
               "The support team at InurPC is local and they actually care about our success in the local market." — Alex T., CEO.
            </div>
          </div>

          <div className="relative">
            {isSubmitted ? (
              <div className="bg-blue-600 rounded-3xl p-12 text-center flex flex-col items-center justify-center h-full">
                 <Terminal className="w-16 h-16 mb-6 text-white" />
                 <h2 className="text-3xl font-black text-white mb-4 uppercase">Submission Received</h2>
                 <p className="text-blue-100 text-lg mb-8">Our team will reach out within 4 business hours to discuss your project.</p>
                 <button onClick={() => setIsSubmitted(false)} className="text-white font-bold border-b border-white hover:border-transparent transition-all uppercase tracking-widest text-sm">Submit another request</button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white uppercase">With your 24/7 365 day AI team</h3>
                  <div className="h-1 w-12 bg-blue-500 mx-auto mt-2"></div>
                </div>
                <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Business Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" 
                        value={formState.businessName}
                        onChange={(e) => setFormState({...formState, businessName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Website URL</label>
                      <input 
                        type="url" 
                        placeholder="https://"
                        className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" 
                        value={formState.website}
                        onChange={(e) => setFormState({...formState, website: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Interested In</label>
                    <select 
                      className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none appearance-none"
                      value={formState.interest}
                      onChange={(e) => setFormState({...formState, interest: e.target.value})}
                    >
                      <option>Platform (SaaS)</option>
                      <option>Done-For-You Implementation</option>
                      <option>Digital Asset Support</option>
                      <option>Custom Build</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                    <textarea 
                      rows={4} 
                      required
                      placeholder="Tell us about your biggest growth bottleneck..."
                      className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none resize-none" 
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all hover:scale-[1.02] uppercase tracking-widest"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                         <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                         <span>Sending...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;