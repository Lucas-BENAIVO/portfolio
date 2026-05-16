import { TECH_ICONS } from './tech-icons';

export interface NavItem {
  label: string;
  path: string;
  icon: 'home' | 'summary' | 'experience' | 'skills' | 'links';
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'linkedin' | 'phone' | 'location' | 'github';
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

export interface EducationItem {
  title: string;
  detail: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  about: string;
  achievements: string[];
  image?: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export const PORTFOLIO = {
  openToWork: true,
  name: 'Lucas RABENAIVO',
  role: 'Développeur Full-Stack',
  cvUrl: '/CV.pdf',
  cvDownloadName: 'Lucas-RABENAIVO-CV.pdf',
  contacts: [
    {
      label: 'Email',
      value: 'rabenaivolucas@gmail.com',
      href: 'mailto:rabenaivolucas@gmail.com',
      icon: 'email',
    },
    {
      label: 'GitHub',
      value: 'github.com',
      href: 'https://github.com',
      icon: 'github',
    },
    {
      label: 'Phone',
      value: '+261 38 19 502 21',
      href: 'tel:+261381950221',
      icon: 'phone',
    },
    {
      label: 'Location',
      value: 'Ambohimanambola, Antananarivo, Madagascar',
      href: '#',
      icon: 'location',
    },
  ] satisfies ContactItem[],
  nav: [
    { label: 'Home', path: '', icon: 'home' },
    { label: 'Summary', path: 'summary', icon: 'summary' },
    { label: 'Experience', path: 'experience', icon: 'experience' },
    { label: 'Skills', path: 'skills', icon: 'skills' },
    { label: 'Links', path: 'links', icon: 'links' },
  ] satisfies NavItem[],
  summary:
    'Curieux, rigoureux et créatif, je me spécialise en développement full-stack avec une passion pour l’intelligence artificielle appliquée. Mon approche méthodique et mon engagement dans l’apprentissage continu visent à transformer les défis techniques en solutions concrètes et innovantes.',
  experience: [
    {
      role: 'Stagiaire en Développement Full-Stack',
      company: 'NextHope',
      period: 'Février 2026 — Mai 2026',
      description:
        'Développement d’une plateforme de recrutement (Vue.js, Node.js, API REST, PostgreSQL, AWS S3, Git/Bitbucket). Refonte du site e-commerce « Mass In » en cours (Shopify, Odoo, dropshipping).',
    },
    {
      role: 'Stagiaire en Développement Full-Stack',
      company: 'Digital Afrique Telecom',
      period: 'Juillet 2025 — Octobre 2025',
      description:
        'Conception et développement d’une plateforme MVP de Business Intelligence augmentée par l’IA : Next.js, Tailwind CSS, Node.js, ETL, Python (prédiction des revenus, détection d’anomalies, chatbot), PostgreSQL, DWH, Postman.',
    },
  ] satisfies ExperienceItem[],
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
      label: 'Frameworks Front-end',
      skills: [
        { name: 'React', icon: TECH_ICONS.react },
        { name: 'Next.js', icon: TECH_ICONS.nextjs },
        { name: 'Vue.js', icon: TECH_ICONS.vuejs },
        { name: 'Angular', icon: TECH_ICONS.angular },
      ],
    },
    {
      id: 'backend',
      label: 'Frameworks Back-end',
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
  languages: [
    { name: 'Malgache', level: 100 },
    { name: 'Français (DELF B2 / DALF C1)', level: 95 },
    { name: 'Anglais', level: 75 },
  ] satisfies Language[],
  education: [
    {
      title: 'Master 1 en Informatique (en cours)',
      detail: 'Depuis décembre 2025 — IT University, Andoharanofotsy, Madagascar',
    },
    {
      title: 'Certification en ingénierie IA pour le développement logiciel',
      detail: 'Mai 2026 — DataCamp (niveau associé)',
    },
    {
      title: 'Certification en développement Python',
      detail: 'Mai 2026 — freeCodeCamp',
    },
    {
      title: 'Certification en développement JavaScript',
      detail: 'Avril 2026 — freeCodeCamp',
    },
    {
      title: "Certification en Fondamentaux de l'Intelligence Artificielle",
      detail: 'Avril 2026 — DataCamp',
    },
    {
      title: 'Certification en Culture des Données',
      detail: 'Avril 2026 — DataCamp',
    },
    {
      title: 'Licence en Informatique',
      detail: '2025 — IT University, Andoharanofotsy, Madagascar',
    },
    {
      title: 'Formation en neuromarketing',
      detail: '2024 — Free Sell, Antananarivo, Madagascar',
    },
    {
      title: 'Baccalauréat Technologique',
      detail: '2022 — Collège Saint Michel, Amparibe, Madagascar',
    },
  ] satisfies EducationItem[],
  projects: [
    {
      slug: 'mean-centre-commercial',
      title: 'Plateforme web — centre commercial',
      category: 'Projet MEAN — Master 1',
      about:
        'Conception et développement en binôme d’une application web MEAN pour un centre commercial, avec gestion des profils Admin, Boutique et Acheteurs. Stack : Angular, TypeScript, Node.js, Express, MongoDB, API REST, Git/GitHub.',
      achievements: [
        'Architecture multi-rôles (Admin, Boutique, Acheteurs).',
        'Projet réalisé dans le cadre du Master 1 — mars 2026.',
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
        'Conception en équipe d’une architecture IoT/IA pour la collecte de données environnementales et la génération de recommandations intelligentes. Back-end Java (Servlets, API REST, CRUD, RBAC), IA Python, PostgreSQL.',
      achievements: [
        '2e place au Hackathon RedShalk — décembre 2024.',
      ],
    },
  ] satisfies Project[],
  links: [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'freeCodeCamp', url: 'https://www.freecodecamp.org' },
    { label: 'DataCamp', url: 'https://www.datacamp.com' },
    { label: 'Email', url: 'mailto:rabenaivolucas@gmail.com' },
  ] satisfies LinkItem[],
} as const;
