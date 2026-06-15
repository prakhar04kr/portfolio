import { useEffect, useState } from 'react'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const handler = (e) => {
      // update only when state actually changes
      setMatches((prev) => (prev === e.matches ? prev : e.matches))
    }

    // initialize from current value only when it differs to avoid unnecessary updates
    // Keep handler-only updates to avoid setState-in-effect complaints.
    // The initial state is already set from `useState(() => ...)`.

    // Safari fallback

    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else mq.removeListener(handler)
    }
  }, [query])

  return matches
}

export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1200px)')
  const isDesktop = useMediaQuery('(min-width: 1201px)')
  return { isMobile, isTablet, isDesktop }
}
