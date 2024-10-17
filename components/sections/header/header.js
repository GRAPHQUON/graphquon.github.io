import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class HeaderComponent extends LitElement {
  static styles = css`
    /* Styling for the header */
    header {
      background: rgba(38, 38, 38, 0.9);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
      backdrop-filter: blur(10px);
      transition: background-color 0.3s ease;
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
          <div class="logo" aria-label="Site Logo">GRAPHQUON</div>
          <div class="nav-links">
            <a href="#about">About</a>
            <a href="#keynote">Keynote</a>
            <a href="#schedule">Schedule</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <!-- Spacer to prevent content overlap with fixed header -->
      <div class="spacer"></div>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
