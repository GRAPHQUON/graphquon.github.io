import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class PrivacyPolicy extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
      font-family: 'Commissioner', sans-serif;
      background-color: #f7fafc;
      color: #111827;
    }

    header {
      background-color: #1f2937;
      color: white;
      text-align: center;
      padding: 1.5rem 0;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }

    section {
      background-color: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      margin: 1.5rem 0;
    }

    h2 {
      font-size: 1.75rem;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
      line-height: 1.8;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  `;

  render() {
    return html`
      <header>
        <h1>GraphQUON 2024 - Privacy Policy</h1>
      </header>
      <section aria-labelledby="privacy-policy">
        <h2 id="privacy-policy">Privacy Policy</h2>
        <p>
          At GraphQUON 2024, we value your privacy and take it seriously. This privacy policy outlines how we collect, use, and protect your information.
        </p>
        <h2>Information Collection</h2>
        <p>
          We collect personal information such as your name, email address, and contact details when you register for the event. We do not share your data with third parties unless required by law.
        </p>
        <h2>Use of Information</h2>
        <p>
          Your information will be used for event communication, registration, and to improve the overall event experience.
        </p>
        <h2>Data Protection</h2>
        <p>
          We implement strong security measures to protect your data. However, no online service can be completely secure. You should take appropriate measures to secure your personal information.
        </p>
      </section>
    `;
  }
}

customElements.define('privacy-policy', PrivacyPolicy);
