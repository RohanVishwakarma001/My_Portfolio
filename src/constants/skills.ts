export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  label: string
  icon: string
  color: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    icon: '{ }',
    color: 'cyan',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'Java', level: 70 },
      { name: 'C', level: 65 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    label: 'Frontend & UI',
    icon: '⬡',
    color: 'purple',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js 14', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 78 },
      { name: 'SASS', level: 72 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    label: 'Backend & DBs',
    icon: '⊞',
    color: 'blue',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'MongoDB', level: 72 },
      { name: 'Appwrite', level: 75 },
      { name: 'Convex', level: 70 },
      { name: 'RESTful APIs', level: 85 },
    ],
  },
  {
    label: 'Testing & QA',
    icon: '✓',
    color: 'green',
    skills: [
      { name: 'Jest', level: 80 },
      { name: 'Mocha / Chai', level: 78 },
      { name: 'Selenium', level: 65 },
      { name: 'Unit Testing', level: 82 },
      { name: 'CI/CD Pipelines', level: 72 },
    ],
  },
  {
    label: 'Tools & Cloud',
    icon: '◈',
    color: 'cyan',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Vercel', level: 85 },
      { name: 'Plaid API', level: 72 },
      { name: 'Dwolla API', level: 68 },
      { name: 'Agile / Scrum', level: 80 },
    ],
  },
]

/** Quick-pill tech showcase rendered above the skill categories. */
export const techIcons: string[] = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind',
  'MongoDB', 'Vercel', 'Git', 'Framer', 'Jest',
]
