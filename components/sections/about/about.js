import { LitElement, html, css } from "https://unpkg.com/lit@2.2.7?module";

class AboutSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
      font-family: "Manrope", Arial, sans-serif;
    }

    section {
      background: linear-gradient(to right, #38b2ac, #81e6d9);
      padding: 4rem 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      margin: 2rem auto;
      max-width: 900px;
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #4a5568;
      text-align: justify;
      max-width: 700px;
      margin: 0 auto 2rem auto;
    }

    ol {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 0;
    }

    /* Horizontal stepper styles */
    .stepper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;
      flex-direction: row;
    }

    .stepper li {
      background: white;
      padding: 1rem;
      border-radius: 12px;
      text-align: center;
      width: 150px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .stepper li.active {
      border: 2px solid #38b2ac;
    }

    .stepper li svg {
      width: 40px;
      height: 40px;
      margin-bottom: 0.5rem;
      color: #3182ce;
    }

    /* Buttons */
    .btn-container {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      gap: 1rem;
    }

    .btn {
      background-color: #3182ce;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      text-transform: uppercase;
      font-weight: bold;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #2b6cb0;
    }

    .card-footer {
      background-image: url('path-to-background-image.jpg');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 3rem 2rem;
      text-align: center;
      border-radius: 12px;
      margin-top: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .card-footer h3 {
      font-size: 1.75rem;
      font-weight: 700;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      section {
        padding: 3rem 1.5rem;
      }

      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1rem;
      }

      .stepper {
        flex-direction: column;
      }

      .stepper li {
        width: 100%;
      }
    }
  `;

  render() {
    return html`
      <section id="about" aria-labelledby="about-heading">
        <div class="container">
          <h1 id="about-heading">About the Event</h1>
          <p>
            GRAPHQUON (formerly MOTOGRAPH) is the annual Quebec-Ontario
            pre-SIGGRAPH workshop, organized by and for the major East-Canadian
            computer graphics labs. It is an opportunity for students to present
            their prospective submissions to a friendly, constructively critical
            audience and to receive valuable feedback.
          </p>

          <!-- Horizontal Stepper -->
          <ol class="stepper">
            <li class="active">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
              <div>MOTOGRAPH 2018</div>
              <div class="text-sm text-gray-500">November 5, 2018</div>
            </li>

            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
              <div>FOIEGRAPH 2022</div>
              <div class="text-sm text-gray-500">October 17, 2022</div>
            </li>

            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
              <div>GRAPHQUON 2023</div>
              <div class="text-sm text-gray-500">November 9-10, 2023</div>
            </li>
          </ol>

          <!-- Button Links -->
          <div class="btn-container flex space-x-4">
            <a href="#schedule" class="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Schedule</a>
            <a href="https://forms.gle/Sz1u2spgURcjQcxz9" class="btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Register</a>
          </div>
      </section>
    `;
  }
}

customElements.define("about-section", AboutSection);
