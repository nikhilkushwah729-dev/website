import React, { useState, useEffect, useRef } from 'react';
import {
  Cpu,
  Sparkles,
  Menu,
  X,
  Terminal,
  ArrowRight,
  Layers,
  Zap,
  ChevronDown,
  Command,
  Bot,
  Database,
  ShoppingBag,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/portfolioData';

interface ProductNavbarProps {
  onOpenLicenseModal: () => void;
  onOpenSandbox: () => void;
  activeSection: string;
  viewMode: 'product' | 'client';
  onToggleViewMode: (mode: 'product' | 'client') => void;
}

export const ProductNavbar: React.FC<ProductNavbarProps> = ({
  onOpenLicenseModal,
  onOpenSandbox,
  activeSection,
  viewMode,
  onToggleViewMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const productNavLinks = [
    { name: 'Products', href: '#products', hasDropdown: true },
    { name: 'Sandbox', href: '#sandbox', hasDropdown: false },
    { name: 'Architecture', href: '#architecture', hasDropdown: false },
    { name: 'Pricing', href: '#pricing', hasDropdown: false },
    { name: 'API & SDK', href: '#developer-api', hasDropdown: false },
    { name: 'Enterprise Stories', href: '#testimonials', hasDropdown: false },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-indigo-900/40 text-center flex items-center justify-center space-x-2">
        <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
          v4.2 RELEASED
        </span>
        <span className="hidden sm:inline text-slate-300 font-medium">
          Nexus Cloud OS now supports Gemini 2.5 Flash Native Workflow Orchestration
        </span>
        <button
          onClick={onOpenLicenseModal}
          className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-2 flex items-center space-x-1 ml-1"
        >
          <span>Explore Enterprise Plans</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Glassmorphic Navbar Container */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-indigo-950/20 py-2.5'
            : 'bg-slate-950/40 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Logo & Company Title */}
            <div className="flex items-center space-x-4">
              <a href="#" className="group flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-blue-600 p-[1.5px] shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                  <div className="w-full h-full bg-slate-950 rounded-[10.5px] flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-black text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                      NEXUS<span className="text-indigo-400 font-light">OS</span>
                    </span>
                    <span className="hidden sm:inline-flex px-1.5 py-0.5 text-[9px] font-extrabold tracking-widest uppercase rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      ENTERPRISE
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block">
                    Cloud Infrastructure & AI Platform
                  </span>
                </div>
              </a>

              {/* Platform Operational Status Badge */}
              <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-[11px] font-medium shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-emerald-400 font-semibold">99.999% SLA</span>
              </div>
            </div>

            {/* View Mode Toggle Pill (Product Platform vs Custom Client Solutions) */}
            <div className="hidden xl:flex items-center p-1 bg-slate-900/90 rounded-xl border border-slate-800/80 text-xs font-semibold shadow-inner">
              <button
                onClick={() => onToggleViewMode('product')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                  viewMode === 'product'
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-600/30 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Product Suite</span>
              </button>
              <button
                onClick={() => onToggleViewMode('client')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                  viewMode === 'client'
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-600/30 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Custom Client Solutions</span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 shadow-inner relative" ref={megaMenuRef}>
              {productNavLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative">
                      <button
                        onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                        onMouseEnter={() => setMegaMenuOpen(true)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center space-x-1 ${
                          megaMenuOpen || isActive
                            ? 'bg-indigo-600/90 text-white shadow-md shadow-indigo-600/20'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
                      </button>

                      {/* Mega Menu Dropdown */}
                      {megaMenuOpen && (
                        <div
                          className="absolute top-full left-0 mt-3 w-[560px] rounded-2xl bg-slate-950/95 border border-slate-800/90 shadow-2xl shadow-indigo-950/50 p-4 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50 grid grid-cols-2 gap-3"
                          onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                          <div className="col-span-2 pb-2 border-b border-slate-800/80 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Nexus Flagship Product Engines</span>
                            </span>
                            <span className="text-[10px] text-cyan-400 font-mono font-semibold">5 Active Modules</span>
                          </div>

                          {PRODUCTS.map((prod) => (
                            <a
                              key={prod.id}
                              href="#products"
                              onClick={(e) => scrollToSection(e, '#products')}
                              className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/50 hover:border-indigo-500/50 transition-all group flex items-start space-x-3"
                            >
                              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform shrink-0">
                                {getProductIcon(prod.iconName)}
                              </div>
                              <div className="space-y-0.5">
                                <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center space-x-1">
                                  <span>{prod.name}</span>
                                </div>
                                <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">
                                  {prod.tagline}
                                </p>
                              </div>
                            </a>
                          ))}

                          <div className="col-span-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 bg-slate-900/40 p-2.5 rounded-xl">
                            <span className="text-[11px]">Need custom cloud architecture?</span>
                            <button
                              onClick={() => {
                                setMegaMenuOpen(false);
                                onOpenLicenseModal();
                              }}
                              className="text-cyan-400 hover:text-cyan-300 font-bold text-[11px] flex items-center space-x-1"
                            >
                              <span>Consult Architects</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center space-x-2.5">
              
              {/* Quick Command Launcher Shortcut Pill */}
              <button
                onClick={onOpenSandbox}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 transition-all flex items-center space-x-2 shadow-inner group"
                title="Open Interactive Product Sandbox"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Sandbox</span>
                <span className="hidden md:inline-flex items-center space-x-0.5 px-1.5 py-0.5 text-[9px] font-mono text-slate-400 bg-slate-950 rounded border border-slate-800">
                  <Command className="w-2.5 h-2.5" />
                  <span>K</span>
                </span>
              </button>

              {/* Main License CTA */}
              <button
                onClick={onOpenLicenseModal}
                className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] border border-indigo-400/30 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-700 ease-out -skew-x-12" />
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-200 animate-pulse" />
                <span>Request License</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-white/90 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={onOpenLicenseModal}
                className="px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg shadow-md"
              >
                License
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white focus:outline-none border border-slate-800 shadow-md"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800/90 px-4 pt-3 pb-6 space-y-4 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
          
          {/* View Switcher in Mobile Drawer */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Platform Mode:</span>
            <div className="flex items-center space-x-1 text-xs">
              <button
                onClick={() => {
                  onToggleViewMode('product');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'product' ? 'bg-indigo-600 text-white font-bold shadow-md' : 'text-slate-400'
                }`}
              >
                Products Suite
              </button>
              <button
                onClick={() => {
                  onToggleViewMode('client');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'client' ? 'bg-indigo-600 text-white font-bold shadow-md' : 'text-slate-400'
                }`}
              >
                Custom Services
              </button>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {productNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white transition-colors border border-slate-800/80 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3 h-3 text-slate-500" />
              </a>
            ))}
          </div>

          {/* Featured Products Quick Access List */}
          <div className="space-y-1.5 pt-2 border-t border-slate-900">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
              Nexus Product Engines
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {PRODUCTS.slice(0, 3).map((p) => (
                <a
                  key={p.id}
                  href="#products"
                  onClick={(e) => scrollToSection(e, '#products')}
                  className="p-2 rounded-lg bg-slate-900/50 hover:bg-slate-900 border border-slate-800/60 flex items-center justify-between text-xs text-slate-300"
                >
                  <span className="font-semibold text-white">{p.name}</span>
                  <span className="text-[10px] text-cyan-400 font-mono">{p.badge}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer Action CTAs */}
          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSandbox();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition-colors flex items-center justify-center space-x-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Launch Interactive Sandbox</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLicenseModal();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/25 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Request Enterprise Product Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

