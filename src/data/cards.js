export const DEVELOPER = {
  name: 'Sahil Kumar',
  monogram: 'SK',
  title: 'AI/ML Engineer & Full-Stack Developer',
  location: 'Bhopal, India',
  email: 'sahil06030652@gmail.com',
  phone: '+91 8789573655',

  bio: 'B.Tech CSE (AI & ML) student at VIT Bhopal (graduating Sept 2027) with hands-on experience building GenAI, RAG, and full-stack applications.\n\nI specialize in machine learning, deep learning, NLP, and generative AI — building real-world systems with LangChain, HuggingFace, Azure AI, and modern web stacks.\n\nMy projects span computer vision navigation aids, RAG-powered document assistants, speech-to-text platforms, and AI-enhanced social impact apps deployed on Hugging Face Spaces and cloud infrastructure.\n\nActively seeking an immediate internship or campus-trainee role in AI/ML or cloud-native development.',
  shortBio:
    'B.Tech CSE (AI & ML) student building GenAI, RAG, and full-stack applications. Seeking AI/ML internship roles.',
  status: 'Open to Internships',

  social: {
    github: 'https://github.com/Sahil5273',
    linkedin: 'https://www.linkedin.com/in/sahil-kumar-7410a728a/',
    huggingface: 'https://huggingface.co/',
    email: 'mailto:sahil06030652@gmail.com',
  },
  photo: 'https://ui-avatars.com/api/?name=Sahil+Kumar&size=400&background=6C63FF&color=fff&bold=true&format=png',
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Marg-Darshak',
    description:
      'AI navigation device for the visually impaired. Streams live video from Raspberry Pi to a Flask + YOLOv8 server for real-time hazard detection (cars, stairs, potholes) with distance estimation at 15 FPS. Multi-threaded TTS voice alerts and microservice design earned 5th place at Health-Hack 2025 (VIT Bhopal × Johns Hopkins).',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'Raspberry Pi'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Smart Document Assistant',
    description:
      'RAG-powered PDF chatbot with a full pipeline: PDF extraction → HuggingFace embeddings → ChromaDB retrieval → Gemini API. Grounds answers in source docs to cut hallucinations; supports PDFs up to 10 MB (~200 pages). Includes AI safety guardrails and bias mitigation; deployed to Hugging Face Spaces handling 100+ daily queries.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Gemini API', 'Gradio'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Audio Transcription System',
    description:
      'Full-stack speech-to-text app with React frontend and async FastAPI backend using Faster-Whisper. Handles MP3/WAV/M4A files with non-blocking processing, smoothly transcribing clips up to 10 minutes without server timeouts. Deployed to Hugging Face Spaces.',
    tech: ['React', 'FastAPI', 'Faster-Whisper', 'Hugging Face Spaces'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1478737270235-90f4771bd50b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'ShareBite',
    description:
      'Surplus food redistribution platform with React.js & Firebase managing real-time donation feeds with Role-Based Access Control. Node.js/Express AI microservice uses Gemini API to extract food metadata from uploads. Integrated Cloudinary, LocationIQ geocoding, and DB transactions to prevent concurrent claim errors.',
    tech: ['React.js', 'Node.js', 'Firebase', 'Gemini API', 'Cloudinary'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
  },
]

export const SKILLS = {
  'AI / ML & GenAI': [
    { name: 'Machine Learning', level: 88 },
    { name: 'Deep Learning', level: 85 },
    { name: 'NLP & RAG', level: 90 },
    { name: 'Generative AI', level: 92 },
    { name: 'Computer Vision', level: 86 },
  ],
  Languages: [
    { name: 'Python', level: 92 },
    { name: 'JavaScript', level: 85 },
    { name: 'C++', level: 78 },
    { name: 'SQL', level: 82 },
  ],
  'Frameworks & Tools': [
    { name: 'LangChain', level: 90 },
    { name: 'HuggingFace', level: 88 },
    { name: 'OpenCV / YOLOv8', level: 85 },
    { name: 'FastAPI / Flask', level: 87 },
    { name: 'React.js', level: 84 },
  ],
  'Cloud & DevOps': [
    { name: 'Microsoft Azure', level: 86 },
    { name: 'Hugging Face Spaces', level: 90 },
    { name: 'Docker', level: 80 },
    { name: 'Firebase', level: 82 },
    { name: 'Git & REST APIs', level: 88 },
  ],
}

export const RESUME = {
  education: [
    {
      title: 'B.Tech CSE (AI & ML Specialisation)',
      org: 'VIT Bhopal University',
      date: 'Sept 2023 — Sept 2027 · CGPA: 8.04 / 10',
      description: '',
    },
  ],
  experience: [],
  certifications: [
    {
      title: '5th Place (Silver Medal) — Health-Hack 2025',
      org: 'VIT Bhopal × Johns Hopkins University',
      date: 'Feb 2025',
    },
    {
      title: 'Azure AI Apps and Agents Developer Associate (AI-103)',
      org: 'Microsoft',
      date: '2025',
    },
    {
      title: 'OCI 2025 Certified Generative AI Professional',
      org: 'Oracle Cloud Infrastructure',
      date: '2025',
    },
    {
      title: 'IBM AI Developer Certificate',
      org: 'IBM',
      date: '2025',
    },
    {
      title: 'Introduction to Responsible AI',
      org: 'Google Cloud',
      date: '2025',
    },
  ],
}

export const ACHIEVEMENTS = [
  {
    icon: 'trophy',
    title: 'Health-Hack 2025 — Silver Medal (5th Place)',
    org: 'VIT Bhopal × Johns Hopkins University',
    date: 'Feb 2025',
    description: 'Top 5 of 236 teams from 150+ universities for Marg-Darshak — AI navigation device for the visually impaired.',
    image: '/certificates/health-hack-2025.svg',
  },
  {
    icon: 'trophy',
    title: 'Microsoft Certified: Azure AI Apps and Agents Developer',
    org: 'Microsoft · AI-103',
    date: '2025',
    description: 'Associate-level certification demonstrating expertise in building AI applications and agents on Azure.',
    image: '/certificates/azure-ai-103.png',
  },
  {
    icon: 'star',
    title: 'Oracle Cloud Infrastructure Generative AI Professional',
    org: 'Oracle',
    date: '2025',
    description: 'Professional certification in OCI Generative AI services, LLM integration, and cloud-native AI solutions.',
    image: '/certificates/oracle-genai.svg',
  },
  {
    icon: 'star',
    title: 'IBM AI Developer Certificate',
    org: 'IBM',
    date: '2025',
    description: 'Comprehensive program covering machine learning, deep learning, and AI application deployment.',
    image: '/certificates/ibm-ai-developer.png',
  },
  {
    icon: 'star',
    title: 'Google Cloud — Introduction to Responsible AI',
    org: 'Google Cloud',
    date: '2025',
    description: 'Completion badge covering ethical AI principles, bias mitigation, and responsible AI deployment.',
    image: '/certificates/google-responsible-ai.svg',
  },
]

export const CARDS = [
  {
    id: 'about',
    navId: 'about',
    title: 'About Me',
    subtitle: 'AI/ML Engineer & Developer',
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
    subtitle: 'GitHub · LinkedIn · HuggingFace',
    accent: '#A855F7',
    icon: 'brand-github',
    preview: {
      type: 'social',
      socials: ['github', 'linkedin', 'huggingface'],
    },
  },
  {
    id: 'projects',
    navId: 'work',
    title: 'Projects',
    subtitle: '4 AI & full-stack builds',
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
    subtitle: 'AI/ML · Languages · Cloud',
    accent: '#FF6B6B',
    icon: 'cpu',
    preview: {
      type: 'bars',
      items: [
        { label: 'Python', value: 92 },
        { label: 'RAG / GenAI', value: 90 },
        { label: 'Azure AI', value: 86 },
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
      education: 'B.Tech CSE (AI & ML)',
      org: 'VIT Bhopal University',
      cgpa: 'CGPA: 8.04/10',
      skills: ['Python', 'LangChain', 'React', 'Azure AI'],
      certs: ['Microsoft Azure AI-103', 'Oracle GenAI Professional'],
    },
  },
  {
    id: 'achievements',
    navId: 'achievements',
    title: 'Achievements',
    subtitle: 'Certs · Awards · Milestones',
    accent: '#6BCB77',
    icon: 'trophy',
    preview: {
      type: 'achievements',
      items: [
        'Health-Hack 2025 Silver Medal',
        'Microsoft Azure AI-103',
        'Oracle GenAI Professional',
        '+2 More Certifications',
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
      text: 'Available for AI/ML internships',
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
        { title: 'Marg-Darshak', desc: 'AI Navigation for Visually Impaired', tech: 'YOLOv8 • OpenCV • Flask' },
        { title: 'Smart Document Assistant', desc: 'RAG-Powered PDF Chatbot', tech: 'LangChain • ChromaDB • Gemini' },
      ],
    },
  },
]
