export type ProjectCategory = 'All' | 'Full-Stack Web' | 'Mobile & SaaS' | 'AI & LLM' | 'UI/UX Design';

export type ProductCategory = 'All' | 'Cloud & Workflow' | 'AI & Copilot' | 'Analytics & Data' | 'E-Commerce' | 'Security & Auth';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  version: string;
  iconName: string;
  thumbnail: string;
  description: string;
  badge?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  keyFeatures: string[];
  liveDemoType: 'workflow' | 'ai-studio' | 'analytics' | 'e-commerce' | 'api-sdk';
  codeSnippet: {
    language: string;
    code: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
  pricingStarter: number;
  pricingPro: number;
  pricingEnterprise: string;
}

export interface PricingTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  clientName: string;
  clientIndustry: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  hasInteractiveDemo?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  deliverables: string[];
  startingPrice: string;
  popularFor: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & DB' | 'AI & Cloud' | 'Tools & Design';
  proficiency: number; // 0-100
  iconName: string;
  experience: string;
  isPrimary?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  projectTitle: string;
  metricHighlight: string;
}

export interface EstimatorOption {
  id: string;
  name: string;
  description: string;
  cost: number;
  timeWeeks: number;
}

export interface ProposalRequest {
  clientName: string;
  companyName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  description: string;
  selectedFeatures: string[];
}

export interface GeneratedProposal {
  title: string;
  executiveSummary: string;
  techStack: string[];
  phases: {
    phase: string;
    duration: string;
    deliverables: string[];
  }[];
  estimatedBudget: string;
  estimatedTimeline: string;
  keyDifferentiators: string[];
}
