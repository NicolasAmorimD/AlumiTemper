const hamburger = document.getElementById ('menu');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

hamburger.addEventListener('click', toggleMenu);