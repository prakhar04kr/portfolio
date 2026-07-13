import { memo } from 'react'
import ExpandedWrapper from './ExpandedWrapper'
import { SKILLS } from '../../data/cards'

function SkillsExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="Skills" accent="#FF6B6B" onClose={onClose}>
      <p data-reveal-line className="mb-8 max-w-2xl text-sm leading-relaxed text-[rgba(242,242,255,0.55)] md:text-base">
        Technologies and tools I use across full-stack development, AI applications, and cloud deployment.
      </p>

      <div className="space-y-8">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} data-reveal-line>
            <h3 className="mb-4 text-base font-semibold text-white md:text-lg">{category}</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#FF6B6B]/25 bg-[#1a1214] px-5 py-2 text-sm text-white transition-colors hover:border-[#FF6B6B]/45 hover:bg-[#FF6B6B]/10"
                >
                  {skill}
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
