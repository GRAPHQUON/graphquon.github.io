import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class TermsOfService extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #f7fafc;
      color: #111827;
    }

    header {
      background-color: #1f2937;
      color: white;
      text-align: center;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 2.75rem;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: white;
      border-radius: 0.75rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    h2 {
      font-size: 1.875rem;
      font-weight: bold;
      margin-bottom: 1.25rem;
      color: #1f2937;
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.75;
      font-size: 1.125rem;
      color: #374151;
    }

    .list {
      list-style-type: disc;
      padding-left: 1.25rem;
      margin-top: 1.25rem;
      color: #374151;
    }

    .list li {
      margin-bottom: 0.75rem;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.25rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      .container {
        padding: 1.5rem;
      }
    }
  `;

  render() {
    return html`
      <header>
        <h1>GraphQUON 2024 - Terms of Service</h1>
      </header>

      <div class="container">
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
      </div>
    `;
  }
}

customElements.define('terms-of-service', TermsOfService);
