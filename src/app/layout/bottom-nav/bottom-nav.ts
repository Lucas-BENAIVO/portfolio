import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PORTFOLIO_FR } from '../../data/portfolio.fr';

@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.scss',
})
export class BottomNav {
  protected readonly nav = PORTFOLIO_FR.nav;
}
