import { isPlatformBrowser } from '@angular/common';
import {
  computed,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import type { Locale } from '../data/portfolio.data';
import { PORTFOLIO_EN } from '../data/portfolio.en';
import { PORTFOLIO_FR } from '../data/portfolio.fr';
import { UI_BY_LOCALE } from '../data/ui.strings';

const PORTFOLIO_BY_LOCALE = {
  fr: PORTFOLIO_FR,
  en: PORTFOLIO_EN,
} as const;

const LOCALE_STORAGE_KEY = 'portfolio-locale';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly localeSignal = signal<Locale>('fr');

  readonly locale = this.localeSignal.asReadonly();
  readonly portfolio = computed(() => PORTFOLIO_BY_LOCALE[this.localeSignal()]);
  readonly ui = computed(() => UI_BY_LOCALE[this.localeSignal()]);

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.syncFromUrl(event.urlAfterRedirects));

    this.syncFromUrl(this.router.url);
  }

  homeLink(): string {
    return this.localeSignal() === 'en' ? '/en' : '/';
  }

  projectLink(slug: string): string[] {
    return this.localeSignal() === 'en'
      ? ['/en/project', slug]
      : ['/project', slug];
  }

  toggleLocale(): void {
    this.setLocale(this.localeSignal() === 'fr' ? 'en' : 'fr');
  }

  setLocale(next: Locale): void {
    if (next === this.localeSignal()) {
      return;
    }

    const url = this.router.url.split('?')[0] ?? '/';

    if (next === 'en') {
      if (url.startsWith('/project/')) {
        const slug = url.slice('/project/'.length);
        void this.router.navigate(['/en/project', slug]);
        return;
      }
      void this.router.navigate(['/en']);
      return;
    }

    if (url.startsWith('/en/project/')) {
      const slug = url.slice('/en/project/'.length);
      void this.router.navigate(['/project', slug]);
      return;
    }
    void this.router.navigate(['/']);
  }

  private syncFromUrl(url: string): void {
    const path = url.split('?')[0] ?? '/';
    const locale: Locale = path === '/en' || path.startsWith('/en/') ? 'en' : 'fr';
    this.localeSignal.set(locale);
    this.persistLocale(locale);
    this.updateDocumentLocale(locale);
  }

  private persistLocale(locale: Locale): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }

  private updateDocumentLocale(locale: Locale): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    document.documentElement.lang = locale;
  }
}
