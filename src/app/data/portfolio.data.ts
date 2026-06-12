import { TECH_ICONS } from './tech-icons';

export type Locale = 'fr' | 'en';

export interface NavItem {
  label: string;
  path: string;
  section: string;
  icon: 'home' | 'summary' | 'experience' | 'skills';
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'linkedin' | 'phone' | 'location' | 'github';
  whatsappHref?: string;
}

export interface TechSkill {
  name: string;
  icon: string;
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
  label: string;
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
  image?: string;
  projectSlug?: string;
  href?: string;
  linkLabel?: string;
  githubUrl?: string;
}

export interface ExperienceDetail {
  label: string;
  value: string;
}

export interface ExperienceMission {
  title: string;
  details: ExperienceDetail[];
  image?: string;
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
  externalUrl?: string;
  preview?: string;
  githubUrl?: string;
}

export interface PortfolioData {
  openToWork: boolean;
  name: string;
  role: string;
  cvUrl: string;
  cvDownloadName: string;
  contacts: ContactItem[];
  nav: NavItem[];
  summary: string;
  experience: ExperienceItem[];
  technicalSkills: SkillCategory[];
  softSkills: string[];
  interests: InterestItem[];
  languages: Language[];
  education: EducationItem[];
  competitions: CompetitionItem[];
  projects: Project[];
  featuredProjectSlugs: string[];
}

export { TECH_ICONS };
