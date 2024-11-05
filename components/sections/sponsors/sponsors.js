import { LitElement, html, css } from "https://unpkg.com/lit@2.2.7?module";

class Sponsors extends LitElement {
  static styles = css`
    section {
      z-index: 1;
      position: relative;
      display: block;
      padding: 2rem;
      font-family: "Commissioner", sans-serif;
      color: #111827;
      text-align: center;
    }

    /* Card Styles */
    .card {
      background-color: white;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 800px;
      margin: 0 auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
    }

    .card:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    /* Title Styles */
    .sponsors-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #2b6cb0;
    }

    /* Message Styles */
    .sponsors-message {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      color: #4a5568;
    }

    /* Sponsors Container */
    .sponsors-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      background-color: rgb(212, 217, 222);
      padding: 2rem;
      border-radius: 1rem;
      border: 2px solid #d3d3d3;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      transition: box-shadow 0.3s ease;
    }

    .sponsors-container:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    /* Sponsor Logo Styles */
    .sponsor-logo {
      max-width: 150px;
      height: auto;
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0.9;
    }

    .sponsor-logo:hover {
      transform: scale(1.1);
      opacity: 1;
    }

    /* Sponsor Link Styles */
    .sponsor-link {
      display: inline-block;
      transition: transform 0.3s ease;
    }

    .sponsor-link:hover {
      transform: scale(1.05);
    }

    /* Responsive Styles */
    @media screen and (max-width: 600px) {
      .card {
        padding: 1.5rem;
      }

      .sponsors-title {
        font-size: 2rem;
      }

      .sponsors-message {
        font-size: 1rem;
      }

      .sponsors-container {
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
      }

      .sponsor-logo {
        max-width: 100px;
      }
    }
  `;

  static properties = {
    sponsors: { type: Array },
  };

  constructor() {
    super();
    this.sponsors = [
      {
        name: "Roblox",
        logo: "res/roblox.png",
        link: "https://www.roblox.com",
        alt: "Roblox Sponsor",
      },
    ];
  }

  render() {
    return html`
      <section id="sponsors">
        <div class="card">
          <div class="sponsors-title">Sponsors</div>
          <div class="sponsors-message">
            Your contributions help us make this event possible!
          </div>
          <div class="sponsors-container">
            ${this.sponsors.map(
              (sponsor) => html`
                <a
                  class="sponsor-link"
                  href="${sponsor.link}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="${sponsor.name}"
                >
                  <img
                    class="sponsor-logo"
                    src="${sponsor.logo}"
                    alt="${sponsor.alt}"
                    loading="lazy"
                    @error="${this.handleImageError}"
                  />
                </a>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }

  handleImageError(event) {
    event.target.src = "res/default-sponsor.png";
    event.target.alt = "Default Sponsor Logo";
  }
}

customElements.define("sponsors-section", Sponsors);
