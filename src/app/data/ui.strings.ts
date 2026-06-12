import type { Locale } from './portfolio.data';

export interface UiStrings {
  downloadCv: string;
  contact: string;
  openMenu: string;
  closeMenu: string;
  menu: string;
  mainNav: string;
  openToWork: string;
  photoOf: string;
  locationLabel: string;
  realisations: string;
  realisationsSubtitle: string;
  featuredProjects: string;
  competitions: string;
  education: string;
  experience: string;
  experienceSubtitle: string;
  inProgress: string;
  viewSite: string;
  skills: string;
  skillsAria: string;
  skillsSubtitle: string;
  softSkills: string;
  languages: string;
  interests: string;
  contactFooter: string;
  workTogether: string;
  backToTop: string;
  back: string;
  about: string;
  achievements: string;
  projectPageTitle: string;
  viewProject: string;
  viewDetails: string;
  viewCode: string;
  githubPending: string;
  tooltipSite: string;
  tooltipDetails: string;
  tooltipCode: string;
  switchToEn: string;
  switchToFr: string;
  cvNotFound: string;
  cvWrongFile: string;
}

const UI_FR: UiStrings = {
  downloadCv: 'Télécharger le CV',
  contact: 'Contact',
  openMenu: 'Ouvrir le menu',
  closeMenu: 'Fermer',
  menu: 'Menu',
  mainNav: 'Navigation principale',
  openToWork: 'Open to work',
  photoOf: 'Photo de',
  locationLabel: 'Basé à Madagascar',
  realisations: 'Réalisations',
  realisationsSubtitle: 'Projets, compétitions & formation',
  featuredProjects: 'Projets phares',
  competitions: 'Compétition & récompense',
  education: 'Formation & certificats',
  experience: 'Expérience',
  experienceSubtitle: 'Parcours professionnel & missions',
  inProgress: 'En cours',
  viewSite: 'Voir le site',
  skills: 'Compétences',
  skillsAria: 'Compétences',
  skillsSubtitle: 'Stack technique, langues & savoir-être',
  softSkills: 'Savoir-être',
  languages: 'Langues',
  interests: "Centres d'intérêt",
  contactFooter: 'Contact',
  workTogether: 'Travaillons ensemble',
  backToTop: 'Retour en haut',
  back: 'Retour',
  about: 'À propos',
  achievements: 'Réalisations',
  projectPageTitle: 'Projet',
  viewProject: 'Voir le projet',
  viewDetails: 'Voir les détails',
  viewCode: 'Voir le code source',
  githubPending: 'Lien GitHub à venir',
  tooltipSite: 'Site',
  tooltipDetails: 'Détails',
  tooltipCode: 'Code',
  switchToEn: 'EN',
  switchToFr: 'FR',
  cvNotFound: 'CV introuvable',
  cvWrongFile: 'Mauvais fichier servi (HTML au lieu du PDF)',
};

const UI_EN: UiStrings = {
  downloadCv: 'Download CV',
  contact: 'Contact',
  openMenu: 'Open menu',
  closeMenu: 'Close',
  menu: 'Menu',
  mainNav: 'Main navigation',
  openToWork: 'Open to work',
  photoOf: 'Photo of',
  locationLabel: 'Based in Madagascar',
  realisations: 'Work',
  realisationsSubtitle: 'Projects, competitions & education',
  featuredProjects: 'Featured projects',
  competitions: 'Competition & awards',
  education: 'Education & certifications',
  experience: 'Experience',
  experienceSubtitle: 'Professional journey & missions',
  inProgress: 'In progress',
  viewSite: 'View site',
  skills: 'Skills',
  skillsAria: 'Skills',
  skillsSubtitle: 'Tech stack, languages & soft skills',
  softSkills: 'Soft skills',
  languages: 'Languages',
  interests: 'Interests',
  contactFooter: 'Contact',
  workTogether: "Let's work together",
  backToTop: 'Back to top',
  back: 'Back',
  about: 'About',
  achievements: 'Key achievements',
  projectPageTitle: 'Project',
  viewProject: 'View project',
  viewDetails: 'View details',
  viewCode: 'View source code',
  githubPending: 'GitHub link coming soon',
  tooltipSite: 'Site',
  tooltipDetails: 'Details',
  tooltipCode: 'Code',
  switchToEn: 'EN',
  switchToFr: 'FR',
  cvNotFound: 'CV not found',
  cvWrongFile: 'Wrong file served (HTML instead of PDF)',
};

export const UI_BY_LOCALE: Record<Locale, UiStrings> = {
  fr: UI_FR,
  en: UI_EN,
};
