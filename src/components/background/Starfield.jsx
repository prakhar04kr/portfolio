import { memo, useEffect, useRef } from 'react'

function Starfield({ particleCount = 200, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    let raf

    const stars = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 0.5 + Math.random(),
      speed: 0.02 + Math.random() * 0.04,
      phase: Math.random() * Math.PI * 2,
      drift: (Math.random() - 0.5) * 0.15,
    }))

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h)
      stars.forEach((s) => {
        s.x += s.drift
        s.y += s.speed
        if (s.x < 0) s.x = w
        if (s.x > w) s.x = 0
        if (s.y > h) s.y = 0

        const twinkle = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(time * 0.001 + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(242, 242, 255, ${twinkle * 0.6})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', onResize)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [particleCount])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      aria-hidden
    />
  )
}

export default memo(Starfield)
