// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');

// Mobile Menu Toggle
menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu?.classList.toggle('active');
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

// Smooth Scrolling
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

// Product Loader
const loadProducts = () => {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;

  const products = [
    {
      name: "Vatika Rassak",
      category: "Woody Aromatic",
      description: "Aroma oud dan musk dengan sentuhan floral",
      image: "assets/images/products/BG_Black&Wood/Vatika_Rassak.webp"
    },
    // Tambahkan produk lainnya di sini
  ];

  productsGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p class="category">${product.category}</p>
      <p class="description">${product.description}</p>
    </div>
  `).join('');
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
});
