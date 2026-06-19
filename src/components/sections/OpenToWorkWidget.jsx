import { memo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ROLES = [
  'Software Development Internship',
  'Full Stack Development',
  'Backend Development',
  'Java Developer Roles',
  'AI & Web Development Projects',
]

function OpenToWorkWidget() {
  const { t } = useTranslation()

  const roles = t('openToWork.roles', { returnObjects: true })
  const displayRoles = Array.isArray(roles) ? roles : ROLES

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
              <div className="flex items-center gap-3 mb-1">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6BCB77] opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6BCB77]" />
                </span>
                <h3 className="text-xl font-bold text-white">
                  {t('openToWork.title')}
                </h3>
              </div>
              <p className="text-sm text-white/40 ml-6">
                {t('openToWork.footer')}
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {displayRoles.map((role, i) => (
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
