import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SiteHeader],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  host: { class: 'shell-host' },
})
export class Shell {}
