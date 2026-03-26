import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Įveskite vardą'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Įveskite teisingą el. paštą'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Žinutė per trumpa'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    // Simulate sending
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section
      id="kontaktai"
      className="py-32 relative overflow-hidden"
      aria-labelledby="kontaktai-title"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201, 168, 76, 0.04) 0%, transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label block mb-4">Kontaktai</span>
            <h2
              id="kontaktai-title"
              className="font-display font-light mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f0ede8', letterSpacing: '-0.01em', lineHeight: '1.1' }}
            >
              Pradėkime<br />
              <em style={{ color: '#c9a84c' }}>kartu</em>
            </h2>
            <p
              className="font-body mb-10 leading-relaxed"
              style={{ color: 'rgba(240, 237, 232, 0.55)', fontSize: '1rem', lineHeight: '1.8' }}
            >
              Atsakysiu per 24 val. Aptarsime jūsų projekto detales, terminus ir kainą. Svetainių kūrimas Kaunas — greita konsultacija nemokamai.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="mailto:gustas@websprendimas.lt"
                className="flex items-center gap-4 group"
                aria-label="Siųsti el. laišką Gustui"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    border: '1px solid rgba(201, 168, 76, 0.25)',
                    borderRadius: '2px',
                    color: '#c9a84c',
                    background: 'rgba(201, 168, 76, 0.04)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 5l6 4 6-4M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(201, 168, 76, 0.5)' }}>El. paštas</div>
                  <div className="font-body text-sm group-hover:text-gold-400 transition-colors" style={{ color: '#f0ede8' }}>gustas@websprendimas.lt</div>
                </div>
              </a>

              <a
                href="tel:+37067955852"
                className="flex items-center gap-4 group"
                aria-label="Skambinti Gustui telefonu"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    border: '1px solid rgba(201, 168, 76, 0.25)',
                    borderRadius: '2px',
                    color: '#c9a84c',
                    background: 'rgba(201, 168, 76, 0.04)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2h3l1.5 3.5-2 1.5c.9 2 2.5 3.5 4.5 4.5l1.5-2L14 11v3c-6.5 1-13-5.5-12-12z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(201, 168, 76, 0.5)' }}>Telefonas</div>
                  <div className="font-body text-sm group-hover:text-gold-400 transition-colors" style={{ color: '#f0ede8' }}>+370 679 55852</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    border: '1px solid rgba(201, 168, 76, 0.25)',
                    borderRadius: '2px',
                    color: '#c9a84c',
                    background: 'rgba(201, 168, 76, 0.04)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C5.24 1 3 3.24 3 6c0 4.25 5 9 5 9s5-4.75 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(201, 168, 76, 0.5)' }}>Vieta</div>
                  <div className="font-body text-sm" style={{ color: '#f0ede8' }}>Kaunas, Lietuva</div>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <div
              className="mt-10 inline-flex items-center gap-3 px-5 py-3"
              style={{
                background: 'rgba(201, 168, 76, 0.05)',
                border: '1px solid rgba(201, 168, 76, 0.15)',
                borderRadius: '2px',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(201, 168, 76, 0.8)' }}>
                Atsakau per 24 val.
              </span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                  aria-label="Kontaktų forma"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs uppercase tracking-widest mb-2"
                      style={{ color: 'rgba(201, 168, 76, 0.6)' }}
                    >
                      Vardas
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Jūsų vardas"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 font-mono text-xs" style={{ color: '#f87171' }} role="alert">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs uppercase tracking-widest mb-2"
                      style={{ color: 'rgba(201, 168, 76, 0.6)' }}
                    >
                      El. paštas
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="jusu@paštas.lt"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 font-mono text-xs" style={{ color: '#f87171' }} role="alert">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-widest mb-2"
                      style={{ color: 'rgba(201, 168, 76, 0.6)' }}
                    >
                      Žinutė
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Aprašykite savo projektą, tikslus, terminus..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="form-input resize-none"
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 font-mono text-xs" style={{ color: '#f87171' }} role="alert">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center"
                    aria-label="Siųsti žinutę Gustui"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border border-current border-t-transparent rounded-full"
                        />
                        Siunčiama...
                      </>
                    ) : (
                      <>
                        Siųsti žinutę
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="font-mono text-xs text-center" style={{ color: 'rgba(240, 237, 232, 0.3)', letterSpacing: '0.05em' }}>
                    Jūsų duomenys niekur neparduodami. Susisiekiu tik dėl projekto.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                  role="status"
                  aria-live="polite"
                >
                  {/* Success circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
                    style={{
                      background: 'rgba(201, 168, 76, 0.1)',
                      border: '1px solid rgba(201, 168, 76, 0.4)',
                    }}
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      width="32" height="32" viewBox="0 0 32 32" fill="none"
                    >
                      <motion.path
                        d="M7 16l6 6 12-12"
                        stroke="#c9a84c"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      />
                    </motion.svg>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-display text-3xl font-light mb-3"
                    style={{ color: '#f0ede8' }}
                  >
                    Žinutė išsiųsta!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="font-body text-base"
                    style={{ color: 'rgba(240, 237, 232, 0.55)' }}
                  >
                    Atsakysiu per 24 val.<br />
                    <span style={{ color: '#c9a84c' }}>gustas@websprendimas.lt</span>
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
