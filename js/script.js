const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const toast = document.getElementById('toast');
let toastTimer;

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });
}

document.querySelectorAll('[data-placeholder-link="true"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      toast.textContent = 'Este enlace está listo para configurar. Agregá la URL real de la cuenta en index.html.';
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
