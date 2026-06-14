import type { Variants } from 'framer-motion'

/**
 * Shared page-transition variants used by route-level pages.
 * `slideVariants` is the default for sub-pages; `fadeVariants` is used by the Home route.
 */
export const slideVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}
