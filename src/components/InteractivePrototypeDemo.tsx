import React, { useState, useEffect } from 'react';
import { Terminal, Play, Pause, RefreshCw, Sparkles, DollarSign, Send, ShoppingBag, Check, Layers, ArrowUpRight, Zap, Cpu } from 'lucide-react';
import { Project } from '../types';

interface InteractivePrototypeDemoProps {
  selectedProject?: Project | null;
}

export const InteractivePrototypeDemo: React.FC<InteractivePrototypeDemoProps> = ({ selectedProject }) => {
  const [activeTab, setActiveTab] = useState<'fintech' | 'ai' | 'ecommerce'>('fintech');

  // FinTech Live Stream State
  const [transactions, setTransactions] = useState([
    { id: 'tx-101', company: 'Stripe Direct Inc.', amount: '+$14,250.00', status: 'Completed', latency: '24ms', time: 'Just now' },
    { id: 'tx-102', company: 'Vercel Enterprise', amount: '-$1,200.00', status: 'Reconciled', latency: '18ms', time: '2m ago' },
    { id: 'tx-103', company: 'AWS Cloud Services', amount: '-$3,450.00', status: 'Pending', latency: '32ms', time: '5m ago' },
  ]);
  const [isStreaming, setIsStreaming] = useState(true);

  // AI Brand Copy Generator State
  const [brandTone, setBrandTone] = useState<'Tech' | 'Luxury' | 'Energetic'>('Tech');
  const [productTopic, setProductTopic] = useState('AI Automated Customer Support Platform');
  const [generatedOutput, setGeneratedOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // E-Commerce Configurator State
  const [selectedColor, setSelectedColor] = useState('#6366f1'); // Indigo
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  // Handle auto transaction stream
  useEffect(() => {
    if (!isStreaming || activeTab !== 'fintech') return;

    const interval = setInterval(() => {
      const companies = ['GitHub Corp', 'Cloudflare CDN', 'Google Cloud', 'OpenAI API', 'Datadog Engine', 'Linear App'];
      const randomCompany = companies[Math.floor(Math.random() * companies.length)];
      const randomAmount = (Math.random() > 0.4 ? '+' : '-') + '$' + (Math.floor(Math.random() * 4000) + 150).toFixed(2);
      const newTx = {
        id: 'tx-' + Math.floor(Math.random() * 900 + 100),
        company: randomCompany,
        amount: randomAmount,
        status: 'Completed',
        latency: Math.floor(Math.random() * 25 + 15) + 'ms',
        time: 'Just now'
      };

      setTransactions(prev => [newTx, ...prev.slice(0, 4)]);
    }, 3500);

    return () => clearInterval(interval);
  }, [isStreaming, activeTab]);

  // Handle AI Copy Generation
  const handleGenerateCopy = () => {
    setIsGenerating(true);
    setGeneratedOutput('');

    let resultText = '';
    if (brandTone === 'Tech') {
      resultText = `🚀 Supercharge your engineering workflow with ${productTopic}. Built on zero-latency WebSocket pipelines, sub-50ms query speeds, and automated SOC2 compliance.`;
    } else if (brandTone === 'Luxury') {
      resultText = `✨ Elevate your client experience. Introducing ${productTopic}—unrivaled precision, effortless elegance, and bespoke craftsmanship for discerning industry leaders.`;
    } else {
      resultText = `🔥 Stop waiting for slow tools! ${productTopic} is here to double your conversion rate overnight with instant multi-channel automation.`;
    }

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < resultText.length) {
        setGeneratedOutput(prev => prev + resultText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsGenerating(false);
      }
    }, 20);
  };

  return (
    <section id="interactive-demo" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Code Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Test Live App Architecture Below
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal">
            Interact directly with live working components extracted from actual client builds. Test real-time WebSocket state, Gemini AI text streaming, and optimistic cart UI logic.
          </p>
        </div>

        {/* Prototype Showcase Window Container */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Window Navigation Tabs */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>

            {/* Selector Tabs */}
            <div className="flex items-center space-x-1 p-1 bg-slate-900 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('fintech')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  activeTab === 'fintech'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Real-Time Ledger</span>
              </button>

              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  activeTab === 'ai'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gemini AI Studio</span>
              </button>

              <button
                onClick={() => setActiveTab('ecommerce')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  activeTab === 'ecommerce'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Headless E-Commerce</span>
              </button>
            </div>

            {/* Performance Metric Badge */}
            <div className="hidden sm:flex items-center space-x-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-2.5 py-1 rounded-lg text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" />
              <span>REACT 19 • 60 FPS</span>
            </div>
          </div>

          {/* Prototype Tab Content Area */}
          <div className="p-6 md:p-8">
            
            {/* TAB 1: FINTECH REAL-TIME LEDGER STREAM */}
            {activeTab === 'fintech' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                      <span>OmniPay High-Frequency Ledger Stream</span>
                      <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-mono">WebSocket</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Simulated WebSocket connection displaying sub-30ms automated transaction ledger events.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsStreaming(!isStreaming)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 border transition-colors ${
                        isStreaming
                          ? 'bg-amber-950/60 border-amber-800/60 text-amber-300'
                          : 'bg-emerald-950/60 border-emerald-800/60 text-emerald-300'
                      }`}
                    >
                      {isStreaming ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isStreaming ? 'Pause Stream' : 'Resume Stream'}</span>
                    </button>
                  </div>
                </div>

                {/* Ledger Table */}
                <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                  <div className="grid grid-cols-4 px-4 py-2.5 bg-slate-900 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <div>Entity / Merchant</div>
                    <div className="text-right">Amount</div>
                    <div className="text-center">Status</div>
                    <div className="text-right">Latency</div>
                  </div>

                  <div className="divide-y divide-slate-800/60">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="grid grid-cols-4 px-4 py-3 text-xs items-center hover:bg-slate-900/50 transition-colors">
                        <div className="font-semibold text-white flex items-center space-x-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                          <span>{tx.company}</span>
                        </div>
                        <div className={`text-right font-mono font-bold ${
                          tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-200'
                        }`}>
                          {tx.amount}
                        </div>
                        <div className="text-center">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-[10px] font-semibold border border-emerald-800/50">
                            {tx.status}
                          </span>
                        </div>
                        <div className="text-right font-mono text-slate-400 text-[11px]">
                          {tx.latency}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/40 flex items-center justify-between text-xs text-indigo-300">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>Engineered with React 19 virtualized state & sub-50ms Express API architecture.</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: AI BRAND COPY GENERATOR */}
            {activeTab === 'ai' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <span>Gemini 2.5 Flash Multimodal Studio</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-mono">LLM Streaming</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Test how our AI prompt system transforms product descriptions into high-converting copy in real time.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Inputs */}
                  <div className="space-y-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Product Title / Concept</label>
                      <input
                        type="text"
                        value={productTopic}
                        onChange={(e) => setProductTopic(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Target Brand Tone</label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['Tech', 'Luxury', 'Energetic'] as const).map((tone) => (
                          <button
                            key={tone}
                            onClick={() => setBrandTone(tone)}
                            className={`py-2 rounded-lg text-xs font-semibold border transition-all ${
                              brandTone === tone
                                ? 'bg-indigo-600 border-indigo-500 text-white'
                                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            {tone}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleGenerateCopy}
                      disabled={isGenerating}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      <Sparkles className="w-4 h-4 animate-spin-slow" />
                      <span>{isGenerating ? 'Streaming Response...' : 'Generate High-Converting Copy'}</span>
                    </button>
                  </div>

                  {/* Generated Output Canvas */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-400 mb-2 flex items-center justify-between">
                        <span>LIVE GEMINI STREAM</span>
                        {isGenerating && <span className="text-indigo-400 text-[10px] animate-pulse">GENERATING...</span>}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed min-h-[100px] p-3 rounded-lg bg-slate-900/80 border border-slate-800/80">
                        {generatedOutput || (
                          <span className="text-slate-600 italic">Click generate above to see streaming AI response output...</span>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 text-[11px] text-slate-500 flex items-center justify-between">
                      <span>Model: Gemini 2.5 Flash</span>
                      <span>Latency: ~120ms</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: HEADLESS E-COMMERCE CONFIGURATOR */}
            {activeTab === 'ecommerce' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Aura Luxe Product Configurator</h3>
                    <p className="text-xs text-slate-400">Optimistic state management & instant cart drawer updating.</p>
                  </div>

                  <button
                    onClick={() => setCartOpen(!cartOpen)}
                    className="relative p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 hover:text-white flex items-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-bold">Cart</span>
                    {cartCount > 0 && (
                      <span className="px-1.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  {/* Product Visual */}
                  <div className="aspect-square rounded-xl bg-slate-900 border border-slate-800 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    <div
                      className="w-32 h-32 rounded-3xl transition-all duration-300 shadow-2xl border-4 border-slate-800 flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: selectedColor }}
                    >
                      AURA
                    </div>
                    <div className="mt-4 text-xs font-medium text-slate-400">
                      Minimalist Minimal Jacket • {selectedSize}
                    </div>
                  </div>

                  {/* Config Controls */}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">Select Colorway</label>
                      <div className="flex space-x-3">
                        {['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'].map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full transition-transform ${
                              selectedColor === color ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-950' : ''
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">Select Size</label>
                      <div className="flex space-x-2">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                              selectedSize === size
                                ? 'bg-indigo-600 border-indigo-500 text-white'
                                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                      <div>
                        <div className="text-xl font-black text-white">$280.00</div>
                        <div className="text-[11px] text-emerald-400 font-medium">Free Worldwide Express Delivery</div>
                      </div>

                      <button
                        onClick={() => {
                          setCartCount(prev => prev + 1);
                          setCartOpen(true);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg flex items-center space-x-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add To Cart</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cart Drawer Banner */}
                {cartOpen && (
                  <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-between animate-in slide-in-from-bottom-2 duration-200">
                    <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Added to cart! Total Items: {cartCount} ($280.00)</span>
                    </div>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="text-xs font-bold text-emerald-400 hover:underline"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
