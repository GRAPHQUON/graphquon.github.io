// hero-section.js
import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class HeroSection extends LitElement {
  static styles = css`
    section {
      position: relative;
      height: 100vh;
      background: url('res/bg1.jpg') no-repeat center center/cover;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      color: white;
      text-align: center;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .content {
      position: relative;
      z-index: 10;
      max-width: 800px;
      padding: 2rem;
    }

    .logo-wrapper {
      margin-top: 2rem;
    }

    .logo-img {
      width: 500px;
      height: auto;
      border-radius: 50%;
      transition: transform 0.3s ease-in-out;
    }

    .logo-img:hover {
      transform: scale(1.05);
    }

    .logo-below {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .logo-below img {
      width: 150px;
      height: auto;
      transition: transform 0.3s ease-in-out;
    }

    .logo-below img:hover {
      transform: scale(1.05);
    }

    h1 {
      font-size: 4rem;
      font-weight: bold;
    }

    p {
      font-size: 1.25rem;
      margin-top: 1rem;
    }

    .countdown,
    .event-info,
    .ended-message {
      font-size: 2rem;
      margin-top: 1.5rem;
      display: none; /* Hidden by default */
    }

    .countdown.visible,
    .event-info.visible,
    .ended-message.visible {
      display: block; /* Show when appropriate */
    }

    button {
      margin-top: 2rem;
      padding: 1rem 2rem;
      background-color: green;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.25rem;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: darkgreen;
    }

    button:focus {
      outline: 3px solid yellow;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }

      .logo-img {
        width: 400px;
      }

      .logo-below img {
        width: 30px;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 0.875rem;
      }

      button {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      }

      .logo-img {
        width: 300px;
      }

      .logo-below img {
        width: 25px;
      }
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

    /* Loading Indicator */
    .loading {
      font-size: 2rem;
      color: white;
      margin-top: 2rem;
    }

    /* Error Message */
    .error-message {
      font-size: 1.5rem;
      color: red;
      margin-top: 2rem;
    }
  `;

  static properties = {
    scheduleData: { type: Array },
    currentSection: { type: String }, // 'loading', 'countdown', 'event', 'ended', 'error'
    currentEventName: { type: String },
    currentEventTime: { type: String },
    countdownText: { type: String },
    errorMessage: { type: String },
  };

  constructor() {
    super();
    this.scheduleData = [];
    this.currentSection = 'loading'; // Initial state
    this.currentEventName = '';
    this.currentEventTime = '';
    this.countdownText = '';
    this.errorMessage = '';
    this.countdownInterval = null;
    this.updateInterval = null;
  }

  render() {
    return html`
      <section>
        <div class="overlay"></div>
        <div class="content">
          <h1>GRAPHQUON 2024</h1>
          <p>November 9-10, 2024</p>

          <!-- Logo Section -->
          <div class="logo-wrapper">
            <img src="res/Graphquon2024.png" alt="Graphquon 2024 Logo" class="logo-img" loading="lazy" />
          </div>

          <div class="logo-below">
            <img src="res/ets_logo.svg" alt="ÉTS Logo" loading="lazy" />
          </div>

          <!-- Dynamic Content -->
          ${this.currentSection === 'loading'
            ? html`<div class="loading">Loading...</div>`
            : this.currentSection === 'error'
            ? html`<div class="error-message">${this.errorMessage}</div>`
            : html`
                <div
                  class="countdown ${this.currentSection === 'countdown' ? 'visible' : ''}"
                  id="countdown-timer"
                >
                  ${this.countdownText}
                </div>

                <div
                  class="event-info ${this.currentSection === 'event' ? 'visible' : ''}"
                >
                  <strong>Ongoing:</strong> ${this.currentEventName}<br />
                  <strong>Happening now:</strong> ${this.currentEventTime}
                </div>

                <div
                  class="ended-message ${this.currentSection === 'ended' ? 'visible' : ''}"
                >
                  Thank You for Joining Us!<br />
                  The event has ended. We hope to see you next year!
                </div>
              `}
        </div>
      </section>
    `;
  }

  firstUpdated() {
    this.loadScheduleAndUpdateSection();
  }

  async loadScheduleAndUpdateSection() {
    try {
      const response = await fetch('schedule.json'); // Ensure the path is correct
      if (!response.ok) throw new Error('Failed to load schedule data');
      const scheduleData = await response.json();
      this.scheduleData = scheduleData;
      this.updateSectionBasedOnTime();
      // Start the interval after loading schedule
      this.updateInterval = setInterval(() => this.updateSectionBasedOnTime(), 1000);
    } catch (error) {
      console.error('Error loading schedule:', error);
      this.currentSection = 'error';
      this.errorMessage = 'Unable to load event schedule. Please try again later.';
    }
  }

  updateSectionBasedOnTime() {
    const now = new Date();
    let found = false;

    // Iterate through each day and event to find the current or next event
    for (const day of this.scheduleData) {
      for (const event of day.items) {
        const { startDate, endDate } = this.getEventDateRange(day, event);
        if (!startDate || !endDate) continue;

        if (now >= startDate && now <= endDate) {
          // Current event
          this.currentSection = 'event';
          this.currentEventName = event.name;
          this.currentEventTime = event.time;
          this.clearCountdown();
          found = true;
          break;
        } else if (now < startDate && !found) {
          // Next upcoming event
          this.currentSection = 'countdown';
          this.startCountdown(startDate);
          found = true;
          break;
        }
      }
      if (found) break;
    }

    if (!found) {
      // All events have passed
      this.currentSection = 'ended';
      this.clearCountdown();
    }
  }

  getEventDateRange(day, event) {
    const [startTimeStr, endTimeStr] = event.time.split(' - ');
    const startDate = this.parseDateTime(day, startTimeStr);
    let endDate = null;

    if (endTimeStr) {
      endDate = this.parseDateTime(day, endTimeStr);
    } else {
      // If no end time is provided, assume a default duration (e.g., 1 hour)
      endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
    }

    return { startDate, endDate };
  }

  parseDateTime(day, timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes)) return null;

    const year = 2024; // Adjust as needed
    const month = this.getMonthNumber(day.month);
    const date = Number(day.date);

    if (month === null || isNaN(date)) return null;

    return new Date(year, month, date, hours, minutes, 0);
  }

  getMonthNumber(monthName) {
    const months = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };
    return months[monthName] !== undefined ? months[monthName] : null;
  }

  startCountdown(eventDate) {
    this.countdownText = '';
    this.updateCountdown(eventDate);

    // Clear any existing countdown interval
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    this.countdownInterval = setInterval(() => {
      this.updateCountdown(eventDate);
    }, 1000);
  }

  updateCountdown(eventDate) {
    const now = new Date().getTime();
    const distance = eventDate.getTime() - now;

    if (distance < 0) {
      this.countdownText = 'Event is starting soon!';
      this.clearCountdown();
      this.updateSectionBasedOnTime();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countdownText = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  clearCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
    this.countdownText = '';
  }

  disconnectedCallback() {
    this.clearCountdown();
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    super.disconnectedCallback();
  }
}

customElements.define('hero-section', HeroSection);
