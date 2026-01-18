import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold uppercase">InurPC <span className="text-blue-500 text-xs">Digital</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We plug a real automation engine and digital assets into your business so it makes more while you work and while you sleep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/platform" className="hover:text-blue-400 transition-colors">InurPC Growth Engine</Link></li>
              <li><Link to="/platform" className="hover:text-blue-400 transition-colors">CRM & Automation</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">DFY Implementation</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Custom Build</Link></li>
            </ul>
          </div>



          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/legal/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Support</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>© {new Date().getFullYear()} InurPC Digital. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Built by InurPC Dev Team</span>
            <span>Security Audited Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;