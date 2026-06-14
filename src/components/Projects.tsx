import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap } from 'lucide-react'
import { projects, accentTokens } from '../constants'
import type { Project } from '../constants'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const accent = accentTokens[project.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.175, 0.885, 0.32, 1.275] }}
      className={`glass rounded-2xl border ${accent.border} transition-all duration-400 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}
    >
      {/* Card header gradient */}
      <div className={`h-2 bg-gradient-to-r ${accent.gradientSoft} opacity-60`} />

      <div className="p-6 lg:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-2 h-2 rounded-full ${accent.dot} shadow-lg`} />
              <span className="font-mono text-xs text-text-muted">{project.period}</span>
            </div>
            <h3 className="font-sans font-bold text-2xl text-white">{project.title}</h3>
            <p className={`font-mono text-sm mt-0.5 ${accent.text}`}>{project.tagline}</p>
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
              className={`group w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 ${accent.border} ${accent.text} opacity-70 hover:opacity-100`}
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
                project.color === 'purple'
                  ? { color: '#b300ff', borderColor: 'rgba(179,0,255,0.2)', background: 'rgba(179,0,255,0.06)' }
                  : project.color === 'blue'
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
          <Zap size={14} className={`mt-0.5 flex-shrink-0 ${accent.text}`} />
          <p className="text-text-muted text-xs font-mono leading-relaxed">{project.impact}</p>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-1.5 text-xs font-mono transition-colors duration-200 ${accent.text} hover:opacity-80`}
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
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.dot}`} />
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
