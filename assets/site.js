(() => {
  const body = document.body;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Navigation runs first so every page gets a dependable mobile menu. */
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const siteHeader = document.querySelector('[data-header]');
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const year = document.querySelector('[data-year]');

  const normalizePath = (value) => {
    let path = value || '/advanteam/';
    path = path.replace(/index\.html$/i, '');
    if (!path.endsWith('/')) path += '/';
    return path.replace(/\/{2,}/g, '/');
  };

  const currentPath = normalizePath(window.location.pathname);
  const isCurrent = (href) => normalizePath(href) === currentPath;
  const inSection = (prefix) => currentPath.startsWith(prefix);

  const mobileNavigation = [
    { href: '/advanteam/', label: 'Home' },
    { href: '/advanteam/connections/', label: 'Connections' },
    { href: '/advanteam/communications/', label: 'Communications' },
    { href: '/advanteam/consulting/', label: 'Consulting' }
  ];
  const marketNavigation = [
    { href: '/advanteam/global-markets/', label: 'Overview' },
    { href: '/advanteam/global-markets/germany-europe/', label: 'Germany & Europe' },
    { href: '/advanteam/global-markets/north-america/', label: 'North America' },
    { href: '/advanteam/global-markets/middle-east/', label: 'Middle East' }
  ];
  const aboutNavigation = [
    { href: '/advanteam/about/', label: 'ADVANTEAM' },
    { href: '/advanteam/about/udo-foerster/', label: 'Udo Foerster' },
    { href: '/advanteam/about/references/', label: 'Selected References' },
    { href: '/advanteam/about/history/', label: 'Company History' }
  ];

  const linkMarkup = ({ href, label }, extraClass = '') => {
    const active = isCurrent(href);
    const className = [extraClass, active ? 'is-current' : ''].filter(Boolean).join(' ');
    return `<a${className ? ` class="${className}"` : ''} href="${href}"${active ? ' aria-current="page"' : ''}>${label}</a>`;
  };

  if (year) year.textContent = new Date().getFullYear();

  if (mobileNav) {
    mobileNav.id = 'advanteam-mobile-navigation';
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileNav.innerHTML = `
      <div class="wrap mobile-nav-inner">
        <div class="mobile-nav-primary">
          ${mobileNavigation.map((item) => linkMarkup(item, 'mobile-primary-link')).join('')}
        </div>
        <div class="mobile-nav-group${inSection('/advanteam/global-markets/') ? ' is-active-group' : ''}">
          <p class="mobile-label">Global Markets</p>
          <div class="mobile-nav-sublinks">${marketNavigation.map((item) => linkMarkup(item)).join('')}</div>
        </div>
        <div class="mobile-nav-group${inSection('/advanteam/about/') ? ' is-active-group' : ''}">
          <p class="mobile-label">About</p>
          <div class="mobile-nav-sublinks">${aboutNavigation.map((item) => linkMarkup(item)).join('')}</div>
        </div>
        <div class="mobile-nav-actions">
          ${linkMarkup({ href: '/advanteam/contact/', label: 'Contact ADVANTEAM' }, 'mobile-contact-button')}
          <a class="mobile-email-link" href="mailto:info@advanteam.de">info@advanteam.de</a>
        </div>
      </div>`;
  }

  const closeMobileMenu = (returnFocus = false) => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    body.classList.remove('menu-open');
    if (returnFocus) menuButton.focus();
  };

  const openMobileMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation');
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    body.classList.add('menu-open');
    const firstLink = mobileNav.querySelector('a');
    if (firstLink) requestAnimationFrame(() => firstLink.focus({ preventScroll: true }));
  };

  if (menuButton && mobileNav) {
    menuButton.setAttribute('type', 'button');
    menuButton.setAttribute('aria-controls', mobileNav.id);
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.querySelectorAll('span').forEach((span) => span.setAttribute('aria-hidden', 'true'));

    menuButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMobileMenu();
      else openMobileMenu();
    });

    mobileNav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMobileMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileNav.classList.contains('is-open')) closeMobileMenu(true);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1080 && mobileNav.classList.contains('is-open')) closeMobileMenu();
    }, { passive: true });

    window.addEventListener('pageshow', () => closeMobileMenu());
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
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('is-open');
      const button = dropdown.querySelector('button');
      if (button) button.setAttribute('aria-expanded', 'false');
    });
  });

  /* Shared layout enhancements. */
  const layoutStyles = document.createElement('style');
  layoutStyles.textContent = `
    .hero{min-height:auto;padding-top:clamp(58px,6vw,88px);padding-bottom:clamp(64px,7vw,104px)}
    .hero-grid{grid-template-columns:minmax(0,1.5fr) minmax(320px,.72fr);gap:clamp(42px,5vw,76px);align-items:center}
    .hero-copy{min-width:0;max-width:none}
    .hero-copy h1{max-width:100%;font-size:clamp(3.45rem,6.2vw,6.65rem);line-height:.99;overflow-wrap:normal;word-break:normal}
    .hero-panel{position:relative;z-index:2}
    .market-grid{width:min(100%,1180px);margin-inline:auto;align-items:stretch}
    .market-card{display:flex;min-width:0;min-height:0;padding:0;flex-direction:column;overflow:hidden}
    .market-card>span:first-child{display:none}
    .market-card-image{position:relative;display:block;width:100%;min-height:0;aspect-ratio:16/9;margin:0;padding:0;overflow:hidden;background:#0b1b28;border-bottom:1px solid rgba(140,198,182,.4);cursor:pointer}
    .market-card-image:focus-visible{outline:3px solid #8cc6b6;outline-offset:-3px}
    .market-card-image img,.market-card-image video{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;pointer-events:none}
    .market-card-image img{z-index:1}.market-card-image video{z-index:2;opacity:0;transition:opacity .3s ease}.market-card-image video.is-playing{opacity:1}
    .market-card-copy{display:flex;min-width:0;padding:26px clamp(30px,3vw,44px) 34px;flex:1;flex-direction:column}
    .market-card-copy h3{max-width:100%;margin:0 0 12px;font-size:clamp(1.75rem,2.35vw,2.65rem);line-height:1.08;overflow-wrap:break-word}
    .market-card-copy p{max-width:31ch;margin:0;color:rgba(255,255,255,.72);font-size:1rem;line-height:1.55}
    .markets.has-equation-after{padding-bottom:clamp(34px,4vw,54px)}
    .home-equation-section{padding:clamp(22px,3vw,34px) 0;background:#dfe5e2}
    .home-equation-card{position:relative;width:min(1440px,calc(100% - 32px));margin:0 auto;overflow:hidden;color:#fff;background:#0d1c2a;border-radius:28px;box-shadow:0 18px 55px rgba(7,21,37,.10)}
    .home-equation-label{position:absolute;z-index:2;top:20px;left:20px;display:flex;align-items:center;gap:10px;padding:8px 11px;color:#071525;background:rgba(255,255,255,.92);border-radius:999px;box-shadow:0 6px 18px rgba(0,0,0,.08);font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .home-equation-label b{display:grid;width:25px;height:25px;color:#fff;background:#071525;border-radius:50%;place-items:center}
    .home-equation-stage{display:grid;min-height:650px;padding:92px 6vw 70px;align-content:center}
    .home-equation-eyebrow{margin:0 0 24px;color:#8cc6b6;font-size:.76rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
    .home-equation-formula{max-width:1300px;margin:0;font-size:clamp(2.2rem,5.4vw,6.2rem);font-weight:800;letter-spacing:-.055em;line-height:1.02}
    .home-equation-formula .operator{color:#8cc6b6;font-weight:300}.home-equation-formula .result{display:inline-block;color:#fff;border-bottom:6px solid #2f7f68}
    .home-equation-notes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:65px}.home-equation-notes>div{padding-top:16px;border-top:1px solid rgba(255,255,255,.18)}.home-equation-notes b{display:block;margin-bottom:7px;color:#8cc6b6}.home-equation-notes span{color:rgba(255,255,255,.62);font-size:.88rem;line-height:1.45}
    .capability-card .card-number.adv-icon{display:inline-grid!important;width:74px!important;height:74px!important;margin-bottom:28px!important;border:1px solid rgba(47,127,104,.2);border-radius:20px!important;background:linear-gradient(145deg,#f7fbfa,#e4f1ed)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 10px 24px rgba(7,21,37,.07);place-items:center;font-size:0!important;color:#176a56}
    .capability-card .card-number.adv-icon::before{display:none!important;content:none!important}.capability-card .card-number.adv-icon svg{width:38px;height:38px;overflow:visible}.capability-card .card-number.adv-icon .icon-soft{fill:rgba(47,127,104,.14);stroke:none}.capability-card .card-number.adv-icon .icon-line{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}
    .capability-card:hover .card-number.adv-icon{color:#0f5948;border-color:rgba(47,127,104,.38);transform:translateY(-2px) rotate(-1deg);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 14px 30px rgba(7,21,37,.11)}
    @media(max-width:1180px){.hero-grid{grid-template-columns:minmax(0,1.35fr) minmax(300px,.75fr);gap:38px}.hero-copy h1{font-size:clamp(3.3rem,5.9vw,5.7rem)}}
    @media(max-width:1080px){.market-card-copy p{max-width:none}}
    @media(max-width:980px){.hero{padding-top:58px;padding-bottom:72px}.hero-grid{grid-template-columns:1fr}.hero-copy h1{font-size:clamp(3rem,9vw,5.3rem)}.home-equation-stage{min-height:0;padding:80px 6vw 54px}.home-equation-notes{grid-template-columns:repeat(2,minmax(0,1fr));margin-top:46px}}
    @media(max-width:680px){.hero{padding-top:42px;padding-bottom:52px}.hero-copy h1{font-size:clamp(2.45rem,11.5vw,3.8rem);line-height:1.01}.market-card-copy{padding:20px 20px 26px}.market-card-copy h3{font-size:clamp(1.65rem,8vw,2.25rem)}.home-equation-card{width:calc(100% - 20px);border-radius:18px}.home-equation-label{top:14px;left:14px}.home-equation-stage{padding:72px 20px 36px}.home-equation-formula{font-size:clamp(1.9rem,9.5vw,3.1rem);line-height:1.05}.home-equation-formula .result{border-bottom-width:4px}.home-equation-notes{grid-template-columns:1fr;gap:18px;margin-top:34px}}
  `;
  document.head.appendChild(layoutStyles);

  const marketMedia = [
    { video: '/advanteam/flags/16x9_EU_FLAG_and_Germany_Flag.mp4', poster: '/advanteam/flags/EU_FLAG_and_Germany_Flag-16x9.png', alt: 'European Union and Germany flags' },
    { video: '/advanteam/flags/16x9_American_Flag_and_Canada.mp4', poster: '/advanteam/flags/Dean_Palermo_Sharp_Professianl_use_of_American_Flag_and_Canad_a76921f8-a488-4a15-9ff3-ca92eff22103_0.png', alt: 'United States and Canada flags' },
    { video: '/advanteam/flags/Dean_Palermo_Dubai_Flag_not_wavy_not_wrinkled_with_key_buildi_680d73e4-26a2-4d6d-9898-3dd67e65e9e4_0.mp4', poster: '/advanteam/flags/Dubai_Flag.png', alt: 'United Arab Emirates flag in Dubai' }
  ];

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const effectiveType = connection && connection.effectiveType ? String(connection.effectiveType).toLowerCase() : '';
  const preferPosterOnly = prefersReducedMotion || Boolean(connection && connection.saveData) || effectiveType === 'slow-2g' || effectiveType === '2g';

  document.querySelectorAll('.market-card').forEach((card, index) => {
    card.querySelectorAll(':scope > span').forEach((number) => number.remove());
    let image = card.querySelector('.market-card-image');
    if (!image) {
      image = document.createElement('div');
      image.className = 'market-card-image';
      card.prepend(image);
    }
    const media = marketMedia[index];
    if (media) {
      image.innerHTML = '';
      image.setAttribute('aria-label', `${media.alt}. Activate to replay the video.`);
      image.setAttribute('role', 'button');
      image.setAttribute('tabindex', '0');
      const fallback = document.createElement('img');
      fallback.src = media.poster;
      fallback.alt = '';
      fallback.loading = 'lazy';
      fallback.decoding = 'async';
      image.appendChild(fallback);
      const video = document.createElement('video');
      video.muted = true;
      video.defaultMuted = true;
      video.autoplay = !preferPosterOnly;
      video.loop = false;
      video.playsInline = true;
      video.preload = preferPosterOnly ? 'none' : 'metadata';
      video.poster = media.poster;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('aria-hidden', 'true');
      video.src = media.video;
      image.appendChild(video);
      const showPoster = () => {
        video.pause();
        video.classList.remove('is-playing');
        try { video.currentTime = 0; } catch (error) {}
      };
      const playOnce = () => {
        try { video.currentTime = 0; } catch (error) {}
        video.classList.add('is-playing');
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => video.classList.remove('is-playing'));
      };
      video.addEventListener('playing', () => video.classList.add('is-playing'));
      video.addEventListener('ended', showPoster);
      video.addEventListener('error', () => video.classList.remove('is-playing'));
      const replayFromFlag = (event) => {
        event.preventDefault();
        event.stopPropagation();
        playOnce();
      };
      image.addEventListener('click', replayFromFlag);
      image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') replayFromFlag(event);
      });
      if (!preferPosterOnly) {
        video.addEventListener('canplay', playOnce, { once: true });
        requestAnimationFrame(playOnce);
      }
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

  const marketsSection = document.querySelector('main > .markets');
  const contactSection = document.querySelector('main > .contact-section');
  if (marketsSection && contactSection && !document.querySelector('.home-equation-section')) {
    marketsSection.classList.add('has-equation-after');
    const equationSection = document.createElement('section');
    equationSection.className = 'home-equation-section';
    equationSection.setAttribute('aria-labelledby', 'home-equation-title');
    equationSection.innerHTML = `<div class="home-equation-card reveal"><div class="home-equation-label"><b>05</b><span>The Equation</span></div><div class="home-equation-stage"><p class="home-equation-eyebrow">What ADVANTEAM combines</p><h2 class="home-equation-formula" id="home-equation-title">Strategy <span class="operator">+</span> Marketing <span class="operator">+</span><br>Digitalization <span class="operator">+</span><br>Commercial Expertise <span class="operator">=</span><br><span class="result">Realization &amp; Growth</span></h2><div class="home-equation-notes"><div><b>Individual</b><span>Every collaboration is built around your organization and objectives.</span></div><div><b>Integrated</b><span>Strategic, marketing, digital, and commercial thinking stay connected.</span></div><div><b>Hands-on</b><span>Support continues from planning into actual project realization.</span></div><div><b>Long-term</b><span>The relationship extends beyond launch into optimization and growth.</span></div></div></div></div>`;
    contactSection.before(equationSection);
  }

  const capabilityIcons = [
    `<svg viewBox="0 0 48 48" aria-hidden="true"><circle class="icon-soft" cx="24" cy="24" r="17"/><path class="icon-line" d="M24 8.5a15.5 15.5 0 1 0 15.5 15.5A15.5 15.5 0 0 0 24 8.5Z"/><path class="icon-line" d="m29.5 18.5-3.2 7.8-7.8 3.2 3.2-7.8 7.8-3.2Z"/><circle class="icon-line" cx="24" cy="24" r="2.2"/></svg>`,
    `<svg viewBox="0 0 48 48" aria-hidden="true"><path class="icon-soft" d="M8 22.5 17 14l7 4.5 7-4.5 9 8.5-12.5 12a5 5 0 0 1-7 0Z"/><path class="icon-line" d="m8 22.5 8.5-8 7.5 4.8 7.5-4.8 8.5 8"/><path class="icon-line" d="m16.5 14.5-4-4-6 6 5 5"/><path class="icon-line" d="m31.5 14.5 4-4 6 6-5 5"/><path class="icon-line" d="m19 28 4 4a3.2 3.2 0 0 0 4.5 0l5.5-5.5"/><path class="icon-line" d="m16 25 4.5 4.5"/></svg>`,
    `<svg viewBox="0 0 48 48" aria-hidden="true"><path class="icon-soft" d="M9 19h30v20H9z"/><path class="icon-line" d="M7 19h34M11 19v20m8-20v20m10-20v20m8-20v20M7 39h34M24 8l16 8H8l16-8Z"/><path class="icon-line" d="M34 10.5v-4M34 6.5h5"/></svg>`,
    `<svg viewBox="0 0 48 48" aria-hidden="true"><path class="icon-soft" d="M9 35h30v5H9z"/><path class="icon-line" d="M9 39V11m0 28h30"/><path class="icon-line" d="m13 31 8-8 6 5 11-13"/><path class="icon-line" d="M31 15h7v7"/><circle class="icon-line" cx="21" cy="23" r="2.2"/><circle class="icon-line" cx="27" cy="28" r="2.2"/></svg>`,
    `<svg viewBox="0 0 48 48" aria-hidden="true"><circle class="icon-soft" cx="24" cy="24" r="17"/><circle class="icon-line" cx="24" cy="24" r="16"/><path class="icon-line" d="M8 24h32M24 8c5 5 7 10.3 7 16s-2 11-7 16M24 8c-5 5-7 10.3-7 16s2 11 7 16"/><circle class="icon-line" cx="12" cy="17" r="2.2"/><circle class="icon-line" cx="35" cy="29" r="2.2"/><path class="icon-line" d="m14 18.5 7 3.5m7 2 5 3"/></svg>`,
    `<svg viewBox="0 0 48 48" aria-hidden="true"><path class="icon-soft" d="m24 7 14 6v10c0 8.5-5.5 14.5-14 18-8.5-3.5-14-9.5-14-18V13Z"/><path class="icon-line" d="m24 7 14 6v10c0 8.5-5.5 14.5-14 18-8.5-3.5-14-9.5-14-18V13Z"/><path class="icon-line" d="m17.5 24 4.2 4.2 9-9"/><circle class="icon-line" cx="24" cy="24" r="10"/></svg>`
  ];

  document.querySelectorAll('#capabilities .capability-card').forEach((card, index) => {
    const iconHolder = card.querySelector('.card-number');
    if (!iconHolder || !capabilityIcons[index]) return;
    iconHolder.classList.add('adv-icon');
    iconHolder.innerHTML = capabilityIcons[index];
  });

  const revealItems = document.querySelectorAll('.reveal');
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

  /* Global cookie consent microsystem. */
  const cookieConsentScript = document.createElement('script');
  cookieConsentScript.src = '/advanteam/assets/cookie-consent.js';
  cookieConsentScript.defer = true;
  document.head.appendChild(cookieConsentScript);

})();