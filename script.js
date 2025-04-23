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

// Simple popup toggle
function togglePopup() {
    popup.classList.toggle('active');
}

// Update navigation visibility
function updateNav() {
    if (window.scrollY === 0) {
        document.body.classList.add('at-top');
    } else {
        document.body.classList.remove('at-top');
    }
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the scroll to top button based on scroll position
function toggleScrollToTopBtn() {
    if (window.scrollY > 0) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize
window.addEventListener('scroll', () => {
    handleScroll();
    updateNav();
    toggleScrollToTopBtn();
});
handleScroll(); // Run once on load
updateNav(); // Run once on load
toggleScrollToTopBtn(); // Run once on load

