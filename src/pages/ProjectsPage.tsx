import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { projects, accentTokens, slideVariants } from "../constants";
import type { Project } from "../constants";
import { useTilt } from "../hooks/useTilt";
import TechIcon from "../components/TechIcon";

function ProjectDetailCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const accent = accentTokens[project.color];
  const tilt = useTilt(3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`relative glass rounded-2xl border ${accent.border} overflow-hidden transition-all duration-400 group`}
      {...tilt.bind}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ backgroundImage: tilt.spotlightBackground }}
      />

      {/* Gradient header band */}
      <div className={`h-1.5 bg-gradient-to-r ${accent.gradientVivid}`} />

      <div className="p-8">
        {/* Project header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-mono text-xs px-3 py-1 rounded-full border"
                style={{
                  color: accent.hex,
                  borderColor: `${accent.hex}30`,
                  background: `${accent.hex}10`,
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
              style={{ color: accent.hex }}
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
                background: `linear-gradient(135deg, ${accent.hex}, #0080ff)`,
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
                    style={{ color: accent.hex }}
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
                  style={{ color: accent.hex }}
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
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border transition-all duration-200"
                    style={{
                      color: accent.hex,
                      borderColor: `${accent.hex}25`,
                      background: `${accent.hex}08`,
                    }}
                  >
                    <TechIcon name={t} size={12} />
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
      variants={slideVariants}
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
