import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteHeader } from '../../layout/site-header/site-header';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { LocaleService } from '../../services/locale.service';

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
  protected readonly locale = inject(LocaleService);
  protected readonly ui = this.locale.ui;

  protected readonly project = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    const projects = this.locale.portfolio().projects;
    return projects.find((p) => p.slug === slug) ?? projects[0];
  });

  protected goBack(event: Event): void {
    event.preventDefault();
    void this.router.navigate([this.locale.homeLink()], { state: { scrollTo: 'realisations' } });
  }
}
