(() => {
  const translations = {
    'Explore Our Services':'Unsere Leistungen ansehen',
    'Call +49 151 465 666 88':'+49 151 465 666 88 anrufen',
    'Germany':'Deutschland',
    'Electromobility':'Elektromobilität',
    'Your browser does not support HTML video.':'Ihr Browser unterstützt HTML-Video nicht.',
    'ADVANTEAM overview video':'ADVANTEAM-Übersichtsvideo',
    'ADVANTEAM video':'ADVANTEAM-Video',
    'Udo Foerster speaks about ADVANTEAM communications':'Udo Foerster spricht über die Kommunikation von ADVANTEAM',
    'Udo Foerster speaks about strategy and change management':'Udo Foerster spricht über Strategie und Change Management',
    'European Union and Germany flags. Activate to replay the video.':'Flaggen der Europäischen Union und Deutschlands. Aktivieren, um das Video erneut abzuspielen.',
    'United States and Canada flags. Activate to replay the video.':'Flaggen der Vereinigten Staaten und Kanadas. Aktivieren, um das Video erneut abzuspielen.',
    'United Arab Emirates flag in Dubai. Activate to replay the video.':'Flagge der Vereinigten Arabischen Emirate in Dubai. Aktivieren, um das Video erneut abzuspielen.',
    '55268 Nieder-Olm, Germany':'55268 Nieder-Olm, Deutschland',
    '52070 Aachen, Germany':'52070 Aachen, Deutschland',
    'Founded 1998.':'Gegründet 1998.',
    'ADVANTEAM.':'ADVANTEAM.'
  };

  const textState = new WeakMap();
  const attrState = new WeakMap();
  let applying = false;

  const language = () => document.documentElement.lang === 'de' ? 'de' : 'en';

  const processText = (node, lang, refresh = false) => {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const parent = node.parentElement;
    if (!parent || parent.closest('script,style,noscript,textarea,[data-no-translate]')) return;
    const raw = node.nodeValue || '';
    const key = raw.trim();
    if (!key) return;
    let state = textState.get(node);
    if (refresh && Object.prototype.hasOwnProperty.call(translations, key)) state = null;
    if (!state) {
      if (!Object.prototype.hasOwnProperty.call(translations, key)) return;
      const start = raw.indexOf(key);
      state = {
        en: raw,
        de: raw.slice(0, start) + translations[key] + raw.slice(start + key.length)
      };
      textState.set(node, state);
    }
    node.nodeValue = lang === 'de' ? state.de : state.en;
  };

  const processAttrs = (element, lang) => {
    if (!(element instanceof Element) || element.closest('[data-no-translate]')) return;
    let state = attrState.get(element);
    if (!state) {
      state = {};
      ['aria-label','title','alt','placeholder'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value && Object.prototype.hasOwnProperty.call(translations, value)) {
          state[attribute] = { en: value, de: translations[value] };
        }
      });
      attrState.set(element, state);
    }
    Object.entries(state).forEach(([attribute, values]) => {
      element.setAttribute(attribute, lang === 'de' ? values.de : values.en);
    });
  };

  const apply = (root = document.body, refresh = false) => {
    const lang = language();
    applying = true;
    if (root.nodeType === Node.TEXT_NODE) {
      processText(root, lang, refresh);
    } else if (root instanceof Element || root === document.body) {
      if (root instanceof Element) processAttrs(root, lang);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) processText(node, lang, refresh);
      if (root.querySelectorAll) root.querySelectorAll('*').forEach((el) => processAttrs(el, lang));
    }
    requestAnimationFrame(() => { applying = false; });
  };

  apply();

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-adv-lang]')) return;
    setTimeout(() => apply(document.body), 0);
  });

  const observer = new MutationObserver((mutations) => {
    if (applying) return;
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') processText(mutation.target, language(), true);
      else mutation.addedNodes.forEach((node) => apply(node, true));
    });
  });
  observer.observe(document.body, { subtree:true, childList:true, characterData:true });
})();
