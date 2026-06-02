export function downloadCv(url: string, filename: string, event?: Event): void {
  event?.preventDefault();

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
