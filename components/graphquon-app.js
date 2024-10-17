import { LitElement, html } from 'https://unpkg.com/lit@2.2.7?module';
import './header-component.js';
import './hero-section.js';
import './about-section.js';
import './keynote-section.js';
import './schedule-section.js';
import './contact-section.js';
import './footer-component.js';

class GraphQuonApp extends LitElement {
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
