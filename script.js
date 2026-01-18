const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-link');

// Open Menu
hamburger.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Close Menu
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});
