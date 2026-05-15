import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Home } from './pages/home/home';
import { Summary } from './pages/summary/summary';
import { Experience } from './pages/experience/experience';
import { SkillsPage } from './pages/skills/skills-page';
import { Links } from './pages/links/links';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', component: Home, title: 'Lucas RABENAIVO — UX/UI Designer' },
      { path: 'summary', component: Summary, title: 'Summary' },
      { path: 'experience', component: Experience, title: 'Experience' },
      { path: 'skills', component: SkillsPage, title: 'Skills' },
      { path: 'links', component: Links, title: 'Links' },
    ],
  },
  {
    path: 'project/:slug',
    component: ProjectDetail,
    title: 'Project',
  },
  { path: '**', redirectTo: '' },
];
