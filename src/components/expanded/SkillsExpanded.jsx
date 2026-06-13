import { memo, useRef } from 'react'
import ExpandedWrapper, { useSkillBars } from './ExpandedWrapper'
import { SKILLS } from '../../data/cards'

function SkillsExpanded({ onClose }) {
  const ref = useRef(null)
  useSkillBars(ref, true)

  return (
    <ExpandedWrapper title="Skills" accent="#FF6B6B" onClose={onClose}>
      <div ref={ref}>
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 data-reveal-line className="mb-4 text-lg font-semibold text-white">
              {category}
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-[rgba(242,242,255,0.7)]">{skill.name}</span>
                    <span className="text-[#FF6B6B]">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/8">
                    <div
                      data-skill-bar={skill.level}
                      className="h-full rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF922B]"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ExpandedWrapper>
  )
}

export default memo(SkillsExpanded)
