import { useEffect, useRef, useState, useCallback } from 'react'
import { lerp } from '../utils/sphere'

export function useCustomCursor(enabled) {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const ringTextRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const [cursorState, setCursorState] = useState('default')
  const [accentColor, setAccentColor] = useState('#ffffff')

  const setCursor = useCallback((state, accent = '#ffffff') => {
    setCursorState(state)
    setAccentColor(accent)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    window.addEventListener('mousemove', onMove)

    let raf
    const loop = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1)

      if (ringRef.current) {
        const el = ringRef.current
        const x = ring.current.x
        const y = ring.current.y

        if (cursorState === 'button') {
          el.style.width = '48px'
          el.style.height = '28px'
          el.style.borderRadius = '14px'
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        } else if (cursorState === 'text') {
          el.style.width = '4px'
          el.style.height = '32px'
          el.style.borderRadius = '2px'
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        } else if (cursorState === 'card') {
          el.style.width = '54px'
          el.style.height = '54px'
          el.style.borderRadius = '50%'
          el.style.background = `${accentColor}38`
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        } else {
          el.style.width = '36px'
          el.style.height = '36px'
          el.style.borderRadius = '50%'
          el.style.background = 'transparent'
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        }
      }

      if (ringTextRef.current) {
        ringTextRef.current.style.opacity = cursorState === 'card' ? '1' : '0'
        ringTextRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled, cursorState, accentColor])

  return { dotRef, ringRef, ringTextRef, setCursor }
}
