import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArchitectureFlow from './ArchitectureFlow'

const CASE_STUDIES = [
  {
    key: 'margdarshak',
    title: 'Marg-Darshak',
    fullTitle: 'Marg-Darshak — AI Navigation Device for the Visually Impaired',
    domain: 'Computer Vision • Accessibility • Edge AI',
    accent: '#6BCB77',
    overview:
      'Marg-Darshak is a real-time AI navigation system that streams live video from a Raspberry Pi to a Flask + YOLOv8 server for hazard detection including cars, stairs, and potholes with distance estimation at 15 FPS.',
    problem:
      'Visually impaired individuals face significant navigation challenges detecting dynamic hazards in real-world environments with limited affordable assistive technology solutions.',
    solution:
      'Built an edge-to-cloud pipeline with YOLOv8 object detection, distance estimation, and multi-threaded TTS voice alerts. Microservice architecture enables independent component testing and stable video feed performance.',
    tech: {
      'Edge Device': ['Raspberry Pi', 'Camera Module', 'Live Video Stream'],
      'AI / CV': ['YOLOv8', 'OpenCV', 'Distance Estimation'],
      Backend: ['Flask', 'Python', 'Multi-threading'],
      Output: ['TTS Voice Alerts', 'Real-time Hazard Warnings'],
    },
    features: [
      'Real-time Hazard Detection',
      'Distance Estimation',
      'TTS Voice Alerts',
      '15 FPS Processing',
      'Microservice Architecture',
      'Concurrent Thread Management',
    ],
    challenges: [
      'Maintaining stable video feed under load',
      'Low-latency inference on edge hardware',
      'Multi-threaded TTS without blocking video',
      'Accurate distance estimation',
      'Microservice integration testing',
    ],
    unique: [
      'Health-Hack 2025 Silver Medal (5th/236)',
      'Real-world accessibility impact',
      'Edge AI + cloud hybrid design',
      'Johns Hopkins collaboration',
    ],
    future: [
      'Indoor Navigation',
      'Obstacle Path Planning',
      'Wearable Form Factor',
      'Offline Mode',
      'Multi-language TTS',
    ],
    learning: [
      'Real-time computer vision pipelines',
      'Edge device deployment',
      'Multi-threaded system design',
      'Accessibility-focused engineering',
    ],
  },
  {
    key: 'smartdoc',
    title: 'Smart Document Assistant',
    fullTitle: 'Smart Document Assistant — RAG-Powered PDF Chatbot',
    domain: 'Generative AI • RAG • Document Intelligence',
    accent: '#00D9FF',
    overview:
      'A production RAG chatbot that grounds answers in uploaded PDF documents using HuggingFace embeddings, ChromaDB retrieval, and Gemini API — deployed on Hugging Face Spaces handling 100+ daily queries.',
    problem:
      'LLMs hallucinate when answering questions about private documents. Users need trustworthy, source-grounded answers from PDFs up to 200 pages without expensive infrastructure.',
    solution:
      'Implemented a full RAG pipeline: PDF extraction → chunking → HuggingFace embeddings → ChromaDB vector store → Gemini generation with AI safety guardrails and bias mitigation.',
    tech: {
      'RAG Pipeline': ['LangChain', 'PDF Extraction', 'Chunking'],
      Embeddings: ['HuggingFace Transformers', 'ChromaDB'],
      LLM: ['Gemini API', 'Prompt Engineering'],
      Deployment: ['Gradio', 'Hugging Face Spaces'],
    },
    features: [
      'PDF Upload up to 10 MB',
      'Source-Grounded Answers',
      'Hallucination Reduction',
      'AI Safety Guardrails',
      'Bias Mitigation',
      '100+ Daily Queries',
    ],
    challenges: [
      'Chunking strategy for long documents',
      'Retrieval relevance tuning',
      'Response filtering and validation',
      'Deployment scaling on HF Spaces',
      'Handling diverse PDF formats',
    ],
    unique: [
      'Production deployment with real users',
      'Full RAG stack from scratch',
      'AI ethics guardrails built-in',
      'Handles ~200 page documents',
    ],
    future: [
      'Multi-document Knowledge Base',
      'Citation Highlighting',
      'Azure OpenAI Integration',
      'Document Comparison',
      'API Access Layer',
    ],
    learning: [
      'RAG architecture design',
      'Vector database optimization',
      'LLM safety and guardrails',
      'Cloud deployment at scale',
    ],
  },
  {
    key: 'audiotranscription',
    title: 'Audio Transcription',
    fullTitle: 'Audio Transcription System — Full-Stack Speech-to-Text',
    domain: 'Speech AI • Full-Stack • Async Processing',
    accent: '#A855F7',
    overview:
      'A full-stack speech-to-text application with React frontend and async FastAPI backend using Faster-Whisper, handling MP3/WAV/M4A files up to 10 minutes without server timeouts.',
    problem:
      'Synchronous audio processing causes server timeouts on longer clips. Users need a responsive interface that handles multiple audio formats reliably.',
    solution:
      'Built an async FastAPI backend with non-blocking Faster-Whisper inference and a React frontend, deployed to Hugging Face Spaces for public access.',
    tech: {
      Frontend: ['React', 'File Upload UI', 'Progress Tracking'],
      Backend: ['FastAPI', 'Async Processing', 'Faster-Whisper'],
      Formats: ['MP3', 'WAV', 'M4A'],
      Deployment: ['Hugging Face Spaces', 'Docker'],
    },
    features: [
      'Multi-format Audio Support',
      'Async Non-blocking Processing',
      'Up to 10 Minute Clips',
      'No Server Timeouts',
      'Clean React UI',
      'HF Spaces Deployment',
    ],
    challenges: [
      'Async job queue design',
      'Memory management for audio files',
      'Format conversion edge cases',
      'Frontend progress feedback',
      'Cold start on HF Spaces',
    ],
    unique: [
      'Faster-Whisper for speed',
      'True async architecture',
      'Production HF Spaces deploy',
      'Multi-format support',
    ],
    future: [
      'Speaker Diarization',
      'Timestamp Alignment',
      'Batch Processing',
      'Translation Layer',
      'Real-time Streaming',
    ],
    learning: [
      'Async Python with FastAPI',
      'Speech-to-text model deployment',
      'Full-stack audio processing',
      'Cloud inference optimization',
    ],
  },
  {
    key: 'sharebite',
    title: 'ShareBite',
    fullTitle: 'ShareBite — Surplus Food Redistribution Platform',
    domain: 'Social Impact • Full-Stack • AI Metadata Extraction',
    accent: '#FF922B',
    overview:
      'A surplus food redistribution web app with real-time donation feeds, RBAC, and a Gemini-powered AI microservice that automatically extracts food metadata from user uploads.',
    problem:
      'Food waste and hunger coexist in communities. Manual data entry for food donations is slow, error-prone, and discourages participation in redistribution platforms.',
    solution:
      'Built a React + Firebase platform with Node.js/Express AI microservice using Gemini API for automatic metadata extraction, plus Cloudinary image processing and LocationIQ geocoding.',
    tech: {
      Frontend: ['React.js', 'Firebase Auth', 'Real-time Feeds'],
      Backend: ['Node.js', 'Express', 'Gemini 3.5 API'],
      Services: ['Cloudinary', 'LocationIQ', 'Firebase DB'],
      Patterns: ['RBAC', 'DB Transactions', 'Microservices'],
    },
    features: [
      'Real-time Donation Feeds',
      'Role-Based Access Control',
      'AI Metadata Extraction',
      'Image Processing',
      'Geocoding Integration',
      'Concurrent Claim Prevention',
    ],
    challenges: [
      'Preventing concurrent claim errors',
      'AI metadata accuracy',
      'Real-time feed synchronization',
      'Image upload optimization',
      'Location-based matching',
    ],
    unique: [
      'Social impact use case',
      'AI streamlines data entry',
      'Full microservice architecture',
      'Production-grade transactions',
    ],
    future: [
      'Smart Matching Algorithm',
      'Expiry Prediction',
      'Mobile App',
      'NGO Dashboard',
      'Impact Analytics',
    ],
    learning: [
      'Firebase real-time architecture',
      'AI microservice design',
      'Transaction-safe DB operations',
      'Social impact engineering',
    ],
  },
]

function Badge({ text, color }) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium"
      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
    >
      {text}
    </span>
  )
}

function SectionBlock({ title, children, accent }) {
  return (
    <div className="mb-5">
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>
        {title}
      </h4>
      {children}
    </div>
  )
}

function CaseStudyCard({ study }) {
  const [expanded, setExpanded] = useState(false)
  const { key, fullTitle, domain, accent, overview, problem, solution, tech, features, challenges, unique, future, learning } = study

  return (
    <motion.div
      layout
      className="rounded-2xl border overflow-hidden"
      style={{
        background: 'rgba(7,7,26,0.7)',
        borderColor: expanded ? `${accent}40` : 'rgba(255,255,255,0.08)',
        boxShadow: expanded ? `0 0 40px ${accent}18` : 'none',
      }}
      transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span
              className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
              style={{ background: `${accent}20`, color: accent }}
            >
              Domain
            </span>
            <span className="text-[11px] text-white/40">{domain}</span>
          </div>
          <h3 className="text-lg font-bold text-white leading-tight">{fullTitle}</h3>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 flex-shrink-0 text-white/40 group-hover:text-white/70 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8">
              <div
                className="h-px w-full mb-6"
                style={{ background: `linear-gradient(to right, ${accent}40, transparent)` }}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <SectionBlock title="Overview" accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{overview}</p>
                  </SectionBlock>

                  <SectionBlock title="Problem" accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{problem}</p>
                  </SectionBlock>

                  <SectionBlock title="Solution" accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{solution}</p>
                  </SectionBlock>

                  <SectionBlock title="Tech Stack" accent={accent}>
                    <div className="space-y-2">
                      {Object.entries(tech).map(([cat, items]) => (
                        <div key={cat}>
                          <span className="text-[11px] text-white/30 mr-2">{cat}:</span>
                          <span className="inline-flex flex-wrap gap-1">
                            {items.map((item) => (
                              <Badge key={item} text={item} color={accent} />
                            ))}
                          </span>
                        </div>
                      ))}
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Key Features" accent={accent}>
                    <ul className="space-y-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                          <span style={{ color: accent }} className="mt-1 text-xs leading-none">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>
                </div>

                <div>
                  <SectionBlock title="Architecture" accent={accent}>
                    <div
                      className="rounded-xl border p-4"
                      style={{ background: `${accent}08`, borderColor: `${accent}20` }}
                    >
                      <ArchitectureFlow projectKey={key} color={accent} isVisible={expanded} />
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Challenges" accent={accent}>
                    <ul className="space-y-1">
                      {challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-white/60">
                          <span style={{ color: `${accent}80` }} className="mt-0.5 text-xs">⚡</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>

                  <SectionBlock title="What Makes It Unique" accent={accent}>
                    <div className="flex flex-wrap gap-1.5">
                      {unique.map((u) => (
                        <span
                          key={u}
                          className="rounded-lg px-2.5 py-1 text-[11px] text-white/70 border"
                          style={{ borderColor: `${accent}25`, background: `${accent}10` }}
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Future Plans" accent={accent}>
                    <div className="flex flex-wrap gap-1.5">
                      {future.map((f) => (
                        <span key={f} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/40">
                          {f}
                        </span>
                      ))}
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Key Learnings" accent={accent}>
                    <ul className="space-y-1">
                      {learning.map((l) => (
                        <li key={l} className="flex items-start gap-2 text-sm text-white/60">
                          <span style={{ color: accent }} className="mt-1 text-xs">→</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CaseStudiesSection() {
  return (
    <section className="relative z-10 px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
            Deep Dives
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Engineering Case Studies
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-white/50 leading-relaxed">
            A detailed look at the architecture, decisions, and trade-offs behind selected projects.
          </p>
        </motion.div>

        <div className="space-y-4">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(CaseStudiesSection)
