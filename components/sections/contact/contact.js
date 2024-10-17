import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class ContactSection extends LitElement {
  static styles = css`
    section {
      padding: 2rem; /* p-8 */
      text-align: center; /* text-center */
      background-color: #f9fafb; /* bg-gray-50 */
      border-radius: 0.75rem; /* rounded-lg */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
    }

    h1 {
      font-size: 2.25rem; /* text-4xl */
      font-weight: 600; /* font-semibold */
      color: #1a202c; /* text-gray-900 */
      margin-bottom: 1rem; /* mb-4 */
    }

    p {
      font-size: 1.125rem; /* text-lg */
      color: #4a5568; /* text-gray-700 */
      margin-bottom: 1.5rem; /* mb-6 */
    }

    button {
      background-color: #e53e3e; /* bg-red-600 */
      color: white; /* text-white */
      padding: 0.75rem 1.5rem; /* py-3 px-6 */
      border-radius: 0.5rem; /* rounded-lg */
      transition: background-color 0.3s ease-in-out; /* transition-colors ease-in-out duration-300 */
      border: none;
      cursor: pointer;
      font-size: 1rem; /* Ensure font size matches */
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
        <h1 id="contact-heading">Contact Us</h1>
        <p>Have any questions? Feel free to send us an email!</p>
        <button @click="${this.sendEmail}" aria-label="Send an email">
          Contact Us
        </button>
    `;
  }

  sendEmail() {
    window.location.href = 'mailto:graphquon@etsmtl.ca';
  }
}

customElements.define('contact-section', ContactSection);
