import { motion } from 'framer-motion'
import Certificates from '../components/Certificates'
import { slideVariants } from '../constants'

export default function CertificatesPage() {
  return (
    <motion.div variants={slideVariants} initial="initial" animate="enter" exit="exit">
      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-4 text-center">
          <p className="section-label mb-4">certificates.config.ts</p>
          <h1 className="font-sans font-bold text-5xl lg:text-6xl text-white">
            Certifications & <span className="gradient-text">Credentials</span>
          </h1>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-lg">
            Industry job simulations and programs I've completed with leading companies and platforms.
          </p>
        </div>
        <Certificates />
      </div>
    </motion.div>
  )
}
