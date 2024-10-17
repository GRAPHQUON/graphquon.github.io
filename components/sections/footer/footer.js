import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class FooterComponent extends LitElement {
  static styles = css`
    footer {
      background-color: #2d3748;
      padding: 2rem 1rem;
      text-align: center;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    p {
      margin: 0.5rem 0;
      font-size: 1rem;
    }

    a {
      color: #68d391;
      text-decoration: none;
      font-weight: 600;
    }

    a:hover {
      color: #48bb78;
      text-decoration: underline;
    }

    /* Flexbox for responsive footer */
    .footer-links {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-top: 1rem;
    }

    .footer-links a {
      color: #68d391;
      font-size: 0.875rem;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .footer-links {
        flex-direction: column;
        gap: 1rem;
      }
    }

    /* Ensuring appropriate contrast and readability */
    footer p, footer a {
      color: #e2e8f0;
    }
  `;

  render() {
    return html`
      <footer aria-label="Site footer">
        <p>&copy; 2024 GRAPHQUON - All rights reserved.</p>
        <p>
          <a href="https://www.etsmtl.ca/en/research/chairs-and-labs/lab-multimedia" target="_blank" aria-label="Visit the ETS Multimedia Lab in a new tab">
            Visit ETS Multimedia Lab
          </a>
        </p>
        <div class="footer-links" aria-label="Footer Links">
          <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a>
          <a href="/terms" aria-label="Terms and Conditions">Terms and Conditions</a>
          <a href="/contact" aria-label="Contact Us">Contact Us</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
