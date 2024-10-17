import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class AboutSection extends LitElement {
  static styles = css`
    section {
      padding: 2rem;
      background: linear-gradient(to right, #38b2ac, #68d391);
      text-align: center;
    }

    h1 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      color: white;
      max-width: 800px;
      margin: 0 auto;
    }
  `;

  render() {
    return html`
      <section id="about">
        <h1>About the Event</h1>
        <p>
          GRAPHQUON (formerly MOTOGRAPH) is the annual Quebec-Ontario pre-SIGGRAPH workshop, organized by and for the
          major East-Canadian computer graphics labs. It is an opportunity for students to present their prospective
          submissions to a friendly, constructively critical audience and to receive valuable feedback.
        </p>
      </section>
    `;
  }
}

customElements.define('about-section', AboutSection);
