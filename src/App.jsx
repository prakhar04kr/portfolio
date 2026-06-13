import { useState, useCallback, useEffect, useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { GlobeProvider, useGlobe } from './context/GlobeContext'
import { useBreakpoint } from './hooks/useMediaQuery'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useLenis, gsap, ScrollTrigger } from './hooks/useLenis'
import { useCustomCursor } from './hooks/useCustomCursor'
import { CARDS } from './data/cards'

import PageLoader from './components/layout/PageLoader'
import Navbar from './components/layout/Navbar'
import Starfield from './components/background/Starfield'
import BackgroundOrbs from './components/background/BackgroundOrbs'
import CursorSpotlight from './components/background/CursorSpotlight'
import CustomCursor from './components/cursor/CustomCursor'
import ExpandedOverlay from './components/cards/ExpandedOverlay'
import TabletGrid from './components/layout/TabletGrid'
import MobileCarousel from './components/layout/MobileCarousel'
import IndexSection from './components/layout/IndexSection'
import PortfolioCard from './components/cards/PortfolioCard'

const GlobeScene = lazy(() => import('./components/globe/GlobeScene'))

function AppContent() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint()
  const reducedMotion = useReducedMotion()
  const { setScrollRotation, setFrozen, setHoverCard, rotateToCardIndex } = useGlobe()

  const [loaderDone, setLoaderDone] = useState(reducedMotion)
  const [cardsVisible, setCardsVisible] = useState(reducedMotion)
  const [starfieldVisible, setStarfieldVisible] = useState(reducedMotion)
  const [hoverId, setHoverId] = useState(null)
  const [activeId, setActiveId] = useState(null)
  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const scrollSectionRef = useRef(null)
  const cursorEnabled = isDesktop && !reducedMotion
  const { dotRef, ringRef, ringTextRef, setCursor } = useCustomCursor(cursorEnabled)

  useLenis(!reducedMotion && !isMobile)

  useEffect(() => {
    if (!loaderDone || reducedMotion) return

    const timer = setTimeout(() => setCardsVisible(true), 1700)
    const starTimer = setTimeout(() => setStarfieldVisible(true), 2200)
    return () => {
      clearTimeout(timer)
      clearTimeout(starTimer)
    }
  }, [loaderDone, reducedMotion])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isDesktop || reducedMotion) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: scrollSectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          setScrollRotation(self.progress * Math.PI * 2)
        },
      })
    })

    return () => ctx.revert()
  }, [isDesktop, reducedMotion, setScrollRotation])

  const handleHover = useCallback(
    (id) => {
      setHoverId(id)
      setHoverCard(id)
    },
    [setHoverCard],
  )

  const handleLeave = useCallback(() => {
    setHoverId(null)
    setHoverCard(null)
  }, [setHoverCard])

  const handleClick = useCallback(
    (id) => {
      setActiveId(id)
      setFrozen(true)
      setActiveSection(id)
    },
    [setFrozen],
  )

  const handleClose = useCallback(() => {
    setActiveId(null)
    setFrozen(false)
  }, [setFrozen])

  const handleNavClick = useCallback(
    (id) => {
      setActiveSection(id)
      const index = CARDS.findIndex((c) => c.id === id || c.navId === id)
      if (index >= 0) {
        rotateToCardIndex(index)
        if (isMobile || isTablet) {
          handleClick(CARDS[index].id)
        }
      }
    },
    [rotateToCardIndex, isMobile, isTablet, handleClick],
  )

  const handleIndexClick = useCallback(
    (id) => {
      const index = CARDS.findIndex((c) => c.id === id)
      if (index >= 0) rotateToCardIndex(index)
      handleClick(id)
    },
    [rotateToCardIndex, handleClick],
  )

  const showGlobe = isDesktop && !reducedMotion

  return (
    <div className="relative min-h-screen bg-[#07071A] text-[#F2F2FF]">
      {!loaderDone && (
        <PageLoader onComplete={() => setLoaderDone(true)} reducedMotion={reducedMotion} />
      )}

      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        setCursor={setCursor}
        scrolled={scrolled}
      />

      <CustomCursor
        dotRef={dotRef}
        ringRef={ringRef}
        ringTextRef={ringTextRef}
        enabled={cursorEnabled}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: starfieldVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Starfield particleCount={isMobile ? 80 : 200} />
      </motion.div>

      <BackgroundOrbs scrollY={scrollY} />
      <CursorSpotlight enabled={cursorEnabled && loaderDone} />

      {/* Globe / responsive layouts */}
      <main ref={scrollSectionRef} className="relative z-10">
        {showGlobe && (
          <section className="relative h-screen w-full">
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-[#6C63FF]" />
                </div>
              }
            >
              <GlobeScene
                hoverId={hoverId}
                activeId={activeId}
                cardsVisible={cardsVisible}
                onHover={handleHover}
                onLeave={handleLeave}
                onClick={handleClick}
                setCursor={setCursor}
              />
            </Suspense>
          </section>
        )}

        {isTablet && !reducedMotion && (
          <TabletGrid
            hoverId={hoverId}
            onHover={handleHover}
            onLeave={handleLeave}
            onClick={handleClick}
            cardsVisible={cardsVisible}
            setCursor={setCursor}
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

        {(showGlobe || reducedMotion) && (
          <IndexSection onCardClick={handleIndexClick} />
        )}
      </main>

      {/* Spacer for scroll-driven globe rotation on desktop */}
      {showGlobe && <div className="h-[100vh]" aria-hidden />}

      {activeId && <ExpandedOverlay activeId={activeId} onClose={handleClose} />}
    </div>
  )
}

export default function App() {
  return (
    <GlobeProvider>
      <AppContent />
    </GlobeProvider>
  )
}
