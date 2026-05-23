/* Ground Treatment Rooms — main.js */

/* ---- Sticky nav: add .scrolled class after scrolling ---- */
const nav = document.getElementById('nav');

function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();


/* ---- Mobile menu ---- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('mobile-open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* Close on Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
    navLinks.classList.remove('mobile-open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    navToggle.focus();
  }
});


/* ---- Scroll-triggered fade-in animations ---- */
const fadeEls = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      /* Stagger cards that appear in the same viewport sweep */
      const delay = entry.target.closest('.treatments-grid, .benefits-grid')
        ? i * 90
        : 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

  fadeEls.forEach(el => observer.observe(el));
} else {
  /* Fallback: show everything immediately */
  fadeEls.forEach(el => el.classList.add('visible'));
}


/* ---- Smooth scroll for anchor links (supplement CSS scroll-behavior) ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = nav.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
