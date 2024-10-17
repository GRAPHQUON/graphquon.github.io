import { LitElement, html, css } from "https://unpkg.com/lit@2.2.7?module";

class AboutSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
      font-family: "Manrope", Arial, sans-serif;
    }
  `;

  render() {
    return html`
      <section
        id="about"
        class="bg-gradient-to-r from-green-500 via-green-300 to-green-100 text-center py-16"
        aria-labelledby="about-heading"
      >
        <div
          class="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8"
        >
          <h1
            id="about-heading"
            class="text-4xl font-extrabold text-gray-800 mb-6"
          >
            About the Event
          </h1>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            GRAPHQUON (formerly MOTOGRAPH) is the annual Quebec-Ontario
            pre-SIGGRAPH workshop, organized by and for the major East-Canadian
            computer graphics labs. It is an opportunity for students to present
            their prospective submissions to a friendly, constructively critical
            audience and to receive valuable feedback.
          </p>

          <ol class="items-center sm:flex justify-center space-y-8 sm:space-y-0 sm:space-x-8">
            <!-- MOTOGRAPH 2018 -->
            <li class="relative sm:mb-0">
              <div class="flex items-center justify-center mb-4 sm:mb-0">
                <div
                  class="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-4 ring-white dark:bg-blue-900 dark:ring-gray-900"
                >
                  <svg
                    class="w-4 h-4 text-blue-800 dark:text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
              </div>
              <div class="text-center sm:text-left">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  MOTOGRAPH 2018
                </h3>
                <time
                  class="block mb-2 text-sm text-gray-400 dark:text-gray-500"
                  >Held on November 5, 2018</time
                >
                <p class="text-base text-gray-500 dark:text-gray-400">
                  The inaugural MOTOGRAPH event hosted in Quebec.
                </p>
              </div>
            </li>

            <!-- FOIEGRAPH 2022 -->
            <li class="relative sm:mb-0">
              <div class="flex items-center justify-center mb-4 sm:mb-0">
                <div
                  class="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-4 ring-white dark:bg-blue-900 dark:ring-gray-900"
                >
                  <svg
                    class="w-4 h-4 text-blue-800 dark:text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
              </div>
              <div class="text-center sm:text-left">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  FOIEGRAPH 2022
                </h3>
                <time
                  class="block mb-2 text-sm text-gray-400 dark:text-gray-500"
                  >Held on October 17, 2022</time
                >
                <p class="text-base text-gray-500 dark:text-gray-400">
                  FOIEGRAPH 2022 expanded the MOTOGRAPH tradition, hosted in
                  Ontario.
                </p>
              </div>
            </li>

            <!-- GRAPHQUON 2023 -->
            <li class="relative sm:mb-0">
              <div class="flex items-center justify-center mb-4 sm:mb-0">
                <div
                  class="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-4 ring-white dark:bg-blue-900 dark:ring-gray-900"
                >
                  <svg
                    class="w-4 h-4 text-blue-800 dark:text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
              </div>
              <div class="text-center sm:text-left">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  GRAPHQUON 2023
                </h3>
                <time
                  class="block mb-2 text-sm text-gray-400 dark:text-gray-500"
                  >Held on November 9-10, 2023</time
                >
                <p class="text-base text-gray-500 dark:text-gray-400">
                  GRAPHQUON continued to grow as the premier Quebec-Ontario
                  pre-SIGGRAPH event.
                </p>
              </div>
            </li>
          </ol>
        </div>
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
