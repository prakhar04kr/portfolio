import { memo } from 'react'
import { motion } from 'framer-motion'

function FlowNode({ label, sublabel, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="relative flex flex-col items-center"
    >
      <div
        className="rounded-xl border px-4 py-2.5 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{
          background: `${color}12`,
          borderColor: `${color}40`,
          boxShadow: `0 0 0 0 ${color}00`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 16px 2px ${color}30`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 0 ${color}00`
        }}
      >
        <span className="block text-[12px] font-semibold text-white">{label}</span>
        {sublabel && (
          <span className="block text-[10px] text-white/40 mt-0.5">{sublabel}</span>
        )}
      </div>
    </motion.div>
  )
}

function FlowConnector({ color, delay = 0 }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      <motion.div
        className="w-px"
        style={{ background: `linear-gradient(to bottom, ${color}60, ${color}20)` }}
        initial={{ height: 0 }}
        animate={{ height: 20 }}
        transition={{ delay: delay + 0.1, duration: 0.3 }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.2 }}
        style={{ color: `${color}80` }}
        className="text-[10px] leading-none"
      >
        ▼
      </motion.div>
    </motion.div>
  )
}

function SplitConnector({ color, delay = 0 }) {
  return (
    <motion.div
      className="flex items-center justify-center gap-0 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      <motion.div
        className="h-px flex-1"
        style={{ background: `linear-gradient(to right, transparent, ${color}50)` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.3, transformOrigin: 'right' }}
      />
      <div className="flex flex-col items-center">
        <motion.div
          className="w-px"
          style={{ background: `${color}50` }}
          initial={{ height: 0 }}
          animate={{ height: 16 }}
          transition={{ delay: delay + 0.15, duration: 0.3 }}
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.25 }}
          style={{ color: `${color}80` }}
          className="text-[10px]"
        >▼</motion.span>
      </div>
      <motion.div
        className="h-px flex-1"
        style={{ background: `linear-gradient(to left, transparent, ${color}50)` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.3, transformOrigin: 'left' }}
      />
    </motion.div>
  )
}

function TechBadge({ label, color, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="rounded-full border px-2.5 py-1 text-[10px] font-medium"
      style={{ borderColor: `${color}40`, color, background: `${color}12` }}
    >
      {label}
    </motion.span>
  )
}

function MargDarshakFlow({ color, isVisible }) {
  if (!isVisible) return null
  const nodes = [
    { label: 'Raspberry Pi', sublabel: 'Live Video Stream' },
    { label: 'Flask Server', sublabel: 'Video Ingestion' },
    { label: 'YOLOv8 Detector', sublabel: 'Hazard Detection' },
    { label: 'Distance Estimator', sublabel: 'OpenCV' },
    { label: 'TTS Engine', sublabel: 'Voice Alerts' },
    { label: 'User Feedback', sublabel: '15 FPS Output' },
  ]
  const badges = ['YOLOv8', 'OpenCV', 'Flask', 'Raspberry Pi']
  return (
    <div className="flex flex-col items-center gap-0">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex flex-col items-center">
          <FlowNode label={n.label} sublabel={n.sublabel} color={color} delay={i * 0.08} />
          {i < nodes.length - 1 && <FlowConnector color={color} delay={i * 0.08 + 0.04} />}
        </div>
      ))}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {badges.map((b, i) => <TechBadge key={b} label={b} color={color} delay={0.6 + i * 0.05} />)}
      </div>
    </div>
  )
}

function SmartDocFlow({ color, isVisible }) {
  if (!isVisible) return null
  const nodes = [
    { label: 'PDF Upload', sublabel: 'User Input' },
    { label: 'Text Extraction', sublabel: 'Chunking' },
    { label: 'HuggingFace Embeddings', sublabel: 'Vectorization' },
    { label: 'ChromaDB', sublabel: 'Vector Store' },
    { label: 'Retrieval', sublabel: 'Top-K Chunks' },
    { label: 'Gemini API', sublabel: 'Grounded Response' },
  ]
  const badges = ['LangChain', 'ChromaDB', 'Gemini', 'Gradio']
  return (
    <div className="flex flex-col items-center gap-0">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex flex-col items-center">
          <FlowNode label={n.label} sublabel={n.sublabel} color={color} delay={i * 0.08} />
          {i < nodes.length - 1 && <FlowConnector color={color} delay={i * 0.08 + 0.04} />}
        </div>
      ))}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {badges.map((b, i) => <TechBadge key={b} label={b} color={color} delay={0.6 + i * 0.05} />)}
      </div>
    </div>
  )
}

function AudioTranscriptionFlow({ color, isVisible }) {
  if (!isVisible) return null
  const nodes = [
    { label: 'Audio Upload', sublabel: 'MP3/WAV/M4A' },
    { label: 'React Frontend', sublabel: 'Progress UI' },
    { label: 'FastAPI Backend', sublabel: 'Async Handler' },
    { label: 'Faster-Whisper', sublabel: 'STT Model' },
    { label: 'Transcript Output', sublabel: 'Text Result' },
  ]
  const badges = ['React', 'FastAPI', 'Whisper', 'HF Spaces']
  return (
    <div className="flex flex-col items-center gap-0">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex flex-col items-center">
          <FlowNode label={n.label} sublabel={n.sublabel} color={color} delay={i * 0.08} />
          {i < nodes.length - 1 && <FlowConnector color={color} delay={i * 0.08 + 0.04} />}
        </div>
      ))}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {badges.map((b, i) => <TechBadge key={b} label={b} color={color} delay={0.55 + i * 0.05} />)}
      </div>
    </div>
  )
}

function ShareBiteFlow({ color, isVisible }) {
  if (!isVisible) return null
  const badges = ['React', 'Firebase', 'Gemini', 'Cloudinary']
  return (
    <div className="flex flex-col items-center gap-0">
      {[
        { label: 'Donor Upload', sublabel: 'Food + Image' },
        { label: 'Gemini AI Service', sublabel: 'Metadata Extraction' },
        { label: 'Cloudinary', sublabel: 'Image Processing' },
        { label: 'Firebase DB', sublabel: 'Real-time Feed' },
        { label: 'LocationIQ', sublabel: 'Geocoding' },
        { label: 'Claim System', sublabel: 'DB Transactions' },
      ].map((n, i) => (
        <div key={n.label} className="flex flex-col items-center">
          <FlowNode label={n.label} sublabel={n.sublabel} color={color} delay={0.18 + i * 0.08} />
          {i < 5 && <FlowConnector color={color} delay={0.18 + i * 0.08 + 0.04} />}
        </div>
      ))}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {badges.map((b, i) => <TechBadge key={b} label={b} color={color} delay={0.75 + i * 0.05} />)}
      </div>
    </div>
  )
}

const FLOW_MAP = {
  margdarshak: MargDarshakFlow,
  smartdoc: SmartDocFlow,
  audiotranscription: AudioTranscriptionFlow,
  sharebite: ShareBiteFlow,
}

function ArchitectureFlow({ projectKey, color, isVisible }) {
  const FlowComponent = FLOW_MAP[projectKey]
  if (!FlowComponent) return null

  return (
    <div className="flex justify-center py-2">
      <div className="w-full max-w-xs">
        <FlowComponent color={color} isVisible={isVisible} />
      </div>
    </div>
  )
}

export default memo(ArchitectureFlow)
