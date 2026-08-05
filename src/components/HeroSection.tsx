import React from 'react';
import { Sparkles, ArrowRight, Calculator, CheckCircle2, ShieldCheck, Zap, Code2, Award, Star, Terminal } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenProposalModal: () => void;
  onOpenEstimator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenProposalModal,
  onOpenEstimator,
}) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Client-Focused Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="font-medium text-slate-300">Client Demo Showcase</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-400 font-semibold">React 19 + AI Integrations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Engineering High-Converting{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Web Applications
              </span>{' '}
              for Scale & Revenue.
            </h1>

            {/* Sub-headline / Value Prop */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              I partner with founders, product leads, and agencies to build production-ready web apps, custom SaaS platforms, and AI workflows engineered for speed, conversion, and zero tech debt.
            </p>

            {/* Client Guarantee & Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3-4 Week MVP Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>100% IP & Code Handover</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>98+ Lighthouse Performance</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={onOpenProposalModal}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5"
              >
                <Sparkles className="w-4 h-4 text-indigo-200 animate-pulse" />
                <span>Generate Instant AI Proposal</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center space-x-2.5"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Estimate Project Scope</span>
              </button>
            </div>

            {/* Social Proof Stats Bar */}
            <div className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">38+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Shipped Client Apps</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 tracking-tight">$18M+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Processed Revenue</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">5-Star Client Rating</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Live Preview Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>client-pitch-demo.tsx</span>
                </div>
                <div className="flex items-center space-x-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 px-2 py-0.5 rounded text-[10px] font-mono">
                  <span>LIVE</span>
                </div>
              </div>

              {/* Developer Avatar & Card Content */}
              <div className="p-6 space-y-5">
                <div className="flex items-center space-x-4">
                  <img
                    src={DEVELOPER_INFO.avatar}
                    alt={DEVELOPER_INFO.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/30 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold text-white">{DEVELOPER_INFO.name}</h3>
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{DEVELOPER_INFO.title}</p>
                    <div className="flex items-center space-x-1 mt-1 text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-slate-300 font-semibold ml-1.5">5.0 (24 Client Reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Terminal / Code Snippet */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="text-slate-500">// Client Delivery Standard</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-400">const</span>
                    <span className="text-cyan-300">clientOutcome</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-emerald-400">await</span>
                    <span className="text-amber-300">buildApplication</span><span className="text-slate-400">({`{`}</span>
                  </div>
                  <div className="pl-4 text-slate-300">
                    speed: <span className="text-teal-300">'sub-50ms'</span>,<br />
                    design: <span className="text-teal-300">'pixel-perfect'</span>,<br />
                    conversionRate: <span className="text-emerald-400">'+35%'</span>,<br />
                    aiCapabilities: <span className="text-indigo-300">true</span>
                  </div>
                  <div className="text-slate-400 font-semibold">{`});`}</div>
                </div>

                {/* Interactive Highlight Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-950/80 border border-indigo-800/40 text-indigo-300 text-xs font-mono">
                    React 19
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/40 text-emerald-300 text-xs font-mono">
                    Gemini AI API
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-purple-950/80 border border-purple-800/40 text-purple-300 text-xs font-mono">
                    Tailwind CSS v4
                  </span>
                </div>

                {/* Consultation Booking Bar */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-900/40 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Need a custom quote?</div>
                    <div className="text-[11px] text-slate-400">Get a response within 4 hours</div>
                  </div>
                  <button
                    onClick={onOpenProposalModal}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-colors"
                  >
                    Request Pitch
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
