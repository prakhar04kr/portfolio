import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'
import ExpandedWrapper from './ExpandedWrapper'
import { PROJECTS } from '../../data/cards'

function ProjectsExpanded({ onClose }) {
  return (
    <ExpandedWrapper title="Projects" accent="#00D9FF" onClose={onClose}>
      <p data-reveal-line className="mb-8 text-[rgba(242,242,255,0.65)]">
        Four shipped products spanning computer vision, RAG, speech-to-text, and social impact platforms.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.id}
            className="glass-card overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full object-cover"
              loading="lazy"
              width="1200"
              height="800"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[rgba(242,242,255,0.55)]">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-2.5 py-1 text-[11px]"
                    style={{ background: '#00D9FF18', color: '#00D9FF' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full bg-[#00D9FF] px-4 py-2 text-xs font-semibold text-[#07071A]"
                >
                  Live <IconExternalLink size={14} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 hover:bg-white/5"
                >
                  GitHub <IconBrandGithub size={14} />
                </a>
              </div>
            </div>

          </motion.article>
        ))}
      </div>
    </ExpandedWrapper>
  )
}

export default memo(ProjectsExpanded)
