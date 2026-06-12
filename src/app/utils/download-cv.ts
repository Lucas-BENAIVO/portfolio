export function downloadCv(
  url: string,
  filename: string,
  event?: Event,
  notFoundMessage = 'CV introuvable',
  wrongFileMessage = 'Mauvais fichier servi (HTML au lieu du PDF)'
): void {
  event?.preventDefault();

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(notFoundMessage);
      }
      const type = response.headers.get('content-type') ?? '';
      if (type.includes('text/html')) {
        throw new Error(wrongFileMessage);
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
