import { memo } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export const FadeInSection = memo(function FadeInSection({
  children,
  className = '',
  delay = 0,
  as = 'section',
  id,
}) {
  const Component = motion[as] || motion.section

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Component>
  )
})

export const SlideUpReveal = memo(function SlideUpReveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}) {
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </Component>
  )
})
