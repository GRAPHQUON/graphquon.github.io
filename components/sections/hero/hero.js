import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class HeroSection extends LitElement {
  static styles = css`
    section {
      height: 100vh;
      background: url('../../res/bg1.jpg') no-repeat center center/cover;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .content {
      position: relative;
      color: white;
      z-index: 10;
      text-align: center;
    }

    .logo-wrapper {
      margin-top: 2rem;
    }

    .logo-img {
      width: 200px;
      height: auto;
      border-radius: 50%;
      transition: transform 0.3s ease-in-out;
    }

    .logo-img:hover {
      transform: scale(1.05);
    }

    .logo-below {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .logo-below img {
      width: 40px;
    }

    h1 {
      font-size: 4rem;
      font-weight: bold;
    }

    p {
      font-size: 1.25rem;
      margin-top: 1rem;
    }

    button {
      margin-top: 2rem;
      padding: 1rem 2rem;
      background-color: green;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.25rem;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: darkgreen;
    }

    button:focus {
      outline: 3px solid yellow;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }

      .logo-img {
        width: 150px;
      }

      .logo-below img {
        width: 30px;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 0.875rem;
      }

      button {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      }

      .logo-img {
        width: 120px;
      }

      .logo-below img {
        width: 25px;
      }
    }
  `;

  render() {
    return html`
      <section>
        <div class="overlay"></div>
        <div class="content">
          <h1>GRAPHQUON 2024</h1>
          <p>November 9-10, 2024 at École de technologie supérieure</p>

          <!-- Logo Section -->
          <div class="logo-wrapper">
            <img src="../../res/Graphquon2024.png" alt="Graphquon 2024 Logo" class="logo-img" loading="lazy" />
          </div>

          <div class="logo-below">
            <img src="../../res/ets_logo.svg" alt="ÉTS Logo" loading="lazy" />
            <h2>ÉTS</h2>
          </div>

          <button @click="${() => this.scrollToSection('about')}" aria-label="Scroll to About Section">Learn More</button>
        </div>
      </section>
    `;
  }

  // Use document.querySelector to access light DOM elements and perform smooth scroll
  scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

customElements.define('hero-section', HeroSection);
