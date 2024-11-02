import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class KeynoteSection extends LitElement {

  static styles = css`
    section {
      position: relative;
      padding: 2rem;
      text-align: center;
      overflow: hidden; /* Ensure particles stay within the section */
      z-index: 1;
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

    /* Slide-in Animation Keyframes */
    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInFromRight {
      0% {
        transform: translateX(100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    /* Animation Classes */
    .animate-slide-in-left {
      animation: slideInFromLeft 1s forwards;
    }

    .animate-slide-in-right {
      animation: slideInFromRight 1s forwards;
    }

    .speaker-card {
      text-align: center;
      opacity: 0; /* Hidden by default */
      transform: translateX(0);
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

  render() {
    return html`
      <section id="keynote" aria-labelledby="keynote-heading">

        <h1 id="keynote-heading">Speakers</h1>
        <div class="grid">
          <div class="speaker-card" aria-label="Masha Shugrina " data-animate="right">
            <img src="res/masha.jpg" alt="Photo of Masha Shugrina " loading="lazy" tabindex="0" />
            <h3>Masha Shugrina, Nvidia</h3>
          </div>
          <div class="speaker-card" aria-label="Lesley Istead" data-animate="left">
            <img src="res/lesley.jpg" alt="Photo of Lesley Istead" loading="lazy" tabindex="0" />
            <h3>Lesley Istead, Carleton University</h3>
          </div>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);

    const cards = this.shadowRoot.querySelectorAll('.speaker-card');
    cards.forEach(card => observer.observe(card));
  }

  handleIntersect(entries, observer) {
    entries.forEach(entry => {
      const card = entry.target;
      const direction = card.getAttribute('data-animate');

      if (entry.isIntersecting) {
        // When the element enters the viewport, add the slide animation class
        if (direction === 'left') {
          card.classList.add('animate-slide-in-left');
        } else if (direction === 'right') {
          card.classList.add('animate-slide-in-right');
        }
      } else {
        // When the element leaves the viewport, reset the state to allow reanimation
        card.classList.remove('animate-slide-in-left', 'animate-slide-in-right');
        card.style.opacity = 0; // Reset the opacity for the animation to trigger again
      }
    });
  }
}

customElements.define('keynote-section', KeynoteSection);
