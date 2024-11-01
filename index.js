// Hide the preloader after the app is loaded
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

// Smooth scroll to specific sections inside the shadow DOM with an offset
const scrollToSection = (targetId) => {
    const graphquonApp = document.querySelector("body > graphquon-app");

    if (graphquonApp && graphquonApp.shadowRoot) {
        const targetSection = graphquonApp.shadowRoot.querySelector(`#${targetId}`);

        if (targetSection) {
            // Calculate the position of the section and apply the offset (-80px)
            const headerOffset = 80; // 80px offset for fixed header
            const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = sectionPosition - headerOffset;

            // Scroll to the calculated position with smooth scrolling
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            console.error(`Section ${targetId} not found in shadow DOM.`);
        }
    } else {
        console.error("GraphQuonApp component not found.");
    }
};

window.addEventListener('navigation-click', (event) => {
    const targetId = event.detail?.section;
    if (targetId) {
        scrollToSection(targetId);
    }
});

// Function to wait for the graphquonApp component to load
const waitForGraphquonApp = (callback) => {
    const checkExistence = setInterval(() => {
        const graphquonApp = document.querySelector('body > graphquon-app');
        if (graphquonApp) {
            clearInterval(checkExistence);
            callback();
        }
    }, 100);
};

// On page load, check if there's a hash in the URL and wait for graphquonApp to load
window.addEventListener('load', function () {
    const targetId = window.location.hash.substring(1); // Get the fragment without the '#'
    if (targetId) {
        console.log(`Navigating to section: ${targetId}`);
        // Wait for the graphquonApp component to load before scrolling
        waitForGraphquonApp(() => {
            // Wait for the graphquonApp component to load before scrolling + 100ms
            setTimeout(() => {
                scrollToSection(targetId); // Scroll to the target section once graphquonApp is ready
            }, 100);
        });
    }
});
