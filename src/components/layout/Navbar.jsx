import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { DEVELOPER } from '../../data/cards'


const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Profile', id: 'profile' },
  { label: 'Work', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

function Navbar({ activeSection, onNavClick, setCursor, scrolled }) {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <motion.header
      className={`fixed left-1/2 z-[1000] -translate-x-1/2 transition-all duration-500 ${
        scrolled ? 'top-0 w-full' : 'top-4 w-auto max-w-[90vw]'
      }`}
      initial={false}
      animate={{
        paddingTop: scrolled ? 12 : 0,
        paddingLeft: scrolled ? 24 : 0,
        paddingRight: scrolled ? 24 : 0,
      }}
    >
      <nav
        className={`glass-nav flex items-center justify-between gap-4 px-4 py-2.5 transition-all duration-500 ${
          scrolled ? 'rounded-none border-x-0 border-t-0' : 'rounded-full'
        }`}
        style={{
          borderColor: scrolled ? 'rgba(255,255,255,0.18)' : undefined,
          width: scrolled ? '100%' : 'auto',
          minWidth: scrolled ? '100%' : '680px',
        }}
      >
        <motion.div layoutId="brand-logo" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6C63FF] text-xs font-bold text-white">
            {DEVELOPER.monogram}
          </div>
          {!scrolled && (
            <span className="hidden text-sm font-semibold text-white md:inline">{DEVELOPER.name}</span>
          )}
        </motion.div>

        <div className="relative hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              onMouseEnter={() => setCursor?.('text')}
              onMouseLeave={() => setCursor?.('default')}
              className={`relative px-3 py-1.5 text-[13px] transition-colors ${
                activeSection === item.id ? 'text-white' : 'text-[rgba(242,242,255,0.5)] hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-0.5 left-2 right-2 h-0.5 rounded-full bg-[#6C63FF]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onMouseEnter={() => setCursor?.('button')}
            onMouseLeave={() => setCursor?.('default')}
            className="rounded-full bg-[#6C63FF] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-transform hover:scale-105"
          >
            Hire Me
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            onMouseEnter={() => setCursor?.('button')}
            onMouseLeave={() => setCursor?.('default')}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm"
            aria-label="Toggle theme"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </motion.header>
  )
}

export default memo(Navbar)
