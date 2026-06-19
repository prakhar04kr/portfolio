import { memo, useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { IconSearch, IconX, IconMenu2, IconWorld } from '@tabler/icons-react'
import { DEVELOPER } from '../../data/cards'
import SearchModal from '../search/SearchModal'

const NAV_IDS = [
  { labelKey: 'nav.about', id: 'about' },
  { labelKey: 'nav.profile', id: 'profile' },
  { labelKey: 'nav.work', id: 'projects' },
  { labelKey: 'nav.skills', id: 'skills' },
  { labelKey: 'nav.resume', id: 'resume' },
  { labelKey: 'nav.contact', id: 'contact' },
]

const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'hi', label: 'HI', name: 'हिंदी' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'es', label: 'ES', name: 'Español' },
]

function LanguageSelector() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[12px] text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        aria-label="Change language"
        title="Language"
      >
        <IconWorld size={13} />
        <span>{current.label}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 z-[1100] overflow-hidden rounded-xl border border-white/10 py-1 shadow-2xl"
            style={{ background: 'rgba(10,10,30,0.97)', minWidth: 140 }}
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-[13px] transition-colors hover:bg-white/8 ${
                  i18n.language === lang.code ? 'text-white' : 'text-white/50'
                }`}
              >
                <span className="w-6 text-center text-[11px] font-bold opacity-60">{lang.label}</span>
                <span>{lang.name}</span>
                {i18n.language === lang.code && (
                  <span className="ml-auto text-[10px] text-[#6C63FF]">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileMenu({ activeSection, onNavClick, onClose, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 top-0 z-[999] pt-16"
      style={{ pointerEvents: 'auto' }}
    >
      <div
        className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        style={{ background: 'rgba(7,7,26,0.97)' }}
      >
        <nav className="flex flex-col">
          {NAV_IDS.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.2 }}
              onClick={() => {
                onNavClick(item.id)
                onClose()
              }}
              className={`flex items-center gap-3 border-b border-white/5 px-5 py-4 text-left text-[15px] font-medium transition-colors last:border-0 ${
                activeSection === item.id
                  ? 'bg-[#6C63FF]/10 text-white'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              {activeSection === item.id && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#6C63FF]" />
              )}
              {t(item.labelKey)}
            </motion.button>
          ))}
        </nav>
        <div className="flex items-center justify-between border-t border-white/8 px-5 py-4">
          <span className="text-[12px] text-white/30">Language</span>
          <LanguageSelector />
        </div>
      </div>
    </motion.div>
  )
}

function Navbar({ activeSection, onNavClick, setCursor, scrolled }) {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <>
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
          className={`glass-nav flex items-center justify-between gap-2 px-4 py-2.5 transition-all duration-500 ${
            scrolled ? 'rounded-none border-x-0 border-t-0' : 'rounded-full'
          }`}
          style={{
            borderColor: scrolled ? 'rgba(255,255,255,0.18)' : undefined,
            width: scrolled ? '100%' : 'auto',
            minWidth: scrolled ? '100%' : undefined,
          }}
        >
          <motion.div layoutId="brand-logo" className="flex items-center gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#6C63FF] text-xs font-bold text-white">
              {DEVELOPER.monogram}
            </div>
            {!scrolled && (
              <span className="hidden text-sm font-semibold text-white md:inline">{DEVELOPER.name}</span>
            )}
          </motion.div>

          <div className="relative hidden items-center gap-1 md:flex">
            {NAV_IDS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                onMouseEnter={() => setCursor?.('text')}
                onMouseLeave={() => setCursor?.('default')}
                className={`relative px-3 py-1.5 text-[13px] transition-colors ${
                  activeSection === item.id ? 'text-white' : 'text-[rgba(242,242,255,0.5)] hover:text-white'
                }`}
              >
                {t(item.labelKey)}
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
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[12px] text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Search portfolio"
              title="Search (⌘K)"
            >
              <IconSearch size={13} />
              <span className="hidden sm:inline">Search</span>
            </button>

            <div className="hidden md:block">
              <LanguageSelector />
            </div>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <IconX size={16} /> : <IconMenu2 size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileMenu
              activeSection={activeSection}
              onNavClick={onNavClick}
              onClose={() => setMobileMenuOpen(false)}
              t={t}
            />
          </>
        )}
      </AnimatePresence>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

export default memo(Navbar)
