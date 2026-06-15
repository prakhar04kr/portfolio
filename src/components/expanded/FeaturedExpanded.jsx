import { memo } from 'react'
import { motion } from 'framer-motion'
import ExpandedWrapper from './ExpandedWrapper'
import { PROJECTS } from '../../data/cards'

function FeaturedExpanded({ onClose }) {
  const featured = [PROJECTS[0], PROJECTS[3], PROJECTS[4]]

  return (
    <ExpandedWrapper title="Featured Work" accent="#14B8A6" onClose={onClose}>
      <p data-reveal-line className="mb-8 text-[rgba(242,242,255,0.65)]">
        Hand-picked highlights from recent launches and open-source contributions.
      </p>
      {featured.map((project, i) => (
        <motion.div
          key={project.id}
          className="glass-card mb-6 flex flex-col overflow-hidden rounded-2xl md:flex-row"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover md:h-auto md:w-64"
            loading="lazy"
            width="1200"
            height="800"
          />

          <div className="p-6">
            <span className="text-xs font-medium text-[#14B8A6]">Featured #{i + 1}</span>
            <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-[rgba(242,242,255,0.55)]">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </ExpandedWrapper>
  )
}

export default memo(FeaturedExpanded)
