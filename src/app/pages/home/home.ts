import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly portfolio = PORTFOLIO;

  protected downloadCv(event: Event): void {
    event.preventDefault();
    const url = this.portfolio.cvUrl;
    const filename = this.portfolio.cvDownloadName;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('CV introuvable');
        }
        const type = response.headers.get('content-type') ?? '';
        if (type.includes('text/html')) {
          throw new Error('Mauvais fichier servi (HTML au lieu du PDF)');
        }
        return response.blob();
      })
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(objectUrl);
      })
      .catch(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      });
  }
}
