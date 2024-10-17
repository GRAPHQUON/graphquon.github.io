import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class KeynoteSection extends LitElement {
  static styles = css`
    section {
      padding: 2rem;
      background: linear-gradient(to right, #ed64a6, #f6e05e);
      text-align: center;
    }

    h1 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      justify-items: center;
    }

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
    }

    h3 {
      color: white;
    }
  `;

  render() {
    return html`
      <section id="keynote">
        <h1>Keynote Speakers</h1>
        <div class="grid">
          <div>
            <h3>TBA</h3>
            <img src="../res/speaker1.jpg" alt="Keynote Speaker 1">
          </div>
          <div>
            <h3>TBA</h3>
            <img src="../res/speaker2.jpg" alt="Keynote Speaker 2">
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('keynote-section', KeynoteSection);
