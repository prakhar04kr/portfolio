import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconDownload, IconEye, IconX, IconFileCv, IconTrophy, IconCpu, IconBriefcase } from '@tabler/icons-react'
import ExpandedWrapper from './ExpandedWrapper'
import { RESUME } from '../../data/cards'

function ResumePreviewModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[3000] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        <motion.div
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl border border-[#FFD93D]/20 flex flex-col"
          style={{ background: 'rgba(7,7,26,0.97)' }}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        >
          <div
            className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/8"
            style={{ background: 'linear-gradient(135deg, rgba(255,217,61,0.08) 0%, transparent 100%)' }}
          >
            <div>
              <h3 className="text-lg font-bold text-white">Resume Highlights</h3>
              <p className="text-xs text-white/40 mt-0.5">Prakhar Kumar · Full-Stack Developer</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={RESUME.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#FFD93D] px-4 py-2 text-xs font-bold text-[#07071A] transition-opacity hover:opacity-90"
              >
                <IconDownload size={14} />
                Download PDF
              </a>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/25 hover:text-white"
                aria-label="Close"
              >
                <IconX size={16} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <IconFileCv size={16} className="text-[#FFD93D]" />
                <h4 className="text-sm font-semibold uppercase tracking-widest text-[#FFD93D]">Professional Summary</h4>
              </div>
              <p className="rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm leading-relaxed text-white/70">
                {RESUME.summary}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <IconBriefcase size={16} className="text-[#FFD93D]" />
                <h4 className="text-sm font-semibold uppercase tracking-widest text-[#FFD93D]">Experience</h4>
              </div>
              <div className="space-y-3">
                {RESUME.experience.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-xl border border-white/8 bg-white/3 px-4 py-3"
                  >
                    <div className="flex flex-wrap justify-between gap-2">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <span className="text-xs text-[#FFD93D]">{item.date}</span>
                    </div>
                    <p className="text-xs text-[#FFD93D]/80 mt-0.5">{item.org}</p>
                    <p className="text-xs text-white/50 mt-2 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <IconFileCv size={16} className="text-[#FFD93D]" />
                <h4 className="text-sm font-semibold uppercase tracking-widest text-[#FFD93D]">Education</h4>
              </div>
              <div className="space-y-3">
                {RESUME.education.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-xl border border-white/8 bg-white/3 px-4 py-3"
                  >
                    <div className="flex flex-wrap justify-between gap-2">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <span className="text-xs text-[#FFD93D]">{item.date}</span>
                    </div>
                    <p className="text-xs text-white/45 mt-0.5">{item.org}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <IconCpu size={16} className="text-[#FFD93D]" />
                <h4 className="text-sm font-semibold uppercase tracking-widest text-[#FFD93D]">Skills</h4>
              </div>
              <div className="space-y-3">
                {Object.entries(RESUME.skills).map(([cat, items]) => (
                  <div key={cat}>
                    <p className="text-xs text-white/35 mb-2">{cat}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border px-2.5 py-1 text-[11px] font-medium text-white/70"
                          style={{ borderColor: 'rgba(255,217,61,0.25)', background: 'rgba(255,217,61,0.08)' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <IconCpu size={16} className="text-[#FFD93D]" />
                <h4 className="text-sm font-semibold uppercase tracking-widest text-[#FFD93D]">Projects</h4>
              </div>
              <div className="space-y-2">
                {RESUME.projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFD93D]" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">{project.title}</p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full px-1.5 py-0.5 text-[10px] text-[#FFD93D]/70"
                            style={{ background: 'rgba(255,217,61,0.1)' }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <IconTrophy size={16} className="text-[#FFD93D]" />
                <h4 className="text-sm font-semibold uppercase tracking-widest text-[#FFD93D]">Certifications</h4>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {RESUME.certifications.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    className="flex items-start gap-2 rounded-lg border border-white/8 bg-white/3 px-3 py-2.5"
                  >
                    <span className="mt-0.5 text-[#FFD93D] text-xs flex-shrink-0">✓</span>
                    <div>
                      <p className="text-[12px] font-medium text-white leading-tight">{cert.title}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">{cert.org}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ResumeExpanded({ onClose }) {
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <ExpandedWrapper title="Resume" accent="#FFD93D" onClose={onClose}>
      <div className="mb-10 flex flex-wrap gap-3">
        <motion.a
          href={RESUME.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D] px-8 py-4 text-base font-bold text-[#07071A] shadow-[0_0_40px_rgba(255,217,61,0.3)]"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <IconDownload size={20} />
          Download PDF
        </motion.a>

        <motion.button
          onClick={() => setPreviewOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-[#FFD93D]/40 bg-[#FFD93D]/10 px-8 py-4 text-base font-bold text-[#FFD93D] transition-all hover:bg-[#FFD93D]/20"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <IconEye size={20} />
          Preview Resume
        </motion.button>
      </div>

      <section className="mb-10">
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">Professional Summary</h3>
        <p data-reveal-line className="glass-card rounded-xl p-5 text-sm leading-relaxed text-[rgba(242,242,255,0.7)]">
          {RESUME.summary}
        </p>
      </section>

      <section className="mb-10">
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">Experience</h3>
        {RESUME.experience.map((item) => (
          <div key={item.title} data-reveal-line className="relative mb-6 border-l-2 border-[#FFD93D]/30 pl-6">
            <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#FFD93D]" />
            <div className="flex flex-wrap justify-between gap-2">
              <h4 className="font-bold text-white">{item.title}</h4>
              <span className="text-sm text-[rgba(242,242,255,0.4)]">{item.date}</span>
            </div>
            <p className="mt-1 text-sm text-[#FFD93D]">{item.org}</p>
            <p className="mt-2 text-sm text-[rgba(242,242,255,0.55)]">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">Education</h3>
        {RESUME.education.map((item) => (
          <div key={item.title} data-reveal-line className="glass-card mb-4 rounded-xl p-5">
            <div className="flex flex-wrap justify-between gap-2">
              <h4 className="font-bold text-white">{item.title}</h4>
              <span
                className={
                  item.title.startsWith('10th') || item.title.startsWith('12th') || item.title.startsWith('B.E.')
                    ? 'text-sm font-bold text-[#FFFFFF]'
                    : 'text-sm text-[rgba(242,242,255,0.4)]'
                }
              >
                {item.date}
              </span>
            </div>
            <p className="mt-1 text-sm text-[#FFD93D]">{item.org}</p>
            {item.description ? (
              <p className="mt-2 text-sm text-[rgba(242,242,255,0.55)]">{item.description}</p>
            ) : null}
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">Skills</h3>
        {Object.entries(RESUME.skills).map(([category, items]) => (
          <div key={category} data-reveal-line className="glass-card mb-4 rounded-xl p-5">
            <h4 className="mb-3 font-semibold text-white">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#FFD93D]/25 bg-[#FFD93D]/10 px-3 py-1 text-sm text-[#FFD93D]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">Projects</h3>
        {RESUME.projects.map((project) => (
          <div key={project.title} data-reveal-line className="glass-card mb-4 rounded-xl p-5">
            <h4 className="font-bold text-white">{project.title}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#FFD93D]/25 bg-[#FFD93D]/10 px-2.5 py-0.5 text-xs text-[#FFD93D]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">Certifications</h3>
        {RESUME.certifications.map((item) => (
          <div key={item.title} data-reveal-line className="mb-3 flex justify-between rounded-xl bg-white/3 px-5 py-4">
            <div>
              <h4 className="font-medium text-white">{item.title}</h4>
              <p className="text-sm text-[rgba(242,242,255,0.5)]">{item.org}</p>
            </div>
            {item.date ? <span className="text-sm text-[#FFD93D]">{item.date}</span> : null}
          </div>
        ))}
      </section>

      {previewOpen && <ResumePreviewModal onClose={() => setPreviewOpen(false)} />}
    </ExpandedWrapper>
  )
}

export default memo(ResumeExpanded)
