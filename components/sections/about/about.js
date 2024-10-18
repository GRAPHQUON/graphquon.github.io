import { LitElement, html, css } from "https://unpkg.com/lit@2.2.7?module";

class AboutSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0; /* Removed padding to accommodate particles background */
      font-family: "Manrope", Arial, sans-serif;
      position: relative;
      overflow: hidden;
    }

    /* Particles Container */
    #particles-js {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    section {
      position: relative;
      background: rgba(255, 255, 255, 0.85); /* Semi-transparent background to see particles */
      padding: 4rem 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      margin: 2rem auto;
      max-width: 900px;
      z-index: 1;
    }

    /* Rest of your existing CSS remains unchanged */

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

    /* Horizontal Stepper Styles */
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
        max-width: 300px;
      }

      .btn-container {
        flex-direction: column;
        gap: 0.5rem;
      }

      .btn {
        width: 100%;
        max-width: 250px;
      }
    }
  `;

  // Lifecycle method to load Particles.js and initialize it
  firstUpdated() {
    this.loadParticles();
  }

  // Method to dynamically load the Particles.js script
  async loadParticles() {
    // Dynamically import the Particles.js script
    const script = document.createElement('script');
    script.src = 'lib/particles.min.js'; // Adjust the path if necessary
    script.async = true;
    script.onload = () => {
      // Initialize particles after the script has loaded
      if (window.particlesJS) {
        window.particlesJS('particles-js', this.particlesConfig());
      }
    };
    document.body.appendChild(script);
  }

  // Configuration for Particles.js
  particlesConfig() {
    return {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };
  }

  render() {
    return html`
      <!-- Particles.js Container -->
      <div id="particles-js"></div>

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

          <p>
            Previous Editions:
          </p>

          <!-- Horizontal Stepper -->
          <ol class="stepper">
            <li class="active">
              <a href="https://www-labs.iro.umontreal.ca/~bernhard/Motograph18/index.html" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
                <div>MOTOGRAPH 2018</div>
                <div class="date">November 17-18</div>
              </a>
            </li>

            <li>
              <a href="https://foiegraph2022.github.io/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
                <div>FOIEGRAPH 2022</div>
                <div class="date">November 11-12</div>
              </a>
            </li>

            <li>
              <a href="https://graphquon2023.github.io/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
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
            Student/Postdoc: Ask your supervisor whether your group is participating.
          </p>
          <p>
            Faculty: If you have not received an email regarding the registration form, contact us (graphquon@etsmtl.ca) to get the link to the registration form.
          </p>

          <!-- Button Links -->
          <div class="btn-container">
            <a href="#schedule" class="btn btn-primary">Schedule</a>
            <a href="https://forms.gle/Sz1u2spgURcjQcxz9" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Register</a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("about-section", AboutSection);
