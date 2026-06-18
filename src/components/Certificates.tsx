import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { certificates, accentTokens } from '../constants'
import type { Certificate } from '../constants'

function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const accent = accentTokens[certificate.color]

  return (
    <motion.a
      ref={ref}
      href={certificate.file}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.175, 0.885, 0.32, 1.275] }}
      className={`group block glass rounded-2xl border ${accent.border} transition-all duration-400 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}
    >
      {/* Card header gradient */}
      <div className={`h-2 bg-gradient-to-r ${accent.gradientSoft} opacity-60`} />

      <div className="p-6 lg:p-7">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${accent.border} ${accent.text}`}>
              <Award size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${accent.dot} shadow-lg`} />
                <span className="font-mono text-xs text-text-muted">{certificate.date}</span>
              </div>
              <p className={`font-mono text-sm mt-0.5 ${accent.text}`}>{certificate.issuer}</p>
            </div>
          </div>

          <ExternalLink
            size={16}
            className="text-text-muted opacity-60 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
          />
        </div>

        {/* Title */}
        <h3 className="font-sans font-bold text-xl text-white mb-1.5 leading-snug">{certificate.title}</h3>
        {certificate.platform && (
          <p className="text-text-muted text-xs font-mono mb-4">via {certificate.platform}</p>
        )}

        {/* Skill badges */}
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((s) => (
            <span
              key={s}
              className="tech-badge"
              style={
                certificate.color === 'purple'
                  ? { color: '#b300ff', borderColor: 'rgba(179,0,255,0.2)', background: 'rgba(179,0,255,0.06)' }
                  : certificate.color === 'blue'
                  ? { color: '#0080ff', borderColor: 'rgba(0,128,255,0.2)', background: 'rgba(0,128,255,0.06)' }
                  : {}
              }
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function Certificates() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br from-neon-purple/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">05. certificates</p>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-white">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Industry job simulations and programs completed with leading companies and platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, i) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
