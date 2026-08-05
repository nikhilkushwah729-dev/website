import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Sparkles, Activity, ShoppingBag, ShieldCheck, Play, RefreshCw, Check, Copy, Zap, Bot, ArrowRight, DollarSign, Lock } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface LiveProductSandboxProps {
  selectedProduct?: Product | null;
}

export const LiveProductSandbox: React.FC<LiveProductSandboxProps> = ({
  selectedProduct
}) => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'ai-studio' | 'analytics' | 'e-commerce' | 'security'>('workflow');

  // Synchronize when a product is picked from showcase
  useEffect(() => {
    if (selectedProduct) {
      if (selectedProduct.id === 'nexus-core-os') setActiveTab('workflow');
      else if (selectedProduct.id === 'neuroflow-ai-studio') setActiveTab('ai-studio');
      else if (selectedProduct.id === 'omnipulse-data') setActiveTab('analytics');
      else if (selectedProduct.id === 'aura-luxe-storefront') setActiveTab('e-commerce');
      else if (selectedProduct.id === 'cybershield-auth') setActiveTab('security');

      const el = document.getElementById('sandbox');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedProduct]);

  // Workflow Simulator State
  const [workflowNodes, setWorkflowNodes] = useState([
    { id: '1', name: 'HTTP Event Listener', status: 'idle', type: 'trigger' },
    { id: '2', name: 'CyberShield Token Auth', status: 'idle', type: 'security' },
    { id: '3', name: 'Gemini AI Processing', status: 'idle', type: 'ai' },
    { id: '4', name: 'Database Ledger Write', status: 'idle', type: 'db' }
  ]);
  const [workflowLogs, setWorkflowLogs] = useState<string[]>([]);
  const [isExecutingWorkflow, setIsExecutingWorkflow] = useState(false);

  // AI Studio State
  const [aiPrompt, setAiPrompt] = useState('Generate a microservices deployment spec for an enterprise payment API.');
  const [aiTone, setAiTone] = useState('Technical Architect');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  // Analytics Simulator State
  const [analyticsMetric, setAnalyticsMetric] = useState<'rps' | 'latency' | 'errors'>('rps');
  const [chartData, setChartData] = useState([
    { time: '10:00', value: 1240 },
    { time: '10:05', value: 1890 },
    { time: '10:10', value: 2450 },
    { time: '10:15', value: 3100 },
    { time: '10:20', value: 2800 },
    { time: '10:25', value: 3650 },
    { time: '10:30', value: 4200 }
  ]);

  // E-Commerce Cart Simulator State
  const [cartItems, setCartItems] = useState([
    { id: 'item-1', name: 'Nexus Cloud License (1 Yr)', price: 99, qty: 1 },
    { id: 'item-2', name: 'NeuroFlow AI Token Pack', price: 49, qty: 2 }
  ]);
  const [promoCode, setPromoCode] = useState('NEXUS20');
  const [promoApplied, setPromoApplied] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Security Simulator State
  const [oauthStep, setOauthStep] = useState<number>(1);
  const [tokenPayload, setTokenPayload] = useState<string | null>(null);

  // Run Workflow Simulation
  const handleTriggerWorkflow = () => {
    setIsExecutingWorkflow(true);
    setWorkflowLogs([`[${new Date().toLocaleTimeString()}] Event Trigger Received: http.post('/api/checkout')`]);

    setTimeout(() => {
      setWorkflowNodes(prev => prev.map((n, i) => i === 0 ? { ...n, status: 'success' } : n));
      setWorkflowLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] HTTP Listener Verified. Payload signature OK.`]);
    }, 300);

    setTimeout(() => {
      setWorkflowNodes(prev => prev.map((n, i) => i <= 1 ? { ...n, status: 'success' } : n));
      setWorkflowLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] CyberShield Auth: Token verified (scope: write).`]);
    }, 600);

    setTimeout(() => {
      setWorkflowNodes(prev => prev.map((n, i) => i <= 2 ? { ...n, status: 'success' } : n));
      setWorkflowLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] NeuroFlow AI: Gemini 2.5 Flash analysis completed (14ms).`]);
    }, 900);

    setTimeout(() => {
      setWorkflowNodes(prev => prev.map((n, i) => ({ ...n, status: 'success' })));
      setWorkflowLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Ledger Sync Complete. Transaction ID: #tx_${Math.floor(Math.random()*899999 + 100000)}`]);
      setIsExecutingWorkflow(false);
    }, 1200);
  };

  // Run Gemini AI Prompt
  const handleExecuteAiPrompt = async () => {
    setIsAiGenerating(true);
    setAiResponse(null);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `[Role: ${aiTone}] ${aiPrompt}`
        })
      });
      const data = await res.json();
      setAiResponse(data.reply || 'AI generated response successfully.');
    } catch (e) {
      setAiResponse(`Architecture Plan: Microservice deployment initialized using React 19, TypeScript, Docker, and Gemini 2.5 Flash API.`);
    } finally {
      setIsAiGenerating(false);
    }
  };

  // Handle Checkout Simulator
  const handleRunCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore if canvas not mounted
      }
      alert('Simulated Order Placed Successfully! (Sub-0.4s Execution)');
    }, 800);
  };

  // Handle Security OAuth Simulation
  const handleRunOAuthFlow = () => {
    setOauthStep(2);
    setTimeout(() => {
      setOauthStep(3);
      setTokenPayload(JSON.stringify({
        iss: "https://auth.nexustech.io",
        sub: "user_enterprise_982",
        aud: "nexus-product-suite",
        exp: Math.floor(Date.now() / 1000) + 3600,
        scope: "nexus:admin neuroflow:copilot omnipulse:read"
      }, null, 2));
    }, 1000);
  };

  return (
    <section id="sandbox" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE PRODUCT PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Live Interactive <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Product Sandbox</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Test all 5 Nexus product engines live directly in your browser. Trigger event workflows, prompt Gemini 2.5 AI, and inspect API payloads.
          </p>
        </div>

        {/* Sandbox Container Window */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Bar Tabs */}
          <div className="flex flex-wrap items-center justify-between p-3 sm:p-4 bg-slate-950 border-b border-slate-800 gap-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveTab('workflow')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeTab === 'workflow'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>1. Nexus Core OS</span>
              </button>

              <button
                onClick={() => setActiveTab('ai-studio')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeTab === 'ai-studio'
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>2. NeuroFlow AI Studio</span>
              </button>

              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>3. OmniPulse Telemetry</span>
              </button>

              <button
                onClick={() => setActiveTab('e-commerce')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeTab === 'e-commerce'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-purple-400" />
                <span>4. Aura Storefront</span>
              </button>

              <button
                onClick={() => setActiveTab('security')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeTab === 'security'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>5. CyberShield Auth</span>
              </button>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Cluster Active</span>
            </div>
          </div>

          {/* Sandbox Body Content */}
          <div className="p-6 sm:p-8 min-h-[420px]">
            
            {/* TAB 1: Nexus Core OS Visual Workflow Builder */}
            {activeTab === 'workflow' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-indigo-400" /> Nexus Core Visual Workflow OS
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Simulate a live microservice event pipeline processing sub-20ms events across cloud containers.
                    </p>
                  </div>

                  <button
                    onClick={handleTriggerWorkflow}
                    disabled={isExecutingWorkflow}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>{isExecutingWorkflow ? 'Running Workflow...' : 'Trigger Live Event'}</span>
                  </button>
                </div>

                {/* Workflow Nodes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {workflowNodes.map((node, i) => (
                    <div
                      key={node.id}
                      className={`p-4 rounded-xl border transition-all ${
                        node.status === 'success'
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Step 0{i+1}</div>
                      <div className="text-xs font-bold text-white mt-1">{node.name}</div>
                      <div className="text-[11px] mt-2 flex items-center justify-between">
                        <span>Status:</span>
                        <span className={`font-mono font-bold ${node.status === 'success' ? 'text-emerald-400' : 'text-slate-500'}`}>
                          {node.status === 'success' ? '✔ Executed' : 'Ready'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Event Logs Box */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400">Live Execution Telemetry Logs:</span>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-200 min-h-[120px] space-y-1 overflow-x-auto">
                    {workflowLogs.length === 0 ? (
                      <span className="text-slate-600 italic">Click &quot;Trigger Live Event&quot; above to run the microservice pipeline...</span>
                    ) : (
                      workflowLogs.map((log, index) => (
                        <div key={index} className="text-emerald-400/90 leading-relaxed">
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: NeuroFlow Gemini 2.5 AI Studio */}
            {activeTab === 'ai-studio' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Bot className="w-5 h-5 text-cyan-400" /> NeuroFlow Gemini 2.5 AI Studio
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Execute server-side Gemini AI model prompts with role instructions and JSON response formats.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-400 block mb-1">
                        System Instruction Role:
                      </label>
                      <select
                        value={aiTone}
                        onChange={(e) => setAiTone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Technical Architect">Technical Architect</option>
                        <option value="Product Strategist">Product Strategist</option>
                        <option value="Security Auditor">Security Auditor</option>
                        <option value="Creative Director">Creative Director</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-400 block mb-1">
                        AI Prompt Input:
                      </label>
                      <textarea
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        rows={4}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-sans leading-relaxed"
                      />
                    </div>

                    <button
                      onClick={handleExecuteAiPrompt}
                      disabled={isAiGenerating}
                      className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/30 transition-all flex items-center justify-center space-x-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{isAiGenerating ? 'Prompting Gemini 2.5...' : 'Execute AI Prompt'}</span>
                    </button>
                  </div>

                  <div className="lg:col-span-7 space-y-2">
                    <label className="text-xs font-semibold text-slate-400 block">
                      Gemini 2.5 Flash Response Output:
                    </label>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-200 min-h-[220px] max-h-[300px] overflow-y-auto leading-relaxed">
                      {isAiGenerating ? (
                        <div className="flex items-center space-x-2 text-cyan-400 animate-pulse py-8">
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Streaming AI tokens from Gemini 2.5 Flash...</span>
                        </div>
                      ) : aiResponse ? (
                        <div className="whitespace-pre-wrap">{aiResponse}</div>
                      ) : (
                        <span className="text-slate-600 italic">Click &quot;Execute AI Prompt&quot; to test the live model...</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: OmniPulse Analytics Telemetry */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-400" /> OmniPulse Realtime Telemetry Pipeline
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Live updating telemetry stream monitoring server clusters and API latencies.
                    </p>
                  </div>

                  <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                    <button
                      onClick={() => setAnalyticsMetric('rps')}
                      className={`px-3 py-1.5 rounded-lg ${analyticsMetric === 'rps' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400'}`}
                    >
                      Requests / sec
                    </button>
                    <button
                      onClick={() => setAnalyticsMetric('latency')}
                      className={`px-3 py-1.5 rounded-lg ${analyticsMetric === 'latency' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400'}`}
                    >
                      Latency (ms)
                    </button>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex justify-between items-end h-48 pt-4 gap-3">
                    {chartData.map((d, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                        <div className="text-[10px] text-emerald-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          {analyticsMetric === 'latency' ? `${Math.round(d.value/100)}ms` : `${d.value} rps`}
                        </div>
                        <div
                          style={{ height: `${(d.value / 4500) * 100}%` }}
                          className="w-full bg-gradient-to-t from-emerald-600 to-cyan-400 rounded-t-md group-hover:brightness-125 transition-all"
                        />
                        <div className="text-[10px] text-slate-500 font-mono">{d.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-slate-400 text-xs">Peak Throughput</div>
                    <div className="text-lg font-bold text-white mt-0.5">4,200 RPS</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-slate-400 text-xs">P99 Latency SLA</div>
                    <div className="text-lg font-bold text-emerald-400 mt-0.5">14.2 ms</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-slate-400 text-xs">Error Rate</div>
                    <div className="text-lg font-bold text-cyan-400 mt-0.5">0.001%</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Aura Luxe E-Commerce Storefront Simulator */}
            {activeTab === 'e-commerce' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-purple-400" /> Aura Luxe Headless E-Commerce Cart
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Test optimistic state updates, promo calculation, and sub-second checkout.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-white">{item.name}</div>
                          <div className="text-slate-400 mt-0.5">${item.price} x {item.qty}</div>
                        </div>
                        <div className="font-bold text-purple-400">${item.price * item.qty}</div>
                      </div>
                    ))}

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Promo Code: NEXUS20 (20% Off)</span>
                      <span className="text-emerald-400 font-bold">Applied (-$39.40)</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Subtotal:</span>
                        <span className="text-white">$197.00</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Discount (20%):</span>
                        <span className="text-emerald-400">-$39.40</span>
                      </div>
                      <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-slate-800">
                        <span>Total Due:</span>
                        <span className="text-purple-400">$157.60</span>
                      </div>
                    </div>

                    <button
                      onClick={handleRunCheckout}
                      disabled={isCheckingOut}
                      className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center space-x-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isCheckingOut ? 'Processing Sub-Second Checkout...' : 'Simulate Instant Checkout'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: CyberShield OAuth & Security */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400" /> CyberShield OAuth 2.0 & Passkeys
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulate a zero-trust OAuth 2.0 PKCE auth code exchange and JWT signature verification.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                      <div className="flex items-center space-x-2 text-slate-300">
                        <Lock className="w-4 h-4 text-blue-400" />
                        <span className="font-bold">OAuth Step: {oauthStep} of 3</span>
                      </div>
                      <div className="text-slate-400">
                        {oauthStep === 1 && "Client initiates PKCE challenge with code_verifier."}
                        {oauthStep === 2 && "Exchanging auth code for signed JWT bearer token..."}
                        {oauthStep === 3 && "Access Token Active. Verified SOC-2 Type II session."}
                      </div>
                    </div>

                    <button
                      onClick={handleRunOAuthFlow}
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Simulate OAuth Handshake</span>
                    </button>
                  </div>

                  <div className="lg:col-span-7 space-y-2">
                    <label className="text-xs font-semibold text-slate-400 block">
                      Decoded JWT Session Payload:
                    </label>
                    <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-200 min-h-[160px] overflow-x-auto leading-relaxed">
                      {tokenPayload || "// Click 'Simulate OAuth Handshake' to generate signed JWT token..."}
                    </pre>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
