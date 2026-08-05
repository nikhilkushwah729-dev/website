import React from 'react';
import { COMPANY_INFO, DEVELOPER_INFO } from '../data/portfolioData';
import { Cpu, Github, Linkedin, Twitter, Mail, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenProposalModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposalModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-indigo-900/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>NEXUS ENTERPRISE PLATFORM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to Deploy Nexus Product Engines?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Get an instant enterprise product quote, launch a live sandbox environment, or consult with our lead solutions architects.
            </p>
          </div>

          <button
            onClick={onOpenProposalModal}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold shadow-xl flex items-center space-x-2 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request Enterprise License</span>
          </button>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-900">
          
          <div className="col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="text-base font-bold text-white">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SOC-2 Type II Certified</span>
              </span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider">Product Suite</div>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-white transition-colors">Nexus Core Cloud OS™</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">NeuroFlow AI Studio™</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">OmniPulse Data™</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Aura Luxe Storefront™</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">CyberShield Auth™</a></li>
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider">Developer & Platform</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#sandbox" className="hover:text-white transition-colors">Interactive Sandbox</a></li>
              <li><a href="#developer-api" className="hover:text-white transition-colors">REST & GraphQL APIs</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">35+ Region Edge CDN</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Enterprise SLA & Billing</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. <span className="text-slate-400 font-medium">Founder & Lead Software Architect: Nikhil Pratap Singh Kushwah</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>All 5 Nexus Product Clusters Operational (99.999% SLA)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

