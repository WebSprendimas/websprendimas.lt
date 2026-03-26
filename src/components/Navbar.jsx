import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#privalumai', label: 'Privalumai' },
  { href: '#paslaugos', label: 'Paslaugos' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#kaip-veikia', label: 'Kaip veikia' },
  { href: '#kontaktai', label: 'Kontaktai' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10, 10, 15, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.1)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between" aria-label="Pagrindinis meniu">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-gold-500 flex items-center justify-center" style={{ borderColor: 'rgba(201, 168, 76, 0.7)' }}>
              <span className="font-mono text-xs text-gold-500" style={{ color: '#c9a84c' }}>W</span>
            </div>
            <span className="font-display text-lg font-medium tracking-wide" style={{ color: '#f0ede8' }}>
              websprendimas<span style={{ color: '#c9a84c' }}>.lt</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10" role="list">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#kontaktai" className="btn-primary hidden md:inline-flex text-xs py-3 px-6">
            Pradėkime
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label={menuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-[1px] transition-all duration-300" style={{
              background: '#c9a84c',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'
            }} />
            <span className="block w-6 h-[1px] transition-all duration-300" style={{
              background: '#c9a84c',
              opacity: menuOpen ? 0 : 1
            }} />
            <span className="block w-6 h-[1px] transition-all duration-300" style={{
              background: '#c9a84c',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
            }} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: '#0a0a0f' }}
          >
            <div className="flex flex-col justify-center items-center h-full gap-10">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  className="font-display text-4xl font-light"
                  style={{ color: '#f0ede8' }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontaktai"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-primary mt-6"
              >
                Pradėkime
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
