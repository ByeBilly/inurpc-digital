
import React from 'react';
import { useSession } from '../context/AuthContext';
import { Layout, Settings, ShoppingBag, Download, Zap, CreditCard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { session, signOut } = useSession();
  const user = session.user;

  if (!user) return null;

  const stats = [
    { label: 'Active Subscriptions', value: '1', icon: Zap, color: 'text-blue-500' },
    { label: 'Purchased Assets', value: user.purchasedProductSlugs.length.toString(), icon: ShoppingBag, color: 'text-indigo-500' },
    { label: 'Total Downloads', value: '42', icon: Download, color: 'text-cyan-500' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight">Control <span className="text-blue-500">Center</span></h1>
            <p className="text-slate-400">Welcome back, <span className="text-white font-bold">{user.name}</span>. Your growth engine is running.</p>
          </div>
          <button 
            onClick={signOut}
            className="px-6 py-2 bg-slate-900 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:border-blue-500/50 transition-all text-sm font-bold uppercase tracking-widest"
          >
            Log Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 flex items-center gap-6">
              <div className={`w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center ${stat.color} border border-white/5 shadow-xl`}>
                 <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-white">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-slate-900 border border-white/5 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                  <Layout className="w-5 h-5 text-blue-500" />
                  Recent Activity
                </h3>
                <Link to="/dashboard" className="text-xs text-blue-500 font-bold uppercase hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                {[
                  { event: 'Successfully billed for Growth Engine Plan', date: '2 days ago', type: 'billing' },
                  { event: 'New Lead: "Sarah Jenkins" captured via Dental Snapshot', date: '4 hours ago', type: 'lead' },
                  { event: 'Downloaded: Lo-Fi Chill Beats for Creators', date: 'Yesterday', type: 'download' },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-slate-300">{log.event}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase whitespace-nowrap">{log.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-white/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-8 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-indigo-500" />
                Your Purchased Assets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/my-products" className="flex items-center justify-between p-6 bg-slate-950 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-500/10 text-indigo-500 rounded-lg flex items-center justify-center">
                       <Download className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white text-sm">Access All Downloads</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-indigo-500 transition-colors" />
                </Link>
                <Link to="/digital-products" className="flex items-center justify-between p-6 bg-slate-950 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center">
                       <ShoppingBag className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white text-sm">Browse Vault</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-blue-500 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-900 border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-slate-400" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-white/5 hover:bg-slate-800 transition-all text-sm font-bold text-slate-300">
                    <span>Account Settings</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-white/5 hover:bg-slate-800 transition-all text-sm font-bold text-slate-300">
                    <span>Manage Billing</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-white/5 hover:bg-slate-800 transition-all text-sm font-bold text-slate-300">
                    <span>API Integrations</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
             </div>

             <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-2xl -mr-12 -mt-12 rounded-full"></div>
                <CreditCard className="w-10 h-10 mb-6 opacity-40" />
                <h4 className="text-xl font-black uppercase tracking-tight mb-2">Growth Engine</h4>
                <p className="text-blue-100 text-sm mb-6">Your scale plan is active. All systems normal.</p>
                <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl text-sm uppercase tracking-widest shadow-lg">View Invoice</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
