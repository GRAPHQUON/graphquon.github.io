import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class HeaderComponent extends LitElement {
  static styles = css`
    header {
      background: rgba(38, 38, 38, 0.9);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
    }

    nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }

    a {
      color: white;
      padding: 0.5rem 1rem;
      text-decoration: none;
    }

    a:hover {
      color: yellow;
    }
  `;

  render() {
    return html`
      <header>
        <nav>
          <a href="#about">About</a>
          <a href="#keynote">Keynote</a>
          <a href="#schedule">Schedule</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
