/* ─────────────────────────────────────────────
   nav.js  — Shared header & footer injector
   + Mobile hamburger drawer
   + Scroll animations via IntersectionObserver
───────────────────────────────────────────── */

(function () {
  /* ── Active page detection ─────────────────── */
  const page = location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return href === page ? 'active' : '';
  }

  /* ── Header HTML ───────────────────────────── */
  const headerHTML = `
    <div class="container inner" style="display:grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
      <!-- Logo (visible on mobile) -->
      <a href="index.html" class="site-logo" style="opacity:1;">Марина Савіцька</a>

      <!-- Desktop nav (centred) -->
      <nav class="site-nav site-nav--lg">
        <a href="index.html"          class="${isActive('index.html')}">Головна</a>
        <a href="consultations.html"  class="${isActive('consultations.html')}">Консультації</a>
        <a href="about.html"          class="${isActive('about.html')}">Про мене</a>
        <a href="contacts.html"       class="${isActive('contacts.html')}">Контакти</a>
      </nav>

      <!-- Right side: desktop CTA + mobile hamburger -->
      <div style="display:flex; justify-content: flex-end; align-items:center; gap:.75rem;">
        <a href="contacts.html" class="nav-cta">Записатися</a>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Меню" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;

  /* ── Drawer HTML (injected into <body>, NOT inside header) ── */
  /* backdrop-filter on #site-header creates a new stacking context
     that clips position:fixed children — so drawer must live in <body> */
  const drawerHTML = `
    <nav class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <a href="index.html"         class="${isActive('index.html')}">Головна</a>
      <a href="consultations.html" class="${isActive('consultations.html')}">Консультації</a>
      <a href="about.html"         class="${isActive('about.html')}">Про мене</a>
      <a href="contacts.html"      class="${isActive('contacts.html')}">Контакти</a>
      <a href="contacts.html"      class="drawer-cta">Записатися на консультацію</a>
    </nav>`;

  /* ── Footer HTML ───────────────────────────── */
  const footerHTML = `
    <div class="container inner">
      <div class="footer-brand">
        <a href="index.html" class="site-logo">Марина Савіцька</a>
        <p class="footer-copy">© 2026 Марина Савіцька. Простір для відновлення.</p>
      </div>
      <nav class="footer-nav">
        <a href="index.html">Головна</a>
        <a href="consultations.html">Консультації</a>
        <a href="about.html">Про мене</a>
        <a href="contacts.html">Контакти</a>
        <a href="https://www.instagram.com/marina.savytska.psy?utm_source=qr&igsh=MWZ2ZmNqY2cwYjJjYg==" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/share/18Sv2ocbo6/" target="_blank" rel="noopener">Facebook</a>
        <a href="https://t.me/mus2208" target="_blank" rel="noopener">Telegram</a>
      </nav>
    </div>`;

  /* ── Inject ────────────────────────────────── */
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = headerHTML;
  if (footer) footer.innerHTML = footerHTML;

  /* Drawer goes into <body> directly — avoids backdrop-filter clip */
  document.body.insertAdjacentHTML('afterbegin', drawerHTML);

  /* ── Hamburger toggle ──────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const drawer    = document.getElementById('mobile-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      hamburger.classList.toggle('open', !isOpen);
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      drawer.setAttribute('aria-hidden', String(isOpen));

      if (!isOpen) {
        drawer.style.display = 'flex';
        // Force reflow for transition
        requestAnimationFrame(() => {
          requestAnimationFrame(() => drawer.classList.add('open'));
        });
        document.body.style.overflow = 'hidden';
      } else {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => { drawer.style.display = 'none'; }, 350);
      }
    });

    // Close drawer when a link is clicked
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => { drawer.style.display = 'none'; }, 350);
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        hamburger.click();
      }
    });
  }

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
        entry.target.querySelectorAll(':scope > *').forEach((child, i) => {
          child.style.setProperty('--i', i);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

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
