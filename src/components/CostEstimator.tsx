import React, { useState } from 'react';
import { Calculator, Check, Sparkles, Clock, DollarSign, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CostEstimatorProps {
  onLockInQuote: (selectedData: {
    projectType: string;
    budgetRange: string;
    timeline: string;
    features: string[];
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onLockInQuote }) => {
  const [projectType, setProjectType] = useState<'saas' | 'ecommerce' | 'ai' | 'landing'>('saas');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'payments']);
  const [designPolish, setDesignPolish] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [expedited, setExpedited] = useState(false);

  const projectTypes = [
    { id: 'saas', name: 'Full-Stack SaaS MVP', baseCost: 3500, baseWeeks: 3.5, desc: 'Complete React 19 app with Express backend, DB & Auth.' },
    { id: 'ai', name: 'AI Platform / Tool', baseCost: 3800, baseWeeks: 3.5, desc: 'Gemini 2.5 Flash integration with prompt engine & streaming UI.' },
    { id: 'ecommerce', name: 'Custom E-Commerce', baseCost: 2800, baseWeeks: 2.5, desc: 'Headless storefront with cart, checkout, and inventory.' },
    { id: 'landing', name: 'High-Converting Landing', baseCost: 1800, baseWeeks: 1.5, desc: 'Ultra-fast marketing site with animations and lead form.' },
  ];

  const featureOptions = [
    { id: 'auth', name: 'User Auth & Role Permissions', cost: 400, weeks: 0.5 },
    { id: 'payments', name: 'Stripe Billing & Subscription', cost: 500, weeks: 0.5 },
    { id: 'ai', name: 'Gemini AI Integration', cost: 700, weeks: 0.5 },
    { id: 'websockets', name: 'Real-time WebSockets / Chat', cost: 600, weeks: 0.5 },
    { id: 'admin', name: 'Admin Analytics Dashboard', cost: 800, weeks: 0.5 },
    { id: 'cms', name: 'Content Management System', cost: 500, weeks: 0.5 },
  ];

  const designLevels = [
    { id: 'standard', name: 'Clean & Modern', multiplier: 1.0, desc: 'Tailwind UI components with clean responsive layout.' },
    { id: 'premium', name: 'Custom Brand & Motion', multiplier: 1.2, desc: 'Custom micro-interactions, Framer Motion transitions.' },
    { id: 'luxury', name: 'Pixel-Perfect Custom UI', multiplier: 1.4, desc: 'Bespoke design system, 3D elements, luxury aesthetic.' },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculate Total
  const currentType = projectTypes.find(p => p.id === projectType)!;
  const featuresCost = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find(f => f.id === featId);
    return acc + (feat ? feat.cost : 0);
  }, 0);

  const designMultiplier = designLevels.find(d => d.id === designPolish)!.multiplier;
  const subtotal = (currentType.baseCost + featuresCost) * designMultiplier;
  const totalCost = Math.round(expedited ? subtotal * 1.25 : subtotal);

  const baseWeeksSum = currentType.baseWeeks + (selectedFeatures.length * 0.25);
  const totalWeeks = Math.max(1.5, Math.round((expedited ? baseWeeksSum * 0.7 : baseWeeksSum) * 10) / 10);

  const budgetRangeFormatted = `$${(totalCost - 400).toLocaleString()} - $${(totalCost + 600).toLocaleString()}`;
  const timelineFormatted = `${totalWeeks} - ${totalWeeks + 1} Weeks`;

  const handleLockIn = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const featureNames = selectedFeatures.map(id => featureOptions.find(f => f.id === id)?.name || id);

    onLockInQuote({
      projectType: currentType.name,
      budgetRange: budgetRangeFormatted,
      timeline: timelineFormatted,
      features: featureNames
    });
  };

  return (
    <section id="estimator" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing & Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Estimate Your Project Cost & Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal">
            No hidden surprises or vague billing. Select your project requirements below to calculate an instant budget range and delivery schedule.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 space-y-8 bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl">
            
            {/* STEP 1: PROJECT TYPE */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                1. Select Core Application Type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setProjectType(pt.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      projectType === pt.id
                        ? 'bg-indigo-950/80 border-indigo-500 text-white ring-1 ring-indigo-500'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white">{pt.name}</span>
                      <span className="text-xs font-bold text-indigo-400">${pt.baseCost.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">{pt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: FEATURES */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                2. Technical Modules & Integrations
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-indigo-950/60 border-indigo-500/80 text-white'
                          : 'bg-slate-900/80 border-slate-800/80 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-indigo-600 border-indigo-500' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-xs font-semibold">{feat.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-indigo-300">+${feat.cost}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: DESIGN POLISH */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                3. UI/UX Design & Motion Polish Level
              </label>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {designLevels.map((dl) => (
                  <button
                    key={dl.id}
                    onClick={() => setDesignPolish(dl.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      designPolish === dl.id
                        ? 'bg-indigo-950/80 border-indigo-500 text-white ring-1 ring-indigo-500'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="font-bold text-xs text-white mb-1">{dl.name}</div>
                    <p className="text-[11px] text-slate-400 leading-tight">{dl.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 4: EXPEDITED TOGGLE */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Need Fast Delivery? (Expedited Sprint)</div>
                <div className="text-[11px] text-slate-400">Prioritizes 30% faster turnaround schedule.</div>
              </div>
              <button
                onClick={() => setExpedited(!expedited)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                  expedited
                    ? 'bg-amber-950 border-amber-800 text-amber-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                {expedited ? '⚡ Expedited On' : 'Standard Speed'}
              </button>
            </div>

          </div>

          {/* Real-time Calculation Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl bg-gradient-to-b from-indigo-950/80 via-slate-950 to-slate-950 border border-indigo-900/50 p-6 md:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Estimated Project Quote</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-[11px] font-bold">
                  Guaranteed Rate
                </span>
              </div>

              {/* Price Display */}
              <div>
                <div className="text-xs text-slate-400 font-medium">Estimated Budget Range</div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                  {budgetRangeFormatted}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Estimated Schedule: <strong className="text-slate-200">{timelineFormatted}</strong></span>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                <div className="text-slate-400 font-bold mb-2 uppercase text-[10px] tracking-wider">Included In This Scope:</div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Base App Architecture ({currentType.name})</span>
                  <span className="font-mono text-indigo-300">${currentType.baseCost}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>{selectedFeatures.length} Technical Modules</span>
                  <span className="font-mono text-indigo-300">+${featuresCost}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Design Polish Tier</span>
                  <span className="font-mono text-indigo-300">{designMultiplier}x</span>
                </div>
                {expedited && (
                  <div className="flex items-center justify-between text-amber-300 font-medium">
                    <span>Expedited Sprint Surcharge</span>
                    <span className="font-mono">+25%</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={handleLockIn}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-indigo-200 animate-pulse" />
                <span>Lock In Estimate & Request Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Guarantees */}
              <div className="pt-2 text-[11px] text-slate-400 space-y-1.5 border-t border-slate-900">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>No obligation • Fixed price contract guarantee</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Includes 30 days post-launch code warranty</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
