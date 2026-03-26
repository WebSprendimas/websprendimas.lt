import { useRef } from 'react'
import { motion } from 'framer-motion'

function TiltCard({ children, className, style }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ ...style, transition: 'transform 0.2s ease, box-shadow 0.3s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

const projects = [
  {
    id: 'kavarskoglobosnamai',
    type: 'Realus klientas',
    typeColor: '#c9a84c',
    typeBg: 'rgba(201, 168, 76, 0.1)',
    client: 'Globos namai, Kaunas',
    title: 'Kavarsko Globos Namai',
    url: 'https://kavarskoglobosnamai.lt',
    urlLabel: 'kavarskoglobosnamai.lt',
    desc: 'Profesionali svetainė globos namų paslaugoms. Custom kodas, SEO optimizacija, kontaktų forma. Indeksuota Google paieškoje.',
    tags: ['Custom kodas', 'SEO', 'Kaunas'],
    stars: 5,
    testimonial: 'Gustas sukūrė mums modernią, greitą svetainę, kuri iš karto pradėjo rodytis Google. Profesionalus ir greitas darbas.',
    testimonialAuthor: '— Globos namų administracija',
    indexed: true,
  },
  {
    id: 'gustastutoring',
    type: 'Asmeninis projektas',
    typeColor: 'rgba(240, 237, 232, 0.6)',
    typeBg: 'rgba(240, 237, 232, 0.06)',
    client: 'Korepetitorių paslauga',
    title: 'Gustas Tutoring',
    url: 'https://gustastutoring.netlify.app',
    urlLabel: 'gustastutoring.netlify.app',
    desc: 'Svetainė sukurta asmeniniam korepetitorių verslui. Optimizuota mobiliems įrenginiams, greitas įkėlimas, aiški struktūra.',
    tags: ['React', 'Mobile-first', 'Netlify'],
    stars: 0,
    testimonial: null,
    testimonialAuthor: null,
    indexed: false,
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 relative"
      aria-labelledby="portfolio-title"
    >
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label block mb-4">Portfolio</span>
          <h2
            id="portfolio-title"
            className="font-display font-light"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f0ede8', letterSpacing: '-0.01em' }}
          >
            Realūs darbai. <em style={{ color: '#c9a84c' }}>Realūs rezultatai.</em>
          </h2>
          <p
            className="font-body mt-4 max-w-lg mx-auto text-base"
            style={{ color: 'rgba(240, 237, 232, 0.5)', lineHeight: '1.8' }}
          >
            Web dizainas Kaunas — ne mockup'ai, o veikiančios svetainės su realiais klientais.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard
                className="h-full rounded-sm overflow-hidden"
                style={{
                  background: 'rgba(13, 13, 22, 0.9)',
                  border: '1px solid rgba(201, 168, 76, 0.15)',
                }}
              >
                {/* Top bar */}
                <div
                  className="px-8 py-5 flex items-center justify-between"
                  style={{ borderBottom: '1px solid rgba(201, 168, 76, 0.08)' }}
                >
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-sm uppercase tracking-widest"
                    style={{
                      color: p.typeColor,
                      background: p.typeBg,
                      border: `1px solid ${p.typeColor}30`,
                    }}
                  >
                    {p.type}
                  </span>
                  {p.indexed && (
                    <span
                      className="font-mono text-[10px] flex items-center gap-1.5 px-2 py-1"
                      style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.08)', borderRadius: '2px' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                      Google indeksuota
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Browser mockup */}
                  <div
                    className="mb-6 p-3 rounded-sm"
                    style={{
                      background: 'rgba(10, 10, 15, 0.8)',
                      border: '1px solid rgba(201, 168, 76, 0.08)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,100,100,0.5)' }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,200,50,0.5)' }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(50,200,100,0.5)' }} />
                      <div
                        className="flex-1 mx-2 px-3 py-1 rounded-sm font-mono text-xs"
                        style={{ background: 'rgba(201, 168, 76, 0.05)', color: 'rgba(201, 168, 76, 0.5)' }}
                      >
                        {p.urlLabel}
                      </div>
                    </div>
                    {/* Simulated screen */}
                    <div
                      className="h-32 rounded-sm flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(26,26,46,0.8), rgba(10,10,15,0.9))',
                        border: '1px solid rgba(201, 168, 76, 0.05)',
                      }}
                    >
                      <span className="font-display text-2xl font-light" style={{ color: 'rgba(201, 168, 76, 0.3)' }}>
                        {p.title}
                      </span>
                    </div>
                  </div>

                  <p
                    className="font-mono text-xs uppercase tracking-widest mb-2"
                    style={{ color: 'rgba(240, 237, 232, 0.35)' }}
                  >
                    {p.client}
                  </p>
                  <h3
                    className="font-display text-2xl font-medium mb-4"
                    style={{ color: '#f0ede8' }}
                  >
                    {p.title}
                  </h3>

                  <p
                    className="font-body text-sm mb-5 leading-relaxed"
                    style={{ color: 'rgba(240, 237, 232, 0.55)' }}
                  >
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map(t => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-1 uppercase tracking-wider"
                        style={{
                          color: 'rgba(201, 168, 76, 0.6)',
                          background: 'rgba(201, 168, 76, 0.06)',
                          border: '1px solid rgba(201, 168, 76, 0.12)',
                          borderRadius: '2px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Stars + testimonial */}
                  {p.stars > 0 && (
                    <div
                      className="p-5 mb-6 rounded-sm"
                      style={{
                        background: 'rgba(201, 168, 76, 0.04)',
                        border: '1px solid rgba(201, 168, 76, 0.1)',
                      }}
                    >
                      <div className="flex gap-1 mb-3">
                        {[...Array(p.stars)].map((_, j) => (
                          <span key={j} className="star-gold">★</span>
                        ))}
                      </div>
                      <p
                        className="font-body text-sm italic mb-2"
                        style={{ color: 'rgba(240, 237, 232, 0.7)', lineHeight: '1.7' }}
                      >
                        „{p.testimonial}"
                      </p>
                      <p
                        className="font-mono text-xs"
                        style={{ color: 'rgba(201, 168, 76, 0.6)' }}
                      >
                        {p.testimonialAuthor}
                      </p>
                    </div>
                  )}

                  {/* Link */}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:gap-3"
                    style={{ color: '#c9a84c' }}
                    aria-label={`Peržiūrėti svetainę ${p.title} — ${p.urlLabel}`}
                  >
                    Peržiūrėti svetainę
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M8 1h3v3M11 1L6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
