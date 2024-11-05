import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class Sponsors extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
      font-family: 'Commissioner', sans-serif;
      background-color: #f7fafc;
      color: #111827;
      text-align: center;
    }

    .sponsors-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      background-color: rgb(212, 217, 222);
      padding: 2rem;
      border-radius: 17px;
      border: 4px solid #d3d3d3;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .sponsor-logo {
      max-width: 150px;
      height: auto;
      transition: transform 0.3s ease;
    }

    .sponsor-logo:hover {
      transform: scale(1.1);
    }

    @media screen and (max-width: 600px) {
      .sponsors-container {
        flex-direction: column;
        align-items: center;
      }

      .sponsor-logo {
        max-width: 100px;
      }
    }
  `;

  render() {
    return html`
      <div class="sponsors-container">
        <img class="sponsor-logo" src="res/roblox.png" alt="Roblox Sponsor">
      </div>
    `;
  }
}

customElements.define('sponsors-component', Sponsors);
