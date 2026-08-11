(() => {
  const STORAGE_KEY = 'advanteam_cookie_preferences_v1';
  const DEFAULTS = { necessary: true, analytics: false, marketing: false };

  const readPrefs = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      return saved && typeof saved === 'object' ? { ...DEFAULTS, ...saved, necessary: true } : null;
    } catch (_) {
      return null;
    }
  };

  const activateDeferredScripts = (prefs) => {
    document.querySelectorAll('script[type="text/plain"][data-cookie-category]').forEach((node) => {
      const category = node.dataset.cookieCategory;
      if (!prefs[category] || node.dataset.cookieActivated === 'true') return;
      const script = document.createElement('script');
      [...node.attributes].forEach((attr) => {
        if (!['type', 'data-cookie-category', 'data-cookie-activated'].includes(attr.name)) script.setAttribute(attr.name, attr.value);
      });
      script.text = node.textContent;
      node.dataset.cookieActivated = 'true';
      node.after(script);
    });
    window.dispatchEvent(new CustomEvent('advanteam:cookie-consent', { detail: prefs }));
  };

  const savePrefs = (prefs) => {
    const normalized = { ...DEFAULTS, ...prefs, necessary: true, updatedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    activateDeferredScripts(normalized);
    return normalized;
  };

  const style = document.createElement('style');
  style.textContent = `
    .cookie-consent{position:fixed;z-index:9999;right:20px;bottom:20px;width:min(560px,calc(100vw - 40px));padding:22px;color:#fff;background:#0d1c2a;border:1px solid rgba(140,198,182,.35);border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,.34);font-family:inherit}
    .cookie-consent[hidden],.cookie-modal[hidden]{display:none!important}
    .cookie-consent h2,.cookie-modal h2{margin:0 0 8px;font-size:1.2rem;line-height:1.2}.cookie-consent p,.cookie-modal p{margin:0;color:rgba(255,255,255,.76);font-size:.92rem;line-height:1.55}
    .cookie-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}.cookie-btn{min-height:42px;padding:10px 16px;border:1px solid rgba(255,255,255,.4);border-radius:999px;font:inherit;font-size:.86rem;font-weight:700;cursor:pointer}.cookie-btn-primary{color:#fff;background:#2f7f68;border-color:#2f7f68}.cookie-btn-secondary{color:#fff;background:transparent}.cookie-btn-light{color:#071525;background:#fff;border-color:#fff}
    .cookie-modal{position:fixed;z-index:10000;inset:0;display:grid;padding:20px;background:rgba(3,11,20,.7);place-items:center}.cookie-modal-card{width:min(620px,100%);max-height:min(760px,90vh);overflow:auto;padding:26px;color:#fff;background:#0d1c2a;border:1px solid rgba(140,198,182,.35);border-radius:20px;box-shadow:0 30px 90px rgba(0,0,0,.45)}
    .cookie-options{display:grid;gap:12px;margin-top:20px}.cookie-option{display:flex;gap:16px;align-items:flex-start;padding:16px;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.1);border-radius:14px}.cookie-option-copy{flex:1}.cookie-option strong{display:block;margin-bottom:4px}.cookie-option small{display:block;color:rgba(255,255,255,.65);line-height:1.45}
    .cookie-switch{position:relative;width:48px;height:28px;flex:0 0 auto}.cookie-switch input{position:absolute;opacity:0}.cookie-switch span{position:absolute;inset:0;background:#53606b;border-radius:999px;transition:.2s}.cookie-switch span:after{position:absolute;top:4px;left:4px;width:20px;height:20px;content:'';background:#fff;border-radius:50%;transition:.2s}.cookie-switch input:checked+span{background:#2f7f68}.cookie-switch input:checked+span:after{transform:translateX(20px)}.cookie-switch input:disabled+span{opacity:.75}
    .cookie-settings-link{padding:0;border:0;color:inherit;background:none;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}
    @media(max-width:600px){.cookie-consent{right:10px;bottom:10px;width:calc(100vw - 20px);padding:18px}.cookie-actions{display:grid}.cookie-btn{width:100%}.cookie-modal{padding:10px}.cookie-modal-card{padding:20px}}
  `;
  document.head.appendChild(style);

  const banner = document.createElement('section');
  banner.className = 'cookie-consent';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', 'Cookie preferences');
  banner.innerHTML = `
    <h2>Your privacy choices</h2>
    <p>We use necessary storage to keep the site working. With your permission, optional analytics and marketing technologies may also be used. You control these choices at any time.</p>
    <div class="cookie-actions">
      <button class="cookie-btn cookie-btn-primary" type="button" data-cookie-accept>Accept all</button>
      <button class="cookie-btn cookie-btn-light" type="button" data-cookie-reject>Necessary only</button>
      <button class="cookie-btn cookie-btn-secondary" type="button" data-cookie-manage>Manage preferences</button>
    </div>`;

  const modal = document.createElement('div');
  modal.className = 'cookie-modal';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="cookie-modal-card" role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title">
      <h2 id="cookie-modal-title">Cookie preferences</h2>
      <p>Choose which optional technologies ADVANTEAM may use. Necessary storage remains active because it supports core site functions and remembers your privacy choice.</p>
      <div class="cookie-options">
        <div class="cookie-option"><div class="cookie-option-copy"><strong>Necessary</strong><small>Required for core website functions and storing your consent preference.</small></div><label class="cookie-switch"><input type="checkbox" checked disabled><span></span></label></div>
        <div class="cookie-option"><div class="cookie-option-copy"><strong>Analytics</strong><small>Helps measure site usage and improve content and performance.</small></div><label class="cookie-switch"><input type="checkbox" data-cookie-toggle="analytics"><span></span></label></div>
        <div class="cookie-option"><div class="cookie-option-copy"><strong>Marketing</strong><small>Allows optional marketing or advertising technologies when they are added to the site.</small></div><label class="cookie-switch"><input type="checkbox" data-cookie-toggle="marketing"><span></span></label></div>
      </div>
      <div class="cookie-actions">
        <button class="cookie-btn cookie-btn-primary" type="button" data-cookie-save>Save preferences</button>
        <button class="cookie-btn cookie-btn-secondary" type="button" data-cookie-close>Cancel</button>
      </div>
    </div>`;

  document.body.append(banner, modal);

  const analyticsToggle = modal.querySelector('[data-cookie-toggle="analytics"]');
  const marketingToggle = modal.querySelector('[data-cookie-toggle="marketing"]');

  const openManager = () => {
    const current = readPrefs() || DEFAULTS;
    analyticsToggle.checked = !!current.analytics;
    marketingToggle.checked = !!current.marketing;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.querySelector('[data-cookie-save]')?.focus(), 0);
  };

  const closeManager = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  banner.querySelector('[data-cookie-accept]').addEventListener('click', () => {
    savePrefs({ analytics: true, marketing: true });
    banner.hidden = true;
  });
  banner.querySelector('[data-cookie-reject]').addEventListener('click', () => {
    savePrefs({ analytics: false, marketing: false });
    banner.hidden = true;
  });
  banner.querySelector('[data-cookie-manage]').addEventListener('click', openManager);
  modal.querySelector('[data-cookie-save]').addEventListener('click', () => {
    savePrefs({ analytics: analyticsToggle.checked, marketing: marketingToggle.checked });
    closeManager();
    banner.hidden = true;
  });
  modal.querySelector('[data-cookie-close]').addEventListener('click', closeManager);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeManager(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeManager(); });

  const footer = document.querySelector('.footer .footer-bottom') || document.querySelector('.footer');
  if (footer && !footer.querySelector('[data-cookie-settings]')) {
    const settings = document.createElement('button');
    settings.type = 'button';
    settings.className = 'cookie-settings-link';
    settings.dataset.cookieSettings = '';
    settings.textContent = 'Cookie settings';
    settings.addEventListener('click', openManager);
    footer.appendChild(settings);
  }

  const existing = readPrefs();
  if (existing) {
    banner.hidden = true;
    activateDeferredScripts(existing);
  } else {
    banner.hidden = false;
  }
})();