import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ArchitectureFlow from './ArchitectureFlow'

const CASE_STUDIES = [
  {
    key: 'yojnaconnect',
    title: 'YojnaConnect',
    fullTitle: 'YojnaConnect – AI-Enabled Government Scheme Discovery Platform',
    domain: 'GovTech • Social Impact • Information Discovery',
    accent: '#00D9FF',
    overview:
      'YojnaConnect is a full-stack web platform designed to simplify access to government welfare schemes. The platform helps users discover schemes based on eligibility, category, demographics, and requirements while reducing the complexity of navigating government information portals.',
    problem:
      'Many citizens are unaware of welfare schemes they qualify for. Government information is often scattered across multiple portals, making discovery difficult.',
    solution:
      'Built a centralized platform that allows users to search, filter, and explore schemes using a modern web interface powered by APIs and database-driven recommendations.',
    tech: {
      Frontend: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MySQL'],
      Additional: ['REST APIs', 'Authentication System', 'Responsive Design'],
    },
    features: [
      'Scheme Search',
      'Eligibility Filtering',
      'Category Discovery',
      'Detailed Scheme Pages',
      'User Authentication',
      'Database-Driven Content',
    ],
    challenges: [
      'Structuring government datasets',
      'Building complex filtering logic',
      'API architecture design',
      'Database optimization',
      'AI integration planning',
    ],
    unique: [
      'Real-world social impact',
      'GovTech use case',
      'Full-stack architecture',
      'Recommendation-oriented design',
    ],
    future: [
      'AI Eligibility Assistant',
      'Multi-Language Support',
      'Voice Search',
      'Personalized Recommendations',
      'PDF Application Guidance',
    ],
    learning: [
      'Full-stack architecture',
      'REST API development',
      'Database design',
      'Scalable system planning',
    ],
  },
  {
    key: 'typeracer',
    title: 'TypeRacer',
    fullTitle: 'TypeRacer – Full-Stack Real-Time Multiplayer Typing Platform',
    domain: 'Real-Time Systems • Multiplayer Applications • Web Gaming',
    accent: '#A855F7',
    overview:
      'TypeRacer is a multiplayer typing application where users compete in synchronized typing races with live progress updates, leaderboards, and performance tracking.',
    problem:
      'Most typing applications do not provide real-time competitive multiplayer experiences with synchronized gameplay.',
    solution:
      'Built a Socket.IO-powered real-time architecture capable of synchronizing typing races among multiple users while tracking performance metrics.',
    tech: {
      Frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MySQL'],
      'Real-Time': ['Socket.IO', 'WebSockets'],
    },
    features: [
      'Multiplayer Racing',
      'Live Synchronization',
      'Leaderboards',
      'WPM Tracking',
      'Accuracy Tracking',
      'User Profiles',
      'Historical Performance',
    ],
    challenges: [
      'Multi-user synchronization',
      'Concurrent user handling',
      'WebSocket event management',
      'Live leaderboard updates',
      'Score consistency',
    ],
    unique: [
      'Real-time multiplayer architecture',
      'Competitive gameplay',
      'WebSocket communication',
      'Performance analytics',
    ],
    future: [
      'Matchmaking System',
      'Tournament Mode',
      'Global Rankings',
      'Friend Challenges',
      'AI Opponent Mode',
    ],
    learning: [
      'Real-time architecture',
      'Event-driven systems',
      'Multiplayer synchronization',
      'Backend scalability',
    ],
  },
  {
    key: 'laychess',
    title: 'LayChess',
    fullTitle: 'LayChess – AI-Powered Browser Chess Platform',
    domain: 'Artificial Intelligence • Algorithms • Interactive Gaming',
    accent: '#6BCB77',
    overview:
      'LayChess is an advanced browser-based chess platform featuring a custom-built chess engine capable of analyzing positions and generating strong moves using classical AI search techniques.',
    problem:
      'Building a strong chess engine requires efficient move generation, evaluation functions, and optimization strategies capable of exploring massive game trees.',
    solution:
      'Implemented a custom AI engine using Negamax Search enhanced with Alpha-Beta Pruning, Zobrist Hashing, Transposition Tables, Killer Move Heuristics, and Quiescence Search.',
    tech: {
      Frontend: ['React 19', 'TypeScript', 'Vite'],
      Framework: ['TanStack Start'],
      Styling: ['Tailwind CSS'],
      'AI Engine': ['Negamax Search', 'Alpha-Beta Pruning', 'Zobrist Hashing', 'Transposition Tables', 'MVV-LVA Move Ordering'],
    },
    features: [
      'AI Opponent',
      'Position Evaluation',
      'Hint Generation',
      'Move Analysis',
      'Board Customization',
      'Chess Analytics',
    ],
    challenges: [
      'Search tree explosion',
      'Engine optimization',
      'Move ordering efficiency',
      'State management',
      'Evaluation function tuning',
    ],
    unique: [
      'Custom-built chess engine',
      'Advanced DSA concepts',
      'Classical AI algorithms',
      'Browser-based experience',
    ],
    future: [
      'Opening Book',
      'Endgame Tablebases',
      'Multiplayer Mode',
      'Cloud Engine Analysis',
      'ELO Rating System',
    ],
    learning: [
      'AI fundamentals',
      'Search algorithms',
      'Data structures & optimization',
      'Complex state management',
    ],
  },
  {
    key: 'forgeai',
    title: 'Forge AI',
    fullTitle: 'Forge AI – AI-Powered Interview Preparation & Assessment Platform',
    domain: 'Artificial Intelligence • EdTech • Career Development',
    accent: '#FF6B6B',
    overview:
      'Forge AI is an intelligent interview preparation platform that helps students and job seekers improve technical, aptitude, and communication skills through AI-assisted assessments and personalized feedback.',
    problem:
      'Many students lack realistic interview practice, structured assessment systems, and personalized guidance for improving interview performance.',
    solution:
      'Built an AI-powered platform that evaluates candidate performance, generates intelligent feedback, and helps users identify skill gaps while preparing for software development careers.',
    tech: {
      Frontend: ['React', 'Vite', 'JavaScript'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MySQL', 'PostgreSQL'],
      'AI Layer': ['Gemini API', 'Prompt Engineering', 'AI Feedback Engine'],
    },
    features: [
      'AI Interview Simulator',
      'Resume-Based Question Generation',
      'Technical Assessments',
      'Aptitude Tests',
      'Performance Analytics',
      'Personalized Feedback',
      'Skill Gap Analysis',
    ],
    challenges: [
      'Prompt engineering',
      'AI response evaluation',
      'Assessment scoring logic',
      'Analytics generation',
      'API optimization',
    ],
    unique: [
      'AI-driven interview preparation',
      'Personalized feedback system',
      'Resume-aware assessments',
      'Career-focused use case',
    ],
    future: [
      'Voice Interviews',
      'Video Analysis',
      'HR Simulation',
      'Company-Specific Preparation',
      'AI Communication Scoring',
    ],
    learning: [
      'AI integration',
      'Prompt engineering',
      'Analytics systems',
      'Scalable AI applications',
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

function CaseStudyCard({ study, t }) {
  const [expanded, setExpanded] = useState(false)
  const { key, title, fullTitle, domain, accent, overview, problem, solution, tech, features, challenges, unique, future, learning } = study

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
              {t('caseStudies.domain')}
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
                  <SectionBlock title={t('caseStudies.sections.overview')} accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{overview}</p>
                  </SectionBlock>

                  <SectionBlock title={t('caseStudies.sections.problem')} accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{problem}</p>
                  </SectionBlock>

                  <SectionBlock title={t('caseStudies.sections.solution')} accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{solution}</p>
                  </SectionBlock>

                  <SectionBlock title={t('caseStudies.sections.tech')} accent={accent}>
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

                  <SectionBlock title={t('caseStudies.sections.features')} accent={accent}>
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
                  <SectionBlock title={t('caseStudies.sections.architecture')} accent={accent}>
                    <div
                      className="rounded-xl border p-4"
                      style={{ background: `${accent}08`, borderColor: `${accent}20` }}
                    >
                      <ArchitectureFlow projectKey={key} color={accent} isVisible={expanded} />
                    </div>
                  </SectionBlock>

                  <SectionBlock title={t('caseStudies.sections.challenges')} accent={accent}>
                    <ul className="space-y-1">
                      {challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-white/60">
                          <span style={{ color: `${accent}80` }} className="mt-0.5 text-xs">⚡</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>

                  <SectionBlock title={t('caseStudies.sections.unique')} accent={accent}>
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

                  <SectionBlock title={t('caseStudies.sections.future')} accent={accent}>
                    <div className="flex flex-wrap gap-1.5">
                      {future.map((f) => (
                        <span key={f} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/40">
                          {f}
                        </span>
                      ))}
                    </div>
                  </SectionBlock>

                  <SectionBlock title={t('caseStudies.sections.learning')} accent={accent}>
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
  const { t } = useTranslation()

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
            Engineering Breakdowns
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t('caseStudies.title')}
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-white/50 leading-relaxed">
            {t('caseStudies.subtitle')}
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
              <CaseStudyCard study={study} t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(CaseStudiesSection)
