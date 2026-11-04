(() => {
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header: menu, scrolled state, active link ---------- */
  const top = $('[data-top]');
  const btn = $('.menu-btn');
  const label = $('.menu-label');
  const setMenu = (open) => {
    top.classList.toggle('nav-open', open);
    document.body.classList.toggle('nav-lock', open);
    btn.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'Sluiten' : 'Menu';
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  $('#nav').addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && top.classList.contains('nav-open')) { setMenu(false); btn.focus(); }
  });
  matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  const onScroll = () => top.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const links = new Map($$('.nav a[href^="#"]:not(.nav-cta)').map((a) => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const a = links.get(en.target.id);
      if (a) a.classList.toggle('is-active', en.isIntersecting);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  /* ---------- Paramaribo clock + year ---------- */
  const fmt = new Intl.DateTimeFormat('nl-NL', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Paramaribo' });
  const tick = () => { const t = fmt.format(new Date()); $$('[data-clock]').forEach((el) => { el.textContent = t; }); };
  tick();
  setInterval(tick, 15000);
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Work filter ---------- */
  const grid = $('[data-grid]');
  const tiles = $$('.tile', grid);
  $$('.chip').forEach((chip) => chip.addEventListener('click', () => {
    const f = chip.dataset.filter;
    $$('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    tiles.forEach((t) => { t.hidden = f !== 'all' && !t.dataset.tags.split(' ').includes(f); });
    grid.classList.toggle('is-filtered', f !== 'all');
  }));

  /* ---------- Case dialog ---------- */
  const dlg = $('.case-dialog');
  const ids = $$('.case').map((c) => c.dataset.case);
  let current = null;
  let opener = null;

  const render = (id) => {
    const article = document.getElementById(`case-${id}`);
    const tile = $(`.tile-link[href="#case-${id}"]`);
    if (!article || !tile) return false;
    current = id;
    $('[data-dlg-cover]', dlg).replaceChildren(tile.querySelector('.cover').cloneNode(true));
    const body = article.cloneNode(true);
    body.removeAttribute('id');
    body.querySelector('.case-title').id = 'dlg-title';
    $('[data-dlg-body]', dlg).replaceChildren(...body.children);
    $('[data-dlg-count]', dlg).textContent = `${id} / ${String(ids.length).padStart(2, '0')}`;
    dlg.scrollTop = 0;
    history.replaceState(null, '', `#case-${id}`);
    return true;
  };
  const openCase = (id, from) => {
    if (!render(id)) return;
    if (!dlg.open) {
      opener = from || $(`.tile-link[href="#case-${id}"]`);
      dlg.showModal();
      document.body.classList.add('dlg-lock');
    }
    $('[data-dlg-close]', dlg).focus();
  };
  const step = (dir) => {
    const i = ids.indexOf(current);
    render(ids[(i + dir + ids.length) % ids.length]);
  };

  $$('.tile-link').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    openCase(a.getAttribute('href').replace('#case-', ''), a);
  }));
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
  const fromHash = () => {
    const m = location.hash.match(/^#case-(\d+)$/);
    if (m) openCase(m[1]);
  };
  addEventListener('hashchange', fromHash);
  fromHash();

  /* ---------- Copy e-mail ---------- */
  const copyBtn = $('.mail-copy');
  const status = $('.mail-status');
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.copy);
      status.textContent = 'Gekopieerd';
    } catch {
      status.textContent = 'Kopiëren lukte niet';
    }
    setTimeout(() => { status.textContent = ''; }, 2400);
  });

  /* ---------- Approach brush: align with step numbers ---------- */
  const approach = $('.approach');
  const placeBrush = () => {
    const no = $('.step-no', approach);
    if (!no) return;
    const y = no.getBoundingClientRect().top - approach.getBoundingClientRect().top + no.offsetHeight * 0.35;
    approach.style.setProperty('--brush-y', `${y}px`);
  };
  placeBrush();
  addEventListener('resize', placeBrush);
  document.fonts && document.fonts.ready.then(placeBrush);

  /* ---------- Scroll reveals ---------- */
  if (reduce || !('IntersectionObserver' in window)) return;
  root.classList.add('motion');
  const groups = ['.facts > div', '.tile', '.svc-item', '.steps li', '.values li', '.sec-head', '.studio-title', '.contact-title', '.mail', '.socials'];
  groups.forEach((sel) => $$(sel).forEach((el, i) => {
    el.setAttribute('data-r', '');
    if (['.facts > div', '.steps li', '.values li', '.svc-item'].includes(sel)) el.style.setProperty('--d', `${(i % 5) * 0.08}s`);
  }));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  $$('[data-r], .intro, .approach, .contact, .foot-mark').forEach((el) => io.observe(el));
})();
