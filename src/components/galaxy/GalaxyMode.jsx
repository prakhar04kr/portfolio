import { memo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  IconArrowUpRight,
  IconAward,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMedal,
  IconMenu2,
  IconPlanet,
  IconTrophy,
  IconX,
} from '@tabler/icons-react'
import {
  ACHIEVEMENTS,
  DEVELOPER,
  PROJECTS,
  RESUME,
  SKILLS,
} from '../../data/cards'
import GalaxyNetworkCanvas from './GalaxyNetworkCanvas'

const NAV_LINKS = [
  { label: 'About', href: '#galaxy-about' },
  { label: 'Experience', href: '#galaxy-experience' },
  { label: 'Projects', href: '#galaxy-projects' },
  { label: 'Skills', href: '#galaxy-skills' },
  { label: 'Contact', href: '#galaxy-contact' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
      <div className="h-px bg-[#1f1f1f]" />
    </div>
  )
}

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const ACHIEVEMENT_ICONS = [IconTrophy, IconMedal, IconAward, IconAward]

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[1px] origin-left bg-[#4a6cf7]"
      style={{ transform: `scaleX(${progress})` }}
    />
  )
}

function GalaxyNav({ onExitGalaxy }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-8 lg:px-12">
          <a href="#galaxy-top" className="text-sm font-bold tracking-wider text-[#f5f5f5] uppercase">
            P. <span className="font-normal">Kumar</span>
            <span className="mb-2 ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#4a6cf7]" />
          </a>
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-wide text-[#888] uppercase transition-colors duration-300 hover:text-[#f5f5f5]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={RESUME.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-wide text-[#4a6cf7] uppercase transition-colors duration-300 hover:text-[#f5f5f5]"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={onExitGalaxy}
              className="flex items-center gap-2 rounded-full border border-[#333] px-3 py-1.5 text-[11px] font-mono tracking-wider text-[#888] uppercase transition-colors hover:border-[#888] hover:text-[#f5f5f5]"
            >
              <IconPlanet size={14} />
              Orbital
            </button>
          </div>
        </div>
      </nav>

      <div className="fixed top-6 left-6 z-50 md:hidden">
        <a href="#galaxy-top" className="text-sm font-bold tracking-wider text-[#f5f5f5] uppercase">
          P. Kumar
        </a>
      </div>
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={onExitGalaxy}
          className="rounded-full border border-[#333] px-2.5 py-1.5 text-[10px] font-mono tracking-wider text-[#888] uppercase"
        >
          Orbital
        </button>
        <button
          type="button"
          className="p-2 text-[#888]"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/95 px-8 pt-24 md:hidden">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold tracking-wide text-[#f5f5f5] uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href={RESUME.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#4a6cf7] uppercase"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  )
}

function Hero() {
  const firstName = DEVELOPER.name.split(' ')[0]
  const lastName = DEVELOPER.name.split(' ').slice(1).join(' ')

  return (
    <section
      id="galaxy-top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 md:pb-20"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-[60%] w-[50%] bg-gradient-to-bl from-[#4a6cf7]/[0.06] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 h-[40%] w-[40%] bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-8 lg:px-12">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible" className="galaxy-label mb-6">
          {DEVELOPER.title} &amp; Engineer
        </motion.p>
        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible">
          <span className="galaxy-display block text-[clamp(3.5rem,12vw,11rem)]">{firstName}</span>
        </motion.h1>
        <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible">
          <span className="galaxy-display-outline block text-[clamp(3.5rem,12vw,11rem)]">{lastName}</span>
        </motion.h1>
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 max-w-xl text-base leading-relaxed text-[#888] sm:text-lg"
        >
          Building scalable full-stack products at the intersection of web platforms, AI agents, and cloud engineering.
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {[
              { icon: <GithubIcon size={16} />, href: DEVELOPER.social.github },
              { icon: <LinkedinIcon size={16} />, href: DEVELOPER.social.linkedin },
              { icon: <IconMail size={16} />, href: `mailto:${DEVELOPER.email}` },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#333] text-[#555] transition-all duration-300 hover:border-[#888] hover:text-[#f5f5f5]"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <motion.p
            className="hidden items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#555] uppercase sm:flex"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  const bioParagraphs = DEVELOPER.bio.split('\n\n').slice(0, 2)

  return (
    <section id="galaxy-about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <motion.div
          className="grid items-start gap-12 md:grid-cols-2 md:gap-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <p className="galaxy-label mb-6">01 / About Me</p>
            <h2 className="galaxy-display mb-8 text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
              Building
              <br />
              Practical
              <br />
              Software
            </h2>
            <div className="space-y-5 text-[15px] leading-relaxed text-[#888]">
              {bioParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[13px]">
              <div>
                <p className="mb-1 font-mono text-[10px] tracking-wider text-[#555] uppercase">Location</p>
                <p className="text-[#f5f5f5]">{DEVELOPER.location}</p>
              </div>
              <div>
                <p className="mb-1 font-mono text-[10px] tracking-wider text-[#555] uppercase">Education</p>
                <p className="text-[#f5f5f5]">B.E. CSE, Sathyabama</p>
              </div>
              <div>
                <p className="mb-1 font-mono text-[10px] tracking-wider text-[#555] uppercase">Focus</p>
                <p className="text-[#f5f5f5]">Full Stack · AI · Cloud</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="/prakhar-photo.jpeg"
              alt={DEVELOPER.name}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl bg-[#1f1f1f] md:grid-cols-4"
          style={{ gap: '1px' }}
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { value: `${PROJECTS.length}+`, label: 'Projects' },
            { value: '1', label: 'Internship' },
            { value: '20+', label: 'Technologies' },
            { value: `${ACHIEVEMENTS.length}`, label: 'Certifications' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] p-6 text-center md:p-8">
              <p className="text-3xl font-bold text-[#f5f5f5] md:text-4xl">{stat.value}</p>
              <p className="mt-2 font-mono text-[11px] tracking-wider text-[#555] uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Experience() {
  const roles = [
    ...RESUME.experience.map((exp) => ({
      org: exp.org,
      subtitle: 'Internship',
      title: exp.title,
      description: exp.description,
      date: exp.date,
      tags: ['React', 'APIs', 'Agile'],
    })),
    {
      org: 'Sathyabama Institute',
      subtitle: 'Computer Science & Engineering',
      title: 'B.E. Undergraduate',
      description:
        'Final-year CSE student focusing on full-stack development, AI-powered applications, cloud platforms, and building production-ready software systems.',
      date: '2023 — 2027',
      tags: ['CGPA 8.6', 'AI', 'Systems'],
    },
  ]

  return (
    <section id="galaxy-experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <p className="galaxy-label mb-6">02 / Experience</p>
        <h2 className="galaxy-display mb-16 text-[clamp(2rem,5vw,4rem)]">
          Where I&apos;ve
          <br />
          Worked
        </h2>

        <div className="space-y-0 border-t border-[#1f1f1f]">
          {roles.map((role) => (
            <motion.div
              key={role.org + role.title}
              className="group -mx-8 border-b border-[#1f1f1f] px-8 py-8 transition-colors duration-500 hover:bg-[#111]/50 md:py-10 lg:-mx-12 lg:px-12"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <p className="text-lg font-semibold text-[#f5f5f5] transition-colors group-hover:text-[#4a6cf7]">
                    {role.org}
                  </p>
                  <p className="mt-0.5 text-sm text-[#555]">{role.subtitle}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="mb-2 font-medium text-[#f5f5f5]">{role.title}</p>
                  <p className="text-sm leading-relaxed text-[#888]">{role.description}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-mono text-sm text-[#555]">{role.date}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:col-span-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#181818] px-3 py-1 font-mono text-[11px] text-[#555]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="galaxy-projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <p className="galaxy-label mb-6">03 / Projects</p>
        <h2 className="galaxy-display mb-16 text-[clamp(2rem,5vw,4rem)]">
          Selected
          <br />
          Work
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {PROJECTS.map((project, i) => {
            const href = project.live && project.live !== '#' ? project.live : project.github
            return (
              <motion.a
                key={project.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="galaxy-project-card group"
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover grayscale-[30%] transition-transform duration-[1.5s] group-hover:scale-110 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.06] bg-black/50 px-2 py-0.5 font-mono text-[10px] text-[#888] backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <IconArrowUpRight size={14} className="text-[#f5f5f5]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-[#f5f5f5] transition-colors duration-300 group-hover:text-[#4a6cf7]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#555]">
                    {project.description.length > 110
                      ? `${project.description.slice(0, 110)}…`
                      : project.description}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const entries = Object.entries(SKILLS)

  return (
    <section id="galaxy-skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <p className="galaxy-label mb-6">04 / Skills</p>
        <h2 className="galaxy-display mb-16 text-[clamp(2rem,5vw,4rem)]">
          Tech
          <br />
          Stack
        </h2>

        <div
          className="grid overflow-hidden rounded-2xl bg-[#1f1f1f] md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1px' }}
        >
          {entries.map(([category, items]) => (
            <motion.div
              key={category}
              className="group bg-[#111] p-6 transition-colors duration-500 hover:bg-[#181818] md:p-8"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="mb-5 text-sm font-semibold tracking-wider text-[#f5f5f5] uppercase">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-[#1f1f1f] bg-[#0a0a0a] px-3 py-1.5 font-mono text-[11px] text-[#888] transition-all duration-300 hover:border-[#555] hover:text-[#f5f5f5]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  const featured = ACHIEVEMENTS.slice(0, 4)

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <p className="galaxy-label mb-6">05 / Achievements</p>
        <h2 className="galaxy-display mb-16 text-[clamp(2rem,5vw,4rem)]">Recognition</h2>

        <div
          className="grid overflow-hidden rounded-2xl bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '1px' }}
        >
          {featured.map((item, i) => {
            const Icon = ACHIEVEMENT_ICONS[i % ACHIEVEMENT_ICONS.length]
            return (
              <motion.div
                key={item.title}
                className="group bg-[#111] p-6 text-center transition-colors duration-500 hover:bg-[#181818] md:p-8"
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a6cf7]/10 text-[#4a6cf7] transition-colors group-hover:bg-[#4a6cf7]/20">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-semibold text-[#f5f5f5]">{item.title}</h3>
                <p className="mt-1 font-mono text-[11px] text-[#4a6cf7]">{item.org}</p>
                <p className="mt-3 text-[12px] leading-relaxed text-[#555]">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    {
      label: 'Email',
      value: DEVELOPER.email,
      href: `mailto:${DEVELOPER.email}`,
      icon: <IconMail size={20} />,
    },
    {
      label: 'GitHub',
      value: 'github.com/prakhar04kr',
      href: DEVELOPER.social.github,
      icon: <IconBrandGithub size={20} />,
    },
    {
      label: 'LinkedIn',
      value: 'prakhar-kumar',
      href: DEVELOPER.social.linkedin,
      icon: <IconBrandLinkedin size={20} />,
    },
  ]

  return (
    <section id="galaxy-contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <p className="galaxy-label mb-6">06 / Contact</p>
        <h2 className="galaxy-display mb-6 text-[clamp(2rem,5vw,4rem)]">
          Let&apos;s Work
          <br />
          Together
        </h2>
        <p className="mb-14 max-w-lg text-[15px] leading-relaxed text-[#888]">
          Open to internships, full-stack roles, AI product work, and collaborations. Don&apos;t hesitate to reach out.
        </p>

        <div className="space-y-0 border-t border-[#1f1f1f]">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group -mx-8 flex items-center justify-between border-b border-[#1f1f1f] px-8 py-6 transition-colors duration-500 hover:bg-[#111]/50 md:py-8 lg:-mx-12 lg:px-12"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#333] text-[#555] transition-all duration-300 group-hover:border-[#888] group-hover:text-[#f5f5f5]">
                  {link.icon}
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-[#555] uppercase">{link.label}</p>
                  <p className="mt-0.5 font-medium text-[#f5f5f5]">{link.value}</p>
                </div>
              </div>
              <IconArrowUpRight
                size={18}
                className="text-[#333] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f5f5f5]"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function GalaxyMode({ onExitGalaxy }) {
  useEffect(() => {
    const prev = document.body.style.background
    document.body.classList.add('galaxy-mode-active')
    document.body.style.background = '#0a0a0a'
    window.scrollTo(0, 0)
    return () => {
      document.body.classList.remove('galaxy-mode-active')
      document.body.style.background = prev
    }
  }, [])

  return (
    <div className="galaxy-root relative min-h-screen bg-[#0a0a0a] text-[#ccc]">
      <GalaxyNetworkCanvas />
      <ScrollProgress />
      <GalaxyNav onExitGalaxy={onExitGalaxy} />

      <main className="relative z-[2]">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>

      <footer className="relative z-[2] border-t border-[#1f1f1f] py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-8 md:flex-row lg:px-12">
          <p className="font-mono text-[11px] tracking-wider text-[#555] uppercase">
            © {new Date().getFullYear()} {DEVELOPER.name}
          </p>
          <p className="font-mono text-[11px] text-[#333]">Designed &amp; Developed with precision</p>
        </div>
      </footer>
    </div>
  )
}

export default memo(GalaxyMode)
