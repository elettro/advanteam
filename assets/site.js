(() => {
  const body = document.body;

  // Homepage hero layout overrides for GitHub Pages preview and production.
  // Keeps the three-line headline inside its column and prevents overlap with
  // the established-1998 panel on desktop widths.
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroLayoutFix = document.createElement('style');
    heroLayoutFix.textContent = `
      .hero {
        min-height: auto;
        padding-top: clamp(58px, 6vw, 88px);
        padding-bottom: clamp(64px, 7vw, 104px);
      }
      .hero-grid {
        grid-template-columns: minmax(0, 1.5fr) minmax(320px, .72fr);
        gap: clamp(42px, 5vw, 76px);
        align-items: center;
      }
      .hero-copy {
        min-width: 0;
        max-width: none;
      }
      .hero-copy h1 {
        max-width: 100%;
        font-size: clamp(3.45rem, 6.2vw, 6.65rem);
        line-height: .99;
        overflow-wrap: normal;
        word-break: normal;
      }
      .hero-panel {
        position: relative;
        z-index: 2;
      }
      @media (max-width: 1180px) {
        .hero-grid {
          grid-template-columns: minmax(0, 1.35fr) minmax(300px, .75fr);
          gap: 38px;
        }
        .hero-copy h1 {
          font-size: clamp(3.3rem, 5.9vw, 5.7rem);
        }
      }
      @media (max-width: 980px) {
        .hero {
          padding-top: 58px;
          padding-bottom: 72px;
        }
        .hero-grid {
          grid-template-columns: 1fr;
        }
        .hero-copy h1 {
          font-size: clamp(3.25rem, 10vw, 5.8rem);
        }
      }
      @media (max-width: 680px) {
        .hero {
          padding-top: 46px;
          padding-bottom: 58px;
        }
        .hero-copy h1 {
          font-size: clamp(2.75rem, 13vw, 4.45rem);
          line-height: 1.01;
        }
      }
    `;
    document.head.appendChild(heroLayoutFix);
  }

  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const year = document.querySelector('[data-year]');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const closeMobileMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileNav.classList.remove('is-open');
    body.classList.remove('menu-open');
  };

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      mobileNav.classList.toggle('is-open', !isOpen);
      body.classList.toggle('menu-open', !isOpen);
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('button');
    if (!button) return;

    button.addEventListener('click', () => {
      const willOpen = !dropdown.classList.contains('is-open');

      dropdowns.forEach((item) => {
        item.classList.remove('is-open');
        const itemButton = item.querySelector('button');
        if (itemButton) itemButton.setAttribute('aria-expanded', 'false');
      });

      dropdown.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-dropdown')) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('is-open');
        const button = dropdown.querySelector('button');
        if (button) button.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeMobileMenu();
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('is-open');
      const button = dropdown.querySelector('button');
      if (button) button.setAttribute('aria-expanded', 'false');
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
})();
