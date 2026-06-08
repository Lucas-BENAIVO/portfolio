import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PORTFOLIO, type Project } from '../../data/portfolio.data';
import { WorkCard } from '../../components/work-card/work-card';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { scrollToSection } from '../../utils/scroll-section';

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

  protected readonly portfolio = PORTFOLIO;
  protected readonly nameFirst = PORTFOLIO.name.split(' ')[0] ?? PORTFOLIO.name;
  protected readonly nameLast =
    PORTFOLIO.name.split(' ').slice(1).join(' ') || PORTFOLIO.name;
  protected readonly locationLabel = 'Basé à Madagascar';
  protected readonly roleLine1 =
    PORTFOLIO.role.split(' ').slice(0, -1).join(' ') || PORTFOLIO.role;
  protected readonly roleLine2 =
    PORTFOLIO.role.split(' ').slice(-1)[0] ?? '';

  protected readonly featuredProjects: Project[] = PORTFOLIO.featuredProjectSlugs.flatMap(
    (slug) => {
      const project = PORTFOLIO.projects.find((p) => p.slug === slug);
      return project ? [{ ...project }] : [];
    }
  );

  protected readonly contactEmail = PORTFOLIO.contacts.find((c) => c.icon === 'email');
  protected readonly footerContacts = PORTFOLIO.contacts.filter((c) => c.icon !== 'email');
  protected readonly currentYear = new Date().getFullYear();

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const main = document.querySelector('.shell__main') as HTMLElement | null;
      const fragment = this.route.snapshot.fragment;

      if (!fragment && main) {
        main.scrollTop = 0;
      }

      if (fragment) {
        setTimeout(() => scrollToSection(fragment), 120);
      }

      this.route.fragment.subscribe((f) => {
        if (f) {
          setTimeout(() => scrollToSection(f), 80);
        }
      });
    });
  }

  protected scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    history.replaceState(null, '', `#${sectionId}`);
    scrollToSection(sectionId);
  }
}
