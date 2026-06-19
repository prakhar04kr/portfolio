export const DEVELOPER = {
  name: 'Prakhar Kumar',
  monogram: 'PK',
  title: 'Full-Stack Developer',
  location: 'Chennai, India',
  email: 'kumar04prakhar@gmail.com',

  bio: 'Final-year Computer Science Engineering student passionate about full-stack development, AI-powered applications, and scalable web platforms.\n\nI enjoy transforming ideas into practical software solutions using React, Node.js, Java, TypeScript, MySQL, and modern web technologies.\n\nMy experience includes building government scheme discovery systems, real-time multiplayer applications, intelligent recommendation platforms, AI-powered interview platforms, and browser-based AI engines.\n\nI am actively seeking opportunities as a Software Developer Intern where I can contribute to impactful products while continuing to grow as an engineer.',
  shortBio: 'Final-year Computer Science Engineering student passionate about full-stack development, AI-powered applications, and scalable web platforms.',
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
    title: 'YojnaConnect',
    description:
      'Full-stack platform built with React, Vite, Node.js, Express.js, and MySQL to help users discover relevant government welfare schemes. Features include scheme search, eligibility filtering, a recommendation engine, and detailed scheme pages via REST APIs with full-stack architecture.',
    tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MySQL'],
    live: 'https://yojnaconnect.prakharkr.online/',
    github: 'https://github.com/prakhar04kr/YOJNA-CONNECT',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 2,
    title: 'Chess Engine Web App',
    description:
      'Browser-based chess platform built with React + TypeScript and TanStack. Includes a custom AI engine powered by Negamax search, Alpha-Beta pruning, Zobrist hashing, and transposition tables. Features a responsive 3D user interface, board customization, hint generation, and game analytics.',
    tech: ['React', 'TypeScript', 'TanStack'],
    live: 'https://chess.prakharkr.online/',
    github: 'https://github.com/prakhar04kr/laychess',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 3,
    title: 'TypeRacer – Full-Stack Real-Time Web Application',
    description:
      'Multiplayer typing game built with React, Node.js, Socket.IO, and MySQL. Enables real-time race synchronization and live leaderboard updates. Includes secure authentication, WPM/accuracy tracking, RESTful APIs, and database-driven score management with a responsive UX.',
    tech: ['React', 'Node.js', 'Socket.IO', 'MySQL'],
    live: 'https://typeracer.prakharkr.online/',
    github: 'https://github.com/prakhar04kr/KEYFORGE_IN',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 4,
    title: 'Dynamic Web-Based Expense Tracker',
    description:
      'Java, JSP, Servlet full-stack web application for real-time tracking of financial input data. Implemented a graph analysis module to visualize expenditure trends, included a savings plan generator, and added a real-time alert system for budget thresholds to improve financial discipline.',
    tech: ['Java', 'JSP', 'Servlet'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
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
      title: '12th Grade',
      org: 'Railway High School, Patna',
      date: '59.4%',
      description: '',
    },
    {
      title: '10th Grade',
      org: 'Don Bosco Academy, Patna',
      date: '87%',
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
    title: 'Google AI Essentials',
    org: 'Google',
    date: '',
    description: 'Completed Google\'s foundational AI literacy program covering practical AI concepts and tools.',
  },
  {
    icon: 'trophy',
    title: 'Google Prompting Essentials',
    org: 'Google',
    date: '',
    description: 'Mastered prompt engineering techniques for working effectively with generative AI models.',
  },
  {
    icon: 'trophy',
    title: 'Google Cybersecurity Professional Certificate',
    org: 'Google',
    date: '',
    description: 'Comprehensive cybersecurity certification covering threat detection, network security, and incident response.',
  },
  {
    icon: 'trophy',
    title: 'Google Student Ambassador',
    org: 'Google',
    date: '',
    description: 'Recognized as a Google Student Ambassador, representing Google technologies in the campus community.',
  },
  {
    icon: 'star',
    title: 'Data Analysis with Python',
    org: 'IBM',
    date: '',
    description: 'IBM certification in data analysis using Python, pandas, NumPy, and data visualization libraries.',
  },
  {
    icon: 'star',
    title: 'Python 101 for Data Science',
    org: 'IBM',
    date: '',
    description: 'IBM foundational certification covering Python programming for data science workflows.',
  },
  {
    icon: 'star',
    title: 'Full Stack Development MERN',
    org: 'Algoxfusion',
    date: '',
    description: 'Certified in full stack MERN development covering MongoDB, Express, React, and Node.js.',
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
    subtitle: '4 highlighted builds',
    accent: '#00D9FF',
    icon: 'layout-grid',
    preview: {
      type: 'pills',
      items: PROJECTS.map((p) => p.title),
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
    preview: {
      type: 'resume-preview',
      education: 'B.E. Computer Science & Engineering',
      org: 'Sathyabama Institute of Science and Technology',
      cgpa: 'CGPA: 8.52/10',
      skills: ['Java', 'React', 'Node.js', 'MySQL'],
      certs: ['Google AI Essentials', 'Google Cybersecurity Professional Certificate'],
    },
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
      items: [
        'Google AI Essentials',
        'Google Cybersecurity Professional Certificate',
        'IBM Data Analysis with Python',
        '+4 More Certifications',
      ],
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
      text: 'Available for internships',
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
      type: 'featured-projects',
      items: [
        { title: 'YojnaConnect', desc: 'Government Scheme Discovery Platform', tech: 'React • Node.js • MySQL' },
        { title: 'LayChess', desc: 'AI Chess Engine', tech: 'Negamax • Alpha-Beta Pruning' },
      ],
    },
  },
]
