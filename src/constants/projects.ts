/** Semantic accent keys used across the portfolio's neon theme. */
export type AccentColor = "cyan" | "purple" | "blue";

export interface AccentTokens {
  /** Tailwind text color class, e.g. `text-neon-cyan`. */
  text: string;
  /** Tailwind background class for dots/indicators, e.g. `bg-neon-cyan`. */
  dot: string;
  /** Tailwind border class with hover state. */
  border: string;
  /** Raw hex value for inline styles (gradients, badges). */
  hex: string;
  /** Subtle gradient used on compact home cards. */
  gradientSoft: string;
  /** Vivid gradient used on the detailed projects page. */
  gradientVivid: string;
}

/**
 * Single source of truth for accent styling. Components read these tokens by
 * `AccentColor` instead of hard-coding class strings, so the palette lives in one place.
 */
export const accentTokens: Record<AccentColor, AccentTokens> = {
  cyan: {
    text: "text-neon-cyan",
    dot: "bg-neon-cyan",
    border: "border-neon-cyan/20 hover:border-neon-cyan/50",
    hex: "#00d9ff",
    gradientSoft: "from-neon-cyan/20 to-neon-blue/10",
    gradientVivid: "from-neon-cyan via-neon-blue to-neon-purple",
  },
  purple: {
    text: "text-neon-purple",
    dot: "bg-neon-purple",
    border: "border-neon-purple/20 hover:border-neon-purple/50",
    hex: "#b300ff",
    gradientSoft: "from-neon-purple/20 to-neon-blue/10",
    gradientVivid: "from-neon-purple via-neon-blue to-neon-cyan",
  },
  blue: {
    text: "text-neon-blue",
    dot: "bg-neon-blue",
    border: "border-neon-blue/20 hover:border-neon-blue/50",
    hex: "#0080ff",
    gradientSoft: "from-neon-blue/20 to-neon-cyan/10",
    gradientVivid: "from-neon-blue via-neon-cyan to-neon-green",
  },
};

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  period: string;
  category: string;
  color: AccentColor;
  tech: string[];
  features: string[];
  impact: string;
  github: string;
  live: string;
}

/**
 * Single source of truth for project data, consumed by both the Home page
 * preview section (`components/Projects`) and the full `pages/ProjectsPage`.
 */
export const projects: Project[] = [
  {
    id: "pipedream-lite",
    title: "Pipedream-lite",
    tagline: "Visual Webhook & Automation Pipeline Builder",
    description:
      "Engineered a full-stack workflow automation platform that lets users visually build, deploy, and monitor event-driven pipelines on a drag-and-drop canvas — chaining webhook triggers, HTTP requests, conditional logic, and actions with live execution tracking.",
    period: "June 2026",
    category: "DevTools / SaaS",
    color: "cyan",
    tech: [
      "Next.js 14",
      "TypeScript",
      "React Flow",
      "Tailwind CSS",
      "Node.js / Express",
      "Prisma",
      "PostgreSQL",
      "Redis / BullMQ",
      "Socket.IO",
      "Zod",
    ],
    features: [
      "Drag-and-drop pipeline editor built on React Flow with custom typed nodes (triggers, HTTP, conditions, transforms, Slack/email actions)",
      "Webhook-triggered execution engine with background job processing via BullMQ and Redis",
      "Pipeline versioning and one-click deploy with cycle detection to prevent invalid graphs",
      "Real-time run monitoring and per-node execution logs streamed over WebSockets (Socket.IO)",
      "Persistent run history and node-level input/output capture backed by Prisma + PostgreSQL",
      "Type-safe REST API with Zod validation, deployed across Vercel (frontend) and Render (backend)",
    ],
    impact:
      "Reduced multi-step integration setup from custom backend code to a few minutes on a visual canvas, with full execution observability",
    github: "https://github.com/RohanVishwakarma001/Pipedream-lite",
    live: "https://pipedream-lite.rohanvishwakarma.co.in",
  },
  {
    id: "downtime.so",
    title: "Downtime.so",
    tagline: "Real-Time status page platform",
    description:
      "A self-hosted, open-source status page platform. Create public status pages, manage incidents, send email/SMS notifications, and receive alerts from monitoring tools like UptimeRobot and Datadog.",
    period: "June 2026",
    category: "Collaboration",
    color: "purple",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "TanStack",
      "Query",
      "Framer",
      "Motion",
      "Express.js",
      "Prisma ORM",
    ],
    features: [
      "Public status pages — shareable at `/status/:orgSlug`",
      "Incident management — create, update, and resolve incidents with timeline updates",
      "Email & SMS notifications — notify subscribers when incidents occur or update",
      "Webhook ingestion — UptimeRobot, Datadog, and generic webhooks",
      "REST API — manage services and incidents programmatically via API key",
      "Real-time updates — SSE-powered live status pages (no polling)",
      "Multi-tenant — each organization is fully isolated",
    ],
    impact:
      "Built a free, self-hostable alternative to Statuspage.io, which costs $29–$1,499/month — saving teams that recurring cost.",
    github: "https://github.com/RohanVishwakarma001/Downtime.so",
    live: "https://downtime.so.rohanvishwakarma.co.in/",
  },
  {
    id: "horizon",
    title: "Horizon",
    tagline: "Full-Stack Banking Platform",
    description:
      "Built a full-stack online banking platform enabling users to securely connect multiple financial accounts, monitor real-time transactions, and execute peer-to-peer transfers.",
    period: "July 2024",
    category: "FinTech",
    color: "blue",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Appwrite",
      "Dwolla",
      "Plaid",
      "JWT",
      "Prisma",
    ],
    features: [
      "Plaid API integration for secure multi-bank account linking",
      "Dwolla ACH payment processing for peer-to-peer transfers",
      "JWT authentication with encrypted data transmission",
      "Real-time transaction monitoring and financial dashboard",
      "Responsive, accessible fintech UI meeting WCAG standards",
      "Appwrite backend with secure database management",
    ],
    impact:
      "Created a fintech-grade banking application with enterprise security standards",
    github: "https://github.com/RohanVishwakarma001",
    live: "#",
  },
];
