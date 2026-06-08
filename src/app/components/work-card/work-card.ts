import { Component, input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-work-card',
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './work-card.html',
  styleUrl: './work-card.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WorkCard {
  readonly title = input.required<string>();
  readonly meta = input.required<string>();
  readonly description = input<string>();
  readonly image = input<string>();
  readonly colorIndex = input.required<number>();
  readonly revealDelay = input(0);
  readonly compact = input(false);
  readonly viewHref = input<string>();
  readonly viewRouterLink = input<string[]>();
  /** Présent = afficher le bouton Code ; chaîne vide = en attente de lien */
  readonly githubUrl = input<string | undefined>(undefined);

  protected get showCode(): boolean {
    return this.githubUrl() !== undefined;
  }

  protected get codeReady(): boolean {
    const url = this.githubUrl();
    return !!url;
  }
}
