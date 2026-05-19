import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { BottomNav } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, BottomNav],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  host: { class: 'shell-host' },
})
export class Shell {
  private readonly router = inject(Router);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );

  protected readonly isHome = computed(() => {
    const path = this.url().split('?')[0];
    return path === '/' || path === '';
  });
}
