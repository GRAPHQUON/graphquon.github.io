import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class ContactSection extends LitElement {
  static styles = css`
    /* Ensure the section takes the full width and centralizes text */
    section {
      @apply p-8 text-center;
    }

    /* Scoped Tailwind reset for button inside shadow DOM */
    button {
      @apply bg-red-600 text-white py-3 px-6 rounded-lg transition-colors ease-in-out duration-300 focus:outline-none;
    }

    /* Tailwind hover state */
    button:hover {
      @apply bg-red-700;
    }
  `;

  render() {
    return html`
      <section id="contact" aria-labelledby="contact-heading">
        <h1 id="contact-heading" class="text-4xl font-semibold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-lg text-gray-700 mb-6">Have any questions? Feel free to send us an email!</p>
        <button @click="${this.sendEmail}" aria-label="Send an email">
          Contact Us
        </button>
      </section>
    `;
  }

  sendEmail() {
    window.location.href = 'mailto:graphquon@etsmtl.ca';
  }
}

customElements.define('contact-section', ContactSection);
