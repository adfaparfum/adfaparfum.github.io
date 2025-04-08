document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const beliButton = document.getElementById('beliButton');
    const closeButton = document.querySelector('.popup-close');

    // Show popup with animation
    const showPopup = () => {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Hide popup with animation
    const hidePopup = () => {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // Event listeners
    beliButton?.addEventListener('click', showPopup);
    closeButton?.addEventListener('click', hidePopup);
    
    popup?.addEventListener('click', (e) => {
        if (e.target === popup) hidePopup();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup?.classList.contains('active')) {
            hidePopup();
        }
    });
});
