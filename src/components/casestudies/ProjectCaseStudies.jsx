import { memo, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconChevronDown,
  IconBulb,
  IconTools,
  IconDeviceDesktop,
  IconServer,
  IconDatabase,
  IconSparkles,
} from '@tabler/icons-react'



function Badge({ tone = 'default', children }) {
  const styles =
    tone === 'primary'
      ? { bg: 'rgba(0,217,255,0.15)', br: 'rgba(0,217,255,0.30)', text: '#00D9FF' }
      : tone === 'accent'
        ? { bg: 'rgba(110,99,255,0.15)', br: 'rgba(110,99,255,0.30)', text: '#6C63FF' }
        : { bg: 'rgba(255,255,255,0.08)', br: 'rgba(255,255,255,0.14)', text: 'rgba(242,242,255,0.75)' }

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[11px]"
      style={{ background: styles.bg, border: `1px solid ${styles.br}`, color: styles.text }}
    >
      {children}
    </span>
  )
}

function Section({ title, accent, children }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold" style={{ color: accent }}>
        {title}
      </h3>
      <div className="text-[rgba(242,242,255,0.65)] leading-relaxed">{children}</div>
    </div>
  )
}

function ArchitectureDiagram({ flow }) {
  return (
    <div className="grid gap-3">
      {flow.map((row, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div
            className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            <IconLayers size={16} style={{ color: row.accent }} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-white/90">{row.label}</div>
            <div className="mt-1 text-[12px] text-[rgba(242,242,255,0.55)]">{row.sub}</div>
          </div>
          {idx !== flow.length - 1 && <div className="pt-3 text-[rgba(242,242,255,0.3)]">↓</div>}
        </div>
      ))}
    </div>
  )
}

function CaseStudyCard({ item, expanded, onToggle }) {
  return (
    <div className="glass-card overflow-hidden rounded-3xl border border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-start justify-between gap-4 px-6 py-6 text-left"
        aria-expanded={expanded}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[11px]"
              style={{ background: `${item.accent}26`, border: `1px solid ${item.accent}40`, color: item.accent }}
            >
              {item.domain}
            </span>
            {item.domainBadges.slice(0, 2).map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
          <div className="mt-4 text-xl font-bold text-white">{item.title}</div>
          <p className="mt-2 text-sm leading-relaxed text-[rgba(242,242,255,0.60)]">{item.overview}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.slice(0, 5).map((t) => (
              <Badge key={t} tone={t === 'AI' ? 'primary' : 'default'}>
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <motion.div
          className="shrink-0"
          initial={false}
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl"
            style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}33` }}
          >
            <IconChevronDown size={18} style={{ color: item.accent }} />
          </div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            <div className="px-6 pb-6">
              <div className="mb-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                <Section title="Problem Statement" accent={item.accent}>
                  {item.problem}
                </Section>
                <Section title="Solution" accent={item.accent}>
                  {item.solution}
                </Section>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h3 className="mb-3 text-sm font-semibold" style={{ color: item.accent }}>
                    Tech Stack
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'rgba(242,242,255,0.85)' }}>
                        <IconDeviceDesktop size={14} /> Frontend
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.stack.frontend.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: item.accent }}>
                        <IconServer size={14} /> Backend
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.stack.backend.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: item.accent }}>
                        <IconDatabase size={14} /> Database
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.stack.database.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-2xl"
                        style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}33` }}
                      >
                        <IconTools size={18} style={{ color: item.accent }} />
                      </div>
                      <h3 className="text-sm font-semibold" style={{ color: item.accent }}>
                        Architecture Flow
                      </h3>
                    </div>
                    <div className="mt-4">
                      <ArchitectureDiagram flow={item.architectureFlow} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Section title="Core Features" accent={item.accent}>
                      <ul className="list-disc space-y-1 pl-5">
                        {item.coreFeatures.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </Section>

                    <Section title="Engineering Challenges" accent={item.accent}>
                      <ul className="list-disc space-y-1 pl-5">
                        {item.challenges.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </Section>

                    <Section title="What Makes It Unique" accent={item.accent}>
                      <div className="flex items-start gap-3">
                        <IconSparkles size={18} style={{ color: item.accent, flex: '0 0 auto', marginTop: 2 }} />
                        <div>{item.unique}</div>
                      </div>
                    </Section>

                    <Section title="Future Enhancements" accent={item.accent}>
                      <ul className="list-disc space-y-1 pl-5">
                        {item.future.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-2xl"
                        style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}33` }}
                      >
                        <IconBulb size={18} style={{ color: item.accent }} />
                      </div>
                      <h3 className="text-sm font-semibold" style={{ color: item.accent }}>
                        Learning Outcomes
                      </h3>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {item.learning.map((x) => (
                          <Badge key={x}>{x}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectCaseStudies() {
  const caseStudies = useMemo(
    () => [
      {
        id: 'yojnaconnect',
        accent: '#00D9FF',
        domain: 'GovTech • Social Impact • Information Discovery',
        domainBadges: ['GovTech', 'Social Impact', 'Discovery'],
        title: 'YojnaConnect – AI-Enabled Government Scheme Discovery Platform',
        overview:
          'YojnaConnect is a full-stack web platform designed to simplify access to government welfare schemes. The platform helps users discover schemes based on eligibility, category, demographics, and requirements while reducing the complexity of navigating government information portals.',
        problem: 'Many citizens are unaware of welfare schemes they qualify for. Government information is often scattered across multiple portals, making discovery difficult.',
        solution:
          'Built a centralized platform that allows users to search, filter, and explore schemes using a modern web interface powered by APIs and database-driven recommendations.',
        stack: {
          frontend: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
          backend: ['Node.js', 'Express.js'],
          database: ['MySQL'],
        },
        tags: ['Full-Stack', 'AI', 'REST APIs', 'Authentication', 'Recommendations'],
        coreFeatures: ['Scheme Search', 'Eligibility Filtering', 'Category Discovery', 'Detailed Scheme Pages', 'User Authentication', 'Database-Driven Content Management'],
        challenges: ['Structuring government datasets', 'Building filtering logic', 'API architecture design', 'Database optimization', 'AI integration planning'],
        unique: 'Real-world social impact • GovTech use case • Full-stack architecture • Recommendation-oriented design',
        future: ['AI Eligibility Assistant', 'Multi-Language Support', 'Voice Search', 'Personalized Recommendations', 'Automatic Scheme Updates', 'PDF Application Guidance'],
        learning: ['Full-stack architecture', 'REST API development', 'Database design', 'Scalable system planning'],
        architectureFlow: [
          { label: 'User', sub: 'Search + filter eligibility inputs', accent: '#00D9FF' },
          { label: 'React Frontend', sub: 'Responsive UI + scheme discovery views', accent: '#00D9FF' },
          { label: 'Express API Layer', sub: 'REST endpoints for search + details', accent: '#00D9FF' },
          { label: 'Business Logic Layer', sub: 'Filtering rules + ranking logic', accent: '#00D9FF' },
          { label: 'MySQL Database', sub: 'Scheme datasets + metadata indexing', accent: '#00D9FF' },
          { label: 'Filtered Results', sub: 'Recommendation-oriented scheme listing', accent: '#00D9FF' },
          { label: 'Frontend Rendering', sub: 'Detailed scheme pages and UI responses', accent: '#00D9FF' },
        ],
      },
      {
        id: 'typeracer',
        accent: '#6C63FF',
        domain: 'Real-Time Systems • Multiplayer Applications • Web Gaming',
        domainBadges: ['Real-Time', 'Multiplayer', 'Gaming'],
        title: 'TypeRacer – Full-Stack Real-Time Multiplayer Typing Platform',
        overview:
          'TypeRacer is a multiplayer typing application where users compete in synchronized typing races with live progress updates, leaderboards, and performance tracking.',
        problem: 'Most typing applications do not provide real-time competitive multiplayer experiences with synchronized gameplay.',
        solution:
          'Built a Socket.IO-powered real-time architecture capable of synchronizing typing races among multiple users while tracking performance metrics.',
        stack: {
          frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
          backend: ['Node.js', 'Express.js'],
          database: ['MySQL'],
        },
        tags: ['Real-Time', 'Socket.IO', 'WPM Tracking', 'Accuracy Tracking', 'Leaderboards'],
        coreFeatures: ['Multiplayer Racing', 'Live Synchronization', 'Leaderboards', 'WPM Tracking', 'Accuracy Tracking', 'User Profiles', 'Historical Performance Storage'],
        challenges: ['Synchronization', 'Concurrent users', 'WebSocket event handling', 'Live leaderboard updates', 'Score consistency'],
        unique: 'Real-time multiplayer architecture • Competitive gameplay • WebSocket communication • Performance analytics',
        future: ['Matchmaking System', 'Tournament Mode', 'Global Rankings', 'Friend Challenges', 'AI Opponent Mode', 'Voice Chat'],
        learning: ['Real-time architecture', 'Event-driven systems', 'Multiplayer synchronization', 'Backend scalability'],
        architectureFlow: [
          { label: 'Player A', sub: 'Race join + keystroke updates', accent: '#6C63FF' },
          { label: 'Socket.IO Server', sub: 'Broadcasts synchronized race events', accent: '#6C63FF' },
          { label: 'Player B', sub: 'Receives events + updates local UI', accent: '#6C63FF' },
          { label: 'Express Backend', sub: 'Auth + race lifecycle + APIs', accent: '#6C63FF' },
          { label: 'Race Engine', sub: 'Progress computation + scoring', accent: '#6C63FF' },
          { label: 'MySQL Database', sub: 'Stores historical results + profiles', accent: '#6C63FF' },
          { label: 'Leaderboard Updates', sub: 'Real-time UI ranking', accent: '#6C63FF' },
          { label: 'Live UI Rendering', sub: 'React race interface updates', accent: '#6C63FF' },
        ],
      },
      {
        id: 'laychess',
        accent: '#00D9FF',
        domain: 'Artificial Intelligence • Algorithms • Interactive Gaming',
        domainBadges: ['AI', 'Algorithms', 'Interactive'],
        title: 'LayChess – AI-Powered Browser Chess Platform',
        overview:
          'LayChess is an advanced browser-based chess platform featuring a custom-built chess engine capable of analyzing positions and generating strong moves using classical AI search techniques.',
        problem: 'Building a strong chess engine requires efficient move generation, evaluation functions, and optimization strategies capable of exploring massive game trees.',
        solution:
          'Implemented a custom AI engine using Negamax Search enhanced with Alpha-Beta Pruning, Zobrist Hashing, Transposition Tables, Killer Move Heuristics, and Quiescence Search.',
        stack: {
          frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
          backend: ['(Browser-only engine logic)'],
          database: ['(No DB required)'],
        },
        tags: ['Negamax', 'Alpha-Beta', 'Zobrist', 'Transposition', 'Chess Analytics'],
        coreFeatures: ['AI Opponent', 'Position Evaluation', 'Hint Generation', 'Move Analysis', 'Board Customization', 'Chess Analytics'],
        challenges: ['Search tree explosion', 'Engine optimization', 'Move ordering', 'State management', 'Evaluation tuning'],
        unique: 'Custom-built chess engine • Advanced classical AI search techniques • Browser-based experience',
        future: ['Opening Book', 'Endgame Tablebases', 'Multiplayer Mode', 'Cloud Engine Analysis', 'Puzzle Training', 'ELO Rating System'],
        learning: ['AI fundamentals', 'Search algorithms', 'Data structures', 'Optimization techniques'],
        architectureFlow: [
          { label: 'User Move', sub: 'Player selects a move on the board', accent: '#00D9FF' },
          { label: 'Move Generator', sub: 'Generates legal moves efficiently', accent: '#00D9FF' },
          { label: 'Negamax Search', sub: 'Recursive evaluation of game states', accent: '#00D9FF' },
          { label: 'Alpha-Beta Pruning', sub: 'Cuts branches to reduce computation', accent: '#00D9FF' },
          { label: 'Evaluation Function', sub: 'Heuristic evaluation of positions', accent: '#00D9FF' },
          { label: 'Transposition Table', sub: 'Memoizes results for repeated states', accent: '#00D9FF' },
          { label: 'Best Move Selection', sub: 'Chooses the strongest evaluated move', accent: '#00D9FF' },
          { label: 'Board Update', sub: 'Updates UI + analysis output', accent: '#00D9FF' },
        ],
      },
      {
        id: 'forgeai',
        accent: '#6BCB77',
        domain: 'Artificial Intelligence • EdTech • Career Development',
        domainBadges: ['AI', 'EdTech', 'Career Dev'],
        title: 'Forge AI – AI-Powered Interview Preparation & Assessment Platform',
        overview:
          'Forge AI is an intelligent interview preparation platform that helps students and job seekers improve technical, aptitude, and communication skills through AI-assisted assessments and personalized feedback.',
        problem: 'Many students lack realistic interview practice, structured assessment systems, and personalized guidance for improving interview performance.',
        solution:
          'Built an AI-powered platform that evaluates candidate performance, generates intelligent feedback, and helps users identify skill gaps while preparing for software development careers.',
        stack: {
          frontend: ['React', 'Vite', 'JavaScript'],
          backend: ['Node.js', 'Express.js'],
          database: ['MySQL / PostgreSQL'],
        },
        tags: ['AI Interview', 'Prompt Engineering', 'Assessments', 'Feedback', 'Analytics'],
        coreFeatures: ['AI Interview Simulator', 'Resume-Based Question Generation', 'Technical Assessments', 'Aptitude Tests', 'Performance Analytics', 'Personalized Feedback', 'Skill Gap Analysis'],
        challenges: ['Prompt engineering', 'AI response evaluation', 'Assessment scoring', 'Analytics generation', 'API optimization'],
        unique: 'AI-driven interview preparation • Personalized feedback • Resume-aware assessments • Career-focused use case',
        future: ['Voice Interviews', 'Video Analysis', 'HR Simulation', 'Company-Specific Preparation', 'Coding Challenges', 'AI Communication Scoring'],
        learning: ['AI integration', 'Prompt engineering', 'Analytics systems', 'Scalable AI applications'],
        architectureFlow: [
          { label: 'User', sub: 'Start assessment + provide resume inputs', accent: '#6BCB77' },
          { label: 'React Frontend', sub: 'Interview UI + assessment experience', accent: '#6BCB77' },
          { label: 'Express Backend', sub: 'Routes + assessment orchestration', accent: '#6BCB77' },
          { label: 'Assessment Engine', sub: 'Scoring + evaluation pipeline', accent: '#6BCB77' },
          { label: 'Gemini AI Layer', sub: 'Generates questions + feedback', accent: '#6BCB77' },
          { label: 'Database', sub: 'Stores attempts + analytics outputs', accent: '#6BCB77' },
          { label: 'Analytics Dashboard', sub: 'Charts + performance tracking', accent: '#6BCB77' },
          { label: 'Personalized Feedback', sub: 'Actionable improvements for next attempt', accent: '#6BCB77' },
        ],
      },
    ],
    [],
  )

  const [expandedId, setExpandedId] = useState(caseStudies[0]?.id || null)

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[rgba(242,242,255,0.28)]">Project Case Studies</p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          A deeper look into the architecture, engineering decisions, technical challenges, and future roadmap behind my most impactful projects.
        </h2>

        <div className="mt-10 space-y-6">
          {caseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              item={cs}
              expanded={expandedId === cs.id}
              onToggle={() => setExpandedId((prev) => (prev === cs.id ? null : cs.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(ProjectCaseStudies)

