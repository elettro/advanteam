(() => {
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
  if (!footer) return;
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
})();
