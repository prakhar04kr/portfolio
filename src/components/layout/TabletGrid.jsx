import { memo } from 'react'
import PortfolioCard from '../cards/PortfolioCard'
import { CARDS } from '../../data/cards'

function TabletGrid({ hoverId, onHover, onLeave, onClick, cardsVisible, setCursor }) {
  return (
    <div
      className="grid grid-cols-2 gap-6 px-6 py-24"
      style={{ perspective: '1200px' }}
    >
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
          animateIn={cardsVisible}
          layoutMode="tablet"
          setCursor={setCursor}
        />
      ))}
    </div>
  )
}

export default memo(TabletGrid)
