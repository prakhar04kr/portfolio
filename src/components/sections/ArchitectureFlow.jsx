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

function YojnaFlow({ color, isVisible }) {
  if (!isVisible) return null
  const nodes = [
    { label: 'User', sublabel: 'Browser' },
    { label: 'React Frontend', sublabel: 'Vite + JSX' },
    { label: 'Express API', sublabel: 'REST Layer' },
    { label: 'Business Logic', sublabel: 'Filtering Engine' },
    { label: 'MySQL Database', sublabel: 'Data Store' },
    { label: 'Scheme Results', sublabel: 'Rendered UI' },
  ]
  const badges = ['React', 'Node.js', 'Express', 'MySQL']
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

function TypeRacerFlow({ color, isVisible }) {
  if (!isVisible) return null
  const badges = ['React', 'Socket.IO', 'Express', 'MySQL']
  return (
    <div className="flex flex-col items-center gap-0">
      <motion.div
        className="flex gap-3 justify-center mb-0"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        <FlowNode label="Player A" sublabel="Browser" color={color} delay={0} />
        <FlowNode label="Player B" sublabel="Browser" color={color} delay={0.05} />
      </motion.div>
      <SplitConnector color={color} delay={0.1} />
      {[
        { label: 'Socket.IO Server', sublabel: 'WebSocket Hub' },
        { label: 'Express Backend', sublabel: 'API Layer' },
        { label: 'Race Engine', sublabel: 'Sync Logic' },
        { label: 'MySQL Database', sublabel: 'Scores & Users' },
        { label: 'Leaderboard', sublabel: 'Live Updates' },
      ].map((n, i) => (
        <div key={n.label} className="flex flex-col items-center">
          <FlowNode label={n.label} sublabel={n.sublabel} color={color} delay={0.18 + i * 0.08} />
          {i < 4 && <FlowConnector color={color} delay={0.18 + i * 0.08 + 0.04} />}
        </div>
      ))}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {badges.map((b, i) => <TechBadge key={b} label={b} color={color} delay={0.7 + i * 0.05} />)}
      </div>
    </div>
  )
}

function LayChessFlow({ color, isVisible }) {
  if (!isVisible) return null
  const nodes = [
    { label: 'User Move', sublabel: 'Input' },
    { label: 'Move Generator', sublabel: 'Legal Moves' },
    { label: 'Negamax Search', sublabel: 'Tree Traversal' },
    { label: 'Alpha-Beta Pruning', sublabel: 'Branch Cutoff' },
    { label: 'Evaluation Engine', sublabel: 'Position Score' },
    { label: 'Transposition Table', sublabel: 'Zobrist Hash Cache' },
    { label: 'Best Move', sublabel: 'Selected Output' },
  ]
  const badges = ['React', 'TypeScript', 'Negamax', 'Alpha-Beta', 'Zobrist']
  return (
    <div className="flex flex-col items-center gap-0">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex flex-col items-center">
          <FlowNode label={n.label} sublabel={n.sublabel} color={color} delay={i * 0.07} />
          {i < nodes.length - 1 && <FlowConnector color={color} delay={i * 0.07 + 0.04} />}
        </div>
      ))}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {badges.map((b, i) => <TechBadge key={b} label={b} color={color} delay={0.65 + i * 0.05} />)}
      </div>
    </div>
  )
}

function KeyForgeFlow({ color, isVisible }) {
  if (!isVisible) return null
  const badges = ['React', 'Socket.IO', 'Gemini AI', 'MySQL']
  return (
    <div className="flex flex-col items-center gap-0">
      <motion.div
        className="flex gap-3 justify-center mb-0"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        <FlowNode label="Player A" sublabel="Browser" color={color} delay={0} />
        <FlowNode label="Player B" sublabel="Browser" color={color} delay={0.05} />
      </motion.div>
      <SplitConnector color={color} delay={0.1} />
      {[
        { label: 'Socket.IO Server', sublabel: 'Real-Time Hub' },
        { label: 'Express Backend', sublabel: 'API Layer' },
        { label: 'Race Engine', sublabel: 'Sync & Scoring' },
        { label: 'Gemini AI Layer', sublabel: 'Coaching Engine' },
        { label: 'MySQL Database', sublabel: 'Scores & Profiles' },
        { label: 'Analytics Dashboard', sublabel: 'Performance Report' },
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
  yojnaconnect: YojnaFlow,
  typeracer: TypeRacerFlow,
  laychess: LayChessFlow,
  keyforge: KeyForgeFlow,
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
