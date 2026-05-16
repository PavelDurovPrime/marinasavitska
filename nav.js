/* ─────────────────────────────────────────────
   nav.js  — Shared header & footer injector
   + scroll animations via IntersectionObserver
───────────────────────────────────────────── */

(function () {
  /* ── Active page detection ─────────────────── */
  const page = location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return href === page ? 'active' : '';
  }

  /* ── Header HTML (no logo — nav is centrepiece) */
  const headerHTML = `
    <div class="container inner" style="display:grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
      <div></div> <!-- Spacer for centering -->
      <nav class="site-nav site-nav--lg">
        <a href="index.html"          class="${isActive('index.html')}">Головна</a>
        <a href="consultations.html"  class="${isActive('consultations.html')}">Консультації</a>
        <a href="about.html"          class="${isActive('about.html')}">Про мене</a>
        <a href="contacts.html"       class="${isActive('contacts.html')}">Контакти</a>
      </nav>
      <div style="display:flex; justify-content: flex-end;">
        <a href="contacts.html" class="nav-cta">Записатися</a>
      </div>
    </div>`;

  /* ── Footer HTML ───────────────────────────── */
  const footerHTML = `
    <div class="container inner">
      <div class="footer-brand">
        <a href="index.html" class="site-logo">Марина Савіцька</a>
        <p class="footer-copy">© 2024 Марина Савіцька. Простір для відновлення.</p>
      </div>
      <nav class="footer-nav">
        <a href="index.html">Головна</a>
        <a href="consultations.html">Консультації</a>
        <a href="about.html">Про мене</a>
        <a href="contacts.html">Контакти</a>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
      </nav>
    </div>`;

  /* ── Inject ────────────────────────────────── */
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = headerHTML;
  if (footer) footer.innerHTML = footerHTML;

  /* ── Scroll-shadow on header ─────────────── */
  const onScroll = () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Scroll-reveal (IntersectionObserver) ─── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // stagger children if flagged
        entry.target.querySelectorAll(':scope > *').forEach((child, i) => {
          child.style.setProperty('--i', i);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Observe after DOM settles
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });

  /* ── Number counter animation ─────────────── */
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      if (isNaN(target)) return;
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + (el.dataset.suffix || '');
        if (current >= target) clearInterval(timer);
      }, 30);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });

  requestAnimationFrame(() => {
    document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));
  });

})();
