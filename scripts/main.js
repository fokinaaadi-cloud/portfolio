console.log('Портфолио загружено');

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.case-card').forEach((card) => {
  const overlay = card.querySelector('.case-card-overlay');
  const closeBtn = card.querySelector('.case-card-close');

  card.addEventListener('click', (e) => {
    if (e.target.closest('.case-card-overlay')) return;
    card.classList.toggle('is-open');
  });

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) card.classList.remove('is-open');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.classList.remove('is-open');
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.case-card.is-open').forEach((card) => {
      card.classList.remove('is-open');
    });
  }
});
