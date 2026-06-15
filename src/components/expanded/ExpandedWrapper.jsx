import { memo, useEffect, useRef } from 'react'
import gsap from 'gsap'

function useTextReveal(containerRef, active) {
  useEffect(() => {
    if (!active || !containerRef.current) return


    const headings = containerRef.current.querySelectorAll('[data-reveal-heading]')
    const lines = containerRef.current.querySelectorAll('[data-reveal-line]')
    const counters = containerRef.current.querySelectorAll('[data-count-up]')

    headings.forEach((heading) => {
      const text = heading.textContent
      heading.innerHTML = ''
      text.split('').forEach((char) => {
        const span = document.createElement('span')
        span.className = 'split-char'
        span.textContent = char === ' ' ? '\u00A0' : char
        heading.appendChild(span)
      })
      gsap.to(heading.querySelectorAll('.split-char'), {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.018,
        ease: 'power3.out',
      })
    })

    gsap.to(lines, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.04,
      ease: 'power3.out',
      delay: 0.2,
    })

    counters.forEach((el) => {
      const target = parseInt(el.dataset.countUp, 10)
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          delay: 0.3,
        },
      )
    })
  }, [active, containerRef])
}



export function useSkillBars(containerRef, active) {
  useEffect(() => {
    if (!active || !containerRef?.current) return

    const bars = containerRef.current.querySelectorAll('[data-skill-bar]')
    bars.forEach((bar) => {
      const target = Number(bar.dataset.skillBar || 0)
      // Set initial to 0 then animate to target
      bar.style.width = '0%'
      gsap.to(bar, {
        width: `${target}%`,
        duration: 1.1,
        ease: 'power3.out',
      })
    })
  }, [containerRef, active])
}

const ExpandedWrapper = memo(function ExpandedWrapper({ children, title, accent, onClose }) {
  const ref = useRef(null)
  useTextReveal(ref, true)


  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div ref={ref} className="h-full overflow-y-auto p-6 md:p-10" data-lenis-prevent>
      <h2
        data-reveal-heading
        className="mb-6 text-3xl font-bold tracking-tight text-[#F2F2FF] md:text-4xl"
        style={{ color: accent }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
})


export default ExpandedWrapper

