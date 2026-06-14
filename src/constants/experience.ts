export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  type: string
  color: string
  tech: string[]
  achievements: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  location: string
  period: string
  type: string
  color: string
  courses: string[]
}

export const experiences: ExperienceItem[] = [
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

export const education: EducationItem[] = [
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
