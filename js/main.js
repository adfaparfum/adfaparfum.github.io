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

// Cart functionality
let cart = [];
const cartIcon = document.querySelector('.cart-icon');

function updateCartIcon() {
    cartIcon.textContent = `Cart (${cart.length})`;
}

function addToCart(product) {
    cart.push(product);
    updateCartIcon();
    showCartNotification(`${product.name} added to cart`);
}

function showCartNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// Initialize cart icon click
cartIcon.addEventListener('click', showCartModal);

function showCartModal() {
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal';
    cartModal.innerHTML = `
        <div class="cart-content">
            ${cart.length === 0 ? '<p>Your cart is empty</p>' : 
                cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <h4>${item.name}</h4>
                            <p>${item.price}</p>
                        </div>
                        <button class="remove-item" data-id="${item.id}">&times;</button>
                    </div>
                `).join('')}
            ${cart.length > 0 ? '<button class="btn checkout-btn">Checkout</button>' : ''}
        </div>
    `;
    
    document.body.appendChild(cartModal);
    cartModal.style.display = 'block';
    
    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartModal.contains(e.target) && e.target !== cartIcon) {
            cartModal.style.display = 'none';
        }
    });
}

function checkout() {
    alert(`Checkout completed for ${cart.length} items! Total: Rp${cart.length * 70000 + 10000}`);
    cart = [];
    updateCartIcon();
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
