import { LitElement, html, css } from "https://unpkg.com/lit@2.2.7?module";

class AboutSection extends LitElement {

  static styles = css`

    section {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    div.container {
      background: rgb(212 217 222);
      padding: 2rem;
      border-radius: 1rem;
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
      margin: 2rem 0;
    }

    .stepper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1.5rem;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .stepper li {
      background: #ffffff;
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      width: 250px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .stepper li:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
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

    .stepper a {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .stepper div {
      margin-top: 0.5rem;
      color: black;
    }

    .stepper .date {
      font-size: 0.875rem;
      color: #718096;
      margin-top: 0.25rem;
    }

    /* Button Styles */
    .btn-container {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      gap: 1rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.375rem;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      text-decoration: none;
      display: inline-block;
      text-align: center;
    }

    .btn-primary {
      background: linear-gradient(45deg, #38b2ac, #81e6d9);
      color: white;
    }

    .btn-primary:hover {
      background: linear-gradient(45deg, #2c7a7b, #4fd1c5);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: linear-gradient(45deg, #3182ce, #63b3ed);
      color: white;
    }

    .btn-secondary:hover {
      background: linear-gradient(45deg, #2b6cb0, #4299e1);
      transform: translateY(-2px);
    }

    /* Footer Styles */
    .card-footer {
      background-image: url("path-to-background-image.jpg");
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
      margin-bottom: 1rem;
    }

    /* Responsive Adjustments */
    @media (max-width: 1024px) {
      .stepper {
        justify-content: center;
      }
    }

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
        align-items: center;
      }

      .stepper li {
        width: 100%;
        max-width: 200px;
      }

      .btn-container {
        gap: 0.5rem;
      }

      .btn {
        width: 100%;
        max-width: 250px;
      }
    }
  `;


  render() {
    return html`

      <section id="about" aria-labelledby="about-heading">
        <div class="container">
          <h1 id="about-heading">About the Event</h1>
          <p style="text-align: center;">
            GRAPHQUON (formerly MOTOGRAPH) is the annual Quebec-Ontario
            pre-SIGGRAPH workshop, organized by and for the major East-Canadian
            computer graphics labs. It is an opportunity for students to present
            their prospective submissions to a friendly, constructively critical
            audience and to receive valuable feedback.
          </p>

          <p style="text-align: center;">Previous Editions:</p>

          <!-- Horizontal Stepper -->
          <ol class="stepper">
            <li>
              <a
                href="https://www-labs.iro.umontreal.ca/~bernhard/Motograph18/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
                <div>MOTOGRAPH 2018</div>
                <div class="date">November 17-18</div>
              </a>
            </li>

            <li>
              <a
                href="https://cs.uwaterloo.ca/~c2batty/MOTOGRAPH19/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
                <div>MOTOGRAPH 2019</div>
                <div class="date">December 7-8</div>
              </a>
            </li>

            <li>
              <a
                href="https://tomatograph2021.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
                <div>Tomatograph 2021</div>
                <div class="date">December 3-4</div>
              </a>
            </li>

            <li>
              <a
                href="https://foiegraph2022.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
                <div>FOIEGRAPH 2022</div>
                <div class="date">November 11-12</div>
              </a>
            </li>

            <li>
              <a
                href="https://graphquon2023.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
                <div>GRAPHQUON 2023</div>
                <div class="date">December 2-3</div>
              </a>
            </li>
          </ol>

          <p>
            Student/Postdoc: Ask your supervisor whether your group is
            participating.
          </p>
          <p>
            Faculty: If you have not received an email regarding the
            registration form, contact us (graphquon@etsmtl.ca) to get the link
            to the registration form.
          </p>

        </div>
      </section>
    `;
  }

  handleClick(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Get the target ID from the href attribute
    const targetId = event.target.getAttribute('href').substring(1);

    // Log the target ID to console
    console.log(`Navigating to section: ${targetId}`);

    // Dispatch a custom event to the window
    const customEvent = new CustomEvent('navigation-click', {
      detail: { section: targetId },
      bubbles: true, // Allows the event to bubble up through the DOM
      composed: true, // Allows the event to pass through the shadow DOM boundary
    });

    window.dispatchEvent(customEvent);

    // Scroll to the section with an offset
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const headerOffset = 80; // Define the offset (80px)
      const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

customElements.define("about-section", AboutSection);
