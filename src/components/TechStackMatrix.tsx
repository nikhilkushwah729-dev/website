import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { Code, Terminal, Server, Database, Flame, Bot, Wrench, Cloud, Figma, Sparkles, Activity, Cpu } from 'lucide-react';

export const TechStackMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & DB', 'AI & Cloud', 'Tools & Design'];

  const filteredTech = selectedCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter(t => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Code': return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Palette': return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-teal-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Figma': return <Figma className="w-5 h-5 text-rose-400" />;
      default: return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="stack" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 text-xs font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Modern Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Production Stack & Technical Mastery
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2 font-normal">
              Built on modern battle-tested technologies. Clean, type-safe architecture designed for zero maintenance overhead.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.name}
                    </span>
                    {item.isPrimary && (
                      <span className="px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 text-[10px] font-mono">
                        Primary
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.experience}</div>
                </div>
              </div>

              {/* Proficiency Indicator */}
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-indigo-400">{item.proficiency}%</div>
                <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden mt-1">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                    style={{ width: `${item.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
