import { memo, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { IconSearch, IconX } from '@tabler/icons-react'

const SEARCH_DATA = [
  { type: 'projects', title: 'YojnaConnect', desc: 'Government Scheme Discovery Platform', tags: ['React', 'Node.js', 'MySQL', 'Express'] },
  { type: 'projects', title: 'LayChess', desc: 'AI Chess Engine with Negamax & Alpha-Beta Pruning', tags: ['React', 'TypeScript', 'AI', 'Algorithms'] },
  { type: 'projects', title: 'TypeRacer', desc: 'Real-Time Multiplayer Typing Platform', tags: ['React', 'Socket.IO', 'Node.js', 'MySQL'] },
  { type: 'projects', title: 'Expense Tracker', desc: 'Java JSP Servlet Web Application', tags: ['Java', 'JSP', 'Servlet'] },
  { type: 'skills', title: 'React', desc: 'Frontend framework', tags: ['Frontend'] },
  { type: 'skills', title: 'TypeScript', desc: 'Typed JavaScript', tags: ['Frontend'] },
  { type: 'skills', title: 'Node.js', desc: 'Backend runtime', tags: ['Backend'] },
  { type: 'skills', title: 'MySQL', desc: 'Relational database', tags: ['Database'] },
  { type: 'skills', title: 'Java', desc: 'OOP language', tags: ['Backend'] },
  { type: 'skills', title: 'Socket.IO', desc: 'Real-time WebSockets', tags: ['Real-Time'] },
  { type: 'skills', title: 'Three.js', desc: '3D rendering library', tags: ['Frontend'] },
  { type: 'skills', title: 'Tailwind CSS', desc: 'Utility-first CSS', tags: ['Frontend'] },
  { type: 'certifications', title: 'Google AI Essentials', desc: 'Google', tags: ['AI', 'Google'] },
  { type: 'certifications', title: 'Google Prompting Essentials', desc: 'Google', tags: ['AI', 'Google'] },
  { type: 'certifications', title: 'Google Cybersecurity Professional Certificate', desc: 'Google', tags: ['Security', 'Google'] },
  { type: 'certifications', title: 'Google Student Ambassador', desc: 'Google', tags: ['Community', 'Google'] },
  { type: 'certifications', title: 'Data Analysis with Python', desc: 'IBM', tags: ['Data', 'Python', 'IBM'] },
  { type: 'certifications', title: 'Python 101 for Data Science', desc: 'IBM', tags: ['Python', 'IBM'] },
  { type: 'certifications', title: 'Full Stack Development MERN', desc: 'Algoxfusion', tags: ['MERN', 'Full Stack'] },
  { type: 'casestudies', title: 'YojnaConnect Case Study', desc: 'GovTech architecture & engineering breakdown', tags: ['GovTech', 'Full Stack'] },
  { type: 'casestudies', title: 'TypeRacer Case Study', desc: 'Real-time multiplayer system design', tags: ['Real-Time', 'WebSocket'] },
  { type: 'casestudies', title: 'LayChess Case Study', desc: 'AI chess engine architecture', tags: ['AI', 'Algorithms'] },
  { type: 'casestudies', title: 'KeyForge Case Study', desc: 'AI-powered multiplayer typing platform', tags: ['AI', 'Socket.IO', 'Gemini'] },
]

const TYPE_COLORS = {
  projects: '#00D9FF',
  skills: '#FF6B6B',
  certifications: '#6BCB77',
  casestudies: '#A855F7',
}

function highlight(text, query) {
  if (!query) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-[#6C63FF]/40 text-white rounded px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  )
}

function SearchModal({ isOpen, onClose }) {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const results = query.trim().length > 0
    ? SEARCH_DATA.filter((item) => {
        const q = query.toLowerCase()
        return (
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
        )
      })
    : []

  const grouped = results.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = []
    acc[item.type].push(item)
    return acc
  }, {})

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-1/2 top-[12%] z-[2001] w-full max-w-lg -translate-x-1/2 px-4"
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="overflow-hidden rounded-2xl border border-white/10"
              style={{ background: 'rgba(10,10,30,0.95)' }}
            >
              <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3">
                <IconSearch size={18} className="text-white/40 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('search.placeholder')}
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                  autoComplete="off"
                  spellCheck={false}
                />
                <button
                  onClick={onClose}
                  className="text-white/30 hover:text-white/70 transition-colors"
                  aria-label="Close search"
                >
                  <IconX size={18} />
                </button>
              </div>

              <div className="overflow-y-auto" style={{ maxHeight: '60vh' }}>
                {query.trim().length === 0 && (
                  <div className="px-4 py-10 text-center text-sm text-white/30">
                    {t('search.label')}
                  </div>
                )}

                {query.trim().length > 0 && results.length === 0 && (
                  <div className="px-4 py-10 text-center text-sm text-white/30">
                    {t('search.noResults')}
                  </div>
                )}

                {Object.entries(grouped).map(([type, items]) => (
                  <div key={type} className="px-2 py-2">
                    <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                      {t(`search.categories.${type}`)}
                    </div>
                    {items.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-white/5 cursor-default transition-colors"
                      >
                        <span
                          className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full"
                          style={{ background: TYPE_COLORS[type] }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white">
                            {highlight(item.title, query)}
                          </div>
                          <div className="text-[12px] text-white/40">
                            {highlight(item.desc, query)}
                          </div>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full px-1.5 py-0.5 text-[10px]"
                                style={{ background: `${TYPE_COLORS[type]}18`, color: TYPE_COLORS[type] }}
                              >
                                {highlight(tag, query)}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default memo(SearchModal)
