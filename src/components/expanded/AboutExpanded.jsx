import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconBrandLeetcode, IconBrandTwitter } from '@tabler/icons-react'
import ExpandedWrapper from './ExpandedWrapper'
import { DEVELOPER } from '../../data/cards'

const SOCIAL = [
  { key: 'github', Icon: IconBrandGithub, label: 'GitHub', url: DEVELOPER.social.github },
  { key: 'linkedin', Icon: IconBrandLinkedin, label: 'LinkedIn', url: DEVELOPER.social.linkedin },
  { key: 'leetcode', Icon: IconBrandLeetcode, label: 'LeetCode', url: DEVELOPER.social.leetcode },
  { key: 'twitter', Icon: IconBrandTwitter, label: 'Twitter', url: DEVELOPER.social.twitter },
]

function AboutExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="About Me" accent="#6C63FF" onClose={onClose}>
      <div className="grid gap-8 md:grid-cols-[200px_1fr]">
        <motion.img
          src={DEVELOPER.photo}
          alt={DEVELOPER.name}
          className="h-[260px] w-full rounded-2xl object-cover md:h-[320px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <div
            data-reveal-line
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#6BCB77]/20 px-4 py-2 text-sm text-[#6BCB77]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#6BCB77]" />
            {DEVELOPER.status}
          </div>
          <p data-reveal-line className="mb-4 text-[rgba(242,242,255,0.65)] leading-relaxed">
            {DEVELOPER.bio}
          </p>
          <p data-reveal-line className="mb-6 text-sm text-[rgba(242,242,255,0.5)]">
            📍 {DEVELOPER.location}
          </p>
          <div className="flex flex-wrap gap-3">
            {SOCIAL.map(({ key, Icon, label, url }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-colors hover:bg-white/10"
              >
                <Icon size={18} className="text-[#6C63FF]" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ExpandedWrapper>
  )
}

export default memo(AboutExpanded)
