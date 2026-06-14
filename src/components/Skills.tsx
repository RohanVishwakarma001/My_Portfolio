import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories, techIcons } from '../constants'
import type { SkillCategory } from '../constants'

const colorMap: Record<string, { text: string; bar: string; border: string; label: string; glow: string }> = {
  cyan: {
    text: 'text-neon-cyan',
    bar: 'from-neon-cyan to-neon-blue',
    border: 'border-neon-cyan/20 hover:border-neon-cyan/40',
    label: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20',
    glow: 'shadow-[0_0_20px_rgba(0,217,255,0.15)]',
  },
  purple: {
    text: 'text-neon-purple',
    bar: 'from-neon-purple to-neon-blue',
    border: 'border-neon-purple/20 hover:border-neon-purple/40',
    label: 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
    glow: 'shadow-[0_0_20px_rgba(179,0,255,0.15)]',
  },
  blue: {
    text: 'text-neon-blue',
    bar: 'from-neon-blue to-neon-cyan',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    label: 'bg-blue-500/10 text-neon-blue border-blue-500/20',
    glow: 'shadow-[0_0_20px_rgba(0,128,255,0.15)]',
  },
  green: {
    text: 'text-neon-green',
    bar: 'from-neon-green to-neon-cyan',
    border: 'border-green-500/20 hover:border-green-500/40',
    label: 'bg-green-500/10 text-neon-green border-green-500/20',
    glow: 'shadow-[0_0_20px_rgba(0,255,65,0.15)]',
  },
}

function SkillBar({ name, color }: { name: string; level: number; color: string; delay: number }) {
  const c = colorMap[color]

  return (
    <div className="group">
      <span className={`text-sm font-mono transition-colors duration-200 text-text-secondary group-hover:${c.text}`}>
        {name}
      </span>
    </div>
  )
}

function CategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const c = colorMap[cat.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass rounded-2xl border ${c.border} p-6 transition-all duration-300 ${isInView ? c.glow : ''}`}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border font-mono text-lg font-bold ${c.label}`}>
          {cat.icon}
        </div>
        <h3 className={`font-sans font-bold text-base ${c.text}`}>{cat.label}</h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {cat.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={cat.color}
            delay={index * 0.1 + i * 0.08}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

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

        {/* Quick tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techIcons.map((t, i) => (
            <motion.button
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.05 }}
              onHoverStart={() => setActiveIndex(i)}
              onHoverEnd={() => setActiveIndex(null)}
              className={`px-4 py-2 rounded-full border font-mono text-sm transition-all duration-300 ${
                activeIndex === i
                  ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10 shadow-neon-cyan'
                  : 'border-white/10 text-text-muted hover:border-neon-cyan/40 hover:text-white'
              }`}
            >
              {t}
            </motion.button>
          ))}
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
