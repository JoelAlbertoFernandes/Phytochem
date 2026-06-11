const header = document.querySelector('#header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const cards = document.querySelectorAll('.capability-card');
const scheduler = document.querySelector('#scheduler-dialog');
const schedulerForm = document.querySelector('#scheduler-form');
const languageButtons = document.querySelectorAll('[data-lang]');
const originalText = new WeakMap();
const originalAttributes = new WeakMap();

const updateHeader = () => header.classList.toggle('scrolled', scrollY > 30);
updateHeader();
addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

cards.forEach(card => card.addEventListener('click', () => {
  if (matchMedia('(hover: none)').matches) card.classList.toggle('open');
}));

document.querySelectorAll('.open-scheduler').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  scheduler.showModal();
}));
document.querySelector('.scheduler-close').addEventListener('click', event => {
  event.preventDefault();
  scheduler.close();
});

const dateInput = schedulerForm.elements.date;
dateInput.min = new Date().toISOString().slice(0, 10);

const calendarDate = date => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
schedulerForm.addEventListener('submit', event => {
  if (event.submitter?.value === 'cancel') return;
  event.preventDefault();
  const data = new FormData(schedulerForm);
  const start = new Date(`${data.get('date')}T${data.get('time')}:00`);
  const end = new Date(start.getTime() + Number(data.get('duration')) * 60000);
  const subject = data.get('subject') || 'Conversa científica B2B com a PHYTOCHEM';
  const details = 'Conversa sobre P&DI em Ciência Botânica Aplicada e soluções com bioativos naturais.';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: subject,
    dates: `${calendarDate(start)}/${calendarDate(end)}`,
    details,
    add: 'comercial@phytochem.com.br'
  });
  window.open(`https://calendar.google.com/calendar/render?${params}`, '_blank', 'noopener,noreferrer');
  scheduler.close();
});

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement?.closest('script,style')) continue;
  const key = node.nodeValue.trim();
  if (key) {
    originalText.set(node, key);
    textNodes.push(node);
  }
}

const translatedAttributes = [...document.querySelectorAll('[aria-label],[title],[placeholder]')];
translatedAttributes.forEach(element => {
  originalAttributes.set(element, {
    'aria-label': element.getAttribute('aria-label'),
    title: element.getAttribute('title'),
    placeholder: element.getAttribute('placeholder')
  });
});

const translateValue = (value, lang) => {
  if (!value || lang === 'pt') return value;
  return window.PHYTOCHEM_I18N?.[lang]?.[value] || value;
};

const applyLanguage = (lang, updateUrl = true) => {
  if (!['pt', 'en', 'es'].includes(lang)) lang = 'pt';
  textNodes.forEach(node => {
    const source = originalText.get(node);
    const leading = node.nodeValue.match(/^\s*/)?.[0] || '';
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || '';
    node.nodeValue = `${leading}${translateValue(source, lang)}${trailing}`;
  });
  translatedAttributes.forEach(element => {
    const source = originalAttributes.get(element);
    Object.entries(source).forEach(([name, value]) => {
      if (value !== null) element.setAttribute(name, translateValue(value, lang));
    });
  });
  const meta = window.PHYTOCHEM_I18N.meta[lang];
  document.documentElement.lang = meta.lang;
  document.title = meta.title;
  document.querySelector('meta[name="description"]').content = meta.description;
  languageButtons.forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active);
  });
  localStorage.setItem('phytochem-language', lang);
  if (updateUrl) {
    const url = new URL(location.href);
    if (lang === 'pt') url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    history.replaceState({}, '', url);
  }
};

languageButtons.forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
const initialLanguage = new URLSearchParams(location.search).get('lang') || localStorage.getItem('phytochem-language') || 'pt';
applyLanguage(initialLanguage, false);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
