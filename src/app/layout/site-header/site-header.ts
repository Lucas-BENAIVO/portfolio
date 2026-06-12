import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import type { Locale } from '../../data/portfolio.data';
import { LocaleService } from '../../services/locale.service';
import { scrollToSectionClean } from '../../utils/scroll-section';
import { downloadCv } from '../../utils/download-cv';

const MENU_CLOSE_MS = 380;

@Component({
  selector: 'app-site-header',
  imports: [NgTemplateOutlet],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  host: {
    '[class.site-header-host--on-hero]': 'onHero()',
  },
})
export class SiteHeader implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly locale = inject(LocaleService);
  private closeTimer?: ReturnType<typeof setTimeout>;
  private scrollTarget?: HTMLElement;
  private onScroll?: () => void;

  protected readonly portfolio = this.locale.portfolio;
  protected readonly ui = this.locale.ui;
  protected readonly menuOpen = signal(false);
  protected readonly menuClosing = signal(false);
  protected readonly langOpen = signal(false);
  protected readonly onHero = signal(false);
  protected readonly activeSection = signal('home');
  protected readonly localeOptions: Locale[] = ['fr', 'en'];

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

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (!this.langOpen()) {
      return;
    }

    const target = event.target as Node | null;
    if (target && this.host.nativeElement.contains(target)) {
      return;
    }

    this.langOpen.set(false);
  }

  protected homeLink(): string {
    return this.locale.homeLink();
  }

  protected currentLocaleCode(): string {
    return this.locale.locale().toUpperCase();
  }

  protected localeLabel(code: Locale): string {
    return code.toUpperCase();
  }

  protected toggleLangMenu(event: Event): void {
    event.stopPropagation();
    this.langOpen.update((open) => !open);
  }

  protected selectLocale(code: Locale, event: Event): void {
    event.stopPropagation();
    this.langOpen.set(false);
    this.closeMenu();
    this.locale.setLocale(code);
  }

  protected scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    this.langOpen.set(false);
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) {
      void this.router.navigate([this.homeLink()], { state: { scrollTo: sectionId } });
      return;
    }

    scrollToSectionClean(sectionId);
    this.activeSection.set(sectionId);
  }

  protected onDownloadCv(event: Event): void {
    const portfolio = this.portfolio();
    downloadCv(
      portfolio.cvUrl,
      portfolio.cvDownloadName,
      event,
      this.ui().cvNotFound,
      this.ui().cvWrongFile
    );
  }

  protected toggleMenu(): void {
    this.langOpen.set(false);
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

    const sections = this.portfolio()
      .nav.map((item) => item.section)
      .concat(['contact']);
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
