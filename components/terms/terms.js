import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class TermsOfService extends LitElement {
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
        <h1>GraphQUON 2024 - Terms of Service</h1>
      </header>
      <section aria-labelledby="terms-of-service">
        <h2 id="terms-of-service">Terms of Service</h2>
        <p>
          These terms of service govern your participation in the GraphQUON 2024 event. By registering and attending the event, you agree to comply with these terms.
        </p>
        <h2>Event Participation</h2>
        <p>
          You are required to provide accurate information during registration and to adhere to the event’s code of conduct. Disruptive behavior or harassment will result in removal from the event.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          All materials presented at the event are the intellectual property of their respective authors. Unauthorized reproduction or distribution is prohibited.
        </p>
        <h2>Liability</h2>
        <p>
          GraphQUON 2024 is not liable for any damages or losses incurred during the event. Participation is at your own risk.
        </p>
      </section>
    `;
  }
}

customElements.define('terms-of-service', TermsOfService);
