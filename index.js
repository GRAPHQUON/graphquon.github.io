window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Current scroll position
    const navEl = document.getElementById('nav-container');

    // Add or remove the 'solid' class based on the scroll position
    if (scrollY > window.innerHeight / 4) {
        navEl.classList.add('solid', 'bg-gray-800', 'shadow-lg');
    } else {
        navEl.classList.remove('solid', 'bg-gray-800', 'shadow-lg');
    }
});

document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section to scroll to
        const target = document.querySelector(this.getAttribute('data-target'));

        // Smooth scroll to the target section
        window.scrollTo({
            top: target.offsetTop - 80, // Adjust for the height of the fixed navbar
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5 },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" }
                }
            },
            "retina_detect": true
        });
    } else {
        console.warn('Particle.js library is not loaded.');
    }
});
