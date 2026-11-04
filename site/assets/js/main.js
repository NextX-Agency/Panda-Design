(() => {
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* Menu */
  const top = $('[data-top]');
  const btn = $('.menu-btn');
  const setMenu = (open) => {
    top.classList.toggle('nav-open', open);
    document.body.classList.toggle('nav-lock', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Sluiten' : 'Menu';
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  $('#nav').addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && top.classList.contains('nav-open')) { setMenu(false); btn.focus(); }
  });
  matchMedia('(min-width: 720px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* Active nav link */
  const links = new Map($$('.nav a').map((a) => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => { const a = links.get(en.target.id); if (a) a.classList.toggle('is-active', en.isIntersecting); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* Project view */
  const dlg = $('.case-dialog');
  const ids = $$('.case').map((c) => c.id);
  let current = null;
  let opener = null;
  const render = (id) => {
    const article = document.getElementById(id);
    const tile = $(`.tile-link[href="#${id}"]`);
    if (!article || !tile) return false;
    current = id;
    $('[data-dlg-cover]', dlg).replaceChildren(tile.querySelector('.cover').cloneNode(true));
    const body = article.cloneNode(true);
    body.querySelector('.case-title').id = 'dlg-title';
    $('[data-dlg-body]', dlg).replaceChildren(...body.children);
    dlg.scrollTop = 0;
    history.replaceState(null, '', `#${id}`);
    return true;
  };
  const openCase = (id, from) => {
    if (!render(id)) return;
    if (!dlg.open) {
      opener = from || $(`.tile-link[href="#${id}"]`);
      dlg.showModal();
      document.body.classList.add('dlg-lock');
    }
    $('[data-dlg-close]', dlg).focus();
  };
  const step = (dir) => render(ids[(ids.indexOf(current) + dir + ids.length) % ids.length]);

  $$('.tile-link').forEach((a) => {
    a.setAttribute('aria-haspopup', 'dialog');
    a.addEventListener('click', (e) => { e.preventDefault(); openCase(a.getAttribute('href').slice(1), a); });
  });
  $('[data-dlg-close]', dlg).addEventListener('click', () => dlg.close());
  $('[data-dlg-prev]', dlg).addEventListener('click', () => step(-1));
  $('[data-dlg-next]', dlg).addEventListener('click', () => step(1));
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });
  dlg.addEventListener('close', () => {
    document.body.classList.remove('dlg-lock');
    history.replaceState(null, '', '#werk');
    if (opener) opener.focus({ preventScroll: true });
    opener = null;
  });
  const fromHash = () => { const id = location.hash.slice(1); if (ids.includes(id)) openCase(id); };
  addEventListener('hashchange', fromHash);
  fromHash();

  /* Copy e-mail */
  const copyBtn = $('.mail-copy');
  const status = $('.mail-status');
  copyBtn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(copyBtn.dataset.copy); status.textContent = 'gekopieerd'; }
    catch { status.textContent = 'kopiëren lukte niet'; }
    setTimeout(() => { status.textContent = ''; }, 2400);
  });

  /* Reveals: skipped for reduced motion, so content is always visible */
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  root.classList.add('motion');
  $$('.tile, .work-title, .studio-title, .studio-note, .contact-title, .contact-line, .socials').forEach((el) => el.setAttribute('data-r', ''));
  $$('.hl-mark').forEach((el, i) => el.style.setProperty('--d', `${0.15 + i * 0.18}s`));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
  $$('[data-r], .say, .contact, .foot-mark').forEach((el) => io.observe(el));
})();
