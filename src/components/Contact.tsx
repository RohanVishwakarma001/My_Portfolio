import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { contactLinks } from '../constants'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  cyan: { text: 'text-neon-cyan', border: 'border-neon-cyan/20', bg: 'bg-neon-cyan/5' },
  blue: { text: 'text-neon-blue', border: 'border-neon-blue/20', bg: 'bg-neon-blue/5' },
  purple: { text: 'text-neon-purple', border: 'border-neon-purple/20', bg: 'bg-neon-purple/5' },
  green: { text: 'text-neon-green', border: 'border-green-500/20', bg: 'bg-green-500/5' },
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !formRef.current) {
      console.error('EmailJS is not configured. Set the VITE_EMAILJS_* env vars.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('Failed to send message:', err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden bg-bg-secondary/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-neon-purple/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">05. contact</p>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-white">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to new opportunities and conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 text-text-muted font-mono text-sm mb-4">
                <MapPin size={14} className="text-neon-cyan" />
                Dehradun, Uttarakhand | Currently: Dehradun
              </div>
              <p className="text-text-secondary leading-relaxed">
                I'm currently open to freelance projects, internship opportunities, and full-time roles starting 2027.
                Let's create something extraordinary together.
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, i) => {
                const Icon = link.icon
                const c = colorMap[link.color]
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className={`flex items-center gap-4 p-4 glass rounded-xl border ${c.border} hover:border-opacity-60 group transition-all duration-300`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center ${c.text} flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-text-muted font-mono text-xs">{link.label}</p>
                      <p className={`text-sm font-mono group-hover:${c.text} transition-colors duration-200 text-white truncate max-w-[280px]`}>
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl border border-white/10 p-6 lg:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                  <label className="block font-mono text-xs text-text-muted mb-2">NAME *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full bg-bg-secondary/50 border rounded-lg px-4 py-3 text-white placeholder:text-text-muted font-mono text-sm transition-all duration-200 ${
                      errors.name ? 'border-red-500/60' : 'border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 font-mono text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-xs text-text-muted mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full bg-bg-secondary/50 border rounded-lg px-4 py-3 text-white placeholder:text-text-muted font-mono text-sm transition-all duration-200 ${
                      errors.email ? 'border-red-500/60' : 'border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 font-mono text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label className="block font-mono text-xs text-text-muted mb-2">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Collaboration"
                  className="w-full bg-bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-muted font-mono text-sm transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block font-mono text-xs text-text-muted mb-2">MESSAGE *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`w-full bg-bg-secondary/50 border rounded-lg px-4 py-3 text-white placeholder:text-text-muted font-mono text-sm resize-none transition-all duration-200 ${
                    errors.message ? 'border-red-500/60' : 'border-white/10'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 font-mono text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-mono text-sm font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: status === 'success'
                    ? 'linear-gradient(135deg, #00ff41, #00d9ff)'
                    : 'linear-gradient(135deg, #00d9ff, #0080ff)',
                }}
              >
                {status === 'idle' && (
                  <>
                    <Send size={16} />
                    <span className="text-bg-primary">Send Message</span>
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <div className="w-4 h-4 border-2 border-bg-primary/40 border-t-bg-primary rounded-full animate-spin" />
                    <span className="text-bg-primary">Sending...</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle size={16} className="text-bg-primary" />
                    <span className="text-bg-primary">Message Sent!</span>
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={16} className="text-bg-primary" />
                    <span className="text-bg-primary">Failed — Try Again</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
