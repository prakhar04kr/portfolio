import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconStar, IconTrophy } from '@tabler/icons-react'
import ExpandedWrapper from './ExpandedWrapper'
import { ACHIEVEMENTS } from '../../data/cards'

function AchievementsExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="Achievements" accent="#6BCB77" onClose={onClose}>
      <div className="relative space-y-0">
        {ACHIEVEMENTS.map((item, i) => {
          const Icon = item.icon === 'trophy' ? IconTrophy : IconStar
          return (
            <motion.div
              key={item.title}
              className="relative flex gap-5 pb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6BCB77]/20">
                  <Icon size={22} className="text-[#6BCB77]" />
                </div>
                {i < ACHIEVEMENTS.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-[#6BCB77]/20" />
                )}
              </div>
              <div className="flex-1 pt-1">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-sm text-[rgba(242,242,255,0.4)]">{item.date}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#6BCB77]">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-[rgba(242,242,255,0.55)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </ExpandedWrapper>
  )
}

export default memo(AchievementsExpanded)
