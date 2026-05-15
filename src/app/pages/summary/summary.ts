import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-summary',
  imports: [RouterLink],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary {
  protected readonly portfolio = PORTFOLIO;
}
