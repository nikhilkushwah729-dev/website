import { Project, Service, TechItem, Testimonial, Product, PricingTier } from '../types';

export const COMPANY_INFO = {
  name: "Nexus Tech Systems",
  founder: "Nikhil Pratap Singh Kushwah",
  tagline: "Next-Generation Enterprise Software Suite & Cloud Platform",
  mission: "Founded and engineered by Nikhil Pratap Singh Kushwah, Nexus Tech Systems empowers developers and high-growth enterprises with modular software engines, real-time analytics, multimodal AI copilots, and cloud automation.",
  stats: [
    { label: "Active Products in Suite", value: "5 Flagship Engines" },
    { label: "Global API Requests / Mo", value: "2.4 Billion" },
    { label: "Guaranteed SLA Uptime", value: "99.999%" },
    { label: "Enterprise Customers", value: "1,400+" }
  ],
  certifications: ["SOC-2 Type II", "ISO 27001", "HIPAA Compliant", "GDPR Ready"],
  contactEmail: "nikhil.kushwah729@gmail.com",
  headquarters: "San Francisco, CA • London, UK • Tokyo, Japan"
};

export const PRODUCTS: Product[] = [
  {
    id: "nexus-core-os",
    name: "Nexus Core Cloud OS™",
    tagline: "Enterprise Cloud Microservices & Visual Automation Engine",
    category: "Cloud & Workflow",
    version: "v4.2.0-LTS",
    iconName: "Cpu",
    badge: "Flagship Platform",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "An orchestration operating system that unifies cloud micro-services, serverless event triggers, and drag-and-drop workflow automation with real-time state sync.",
    metrics: [
      { label: "Workflow Latency", value: "<18ms" },
      { label: "Daily Executions", value: "85M+" },
      { label: "Infrastructure Cost Cut", value: "42%" }
    ],
    techStack: ["Node.js", "TypeScript", "React 19", "WebSockets", "Docker", "Redis"],
    keyFeatures: [
      "Visual drag-and-drop node workflow canvas with sub-20ms event loops",
      "Auto-scaling microservice container management with zero cold-starts",
      "Real-time cluster telemetry, circuit breakers, and automatic failovers",
      "Native SDK connectors for AWS, Cloud Run, GCP, PostgreSQL, & Redis"
    ],
    liveDemoType: "workflow",
    codeSnippet: {
      language: "typescript",
      code: `import { NexusClient } from '@nexus/core-sdk';

const nexus = new NexusClient({ apiKey: process.env.NEXUS_API_KEY });

// Initialize an automated micro-service workflow
const workflow = await nexus.workflows.create({
  name: 'Realtime Ledger Sync',
  trigger: 'event.payment_received',
  actions: [
    { type: 'verifySignature', provider: 'stripe' },
    { type: 'updateDatabase', target: 'postgres.transactions' },
    { type: 'notifyAI', channel: 'neuroflow-agent' }
  ]
});

console.log('Workflow Active:', workflow.status); // Output: "Active (Sub-18ms)"`
    },
    testimonial: {
      quote: "Nexus Core transformed how our engineering team builds cloud services. We cut infrastructure maintenance time by half within the first month.",
      author: "Marcus Brody",
      role: "VP of Engineering",
      company: "OmniPay Global",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    pricingStarter: 29,
    pricingPro: 99,
    pricingEnterprise: "Custom Quote"
  },
  {
    id: "neuroflow-ai-studio",
    name: "NeuroFlow AI Studio™",
    tagline: "Multimodal Gemini 2.5 Intelligence Engine & Autonomous Copilot Suite",
    category: "AI & Copilot",
    version: "v2.8.5",
    iconName: "Sparkles",
    badge: "AI Powered",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "Empower your team with an enterprise AI copilot platform. Integrates streaming Gemini 2.5 models, custom system instructions, structured output parsing, and agentic tools.",
    metrics: [
      { label: "Token Generation Speed", value: "140 tps" },
      { label: "Prompt Accuracy", value: "99.4%" },
      { label: "AI Automations Run", value: "14.2M" }
    ],
    techStack: ["Gemini 2.5 Flash", "React 19", "Express", "Tailwind CSS", "Canvas API"],
    keyFeatures: [
      "Gemini 2.5 Flash multimodal model integration for text, code & vision",
      "Streaming responses with real-time JSON format compliance",
      "Interactive tone and system instruction editor with live testing",
      "Role-based AI memory context with prompt injection guardrails"
    ],
    liveDemoType: "ai-studio",
    codeSnippet: {
      language: "typescript",
      code: `import { NeuroFlow } from '@nexus/ai-studio';

const ai = new NeuroFlow({ apiKey: process.env.NEUROFLOW_KEY });

const result = await ai.generateContent({
  model: 'gemini-2.5-flash',
  prompt: 'Generate an executive summary and key deliverables for a fintech rollout.',
  config: { responseMimeType: 'application/json' }
});

console.log(result.data.executiveSummary);`
    },
    testimonial: {
      quote: "NeuroFlow's Gemini integration is blazingly fast. Our team writes documentation, generates code, and reviews PRs in a fraction of the time.",
      author: "Elena Rostova",
      role: "Co-Founder & CEO",
      company: "NeuroCraft AI",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    pricingStarter: 49,
    pricingPro: 149,
    pricingEnterprise: "Custom Quote"
  },
  {
    id: "omnipulse-data",
    name: "OmniPulse Data Pipeline™",
    tagline: "High-Throughput Real-Time Telemetry & Data Visualization Engine",
    category: "Analytics & Data",
    version: "v3.1.0",
    iconName: "Activity",
    badge: "Real-time Stream",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "A streaming data pipeline processing millions of telemetry metrics per second with customizable Recharts/D3 dashboards, automated anomaly alerts, and export tools.",
    metrics: [
      { label: "Events Streamed / Sec", value: "120,000" },
      { label: "Dashboard Load Time", value: "<0.3s" },
      { label: "Data Retention", value: "Up to 5 Yrs" }
    ],
    techStack: ["Recharts", "D3.js", "WebSockets", "Node.js", "TimescaleDB", "Tailwind CSS"],
    keyFeatures: [
      "Real-time WebSocket telemetry charts with sub-100ms visual render",
      "Automated threshold alert triggers sent via Webhooks, Slack, or Email",
      "Custom query builder supporting SQL, time-series aggregations, and ratios",
      "One-click PDF, CSV, and executive slide export reporting"
    ],
    liveDemoType: "analytics",
    codeSnippet: {
      language: "typescript",
      code: `import { OmniPulseStream } from '@nexus/analytics';

const stream = new OmniPulseStream({ clusterId: 'us-east-prod-1' });

stream.subscribe('metrics.latency', (data) => {
  console.log(\`[P99 Latency]: \${data.p99}ms | RPS: \${data.rps}\`);
});`
    },
    testimonial: {
      quote: "OmniPulse gave us crystal-clear visibility into our payment streams during Black Friday peak traffic. Unmatched reliability.",
      author: "Dr. James Sterling",
      role: "Head of Infrastructure",
      company: "PulseSync Health",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80"
    },
    pricingStarter: 39,
    pricingPro: 119,
    pricingEnterprise: "Custom Quote"
  },
  {
    id: "aura-luxe-storefront",
    name: "Aura Luxe Commerce Suite™",
    tagline: "Headless E-Commerce Infrastructure & Sub-Second Storefront Engine",
    category: "E-Commerce",
    version: "v5.0.1",
    iconName: "ShoppingBag",
    badge: "Headless Commerce",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    description: "An ultra-fast headless storefront and payment engine designed for high-converting brands with optimistic slide-out carts, global multi-currency, and 3D preview tools.",
    metrics: [
      { label: "Checkout Speed", value: "<0.4s" },
      { label: "Avg Conversion Uplift", value: "+38%" },
      { label: "GMV Processed", value: "$120M+" }
    ],
    techStack: ["React 19", "Tailwind CSS", "Shopify Storefront API", "Stripe SDK", "Vite"],
    keyFeatures: [
      "Optimistic client-side shopping cart with instant state persistence",
      "Fuzzy instant search and live stock status sync across global warehouses",
      "Multi-currency conversion engine with automatic geo-location detection",
      "Customizable checkout customization UI compliant with PCI-DSS Level 1"
    ],
    liveDemoType: "e-commerce",
    codeSnippet: {
      language: "typescript",
      code: `import { AuraStorefront } from '@nexus/commerce';

const store = new AuraStorefront({ storeId: 'aura-paris' });

// Perform instant checkout initialization
const checkout = await store.cart.checkout({
  items: [{ id: 'prod_9921', quantity: 2 }],
  currency: 'EUR'
});`
    },
    testimonial: {
      quote: "Our conversion rate jumped 38% immediately after migrating to Aura Luxe. The mobile shopping experience is silky smooth.",
      author: "Sophie Laurent",
      role: "Head of E-Commerce",
      company: "Aura Paris",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    pricingStarter: 59,
    pricingPro: 179,
    pricingEnterprise: "Custom Quote"
  },
  {
    id: "cybershield-auth",
    name: "CyberShield OAuth & Security™",
    tagline: "Zero-Trust Identity Engine, Single Sign-On & RBAC Gateway",
    category: "Security & Auth",
    version: "v1.9.2",
    iconName: "ShieldCheck",
    badge: "Zero Trust",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    description: "Complete identity authentication, passkeys, multi-tenant RBAC permissions, and OAuth 2.0 gateway designed to pass SOC-2 and HIPAA audits out of the box.",
    metrics: [
      { label: "Auth Latency", value: "<12ms" },
      { label: "Protected Identity Accounts", value: "4.5M+" },
      { label: "Security Compliance", value: "SOC2 / ISO" }
    ],
    techStack: ["OAuth 2.0", "WebAuthn / Passkeys", "Node.js", "JWT", "PostgreSQL"],
    keyFeatures: [
      "Passkey, biometric, and MFA multi-factor authentication flows",
      "Single Sign-On (SSO) with Okta, Google Workspace, Azure AD, and SAML 2.0",
      "Granular Role-Based Access Control (RBAC) with token auto-rotation",
      "Real-time IP threat detection and rate-limiting DDoS shield"
    ],
    liveDemoType: "api-sdk",
    codeSnippet: {
      language: "typescript",
      code: `import { CyberShield } from '@nexus/security';

const auth = new CyberShield({ domain: 'auth.company.com' });

const session = await auth.verifyToken(req.headers.authorization);
if (!session.hasPermission('admin:write')) {
  throw new Error('Unauthorized Access Blocked by CyberShield');
}`
    },
    testimonial: {
      quote: "CyberShield solved our SOC-2 compliance requirements in days rather than months. Flawless security architecture.",
      author: "Alex Vance",
      role: "Chief Information Security Officer",
      company: "Enterprise Cloud Systems",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    pricingStarter: 19,
    pricingPro: 79,
    pricingEnterprise: "Custom Quote"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-starter",
    name: "Developer / Starter",
    priceMonthly: 29,
    priceAnnual: 24,
    description: "Ideal for individual developers, prototypes, and small team MVPs.",
    features: [
      "Access to 2 Nexus Product Engines",
      "Up to 100,000 API Requests / month",
      "Gemini 2.5 AI Credits ($25 Included)",
      "Community Support & Discord Access",
      "Standard 99.9% Uptime SLA",
      "REST & Webhook Integrations"
    ],
    ctaText: "Start 14-Day Free Trial"
  },
  {
    id: "tier-pro",
    name: "Growth / Business Pro",
    priceMonthly: 99,
    priceAnnual: 79,
    description: "Designed for scaling products, SaaS startups, and growing engineering teams.",
    popular: true,
    features: [
      "Access to ALL 5 Nexus Product Engines",
      "1,000,000 API Requests / month included",
      "Gemini 2.5 AI Unlimited Streaming",
      "Sub-20ms Edge Response Latency",
      "Priority 24/7 Developer Support",
      "Multi-tenant RBAC & SSO Auth",
      "Real-time Telemetry Dashboard & Alerts"
    ],
    ctaText: "Launch Pro Suite"
  },
  {
    id: "tier-enterprise",
    name: "Enterprise Global",
    priceMonthly: 299,
    priceAnnual: 249,
    description: "Custom cloud infrastructure, dedicated VPC clusters, and SOC-2 compliance for large scale.",
    features: [
      "Unlimited API Requests & Auto-Scaling Clusters",
      "Dedicated On-Premise / Private Cloud VPC Deployment",
      "Guaranteed 99.999% SLA Uptime Agreement",
      "Custom Gemini 2.5 Fine-Tuned AI Models",
      "Dedicated Solutions Architect & Slack Channel",
      "SOC-2 Type II, HIPAA, and BAA Agreements",
      "Custom Contract & Invoice Billing"
    ],
    ctaText: "Contact Enterprise Sales"
  }
];

export const BENTO_FEATURES = [
  {
    title: "Sub-20ms Global Edge Engine",
    description: "Distributed across 35+ region cloud data centers ensuring lightning response speeds for every API call.",
    iconName: "Zap",
    span: "col-span-12 md:col-span-8",
    gradient: "from-indigo-600/20 via-blue-600/10 to-transparent",
    stat: "<18ms Avg Latency"
  },
  {
    title: "SOC-2 Type II Certified",
    description: "Enterprise grade end-to-end encryption, automated audit logs, and zero-trust authentication.",
    iconName: "ShieldCheck",
    span: "col-span-12 md:col-span-4",
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    stat: "100% Compliant"
  },
  {
    title: "Gemini 2.5 Multimodal AI Studio",
    description: "Native server-side AI model integration with streaming copilot tools and structured response validators.",
    iconName: "Sparkles",
    span: "col-span-12 md:col-span-4",
    gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
    stat: "140 tokens/sec"
  },
  {
    title: "Real-Time Telemetry & WebSockets",
    description: "Live data streaming pipelines feeding interactive Recharts analytics and automated threshold alerts.",
    iconName: "Activity",
    span: "col-span-12 md:col-span-8",
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    stat: "120K events/sec"
  }
];

export const DEVELOPER_INFO = {
  name: "Nikhil Pratap Singh Kushwah",
  title: "Founder, Chief Software Architect & Lead Full-Stack Engineer",
  status: "Available for Enterprise Software & Client Solutions",
  hourlyRate: "$95/hr",
  location: "San Francisco, CA (Remote Worldwide)",
  experienceYears: "7+ Years",
  projectsCompleted: "45+",
  clientSatisfaction: "100%",
  email: "nikhil.kushwah729@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  bio: "Founded and engineered by Nikhil Pratap Singh Kushwah, specializing in building high-performing web applications, SaaS platforms, and AI integrations that drive measurable revenue growth and exceptional user engagement."
};

export const PROJECTS: Project[] = [
  {
    id: "fintech-pulse",
    title: "OmniPay Financial Dashboard & Analytics",
    subtitle: "Real-time enterprise banking & automated invoice reconciliation engine",
    category: "Full-Stack Web",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "A high-frequency financial intelligence platform processing multi-currency transactions, automated invoice matching, and real-time cashflow forecasting with sub-50ms latency.",
    clientName: "OmniPay Global",
    clientIndustry: "Fintech / B2B SaaS",
    metrics: [
      { label: "Transaction Latency", value: "<45ms" },
      { label: "Monthly Revenue Processed", value: "$18.4M" },
      { label: "Client Operational Savings", value: "34%" }
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Recharts", "WebSocket"],
    liveUrl: "https://example.com/demo-fintech",
    githubUrl: "https://github.com/example/fintech",
    challenge: "The client was suffering from fragmented legacy UI systems causing slow invoice generation and high drop-off rates during payment reconciliation.",
    solution: "Engineered a modern unified Web Application using React 19 and Express, featuring virtualized ledger tables, automated PDF receipt parsing, and real-time WebSocket transaction streams.",
    keyFeatures: [
      "Real-time WebSocket currency ticker & ledger stream",
      "Interactive drag-and-drop invoice builder with automatic tax calculation",
      "Multi-tenant RBAC security with granular permission management",
      "Exportable financial compliance reports in PDF, CSV, and Excel"
    ],
    testimonial: {
      quote: "Nikhil delivered a solution that transformed our operations. Our invoice reconciliation time went from 4 days to 10 minutes.",
      author: "Marcus Brody",
      role: "VP of Product at OmniPay",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    hasInteractiveDemo: true
  },
  {
    id: "ai-content-studio",
    title: "NeuroCraft AI Creative Studio",
    subtitle: "Multimodal AI copilot for enterprise marketing teams & content strategists",
    category: "AI & LLM",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "An AI-powered content automation suite built on Gemini 2.5 Flash that drafts brand copy, analyzes marketing performance, and generates visual social campaign assets.",
    clientName: "NeuroCraft AI",
    clientIndustry: "Marketing Tech / AI",
    metrics: [
      { label: "Content Production Speed", value: "5x Faster" },
      { label: "Active Enterprise Users", value: "12,000+" },
      { label: "User Retention Rate", value: "92%" }
    ],
    techStack: ["React 19", "Gemini API", "Express.js", "Tailwind CSS", "Canvas API", "Framer Motion"],
    liveUrl: "https://example.com/demo-ai",
    githubUrl: "https://github.com/example/neurocraft",
    challenge: "Marketing agencies required a single workspace to collaborate on AI prompts, keep consistent brand voice rules, and streamline social image workflows.",
    solution: "Built a sleek dark-theme workspace integrated with Gemini API, custom brand guidelines engine, and dynamic live layout preview canvas.",
    keyFeatures: [
      "Gemini 2.5 Flash integration with custom system instructions",
      "Real-time streaming text generation with inline AI editing tools",
      "Interactive brand tone dial (Professional, Energetic, Casual, Technical)",
      "One-click multi-platform export (LinkedIn, X/Twitter, Instagram, Blog)"
    ],
    testimonial: {
      quote: "The interface Nikhil built is standard-setting. Our users constantly compliment how intuitive and responsive the AI workflow is.",
      author: "Elena Rostova",
      role: "Co-Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    hasInteractiveDemo: true
  },
  {
    id: "health-track-saas",
    title: "PulseSync Telehealth & Patient Portal",
    subtitle: "HIPAA-compliant video consultation and clinical telemetry tracking",
    category: "Mobile & SaaS",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description: "A comprehensive digital health portal providing seamless virtual doctor appointments, real-time vitals monitoring, and automated prescription renewal.",
    clientName: "PulseSync Health",
    clientIndustry: "Healthcare / Telemedicine",
    metrics: [
      { label: "Patient Appointments Booked", value: "140K+" },
      { label: "Average Appointment Rating", value: "4.9 / 5" },
      { label: "Lighthouse Performance", value: "98/100" }
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "WebRTC", "Express", "Chart.js"],
    liveUrl: "https://example.com/demo-health",
    challenge: "Elderly patients were finding previous telehealth apps confusing, leading to high support ticket volume and missed virtual visits.",
    solution: "Designed and implemented a high-accessibility UI with 18px+ readable typography, high-contrast states, zero-friction 1-click video call joins, and automated SMS reminders.",
    keyFeatures: [
      "1-Click HD WebRTC video consultation without external plugin downloads",
      "Interactive interactive patient symptom checker wizard",
      "Biometric vitals trend dashboard with normal range visual indicators",
      "Encrypted end-to-end doctor notes & prescription management"
    ],
    testimonial: {
      quote: "Nikhil's focus on user accessibility cut our support tickets by 60% in the first month. Incredible developer.",
      author: "Dr. James Sterling",
      role: "Chief Medical Officer",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80"
    },
    hasInteractiveDemo: false
  },
  {
    id: "e-commerce-luxe",
    title: "Aura Luxe Minimalist E-Commerce Storefront",
    subtitle: "Headless e-commerce flagship with 3D product previews & sub-second page loads",
    category: "UI/UX Design",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    description: "An ultra-premium apparel storefront engineered for high conversion, complete with slide-out cart drawer, smart search filters, and instant checkout flow.",
    clientName: "Aura Paris",
    clientIndustry: "Luxury Retail & Fashion",
    metrics: [
      { label: "Checkout Conversion Rate", value: "+38%" },
      { label: "Average Order Value", value: "$320" },
      { label: "Page Load Speed", value: "0.4s" }
    ],
    techStack: ["React 19", "Tailwind CSS", "Motion", "Shopify Storefront API", "Vite"],
    liveUrl: "https://example.com/demo-luxe",
    challenge: "The brand's previous storefront was bloated and slow on mobile, losing impulse buyers during seasonal launches.",
    solution: "Rebuilt the front-end using Vite and Tailwind CSS with optimistic state updates, client-side cart persistence, and micro-interactions for luxury feel.",
    keyFeatures: [
      "Optimistic add-to-cart animations with sticky mobile summary bar",
      "Instant fuzzy search and filter drawer with live stock availability",
      "Curated lookbook gallery with interactive shop-the-look hotspots",
      "Multi-currency dynamic localized pricing switcher"
    ],
    testimonial: {
      quote: "Our conversion rate surged 38% after Alex launched the new storefront. The design matches our brand luxury aesthetic flawlessly.",
      author: "Sophie Laurent",
      role: "Head of Digital Marketing",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    hasInteractiveDemo: true
  }
];

export const SERVICES: Service[] = [
  {
    id: "full-stack-mvp",
    title: "Full-Stack Web MVP Engineering",
    tagline: "Turn your product vision into a production-ready Web App in 3-4 weeks",
    iconName: "Code2",
    description: "End-to-end development of scalable, responsive web applications built with React 19, TypeScript, Tailwind CSS, and secure Node.js/Express backends.",
    deliverables: [
      "Complete React + TypeScript Frontend",
      "RESTful or GraphQL API Backend",
      "Database Architecture & Schema Setup",
      "User Authentication & Security Auth",
      "30 Days Post-Launch Maintenance"
    ],
    startingPrice: "$3,500",
    popularFor: "Startups, Founders & SaaS Creators"
  },
  {
    id: "ai-integration",
    title: "AI Feature & LLM Integration",
    tagline: "Enhance your software with intelligent AI workflows and Gemini models",
    iconName: "Sparkles",
    description: "Integrate cutting-edge AI features such as intelligent chat copilots, automated document processing, personalized recommendations, and content generation engines.",
    deliverables: [
      "Gemini 2.5 / OpenAI API Integration",
      "Custom Prompt System Instructions",
      "Streaming AI Text/JSON Response UI",
      "Rate Limiting & Cost Guardrails",
      "Fallback & Error Handling Logic"
    ],
    startingPrice: "$2,800",
    popularFor: "Existing Products & AI SaaS Startups"
  },
  {
    id: "ui-ux-redesign",
    title: "UI/UX Redesign & Modernization",
    tagline: "Transform outdated software into modern, high-converting digital experiences",
    iconName: "Layout",
    description: "Complete visual and UX overhaul focused on boosting user retention, improving accessibility, eliminating friction, and establishing a cohesive design system.",
    deliverables: [
      "Figma Prototype & Design System",
      "Tailwind CSS v4 Component Library",
      "Mobile-First Responsive Layouts",
      "Lighthouse 95+ Audit & Optimization",
      "Micro-interactions & Smooth Motion"
    ],
    startingPrice: "$2,200",
    popularFor: "Established Platforms & E-Commerce"
  },
  {
    id: "tech-audit-optimization",
    title: "Performance Audit & Code refactoring",
    tagline: "Fix slow load times, eliminate memory leaks, and stabilize legacy code",
    iconName: "Zap",
    description: "Deep technical inspection of frontend bundle sizes, React re-render bottlenecks, backend query performance, and security vulnerabilities.",
    deliverables: [
      "Comprehensive 15-Page Technical Audit",
      "Bundle Size & Re-render Optimization",
      "Core Web Vitals Boost to Green Zone",
      "Actionable Refactoring Roadmap",
      "1-on-1 Strategy Walkthrough Call"
    ],
    startingPrice: "$1,200",
    popularFor: "Scaling Companies & Investors"
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "React 19", category: "Frontend", proficiency: 98, iconName: "Atom", experience: "6+ Years", isPrimary: true },
  { name: "TypeScript", category: "Frontend", proficiency: 96, iconName: "Code", experience: "5+ Years", isPrimary: true },
  { name: "Tailwind CSS v4", category: "Frontend", proficiency: 99, iconName: "Palette", experience: "5+ Years", isPrimary: true },
  { name: "Node.js / Express", category: "Backend & DB", proficiency: 94, iconName: "Server", experience: "6+ Years", isPrimary: true },
  { name: "PostgreSQL & Drizzle", category: "Backend & DB", proficiency: 90, iconName: "Database", experience: "4+ Years", isPrimary: true },
  { name: "Firebase / Firestore", category: "Backend & DB", proficiency: 92, iconName: "Flame", experience: "5+ Years" },
  { name: "Gemini AI API", category: "AI & Cloud", proficiency: 95, iconName: "Bot", experience: "2+ Years", isPrimary: true },
  { name: "Vite & Build Tools", category: "Tools & Design", proficiency: 96, iconName: "Wrench", experience: "4+ Years" },
  { name: "Cloud Run / Docker", category: "AI & Cloud", proficiency: 88, iconName: "Cloud", experience: "3+ Years" },
  { name: "Figma & UI Systems", category: "Tools & Design", proficiency: 92, iconName: "Figma", experience: "5+ Years", isPrimary: true },
  { name: "Framer Motion", category: "Frontend", proficiency: 94, iconName: "Sparkles", experience: "4+ Years" },
  { name: "REST & WebSockets", category: "Backend & DB", proficiency: 95, iconName: "Activity", experience: "6+ Years" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Brody",
    role: "VP of Product",
    company: "OmniPay Global",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Nikhil is hands-down the most talented full-stack engineer I've worked with. He took our complex financial dashboard specs and turned them into a lightning-fast app ahead of schedule.",
    projectTitle: "OmniPay Dashboard",
    metricHighlight: "Reconciliation time reduced by 98%"
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Co-Founder & CEO",
    company: "NeuroCraft AI",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "The AI integration Nikhil built for us was seamless. Not only did he handle the complex streaming responses and Gemini API setup, but his attention to UI design was phenomenal.",
    projectTitle: "NeuroCraft AI Studio",
    metricHighlight: "5x faster content creation"
  },
  {
    id: "3",
    name: "Sophie Laurent",
    role: "Head of E-Commerce",
    company: "Aura Paris",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Our sales increased immediately after launching the store Nikhil built. Mobile user experience is silky smooth, and page load times are practically instant.",
    projectTitle: "Aura Luxe Storefront",
    metricHighlight: "+38% Checkout Conversion"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    description: "We analyze your project goals, target audience, technical requirements, and establish a fixed milestone roadmap.",
    timeframe: "Days 1 - 3"
  },
  {
    number: "02",
    title: "Figma Prototype & System Architecture",
    description: "I craft interactive wireframes, component design tokens, and setup database/API architectural specs.",
    timeframe: "Days 4 - 8"
  },
  {
    number: "03",
    title: "Agile Engineering & Sprint Demos",
    description: "Active development with weekly live staging demos so you see progress in real-time with full transparency.",
    timeframe: "Weeks 2 - 3"
  },
  {
    number: "04",
    title: "Testing, Launch & Handover",
    description: "Comprehensive QA, Lighthouse speed optimization, deployment to your cloud, and complete source code transfer.",
    timeframe: "Week 4"
  }
];
