import React, { useState } from 'react';
import { Cpu, Sparkles, Activity, ShoppingBag, ShieldCheck, Terminal, ArrowRight, CheckCircle2, Code2, Play, Quote } from 'lucide-react';
import { PRODUCTS } from '../data/portfolioData';
import { Product, ProductCategory } from '../types';

interface ProductShowcaseProps {
  onSelectProductForSandbox: (product: Product) => void;
  onOpenLicenseModal: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectProductForSandbox,
  onOpenLicenseModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedProductSnippet, setSelectedProductSnippet] = useState<Product | null>(null);

  const categories: ProductCategory[] = [
    'All',
    'Cloud & Workflow',
    'AI & Copilot',
    'Analytics & Data',
    'E-Commerce',
    'Security & Auth'
  ];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      default: return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="products" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>NEXUS SOFTWARE PRODUCTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Flagship Software <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Product Engines</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineered for high availability, sub-50ms execution speed, and effortless integration into your existing stack.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/50 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header & Badge */}
              <div className="p-6 space-y-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {getProductIcon(product.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {product.name}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {product.version}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  {product.badge && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Image / Visual Preview */}
                <div className="relative h-48 rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950 group">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Specs Grid over Image */}
                  <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2">
                    {product.metrics.map((m, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/90 backdrop-blur-md">
                        <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                        <div className="text-xs font-bold text-cyan-400">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Core Product Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {product.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enterprise Testimonial Snapshot */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs space-y-1.5">
                  <div className="flex items-center space-x-2 text-slate-300 font-medium">
                    <Quote className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="italic">&quot;{product.testimonial.quote}&quot;</span>
                  </div>
                  <div className="text-[11px] text-slate-400 pl-5">
                    — {product.testimonial.author}, <span className="text-slate-300 font-semibold">{product.testimonial.company}</span>
                  </div>
                </div>

              </div>

              {/* Card Footer CTAs */}
              <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProductSnippet(product)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center space-x-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SDK Code</span>
                </button>

                <button
                  onClick={() => onSelectProductForSandbox(product)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all flex items-center space-x-1.5"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Test in Live Sandbox</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* SDK Code Snippet Modal */}
      {selectedProductSnippet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="max-w-2xl w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">
                  {selectedProductSnippet.name} • SDK Integration
                </h3>
              </div>
              <button
                onClick={() => setSelectedProductSnippet(null)}
                className="text-slate-400 hover:text-white text-sm font-semibold"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>npm install @nexus/suite</span>
                <span>Language: TypeScript</span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-200 overflow-x-auto leading-relaxed">
                {selectedProductSnippet.codeSnippet.code}
              </pre>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedProductSnippet.codeSnippet.code);
                  alert('SDK Code copied to clipboard!');
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700"
              >
                Copy SDK Snippet
              </button>
              <button
                onClick={() => {
                  const prod = selectedProductSnippet;
                  setSelectedProductSnippet(null);
                  onSelectProductForSandbox(prod);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500"
              >
                Run in Live Sandbox
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
