import { memo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExpandedContent } from '../expanded'
import { CARDS } from '../../data/cards'

function ExpandedOverlay({ activeId, onClose }) {
  const card = CARDS.find((c) => c.id === activeId)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (!card) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[5000] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          className="relative z-10 mx-4 h-[85vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            boxShadow: `0 0 80px 20px ${card.accent}26`,
          }}
          initial={{ scale: 0.3, rotateY: 90, opacity: 0 }}
          animate={{ scale: 1, rotateY: 0, opacity: 1 }}
          exit={{ scale: 0.3, rotateY: -90, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="absolute left-0 right-0 top-0 h-1"
            style={{ background: card.accent }}
          />
          <ExpandedContent cardId={activeId} onClose={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default memo(ExpandedOverlay)
