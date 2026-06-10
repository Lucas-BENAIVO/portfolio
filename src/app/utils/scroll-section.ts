const HEADER_OFFSET = 72;

/** Garde l’URL propre sans fragment (#section). */
export function setCleanUrl(): void {
  history.replaceState(null, '', '/');
}

export function scrollToSection(sectionId: string): void {
  const main = document.querySelector('.shell__main') as HTMLElement | null;
  const el = document.getElementById(sectionId);
  if (!main || !el) {
    return;
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top =
    el.getBoundingClientRect().top -
    main.getBoundingClientRect().top +
    main.scrollTop -
    HEADER_OFFSET;

  main.scrollTo({
    top: Math.max(0, top),
    behavior: reduced ? 'auto' : 'smooth',
  });
}

export function scrollToSectionClean(sectionId: string): void {
  scrollToSection(sectionId);
  setCleanUrl();
}

export function normalizeSectionId(fragment: string): string {
  return fragment === 'resume' ? 'realisations' : fragment;
}
