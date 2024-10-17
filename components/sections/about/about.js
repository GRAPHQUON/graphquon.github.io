import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class AboutSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
      background: linear-gradient(135deg, var(--accent-color-2), var(--accent-color-3));
      text-align: center;
      font-family: 'Manrope', Arial, sans-serif;
    }

    section {
      margin: 0 auto;
      max-width: 900px;
      padding: 2rem;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #001d31;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    p {
      color: #eef2f9;
      font-size: 1.125rem;
      line-height: 1.75;
      max-width: 800px;
      margin: 0 auto;
      text-align: justify;
    }

    .button-container {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    button {
      background-color: #bd0029;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      border: none;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #d8063b;
    }

    button:focus {
      outline: 4px solid #d8063b;
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      button {
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
      }
    }
  `;

  render() {
    return html`
      <section id="about" aria-labelledby="about-heading">
        <h1 id="about-heading">About the Event</h1>
        <p>
          GRAPHQUON (formerly MOTOGRAPH) is the annual Quebec-Ontario pre-SIGGRAPH workshop, organized by and for the
          major East-Canadian computer graphics labs. It is an opportunity for students to present their prospective
          submissions to a friendly, constructively critical audience and to receive valuable feedback.
        </p>
        <div class="button-container">
          <button @click="${this.handleButtonClick}" aria-label="View event from 2018">2018</button>
          <button @click="${this.handleButtonClick}" aria-label="View event from 2022">2022</button>
          <button @click="${this.handleButtonClick}" aria-label="View event from 2023">2023</button>
        </div>
      </section>
    `;
  }

  handleButtonClick(e) {
    const year = e.target.innerText;
    console.log(`You clicked on event year: ${year}`);
    // Add functionality to navigate to event pages or handle year selection here
  }
}

customElements.define('about-section', AboutSection);
