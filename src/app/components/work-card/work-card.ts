import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-work-card',
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './work-card.html',
  styleUrl: './work-card.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WorkCard {
  protected readonly ui = inject(LocaleService).ui;

  readonly title = input.required<string>();
  readonly meta = input.required<string>();
  readonly description = input<string>();
  readonly image = input<string>();
  readonly colorIndex = input.required<number>();
  readonly revealDelay = input(0);
  readonly compact = input(false);
  readonly viewHref = input<string>();
  readonly detailsRouterLink = input<string[]>();
  readonly githubUrl = input<string | undefined>(undefined);

  protected get showCode(): boolean {
    return this.githubUrl() !== undefined;
  }

  protected get codeReady(): boolean {
    const url = this.githubUrl();
    return !!url;
  }
}
