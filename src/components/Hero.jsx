import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 168, 76, ${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(201, 168, 76, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" />
}

const heroWords = ['Svetainės,', 'kurios', 'dirba', 'už', 'jus']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Pagrindinis skyrius"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(26, 26, 46, 0.8) 0%, #0a0a0f 70%)',
        }}
      />

      {/* Gold orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201, 168, 76, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="gold-divider" style={{ width: '40px' }} />
          <span className="section-label">Svetainių kūrimas Kaunas</span>
          <div className="gold-divider" style={{ width: '40px' }} />
        </motion.div>

        {/* H1 — word by word */}
        <h1 className="font-display font-light mb-6 leading-tight" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#f0ede8', letterSpacing: '-0.02em' }}>
          {heroWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-body font-light text-lg md:text-xl mb-14 max-w-2xl mx-auto"
          style={{ color: 'rgba(240, 237, 232, 0.6)', letterSpacing: '0.01em', lineHeight: '1.7' }}
        >
          Custom kodas. Ne šablonai. Ne Wix.{' '}
          <span style={{ color: '#c9a84c' }}>Tikras rezultatas.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#portfolio" className="btn-primary">
            Peržiūrėti darbus
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#kontaktai" className="btn-ghost">
            Susisiekti
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="flex justify-center gap-12 mt-20 pt-12"
          style={{ borderTop: '1px solid rgba(201, 168, 76, 0.1)' }}
        >
          {[
            { num: '100%', label: 'Custom kodas' },
            { num: '<2s', label: 'Įkėlimo greitis' },
            { num: '2+', label: 'Patenkinti klientai' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl md:text-3xl gold-gradient font-medium">{s.num}</div>
              <div className="font-body text-xs mt-1 tracking-widest uppercase" style={{ color: 'rgba(240, 237, 232, 0.4)' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs" style={{ color: 'rgba(201, 168, 76, 0.5)', letterSpacing: '0.15em' }}>SLINKTI</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.6), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
