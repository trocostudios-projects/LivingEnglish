/**
 * Academia Living English - Landing Page Scripts
 */
document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!openMenuBtn || !closeMenuBtn || !mobileMenu) return;

  function toggleMenu(isOpen) {
    if (isOpen) {
      mobileMenu.classList.add('is-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openMenuBtn.addEventListener('click', () => toggleMenu(true));
  closeMenuBtn.addEventListener('click', () => toggleMenu(false));

  // Cerrar menú con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });

  // Cerrar menú al hacer clic en cualquier enlace interno del menú móvil
  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
});
