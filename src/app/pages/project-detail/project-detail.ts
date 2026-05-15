import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly portfolio = PORTFOLIO;

  protected get project() {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PORTFOLIO.projects.find((p) => p.slug === slug) ?? PORTFOLIO.projects[0];
  }
}
