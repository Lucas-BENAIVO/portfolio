import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, computed, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { Project } from '../../data/portfolio.data';
import { WorkCard } from '../../components/work-card/work-card';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { LocaleService } from '../../services/locale.service';
import {
  normalizeSectionId,
  scrollToSectionClean,
  setCleanUrl,
} from '../../utils/scroll-section';

@Component({
  selector: 'app-home',
  imports: [RevealOnScrollDirective, WorkCard],
  templateUrl: './home.html',
  styleUrls: [
    './home.scss',
    '../summary/summary.scss',
    '../experience/experience.scss',
    '../skills/skills-page.scss',
  ],
})
export class Home {
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly locale = inject(LocaleService);

  protected readonly portfolio = this.locale.portfolio;
  protected readonly ui = this.locale.ui;

  protected readonly nameFirst = computed(
    () => this.portfolio().name.split(' ')[0] ?? this.portfolio().name
  );
  protected readonly nameLast = computed(
    () => this.portfolio().name.split(' ').slice(1).join(' ') || this.portfolio().name
  );
  protected readonly roleLine1 = computed(() => {
    const role = this.portfolio().role;
    return role.split(' ').slice(0, -1).join(' ') || role;
  });
  protected readonly roleLine2 = computed(() => {
    const role = this.portfolio().role;
    return role.split(' ').slice(-1)[0] ?? '';
  });

  protected readonly featuredProjects = computed((): Project[] =>
    this.portfolio().featuredProjectSlugs.flatMap((slug) => {
      const project = this.portfolio().projects.find((p) => p.slug === slug);
      return project ? [{ ...project }] : [];
    })
  );

  protected readonly contactEmail = computed(() =>
    this.portfolio().contacts.find((c) => c.icon === 'email')
  );
  protected readonly footerContacts = computed(() =>
    this.portfolio().contacts.filter((c) => c.icon !== 'email')
  );
  protected readonly currentYear = new Date().getFullYear();

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const main = document.querySelector('.shell__main') as HTMLElement | null;
      const scrollTarget = history.state?.scrollTo as string | undefined;
      const fragment = this.route.snapshot.fragment;

      if (scrollTarget) {
        setTimeout(() => scrollToSectionClean(scrollTarget), 120);
        return;
      }

      if (fragment) {
        setTimeout(() => scrollToSectionClean(normalizeSectionId(fragment)), 120);
        return;
      }

      if (main) {
        main.scrollTop = 0;
        setCleanUrl();
      }

      this.route.fragment.subscribe((f) => {
        if (f) {
          setTimeout(() => scrollToSectionClean(normalizeSectionId(f)), 80);
        }
      });
    });
  }

  protected scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    scrollToSectionClean(sectionId);
  }

  protected projectLink(slug: string): string[] {
    return this.locale.projectLink(slug);
  }
}
