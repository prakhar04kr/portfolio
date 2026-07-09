import { memo, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  IconUserCircle,
  IconBrandGithub,
  IconLayoutGrid,
  IconCpu,
  IconFileCv,
  IconTrophy,
  IconMailForward,
  IconRocket,
  IconArrowRight,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import { HuggingFaceIcon } from '../icons/HuggingFaceIcon'
import { DEVELOPER } from '../../data/cards'

const ICONS = {
  'user-circle': IconUserCircle,
  'brand-github': IconBrandGithub,
  'layout-grid': IconLayoutGrid,
  cpu: IconCpu,
  'file-cv': IconFileCv,
  trophy: IconTrophy,
  'mail-forward': IconMailForward,
  rocket: IconRocket,
}

const SOCIAL_ICONS = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  huggingface: HuggingFaceIcon,
}

function CardPreview({ preview, accent }) {
  if (!preview) return null

  switch (preview.type) {
    case 'bio':
      return (
        <div className="px-8">
          {preview.lines.map((line, i) => (
            <p key={i} className="text-[13px] leading-relaxed text-[rgba(255,255,255,0.65)]">
              {line}
            </p>
          ))}
        </div>
      )
    case 'social':
      return (
        <div className="flex items-center justify-center gap-4 px-8">
          {preview.socials.map((key) => {
            const Icon = SOCIAL_ICONS[key]
            return (
              <div
                key={key}
                className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110"
                style={{ background: `${accent}26` }}
              >
                <Icon size={24} style={{ color: accent }} stroke={1.5} />
              </div>
            )
          })}
        </div>
      )
    case 'pills':
      return (
        <div className="flex flex-col gap-2.5 px-8 w-full">
          {preview.items.map((item) => (
            <span
              key={item}
              className="rounded-full px-3.5 py-2 text-[11px] text-[rgba(255,255,255,0.7)] truncate"
              style={{ background: `${accent}14`, border: `1px solid ${accent}22` }}
            >
              {item}
            </span>
          ))}
        </div>
      )
    case 'tags':
      return (
        <div className="flex flex-wrap justify-center gap-2 px-8">
          {preview.items.map((item) => (
            <span
              key={item}
              className="rounded-full px-3.5 py-1.5 text-[11px] text-[rgba(255,255,255,0.72)]"
              style={{ background: `${accent}12`, border: `1px solid ${accent}22` }}
            >
              {item}
            </span>
          ))}
        </div>
      )
    case 'bars':
      return (
        <div className="flex flex-wrap justify-center gap-2 px-8">
          {preview.items.map((item) => (
            <span
              key={typeof item === 'string' ? item : item.label}
              className="rounded-full px-3.5 py-1.5 text-[11px] text-[rgba(255,255,255,0.72)]"
              style={{ background: `${accent}12`, border: `1px solid ${accent}22` }}
            >
              {typeof item === 'string' ? item : item.label}
            </span>
          ))}
        </div>
      )
    case 'resume-preview':
      return (
        <div className="mx-8 space-y-2.5">
          <div className="rounded-lg border border-white/8 bg-white/3 px-4 py-3">
            <p className="text-[11px] font-semibold text-white/80">{preview.education}</p>
            <p className="text-[10px] text-white/40 mt-0.5 leading-tight">{preview.org}</p>
            <p className="text-[10px] mt-1" style={{ color: accent }}>{preview.cgpa}</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {preview.skills.map((s) => (
              <span
                key={s}
                className="rounded-full px-2 py-0.5 text-[10px]"
                style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}25` }}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="space-y-0.5">
            {preview.certs.map((c) => (
              <div key={c} className="flex items-center gap-1.5">
                <span className="text-[10px]" style={{ color: `${accent}80` }}>✓</span>
                <span className="text-[10px] text-white/50 truncate">{c}</span>
              </div>
            ))}
          </div>
        </div>
      )
    case 'featured-projects':
      return (
        <div className="flex flex-col gap-2.5 px-8">
          {preview.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl px-4 py-3"
              style={{ background: `${accent}08`, border: `1px solid ${accent}16` }}
            >
              <p className="text-[12px] font-semibold text-white/90">{item.title}</p>
              <p className="text-[10px] text-white/50 mt-0.5">{item.desc}</p>
              <p className="text-[10px] mt-1" style={{ color: accent }}>{item.tech}</p>
            </div>
          ))}
        </div>
      )
    case 'achievements':
      return (
        <div className="flex flex-col gap-2.5 px-8">
          {preview.items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] text-[rgba(255,255,255,0.7)]"
              style={{ background: `${accent}12` }}
            >
              <IconTrophy size={14} style={{ color: accent }} />
              {item}
            </div>
          ))}
        </div>
      )
    case 'availability':
      return (
        <div className="flex items-center justify-center gap-2 px-8">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#6BCB77]" />
          <span className="text-[13px] text-[rgba(255,255,255,0.65)]">Available for internships</span>
        </div>
      )
    default:
      return null
  }
}

const PortfolioCard = memo(function PortfolioCard({
  card,
  index,
  isHovered,
  isDimmed,
  onHover,
  onLeave,
  onClick,
  animateIn,
  layoutMode = 'globe',
  setCursor,
}) {
  const [localHover, setLocalHover] = useState(false)
  const cardRef = useRef(null)
  const Icon = ICONS[card.icon] || IconUserCircle
  const hovered = isHovered || localHover

  const handleMouseMove = useCallback(
    (e) => {
      if (layoutMode !== 'globe' && layoutMode !== 'tablet') return
      const rect = cardRef.current?.getBoundingClientRect()
      if (!rect) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      cardRef.current.style.setProperty('--tilt-x', `${-dy * 8}deg`)
      cardRef.current.style.setProperty('--tilt-y', `${dx * 8}deg`)
    },
    [layoutMode],
  )

  const handleEnter = () => {
    setLocalHover(true)
    onHover?.(card.id)
    setCursor?.('card', card.accent)
  }

  const handleLeave = () => {
    setLocalHover(false)
    onLeave?.()
    setCursor?.('default')
    if (cardRef.current) {
      cardRef.current.style.setProperty('--tilt-x', '0deg')
      cardRef.current.style.setProperty('--tilt-y', '0deg')
    }
  }

  const widthClass =
    layoutMode === 'mobile' ? 'w-[calc(100vw-32px)]' : layoutMode === 'tablet' ? 'w-full' : 'w-[320px]'

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${widthClass} h-[420px] cursor-pointer select-none`}
      style={{
        opacity: isDimmed ? 0.6 : 1,
        transform: layoutMode === 'tablet' ? 'perspective(1200px)' : undefined,
        '--tilt-x': '0deg',
        '--tilt-y': '0deg',
      }}
      initial={animateIn ? { scale: 0, opacity: 0 } : false}
      animate={animateIn ? { scale: 1, opacity: 1 } : { opacity: isDimmed ? 0.6 : 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 14, delay: index * 0.1 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMouseMove}
      onClick={() => onClick?.(card.id)}
      data-card-id={card.id}
    >
      <div
        className={`card-glow ${hovered ? 'card-glow-active' : ''}`}
        style={{ background: `radial-gradient(circle, ${card.accent}18 0%, transparent 72%)` }}
      />
      <div
        className="glass-card relative flex h-full flex-col overflow-hidden rounded-[24px] will-transform transition-shadow duration-400"
        style={{
          transform:
            layoutMode === 'tablet'
              ? `rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) translateZ(${hovered ? 20 : 0}px)`
              : undefined,
          boxShadow: hovered
            ? `0 12px 40px -16px ${card.accent}20, 0 0 0 1px ${card.accent}14, inset 0 1px 0 rgba(255,255,255,0.08)`
            : '0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        <motion.div
          className="w-full flex-shrink-0"
          style={{ background: card.accent }}
          animate={{ height: hovered ? 12 : 8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />

        <div className="flex flex-1 flex-col items-center overflow-hidden min-h-0 px-2">
          <motion.div
            className="mt-8 flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: `${card.accent}18` }}
            animate={hovered ? { rotate: 12, scale: 1.15 } : { rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <Icon size={40} style={{ color: card.accent }} stroke={1.5} />
          </motion.div>

          <h3 className="mt-5 px-8 text-center text-[22px] font-bold tracking-[-0.02em] text-white">{card.title}</h3>
          <p className="mt-2 px-8 text-center text-[13px] leading-relaxed text-[rgba(255,255,255,0.50)]">{card.subtitle}</p>

          <div className="mx-8 my-6 h-px w-[calc(100%-64px)] bg-white/8" />

          <div className="flex-1 w-full overflow-hidden">
            <CardPreview preview={card.preview} accent={card.accent} />
          </div>

          <div className="flex w-full items-center justify-between px-8 py-6">
            {card.preview?.badge ? (
              <span
                className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ background: `${card.preview.badge.color}26`, color: card.preview.badge.color }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: card.preview.badge.color }} />
                {card.preview.badge.text}
              </span>
            ) : card.id === 'profile' ? (
              <span
                className="rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ background: `${card.accent}26`, color: card.accent }}
              >
                @{DEVELOPER.name.split(' ')[0].toLowerCase()}
              </span>
            ) : (
              <span />
            )}
            <motion.span
              animate={{ x: hovered ? 8 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <IconArrowRight size={18} className="text-white/60" />
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

export default PortfolioCard
