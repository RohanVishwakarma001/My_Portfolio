import { Link } from 'react-router-dom'
import { Terminal, Heart } from 'lucide-react'
import { navLinks, socialLinks } from '../constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-secondary/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Terminal size={15} className="text-bg-primary" />
              </div>
              <span className="font-mono font-bold text-white text-sm tracking-widest">
                RV<span className="text-neon-cyan">.</span>dev
              </span>
            </Link>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed">
              Building premium web experiences with precision engineering and a designer's eye.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-mono text-xs text-neon-cyan tracking-widest mb-4">NAVIGATION</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-text-muted hover:text-white font-mono text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-mono text-xs text-neon-cyan tracking-widest mb-4">CONNECT</p>
            <div className="space-y-2">
              <a
                href="mailto:rohanvishwakarma8261@gmail.com"
                className="block text-text-muted hover:text-white font-mono text-xs transition-colors duration-200 truncate"
              >
                rohanvishwakarma8261@gmail.com
              </a>
              <p className="text-text-muted font-mono text-xs">
                Dehradun, Uttarakhand
              </p>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                <span className="text-neon-green font-mono text-xs">Available for opportunities</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-text-muted hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted font-mono text-xs">
            © 2024 Rohan Vishwakarma. All rights reserved.
          </p>
          <p className="text-text-muted font-mono text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-neon-purple mx-1" /> using React + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
