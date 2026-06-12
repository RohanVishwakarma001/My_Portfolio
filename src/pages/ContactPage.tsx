import { motion } from 'framer-motion'
import Contact from '../components/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function ContactPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-4 text-center">
          <p className="section-label mb-4">contact.ts</p>
          <h1 className="font-sans font-bold text-5xl lg:text-6xl text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-lg">
            Have a project in mind? Let's build something extraordinary together.
          </p>
        </div>
        <Contact />
      </div>
    </motion.div>
  )
}
