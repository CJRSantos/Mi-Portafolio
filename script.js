// Script simple: menú responsive, scroll suave y manejo de formulario (simulado)
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const navList = document.getElementById('nav-list');
  menuBtn && menuBtn.addEventListener('click', () => navList.classList.toggle('show'));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navList.classList.remove('show');
      }
    });
  });

  // Modal foto ampliada
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const profilePic = document.getElementById('profile-pic');
  const closeBtn = document.getElementById('modal-close');

  profilePic.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = profilePic.src;
    modalImg.alt = profilePic.alt;
    modal.setAttribute('aria-hidden', 'false');
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  // Cerrar modal al hacer click fuera de la imagen
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  // Cerrar modal con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});

function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  alert('Gracias ' + data.name + '! Tu mensaje fue recibido (simulado).');
  form.reset();
}
