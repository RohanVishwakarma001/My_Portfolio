import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    id: "podcastr",
    title: "Podcastr",
    tagline: "AI-Powered Podcast Platform",
    description:
      "Engineered an AI-powered podcast platform enabling creators to generate diverse voiceovers from a single text input using text-to-speech and multi-voice synthesis technology.",
    period: "May 2024",
    gradient: "from-neon-cyan via-neon-blue to-neon-purple",
    border: "border-neon-cyan/20 hover:border-neon-cyan/50",
    accentColor: "#00d9ff",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Framer Motion",
      "OpenAI TTS",
    ],
    features: [
      "AI-powered text-to-speech with multi-voice synthesis technology",
      "Server-side rendering via Next.js 14 for optimal SEO and performance",
      "Real-time backend data management with Convex",
      "Framer Motion animations for seamless, polished UX",
      "Intuitive creator dashboard with voice selection and preview",
      "Scalable SaaS architecture with responsive design",
    ],
    impact:
      "Streamlined podcast creation workflow, reducing production time from hours to minutes",
    github: "https://github.com/RohanVishwakarma001",
    live: "#",
    category: "AI / SaaS",
  },
  {
    id: "Downtime.so",
    title: "Downtime.so",
    tagline: "Real-Time status page platform",
    description:
      "A self-hosted, open-source status page platform. Create public status pages, manage incidents, send email/SMS notifications, and receive alerts from monitoring tools like UptimeRobot and Datadog.",
    period: "June 2026",
    gradient: "from-neon-purple via-neon-blue to-neon-cyan",
    border: "border-neon-purple/20 hover:border-neon-purple/50",
    accentColor: "#b300ff",
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
    category: "Collaboration",
  },
  {
    id: "horizon",
    title: "Horizon",
    tagline: "Full-Stack Banking Platform",
    description:
      "Built a full-stack online banking platform enabling users to securely connect multiple financial accounts, monitor real-time transactions, and execute peer-to-peer transfers.",
    period: "July 2024",
    gradient: "from-neon-blue via-neon-cyan to-neon-green",
    border: "border-neon-blue/20 hover:border-neon-blue/50",
    accentColor: "#0080ff",
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
    category: "FinTech",
  },
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function ProjectDetailCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`glass rounded-2xl border ${project.border} overflow-hidden transition-all duration-400 group`}
    >
      {/* Gradient header band */}
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-8">
        {/* Project header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-mono text-xs px-3 py-1 rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}30`,
                  background: `${project.accentColor}10`,
                }}
              >
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs">
                <Calendar size={11} />
                {project.period}
              </div>
            </div>
            <h2 className="font-sans font-bold text-3xl text-white">
              {project.title}
            </h2>
            <p
              className="font-mono text-sm mt-1"
              style={{ color: project.accentColor }}
            >
              {project.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-text-secondary hover:text-white hover:border-white/30 font-mono text-xs transition-all duration-200"
            >
              <Github size={14} /> Code
            </a>
            <a
              href={project.live}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs text-bg-primary font-semibold transition-all duration-200"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, #0080ff)`,
              }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features + Impact two-col */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="font-mono text-xs text-text-muted tracking-widest mb-4">
              KEY FEATURES
            </p>
            <ul className="space-y-2.5">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: project.accentColor }}
                  />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="glass rounded-xl border border-white/5 p-5 mb-4">
              <div className="flex items-start gap-2 mb-3">
                <Zap
                  size={14}
                  className="mt-0.5"
                  style={{ color: project.accentColor }}
                />
                <p className="font-mono text-xs text-text-muted tracking-widest">
                  IMPACT
                </p>
              </div>
              <p className="text-white text-sm leading-relaxed">
                {project.impact}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-text-muted tracking-widest mb-3">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded text-xs font-mono border transition-all duration-200"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}25`,
                      background: `${project.accentColor}08`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Page header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">all_projects.tsx</p>
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-white">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto text-lg">
              Production-grade applications built with modern tooling,
              real-world APIs, and obsessive attention to detail.
            </p>
          </motion.div>

          {/* Project cards */}
          <div className="space-y-8">
            {projects.map((project, i) => (
              <ProjectDetailCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
