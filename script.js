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

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    // Wrap around if index is out of bounds
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    
    // Update slider position
    document.querySelector('.carousel-slider').style.transform = 
        `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-rotate slides every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-rotation when hovering over carousel
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume auto-rotation when mouse leaves
document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Initialize
window.addEventListener('scroll', () => {
    handleScroll();
    updateNav();
});
handleScroll(); // Run once on load
updateNav(); // Run once on load

// Set up dot navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showNextItem() {
    carouselItems[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].style.transform = 'translateX(0)';
}

function prevItem() {
    carouselItems[currentIndex].style.transform = 'translateX(100%)';
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].style.transform = 'translateX(0)';
}

function nextItem() {
    carouselItems[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].style.transform = 'translateX(0)';
}

setInterval(showNextItem, 3000); // Change item every 3 seconds
