import React from 'react';
import { SERVICES, PROCESS_STEPS } from '../data/portfolioData';
import { Code2, Sparkles, Layout, Zap, Check, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface ServicesAndProcessProps {
  onOpenProposalModal: () => void;
}

export const ServicesAndProcess: React.FC<ServicesAndProcessProps> = ({ onOpenProposalModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-purple-400" />;
      default: return <Zap className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>End-to-End Client Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Services Engineered for Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal">
            Whether you need a brand-new MVP, AI feature integrations, or an absolute UI/UX modernization, I deliver production-ready software built to scale.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Key Deliverables</div>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Starting Rate</div>
                  <div className="text-base font-extrabold text-white">{service.startingPrice}</div>
                </div>

                <button
                  onClick={onOpenProposalModal}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800/80 p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-extrabold text-white">Transparent 4-Step Working Process</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              How we collaborate smoothly from initial conversation to live deployment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="relative space-y-3 bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-indigo-500/80 font-mono">{step.number}</span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 text-indigo-300 text-[10px] font-bold font-mono">
                    {step.timeframe}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-slate-300 text-xs">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>Weekly live staging updates & direct Slack / WhatsApp communication channel included.</span>
            </div>

            <button
              onClick={onOpenProposalModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg flex items-center space-x-2 shrink-0"
            >
              <span>Schedule Discovery Pitch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
