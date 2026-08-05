import React, { useState } from 'react';
import { Cpu, Sparkles, Terminal, ShieldCheck, Activity, ArrowRight, Play, CheckCircle2, Zap, Layers, Server, Globe, Bot } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/portfolioData';

interface ProductHeroProps {
  onOpenLicenseModal: () => void;
  onOpenSandbox: () => void;
}

export const ProductHero: React.FC<ProductHeroProps> = ({
  onOpenLicenseModal,
  onOpenSandbox
}) => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'nexus-core' | 'neuroflow' | 'omnipulse' | 'cybershield'>('nexus-core');
  const [simulatedLog, setSimulatedLog] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleRunConsoleAction = (productName: string) => {
    setIsExecuting(true);
    const newLogs = [
      `[${new Date().toLocaleTimeString()}] Initializing ${productName} runtime...`,
      `[${new Date().toLocaleTimeString()}] Verifying SOC-2 security handshake... OK`,
      `[${new Date().toLocaleTimeString()}] Sub-20ms cluster dispatch connected (us-east-1).`,
      `[${new Date().toLocaleTimeString()}] Response 200 OK - Latency: 14ms`
    ];
    setSimulatedLog(newLogs);
    setTimeout(() => setIsExecuting(false), 600);
  };

  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>{COMPANY_INFO.name} • Product Platform v4.2</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-semibold">
                <span className="text-cyan-400">Founder & Architect:</span>
                <span className="text-white font-bold">Nikhil Pratap Singh Kushwah</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Enterprise <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Product Suite</span> & Cloud OS
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Modular software products engineered for developers & enterprise scale. Power your business with real-time workflow automation, multimodal Gemini 2.5 AI copilots, streaming telemetry, and zero-trust auth.
            </p>

            {/* Certifications Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {COMPANY_INFO.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenSandbox}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
              >
                <Terminal className="w-4 h-4 text-cyan-200" />
                <span>Launch Live Product Sandbox</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onOpenLicenseModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Request Enterprise License</span>
              </button>
            </div>

            {/* Key Company Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              {COMPANY_INFO.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Hero Product Console Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-4 sm:p-5 backdrop-blur-xl">
              
              {/* Console Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2">nexus-console://live-cluster</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ONLINE • 18ms
                </span>
              </div>

              {/* Console Navigation Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950 rounded-xl mb-4 border border-slate-800 text-xs font-medium">
                <button
                  onClick={() => setActiveConsoleTab('nexus-core')}
                  className={`py-1.5 rounded-lg transition-all text-center ${
                    activeConsoleTab === 'nexus-core'
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Nexus OS
                </button>
                <button
                  onClick={() => setActiveConsoleTab('neuroflow')}
                  className={`py-1.5 rounded-lg transition-all text-center ${
                    activeConsoleTab === 'neuroflow'
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AI Studio
                </button>
                <button
                  onClick={() => setActiveConsoleTab('omnipulse')}
                  className={`py-1.5 rounded-lg transition-all text-center ${
                    activeConsoleTab === 'omnipulse'
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Analytics
                </button>
                <button
                  onClick={() => setActiveConsoleTab('cybershield')}
                  className={`py-1.5 rounded-lg transition-all text-center ${
                    activeConsoleTab === 'cybershield'
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Security
                </button>
              </div>

              {/* Console Tab Content */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 space-y-4">
                
                {activeConsoleTab === 'nexus-core' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-indigo-400 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4" /> Nexus Core Cloud OS v4.2
                      </span>
                      <span className="text-slate-400 font-mono">18ms latency</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[11px]">Serverless Clusters</div>
                        <div className="text-sm font-bold text-emerald-400">32 Active Edges</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[11px]">Workflow Triggers</div>
                        <div className="text-sm font-bold text-cyan-400">Auto-Scaling</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRunConsoleAction('Nexus Core OS')}
                      disabled={isExecuting}
                      className="w-full py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{isExecuting ? 'Executing Workflow...' : 'Run Live Workflow Diagnostic'}</span>
                    </button>
                  </div>
                )}

                {activeConsoleTab === 'neuroflow' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                        <Bot className="w-4 h-4" /> NeuroFlow AI Engine
                      </span>
                      <span className="text-slate-400 font-mono">Gemini 2.5 Flash</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-200">
                      <div className="text-slate-500 text-[10px] mb-1">// System Prompt Input</div>
                      &quot;Summarize real-time enterprise metrics & return JSON&quot;
                    </div>
                    <button
                      onClick={() => handleRunConsoleAction('NeuroFlow AI Studio')}
                      disabled={isExecuting}
                      className="w-full py-2 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isExecuting ? 'Prompting AI...' : 'Execute Gemini AI Prompt'}</span>
                    </button>
                  </div>
                )}

                {activeConsoleTab === 'omnipulse' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                        <Activity className="w-4 h-4" /> OmniPulse Telemetry Stream
                      </span>
                      <span className="text-slate-400 font-mono">120K events/s</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Cluster CPU Load</span>
                        <span className="text-emerald-400 font-mono">24.2%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div className="h-full bg-emerald-500 rounded-full w-[24%]" />
                      </div>
                    </div>
                    <button
                      onClick={() => handleRunConsoleAction('OmniPulse Data')}
                      disabled={isExecuting}
                      className="w-full py-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
                    >
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isExecuting ? 'Streaming Data...' : 'Poll Realtime Telemetry Stream'}</span>
                    </button>
                  </div>
                )}

                {activeConsoleTab === 'cybershield' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" /> CyberShield OAuth & RBAC
                      </span>
                      <span className="text-slate-400 font-mono">SOC-2 Audited</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      <span className="text-emerald-400 font-bold">JWT Verified:</span> sub_998124 | Scope: [admin:write, ai:read]
                    </div>
                    <button
                      onClick={() => handleRunConsoleAction('CyberShield Security')}
                      disabled={isExecuting}
                      className="w-full py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      <span>{isExecuting ? 'Verifying Auth...' : 'Verify Zero-Trust Token'}</span>
                    </button>
                  </div>
                )}

                {/* Simulated Logs Output Window */}
                {simulatedLog.length > 0 && (
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1 animate-in fade-in duration-200">
                    {simulatedLog.map((log, idx) => (
                      <div key={idx} className="text-emerald-400/90 leading-relaxed">
                        {log}
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Console Footer */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span>SDK Version: @nexus/suite@4.2.0</span>
                <span className="text-indigo-400 hover:underline cursor-pointer" onClick={onOpenSandbox}>
                  Open Full Sandbox →
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
