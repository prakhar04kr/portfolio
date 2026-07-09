import { memo } from 'react'
import PortfolioCard from '../cards/PortfolioCard'
import { CARDS } from '../../data/cards'

function TabletGrid({ hoverId, onHover, onLeave, onClick, setCursor }) {
  return (
    <section className="px-6 pb-8 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6">
        {CARDS.map((card, i) => (
          <PortfolioCard
            key={card.id}
            card={card}
            index={i}
            isHovered={hoverId === card.id}
            isDimmed={hoverId && hoverId !== card.id}
            onHover={onHover}
            onLeave={onLeave}
            onClick={onClick}
            animateIn={i < 4}
            layoutMode="tablet"
            setCursor={setCursor}
          />
        ))}
      </div>
    </section>
  )
}

export default memo(TabletGrid)
