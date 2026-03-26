import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Susisiekiate',
    desc: 'Parašykite el. laišką arba skambinkite. Atsakysiu per 24 val. ir aptarsime jūsų projekto idėją.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 8.5l8 5.5 8-5.5M3 4h16a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Aptariame detales',
    desc: 'Pasikalbame apie tikslus, dizainą, funkcijas ir terminus. Gausite aiškų planą ir kainą be paslėptų mokesčių.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M18 3H4a1 1 0 00-1 1v10a1 1 0 001 1h3l4 4 4-4h3a1 1 0 001-1V4a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 8h8M7 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Gaunat svetainę',
    desc: 'Svetainė perduodama su pilnu kodu, hostingo sąranka ir SEO optimizacija. Jūs matote rezultatą Google.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 11l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 11a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5']
  })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="kaip-veikia"
      className="py-32 relative overflow-hidden"
      aria-labelledby="kaip-veikia-title"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(19,19,31,0.5) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label block mb-4">Procesas</span>
          <h2
            id="kaip-veikia-title"
            className="font-display font-light"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f0ede8', letterSpacing: '-0.01em' }}
          >
            Kaip tai <em style={{ color: '#c9a84c' }}>veikia</em>
          </h2>
          <p
            className="font-body mt-4 max-w-md mx-auto"
            style={{ color: 'rgba(240, 237, 232, 0.5)', lineHeight: '1.8' }}
          >
            Trys žingsniai nuo idėjos iki veikiančios svetainės su SEO.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={containerRef} className="relative">
          {/* Animated connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-12 left-[calc(16.67%-16px)] right-[calc(16.67%-16px)] h-[1px]"
            style={{ background: 'rgba(201, 168, 76, 0.1)' }}
          >
            <motion.div
              className="h-full"
              style={{
                width: lineWidth,
                background: 'linear-gradient(90deg, #c9a84c, rgba(201,168,76,0.3))',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Step circle */}
                <div
                  className="relative w-12 h-12 rounded-full flex items-center justify-center mb-8 z-10"
                  style={{
                    background: 'rgba(10, 10, 15, 0.9)',
                    border: '1px solid rgba(201, 168, 76, 0.4)',
                  }}
                >
                  <div style={{ color: '#c9a84c' }}>{s.icon}</div>
                  {/* Outer ring pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute inset-0 rounded-full"
                    style={{ border: '1px solid rgba(201, 168, 76, 0.3)' }}
                  />
                </div>

                {/* Number */}
                <div
                  className="font-mono text-xs tracking-widest mb-3"
                  style={{ color: 'rgba(201, 168, 76, 0.5)' }}
                >
                  Žingsnis {s.num}
                </div>

                <h3
                  className="font-display text-2xl font-medium mb-4"
                  style={{ color: '#f0ede8' }}
                >
                  {s.title}
                </h3>

                <p
                  className="font-body text-sm leading-relaxed max-w-xs"
                  style={{ color: 'rgba(240, 237, 232, 0.55)' }}
                >
                  {s.desc}
                </p>

                {/* Arrow between steps — desktop */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                    className="hidden lg:block absolute top-[22px] -right-4 z-20"
                    style={{ color: 'rgba(201, 168, 76, 0.4)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-20"
        >
          <a href="#kontaktai" className="btn-primary">
            Pradėti pirmą žingsnį
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
