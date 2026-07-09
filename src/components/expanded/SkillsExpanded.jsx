import { memo } from 'react'
import ExpandedWrapper from './ExpandedWrapper'
import { SKILLS } from '../../data/cards'

function SkillsExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="Skills" accent="#FF6B6B" onClose={onClose}>
      <p data-reveal-line className="mb-8 text-sm leading-relaxed text-[rgba(242,242,255,0.55)]">
        Technologies and tools I use across AI/ML engineering, full-stack development, and cloud deployment.
      </p>
      <div>
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 data-reveal-line className="mb-4 text-lg font-semibold text-white">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  data-reveal-line
                  className="rounded-full border px-4 py-2 text-sm text-[rgba(242,242,255,0.78)] transition-colors hover:border-[#FF6B6B]/35 hover:bg-[#FF6B6B]/10"
                  style={{
                    borderColor: 'rgba(255,107,107,0.18)',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ExpandedWrapper>
  )
}

export default memo(SkillsExpanded)
