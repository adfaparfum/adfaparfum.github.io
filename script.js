const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const popup = document.getElementById('popupMarketplace');
const header = document.getElementById('navbar');
const productSection = document.getElementById('produk');

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
    header.classList.toggle('menu-open', isActive);
    menuToggle.classList.toggle('menu-open', isActive);
    if (isActive) {
        mobileMenu.hidden = false;
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        mobileMenu.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Update toggleNavbarVisibility to keep navbar visible when menu is active
function toggleNavbarVisibility() {
    if (menuToggle.classList.contains('active')) {
        header.classList.add('visible');
        menuToggle.classList.add('visible');
    } else if (window.scrollY === 0) {
        header.classList.remove('visible');
        menuToggle.classList.remove('visible');
    } else {
        header.classList.add('visible');
        menuToggle.classList.add('visible');
    }
}

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
    if (window.scrollY === 0) {
        header.classList.remove('visible');
        menuToggle.classList.remove('visible');
    } else {
        header.classList.add('visible');
        menuToggle.classList.add('visible');
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

// Scroll to top on button click
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Detect if product section is in view and toggle class on body
function checkProductSectionInView() {
    if (!productSection) return;
    const rect = productSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Check if product section top is within viewport
    if (rect.top <= windowHeight && rect.bottom >= 0) {
        document.body.classList.add('product-active');
    } else {
        document.body.classList.remove('product-active');
    }
}

// Set all elements of a given selector to the smallest font size among them
function unifyFontSize(selector) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    let smallestFontSize = Infinity;
    elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const fontSize = parseFloat(style.fontSize);
        if (fontSize < smallestFontSize) {
            smallestFontSize = fontSize;
        }
    });

    elements.forEach(el => {
        el.style.fontSize = smallestFontSize + 'px';
    });
}

// Disable click for Tokopedia and TikTok Shop buttons and show alert
function disableUnavailableButtons() {
    const tokopediaBtn = document.querySelector('.tokopedia');
    const tiktokBtn = document.querySelector('.tiktok');
    if (tokopediaBtn) {
        tokopediaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Tokopedia shop is coming soon! 😊');
        });
    }
    if (tiktokBtn) {
        tiktokBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('TikTok Shop is coming soon! 😊');
        });
    }
}

// Add event listeners to "Alasan Memilih Aroma Ini" buttons to open variant pages
function setupReasonButtons() {
    const reasonButtons = document.querySelectorAll('.cpc-button-reason');
    reasonButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.clean-product-card');
            if (!card) return;
            const productNameEl = card.querySelector('.cpc-product-name');
            if (!productNameEl) return;
            let productName = productNameEl.textContent.trim().toLowerCase();
            // Convert product name to filename format: lowercase, spaces and special chars replaced with hyphens
            productName = productName.replace(/&/g, 'and');
            productName = productName.replace(/[^a-z0-9]+/g, '-');
            productName = productName.replace(/^-+|-+$/g, '');
            const pageUrl = `pages/${productName}.html`;
            window.location.href = pageUrl;
        });
    });
}

// Initialize
window.addEventListener('scroll', () => {
    handleScroll();
    updateNav();
    toggleScrollToTopBtn();
    toggleNavbarVisibility();
    checkProductSectionInView();
});
window.addEventListener('load', () => {
    handleScroll();
    updateNav();
    toggleScrollToTopBtn();
    toggleNavbarVisibility();
    checkProductSectionInView();
    unifyFontSize('.cpc-product-category');
    unifyFontSize('.cpc-product-name');
    disableUnavailableButtons();
});
window.addEventListener('resize', () => {
    unifyFontSize('.cpc-product-category');
    unifyFontSize('.cpc-product-name');
});
