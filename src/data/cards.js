export const DEVELOPER = {
  name: 'Prakhar Kumar',
  monogram: 'PK',
  title: 'Full-Stack Developer',
  location: 'Chennai, India',
  email: 'kumar04prakhar@gmail.com',

  bio: 'I craft immersive digital experiences at the intersection of design and engineering.Building products for startups and enterprises, I specialize in React ecosystems, real-time systems, and motion-rich interfaces that feel alive.',
  shortBio: 'Building products at the intersection of design & engineering. 6+ years shipping for startups & enterprise.',
  status: 'Open to Work',

  social: {
    github: 'https://github.com/prakhar04kr',
    linkedin: 'https://linkedin.com/in/prakhar-kumar-7512aa311',
    leetcode: 'https://leetcode.com/',
    twitter: 'https://twitter.com/',
  },
  photo: 'https://picsum.photos/seed/prakharkumar/400/500',
}


export const PROJECTS = [
  {
    id: 1,

    title: 'Dynamic Web-Based Expense Tracker',
    description:
      'Java, JSP, Servlet full-stack web application for real-time tracking of financial input data. Implemented a graph analysis module to visualize expenditure trends, included a savings plan generator, and added a real-time alert system for budget thresholds to improve financial discipline.',
    tech: ['Java', 'JSP', 'Servlet'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 2,
    title: 'Sales Data Dashboard',
    description:
      'Python-based analytics for large sales datasets using Pandas and visualization with Matplotlib. Built an interactive dashboard in a Jupyter Notebook to visualize KPIs like revenue growth and overall business performance.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1557825835-70d97fd7c6f0?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 3,
    title: 'YojnaConnect – Government Scheme Discovery Platform',
    description:
      'Full-stack platform built with React, Node.js, Express.js, and MySQL to help users discover relevant government welfare schemes. Features include scheme search, eligibility filtering, category-based recommendations, and detailed scheme pages via RESTful APIs with database integration.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 4,
    title: 'Chess Engine Web App – Interactive Browser-Based Chess Platform',
    description:
      'Browser-based chess platform built with React + TypeScript and TanStack. Includes a custom AI engine powered by Negamax search, Alpha-Beta pruning, Zobrist hashing, and transposition tables. Features a responsive 3D user interface, board customization, hint generation, and game analytics.',
    tech: ['React', 'TypeScript', 'TanStack'],
    live: 'https://chess.prakharkr.online/',
    github: '#',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 5,
    title: 'TypeRacer – Full-Stack Real-Time Web Application',
    description:
      'Multiplayer typing game built with React, Node.js, Socket.IO, and MySQL. Enables real-time race synchronization and live leaderboard updates. Includes secure authentication, WPM/accuracy tracking, RESTful APIs, and database-driven score management with a responsive UX.',
    tech: ['React', 'Node.js', 'Socket.IO', 'MySQL'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
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
      title: 'B.E., Computer Science and Engineering',
      org: 'Sathyabama Institute of Science and Technology, Chennai',
      date: 'CGPA: 8.52/10.00 (2023 — 2027)',
      description: '',
    },
    {
      title: '10th (Railway High School)',
      org: 'Patna',
      date: '59.4% (2023)',
      description: '',
    },
    {
      title: '12th (Don Bosco Academy)',
      org: 'Patna',
      date: '87% (2021)',
      description: '',
    },
  ],
  experience: [
    {
      title: 'Software Development Intern',
      org: 'https://cloudspital.in/',
      date: '',
      description: '',
    },
  ],
  certifications: [
    {
      title: 'Google AI Essentials',
      org: 'Google',
      date: '',
    },
    {
      title: 'Google Prompting Essentials',
      org: 'Google',
      date: '',
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      org: 'Google',
      date: '',
    },
    {
      title: 'Google Student Ambassador',
      org: 'Google',
      date: '',
    },
    {
      title: 'Data Analysis with Python',
      org: 'IBM',
      date: '',
    },
    {
      title: 'Python 101 for Data Science',
      org: 'IBM',
      date: '',
    },
    {
      title: 'Full Stack Development (MERN)',
      org: 'Algoxfusion',
      date: '',
    },
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
    subtitle: '5 highlighted builds',
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
    subtitle: 'Selected portfolio highlights',
    accent: '#14B8A6',
    icon: 'rocket',
    preview: {
      type: 'pills',
      items: ['AI SaaS Dashboard', 'Collab Tool'],
    },
  },
]
