const ham = document.getElementById('ham-menu');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('.nav-link');

ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    overlay.classList.toggle('active');
});

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        ham.classList.remove('open');
        overlay.classList.remove('active');
    });
});
