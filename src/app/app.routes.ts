import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';

const shellChildren: Routes = [
  { path: '', component: Home, title: 'Lucas RABENAIVO' },
  { path: 'realisations', redirectTo: '' },
  { path: 'summary', redirectTo: '' },
  { path: 'experience', redirectTo: '' },
  { path: 'skills', redirectTo: '' },
];

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: shellChildren,
  },
  {
    path: 'en',
    component: Shell,
    children: shellChildren,
  },
  {
    path: 'project/:slug',
    component: ProjectDetail,
    title: 'Projet',
  },
  {
    path: 'en/project/:slug',
    component: ProjectDetail,
    title: 'Project',
  },
  { path: '**', redirectTo: '' },
];
