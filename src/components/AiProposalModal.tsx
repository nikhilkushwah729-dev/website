import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2, Download, Copy, Check, Clock, DollarSign, Layers } from 'lucide-react';
import { GeneratedProposal } from '../types';
import confetti from 'canvas-confetti';

interface AiProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    projectType: string;
    budgetRange: string;
    timeline: string;
    features: string[];
  } | null;
}

export const AiProposalModal: React.FC<AiProposalModalProps> = ({
  isOpen,
  onClose,
  prefillData
}) => {
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Full-Stack Web App');
  const [budgetRange, setBudgetRange] = useState('$3,000 - $6,000');
  const [timeline, setTimeline] = useState('3 - 4 Weeks');
  const [description, setDescription] = useState('');
  const [selectedFeaturesText, setSelectedFeaturesText] = useState('Auth, Payments, Admin Dashboard');

  const [isLoading, setIsLoading] = useState(false);
  const [proposal, setProposal] = useState<GeneratedProposal | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefillData) {
      setProjectType(prefillData.projectType);
      setBudgetRange(prefillData.budgetRange);
      setTimeline(prefillData.timeline);
      if (prefillData.features.length > 0) {
        setSelectedFeaturesText(prefillData.features.join(', '));
      }
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const handleGenerateProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: clientName || 'Valued Client',
          companyName: companyName || 'Innovator Co.',
          email,
          projectType,
          budgetRange,
          timeline,
          description: description || 'Modern responsive web application with scalable backend architecture',
          features: selectedFeaturesText.split(',').map(f => f.trim())
        })
      });

      const data = await response.json();
      if (data.success && data.proposal) {
        setProposal(data.proposal);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      console.error("Failed to generate proposal:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyProposal = () => {
    if (!proposal) return;
    const text = `
PROPOSAL: ${proposal.title}
=======================================
EXECUTIVE SUMMARY:
${proposal.executiveSummary}

ESTIMATED BUDGET: ${proposal.estimatedBudget}
ESTIMATED TIMELINE: ${proposal.estimatedTimeline}

RECOMMENDED TECH STACK:
${proposal.techStack.map(s => `• ${s}`).join('\n')}

DELIVERY PHASES:
${proposal.phases.map(p => `[${p.phase}] (${p.duration})\nDeliverables:\n${p.deliverables.map(d => `  - ${d}`).join('\n')}`).join('\n\n')}

KEY DIFFERENTIATORS:
${proposal.keyDifferentiators.map(k => `• ${k}`).join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Enterprise Proposal & Architecture Blueprint</h3>
              <p className="text-xs text-slate-400">Receive a tailored technical specification, milestone roadmap & investment quote</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!proposal ? (
            /* Input Form */
            <form onSubmit={handleGenerateProposal} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Company / Startup Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Health Inc."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sarah@acme.com"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Project Type</label>
                  <input
                    type="text"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Budget Target</label>
                  <input
                    type="text"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Target Schedule</label>
                  <input
                    type="text"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Key Modules / Features Needed</label>
                <input
                  type="text"
                  value={selectedFeaturesText}
                  onChange={(e) => setSelectedFeaturesText(e.target.value)}
                  placeholder="Auth, Payments, Gemini AI, Admin Dashboard"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Project Brief / Specific Goals</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your vision, target users, or key problem you want to solve..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-xs shadow-xl shadow-indigo-600/30 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-indigo-200" />
                  <span>{isLoading ? 'Compiling Technical Specification & Proposal...' : 'Request Custom Technical Proposal & Blueprint'}</span>
                </button>
              </div>

            </form>
          ) : (
            /* Generated Proposal Display */
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-emerald-300 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Custom Proposal & Technical Specification Ready!</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyProposal}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard' : 'Copy Proposal'}</span>
                  </button>

                  <button
                    onClick={() => setProposal(null)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                  >
                    Edit Inputs
                  </button>
                </div>
              </div>

              {/* Proposal Document */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 text-slate-200">
                
                <div>
                  <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">Confidential Proposal</span>
                  <h2 className="text-xl font-black text-white mt-1">{proposal.title}</h2>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">Executive Summary</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                    {proposal.executiveSummary}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Estimated Investment</div>
                    <div className="text-lg font-black text-indigo-400">{proposal.estimatedBudget}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Estimated Timeline</div>
                    <div className="text-lg font-black text-emerald-400">{proposal.estimatedTimeline}</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">Recommended Technical Architecture</h4>
                  <div className="flex flex-wrap gap-2">
                    {proposal.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-indigo-950/80 border border-indigo-800/60 text-indigo-200 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Delivery Phases */}
                <div>
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3">Milestone Delivery Roadmap</h4>
                  <div className="space-y-3">
                    {proposal.phases.map((ph, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{ph.phase}</span>
                          <span className="text-[10px] font-mono text-indigo-400 font-semibold">{ph.duration}</span>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-1 text-[11px] text-slate-400">
                          {ph.deliverables.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Differentiators */}
                <div>
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">Code Quality & Value Guarantees</h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {proposal.keyDifferentiators.map((diff, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={`mailto:alex.vance.dev@gmail.com?subject=Accepting Proposal: ${proposal.title}&body=Hi Alex, I reviewed the generated proposal and would like to proceed with a kickoff discovery call.`}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-lg flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Accept Proposal & Schedule Kickoff</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Close
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
