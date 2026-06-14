import { Briefcase, Rocket, Palette, Lightbulb } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Highlight {
  icon: LucideIcon
  title: string
  desc: string
  color: string
}

export const highlights: Highlight[] = [
  {
    icon: Briefcase,
    title: 'Internship @ Unified Mentor',
    desc: 'Web Development Intern (2024)',
    color: 'cyan',
  },
  {
    icon: Rocket,
    title: 'Production-Grade Apps',
    desc: 'Full-stack with Next.js & Node.js',
    color: 'purple',
  },
  {
    icon: Palette,
    title: 'Cinematic UI/UX',
    desc: 'Obsessed with premium design systems',
    color: 'blue',
  },
  {
    icon: Lightbulb,
    title: 'Freelance → Agency',
    desc: 'Exploring the indie-tech model',
    color: 'green',
  },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '3+', label: 'Production Projects' },
  { value: '1', label: 'Internship' },
  { value: '5+', label: 'Technologies' },
  { value: '2027', label: 'Graduation Year' },
]
