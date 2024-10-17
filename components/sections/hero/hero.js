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

    h1 {
      font-size: 5rem;
      font-weight: bold;
    }

    button {
      margin-top: 1rem;
      padding: 1rem 2rem;
      background-color: green;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    button:hover {
      background-color: darkgreen;
    }
  `;

  render() {
    return html`
      <section>
        <div class="overlay"></div>
        <div class="content">
          <h1>GRAPHQUON 2024</h1>
          <p>November 9-10, 2024 at École de technologie supérieure</p>
          <button @click="${() => this.scrollToSection('about')}">Learn More</button>
        </div>
      </section>
    `;
  }

  // Use document.querySelector to access light DOM elements
  scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

customElements.define('hero-section', HeroSection);
