(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Mobile menu
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const setMenu = (open) => {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.nav-toggle-label').textContent = open ? 'Sluiten' : 'Menu';
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 760px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  // Scroll reveals: content stays visible without JS or with reduced motion
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    root.classList.add('motion');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }

  // Case dialogs with shareable hash (#case-01)
  let opener = null;
  const dialogFor = (id) => document.getElementById(`case-${id}-detail`);

  const openCase = (id, trigger) => {
    const dialog = dialogFor(id);
    if (!dialog || dialog.open) return;
    opener = trigger || document.querySelector(`.case-open[data-case="${id}"]`);
    dialog.showModal();
    dialog.querySelector('[data-close]').focus();
    if (location.hash !== `#case-${id}`) history.replaceState(null, '', `#case-${id}`);
  };

  document.querySelectorAll('.case-open').forEach((btn) => {
    btn.addEventListener('click', () => openCase(btn.dataset.case, btn));
  });

  document.querySelectorAll('.case-dialog').forEach((dialog) => {
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    // Click on backdrop closes
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
      if (/^#case-\d+$/.test(location.hash)) history.replaceState(null, '', '#werk');
      if (opener) opener.focus();
      opener = null;
    });
  });

  const fromHash = () => {
    const m = location.hash.match(/^#case-(\d+)$/);
    if (m && dialogFor(m[1])) openCase(m[1]);
  };
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
