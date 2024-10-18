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
    :host {
      display: block;
      width: 100%;
    }
  `;

  render() {
    return html`
      <header-component id="home"></header-component>
      <hero-section id="hero"></hero-section>
      <about-section id="about"></about-section>
      <keynote-section id="keynote"></keynote-section>
      <schedule-section id="schedule"></schedule-section>
      <contact-section id="contact"></contact-section>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('graphquon-app', GraphQuonApp);
