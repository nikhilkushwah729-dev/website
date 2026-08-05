import React, { useState } from 'react';
import { ProductNavbar } from './components/ProductNavbar';
import { ProductHero } from './components/ProductHero';
import { ProductShowcase } from './components/ProductShowcase';
import { LiveProductSandbox } from './components/LiveProductSandbox';
import { EnterpriseBento } from './components/EnterpriseBento';
import { ProductPricing } from './components/ProductPricing';
import { DeveloperApiHub } from './components/DeveloperApiHub';
import { TestimonialsAndStats } from './components/TestimonialsAndStats';
import { Footer } from './components/Footer';
import { AiProposalModal } from './components/AiProposalModal';
import { ClientAssistantDrawer } from './components/ClientAssistantDrawer';

// Client mode components
import { ProjectShowcase } from './components/ProjectShowcase';
import { CostEstimator } from './components/CostEstimator';
import { ServicesAndProcess } from './components/ServicesAndProcess';

import { Product, Project } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<'product' | 'client'>('product');
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);
  const [prefillProposalData, setPrefillProposalData] = useState<{
    projectType: string;
    budgetRange: string;
    timeline: string;
    features: string[];
  } | null>(null);

  const handleOpenLicenseModal = () => {
    setProposalModalOpen(true);
  };

  const handleOpenSandbox = () => {
    const el = document.getElementById('sandbox');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForSandbox = (product: Product) => {
    setSelectedProduct(product);
    handleOpenSandbox();
  };

  const handleSelectProjectForDemo = (project: Project) => {
    setSelectedDemoProject(project);
    const el = document.getElementById('interactive-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLockInQuote = (data: {
    projectType: string;
    budgetRange: string;
    timeline: string;
    features: string[];
  }) => {
    setPrefillProposalData(data);
    setProposalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <ProductNavbar
        onOpenLicenseModal={handleOpenLicenseModal}
        onOpenSandbox={handleOpenSandbox}
        activeSection="products"
        viewMode={viewMode}
        onToggleViewMode={(mode) => setViewMode(mode)}
      />

      {/* Main Sections */}
      <main>
        {viewMode === 'product' ? (
          <>
            {/* Product Hero Banner */}
            <ProductHero
              onOpenLicenseModal={handleOpenLicenseModal}
              onOpenSandbox={handleOpenSandbox}
            />

            {/* Flagship Product Showcase */}
            <ProductShowcase
              onSelectProductForSandbox={handleSelectProductForSandbox}
              onOpenLicenseModal={handleOpenLicenseModal}
            />

            {/* Live Interactive Product Sandbox */}
            <LiveProductSandbox
              selectedProduct={selectedProduct}
            />

            {/* Enterprise Architecture Bento Grid */}
            <EnterpriseBento />

            {/* Product Pricing & Calculator */}
            <ProductPricing
              onOpenLicenseModal={handleOpenLicenseModal}
            />

            {/* Developer API & SDK Hub */}
            <DeveloperApiHub />

            {/* Enterprise Customer Stories & Reviews */}
            <TestimonialsAndStats />
          </>
        ) : (
          <>
            {/* Custom Client Solutions View */}
            <div className="pt-24 px-4 max-w-7xl mx-auto text-center space-y-4">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
                CUSTOM ENTERPRISE SOLUTIONS & ENGINEERING
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                Custom Client Solutions & Full-Stack MVP Engineering
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                Need bespoke product development or custom cloud integration? Explore our client case studies and scope calculator.
              </p>
            </div>

            <ProjectShowcase
              onSelectProjectForDemo={handleSelectProjectForDemo}
            />

            <CostEstimator
              onLockInQuote={handleLockInQuote}
            />

            <ServicesAndProcess
              onOpenProposalModal={handleOpenLicenseModal}
            />

            <TestimonialsAndStats />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenProposalModal={handleOpenLicenseModal}
      />

      {/* Floating AI License / Proposal Modal */}
      <AiProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
        prefillData={prefillProposalData}
      />

      {/* Floating AI Product Advisor Drawer */}
      <ClientAssistantDrawer />
    </div>
  );
}

