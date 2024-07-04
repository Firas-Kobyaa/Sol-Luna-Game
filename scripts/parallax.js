// Parallax effect script
window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    let parallax1 = document.querySelector('.parallax1');

    // Adjust the background position based on scroll
    parallax1.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
});