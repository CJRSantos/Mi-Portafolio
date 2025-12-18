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

const form = document.getElementById('contact-form');

async function handleContact(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  const btn = form.querySelector('button');
  const originalText = btn.innerText;
  btn.innerText = 'Enviando...';
  btn.disabled = true;

  try {
    // REEMPLAZA 'tu-email@gmail.com' CON TU EMAIL REAL AQUÍ ABAJO
    // Para probarlo la primera vez, recibirás un correo de confirmación de FormSubmit
    const response = await fetch("https://formsubmit.co/ajax/tu-email@gmail.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
      form.reset();
    } else {
      alert('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error de conexión. Verifica tu internet.');
  } finally {
    btn.innerText = originalText;
    btn.disabled = false;
  }
}
