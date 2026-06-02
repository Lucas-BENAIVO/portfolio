import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  host: { class: 'page-enter' },
})
export class Experience {
  protected readonly portfolio = PORTFOLIO;
}
