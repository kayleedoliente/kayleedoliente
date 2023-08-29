// navbar.js

// Get the current page URL
const currentPage = window.location.pathname;

// Get all the navbar links
const navbarLinks = document.querySelectorAll('.navbar__links');

// Loop through the links and check if the link matches the current page
navbarLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active'); // Add the 'active' class to the current page link
  }
});
