import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconStar, IconTrophy, IconZoomIn } from '@tabler/icons-react'
import ExpandedWrapper from './ExpandedWrapper'
import { ACHIEVEMENTS } from '../../data/cards'

function AchievementsExpanded({ onClose }) {
  const [preview, setPreview] = useState(null)

  return (
    <ExpandedWrapper title="Achievements" accent="#6BCB77" onClose={onClose}>
      <p data-reveal-line className="mb-8 text-sm text-[rgba(242,242,255,0.55)]">
        Industry certifications and hackathon awards. Click any certificate to view full size.
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((item, i) => (
          <motion.button
            key={item.title}
            type="button"
            onClick={() => item.image && setPreview(item)}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition-all hover:border-[#6BCB77]/40 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            {item.image && (
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <IconZoomIn size={14} />
                </div>
              </div>
            )}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCB77]/20">
                  {item.icon === 'trophy' ? (
                    <IconTrophy size={18} className="text-[#6BCB77]" />
                  ) : (
                    <IconStar size={18} className="text-[#6BCB77]" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold leading-snug text-white">{item.title}</h3>
                  <p className="mt-1 text-xs font-medium text-[#6BCB77]">{item.org}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[rgba(242,242,255,0.5)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="relative space-y-0">
        {ACHIEVEMENTS.map((item, i) => {
          const Icon = item.icon === 'trophy' ? IconTrophy : IconStar
          return (
            <motion.div
              key={`timeline-${item.title}`}
              className="relative flex gap-5 pb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6BCB77]/20">
                  <Icon size={18} className="text-[#6BCB77]" />
                </div>
                {i < ACHIEVEMENTS.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-[#6BCB77]/20" />
                )}
              </div>
              <div className="flex-1 pt-1">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <span className="text-xs text-[rgba(242,242,255,0.4)]">{item.date}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#6BCB77]">{item.org}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[5000] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setPreview(null)}
            />
            <motion.img
              src={preview.image}
              alt={preview.title}
              className="relative z-10 max-h-[85vh] max-w-4xl rounded-2xl border border-white/20 shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ExpandedWrapper>
  )
}

export default memo(AchievementsExpanded)
