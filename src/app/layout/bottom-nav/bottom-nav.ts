import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.scss',
})
export class BottomNav {
  protected readonly nav = PORTFOLIO.nav;
}
