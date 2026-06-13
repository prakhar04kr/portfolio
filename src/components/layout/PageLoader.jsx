import { memo, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DEVELOPER } from '../../data/cards'

function PageLoader({ onComplete, reducedMotion }) {
  const [phase, setPhase] = useState(reducedMotion ? 'done' : 'black')

  useEffect(() => {
    if (reducedMotion) {
      onComplete?.()
      return
    }

    const timers = [
      setTimeout(() => setPhase('logo'), 300),
      setTimeout(() => setPhase('shrink'), 1000),
      setTimeout(() => setPhase('done'), 1600),
    ]

    return () => timers.forEach(clearTimeout)
  }, [reducedMotion, onComplete])

  useEffect(() => {
    if (phase === 'done') onComplete?.()
  }, [phase, onComplete])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#07071A]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            layoutId="brand-logo"
            className="text-center"
            initial={{ filter: 'blur(14px)', opacity: 0, scale: 1 }}
            animate={
              phase === 'logo'
                ? { filter: 'blur(0px)', opacity: 1, scale: 1, y: 0 }
                : phase === 'shrink'
                  ? { filter: 'blur(0px)', opacity: 1, scale: 0.55, y: -320 }
                  : { filter: 'blur(0px)', opacity: 1, scale: 0.55, y: -320 }
            }
            transition={
              phase === 'logo'
                ? { duration: 0.7, ease: 'easeOut' }
                : { type: 'spring', stiffness: 120, damping: 20 }
            }
          >
            <h1 className="text-4xl font-bold tracking-tight text-[#F2F2FF] md:text-5xl">
              {DEVELOPER.name}
            </h1>
            <p className="mt-2 text-sm text-[rgba(242,242,255,0.5)]">{DEVELOPER.title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default memo(PageLoader)
