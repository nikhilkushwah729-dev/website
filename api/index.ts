import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/ai/proposal", async (req, res) => {
  try {
    const { projectType, budgetRange, timeline, features, description, clientName, companyName } = req.body;
    const ai = getAIClient();

    if (!ai) {
      return res.json({
        success: true,
        isFallback: true,
        proposal: {
          title: `Custom ${projectType || 'Full-Stack Web App'} Proposal for ${clientName || companyName || 'Client'}`,
          executiveSummary: `Thank you for reaching out! Based on your requirements (${description || 'Modern responsive web application with scalable architecture'}), here is a tailored strategic roadmap to deliver your project on time and within budget.`,
          techStack: [
            "React 19 & TypeScript for type-safe, ultra-fast UI",
            "Tailwind CSS v4 & Motion for fluid micro-interactions",
            "Node.js / Express backend with REST/GraphQL APIs",
            "PostgreSQL / Firebase for secure real-time data persistence",
            "Vite & Cloud Deployment (AWS/Cloud Run/Vercel) with CI/CD"
          ],
          phases: [
            { phase: "Phase 1: Architecture & UI/UX Design", duration: "1 - 2 Weeks", deliverables: ["Interactive Figma Wireframes", "Database Schema Design", "Component System & Theme Setup"] },
            { phase: "Phase 2: Core Engineering & Integrations", duration: "2 - 4 Weeks", deliverables: ["Frontend & Backend Development", "API & Payment Integrations", "Real-time State Management"] },
            { phase: "Phase 3: QA, Performance & Launch", duration: "1 Week", deliverables: ["Lighthouse 95+ Audit", "Security & Load Testing", "Deployment & Handover Docs"] }
          ],
          estimatedBudget: budgetRange || "$3,000 - $6,000",
          estimatedTimeline: timeline || "3 - 5 Weeks",
          keyDifferentiators: [
            "100% Mobile Responsive & Accessible Design",
            "Clean Code Base with Comprehensive Documentation",
            "Post-Launch 30-day Support & Maintenance Included"
          ]
        }
      });
    }

    const prompt = `
You are a senior elite Full-Stack Lead Architect & Product Strategist writing a client pitch proposal.
Client Name: ${clientName || 'Valued Client'}
Company: ${companyName || 'N/A'}
Project Type: ${projectType || 'Custom Web Application'}
Budget Target: ${budgetRange || '$3,000 - $8,000'}
Timeline Expectation: ${timeline || '4 Weeks'}
Requested Features: ${Array.isArray(features) ? features.join(', ') : (features || 'Modern web app features')}
Project Context: ${description || 'High performance web application'}

Generate a professional, compelling, and structured proposal response in valid JSON format.
Strict JSON format expected:
{
  "title": "string",
  "executiveSummary": "string",
  "techStack": ["string", "string"],
  "phases": [
    {
      "phase": "string",
      "duration": "string",
      "deliverables": ["string", "string"]
    }
  ],
  "estimatedBudget": "string",
  "estimatedTimeline": "string",
  "keyDifferentiators": ["string", "string"]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });

    const proposalText = response.text;
    if (proposalText) {
      const parsed = JSON.parse(proposalText);
      return res.json({ success: true, isFallback: false, proposal: parsed });
    }

    throw new Error("Empty response from AI");
  } catch (error: any) {
    return res.json({
      success: true,
      isFallback: true,
      proposal: {
        title: `Custom Strategy Proposal`,
        executiveSummary: `Tailored development plan covering end-to-end frontend UI, backend API engineering, and cloud deployment.`,
        techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Express Node.js"],
        phases: [
          { phase: "Phase 1: Discovery & Wireframing", duration: "1 Week", deliverables: ["Architecture Spec", "Design System"] },
          { phase: "Phase 2: Development & API Integration", duration: "2-3 Weeks", deliverables: ["Responsive Web App", "Backend APIs"] },
          { phase: "Phase 3: Testing & Launch", duration: "1 Week", deliverables: ["Production Deployment", "Source Code Handover"] }
        ],
        estimatedBudget: "$3,500 - $6,500",
        estimatedTimeline: "3-4 Weeks",
        keyDifferentiators: ["Pixel-perfect implementation", "95+ Lighthouse Performance", "Dedicated post-launch support"]
      }
    });
  }
});

app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;
    const ai = getAIClient();

    if (!ai) {
      return res.json({
        reply: "I am currently running in instant preview mode. I can assist with estimating project scopes, walking you through past case studies, detailing our technical stack (React 19, TypeScript, Express, AI integration), or scheduling a consultation!"
      });
    }

    const systemInstruction = `
You are the Lead Solutions Architect & Technical Liaison for Nexus Tech Inc.
Nexus Tech builds enterprise cloud software products (Nexus Core OS, NeuroFlow AI Studio, OmniPulse Data, Aura Luxe, CyberShield) and provides bespoke full-stack engineering for client applications.
Your goal is to answer client queries warmly, professionally, authoritatively, and concisely.
Highlight core technical stack: React 19, TypeScript, Tailwind CSS, Node.js Express, Python, PostgreSQL/Firestore, Gemini AI integration, multi-region cloud deployment.
Keep responses concise (2-4 short sentences).
`;

    const contents = [
      { role: "user", parts: [{ text: systemInstruction }] },
      ...(conversationHistory || []).map((h: any) => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.text }]
      })),
      { role: "user", parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents
    });

    return res.json({ reply: response.text || "Thank you for asking! Let's build something great together." });
  } catch (err: any) {
    return res.json({
      reply: "Thanks for reaching out! Feel free to pick a project type in our Cost Estimator or fill out the contact form below to receive a personalized proposal."
    });
  }
});

export default app;
