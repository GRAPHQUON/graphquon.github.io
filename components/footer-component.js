import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class FooterComponent extends LitElement {
  render() {
    return html`
      <footer>
        <p>&copy; 2024 GRAPHQUON - All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
