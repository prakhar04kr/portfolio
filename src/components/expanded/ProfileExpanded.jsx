import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconBrandLeetcode, IconExternalLink } from '@tabler/icons-react'
import ExpandedWrapper from './ExpandedWrapper'
import { DEVELOPER } from '../../data/cards'

const PLATFORMS = [
  {
    key: 'github',
    Icon: IconBrandGithub,
    label: 'GitHub',
    handle: '@alexrivera',
    url: DEVELOPER.social.github,
    stats: '142 repos · 2.4K followers',
    color: '#A855F7',
  },
  {
    key: 'linkedin',
    Icon: IconBrandLinkedin,
    label: 'LinkedIn',
    handle: '/in/alexrivera',
    url: DEVELOPER.social.linkedin,
    stats: '500+ connections · Open to work',
    color: '#0A66C2',
  },
  {
    key: 'leetcode',
    Icon: IconBrandLeetcode,
    label: 'LeetCode',
    handle: '@alexrivera',
    url: DEVELOPER.social.leetcode,
    stats: '1,024 solved · Top 5%',
    color: '#FFA116',
  },
]

function ProfileExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="Profile" accent="#A855F7" onClose={onClose}>
      <p data-reveal-line className="mb-8 max-w-xl text-[rgba(242,242,255,0.65)]">
        Connect with me across platforms. I share code, career insights, and problem-solving journeys.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {PLATFORMS.map((platform, i) => (
          <motion.a
            key={platform.key}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card flex flex-col items-center rounded-2xl p-8 transition-transform hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, type: 'spring', stiffness: 100 }}
          >
            <div
              className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 group-hover:rotate-6"
              style={{ background: `${platform.color}20` }}
            >
              <platform.Icon size={44} style={{ color: platform.color }} stroke={1.5} />
            </div>
            <h3 className="text-lg font-bold text-white">{platform.label}</h3>
            <p className="mt-1 text-sm text-[rgba(242,242,255,0.5)]">{platform.handle}</p>
            <p className="mt-3 text-xs text-[rgba(242,242,255,0.4)]">{platform.stats}</p>
            <span className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: platform.color }}>
              Visit profile <IconExternalLink size={14} />
            </span>
          </motion.a>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div data-reveal-line className="glass-card rounded-2xl p-6">
          <p className="text-sm text-[rgba(242,242,255,0.5)]">Total Contributions</p>
          <p className="text-4xl font-bold text-[#A855F7]">
            <span data-count-up="2847">0</span>+
          </p>
        </div>
        <div data-reveal-line className="glass-card rounded-2xl p-6">
          <p className="text-sm text-[rgba(242,242,255,0.5)]">Problems Solved</p>
          <p className="text-4xl font-bold text-[#FFA116]">
            <span data-count-up="1024">0</span>
          </p>
        </div>
      </div>
    </ExpandedWrapper>
  )
}

export default memo(ProfileExpanded)
