 // Header scroll effect
 window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll for navigation links
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();