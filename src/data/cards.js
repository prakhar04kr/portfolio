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
  'Programming Languages': [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 88 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'SQL', level: 85 },
    { name: 'HTML5', level: 92 },
    { name: 'CSS3', level: 90 },
  ],
  Frontend: [
    { name: 'React', level: 92 },
    { name: 'Vite', level: 88 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  Backend: [
    { name: 'Spring Boot', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'REST APIs', level: 90 },
    { name: 'WebSockets', level: 82 },
  ],
  Databases: [
    { name: 'MySQL', level: 88 },
    { name: 'MongoDB', level: 82 },
    { name: 'Microsoft Fabric', level: 85 },
  ],
  'AI & Cloud': [
    { name: 'Microsoft Azure', level: 88 },
    { name: 'Azure AI', level: 90 },
    { name: 'Azure AI Foundry', level: 88 },
    { name: 'AI Agents', level: 85 },
    { name: 'Prompt Engineering', level: 90 },
    { name: 'Large Language Models (LLMs)', level: 88 },
  ],
  Tools: [
    { name: 'Git', level: 92 },
    { name: 'GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 88 },
    { name: 'Vercel', level: 85 },
    { name: 'DigitalOcean', level: 80 },
  ],
  'Core Concepts': [
    { name: 'Data Structures & Algorithms', level: 88 },
    { name: 'Object-Oriented Programming', level: 90 },
    { name: 'DBMS', level: 85 },
    { name: 'Operating Systems', level: 82 },
    { name: 'Computer Networks', level: 80 },
    { name: 'JWT Authentication', level: 88 },
    { name: 'Full Stack Development', level: 90 },
  ],
}

export const RESUME = {
  pdf: '/resume.pdf',

  summary:
    'Final-year B.E. Computer Science student with hands-on experience in full stack development, AI applications, and data engineering. Skilled in building scalable web applications and REST APIs using React, Spring Boot, and Node.js with strong problem-solving abilities. Experienced in developing intelligent software solutions leveraging Microsoft Azure AI, Azure AI Foundry, AI agents, prompt engineering, and large language models (LLMs) for real-world applications. Proficient in modern software engineering practices including database design, API integration, cloud deployment, and agile development with a focus on delivering performant, user-centric applications.',

  education: [
    {
      title: 'B.E., Computer Science and Engineering',
      org: 'Sathyabama Institute of Science and Technology, Chennai',
      date: 'CGPA: 8.6/10.00 (2023 — 2027)',
      description: '',
    },
    {
      title: '12th Grade',
      org: 'Railway High School, Patna',
      date: '59.4% (2023)',
      description: '',
    },
    {
      title: '10th Grade',
      org: 'Don Bosco Academy, Patna',
      date: '87% (2021)',
      description: '',
    },
  ],

  experience: [
    {
      title: 'Software Development Intern',
      org: 'Cloudspital Pvt. Ltd.',
      date: 'Jun 2026 — Aug 2026',
      description:
        'Developed and enhanced software modules for healthcare technology solutions, contributing to scalable web applications. Built and integrated RESTful APIs and optimized database interactions to improve application functionality. Collaborated with cross-functional teams to deliver features, troubleshoot issues, and improve performance using agile practices and Git.',
    },
  ],

  skills: {
    'Programming Languages': ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
    Frontend: ['React', 'Vite', 'Tailwind CSS'],
    Backend: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
    Databases: ['MySQL', 'MongoDB', 'Microsoft Fabric'],
    'AI & Cloud': [
      'Microsoft Azure',
      'Azure AI',
      'Azure AI Foundry',
      'AI Agents',
      'Prompt Engineering',
      'Large Language Models (LLMs)',
    ],
    Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'DigitalOcean'],
    'Core Concepts': [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'JWT Authentication',
      'Full Stack Development',
    ],
  },

  projects: [
    {
      title: 'Chess Engine Web App',
      tech: ['React', 'TypeScript', 'TanStack Start'],
    },
    {
      title: 'YojnaConnect - Government Scheme Discovery Platform',
      tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MySQL'],
    },
    {
      title: 'TypeRacer - Full-Stack Real-Time Web Application',
      tech: ['React', 'Node.js', 'Socket.IO', 'MySQL'],
    },
  ],

  certifications: [
    {
      title: 'Azure AI Apps and Agents Developer Associate',
      org: 'Microsoft',
      date: '2026',
    },
    {
      title: 'Fabric Data Engineer Associate',
      org: 'Microsoft',
      date: '2026',
    },
    {
      title: 'Google AI Essentials',
      org: 'Google',
      date: '2025',
    },
    {
      title: 'Data Analysis with Python',
      org: 'IBM',
      date: '2024',
    },
  ],

  cardPreview: {
    skills: ['React', 'Azure AI', 'Spring Boot', 'Java'],
    certs: ['Azure AI Apps Developer Associate', 'Fabric Data Engineer Associate'],
  },
}


export const ACHIEVEMENTS = [
  {
    icon: 'trophy',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    org: 'Oracle',
    date: 'Mar 2026 — Mar 2028',
    description:
      'Foundational certification validating knowledge of Oracle Cloud Infrastructure AI services, machine learning concepts, and cloud-based AI solutions.',
  },
  {
    icon: 'trophy',
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    org: 'Microsoft',
    date: 'Jul 2026 — Jul 2027',
    description:
      'Credential ID 38FA8C4113FDA50B. Validates expertise in designing and implementing data engineering solutions using Microsoft Fabric.',
  },
  {
    icon: 'trophy',
    title: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate',
    org: 'Microsoft',
    date: 'Jul 2026 — Jul 2027',
    description:
      'Credential ID D25201096078B9FB. Demonstrates proficiency in building AI-powered applications and intelligent agents on Microsoft Azure.',
  },
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
    subtitle: 'GitHub · LinkedIn',
    accent: '#A855F7',
    icon: 'brand-github',
    preview: {
      type: 'social',
      socials: ['github', 'linkedin'],
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
    subtitle: 'Full Stack · AI & Cloud · Databases',
    accent: '#FF6B6B',
    icon: 'cpu',
    preview: {
      type: 'bars',
      items: [
        { label: 'React', value: 92 },
        { label: 'Java', value: 90 },
        { label: 'Azure AI', value: 90 },
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
        'Oracle OCI AI Foundations Associate',
        'Microsoft Fabric Data Engineer Associate',
        'Azure AI Apps and Agents Developer Associate',
        '+7 More Certifications',
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
