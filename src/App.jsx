import { useState, useCallback, useEffect } from 'react'

import { CARDS, DEVELOPER } from './data/cards'
import { useBreakpoint } from './hooks/useMediaQuery'
import { useReducedMotion } from './hooks/useReducedMotion'

import Navbar from './components/layout/Navbar'
import ExpandedOverlay from './components/cards/ExpandedOverlay'
import TabletGrid from './components/layout/TabletGrid'
import MobileCarousel from './components/layout/MobileCarousel'
import PortfolioCard from './components/cards/PortfolioCard'
import OpenToWorkWidget from './components/sections/OpenToWorkWidget'
import CaseStudiesSection from './components/sections/CaseStudiesSection'
import CertificateFlowSection from './components/sections/CertificateFlowSection'
import MeshBackground from './components/background/MeshBackground'
import { SlideUpReveal } from './components/motion/ScrollReveal'

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
      if (id === 'certificates') {
        setActiveSection(id)
        document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })
        return
      }
      setActiveSection(id)
      const index = CARDS.findIndex((c) => c.id === id || c.navId === id)
      if (index >= 0) handleClick(CARDS[index].id)
    },
    [handleClick],
  )

  return (
    <div className="relative min-h-screen">
      {!reducedMotion && <MeshBackground />}

      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        setCursor={undefined}
        scrolled={scrolled}
      />

      <main className="relative z-10">
        <section className="px-6 pb-4 pt-28 md:px-8 md:pt-32">
          <div className="mx-auto max-w-5xl text-center">
            <SlideUpReveal delay={0.05}>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/35">
                AI/ML Engineer &amp; Full-Stack Developer
              </p>
            </SlideUpReveal>
            <SlideUpReveal delay={0.15}>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {DEVELOPER.name}
              </h1>
            </SlideUpReveal>
            <SlideUpReveal delay={0.25}>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
                {DEVELOPER.shortBio}
              </p>
            </SlideUpReveal>
          </div>
        </section>

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
          <div className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        <CertificateFlowSection />
        <CaseStudiesSection />
      </main>

      {activeId && <ExpandedOverlay activeId={activeId} onClose={handleClose} />}
    </div>
  )
}

export default function App() {
  return <AppContent />
}
