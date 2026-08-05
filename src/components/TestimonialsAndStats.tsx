import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TestimonialsAndStats: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            What Client Leaders Say
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal">
            Direct feedback from product executives, founders, and CTOs who partnered with me to launch critical software products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-xl relative"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-500/30" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                {/* Metric Badge */}
                <div className="mb-3 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 text-[11px] font-bold w-fit">
                  ⚡ {t.metricHighlight}
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-slate-400">{t.role} • <span className="text-indigo-400 font-medium">{t.company}</span></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Guarantee Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-indigo-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Client Satisfaction & Code Guarantee</h4>
              <p className="text-xs text-slate-400">Every project includes 100% intellectual property transfer, clean type-safe documentation, and 30-day post-launch warranty.</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-2 rounded-xl shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% On-Time Delivery Record</span>
          </div>
        </div>

      </div>
    </section>
  );
};
