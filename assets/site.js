(() => {
  const body = document.body;

  const layoutStyles = document.createElement('style');
  layoutStyles.textContent = `
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

    .market-grid {
      width: min(100%, 1180px);
      margin-inline: auto;
      align-items: stretch;
    }
    .market-card {
      display: flex;
      min-width: 0;
      min-height: 0;
      padding: 0;
      flex-direction: column;
      overflow: hidden;
    }
    .market-card > span:first-child {
      display: none;
    }
    .market-card-image {
      display: grid;
      width: 100%;
      min-height: 220px;
      margin: 0;
      padding: 24px;
      place-items: center;
      color: rgba(255,255,255,.72);
      background:
        linear-gradient(135deg, rgba(47,127,104,.24), rgba(255,255,255,.035)),
        repeating-linear-gradient(45deg, transparent 0 18px, rgba(255,255,255,.045) 18px 19px);
      border-bottom: 1px dashed rgba(140,198,182,.55);
      text-align: center;
    }
    .market-card-image strong {
      display: block;
      margin-bottom: 6px;
      color: #8cc6b6;
      font-size: .75rem;
      letter-spacing: .13em;
      text-transform: uppercase;
    }
    .market-card-image span {
      display: block;
      max-width: 270px;
      color: rgba(255,255,255,.66);
      font-size: .82rem;
      line-height: 1.4;
    }
    .market-card-copy {
      display: flex;
      min-width: 0;
      padding: 26px clamp(30px, 3vw, 44px) 34px;
      flex: 1;
      flex-direction: column;
    }
    .market-card-copy h3 {
      max-width: 100%;
      margin: 0 0 12px;
      font-size: clamp(1.75rem, 2.35vw, 2.65rem);
      line-height: 1.08;
      overflow-wrap: break-word;
    }
    .market-card-copy p {
      max-width: 31ch;
      margin: 0;
      color: rgba(255,255,255,.72);
      font-size: 1rem;
      line-height: 1.55;
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
    @media (max-width: 1080px) {
      .market-card-copy p {
        max-width: none;
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
      .market-card-image {
        min-height: 190px;
      }
      .market-card-copy {
        padding: 22px 24px 28px;
      }
      .market-card-copy h3 {
        font-size: clamp(1.8rem, 9vw, 2.4rem);
      }
    }
  `;
  document.head.appendChild(layoutStyles);

  const marketImageRecommendations = [
    'Germany and Europe business environment',
    'North American executive market-entry scene',
    'Modern Middle Eastern business setting'
  ];

  document.querySelectorAll('.market-card').forEach((card, index) => {
    card.querySelectorAll(':scope > span').forEach((number) => number.remove());

    if (!card.querySelector('.market-card-image')) {
      const image = document.createElement('div');
      image.className = 'market-card-image';
      image.setAttribute('aria-label', 'FPO image recommendation');
      image.innerHTML = `<div><strong>FPO image</strong><span>${marketImageRecommendations[index] || 'Regional market image to be added.'}</span></div>`;
      card.prepend(image);
    }

    if (!card.querySelector('.market-card-copy')) {
      const copy = document.createElement('div');
      copy.className = 'market-card-copy';
      const heading = card.querySelector(':scope > h3');
      const paragraph = card.querySelector(':scope > p');
      if (heading) copy.appendChild(heading);
      if (paragraph) copy.appendChild(paragraph);
      card.appendChild(copy);
    }
  });

  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const year = document.querySelector('[data-year]');

  if (year) year.textContent = new Date().getFullYear();

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
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileMenu));
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
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
