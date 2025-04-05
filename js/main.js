// Mobile menu toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.addEventListener('click', toggleMobileMenu);

const nav = document.querySelector('.nav');
nav.appendChild(mobileMenuButton);

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Image loading functionality with placeholder
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const img = item.querySelector('img');
        const placeholder = document.createElement('div');
        placeholder.className = 'img-placeholder';
        item.insertBefore(placeholder, img);
        
        img.classList.add('loading');
        img.onload = function() {
            img.classList.remove('loading');
            img.classList.add('loaded');
            placeholder.style.display = 'none';
        };
        
        // Fallback if image fails to load
        img.onerror = function() {
            placeholder.style.display = 'none';
            img.style.display = 'none';
            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'Image not available';
            errorMsg.style.color = '#999';
            errorMsg.style.textAlign = 'center';
            item.appendChild(errorMsg);
        };
    });
});

// Product modal functionality
const productItems = document.querySelectorAll('.product-item');
productItems.forEach(item => {
    item.addEventListener('click', () => {
        const name = item.querySelector('h3').textContent;
        const price = item.querySelector('p').textContent;
        const imgSrc = item.querySelector('img').src;
        
        openProductModal(name, price, imgSrc);
    });
});

function openProductModal(name, price, imgSrc) {
    const modal = document.createElement('div');
    modal.classList.add('product-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imgSrc}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">${price}</p>
            <button class="btn add-to-cart">Add to Cart</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
