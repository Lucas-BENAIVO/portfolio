import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio.data';
import { scrollToSectionClean } from '../../utils/scroll-section';
import { downloadCv } from '../../utils/download-cv';

const MENU_CLOSE_MS = 380;

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  host: {
    '[class.site-header-host--on-hero]': 'onHero()',
  },
})
export class SiteHeader implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private closeTimer?: ReturnType<typeof setTimeout>;
  private scrollTarget?: HTMLElement;
  private onScroll?: () => void;

  protected readonly nav = PORTFOLIO.nav;
  protected readonly openToWork = PORTFOLIO.openToWork;
  protected readonly cvUrl = PORTFOLIO.cvUrl;
  protected readonly cvDownloadName = PORTFOLIO.cvDownloadName;
  protected readonly menuOpen = signal(false);
  protected readonly menuClosing = signal(false);
  protected readonly onHero = signal(false);
  protected readonly activeSection = signal('home');

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.scrollTarget = document.querySelector('.shell__main') ?? undefined;
    this.onScroll = () => this.updateScrollState();
    this.scrollTarget?.addEventListener('scroll', this.onScroll, { passive: true });
    this.updateScrollState();
  }

  ngOnDestroy(): void {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }
    if (this.scrollTarget && this.onScroll) {
      this.scrollTarget.removeEventListener('scroll', this.onScroll);
    }
    this.setMenuLock(false);
  }

  protected scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) {
      void this.router.navigate(['/'], { state: { scrollTo: sectionId } });
      return;
    }

    scrollToSectionClean(sectionId);
    this.activeSection.set(sectionId);
  }

  protected onDownloadCv(event: Event): void {
    downloadCv(this.cvUrl, this.cvDownloadName, event);
  }

  protected toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    } else {
      this.menuOpen.set(true);
      this.menuClosing.set(false);
      this.setMenuLock(true);
    }
  }

  protected closeMenu(): void {
    if (!this.menuOpen() || this.menuClosing()) {
      return;
    }

    this.menuClosing.set(true);
    this.closeTimer = setTimeout(() => {
      this.menuOpen.set(false);
      this.menuClosing.set(false);
      this.setMenuLock(false);
    }, MENU_CLOSE_MS);
  }

  private updateScrollState(): void {
    const main = this.scrollTarget;
    if (!main) {
      return;
    }

    const hero = document.getElementById('home');
    if (!hero) {
      this.onHero.set(false);
      return;
    }

    this.onHero.set(main.scrollTop < hero.offsetHeight - 80);

    const sections = PORTFOLIO.nav.map((item) => item.section).concat(['contact']);
    const scrollPos = main.scrollTop + 100;
    let current = 'home';

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        current = id;
      }
    }

    this.activeSection.set(current);
  }

  private setMenuLock(locked: boolean): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    document.documentElement.classList.toggle('menu-open', locked);
  }
}
