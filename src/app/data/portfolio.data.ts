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

export interface SoftwareTool {
  name: string;
  abbr: string;
  color: string;
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
  name: 'Tyrone Brooks',
  role: 'UX/UI Designer',
  cvUrl: '/cv.pdf',
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
  software: [
    { name: 'Framer', abbr: 'Fr', color: '#0055ff' },
    { name: 'Figma', abbr: 'Fi', color: '#a259ff' },
    { name: 'Photoshop', abbr: 'Ps', color: '#31a8ff' },
    { name: 'Illustrator', abbr: 'Ai', color: '#ff9a00' },
    { name: 'Sketch', abbr: 'Sk', color: '#fdb300' },
    { name: 'Midjourney', abbr: 'Mj', color: '#e5e5e5' },
    { name: 'Spline', abbr: 'Sp', color: '#3b82f6' },
    { name: 'Blender', abbr: 'Bl', color: '#e87d0d' },
  ] satisfies SoftwareTool[],
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
