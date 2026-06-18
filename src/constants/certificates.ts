import type { AccentColor } from './projects'

export interface Certificate {
  id: string
  /** Program / course title as printed on the certificate. */
  title: string
  /** Awarding organization (the brand on the certificate). */
  issuer: string
  /** Platform that delivered/verified the program, if different from the issuer. */
  platform?: string
  /** Human-readable issue date. */
  date: string
  /** Public path (under `/public`) to the certificate image or PDF. */
  file: string
  /** Key topics / skills demonstrated, rendered as badges. */
  skills: string[]
  color: AccentColor
}

/**
 * Single source of truth for certificate data, consumed by both the Home page
 * preview section (`components/Certificates`) and the full `pages/CertificatesPage`.
 * Files live in `public/certificate/`.
 */
export const certificates: Certificate[] = [
  {
    id: 'jpmorgan-swe',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co.',
    platform: 'Forage',
    date: 'June 2024',
    file: '/certificate/1718883424974.jpg',
    skills: ['Stock Price Data Feed', 'Data Visualization', 'Open Source'],
    color: 'cyan',
  },
  {
    id: 'walmart-advanced-swe',
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart Global Tech',
    platform: 'Forage',
    date: 'June 2024',
    file: '/certificate/1719023311376.pdf',
    skills: ['Advanced Data Structures', 'Software Architecture', 'Relational DB Design', 'Data Munging'],
    color: 'purple',
  },
  {
    id: 'hpe-swe',
    title: 'Software Engineering Job Simulation',
    issuer: 'Hewlett Packard Enterprise',
    platform: 'Forage',
    date: 'June 2024',
    file: '/certificate/1719024184765.pdf',
    skills: ['RESTful Web Services', 'Data Upload', 'Unit Testing'],
    color: 'blue',
  },
  {
    id: 'verizon-cloud',
    title: 'Cloud Platform Job Simulation',
    issuer: 'Verizon',
    platform: 'Forage',
    date: 'June 2024',
    file: '/certificate/1719025060442.pdf',
    skills: ['Cloud-Native Apps', 'Cloud Security'],
    color: 'cyan',
  },
  {
    id: 'microsoft-linkedin-swd',
    title: 'Career Essentials in Software Development',
    issuer: 'Microsoft & LinkedIn',
    platform: 'LinkedIn Learning',
    date: 'June 2024',
    file: '/certificate/1719072950312.jpg',
    skills: ['Programming', 'Software Development'],
    color: 'purple',
  },
  {
    id: 'unified-mentor-internship',
    title: 'Web Development Internship',
    issuer: 'Unified Mentor Pvt. Ltd.',
    date: 'Jun – Jul 2024',
    file: '/certificate/1722659512996.pdf',
    skills: ['Web Development', '1 Month Internship'],
    color: 'blue',
  },
  {
    id: 'training-shaala-quiz',
    title: 'Brain Booster IT Quiz',
    issuer: 'Training Shaala',
    date: 'November 2024',
    file: '/certificate/1731944631552.jpg',
    skills: ['IT Concepts', 'Problem Solving'],
    color: 'cyan',
  },
]
