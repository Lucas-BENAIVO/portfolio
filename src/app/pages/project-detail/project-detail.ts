import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio.data';
import { BottomNav } from '../../layout/bottom-nav/bottom-nav';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, BottomNav],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  host: { class: 'shell-host' },
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly portfolio = PORTFOLIO;

  protected get project() {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PORTFOLIO.projects.find((p) => p.slug === slug) ?? PORTFOLIO.projects[0];
  }
}
