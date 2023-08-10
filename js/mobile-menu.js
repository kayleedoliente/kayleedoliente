// Get references to the elements
const mobileMenuToggle = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

// Add a click event listener to the toggle button
mobileMenuToggle.addEventListener('click', () => {
    // Toggle the "active" class on the menu
    navbarMenu.classList.toggle('active');
});
