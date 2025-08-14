// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.portfolio-categories button');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterButtons.forEach(btn => btn.addEventListener('click', function() {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const cat = btn.dataset.category;
  portfolioItems.forEach(item => {
    item.style.display = (cat === 'all' || item.classList.contains(cat)) ? 'block' : 'none';
  });
}));

// Lightbox for portfolio
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
const lightboxCaption = document.querySelector('.lightbox-caption');
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = item.querySelector('h3').textContent;
    lightbox.focus();
  });
});
document.querySelector('.lightbox-close').onclick = () => lightbox.style.display = 'none';
lightbox.addEventListener('keyup', e => { if (e.key === 'Escape') lightbox.style.display = 'none'; });

// Contact form (placeholder, you can enhance with emailjs/Netlify Forms)
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (Replace this with your email handler.)');
});

// Simple animation on scroll (optional: reveal sections using Intersection Observer)
