import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO, type Project } from '../../data/portfolio.data';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-summary',
  imports: [RouterLink, RevealOnScrollDirective],
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
