import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconX, IconZoomIn } from '@tabler/icons-react'
import { CERTIFICATES } from '../../data/certificates'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function CertificateCard({ cert, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(cert)}
      className="group relative mx-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/25 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
      style={{
        width: 'min(420px, 80vw)',
        boxShadow: `0 8px 40px ${cert.accent}15`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at center, ${cert.accent}18 0%, transparent 70%)`,
        }}
      />
      <img
        src={cert.image}
        alt={cert.title}
        className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
        draggable={false}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07071a] via-[#07071acc] to-transparent px-5 pb-5 pt-16">
        <p className="text-left text-sm font-semibold text-white">{cert.title}</p>
        <p className="mt-0.5 text-left text-xs text-white/50">{cert.issuer}</p>
      </div>
      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <IconZoomIn size={16} />
      </div>
    </button>
  )
}

function MarqueeRow({ certificates, speed = 40, reverse = false, onSelect }) {
  const reducedMotion = useReducedMotion()
  const doubled = [...certificates, ...certificates]

  if (reducedMotion) {
    return (
      <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} onClick={onSelect} />
        ))}
      </div>
    )
  }

  return (
    <div className="certificate-marquee-mask relative overflow-hidden">
      <div
        className={`certificate-marquee-track flex w-max items-center ${reverse ? 'certificate-marquee-reverse' : ''}`}
        style={{ '--marquee-duration': `${speed}s` }}
      >
        {doubled.map((cert, i) => (
          <CertificateCard key={`${cert.id}-${i}`} cert={cert} onClick={onSelect} />
        ))}
      </div>
    </div>
  )
}

function Lightbox({ cert, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[4000] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative z-10 w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 24 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <IconX size={18} />
          </button>
          <div
            className="overflow-hidden rounded-2xl border shadow-2xl"
            style={{ borderColor: `${cert.accent}40`, boxShadow: `0 0 80px ${cert.accent}25` }}
          >
            <img src={cert.image} alt={cert.title} className="block w-full" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold text-white">{cert.title}</h3>
            <p className="mt-1 text-sm text-white/50">
              {cert.issuer} · {cert.subtitle}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function CertificateFlowSection() {
  const [selected, setSelected] = useState(null)
  const row1 = CERTIFICATES
  const row2 = [...CERTIFICATES].reverse()

  return (
    <section id="certificates" className="relative z-10 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(108,99,255,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6C63FF]">Credentials</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Certifications &amp; Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
            Industry-recognized certifications and hackathon achievements — hover to pause, click to view full size.
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <MarqueeRow certificates={row1} speed={45} onSelect={setSelected} />
          <MarqueeRow certificates={row2} speed={58} onSelect={setSelected} />
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {CERTIFICATES.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelected(cert)}
              className="rounded-full border px-4 py-2 text-xs font-medium transition-all hover:scale-105"
              style={{
                borderColor: `${cert.accent}40`,
                color: cert.accent,
                background: `${cert.accent}10`,
              }}
            >
              {cert.title}
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <Lightbox cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default memo(CertificateFlowSection)
