import { memo } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  'AI/ML Engineering Internship',
  'GenAI & RAG Development',
  'Cloud-Native AI Applications',
  'Full-Stack Development',
  'Computer Vision Projects',
]

function OpenToWorkWidget() {
  return (
    <section className="relative z-10 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-[#6BCB77]/20 p-6 md:p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(107,203,119,0.06) 0%, rgba(7,7,26,0.8) 100%)',
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(ellipse at top left, rgba(107,203,119,0.12) 0%, transparent 60%)',
            }}
          />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            <div className="flex-shrink-0">
              <div className="mb-1 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6BCB77] opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6BCB77]" />
                </span>
                <h3 className="text-xl font-bold text-white">Open To Work</h3>
              </div>
              <p className="ml-6 text-sm text-white/40">
                Seeking immediate internship or campus-trainee roles in AI/ML &amp; cloud-native development.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {ROLES.map((role, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCB77]/20 text-[10px] text-[#6BCB77]">
                    ✓
                  </span>
                  <span className="text-sm text-white/75">{role}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(OpenToWorkWidget)
