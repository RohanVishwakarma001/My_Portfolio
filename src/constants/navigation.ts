export interface NavLink {
  path: string
  label: string
}

/** Primary site navigation — shared by the Navbar and Footer. */
export const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
]
