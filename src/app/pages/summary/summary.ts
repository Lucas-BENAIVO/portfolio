import { Component } from '@angular/core';
import { PORTFOLIO, type Project } from '../../data/portfolio.data';
import { WorkCard } from '../../components/work-card/work-card';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-summary',
  imports: [RevealOnScrollDirective, WorkCard],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
  host: { class: 'page-enter' },
})
export class Summary {
  protected readonly portfolio = PORTFOLIO;

  protected readonly featuredProjects: Project[] = PORTFOLIO.featuredProjectSlugs.flatMap(
    (slug) => {
      const project = PORTFOLIO.projects.find((p) => p.slug === slug);
      return project ? [{ ...project }] : [];
    }
  );
}
