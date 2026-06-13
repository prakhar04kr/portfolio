import { memo } from 'react'

function CustomCursor({ dotRef, ringRef, ringTextRef, enabled }) {
  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white will-transform"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 border border-white/35 will-transform"
        aria-hidden
      />
      <div
        ref={ringTextRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 text-[10px] font-medium text-white/80 opacity-0 will-transform"
        aria-hidden
      >
        Open →
      </div>
    </>
  )
}

export default memo(CustomCursor)
