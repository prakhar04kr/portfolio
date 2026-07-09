import { memo } from 'react'
import PortfolioCard from '../cards/PortfolioCard'
import { CARDS } from '../../data/cards'
import { FadeInSection } from '../motion/ScrollReveal'

function TabletGrid({ hoverId, onHover, onLeave, onClick, cardsVisible, setCursor }) {
  return (
    <FadeInSection className="px-6 pb-8 md:px-8" delay={0.1}>
      <div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6"
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
    </FadeInSection>
  )
}

export default memo(TabletGrid)
