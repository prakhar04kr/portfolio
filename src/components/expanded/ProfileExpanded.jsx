import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconExternalLink } from '@tabler/icons-react'
import { HuggingFaceIcon } from '../icons/HuggingFaceIcon'
import ExpandedWrapper from './ExpandedWrapper'
import { DEVELOPER } from '../../data/cards'

const PLATFORMS = [
  {
    key: 'github',
    Icon: IconBrandGithub,
    label: 'GitHub',
    handle: 'Sahil5273',
    url: DEVELOPER.social.github,
    stats: 'Open-source AI & full-stack projects',
    color: '#A855F7',
  },
  {
    key: 'linkedin',
    Icon: IconBrandLinkedin,
    label: 'LinkedIn',
    handle: 'sahil-kumar-7410a728a',
    url: DEVELOPER.social.linkedin,
    stats: 'AI/ML · Open to internships',
    color: '#0A66C2',
  },
  {
    key: 'huggingface',
    Icon: HuggingFaceIcon,
    label: 'HuggingFace',
    handle: 'huggingface.co',
    url: DEVELOPER.social.huggingface,
    stats: 'Deployed Spaces · 100+ daily queries',
    color: '#FFD21E',
  },
]

function ProfileExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="Profile" accent="#A855F7" onClose={onClose}>
      <p data-reveal-line className="mb-8 max-w-xl text-[rgba(242,242,255,0.65)]">
        Connect with me across platforms. I share AI projects, deployed demos on Hugging Face Spaces, and engineering insights.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {PLATFORMS.map((platform, i) => (
          <motion.a
            key={platform.key}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col rounded-2xl p-6 transition-all hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            style={{ borderColor: `${platform.color}20` }}
          >
            <div
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
              style={{ background: `${platform.color}18` }}
            >
              <platform.Icon size={28} style={{ color: platform.color }} />
            </div>
            <h3 className="text-lg font-bold text-white">{platform.label}</h3>
            <p className="mt-1 text-sm text-[rgba(242,242,255,0.4)]">{platform.handle}</p>
            <p className="mt-3 text-xs leading-relaxed text-[rgba(242,242,255,0.55)]">{platform.stats}</p>
            <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: platform.color }}>
              Visit profile <IconExternalLink size={12} />
            </div>
          </motion.a>
        ))}
      </div>

      <div data-reveal-line className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-white/50">Email</p>
        <a
          href={`mailto:${DEVELOPER.email}`}
          className="mt-1 block text-lg font-semibold text-[#A855F7] hover:underline"
        >
          {DEVELOPER.email}
        </a>
        <p className="mt-4 text-sm text-white/50">Phone</p>
        <p className="mt-1 text-lg font-semibold text-white">{DEVELOPER.phone}</p>
      </div>
    </ExpandedWrapper>
  )
}

export default memo(ProfileExpanded)
