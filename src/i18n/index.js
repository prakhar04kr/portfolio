import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        profile: 'Profile',
        work: 'Work',
        skills: 'Skills',
        resume: 'Resume',
        contact: 'Contact',
      },
      search: {
        placeholder: 'Search projects, skills, certifications...',
        label: 'Search Portfolio',
        noResults: 'No results found',
        results: 'Results for',
        categories: {
          projects: 'Projects',
          skills: 'Skills',
          certifications: 'Certifications',
          casestudies: 'Case Studies',
        },
      },
      openToWork: {
        title: 'Open To Work',
        roles: [
          'Software Development Internship',
          'Full Stack Development',
          'Backend Development',
          'Java Developer Roles',
          'AI & Web Development Projects',
        ],
        footer: 'Available for internships and collaborative software projects.',
      },
      caseStudies: {
        title: 'Project Case Studies',
        subtitle:
          'A deeper look into the architecture, engineering decisions, technical challenges, and future roadmap behind my most impactful projects.',
        sections: {
          overview: 'Overview',
          problem: 'Problem Statement',
          solution: 'Solution',
          tech: 'Tech Stack',
          architecture: 'System Architecture',
          features: 'Core Features',
          challenges: 'Engineering Challenges',
          unique: 'What Makes It Unique',
          future: 'Future Enhancements',
          learning: 'Learning Outcomes',
        },
        expand: 'Read Case Study',
        collapse: 'Collapse',
        domain: 'Domain',
      },
      about: {
        status: 'Open to Work',
        location: 'Chennai, India',
      },
      contact: {
        available: 'Available for internships',
      },
    },
  },
  hi: {
    translation: {
      nav: {
        about: 'परिचय',
        profile: 'प्रोफ़ाइल',
        work: 'काम',
        skills: 'कौशल',
        resume: 'रेज़ुमे',
        contact: 'संपर्क',
      },
      search: {
        placeholder: 'प्रोजेक्ट, कौशल, सर्टिफिकेट खोजें...',
        label: 'पोर्टफोलियो खोजें',
        noResults: 'कोई परिणाम नहीं मिला',
        results: 'परिणाम',
        categories: {
          projects: 'प्रोजेक्ट्स',
          skills: 'कौशल',
          certifications: 'सर्टिफिकेट',
          casestudies: 'केस स्टडी',
        },
      },
      openToWork: {
        title: 'काम के लिए उपलब्ध',
        roles: [
          'सॉफ्टवेयर डेवलपमेंट इंटर्नशिप',
          'फुल स्टैक डेवलपमेंट',
          'बैकएंड डेवलपमेंट',
          'जावा डेवलपर भूमिकाएं',
          'AI और वेब डेवलपमेंट प्रोजेक्ट्स',
        ],
        footer: 'इंटर्नशिप और सहयोगी सॉफ्टवेयर प्रोजेक्ट्स के लिए उपलब्ध।',
      },
      caseStudies: {
        title: 'प्रोजेक्ट केस स्टडी',
        subtitle: 'मेरे सबसे प्रभावशाली प्रोजेक्ट्स की आर्किटेक्चर और इंजीनियरिंग चुनौतियों पर गहरी नज़र।',
        sections: {
          overview: 'सारांश',
          problem: 'समस्या',
          solution: 'समाधान',
          tech: 'टेक स्टैक',
          architecture: 'सिस्टम आर्किटेक्चर',
          features: 'मुख्य विशेषताएं',
          challenges: 'इंजीनियरिंग चुनौतियां',
          unique: 'विशेषता',
          future: 'भविष्य के सुधार',
          learning: 'सीखे गए पाठ',
        },
        expand: 'केस स्टडी पढ़ें',
        collapse: 'बंद करें',
        domain: 'डोमेन',
      },
      about: { status: 'काम के लिए उपलब्ध', location: 'चेन्नई, भारत' },
      contact: { available: 'इंटर्नशिप के लिए उपलब्ध' },
    },
  },
  fr: {
    translation: {
      nav: {
        about: 'À propos',
        profile: 'Profil',
        work: 'Travaux',
        skills: 'Compétences',
        resume: 'CV',
        contact: 'Contact',
      },
      search: {
        placeholder: 'Rechercher projets, compétences, certifications...',
        label: 'Rechercher Portfolio',
        noResults: 'Aucun résultat',
        results: 'Résultats pour',
        categories: {
          projects: 'Projets',
          skills: 'Compétences',
          certifications: 'Certifications',
          casestudies: 'Études de cas',
        },
      },
      openToWork: {
        title: 'Ouvert aux opportunités',
        roles: [
          'Stage en développement logiciel',
          'Développement Full Stack',
          'Développement Backend',
          'Rôles développeur Java',
          'Projets AI & Web',
        ],
        footer: 'Disponible pour des stages et projets collaboratifs.',
      },
      caseStudies: {
        title: 'Études de cas',
        subtitle: 'Un regard approfondi sur l\'architecture et les décisions d\'ingénierie de mes projets.',
        sections: {
          overview: 'Aperçu',
          problem: 'Problématique',
          solution: 'Solution',
          tech: 'Stack technique',
          architecture: 'Architecture système',
          features: 'Fonctionnalités',
          challenges: 'Défis techniques',
          unique: 'Ce qui le distingue',
          future: 'Améliorations futures',
          learning: 'Apprentissages',
        },
        expand: 'Lire l\'étude de cas',
        collapse: 'Réduire',
        domain: 'Domaine',
      },
      about: { status: 'Ouvert aux opportunités', location: 'Chennai, Inde' },
      contact: { available: 'Disponible pour des stages' },
    },
  },
  de: {
    translation: {
      nav: {
        about: 'Über mich',
        profile: 'Profil',
        work: 'Projekte',
        skills: 'Fähigkeiten',
        resume: 'Lebenslauf',
        contact: 'Kontakt',
      },
      search: {
        placeholder: 'Projekte, Fähigkeiten, Zertifikate suchen...',
        label: 'Portfolio durchsuchen',
        noResults: 'Keine Ergebnisse',
        results: 'Ergebnisse für',
        categories: {
          projects: 'Projekte',
          skills: 'Fähigkeiten',
          certifications: 'Zertifikate',
          casestudies: 'Fallstudien',
        },
      },
      openToWork: {
        title: 'Offen für Stellen',
        roles: [
          'Software-Entwicklungspraktikum',
          'Full-Stack-Entwicklung',
          'Backend-Entwicklung',
          'Java-Entwicklerrollen',
          'KI & Web-Entwicklungsprojekte',
        ],
        footer: 'Verfügbar für Praktika und kollaborative Softwareprojekte.',
      },
      caseStudies: {
        title: 'Fallstudien',
        subtitle: 'Ein detaillierter Blick auf Architektur und technische Entscheidungen meiner wichtigsten Projekte.',
        sections: {
          overview: 'Überblick',
          problem: 'Problemstellung',
          solution: 'Lösung',
          tech: 'Tech-Stack',
          architecture: 'Systemarchitektur',
          features: 'Kernfunktionen',
          challenges: 'Technische Herausforderungen',
          unique: 'Was es einzigartig macht',
          future: 'Zukünftige Verbesserungen',
          learning: 'Lernziele',
        },
        expand: 'Fallstudie lesen',
        collapse: 'Einklappen',
        domain: 'Bereich',
      },
      about: { status: 'Offen für Stellen', location: 'Chennai, Indien' },
      contact: { available: 'Verfügbar für Praktika' },
    },
  },
  es: {
    translation: {
      nav: {
        about: 'Sobre mí',
        profile: 'Perfil',
        work: 'Proyectos',
        skills: 'Habilidades',
        resume: 'CV',
        contact: 'Contacto',
      },
      search: {
        placeholder: 'Buscar proyectos, habilidades, certificaciones...',
        label: 'Buscar Portfolio',
        noResults: 'Sin resultados',
        results: 'Resultados para',
        categories: {
          projects: 'Proyectos',
          skills: 'Habilidades',
          certifications: 'Certificaciones',
          casestudies: 'Casos de estudio',
        },
      },
      openToWork: {
        title: 'Abierto a oportunidades',
        roles: [
          'Prácticas en desarrollo de software',
          'Desarrollo Full Stack',
          'Desarrollo Backend',
          'Roles de desarrollador Java',
          'Proyectos de IA y desarrollo web',
        ],
        footer: 'Disponible para prácticas y proyectos colaborativos de software.',
      },
      caseStudies: {
        title: 'Casos de estudio',
        subtitle: 'Una mirada profunda a la arquitectura y decisiones de ingeniería de mis proyectos más impactantes.',
        sections: {
          overview: 'Descripción',
          problem: 'Problema',
          solution: 'Solución',
          tech: 'Stack tecnológico',
          architecture: 'Arquitectura del sistema',
          features: 'Funcionalidades',
          challenges: 'Desafíos técnicos',
          unique: 'Lo que lo hace único',
          future: 'Mejoras futuras',
          learning: 'Aprendizajes',
        },
        expand: 'Leer caso de estudio',
        collapse: 'Colapsar',
        domain: 'Dominio',
      },
      about: { status: 'Abierto a oportunidades', location: 'Chennai, India' },
      contact: { available: 'Disponible para prácticas' },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nLng',
    },
    interpolation: { escapeValue: false },
  })

export default i18n
