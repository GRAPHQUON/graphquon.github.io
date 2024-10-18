import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';
import './sections/header/header.js';
import './sections/hero/hero.js';
import './sections/about/about.js';
import './sections/keynote/keynote.js';
import './sections/schedule/schedule.js';
import './sections/contact/contact.js';
import './sections/footer/footer.js';

class GraphQuonApp extends LitElement {
  static styles = css`
    /* Optional: Add any global styles specific to GraphQuonApp here */
    :host {
      display: block;
      /* Ensure the app takes full width */
      width: 100%;
    }
  `;

  render() {
    return html`
      <header-component></header-component>
      <hero-section></hero-section>
      <about-section></about-section>
      <keynote-section></keynote-section>
      <schedule-section></schedule-section>
      <contact-section></contact-section>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('graphquon-app', GraphQuonApp);
