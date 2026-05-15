export interface NavLink {
  label: string;
  fragment: string;
}

export interface Project {
  title: string;
  description: string;
}

export const PORTFOLIO = {
  name: 'Lucas',
  role: 'Développeur',
  email: 'contact@example.com',
  about: 'Texte de présentation à personnaliser.',
  nav: [
    { label: 'Accueil', fragment: 'hero' },
    { label: 'À propos', fragment: 'about' },
    { label: 'Compétences', fragment: 'skills' },
    { label: 'Projets', fragment: 'projects' },
    { label: 'Contact', fragment: 'contact' },
  ] satisfies NavLink[],
  skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  projects: [
    { title: 'Projet 1', description: 'Description du projet 1.' },
    { title: 'Projet 2', description: 'Description du projet 2.' },
  ] satisfies Project[],
} as const;
