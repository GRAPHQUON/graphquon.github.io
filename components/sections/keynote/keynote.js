import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class KeynoteSection extends LitElement {
  static styles = css`
    section {
      position: relative;
      padding: 2rem;
      background: linear-gradient(to right, #ed64a6, #f6e05e);
      text-align: center;
      color: white;
      overflow: hidden; /* Ensure particles stay within the section */
    }

    #particles-js {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1; /* Ensures particles stay behind the content */
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      justify-items: center;
    }

    .speaker-card {
      text-align: center;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .speaker-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid white;
      transition: border-color 0.3s ease;
    }

    img:hover {
      border-color: #f6e05e;
    }

    h3 {
      margin-top: 1rem;
      font-size: 1.5rem;
      color: #ffffff;
    }

    /* Accessibility focus style for images */
    img:focus {
      outline: 3px solid #f6e05e;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1.25rem;
      }

      img {
        width: 150px;
        height: 150px;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 1.75rem;
      }

      h3 {
        font-size: 1rem;
      }

      img {
        width: 120px;
        height: 120px;
      }
    }
  `;

  firstUpdated() {
    // Initialize particles.js in the background after the component is first rendered
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }

  render() {
    return html`
    <script src="https://cdn.jsdelivr.net/npm/particlesjs@2.2.3/dist/particles.min.js
    "></script>
      <section id="keynote" aria-labelledby="keynote-heading">
        <!-- Particle.js Background -->
        <div id="particles-js"></div>

        <h1 id="keynote-heading">Keynote Speakers</h1>
        <div class="grid">
          <div class="speaker-card" aria-label="Keynote Speaker 1">
            <img src="./../res/speaker1.jpg" alt="Photo of Keynote Speaker 1" tabindex="0" />
            <h3>Speaker 1 - TBA</h3>
          </div>
          <div class="speaker-card" aria-label="Keynote Speaker 2">
            <img src="./../res/speaker2.jpg" alt="Photo of Keynote Speaker 2" tabindex="0" />
            <h3>Speaker 2 - TBA</h3>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('keynote-section', KeynoteSection);
