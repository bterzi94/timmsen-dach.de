// Timmsen Dach – Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle (placeholder)
  const navLinks = document.querySelector('.nav-links');

  // Active link highlighting
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href').endsWith(currentPath)) {
      link.style.color = 'var(--color-accent)';
    }
  });
});
