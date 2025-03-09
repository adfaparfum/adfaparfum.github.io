console.log("Welcome to Adfa Parfum!");

document.getElementById('close-popup').onclick = function() {
    document.getElementById('welcome-popup').style.display = 'none';
};

// Tampilkan popup saat halaman dimuat
window.onload = function() {
    document.getElementById('welcome-popup').style.display = 'flex'; // Tampilkan popup
};
