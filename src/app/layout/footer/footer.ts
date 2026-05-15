import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly portfolio = PORTFOLIO;
  protected readonly year = new Date().getFullYear();
}
