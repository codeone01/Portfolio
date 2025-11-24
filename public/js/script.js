/* ========= Helpers ========= */
function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return root.querySelectorAll(sel); }

/* ========= Boot ========= */
document.addEventListener('DOMContentLoaded', () => {

  /* ===== Menu / Navbar ===== */
  const menuIcon = $('#menu-icon');
  const navbar = $('.navbar');
  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });
  }

  /* ===== Scroll sections active link ===== */
  const sections = $all('section');
  const navLinks = $all('header nav a');

  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => links.classList.remove('active'));
        const target = document.querySelector('header nav a[href*=' + id + ']');
        if (target) target.classList.add('active');
      }
    });

    const header = $('header');
    if (header) header.classList.toggle('sticky', window.scrollY > 100);

    if (menuIcon && navbar) {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    }
  });


  /* ===== Fechar alerts (se existirem) ===== */
  const success = $('#success_msg');
  const error = $('#error_msg');
  window.addEventListener('click', (event) => {
    if (event.target === success && success) success.style.display = "none";
    if (event.target === error && error) error.style.display = "none";
  });

  /* ===========================================================
     SERVICE MODALS (delegação – funciona com templates)
     =========================================================== */
  const body = document.body;

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    body.classList.add('modal-open');
    modal.setAttribute('aria-hidden', 'false');
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    body.classList.remove('modal-open');
    modal.setAttribute('aria-hidden', 'true');
  }

  // Abrir modal (para <button class="service-readmore"> ou <a>)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.service-readmore');
    if (!trigger) return;

    if (trigger.tagName === 'A') e.preventDefault(); // evita navegação
    const target = trigger.getAttribute('data-service-target');
    if (!target) return;

    const modal = document.querySelector(target);
    if (!modal) return;

    openModal(modal);
  });

  // Fechar por backdrop ou botão X
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-service-close]')) {
      const modal = e.target.closest('.service-modal') || document.querySelector('.service-modal.active');
      if (modal) closeModal(modal);
    }
  });

  // Fechar por ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.querySelector('.service-modal.active');
      if (modal) closeModal(modal);
    }
  });

  // Ação “Quero esse serviço” → fecha e rola para contato
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.modal-actions .btn');
    if (!btn) return;

    const activeModal = document.querySelector('.service-modal.active');
    if (activeModal) closeModal(activeModal);

    const contact = $('#contact');
    if (contact) {
      if (btn.tagName === 'A') e.preventDefault();
      setTimeout(() => contact.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  });

  /* ===========================================================
     LIGHTBOX DAS IMAGENS NOS MODAIS
     =========================================================== */
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar imagem ampliada">&times;</button>
    <img src="" alt="Imagem ampliada">
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  document.addEventListener('click', (e) => {
    const img = e.target.closest('.service-gallery img');
    if (!img) return;
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    body.classList.add('modal-open');
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    body.classList.remove('modal-open');
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
  });
});
