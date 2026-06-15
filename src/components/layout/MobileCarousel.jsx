import { memo, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import PortfolioCard from '../cards/PortfolioCard'
import { CARDS } from '../../data/cards'

function MobileCarousel({ onClick, cardsVisible }) {
  const [featured, setFeatured] = useState(0)
  const [hoverId, setHoverId] = useState(null)
  const dragX = useMotionValue(0)
  const velocity = useRef(0)


  const goTo = useCallback(
    (index) => {
      const next = ((index % CARDS.length) + CARDS.length) % CARDS.length
      setFeatured(next)
      animate(dragX, 0, { type: 'spring', stiffness: 300, damping: 30 })
    },
    [dragX],
  )

  const handleDragEnd = (_, info) => {
    velocity.current = info.velocity.x
    if (info.offset.x < -80 || velocity.current < -500) {
      goTo(featured + 1)
    } else if (info.offset.x > 80 || velocity.current > 500) {
      goTo(featured - 1)
    } else {
      animate(dragX, 0, { type: 'spring', stiffness: 400, damping: 35 })
    }
  }

  return (
    <div className="px-4 py-20">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        style={{ x: dragX }}
        onDragEnd={handleDragEnd}
        className="mb-8 touch-pan-y"
      >
        <PortfolioCard
          card={CARDS[featured]}
          index={featured}
          isHovered={hoverId === CARDS[featured].id}
          onHover={setHoverId}
          onLeave={() => setHoverId(null)}
          onClick={onClick}
          animateIn={cardsVisible}
          layoutMode="mobile"
        />
      </motion.div>

      <div className="mb-6 flex justify-center gap-2">
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === featured ? 'w-6 bg-[#6C63FF]' : 'w-2 bg-white/20'
            }`}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>

      <div className="space-y-4">
        {CARDS.filter((_, i) => i !== featured).map((card, i) => (
          <PortfolioCard
            key={card.id}
            card={card}
            index={i}
            onClick={onClick}
            animateIn={cardsVisible}
            layoutMode="mobile"
          />
        ))}
      </div>
    </div>
  )
}

export default memo(MobileCarousel)
