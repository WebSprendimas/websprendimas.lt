import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 24h10M14 20v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 11l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Svetainės kūrimas',
    desc: 'Nauja svetainė nuo nulio — custom kodas, SEO struktūra, mobiliai pritaikyta, greita. Svetainių kūrimas Kaunas su pilnu kodu ir be šablonų.',
    tag: 'Nuo nulio',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14C4 8.477 8.477 4 14 4s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 6l3 3M22 6l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Svetainės atnaujinimas',
    desc: 'Sena, lėta svetainė? Atnaujiname dizainą, kodą ir SEO. Rezultatas — modernesnė, greitesnė svetainė be pilno perkūrimo kainos.',
    tag: 'Redesign',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.93 6.93l2.12 2.12M18.95 18.95l2.12 2.12M6.93 21.07l2.12-2.12M18.95 9.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SEO optimizacija',
    desc: 'SEO optimizacija Lietuva — techninė SEO auditas, meta tagų optimizacija, schema markup, greičio gerinimas. Google rastų jūsų verslą.',
    tag: 'Google #1',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20c0-4.418 4.477-8 10-8s10 3.582 10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 12l4 2-1.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI Chatbot integracija',
    desc: 'Automatinis klientų aptarnavimas 24/7. AI chatbot atsako į dažniausius klausimus, renka kontaktus ir padidina konversiją.',
    tag: 'AI powered',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 10v8l10 6 10-6v-8L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 10l10 6 10-6M14 16v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'DNS / Hosting taisymas',
    desc: 'Svetainė neveikia? DNS klaidos, hostingo problemos, domeno nukreipimai — išsprendžiame greitai ir be techninių galvos skausmų.',
    tag: 'Greitas fix',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Mėnesinė priežiūra',
    desc: 'Reguliarus turinio atnaujinimas, saugumo stebėjimas, greičio optimizacija ir techninė pagalba. Svetainė visada veikia tobulai.',
    tag: 'Mėnesinis',
  },
]

export default function Services() {
  return (
    <section
      id="paslaugos"
      className="py-32 relative"
      aria-labelledby="paslaugos-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <span className="section-label block mb-4">Paslaugos</span>
          <h2
            id="paslaugos-title"
            className="font-display font-light mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f0ede8', letterSpacing: '-0.01em' }}
          >
            Ko galite tikėtis iš{' '}
            <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>websprendimas.lt</em>
          </h2>
          <p
            className="font-body text-base"
            style={{ color: 'rgba(240, 237, 232, 0.55)', lineHeight: '1.8' }}
          >
            Kiekviena paslauga teikiama su pilnu įsipareigojimu kokybei. Kaina — pagal jūsų projektą. Susisiekite, aptarsime.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-sm overflow-hidden"
              style={{
                background: 'rgba(13, 13, 22, 0.8)',
                border: '1px solid rgba(201, 168, 76, 0.1)',
                transition: 'box-shadow 0.4s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(201, 168, 76, 0.1), 0 0 0 1px rgba(201, 168, 76, 0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%)',
                }}
              />

              {/* Tag */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className="font-mono text-[10px] px-2 py-1 tracking-widest uppercase"
                  style={{
                    color: 'rgba(201, 168, 76, 0.7)',
                    background: 'rgba(201, 168, 76, 0.06)',
                    border: '1px solid rgba(201, 168, 76, 0.15)',
                    borderRadius: '2px',
                  }}
                >
                  {s.tag}
                </div>
              </div>

              {/* Icon */}
              <div
                className="mb-5 w-12 h-12 flex items-center justify-center"
                style={{
                  color: '#c9a84c',
                  background: 'rgba(201, 168, 76, 0.08)',
                  border: '1px solid rgba(201, 168, 76, 0.15)',
                  borderRadius: '2px',
                }}
              >
                {s.icon}
              </div>

              <h3
                className="font-display text-xl font-medium mb-3"
                style={{ color: '#f0ede8' }}
              >
                {s.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: 'rgba(240, 237, 232, 0.5)' }}
              >
                {s.desc}
              </p>

              {/* CTA link */}
              <a
                href="#kontaktai"
                className="inline-flex items-center gap-2 mt-6 font-mono text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                style={{ color: 'rgba(201, 168, 76, 0.6)' }}
                aria-label={`Susisiekti dėl paslaugos: ${s.title}`}
              >
                Gauti kainą
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Bottom border on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }}
              />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-sm mb-6" style={{ color: 'rgba(240, 237, 232, 0.45)' }}>
            Kainos nustatomos pagal projekto apimtį. Nemokamas konsultacija.
          </p>
          <a href="#kontaktai" className="btn-ghost">
            Aptarti projektą
          </a>
        </motion.div>

      </div>
    </section>
  )
}
