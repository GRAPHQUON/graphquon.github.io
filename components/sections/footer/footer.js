import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class FooterComponent extends LitElement {
  static styles = css`
    footer {
      position: relative;
      text-align: center;
      color: white;
      overflow: hidden; /* Ensure particles stay within the section */
      background-color: #2d3748;
      padding: 2rem 1rem;
      color: white;
    }

    .footer-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .event-info {
      width: 100%;
      max-width: 300px;
    }

    .event-info h3, .previous-years h5 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .event-info p, .previous-years ul {
      font-size: 0.875rem;
    }

    .previous-years ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .previous-years ul li {
      margin-bottom: 0.5rem;
    }

    a {
      color: #68d391;
      text-decoration: none;
      font-weight: 600;
    }

    a:hover {
      color: #48bb78;
      text-decoration: underline;
    }

    iframe {
      width: 100%;
      max-width: 600px;
      height: 450px;
      border: 0;
    }

    .footer-links {
      margin: 1rem;
      gap: 1rem;
      text-align: center;
    }

    .footer-links a {
      font-size: 0.875rem;
    }

    .copyright {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #4a5568;
      text-align: center;
    }

    /* Responsive layout */
    @media (max-width: 768px) {
      .footer-container {
        flex-direction: column;
        align-items: center;
      }

      .event-info, iframe {
        max-width: 100%;
        text-align: center;
      }

      .footer-links {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `;

  render() {
    return html`
      <footer aria-label="Site footer">
        <div class="footer-container">
          <!-- Left Column - Event Info -->
          <div class="event-info">
            <h3>GraphQUON 2024</h3>
            <p>November 9-10, 2024</p>
            <p>
              <a
                href="https://maps.google.com/maps?q=Maison+des+étudiants+ÉTS&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                target="_blank"
                aria-label="Visit ETS Maison des étudiants on Google Maps in a new tab"
              >
                ÉTS Maison des étudiants, Pavillon E, 1220 Notre-Dame St W, Montreal, QC, Canada H3C 1K5
              </a>
            </p>

            <div class="previous-years">
              <h5>Previous Years</h5>
              <ul>
                <li><a href="https://foiegraph2022.github.io/">FoieGraph 2022</a></li>
                <li><a href="https://tomatograph2021.github.io/">Tomatograph 2021</a></li>
                <li><a href="https://graphquon.github.io/">GraphQUON 2020</a></li>
                <li><a href="https://cs.uwaterloo.ca/~c2batty/MOTOGRAPH19/">MOTOGRAPH 2019</a></li>
              </ul>
            </div>
          </div>

          <!-- Right Column - Map -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.7827154035053!2d-73.56550592294413!3d45.49432012107451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a60c9579333%3A0xed21070ced136f14!2sMaison%20des%20%C3%A9tudiants%20%C3%89TS!5e0!3m2!1sfr!2sca!4v1729198807876!5m2!1sfr!2sca"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            aria-label="Google Maps location of ÉTS Maison des étudiants"
          ></iframe>
        </div>

        <!-- Bottom Row - Footer Links -->
        <div class="footer-links" aria-label="Footer Links">
          <a href="/privacy.html" aria-label="Privacy Policy">Privacy Policy</a>
          |
          <a href="/terms.html" aria-label="Terms and Conditions">Terms and Conditions</a>
          |
          <a href="#contact" aria-label="Contact Us">Contact Us</a>
        </div>

        <!-- Copyright Section -->
        <div class="copyright">
          <p>&copy; 2024 ETS Multimedia Lab - All rights reserved.</p>
          <p>
            <a
              href="https://www.etsmtl.ca/en/research/chairs-and-labs/lab-multimedia"
              target="_blank"
              aria-label="Visit ETS Multimedia Lab in a new tab"
            >
              Visit ETS Multimedia Lab
            </a>
          </p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
