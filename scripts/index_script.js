// script.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default link behavior
            e.preventDefault();
            
            // Get the target section id from the link's href attribute
            const targetId = this.getAttribute('href').substring(1);
            
            // Find the target element in the document
            const targetElement = document.getElementById(targetId);
            
            // Scroll to the target element
            window.scrollTo({
                // Subtract 70px to account for the sticky header
                top: targetElement.offsetTop - 70,
                behavior: 'smooth' // Smooth scrolling animation
            });
        });
    });

         // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});