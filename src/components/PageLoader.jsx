import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#0a0a0f' }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <div
              className="w-16 h-16 border flex items-center justify-center"
              style={{ borderColor: 'rgba(201, 168, 76, 0.5)' }}
            >
              <span
                className="font-display text-3xl font-light"
                style={{ color: '#c9a84c' }}
              >
                W
              </span>
            </div>

            <span
              className="font-display text-xl font-light tracking-wide"
              style={{ color: '#f0ede8' }}
            >
              websprendimas<span style={{ color: '#c9a84c' }}>.lt</span>
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />

          {/* Fade out overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1, transition: { duration: 0.4 } }}
            style={{ background: '#0a0a0f' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
