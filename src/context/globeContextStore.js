import { createContext, useRef, useCallback } from 'react'

export const GlobeContext = createContext(null)

export function GlobeProvider({ children }) {
  const stateRef = useRef({
    scrollRotation: 0,
    cursorTargetX: 0,
    cursorTargetY: 0,
    frozen: false,
    activeCard: null,
    hoverCard: null,
    rotateToCard: null,
    autoRotate: true,
  })

  const setScrollRotation = useCallback((v) => {
    stateRef.current.scrollRotation = v
  }, [])

  const setCursorTarget = useCallback((x, y) => {
    stateRef.current.cursorTargetX = x
    stateRef.current.cursorTargetY = y
  }, [])

  const setFrozen = useCallback((v) => {
    stateRef.current.frozen = v
  }, [])

  const setActiveCard = useCallback((id) => {
    stateRef.current.activeCard = id
  }, [])

  const setHoverCard = useCallback((id) => {
    stateRef.current.hoverCard = id
  }, [])

  const rotateToCardIndex = useCallback((index) => {
    stateRef.current.rotateToCard = index
  }, [])

  const setAutoRotate = useCallback((v) => {
    stateRef.current.autoRotate = v
  }, [])

  return (
    <GlobeContext.Provider
      value={{
        stateRef,
        setScrollRotation,
        setCursorTarget,
        setFrozen,
        setActiveCard,
        setHoverCard,
        rotateToCardIndex,
        setAutoRotate,
      }}
    >
      {children}
    </GlobeContext.Provider>
  )
}
