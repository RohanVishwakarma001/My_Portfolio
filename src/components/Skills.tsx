import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories, techIcons } from '../constants'
import type { SkillCategory } from '../constants'
import { useTilt } from '../hooks/useTilt'
import { getTechIcon } from '../constants/icons'
import TechIcon from './TechIcon'

/** Short fallback monogram for skills with no matching brand icon (e.g. "SQL", "Agile / Scrum"). */
function monogram(name: string) {
  return name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase()
}

const colorMap: Record<string, { text: string; border: string; label: string; glow: string }> = {
  cyan: {
    text: 'text-neon-cyan',
    border: 'border-neon-cyan/20 hover:border-neon-cyan/40',
    label: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20',
    glow: 'shadow-[0_0_20px_rgba(0,217,255,0.15)]',
  },
  purple: {
    text: 'text-neon-purple',
    border: 'border-neon-purple/20 hover:border-neon-purple/40',
    label: 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
    glow: 'shadow-[0_0_20px_rgba(179,0,255,0.15)]',
  },
  blue: {
    text: 'text-neon-blue',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    label: 'bg-blue-500/10 text-neon-blue border-blue-500/20',
    glow: 'shadow-[0_0_20px_rgba(0,128,255,0.15)]',
  },
  green: {
    text: 'text-neon-green',
    border: 'border-green-500/20 hover:border-green-500/40',
    label: 'bg-green-500/10 text-neon-green border-green-500/20',
    glow: 'shadow-[0_0_20px_rgba(0,255,65,0.15)]',
  },
}

function SkillChip({ name, color, delay, active }: { name: string; color: string; delay: number; active: boolean }) {
  const c = colorMap[color]
  const Icon = getTechIcon(name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="group flex flex-col items-center justify-center gap-2 text-center py-3.5 px-2 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-200"
    >
      {Icon ? (
        <Icon size={22} className={`${c.text} opacity-90 group-hover:scale-110 transition-transform duration-200`} />
      ) : (
        <span className={`flex items-center justify-center w-[22px] h-[22px] rounded-md text-[9px] font-bold font-mono border ${c.border} ${c.text}`}>
          {monogram(name)}
        </span>
      )}
      <span className="text-[11px] font-mono leading-snug text-text-secondary group-hover:text-white transition-colors duration-200">
        {name}
      </span>
    </motion.div>
  )
}

function CategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const c = colorMap[cat.color]
  const Icon = cat.icon
  const tilt = useTilt(4)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative glass rounded-2xl border ${c.border} p-6 transition-all duration-300 overflow-hidden ${isInView ? c.glow : ''}`}
      {...tilt.bind}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: tilt.spotlightBackground }}
      />

      {/* Category header */}
      <div className="relative flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${c.label}`}>
          <Icon size={18} />
        </div>
        <h3 className={`font-sans font-bold text-base ${c.text}`}>{cat.label}</h3>
      </div>

      {/* Skill chips */}
      <div className="relative grid grid-cols-3 gap-3">
        {cat.skills.map((skill, i) => (
          <SkillChip
            key={skill.name}
            name={skill.name}
            color={cat.color}
            delay={index * 0.1 + i * 0.06}
            active={isInView}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const marqueeTech = [...techIcons, ...techIcons]

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neon-cyan/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">04. skills</p>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-white">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build exceptional products.
          </p>
        </motion.div>

        {/* Infinite tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="marquee-track flex w-max items-center gap-3">
            {marqueeTech.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-text-muted font-mono text-sm hover:border-neon-cyan/40 hover:text-white transition-colors duration-300"
              >
                <TechIcon name={t} size={15} className="text-neon-cyan" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
