import React, { useState } from 'react';
import { Sparkles, Check, HelpCircle, ArrowRight, ShieldCheck, Zap, Sliders, Calculator } from 'lucide-react';
import { PRICING_TIERS } from '../data/portfolioData';

interface ProductPricingProps {
  onOpenLicenseModal: () => void;
}

export const ProductPricing: React.FC<ProductPricingProps> = ({
  onOpenLicenseModal
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  // Interactive Calculator State
  const [apiRequests, setApiRequests] = useState<number>(500000); // 500k
  const [aiHours, setAiHours] = useState<number>(50); // 50 hrs
  const [teamSeats, setTeamSeats] = useState<number>(5);

  // Dynamic cost calculation
  const calculateEstimatedPrice = () => {
    // Base seat calculation
    const seatCost = teamSeats * 12;
    // API Request cost ($15 per 500k after first 100k)
    const apiCost = Math.max(0, Math.ceil((apiRequests - 100000) / 500000) * 15);
    // AI Compute Cost ($0.40 per hour)
    const aiCost = Math.round(aiHours * 0.4);

    const rawTotal = 29 + seatCost + apiCost + aiCost;
    return billingCycle === 'annual' ? Math.round(rawTotal * 0.8) : rawTotal;
  };

  const getRecommendedTier = () => {
    if (apiRequests > 2000000 || teamSeats > 20 || aiHours > 200) {
      return "Enterprise Global Tier Recommended";
    } else if (apiRequests > 200000 || teamSeats > 3 || aiHours > 20) {
      return "Growth / Business Pro Tier Recommended";
    } else {
      return "Developer / Starter Tier Recommended";
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRICING & LICENSE PLANS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Simple, Transparent <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Product Licensing</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Choose the product tier that matches your engineering scale. No hidden fees, instant API access.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-semibold mt-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-indigo-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRICING_TIERS.map((tier) => {
            const displayPrice = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl bg-slate-900/90 border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
                  tier.popular
                    ? 'border-indigo-500 shadow-2xl shadow-indigo-600/20 scale-[1.02]'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    ★ Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{tier.description}</p>
                  </div>

                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-extrabold text-white">${displayPrice}</span>
                    <span className="text-xs text-slate-400 font-medium">/ month per organization</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Included Capabilities:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenLicenseModal}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02]'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Usage Cost Calculator Card */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Interactive Usage & Scale Calculator</h3>
                <p className="text-xs text-slate-400">
                  Estimate custom plan costs based on your monthly API request volume and team seats.
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-400">Estimated Total Cost</div>
              <div className="text-2xl font-extrabold text-cyan-400">
                ${calculateEstimatedPrice()} <span className="text-xs text-slate-400 font-normal">/ mo</span>
              </div>
              <div className="text-[11px] font-semibold text-emerald-400 mt-0.5">
                {getRecommendedTier()}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Slider 1: Monthly API Requests */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-300">Monthly API Requests:</span>
                <span className="font-mono text-cyan-400 font-bold">{(apiRequests / 1000).toFixed(0)}k req</span>
              </div>
              <input
                type="range"
                min={100000}
                max={5000000}
                step={100000}
                value={apiRequests}
                onChange={(e) => setApiRequests(Number(e.target.value))}
                className="w-full accent-indigo-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>100k req</span>
                <span>5M req</span>
              </div>
            </div>

            {/* Slider 2: AI Compute Hours */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-300">AI Compute Hours (Gemini):</span>
                <span className="font-mono text-cyan-400 font-bold">{aiHours} hrs</span>
              </div>
              <input
                type="range"
                min={0}
                max={300}
                step={10}
                value={aiHours}
                onChange={(e) => setAiHours(Number(e.target.value))}
                className="w-full accent-cyan-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 hrs</span>
                <span>300 hrs</span>
              </div>
            </div>

            {/* Slider 3: Team Seats */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-300">Active Team Seats:</span>
                <span className="font-mono text-cyan-400 font-bold">{teamSeats} seats</span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                value={teamSeats}
                onChange={(e) => setTeamSeats(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 seat</span>
                <span>30 seats</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
