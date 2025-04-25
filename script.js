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
    const isActive = menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('show');
    if (isActive) {
        mobileMenu.hidden = false;
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        mobileMenu.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking links
document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('show');
        mobileMenu.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
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

function toggleNavbarVisibility() {
    console.log('toggleNavbarVisibility called, scrollY:', window.scrollY);
    if (window.scrollY === 0) {
        header.classList.remove('visible');
        menuToggle.classList.remove('visible');
        console.log('Removed visible class from navbar and menu toggle');
    } else {
        header.classList.add('visible');
        menuToggle.classList.add('visible');
        console.log('Added visible class to navbar and menu toggle');
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
    toggleNavbarVisibility();
});
handleScroll(); // Run once on load
updateNav(); // Run once on load
toggleScrollToTopBtn(); // Run once on load
toggleNavbarVisibility(); // Run once on load
