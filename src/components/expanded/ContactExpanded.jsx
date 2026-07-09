import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconSend } from '@tabler/icons-react'
import { HuggingFaceIcon } from '../icons/HuggingFaceIcon'
import ExpandedWrapper from './ExpandedWrapper'
import { DEVELOPER } from '../../data/cards'

function ContactExpanded({ onClose }) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <ExpandedWrapper title="Contact" accent="#FF922B" onClose={onClose}>
      <div data-reveal-line className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#6BCB77]/15 px-4 py-2 text-sm text-[#6BCB77]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#6BCB77]" />
        Available for AI/ML internships
      </div>

      <p data-reveal-line className="mb-2 text-sm text-[rgba(242,242,255,0.5)]">
        Currently based in
      </p>
      <span data-reveal-line className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        📍 {DEVELOPER.location}
      </span>
      <p data-reveal-line className="mb-8 text-sm text-[rgba(242,242,255,0.5)]">
        Or reach me directly at{' '}
        <a href={`mailto:${DEVELOPER.email}`} className="text-[#FF922B] hover:underline">
          {DEVELOPER.email}
        </a>
      </p>

      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <p className="text-lg font-semibold text-[#6BCB77]">Message sent!</p>
          <p className="mt-2 text-sm text-[rgba(242,242,255,0.5)]">I&apos;ll get back to you within 24 hours.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            data-reveal-line
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#FF922B]/50"
          />
          <input
            data-reveal-line
            type="email"
            placeholder="Email address"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#FF922B]/50"
          />
          <textarea
            data-reveal-line
            placeholder="Tell me about the opportunity..."
            rows={5}
            required
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#FF922B]/50"
          />
          <motion.button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF922B] py-4 font-semibold text-[#07071A]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message <IconSend size={18} />
          </motion.button>
        </form>
      )}

      <div className="mt-10 flex justify-center gap-4">
        {[
          { Icon: IconBrandGithub, url: DEVELOPER.social.github },
          { Icon: IconBrandLinkedin, url: DEVELOPER.social.linkedin },
          { Icon: HuggingFaceIcon, url: DEVELOPER.social.huggingface },
        ].map(({ Icon, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
          >
            <Icon size={22} className="text-[#FF922B]" />
          </a>
        ))}
      </div>
    </ExpandedWrapper>
  )
}

export default memo(ContactExpanded)
