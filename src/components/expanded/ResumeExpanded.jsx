import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconDownload } from '@tabler/icons-react'
import ExpandedWrapper from './ExpandedWrapper'
import { RESUME } from '../../data/cards'

function ResumeExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="Resume" accent="#FFD93D" onClose={onClose}>
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-10 inline-flex items-center gap-2 rounded-full bg-[#FFD93D] px-8 py-4 text-base font-bold text-[#07071A] shadow-[0_0_40px_rgba(255,217,61,0.3)]"

        animate={{ scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <IconDownload size={20} />
        Download PDF
      </motion.a>

      <section className="mb-10">
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">
          Education
        </h3>
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
            <p className="mt-2 text-sm text-[rgba(242,242,255,0.55)]">{item.description}</p>
          </div>

        ))}
      </section>

      <section className="mb-10">
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">
          Experience
        </h3>
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

      <section>
        <h3 data-reveal-line className="mb-4 text-xl font-semibold text-[#FFD93D]">
          Certifications
        </h3>
        {RESUME.certifications.map((item) => (
          <div key={item.title} data-reveal-line className="mb-3 flex justify-between rounded-xl bg-white/3 px-5 py-4">
            <div>
              <h4 className="font-medium text-white">{item.title}</h4>
              <p className="text-sm text-[rgba(242,242,255,0.5)]">{item.org}</p>
            </div>
            <span className="text-sm text-[#FFD93D]">{item.date}</span>
          </div>
        ))}
      </section>
    </ExpandedWrapper>
  )
}

export default memo(ResumeExpanded)
