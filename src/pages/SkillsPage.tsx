import { motion } from 'framer-motion'
import Skills from '../components/Skills'
import { slideVariants } from '../constants'

export default function SkillsPage() {
  return (
    <motion.div variants={slideVariants} initial="initial" animate="enter" exit="exit">
      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-4 text-center">
          <p className="section-label mb-4">skills.config.ts</p>
          <h1 className="font-sans font-bold text-5xl lg:text-6xl text-white">
            Tech <span className="gradient-text">Arsenal</span>
          </h1>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-lg">
            The tools, frameworks, and languages I use to engineer exceptional products.
          </p>
        </div>
        <Skills />
      </div>
    </motion.div>
  )
}
