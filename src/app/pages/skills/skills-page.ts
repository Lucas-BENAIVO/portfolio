import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills-page',
  imports: [RevealOnScrollDirective],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.scss',
  host: { class: 'page-enter' },
})
export class SkillsPage {
  protected readonly portfolio = PORTFOLIO;
}
