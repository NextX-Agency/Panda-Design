(() => {
  const root = document.documentElement;
  root.classList.add('js');

  // Mobile menu
  const top = document.querySelector('.top');
  const btn = document.querySelector('.menu-btn');
  const setMenu = (open) => {
    top.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Sluiten' : 'Menu';
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  document.getElementById('nav').addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && top.classList.contains('open')) { setMenu(false); btn.focus(); }
  });
  matchMedia('(min-width: 720px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  // Brush and tile reveals; skipped for reduced motion so everything stays visible
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  root.classList.add('motion');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
  document.querySelectorAll('.svc li, .tile, .contact').forEach((el) => io.observe(el));
})();
