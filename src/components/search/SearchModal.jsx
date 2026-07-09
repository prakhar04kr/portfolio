import { memo, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconSearch, IconX } from '@tabler/icons-react'

const SEARCH_DATA = [
  { type: 'projects', title: 'Marg-Darshak', desc: 'AI Navigation for the Visually Impaired', tags: ['Python', 'YOLOv8', 'OpenCV', 'Flask'] },
  { type: 'projects', title: 'Smart Document Assistant', desc: 'RAG-Powered PDF Chatbot', tags: ['LangChain', 'ChromaDB', 'Gemini', 'Gradio'] },
  { type: 'projects', title: 'Audio Transcription System', desc: 'Full-Stack Speech-to-Text App', tags: ['React', 'FastAPI', 'Faster-Whisper'] },
  { type: 'projects', title: 'ShareBite', desc: 'Surplus Food Redistribution Platform', tags: ['React', 'Firebase', 'Gemini', 'Node.js'] },
  { type: 'skills', title: 'Python', desc: 'Primary language for AI/ML', tags: ['Languages'] },
  { type: 'skills', title: 'LangChain', desc: 'RAG and LLM orchestration', tags: ['Frameworks'] },
  { type: 'skills', title: 'RAG', desc: 'Retrieval-Augmented Generation', tags: ['AI/ML'] },
  { type: 'skills', title: 'Azure AI', desc: 'Microsoft Azure AI services', tags: ['Cloud'] },
  { type: 'skills', title: 'YOLOv8', desc: 'Real-time object detection', tags: ['Computer Vision'] },
  { type: 'skills', title: 'React.js', desc: 'Frontend framework', tags: ['Web'] },
  { type: 'skills', title: 'FastAPI', desc: 'Async Python API framework', tags: ['Backend'] },
  { type: 'certifications', title: 'Azure AI Apps and Agents Developer', desc: 'Microsoft AI-103', tags: ['Azure', 'Microsoft'] },
  { type: 'certifications', title: 'Oracle GenAI Professional', desc: 'Oracle Cloud Infrastructure', tags: ['Oracle', 'GenAI'] },
  { type: 'certifications', title: 'IBM AI Developer', desc: 'IBM', tags: ['IBM', 'AI'] },
  { type: 'certifications', title: 'Health-Hack 2025 Silver Medal', desc: '5th of 236 teams', tags: ['Hackathon', 'Award'] },
  { type: 'certifications', title: 'Google Responsible AI', desc: 'Google Cloud', tags: ['Google', 'Ethics'] },
  { type: 'casestudies', title: 'Marg-Darshak Case Study', desc: 'Computer vision navigation architecture', tags: ['YOLOv8', 'Computer Vision'] },
  { type: 'casestudies', title: 'Smart Document Assistant Case Study', desc: 'RAG pipeline architecture', tags: ['RAG', 'LangChain'] },
  { type: 'casestudies', title: 'ShareBite Case Study', desc: 'Food redistribution platform', tags: ['Firebase', 'Gemini'] },
]

const TYPE_COLORS = {
  projects: '#00D9FF',
  skills: '#FF6B6B',
  certifications: '#6BCB77',
  casestudies: '#A855F7',
}

const TYPE_LABELS = {
  projects: 'Projects',
  skills: 'Skills',
  certifications: 'Certifications',
  casestudies: 'Case Studies',
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
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
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
                  placeholder="Search projects, skills, certifications..."
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
                    Search Portfolio
                  </div>
                )}

                {query.trim().length > 0 && results.length === 0 && (
                  <div className="px-4 py-10 text-center text-sm text-white/30">
                    No results found
                  </div>
                )}

                {Object.entries(grouped).map(([type, items]) => (
                  <div key={type} className="px-2 py-2">
                    <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                      {TYPE_LABELS[type]}
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
