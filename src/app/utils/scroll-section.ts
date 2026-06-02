const HEADER_OFFSET = 72;

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
