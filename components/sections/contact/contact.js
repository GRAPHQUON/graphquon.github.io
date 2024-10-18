import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class ContactSection extends LitElement {
  static styles = css`
    /* General styles for the section */
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      background-color: rgb(212 217 222);
    }

    /* Card styles */
    .card {
      background-color: white; /* bg-white */
      padding: 2rem;
      border-radius: 1rem; /* rounded-lg */
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* shadow-lg */
      text-align: center;
      max-width: 400px; /* Ensure card doesn't get too wide */
      margin: 0 auto;

      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
      transition: box-shadow 0.3s ease; /* Smooth transition for shadow */
    }

    /* Heading styles */
    h1 {
      font-size: 2.25rem; /* text-4xl */
      font-weight: 600; /* font-semibold */
      color: #1a202c; /* text-gray-900 */
      margin-bottom: 1rem; /* mb-4 */
    }

    /* Paragraph text styles */
    p {
      font-size: 1.125rem; /* text-lg */
      color: #4a5568; /* text-gray-700 */
      margin-bottom: 1.5rem; /* mb-6 */
    }

    /* Button styles */
    button {
      background-color: #e53e3e; /* bg-red-600 */
      color: white; /* text-white */
      padding: 0.75rem 1.5rem; /* py-3 px-6 */
      border-radius: 0.5rem; /* rounded-lg */
      transition: background-color 0.3s ease-in-out; /* transition-colors ease-in-out duration-300 */
      border: none;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }

    button:hover {
      background-color: #c53030; /* bg-red-700 */
    }

    button:focus {
      outline: 4px solid #feb2b2; /* focus:ring-4 focus:ring-red-400 */
    }
  `;

  render() {
    return html`
      <section id="contact" aria-labelledby="contact-heading">
        <div class="card">
          <h1 id="contact-heading">Contact Us</h1>
          <p>Have any questions? Feel free to send us an email!</p>
          <button @click="${this.sendEmail}" aria-label="Send an email">
            Contact Us
          </button>
        </div>
      </section>
    `;
  }

  sendEmail() {
    window.location.href = 'mailto:graphquon@etsmtl.ca';
  }
}

customElements.define('contact-section', ContactSection);
