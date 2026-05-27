import { TECH_ICONS } from './tech-icons';

export interface NavItem {
  label: string;
  path: string;
  icon: 'home' | 'summary' | 'experience' | 'skills';
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'linkedin' | 'phone' | 'location' | 'github';
  /** Lien WhatsApp (affiché comme icône à côté du numéro) */
  whatsappHref?: string;
}

export interface TechSkill {
  name: string;
  icon: string;
  /** Logo horizontal (ex. AWS wordmark) */
  wide?: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: TechSkill[];
}

export interface Language {
  name: string;
  level: number;
}

export interface InterestItem {
  label: string;
  icon: 'volunteer' | 'sport' | 'travel' | 'culture';
}

export interface EducationItem {
  title: string;
  period: string;
  detail?: string;
}

export interface CompetitionItem {
  title: string;
  period: string;
  description: string;
  details?: ExperienceDetail[];
  /** Lien vers la page détail projet */
  projectSlug?: string;
}

export interface ExperienceDetail {
  label: string;
  value: string;
}

export interface ExperienceMission {
  title: string;
  details: ExperienceDetail[];
  href?: string;
  linkLabel?: string;
  inProgress?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  missions: ExperienceMission[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  about: string;
  achievements: string[];
  image?: string;
  /** Lien direct vers le site en ligne (carte Summary sans page détail obligatoire) */
  externalUrl?: string;
  /** Court texte sur la carte Featured (page Summary) */
  preview?: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Stagiaire en Développement Full-Stack',
    company: 'NextHope',
    period: 'Février 2026 à Mai 2026',
    missions: [
      {
        title: 'Développement d’une plateforme de recrutement : Talentago',
        href: 'https://talentago.serenity.mg/',
        linkLabel: 'Voir Talentago',
        details: [
          { label: 'Front-end', value: 'Vue.js' },
          { label: 'Back-end et API', value: 'Node.js, API REST' },
          { label: 'Base de données', value: 'PostgreSQL' },
          { label: 'Gestion de version', value: 'Git, Bitbucket' },
          { label: 'Stockage / Cloud', value: 'AWS S3' },
        ],
      },
      {
        title: 'Refonte du site e-commerce : Mass In',
        inProgress: true,
        details: [
          { label: 'Plateforme', value: 'Shopify' },
          { label: 'Gestion des stocks (ERP)', value: 'Odoo' },
          { label: 'Modèle commercial', value: 'Dropshipping' },
          { label: 'Gestion de version', value: 'Git, Bitbucket' },
        ],
      },
    ],
  },
  {
    role: 'Stagiaire en Développement Full-Stack',
    company: 'Digital Afrique Telecom',
    period: 'Juillet 2025 à Octobre 2025',
    missions: [
      {
        title:
          'Conception et développement d’une plateforme MVP de Business Intelligence augmentée par l’IA',
        details: [
          { label: 'Front-end', value: 'Next.js, Tailwind CSS' },
          { label: 'Back-end', value: 'Node.js, ETL' },
          {
            label: 'IA / Data',
            value:
              'Python, prédiction des revenus, détection d’anomalies, chatbot',
          },
          { label: 'Base de données', value: 'PostgreSQL, DWH' },
          { label: 'Outils', value: 'Postman' },
        ],
      },
    ],
  },
];

export const PORTFOLIO = {
  openToWork: true,
  name: 'Lucas RABENAIVO',
  role: 'Développeur Full-Stack',
  cvUrl: '/CV.pdf',
  cvDownloadName: 'Lucas-RABENAIVO-CV.pdf',
  contacts: [
    {
      label: 'Courriel',
      value: 'rabenaivolucas@gmail.com',
      href: 'mailto:rabenaivolucas@gmail.com',
      icon: 'email',
    },
    {
      label: 'GitHub',
      value: 'Lucas-BENAIVO',
      href: 'https://github.com/Lucas-BENAIVO',
      icon: 'github',
    },
    {
      label: 'Téléphone',
      value: '+261 38 19 502 21',
      href: 'tel:+261381950221',
      whatsappHref: 'https://wa.me/261381950221',
      icon: 'phone',
    },
    {
      label: 'Localisation',
      value: 'Ambohimanambola, Antananarivo, Madagascar',
      href: '#',
      icon: 'location',
    },
  ] satisfies ContactItem[],
  nav: [
    { label: 'Accueil', path: '', icon: 'home' },
    { label: 'Résumé', path: 'summary', icon: 'summary' },
    { label: 'Expérience', path: 'experience', icon: 'experience' },
    { label: 'Compétences', path: 'skills', icon: 'skills' },
  ] satisfies NavItem[],
  summary:
    'Curieux, rigoureux et créatif, je me spécialise en développement full-stack avec une passion pour l’intelligence artificielle appliquée. Mon approche méthodique et mon engagement dans l’apprentissage continu visent à transformer les défis techniques en solutions concrètes et innovantes.',
  experience: EXPERIENCE,
  technicalSkills: [
    {
      id: 'languages',
      label: 'Langages',
      skills: [
        { name: 'HTML', icon: TECH_ICONS.html },
        { name: 'CSS', icon: TECH_ICONS.css },
        { name: 'JavaScript', icon: TECH_ICONS.javascript },
        { name: 'TypeScript', icon: TECH_ICONS.typescript },
        { name: 'Python', icon: TECH_ICONS.python },
        { name: 'Java', icon: TECH_ICONS.java },
        { name: 'C#', icon: TECH_ICONS.csharp },
        { name: 'PHP', icon: TECH_ICONS.php },
      ],
    },
    {
      id: 'frontend',
      label: 'Frameworks front-end',
      skills: [
        { name: 'React', icon: TECH_ICONS.react },
        { name: 'Next.js', icon: TECH_ICONS.nextjs },
        { name: 'Vue.js', icon: TECH_ICONS.vuejs },
        { name: 'Angular', icon: TECH_ICONS.angular },
      ],
    },
    {
      id: 'backend',
      label: 'Frameworks back-end',
      skills: [
        { name: 'Express', icon: TECH_ICONS.express },
        { name: 'FastAPI', icon: TECH_ICONS.fastapi },
        { name: 'Spring', icon: TECH_ICONS.spring },
        { name: '.NET', icon: TECH_ICONS.dotnet },
        { name: 'Laravel', icon: TECH_ICONS.laravel },
        { name: 'Symfony', icon: TECH_ICONS.symfony },
      ],
    },
    {
      id: 'cms',
      label: 'E-commerce / CMS',
      skills: [{ name: 'Shopify', icon: TECH_ICONS.shopify }],
    },
    {
      id: 'database',
      label: 'Bases de données',
      skills: [
        { name: 'MySQL', icon: TECH_ICONS.mysql },
        { name: 'PostgreSQL', icon: TECH_ICONS.postgresql },
        { name: 'DWH', icon: TECH_ICONS.dwh },
      ],
    },
    {
      id: 'tools',
      label: 'Outils',
      skills: [
        { name: 'Postman', icon: TECH_ICONS.postman },
        { name: 'Docker', icon: TECH_ICONS.docker },
      ],
    },
    {
      id: 'vcs',
      label: 'Gestion de version',
      skills: [
        { name: 'Git', icon: TECH_ICONS.git },
        { name: 'GitHub', icon: TECH_ICONS.github },
        { name: 'Bitbucket', icon: TECH_ICONS.bitbucket },
      ],
    },
    {
      id: 'cloud',
      label: 'Stockage / Cloud',
      skills: [
        { name: 'Cloudinary', icon: TECH_ICONS.cloudinary },
        { name: 'AWS S3', icon: TECH_ICONS.aws, wide: true },
      ],
    },
    {
      id: 'methodology',
      label: 'Méthodologie',
      skills: [{ name: 'Agile Scrum', icon: TECH_ICONS.scrum }],
    },
  ] satisfies SkillCategory[],
  softSkills: [
    'Rigueur',
    'Autonomie',
    "Écoute active et esprit d'équipe",
    'Adaptabilité',
    "Facilité d'intégration",
  ] satisfies string[],
  interests: [
    { label: 'Bénévolat', icon: 'volunteer' },
    { label: 'Sport et randonnée', icon: 'sport' },
    { label: 'Voyage', icon: 'travel' },
    { label: 'Musique et cinéma', icon: 'culture' },
  ] satisfies InterestItem[],
  languages: [
    { name: 'Malgache', level: 100 },
    { name: 'Français (DELF B2 / DALF C1)', level: 95 },
    { name: 'Anglais', level: 75 },
  ] satisfies Language[],
  education: [
    {
      title: 'Master 1 en Informatique (en cours)',
      period: 'Depuis décembre 2025',
      detail: 'IT University, Andoharanofotsy, Madagascar',
    },
    {
      title: 'Certification en ingénierie IA pour le développement logiciel',
      period: 'Mai 2026',
      detail: 'DataCamp (niveau associé)',
    },
    {
      title: 'Certification en développement Python',
      period: 'Mai 2026',
      detail: 'freeCodeCamp',
    },
    {
      title: 'Certification en développement JavaScript',
      period: 'Avril 2026',
      detail: 'freeCodeCamp',
    },
    {
      title: "Certification en Fondamentaux de l'Intelligence Artificielle",
      period: 'Avril 2026',
      detail: 'DataCamp',
    },
    {
      title: 'Certification en Culture des Données',
      period: 'Avril 2026',
      detail: 'DataCamp',
    },
    {
      title: 'Licence en Informatique',
      period: '2025',
      detail: 'IT University, Andoharanofotsy, Madagascar',
    },
    {
      title: 'Formation en neuromarketing',
      period: '2024',
      detail: 'Free Sell, Antananarivo, Madagascar',
    },
    {
      title: 'Baccalauréat Technologique',
      period: '2022',
      detail: 'Collège Saint Michel, Amparibe, Madagascar',
    },
  ] satisfies EducationItem[],
  competitions: [
    {
      title: 'Solution IoT/IA pour l’agriculture',
      period: 'Hackathon RedShalk — 2e place · Décembre 2024',
      description:
        'Architecture IoT/IA : collecte de données environnementales et recommandations intelligentes.',
      details: [
        {
          label: 'Back-end et API',
          value: 'Java, Servlets, API REST, CRUD, RBAC',
        },
        {
          label: 'Intelligence Artificielle',
          value: 'Python',
        },
        {
          label: 'Base de données',
          value: 'PostgreSQL',
        },
      ],
      projectSlug: 'hackathon-redshalk',
    },
  ] satisfies CompetitionItem[],
  projects: [
    {
      slug: 'mean-centre-commercial',
      title: 'Plateforme web — centre commercial',
      category: 'Projet MEAN — Master 1',
      preview:
        'Application web MEAN pour un centre commercial : profils Admin, Boutique et Acheteurs, API REST et base MongoDB.',
      about:
        'Conception et développement en binôme d’une application web MEAN pour un centre commercial, avec gestion des profils Admin, Boutique et Acheteurs. Stack : Angular, TypeScript, Node.js, Express, MongoDB, API REST, Git/GitHub.',
      achievements: [
        'Architecture multi-rôles (Admin, Boutique, Acheteurs).',
        'Projet réalisé dans le cadre du Master 1 — mars 2026.',
      ],
    },
    {
      slug: 'rush-school',
      title: 'Rush School — K Beauty Academy',
      category: 'Site vitrine — Formations beauté',
      preview:
        'Site vitrine pour une académie beauté : formations ongles & cils, boutique, avis élèves et prise de rendez-vous.',
      externalUrl: 'https://rushschool.vercel.app/',
      about:
        'Site vitrine pour une académie de formations en prothésie ongulaire et extensions de cils : catalogue des formations, boutique, témoignages élèves et prise de rendez-vous.',
      achievements: [
        'Interface moderne, responsive et orientée conversion.',
        'Déployé en production sur Vercel.',
      ],
    },
    {
      slug: 'bi-ia-digital-afrique',
      title: 'Plateforme BI augmentée par l’IA',
      category: 'Stage — Digital Afrique Telecom',
      about:
        'MVP de Business Intelligence avec Next.js, Tailwind CSS, Node.js, ETL et modules IA en Python : prédiction des revenus, détection d’anomalies et chatbot. Données : PostgreSQL et entrepôt (DWH).',
      achievements: [
        'Intégration de pipelines ETL et d’API testées avec Postman.',
        'Fonctionnalités IA pour l’aide à la décision métier.',
      ],
    },
    {
      slug: 'plateforme-recrutement',
      title: 'Plateforme de recrutement',
      category: 'Stage — NextHope',
      about:
        'Développement d’une plateforme de recrutement full-stack : front-end Vue.js, back-end Node.js, API REST, PostgreSQL, stockage AWS S3, versioning Git/Bitbucket.',
      achievements: [
        'Mise en place d’une architecture full-stack complète.',
        'En parallèle : refonte e-commerce « Mass In » (Shopify, Odoo).',
      ],
    },
    {
      slug: 'hackathon-redshalk',
      title: 'Solution IoT/IA pour l’agriculture',
      category: 'Hackathon RedShalk — 2e place',
      about:
        'Conception et développement en équipe d’une architecture IoT/IA permettant la collecte de données environnementales et la génération de recommandations intelligentes.',
      achievements: [
        '2e place au Hackathon RedShalk — décembre 2024.',
        'Back-end et API : Java, Servlets, API REST, CRUD, RBAC.',
        'Intelligence Artificielle : Python.',
        'Base de données : PostgreSQL.',
      ],
    },
  ] satisfies Project[],
  featuredProjectSlugs: ['rush-school', 'mean-centre-commercial'],
};
