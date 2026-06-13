import { memo, useEffect, useRef } from 'react'

function BackgroundOrbs({ scrollY = 0 }) {
  const violetRef = useRef(null)
  const cyanRef = useRef(null)
  const timeRef = useRef(0)

  useEffect(() => {
    let raf
    const animate = () => {
      timeRef.current += 0.008
      const t = timeRef.current
      const parallax = scrollY * 0.25

      if (violetRef.current) {
        violetRef.current.style.transform = `translate(${Math.sin(t) * 40}px, ${Math.cos(t * 0.7) * 30 - parallax}px)`
      }
      if (cyanRef.current) {
        cyanRef.current.style.transform = `translate(${Math.cos(t * 0.8) * 50}px, ${Math.sin(t * 0.5) * 40 - parallax * 0.8}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [scrollY])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        ref={violetRef}
        className="absolute -left-[200px] top-[10%] h-[700px] w-[700px] rounded-full will-transform"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        ref={cyanRef}
        className="absolute -right-[100px] bottom-[15%] h-[500px] w-[500px] rounded-full will-transform"
        style={{
          background: 'radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  )
}

export default memo(BackgroundOrbs)
