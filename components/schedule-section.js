import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class ScheduleSection extends LitElement {
  render() {
    return html`
      <section id="schedule">
        <h1>Schedule</h1>
        <div id="schedule-grid-container">
          <!-- Schedule content dynamically filled by schedule.js -->
        </div>
      </section>
    `;
  }
}

customElements.define('schedule-section', ScheduleSection);
