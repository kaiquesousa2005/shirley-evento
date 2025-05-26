document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function () {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (mobileMenuLinks.length > 0 && mobileMenu) {
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Scroll animation
  const animateOnScroll = function () {
    const elements = document.querySelectorAll('.feature, .reason, .about-text, .about-image, .mentor-info');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight * 0.85) {
        element.classList.add('animate-in');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // ✅ Corrigir links apenas se for na página /despertar
  const isDespertarPath = window.location.pathname.includes('/despertar');
  if (isDespertarPath) {
    const despertarLink = "https://sun.eduzz.com/E05XDYZDWX";
    const limitedSpotsButton = document.querySelector('#limited-spots .cta-button');
    if (limitedSpotsButton) {
      limitedSpotsButton.href = despertarLink;
    }
    // ⚠️ NÃO altere o .hero .cta-button aqui
  }
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, 0);
});
