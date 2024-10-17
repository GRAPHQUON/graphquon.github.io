import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class ContactSection extends LitElement {
  render() {
    return html`
      <section id="contact">
        <h1>Contact Us</h1>
        <p>Have any questions? Feel free to send us an email!</p>
        <button @click="${() => window.location.href='mailto:graphquon@etsmtl.ca'}">
          Contact Us
        </button>
      </section>
    `;
  }
}

customElements.define('contact-section', ContactSection);
