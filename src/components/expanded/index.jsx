import { lazy, Suspense } from 'react'

const AboutExpanded = lazy(() => import('./AboutExpanded'))
const ProfileExpanded = lazy(() => import('./ProfileExpanded'))
const ProjectsExpanded = lazy(() => import('./ProjectsExpanded'))
const SkillsExpanded = lazy(() => import('./SkillsExpanded'))
const ResumeExpanded = lazy(() => import('./ResumeExpanded'))
const AchievementsExpanded = lazy(() => import('./AchievementsExpanded'))
const ContactExpanded = lazy(() => import('./ContactExpanded'))
const FeaturedExpanded = lazy(() => import('./FeaturedExpanded'))

const MAP = {
  about: AboutExpanded,
  profile: ProfileExpanded,
  projects: ProjectsExpanded,
  skills: SkillsExpanded,
  resume: ResumeExpanded,
  achievements: AchievementsExpanded,
  contact: ContactExpanded,
  featured: FeaturedExpanded,
}

export function ExpandedContent({ cardId, onClose }) {
  const Component = MAP[cardId]
  if (!Component) return null

  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        </div>
      }
    >
      <Component onClose={onClose} />
    </Suspense>
  )
}
