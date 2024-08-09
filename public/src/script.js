// Existing script
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.style.transform = 'translateY(0)';
        }, 10); // Small delay to allow CSS to apply transition
    } else {
        menu.style.transform = 'translateY(-100%)';
        menu.addEventListener('transitionend', () => {
            if (menu.style.transform === 'translateY(-100%)') {
                menu.classList.add('hidden');
            }
        }, { once: true });
    }
});

// New script to scroll to section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
