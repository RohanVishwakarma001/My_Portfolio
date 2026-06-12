import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap } from 'lucide-react'

const projects = [
  {
    id: 'podcastr',
    title: 'Podcastr',
    tagline: 'AI-Powered Podcast Platform',
    description: 'Engineered an AI-powered podcast platform enabling creators to generate diverse voiceovers from a single text input using text-to-speech and multi-voice synthesis technology.',
    period: 'May 2024',
    gradient: 'from-neon-cyan/20 to-neon-blue/10',
    border: 'border-neon-cyan/20 hover:border-neon-cyan/50',
    accent: 'text-neon-cyan',
    dotColor: 'bg-neon-cyan',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Convex', 'Framer Motion'],
    features: [
      'AI-powered text-to-speech with multi-voice synthesis',
      'Server-side rendering via Next.js 14 for optimal SEO',
      'Real-time backend with Convex data management',
      'Framer Motion animations for seamless UX',
      'Intuitive creator dashboard with voice selection',
    ],
    impact: 'Streamlined podcast creation workflow, reducing production time from hours to minutes',
    github: 'https://github.com/RohanVishwakarma001',
    live: '#',
  },
  {
    id: 'livedoc',
    title: 'LiveDoc',
    tagline: 'Real-Time Collaborative Editor',
    description: 'Developed a real-time collaborative document editing platform supporting simultaneous multi-user editing with zero-latency synchronization using Liveblocks WebSocket infrastructure.',
    period: 'June 2024',
    gradient: 'from-neon-purple/20 to-neon-blue/10',
    border: 'border-neon-purple/20 hover:border-neon-purple/50',
    accent: 'text-neon-purple',
    dotColor: 'bg-neon-purple',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Liveblocks'],
    features: [
      'Real-time multi-user editing with WebSocket sync',
      'Conflict resolution for concurrent edit management',
      'Next.js 14 App Router for optimized TTI',
      'Live cursor tracking and presence indicators',
      'Enterprise-grade collaborative reliability',
    ],
    impact: 'Enabled seamless team collaboration with enterprise-grade reliability',
    github: 'https://github.com/RohanVishwakarma001',
    live: '#',
  },
  {
    id: 'horizon',
    title: 'Horizon',
    tagline: 'Full-Stack Banking Platform',
    description: 'Built a full-stack online banking platform enabling users to securely connect multiple financial accounts, monitor real-time transactions, and execute peer-to-peer transfers.',
    period: 'July 2024',
    gradient: 'from-neon-blue/20 to-neon-cyan/10',
    border: 'border-neon-blue/20 hover:border-neon-blue/50',
    accent: 'text-neon-blue',
    dotColor: 'bg-neon-blue',
    tech: ['Next.js 14', 'TypeScript', 'Appwrite', 'Dwolla', 'Plaid'],
    features: [
      'Plaid integration for secure bank account linking',
      'Dwolla ACH payment processing engine',
      'JWT authentication with encrypted data transmission',
      'Real-time transaction monitoring dashboard',
      'Responsive financial UI with accessibility standards',
    ],
    impact: 'Created a fintech-grade banking application with enterprise security standards',
    github: 'https://github.com/RohanVishwakarma001',
    live: '#',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.175, 0.885, 0.32, 1.275] }}
      className={`glass rounded-2xl border ${project.border} transition-all duration-400 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}
    >
      {/* Card header gradient */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient} opacity-60`} />

      <div className="p-6 lg:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-2 h-2 rounded-full ${project.dotColor} shadow-lg`} />
              <span className="font-mono text-xs text-text-muted">{project.period}</span>
            </div>
            <h3 className="font-sans font-bold text-2xl text-white">{project.title}</h3>
            <p className={`font-mono text-sm mt-0.5 ${project.accent}`}>{project.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-text-muted hover:text-white hover:border-white/30 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 ${project.border} ${project.accent} opacity-70 hover:opacity-100`}
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="tech-badge"
              style={
                project.accent.includes('purple')
                  ? { color: '#b300ff', borderColor: 'rgba(179,0,255,0.2)', background: 'rgba(179,0,255,0.06)' }
                  : project.accent.includes('blue')
                  ? { color: '#0080ff', borderColor: 'rgba(0,128,255,0.2)', background: 'rgba(0,128,255,0.06)' }
                  : {}
              }
            >
              {t}
            </span>
          ))}
        </div>

        {/* Impact line */}
        <div className="flex items-start gap-2 mb-4">
          <Zap size={14} className={`mt-0.5 flex-shrink-0 ${project.accent}`} />
          <p className="text-text-muted text-xs font-mono leading-relaxed">{project.impact}</p>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-1.5 text-xs font-mono transition-colors duration-200 ${project.accent} hover:opacity-80`}
        >
          {expanded ? 'Hide Features' : 'View Features'}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {/* Expanded features */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/5 mt-4">
                <p className="text-text-muted font-mono text-xs mb-3 tracking-widest">KEY FEATURES</p>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.dotColor}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-28 px-6 relative bg-bg-secondary/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-neon-cyan/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">03. projects</p>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-white">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Production-grade applications built with modern tooling and a relentless focus on user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
