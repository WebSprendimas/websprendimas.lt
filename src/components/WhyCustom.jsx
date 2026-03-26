import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
  })
}

const reasons = [
  {
    icon: '⚡',
    title: 'Greičiau',
    tagline: 'Spartus įkėlimas',
    desc: 'Custom kodas įkeliamas 3–5× greičiau nei Wix ar WordPress šablonai. Greitas puslapio įkėlimas tiesiogiai pagerina SEO pozicijas Google paieškoje.',
    metric: '3× greičiau',
  },
  {
    icon: '◆',
    title: 'Unikaliau',
    tagline: 'Jūsų dizainas, ne šablonas',
    desc: 'Joks kitas verslas neturės tokios pat svetainės. Web dizainas Kaunas — sukurtas specialiai jūsų verslui, ne paimtas iš šablonų bibliotekos.',
    metric: '100% unikalus',
  },
  {
    icon: '🔒',
    title: 'Patikimiau',
    tagline: 'Nepriklausomybė nuo platformų',
    desc: 'Jūs priklausote nuo Wix tol, kol mokate jiems. Custom svetainė yra jūsų nuosavybė — hostinate kur norite, keičiate kaip norite.',
    metric: 'Pilna kontrolė',
  },
]

export default function WhyCustom() {
  return (
    <section
      id="privalumai"
      className="py-32 relative overflow-hidden"
      aria-labelledby="privalumai-title"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(26,26,46,0.3) 50%, transparent 100%)',
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
          <span className="section-label block mb-4">Kodėl custom kodas</span>
          <h2
            id="privalumai-title"
            className="font-display font-light"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f0ede8', letterSpacing: '-0.01em' }}
          >
            Ne šablonai. <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>Tikra svetainė.</em>
          </h2>
          <p
            className="font-body mt-6 max-w-xl mx-auto"
            style={{ color: 'rgba(240, 237, 232, 0.55)', lineHeight: '1.8', fontSize: '1rem' }}
          >
            Svetainių kūrimas Kaunas — kiekvienas projektas rašomas nuo nulio. Jokių Wix, jokių WordPress šablonų, jokių page builder ribojimų.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card-hover relative p-8 rounded-sm"
              style={{
                background: 'rgba(19, 19, 31, 0.6)',
                border: '1px solid rgba(201, 168, 76, 0.12)',
              }}
            >
              {/* Number */}
              <div
                className="absolute top-6 right-8 font-display text-6xl font-light select-none pointer-events-none"
                style={{ color: 'rgba(201, 168, 76, 0.06)', lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-6">{r.icon}</div>

              {/* Metric badge */}
              <div
                className="inline-block font-mono text-xs px-3 py-1 mb-4"
                style={{
                  background: 'rgba(201, 168, 76, 0.08)',
                  border: '1px solid rgba(201, 168, 76, 0.2)',
                  color: '#c9a84c',
                  letterSpacing: '0.1em',
                  borderRadius: '2px',
                }}
              >
                {r.metric}
              </div>

              <h3
                className="font-display text-2xl font-medium mb-2"
                style={{ color: '#f0ede8' }}
              >
                {r.title}
              </h3>
              <p
                className="font-mono text-xs mb-4 uppercase tracking-widest"
                style={{ color: '#c9a84c', opacity: 0.7 }}
              >
                {r.tagline}
              </p>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: 'rgba(240, 237, 232, 0.55)' }}
              >
                {r.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }}
              />
            </motion.article>
          ))}
        </div>

        {/* Comparison note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs" style={{ color: 'rgba(201, 168, 76, 0.5)', letterSpacing: '0.1em' }}>
            // Wix · WordPress · šablonai — ne čia. Custom kodas — visada.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
