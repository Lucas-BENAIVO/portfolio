import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Home } from './pages/home/home';
import { Summary } from './pages/summary/summary';
import { Experience } from './pages/experience/experience';
import { SkillsPage } from './pages/skills/skills-page';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', component: Home, title: 'Lucas RABENAIVO' },
      { path: 'summary', component: Summary, title: 'Résumé' },
      { path: 'experience', component: Experience, title: 'Expérience' },
      { path: 'skills', component: SkillsPage, title: 'Compétences' },
    ],
  },
  {
    path: 'project/:slug',
    component: ProjectDetail,
    title: 'Projet',
  },
  { path: '**', redirectTo: '' },
];
