import { memo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconX, IconZoomIn } from '@tabler/icons-react'
import { CERTIFICATES } from '../../data/certificates'

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
        />
        <motion.div
          className="relative z-10 w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <IconX size={18} />
          </button>
          <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c18] shadow-2xl">
            <img src={cert.image} alt={cert.title} className="block w-full" decoding="async" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold text-white">{cert.title}</h3>
            <p className="mt-1 text-sm text-white/50">
              {cert.issuer} · {cert.subtitle}
            </p>
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-[#8b85ff] hover:underline"
              >
                Verify credential →
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function CertificateFlowSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="relative z-10 py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/35">Credentials</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Certifications &amp; Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
            Industry-recognized certifications and hackathon awards. Click any certificate to view full size.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {CERTIFICATES.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelected(cert)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.02]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="block h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <IconZoomIn size={14} />
                </div>
              </div>
              <div className="border-t border-white/8 px-5 py-4">
                <p className="text-sm font-semibold text-white">{cert.title}</p>
                <p className="mt-1 text-xs text-white/45">{cert.issuer}</p>
                <p className="mt-1 text-xs text-white/35">{cert.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <Lightbox cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default memo(CertificateFlowSection)
