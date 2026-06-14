import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { fadeVariants } from '../constants'

export default function Home() {
  return (
    <motion.div variants={fadeVariants} initial="initial" animate="enter" exit="exit">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  )
}
