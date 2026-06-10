import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio.data';
import { SiteHeader } from '../../layout/site-header/site-header';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-project-detail',
  imports: [SiteHeader, RevealOnScrollDirective],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  host: { class: 'shell-host' },
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected readonly portfolio = PORTFOLIO;

  protected get project() {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PORTFOLIO.projects.find((p) => p.slug === slug) ?? PORTFOLIO.projects[0];
  }

  protected goBack(event: Event): void {
    event.preventDefault();
    void this.router.navigate(['/'], { state: { scrollTo: 'realisations' } });
  }
}
