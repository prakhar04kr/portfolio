import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconExternalLink } from '@tabler/icons-react'
import ExpandedWrapper from './ExpandedWrapper'
import { DEVELOPER } from '../../data/cards'

const PLATFORMS = [
  {
    key: 'github',
    Icon: IconBrandGithub,
    label: 'GitHub',
    handle: 'prakhar04kr',
    url: DEVELOPER.social.github,
    stats: 'Open-source full-stack projects',
    color: '#A855F7',
  },
  {
    key: 'linkedin',
    Icon: IconBrandLinkedin,
    label: 'LinkedIn',
    handle: 'prakhar-kumar-7512aa311',
    url: DEVELOPER.social.linkedin,
    stats: 'Full-Stack · Open to internships',
    color: '#0A66C2',
  },
]

function ProfileExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="Profile" accent="#A855F7" onClose={onClose}>
      <p data-reveal-line className="mb-8 max-w-2xl text-sm leading-relaxed text-[rgba(242,242,255,0.55)] md:text-base">
        Connect with me across platforms. I share full-stack projects, deployed demos, and engineering insights.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
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
            <p className="mt-3 text-center text-xs text-[rgba(242,242,255,0.4)]">{platform.stats}</p>
            <span className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: platform.color }}>
              Visit profile <IconExternalLink size={14} />
            </span>
          </motion.a>
        ))}
      </div>

      <div data-reveal-line className="mt-8 rounded-2xl border border-white/8 bg-[#0d0d18] p-6">
        <p className="text-sm text-[rgba(242,242,255,0.5)]">Email</p>
        <a
          href={`mailto:${DEVELOPER.email}`}
          className="mt-1 inline-block text-lg font-medium text-[#A855F7] transition-opacity hover:opacity-80"
        >
          {DEVELOPER.email}
        </a>
      </div>
    </ExpandedWrapper>
  )
}

export default memo(ProfileExpanded)
