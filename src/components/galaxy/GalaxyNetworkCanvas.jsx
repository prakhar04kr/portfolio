import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function GalaxyNetworkCanvas() {
  const canvasRef = useRef(null)
  const nodesRef = useRef([])
  const mouseRef = useRef({ x: -999, y: -999 })
  const scrollRef = useRef(0)
  const rafRef = useRef(0)
  const seededRef = useRef(false)
  const [hintDismissed, setHintDismissed] = useState(false)

  const spawnBurst = useCallback((x, y) => {
    const count = 8 + Math.floor(6 * Math.random())
    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count + (Math.random() - 0.5) * 0.4
      const dist = 40 + 80 * Math.random()
      nodesRef.current.push({
        x,
        y: y + scrollRef.current,
        baseX: x + Math.cos(angle) * dist,
        baseY: y + scrollRef.current + Math.sin(angle) * dist,
        vx: 0,
        vy: 0,
        radius: 1.5 + 2 * Math.random(),
        opacity: 0.3 + 0.2 * Math.random(),
      })
    }
  }, [])

  const seedGrid = useCallback((width, height) => {
    const docHeight = Math.max(document.body.scrollHeight, height)
    const cols = Math.floor(width / 90)
    const rows = Math.floor(docHeight / 90)
    const nodes = []
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = (col + 0.5) * 90 + (Math.random() - 0.5) * 40
        const y = (row + 0.5) * 90 + (Math.random() - 0.5) * 40
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          radius: 1 + 1.5 * Math.random(),
          opacity: 0.06 + 0.1 * Math.random(),
        })
      }
    }
    nodesRef.current = nodes
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (!seededRef.current) {
        seedGrid(canvas.width, canvas.height)
        seededRef.current = true
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const onScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    document.addEventListener('mousemove', onMove)

    const onClick = (e) => {
      spawnBurst(e.clientX, e.clientY)
      setHintDismissed(true)
    }
    document.addEventListener('click', onClick)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nodes = nodesRef.current
      const scrollY = scrollRef.current
      const mouse = mouseRef.current
      const visible = []

      for (const node of nodes) {
        const sy = node.y - scrollY
        if (sy < -100 || sy > canvas.height + 100) continue

        const dx = node.x - mouse.x
        const dy = sy - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150
          const angle = Math.atan2(dy, dx)
          node.vx += Math.cos(angle) * force * 1.5
          node.vy += Math.sin(angle) * force * 1.5
        }

        node.vx += (node.baseX - node.x) * 0.02
        node.vy += (node.baseY - node.y) * 0.02
        node.vx *= 0.92
        node.vy *= 0.92
        node.x += node.vx
        node.y += node.vy
        visible.push({ node, sx: node.x, sy: node.y - scrollY })
      }

      ctx.lineWidth = 0.5
      for (let i = 0; i < visible.length; i++) {
        for (let j = i + 1; j < visible.length; j++) {
          const a = visible[i]
          const b = visible[j]
          const dx = a.sx - b.sx
          const dy = a.sy - b.sy
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist >= 120) continue

          const alpha = (1 - dist / 120) * 0.05
          const mx = (a.sx + b.sx) / 2
          const my = (a.sy + b.sy) / 2
          const md = Math.sqrt((mx - mouse.x) ** 2 + (my - mouse.y) ** 2)
          if (md < 200) {
            const boost = 1 - md / 200
            ctx.strokeStyle = `rgba(74, 108, 247, ${alpha + 0.1 * boost})`
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
          }
          ctx.beginPath()
          ctx.moveTo(a.sx, a.sy)
          ctx.lineTo(b.sx, b.sy)
          ctx.stroke()
        }
      }

      for (const { node, sx, sy } of visible) {
        const md = Math.sqrt((sx - mouse.x) ** 2 + (sy - mouse.y) ** 2)
        const near = md < 200
        const glow = near ? 1 - md / 200 : 0

        if (near) {
          ctx.beginPath()
          ctx.arc(sx, sy, 4 * node.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(74, 108, 247, ${0.04 * glow})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(sx, sy, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = near
          ? `rgba(74, 108, 247, ${0.25 + 0.25 * glow})`
          : `rgba(255, 255, 255, ${node.opacity})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafRef.current)
    }
  }, [seedGrid, spawnBurst])

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[1]" aria-hidden />
      <AnimatePresence>
        {!hintDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="pointer-events-none fixed bottom-20 left-1/2 z-[60] -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 backdrop-blur-xl">
              <motion.div
                className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#4a6cf7]" />
              </motion.div>
              <span className="text-xs tracking-wide text-[#888]">Click anywhere to create nodes</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(GalaxyNetworkCanvas)
