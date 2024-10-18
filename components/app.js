import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';
import './sections/header/header.js';
import './sections/hero/hero.js';
import './sections/about/about.js';
import './sections/keynote/keynote.js';
import './sections/schedule/schedule.js';
import './sections/contact/contact.js';
import './sections/footer/footer.js';

class GraphQuonApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `;

  firstUpdated() {
    this.setupSmoothScrolling();
  }

  setupSmoothScrolling() {
    // Select all anchor links from the header inside the shadow DOM
    const headerComponent = this.shadowRoot.querySelector('header-component');
    

    if (headerComponent) {
      const navLinks = headerComponent.shadowRoot.querySelectorAll('a'); // Find all nav links inside the shadow root

      console.log(navLinks)

      navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const targetId = link.getAttribute('href').substring(1); // Get the target ID from href
          const targetElement = this.shadowRoot.getElementById(targetId); // Find the target section by ID inside the shadow DOM

          if (targetElement) {
            const headerHeight = headerComponent.shadowRoot.querySelector('header').offsetHeight; // Get header height
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
              top: targetPosition - headerHeight, // Adjust for fixed header height
              behavior: 'smooth',
            });
          }
        });
      });
    }
  }

  render() {
    return html`
      <header-component></header-component>
      <hero-section id="hero"></hero-section>
      <about-section id="about"></about-section>
      <keynote-section id="keynote"></keynote-section>
      <schedule-section id="schedule"></schedule-section>
      <contact-section id="contact"></contact-section>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('graphquon-app', GraphQuonApp);
