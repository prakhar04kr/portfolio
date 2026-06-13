import { memo, useEffect, useRef } from 'react'
import { lerp } from '../../utils/sphere'

function CursorSpotlight({ enabled }) {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    window.addEventListener('mousemove', onMove)

    let raf
    const loop = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.07)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.07)

      if (ref.current) {
        ref.current.style.background = `radial-gradient(320px circle at ${pos.current.x}px ${pos.current.y}px, rgba(255,255,255,0.04), transparent 70%)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
    />
  )
}

export default memo(CursorSpotlight)
