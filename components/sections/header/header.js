import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class HeaderComponent extends LitElement {
  static styles = css`
    /* Styling for the header */
    header {
      position: relative;
      background: rgba(38, 38, 38, 0.9);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
      backdrop-filter: blur(10px);
      transition: background-color 0.3s ease;
      z-index: 1000;
    }

    /* Navigation container */
    nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }

    /* Logo or brand styling */
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* Links inside the navigation */
    a {
      color: white;
      padding: 0.5rem 1rem;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      transition: color 0.3s ease, border-bottom 0.3s ease;
      position: relative;
    }

    /* Hover and focus effects for links */
    a:hover,
    a:focus {
      color: red;
      outline: none;
    }

    /* Focus effect with a solid outline */
    a:focus {
      border-bottom: 2px solid red;
    }

    /* Ensures the header doesn't overlap content */
    .spacer {
      position: relative;
      height: 80px; /* Adjust to header height */
      color: red;
      background: red;
    }

    /* Mobile responsive menu */
    @media (max-width: 768px) {
      nav {
        flex-direction: column;
      }

      a {
        padding: 1rem;
        font-size: 1.2rem;
      }
    }
  `;

  render() {
    return html`
      <header aria-label="Main Navigation">
        <nav>
          <a href="#home" class="logo" aria-label="Site Logo" @click=${this.handleClick}>GRAPHQUON</div>
          <div class="nav-links">
            <a href="#about" class="scroll-link" @click=${this.handleClick}>About</a>
            <a href="#keynote" class="scroll-link" @click=${this.handleClick}>Keynote</a>
            <a href="#schedule" class="scroll-link" @click=${this.handleClick}>Schedule</a>
            <a href="#contact" class="scroll-link" @click=${this.handleClick}>Contact</a>
          </div>
        </nav>
      </header>
      <div class="spacer"></div> <!-- This spacer prevents content overlap due to the fixed header -->
    `;
  }

  handleClick(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Get the target ID from the href attribute
    const targetId = event.target.getAttribute('href').substring(1);

    // Log the target ID to console
    console.log(`Navigating to section: ${targetId}`);

    // Dispatch a custom event to the window
    const customEvent = new CustomEvent('navigation-click', {
      detail: { section: targetId },
      bubbles: true, // Allows the event to bubble up through the DOM
      composed: true, // Allows the event to pass through the shadow DOM boundary
    });

    window.dispatchEvent(customEvent);

    // Scroll to the section with an offset
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const headerOffset = 50; // Define the offset (50px)
      const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

}

customElements.define('header-component', HeaderComponent);