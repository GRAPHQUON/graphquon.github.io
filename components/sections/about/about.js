import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class AboutSection extends LitElement {
  // Render in light DOM to utilize global TailwindCSS styles
  createRenderRoot() {
    return this;
  }

  static styles = css`
    /* Custom styles for the section */
    #about {
      background: linear-gradient(15deg, #47a849 0%, #6ed19b 60%, #b6fde8 100%);
      padding: 0 30%;
    }

    #about p {
      margin-bottom: 0;
    }

    #about a {
      color: #005201;
      font-weight: bold;
    }

    #about h1 {
      border-bottom: solid 3px #005201;
      color: #005201;
    }
  `;

  render() {
    return html`
      <section
        id="about"
        aria-labelledby="about-heading"
        class="text-white py-16 px-4"
      >
        <div class="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8">
          <h1
            id="about-heading"
            class="text-4xl font-extrabold mb-6"
          >
            About the Event
          </h1>
          <p class="text-lg leading-relaxed mb-6">
            GRAPHQUON (formerly MOTOGRAPH) is the annual Quebec-Ontario pre-SIGGRAPH workshop, organized by and for the major East-Canadian computer graphics labs. It is an opportunity for students to present their prospective submissions to a friendly, constructively critical audience and to receive valuable feedback.
          </p>
          <p class="text-lg leading-relaxed mb-6">
            Registration for the GraphQUON workshop is now open! Please register by completing the form: 
            <a href="https://forms.gle/Sz1u2spgURcjQcxz9" target="_blank" rel="noopener noreferrer">
              https://forms.gle/Sz1u2spgURcjQcxz9
            </a>
            . We encourage you to register sooner rather than later. Additionally, if you wish to give a presentation or talk, please register by October 25th. This allows us to finalize the workshop schedule ahead of time.
          </p>
          <div class="mt-8">
            <button
              @click="${this.scrollToSchedule}"
              aria-label="Go to Schedule"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:scale-105"
            >
              Go to Schedule
            </button>
          </div>
        </div>
      </section>
    `;
  }

  scrollToSchedule() {
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

customElements.define('about-section', AboutSection);
