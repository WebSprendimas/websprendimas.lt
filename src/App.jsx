import { useEffect } from 'react'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyCustom from './components/WhyCustom'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Prevent FOUC on fonts
  useEffect(() => {
    document.documentElement.style.visibility = 'visible'
  }, [])

  return (
    <>
      {/* Noise overlay for texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Page load animation */}
      <PageLoader />

      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <WhyCustom />
        <Services />
        <Portfolio />
        <HowItWorks />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
