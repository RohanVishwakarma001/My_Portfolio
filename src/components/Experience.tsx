import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    company: 'Unified Mentor',
    role: 'Web Development Intern',
    location: 'Gurugram, Haryana',
    period: 'June 2024 – July 2024',
    type: 'Internship',
    color: 'cyan',
    tech: ['Jest', 'Mocha', 'JavaScript', 'TypeScript', 'CI/CD', 'ReactJS', 'HTML', 'CSS'],
    achievements: [
      'Developed an automated unit testing service using Jest and Mocha that reduced manual testing time and enhanced bug tracking by running daily tests on in-development products.',
      'Built and maintained CI/CD pipelines using JavaScript and TypeScript for automated test result organization and build deployment, improving overall software QA.',
      'Implemented an end-to-end automated workflow that loads latest build artifacts, executes test suites, and generates structured reports to streamline Continuous Integration processes.',
      'Designed and delivered interactive test result dashboards using ReactJS, HTML, JavaScript, and CSS, enabling swift visualization of test outcomes and accelerating bug resolution.',
      'Collaborated within a cross-functional Agile team, contributing to sprint planning and continuous feature delivery.',
    ],
  },
]

const education = [
  {
    institution: 'J.B. Institute of Technology',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Dehradun, Uttarakhand',
    period: 'August 2023 – August 2027',
    type: 'Education',
    color: 'purple',
    courses: [
      'Data Structures',
      'Algorithms Analysis',
      'Database Management',
      'Software Methodology',
      'Artificial Intelligence',
      'Internet Technology',
    ],
  },
]

const colorMap: Record<string, { text: string; border: string; bg: string; dot: string }> = {
  cyan: {
    text: 'text-neon-cyan',
    border: 'border-neon-cyan/30',
    bg: 'bg-neon-cyan/10',
    dot: 'bg-neon-cyan shadow-[0_0_10px_rgba(0,217,255,0.6)]',
  },
  purple: {
    text: 'text-neon-purple',
    border: 'border-neon-purple/30',
    bg: 'bg-neon-purple/10',
    dot: 'bg-neon-purple shadow-[0_0_10px_rgba(179,0,255,0.6)]',
  },
}

function TimelineItem({
  item,
  index,
  isExp,
}: {
  item: typeof experiences[0] | typeof education[0]
  index: number
  isExp: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const c = colorMap[item.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-6 w-4 h-4 rounded-full ${c.dot} z-10 border-2 border-bg-primary`} />

      {/* Card */}
      <div className={`glass rounded-2xl border ${c.border} p-6 lg:p-8 hover:border-opacity-60 transition-all duration-300 group`}>
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`font-mono text-xs px-2 py-0.5 rounded ${c.bg} ${c.text} border ${c.border}`}>
                {item.type}
              </span>
            </div>
            <h3 className="font-sans font-bold text-xl text-white mt-2">
              {'role' in item ? item.role : item.degree}
            </h3>
            <p className={`font-mono text-base font-semibold mt-1 ${c.text}`}>
              {'role' in item ? item.company : item.institution}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs mb-1">
              <Calendar size={12} />
              {item.period}
            </div>
            <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs">
              <MapPin size={12} />
              {item.location}
            </div>
          </div>
        </div>

        {/* Achievements or Courses */}
        {isExp && 'achievements' in item && (
          <ul className="space-y-3 mb-5">
            {item.achievements.map((ach, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${c.text}`} />
                <span className="text-text-secondary text-sm leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>
        )}

        {!isExp && 'courses' in item && (
          <div className="mb-5">
            <p className="text-text-muted font-mono text-xs mb-3">RELEVANT COURSEWORK</p>
            <div className="flex flex-wrap gap-2">
              {item.courses.map((course) => (
                <span key={course} className={`tech-badge ${item.color === 'purple' ? 'tech-badge-purple' : ''}`}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech stack */}
        {'tech' in item && (
          <div>
            <p className="text-text-muted font-mono text-xs mb-3">TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-neon-purple/3 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">02. experience</p>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-white">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 pl-10 mb-6">
                <Briefcase size={14} className="text-neon-cyan" />
                <span className="font-mono text-xs text-neon-cyan tracking-widest uppercase">Work Experience</span>
              </div>
              {experiences.map((exp, i) => (
                <TimelineItem key={exp.company} item={exp} index={i} isExp={true} />
              ))}
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-3 pl-10 mb-6">
                <Briefcase size={14} className="text-neon-purple" />
                <span className="font-mono text-xs text-neon-purple tracking-widest uppercase">Education</span>
              </div>
              {education.map((edu, i) => (
                <TimelineItem key={edu.institution} item={edu} index={i} isExp={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
