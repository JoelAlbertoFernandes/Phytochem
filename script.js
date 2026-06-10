const header = document.querySelector('#header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const cards = document.querySelectorAll('.capability-card');

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

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
