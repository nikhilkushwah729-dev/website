import React from 'react';
import { Zap, ShieldCheck, Sparkles, Activity, Layers, Server } from 'lucide-react';
import { BENTO_FEATURES } from '../data/portfolioData';

export const EnterpriseBento: React.FC = () => {
  const getBentoIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-indigo-400" />;
      default: return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="architecture" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built for Scale, Security & <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Zero Cold Starts</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our multi-region cloud infrastructure guarantees high availability and compliance for demanding product operations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {BENTO_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className={`${feat.span} relative rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 p-6 sm:p-8 overflow-hidden backdrop-blur-xl group transition-all duration-300 flex flex-col justify-between space-y-6`}
            >
              {/* Background Accent Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getBentoIcon(feat.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-950 text-cyan-300 border border-slate-800">
                    {feat.stat}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="relative z-10 pt-2 flex items-center space-x-2 text-xs font-mono text-slate-400">
                <Server className="w-3.5 h-3.5 text-indigo-400" />
                <span>35+ Global Cloud Edges Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
