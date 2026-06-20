import { useState, useCallback, useEffect } from 'react'

import { CARDS } from './data/cards'
import { useBreakpoint } from './hooks/useMediaQuery'
import { useReducedMotion } from './hooks/useReducedMotion'

import Navbar from './components/layout/Navbar'
import ExpandedOverlay from './components/cards/ExpandedOverlay'
import TabletGrid from './components/layout/TabletGrid'
import MobileCarousel from './components/layout/MobileCarousel'
import PortfolioCard from './components/cards/PortfolioCard'
import OpenToWorkWidget from './components/sections/OpenToWorkWidget'
import CaseStudiesSection from './components/sections/CaseStudiesSection'

function AppContent() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint()
  const reducedMotion = useReducedMotion()

  const [loaderDone] = useState(true)
  const [hoverId, setHoverId] = useState(null)
  const [activeId, setActiveId] = useState(null)
  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  const [cardsVisible, setCardsVisible] = useState(reducedMotion)
  useEffect(() => {
    const id = window.requestAnimationFrame(() => setCardsVisible(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleHover = useCallback((id) => setHoverId(id), [])
  const handleLeave = useCallback(() => setHoverId(null), [])

  const handleClick = useCallback((id) => {
    setActiveId(id)
    setActiveSection(id)
  }, [])

  const handleClose = useCallback(() => setActiveId(null), [])

  const handleNavClick = useCallback(
    (id) => {
      setActiveSection(id)
      const index = CARDS.findIndex((c) => c.id === id || c.navId === id)
      if (index >= 0) handleClick(CARDS[index].id)
    },
    [handleClick],
  )

  return (
    <div className="relative min-h-screen">
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        setCursor={undefined}
        scrolled={scrolled}
      />

      <main className="relative z-10">
        {(isTablet || isDesktop) && !reducedMotion && (
          <TabletGrid
            hoverId={hoverId}
            onHover={handleHover}
            onLeave={handleLeave}
            onClick={handleClick}
            cardsVisible={cardsVisible}
            setCursor={undefined}
          />
        )}

        {isMobile && (
          <MobileCarousel onClick={handleClick} cardsVisible={cardsVisible || loaderDone} />
        )}

        {reducedMotion && (
          <div className="grid grid-cols-1 gap-6 px-6 py-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CARDS.map((card, i) => (
              <PortfolioCard
                key={card.id}
                card={card}
                index={i}
                onClick={handleClick}
                animateIn={false}
                layoutMode={isMobile ? 'mobile' : 'tablet'}
              />
            ))}
          </div>
        )}

        <OpenToWorkWidget />
        <CaseStudiesSection />
      </main>

      {activeId && <ExpandedOverlay activeId={activeId} onClose={handleClose} />}
    </div>
  )
}

export default function App() {
  return <AppContent />
}
