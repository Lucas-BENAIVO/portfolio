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
  icon: 'email' | 'linkedin' | 'phone' | 'location';
}

export interface TechSkill {
  name: string;
  icon: string;
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
  role: 'UX/UI Designer',
  cvUrl: '/CV.pdf',
  cvDownloadName: 'Lucas-RABENAIVO-CV.pdf',
  contacts: [
    {
      label: 'Email',
      value: 'tyrone.brooks@gmail.com',
      href: 'mailto:tyrone.brooks@gmail.com',
      icon: 'email',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/tyrone-brooks',
      href: 'https://linkedin.com/in/tyrone-brooks',
      icon: 'linkedin',
    },
    {
      label: 'Phone',
      value: '+1 404-555-9876',
      href: 'tel:+14045559876',
      icon: 'phone',
    },
    {
      label: 'Location',
      value: 'Atlanta, US',
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
    'Designer UX/UI orienté produit, avec une approche centrée utilisateur et une sensibilité forte pour les interfaces claires et les parcours fluides.',
  experience: [
    {
      role: 'Senior UX/UI Designer',
      company: 'Creative Studio',
      period: '2022 — Present',
      description:
        'Conception de parcours utilisateurs, design systems et prototypes haute fidélité pour des applications web et mobile.',
    },
    {
      role: 'Product Designer',
      company: 'Digital Agency',
      period: '2019 — 2022',
      description:
        'Collaboration avec les équipes produit et développement sur des refontes e-commerce et des dashboards.',
    },
    {
      role: 'UI Designer',
      company: 'Freelance',
      period: '2016 — 2019',
      description: 'Identités visuelles, maquettes et livrables pour startups et PME.',
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
        { name: 'AWS S3', icon: TECH_ICONS.aws },
      ],
    },
    {
      id: 'methodology',
      label: 'Méthodologie',
      skills: [{ name: 'Agile Scrum', icon: TECH_ICONS.scrum }],
    },
  ] satisfies SkillCategory[],
  languages: [
    { name: 'English', level: 95 },
    { name: 'Spanish', level: 70 },
    { name: 'French', level: 55 },
  ] satisfies Language[],
  education: [
    {
      title: 'Savannah College of Art and Design (SCAD)',
      detail: 'Bachelor of Fine Arts in User Experience Design (2016)',
    },
    {
      title: 'Google UX Design Certificate',
      detail: 'August 2022',
    },
  ] satisfies EducationItem[],
  projects: [
    {
      slug: 'flowstate',
      title: 'Flowstate',
      category: 'Web Application',
      about:
        'Redesign of an online shopping experience focused on seamless navigation, clearer product discovery, and a checkout flow that reduces friction for mobile users.',
      achievements: [
        'Improved conversion rates by 20% within three months post-launch.',
      ],
    },
  ] satisfies Project[],
  links: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/tyrone-brooks' },
    { label: 'Dribbble', url: 'https://dribbble.com' },
    { label: 'Behance', url: 'https://behance.net' },
    { label: 'GitHub', url: 'https://github.com' },
  ] satisfies LinkItem[],
} as const;
