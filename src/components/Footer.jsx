import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative py-14"
      style={{ borderTop: '1px solid rgba(201, 168, 76, 0.1)' }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo / branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#hero" className="font-display text-lg font-medium" style={{ color: '#f0ede8' }}>
              websprendimas<span style={{ color: '#c9a84c' }}>.lt</span>
            </a>
            <p className="font-mono text-xs" style={{ color: 'rgba(240, 237, 232, 0.3)', letterSpacing: '0.08em' }}>
              Svetainių kūrimas Kaunas · Custom kodas
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Apačios meniu">
            <ul className="flex flex-wrap justify-center gap-6" role="list">
              {[
                { href: '#privalumai', label: 'Privalumai' },
                { href: '#paslaugos', label: 'Paslaugos' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#kontaktai', label: 'Kontaktai' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="nav-link text-xs" style={{ color: 'rgba(240, 237, 232, 0.4)' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="font-mono text-xs" style={{ color: 'rgba(240, 237, 232, 0.3)', letterSpacing: '0.05em' }}>
              © {year} Gustas Gaurilčikas
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: 'rgba(201, 168, 76, 0.4)', letterSpacing: '0.05em' }}>
              websprendimas.lt · Kaunas, LT
            </p>
          </div>

        </div>

        {/* Bottom decorative line */}
        <div
          className="mt-10 h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
        />
        <p
          className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest"
          style={{ color: 'rgba(240, 237, 232, 0.15)' }}
        >
          Sukurta custom kodu · SEO optimizuota · Lietuva
        </p>
      </div>
    </footer>
  )
}
