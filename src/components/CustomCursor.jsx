import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const raf = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(-50%, -50%) scale(1.8)`
        ringRef.current.style.borderColor = 'rgba(201, 168, 76, 0.8)'
        ringRef.current.style.background = 'rgba(201, 168, 76, 0.05)'
      }
    }

    const onLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(-50%, -50%) scale(1)`
        ringRef.current.style.borderColor = 'rgba(201, 168, 76, 0.4)'
        ringRef.current.style.background = 'transparent'
      }
    }

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + 'px'
        dotRef.current.style.top = pos.current.y + 'px'
      }

      // Lerp ring to dot position
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12

      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top = ringPos.current.y + 'px'
      }

      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="hidden md:block fixed pointer-events-none z-[99999]"
        style={{
          width: '6px',
          height: '6px',
          background: '#c9a84c',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      <div
        ref={ringRef}
        className="hidden md:block fixed pointer-events-none z-[99998]"
        style={{
          width: '32px',
          height: '32px',
          border: '1px solid rgba(201, 168, 76, 0.4)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.3s ease, border-color 0.3s ease, background 0.3s ease',
        }}
      />
    </>
  )
}
