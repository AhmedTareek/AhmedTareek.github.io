document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('article img');
    const zoomOverlay = document.querySelector('.zoom-overlay');
    const zoomImage = zoomOverlay.querySelector('img');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    images.forEach(img => {
        img.addEventListener('click', () => {
            zoomImage.src = img.src;
            zoomOverlay.style.display = 'flex';
        });
    });

    zoomOverlay.addEventListener('click', () => {
        zoomOverlay.style.display = 'none';
    });
    // Dark mode toggle functionality

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

});
