export const DEVELOPER = {
  name: 'Alex Rivera',
  monogram: 'AR',
  title: 'Full-Stack Developer & Designer',
  location: 'San Francisco, CA',
  email: 'alex.rivera@email.com',
  bio: 'I craft immersive digital experiences at the intersection of design and engineering. With 6+ years building products for startups and enterprises, I specialize in React ecosystems, real-time systems, and motion-rich interfaces that feel alive.',
  shortBio: 'Building products at the intersection of design & engineering. 6+ years shipping for startups & enterprise.',
  status: 'Open to Work',
  social: {
    github: 'https://github.com/alexrivera',
    linkedin: 'https://linkedin.com/in/alexrivera',
    leetcode: 'https://leetcode.com/alexrivera',
    twitter: 'https://twitter.com/alexrivera',
  },
  photo: 'https://picsum.photos/seed/alexrivera/400/500',
}

export const PROJECTS = [
  {
    id: 1,
    title: 'AI SaaS Dashboard',
    description: 'Enterprise analytics platform with GPT-powered insights, real-time data pipelines, and customizable reporting widgets.',
    tech: ['React', 'Python', 'OpenAI'],
    live: '#',
    github: '#',
    image: 'https://picsum.photos/seed/aisaas/600/400',
  },
  {
    id: 2,
    title: 'Design System Library',
    description: 'Comprehensive component library with Storybook documentation, Figma tokens sync, and accessibility-first patterns.',
    tech: ['Storybook', 'Figma', 'TypeScript'],
    live: '#',
    github: '#',
    image: 'https://picsum.photos/seed/designsys/600/400',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Secure fintech application with biometric auth, instant transfers, and spending analytics for 50K+ users.',
    tech: ['React Native', 'Node', 'Stripe'],
    live: '#',
    github: '#',
    image: 'https://picsum.photos/seed/banking/600/400',
  },
  {
    id: 4,
    title: 'Real-time Collab Tool',
    description: 'Multiplayer whiteboard with WebRTC video, cursor presence, and conflict-free replicated data structures.',
    tech: ['Socket.io', 'WebRTC', 'Next.js'],
    live: '#',
    github: '#',
    image: 'https://picsum.photos/seed/collab/600/400',
  },
  {
    id: 5,
    title: 'Portfolio Generator',
    description: 'CLI + web tool that scaffolds animated portfolio sites with Three.js scenes and GSAP scroll sequences.',
    tech: ['Vite', 'GSAP', 'Three.js'],
    live: '#',
    github: '#',
    image: 'https://picsum.photos/seed/portfolio/600/400',
  },
  {
    id: 6,
    title: 'Open Source CLI Tool',
    description: 'Developer productivity CLI with plugin architecture, GitHub Actions integration, and 2K+ weekly downloads.',
    tech: ['Rust', 'GitHub Actions'],
    live: '#',
    github: '#',
    image: 'https://picsum.photos/seed/cli/600/400',
  },
]

export const SKILLS = {
  Frontend: [
    { name: 'React', level: 92 },
    { name: 'TypeScript', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'Three.js', level: 78 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'GraphQL', level: 75 },
    { name: 'Rust', level: 68 },
  ],
  DevOps: [
    { name: 'AWS', level: 74 },
    { name: 'Docker', level: 78 },
    { name: 'CI/CD', level: 82 },
    { name: 'Kubernetes', level: 65 },
  ],
}

export const RESUME = {
  education: [
    {
      title: 'B.S. Computer Science',
      org: 'UC Berkeley',
      date: '2016 — 2020',
      description: 'Focus on Human-Computer Interaction and Distributed Systems. Dean\'s List, 3.8 GPA.',
    },
  ],
  experience: [
    {
      title: 'Senior Full-Stack Engineer',
      org: 'NovaTech Labs',
      date: '2022 — Present',
      description: 'Lead frontend architecture for AI products. Built design system used by 40+ engineers.',
    },
    {
      title: 'Full-Stack Developer',
      org: 'PixelForge Studio',
      date: '2020 — 2022',
      description: 'Shipped 12 client products. Introduced React Native and automated testing pipelines.',
    },
    {
      title: 'Frontend Intern',
      org: 'Streamline Inc.',
      date: '2019 — 2020',
      description: 'Built dashboard components and contributed to open-source React libraries.',
    },
  ],
  certifications: [
    { title: 'AWS Solutions Architect', org: 'Amazon Web Services', date: '2023' },
    { title: 'Meta Frontend Professional', org: 'Meta', date: '2022' },
  ],
}

export const ACHIEVEMENTS = [
  {
    icon: 'trophy',
    title: 'Best Developer Experience Award',
    org: 'React Summit 2024',
    date: 'Nov 2024',
    description: 'Recognized for open-source design system contributions and developer tooling.',
  },
  {
    icon: 'star',
    title: 'Hackathon Grand Prize',
    org: 'ETHGlobal SF',
    date: 'Mar 2024',
    description: 'Built real-time collaboration tool with WebRTC in 48 hours. $15K prize.',
  },
  {
    icon: 'trophy',
    title: 'Google Developer Expert',
    org: 'Google',
    date: 'Jan 2023',
    description: 'Selected for expertise in web technologies and community leadership.',
  },
  {
    icon: 'star',
    title: '1K+ LeetCode Problems',
    org: 'LeetCode',
    date: 'Dec 2022',
    description: 'Top 5% global ranking. Specialist in graphs, DP, and system design.',
  },
]

export const CARDS = [
  {
    id: 'about',
    navId: 'about',
    title: 'About Me',
    subtitle: 'Full-Stack Developer & Designer',
    accent: '#6C63FF',
    icon: 'user-circle',
    preview: {
      type: 'bio',
      lines: [DEVELOPER.shortBio],
      badge: { text: DEVELOPER.status, color: '#6BCB77' },
    },
  },
  {
    id: 'profile',
    navId: 'profile',
    title: 'Profile',
    subtitle: 'GitHub · LinkedIn · LeetCode',
    accent: '#A855F7',
    icon: 'brand-github',
    preview: {
      type: 'social',
      socials: ['github', 'linkedin', 'leetcode'],
    },
  },
  {
    id: 'projects',
    navId: 'work',
    title: 'Projects',
    subtitle: '6 shipped products',
    accent: '#00D9FF',
    icon: 'layout-grid',
    preview: {
      type: 'pills',
      items: PROJECTS.slice(0, 3).map((p) => p.title),
    },
  },
  {
    id: 'skills',
    navId: 'skills',
    title: 'Skills',
    subtitle: 'Frontend · Backend · DevOps',
    accent: '#FF6B6B',
    icon: 'cpu',
    preview: {
      type: 'bars',
      items: [
        { label: 'React', value: 92 },
        { label: 'Node', value: 85 },
        { label: 'AWS', value: 74 },
      ],
    },
  },
  {
    id: 'resume',
    navId: 'resume',
    title: 'Resume',
    subtitle: 'Download · View · Share',
    accent: '#FFD93D',
    icon: 'file-cv',
    preview: { type: 'document' },
  },
  {
    id: 'achievements',
    navId: 'achievements',
    title: 'Achievements',
    subtitle: 'Awards · Certs · Milestones',
    accent: '#6BCB77',
    icon: 'trophy',
    preview: {
      type: 'achievements',
      items: ['React Summit Award', 'Google Developer Expert'],
    },
  },
  {
    id: 'contact',
    navId: 'contact',
    title: 'Contact',
    subtitle: "Let's build something",
    accent: '#FF922B',
    icon: 'mail-forward',
    preview: {
      type: 'availability',
      text: 'Available for freelance',
    },
  },
  {
    id: 'featured',
    navId: 'featured',
    title: 'Featured Work',
    subtitle: 'Latest launches & highlights',
    accent: '#14B8A6',
    icon: 'rocket',
    preview: {
      type: 'pills',
      items: ['AI SaaS Dashboard', 'Collab Tool'],
    },
  },
]
