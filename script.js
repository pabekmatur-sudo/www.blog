/* =============================================
   script.js  — minimal interaction helpers
   ============================================= */

// ── Mobile nav toggle ──────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Navbar solid bg on scroll ──────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(14, 14, 14, 0.98)';
  } else {
    navbar.style.background = 'rgba(14, 14, 14, 0.92)';
  }
});

// ── Newsletter subscribe (demo) ─────────────
document.querySelector('.newsletter-form button')?.addEventListener('click', () => {
  const input = document.querySelector('.newsletter-form input');
  if (input && input.value.includes('@')) {
    alert('Thanks for subscribing! 🎉');
    input.value = '';
  } else {
    alert('Please enter a valid email address.');
  }
});
