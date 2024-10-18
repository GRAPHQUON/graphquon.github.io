import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class KeynoteSection extends LitElement {

  static styles = css`
    section {
      position: relative;
      padding: 2rem;
      background: linear-gradient(to right, #ed64a6, #f6e05e);
      text-align: center;
      color: white;
      overflow: hidden; /* Ensure particles stay within the section */
    }

    #particles-js {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1; /* Ensures particles stay behind the content */
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      justify-items: center;
    }

    .speaker-card {
      text-align: center;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .speaker-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid white;
      transition: border-color 0.3s ease;
    }

    img:hover {
      border-color: #f6e05e;
    }

    h3 {
      margin-top: 1rem;
      font-size: 1.5rem;
      color: #ffffff;
    }

    /* Accessibility focus style for images */
    img:focus {
      outline: 3px solid #f6e05e;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1.25rem;
      }

      img {
        width: 150px;
        height: 150px;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 1.75rem;
      }

      h3 {
        font-size: 1rem;
      }

      img {
        width: 120px;
        height: 120px;
      }
    }
  `;

  render() {
    return html`
      <section id="keynote" aria-labelledby="keynote-heading">
        <!-- Particle.js Background -->
        <div id="particles-js"></div>

        <h1 id="keynote-heading">Keynote Speakers</h1>
        <div class="grid">
          <div class="speaker-card" aria-label="Keynote Speaker 1">
            <img src="res/speaker1.jpg" alt="Photo of Keynote Speaker 1" loading="lazy" tabindex="0" />
            <h3>Speaker 1 - TBA</h3>
          </div>
          <div class="speaker-card" aria-label="Keynote Speaker 2">
            <img src="res/speaker2.jpg" alt="Photo of Keynote Speaker 2" loading="lazy" tabindex="0" />
            <h3>Speaker 2 - TBA</h3>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('keynote-section', KeynoteSection);
