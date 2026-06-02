import { isPlatformBrowser } from '@angular/common';
import {
  booleanAttribute,
  Directive,
  ElementRef,
  inject,
  input,
  numberAttribute,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    '[class.reveal]': 'true',
    '[class.reveal--clip]': 'appRevealClip()',
    '[style.--reveal-delay]': 'appRevealDelay() + "ms"',
  },
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  readonly appRevealDelay = input(0, { transform: numberAttribute });
  readonly appRevealClip = input(false, { transform: booleanAttribute });

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.classList.add('reveal--visible');
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      this.el.nativeElement.classList.add('reveal--visible');
      return;
    }

    const root = document.querySelector('.shell__main');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      {
        root,
        threshold: 0.08,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    this.observer.observe(this.el.nativeElement);

    requestAnimationFrame(() => {
      if (this.el.nativeElement.classList.contains('reveal--visible')) {
        return;
      }
      const scrollRoot = root ?? document.documentElement;
      const rootRect = scrollRoot.getBoundingClientRect();
      const rect = this.el.nativeElement.getBoundingClientRect();
      const visible =
        rect.bottom > rootRect.top + 8 && rect.top < rootRect.bottom - 8;
      if (visible) {
        this.el.nativeElement.classList.add('reveal--visible');
        this.observer?.unobserve(this.el.nativeElement);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
