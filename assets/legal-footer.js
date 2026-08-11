(() => {
  /* Mobile navigation must live outside the sticky/backdrop-filter header.
     Keeping a fixed menu inside that header causes iOS/Safari to constrain
     the menu to the header instead of the viewport. Moving the same node
     preserves the event listeners already attached by site.js. */
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const menuButton = document.querySelector('[data-menu-button]');
  const siteHeader = document.querySelector('[data-header]');

  if (mobileNav && siteHeader && mobileNav.parentElement === siteHeader) {
    document.body.appendChild(mobileNav);
  }

  /* Fallback wiring in case site.js fails before attaching the menu handler. */
  if (menuButton && mobileNav && !menuButton.hasAttribute('aria-controls')) {
    mobileNav.id = mobileNav.id || 'advanteam-mobile-navigation';
    menuButton.setAttribute('type', 'button');
    menuButton.setAttribute('aria-controls', mobileNav.id);
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileNav.setAttribute('aria-hidden', 'true');

    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      mobileNav.classList.remove('is-open');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    };

    menuButton.addEventListener('click', () => {
      const opening = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(opening));
      menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
      mobileNav.classList.toggle('is-open', opening);
      mobileNav.setAttribute('aria-hidden', String(!opening));
      document.body.classList.toggle('menu-open', opening);
    });

    mobileNav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const styleId = 'advanteam-legal-footer-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      footer.site-footer.legal-footer,
      footer.footer.legal-footer {
        padding: 0;
        color: rgba(255,255,255,.72);
        background: #030d17;
        border-top: 1px solid rgba(255,255,255,.08);
      }
      .legal-footer-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 28px;
        min-height: 92px;
        padding: 22px 0;
      }
      .legal-footer-meta {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px 18px;
        font-size: .86rem;
      }
      .legal-footer-meta strong {
        color: #fff;
        font-size: .9rem;
        letter-spacing: .08em;
      }
      .legal-footer-links {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 10px 22px;
        font-size: .86rem;
      }
      .legal-footer-links a {
        color: rgba(255,255,255,.7);
        text-decoration: none;
        transition: color 180ms ease;
      }
      .legal-footer-links a:hover,
      .legal-footer-links a:focus-visible {
        color: #fff;
      }
      @media (max-width: 1080px) {
        .mobile-nav {
          height: calc(100dvh - var(--header-height));
          max-height: calc(100dvh - var(--header-height));
          touch-action: pan-y;
        }
      }
      @media (max-width: 760px) {
        .legal-footer-inner {
          align-items: flex-start;
          flex-direction: column;
          gap: 14px;
        }
        .legal-footer-links {
          justify-content: flex-start;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const footer = document.querySelector('footer');
  if (footer) {
    footer.classList.remove('footer');
    footer.classList.add('site-footer', 'legal-footer');
    footer.innerHTML = `
      <div class="wrap legal-footer-inner">
        <div class="legal-footer-meta">
          <strong>ADVANTEAM</strong>
          <span>© <span data-legal-year></span></span>
          <span>Founded 1998</span>
        </div>
        <nav class="legal-footer-links" aria-label="Legal and company links">
          <a href="/advanteam/">Home</a>
          <a href="/advanteam/contact/">Contact</a>
          <a href="/advanteam/legal/imprint/">Imprint</a>
          <a href="/advanteam/legal/privacy/">Privacy Policy</a>
        </nav>
      </div>`;
    const year = footer.querySelector('[data-legal-year]');
    if (year) year.textContent = new Date().getFullYear();
  }

  const loadTranslationPatch = () => {
    if (document.querySelector('script[data-advanteam-i18n-patch]')) return;
    const patch = document.createElement('script');
    patch.src = '/advanteam/assets/i18n-patch.js';
    patch.async = false;
    patch.dataset.advanteamI18nPatch = 'true';
    document.body.appendChild(patch);
  };

  /* Text-only English/German switch. Media stays unchanged for this phase. */
  const existingI18n = document.querySelector('script[data-advanteam-i18n]');
  if (existingI18n) {
    if (window.requestIdleCallback) requestIdleCallback(loadTranslationPatch);
    else setTimeout(loadTranslationPatch, 0);
  } else {
    const i18n = document.createElement('script');
    i18n.src = '/advanteam/assets/i18n.js';
    i18n.async = false;
    i18n.dataset.advanteamI18n = 'true';
    i18n.addEventListener('load', loadTranslationPatch, { once:true });
    document.body.appendChild(i18n);
  }
})();
