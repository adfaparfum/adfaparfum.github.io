// Adjust product card width to fit exactly two per row on mobile without horizontal scroll
function adjustProductCardWidth() {
  const container = document.querySelector('.produk-container');
  const cards = document.querySelectorAll('.clean-product-card');
  if (window.innerWidth <= 768 && container && cards.length > 0) {
    const containerWidth = container.clientWidth;
    const gap = parseInt(getComputedStyle(container).gap) || 0;
    // Calculate width for two cards per row minus gap
    const cardWidth = (containerWidth - gap) / 2;
    cards.forEach(card => {
      card.style.width = cardWidth + 'px';
    });
  } else {
    cards.forEach(card => {
      card.style.width = '';
    });
  }
}
window.addEventListener('resize', adjustProductCardWidth);
window.addEventListener('load', adjustProductCardWidth);

// Adjust font size to fit within placeholder on all screen sizes
function fitTextToPlaceholder() {
  const elements = document.querySelectorAll('.cpc-product-name, .cpc-product-category');
  elements.forEach(el => {
    const maxWidth = el.clientWidth;
    const maxHeight = el.clientHeight;
    el.style.whiteSpace = 'nowrap';

    let fontSize = 8; // start from minimum font size 8px
    el.style.fontSize = fontSize + 'px';

    // Increase font size until it reaches max width or max height
    while (fontSize < 100) { // arbitrary max font size limit
      el.style.fontSize = (fontSize + 1) + 'px';
      if (el.scrollWidth > maxWidth || el.scrollHeight > maxHeight) {
        el.style.fontSize = fontSize + 'px'; // revert to last fitting size
        break;
      }
      fontSize++;
    }
  });
}
window.addEventListener('resize', fitTextToPlaceholder);
window.addEventListener('load', fitTextToPlaceholder);

// Navigation and UI scripts merged from main.js

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav-mobile');
const header = document.querySelector('#navbar');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const popup = document.getElementById('popupMarketplace');

// Mobile Menu Toggle
menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu?.classList.toggle('show');
});

// Close mobile menu when clicking links
document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('show');
  });
});

// Handle scroll effect
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Update navigation visibility
function updateNav() {
  if (window.scrollY === 0) {
    document.body.classList.add('at-top');
  } else {
    document.body.classList.remove('at-top');
  }
}

// Show or hide the scroll to top button based on scroll position
function toggleScrollToTopBtn() {
  if (window.scrollY > 0) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

// Scroll to top when button is clicked
scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Simple popup toggle
function togglePopup() {
  popup?.classList.toggle('active');
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  handleScroll();
  updateNav();
  toggleScrollToTopBtn();
});
window.addEventListener('scroll', () => {
  handleScroll();
  updateNav();
  toggleScrollToTopBtn();
});
