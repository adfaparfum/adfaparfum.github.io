const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const popup = document.getElementById('popupMarketplace');
const header = document.getElementById('navbar');

// Handle scroll effect
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('show');
});

// Close mobile menu when clicking links
document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('show');
    });
});

// Popup toggle
function togglePopup() {
    popup.classList.toggle('active');
}

// Initialize
window.addEventListener('scroll', handleScroll);
handleScroll(); // Run once on load
