import { LitElement, html, css } from "https://unpkg.com/lit@2.2.7?module";

class AboutSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
      background: linear-gradient(
        135deg,
        var(--accent-color-2),
        var(--accent-color-3)
      );
      text-align: center;
      font-family: "Manrope", Arial, sans-serif;
    }

    section {
      margin: 0 auto;
      max-width: 900px;
      padding: 2rem;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #001d31;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    p {
      color: #eef2f9;
      font-size: 1.125rem;
      line-height: 1.75;
      max-width: 800px;
      margin: 0 auto;
      text-align: justify;
    }

    .button-container {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    button {
      background-color: #bd0029;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      border: none;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background-color: #d8063b;
      transform: scale(1.05); /* Added a slight scaling effect */
    }

    button:focus {
      outline: 4px solid #d8063b;
      outline-offset: 2px;
    }

    button:active {
      background-color: #a90024; /* Darker color when clicked */
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      button {
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
      }
    }
  `;

  render() {
    return html`
      <section id="about" aria-labelledby="about-heading">
        <h1 id="about-heading">About the Event</h1>
        <p>
          GRAPHQUON (formerly MOTOGRAPH) is the annual Quebec-Ontario
          pre-SIGGRAPH workshop, organized by and for the major East-Canadian
          computer graphics labs. It is an opportunity for students to present
          their prospective submissions to a friendly, constructively critical
          audience and to receive valuable feedback.
        </p>
        <ol class="items-center sm:flex">
          <!-- MOTOGRAPH 2018 -->
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <div
                class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                MOTOGRAPH 2018
              </h3>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Held on November 5, 2018</time
              >
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                The inaugural MOTOGRAPH event hosted in Quebec.
              </p>
            </div>
          </li>

          <!-- FOIEGRAPH 2022 -->
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <div
                class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                FOIEGRAPH 2022
              </h3>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Held on October 17, 2022</time
              >
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                FOIEGRAPH 2022 expanded the MOTOGRAPH tradition, hosted in
                Ontario.
              </p>
            </div>
          </li>

          <!-- GRAPHQUON 2023 -->
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <div
                class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                GRAPHQUON 2023
              </h3>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Held on November 9-10, 2023</time
              >
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                GRAPHQUON continued to grow as the premier Quebec-Ontario
                pre-SIGGRAPH event.
              </p>
            </div>
          </li>
        </ol>
      </section>
    `;
  }

  handleButtonClick(e) {
    const year = e.target.innerText;

    // Emit a custom event with the selected year
    const event = new CustomEvent("year-selected", {
      detail: { year },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);

    console.log(`You clicked on event year: ${year}`);
  }
}

customElements.define("about-section", AboutSection);
