import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  )
}
