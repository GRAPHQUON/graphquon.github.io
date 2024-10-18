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