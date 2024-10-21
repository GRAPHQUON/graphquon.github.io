import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';
import 'https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';

class ScheduleSection extends LitElement {
  static properties = {
    scheduleData: { type: Array },
    activeSublist: { type: Object },
  };

  static styles = css`
    :host {
      display: block;
      position: relative;
      padding: 2rem;
      font-family: 'Commissioner', sans-serif;
      background-color: #f7fafc;
      color: #111827;
      z-index: 1;
    }

    header {
      background-color: #1f2937;
      color: white;
      text-align: center;
      padding: 1.5rem 0;
      border-radius: 15px;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }

    #schedule-grid-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 40px;
      background-color: rgb(212 217 222);
      color: #252525;
      border-radius: 17px;
      border: solid 4px #d3d3d3;
      cursor: default;
      flex-wrap: wrap;
    }

    .schedule-day {
      grid-template-columns: 60px 200px;
      row-gap: 19px;
      padding: 20px;
      background-color: rgb(212 217 222);
      color: #252525;
      border-radius: 17px;
      border: solid 4px #d3d3d3;
      cursor: default;
      margin-bottom: 2rem;
      position: relative;
      width: 300px;

      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Subtle shadow */
      transition: box-shadow 0.3s ease; /* Smooth transition for shadow */
    }

    .schedule-day:hover {
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Increased shadow for hover effect */
    }

    .schedule-day h2 {
      grid-column: 1 / 3;
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
      color: #2b6cb0;
      padding: 8px;
    }

    .schedule-day h3 {
      grid-column: 1 / 3;
      margin: 0;
      font-size: 1.5rem;
      color: #b72ce4;
    }

    .schedule-item-time {
      color: #135eaab8;
      font-weight: bold;
    }

    .schedule-item-name {
      border-bottom: solid 1px #ddd;
      cursor: pointer;
      position: relative;
      padding-right: 24px;
      padding-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .schedule-item-name:hover {
      color: #b72ce6;
    }

    .schedule-sublist {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      border-radius: 10px;
      background: linear-gradient(45deg, #549ddc, #b94de4);
      color: white;
      border: none;
      padding: 20px;
      padding-bottom: 0;
      width: 280px;
      font-size: 14px;
      z-index: 10;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .schedule-sublist.active {
      display: block;
    }

    .schedule-sublist-name {
      text-align: left;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .schedule-sublist-author {
      text-align: right;
      margin-bottom: 15px;
      font-weight: bold;
    }

    .schedule-sublist-affiliation {
      font-weight: normal;
      padding-left: 7px;
    }

    ion-icon {
      font-size: 1.25rem;
      transition: transform 0.3s;
    }

    .schedule-item-name.open ion-icon {
      transform: rotate(180deg);
    }

    @media screen and (max-width: 800px) {
      #schedule-grid-container {
        flex-direction: column;
        align-items: center;
        padding: 0;
      }

      .schedule-day {
        width: 90%;
      }
    }
  `;

  constructor() {
    super();
    this.scheduleData = [];
    this.activeSublist = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchScheduleData();
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
    super.disconnectedCallback();
  }

  handleOutsideClick(event) {
    if (!this.contains(event.target)) {
      this.activeSublist = null;
      this.requestUpdate();
    }
  }

  async fetchScheduleData() {
    try {
      const response = await fetch('components/sections/schedule/schedule.json');
      if (!response.ok) throw new Error('Failed to load schedule data');
      const data = await response.json();
      this.scheduleData = data;
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  }

  toggleSublist(dayDate, itemName) {
    if (
      this.activeSublist &&
      this.activeSublist.dayDate === dayDate &&
      this.activeSublist.itemName === itemName
    ) {
      this.activeSublist = null;
    } else {
      this.activeSublist = { dayDate, itemName };
    }
  }

  renderSublist(dayDate, itemName, subitems) {
    const isActive =
      this.activeSublist &&
      this.activeSublist.dayDate === dayDate &&
      this.activeSublist.itemName === itemName;

    return html`
      <div class="schedule-sublist ${isActive ? 'active' : ''}" @click=${e => e.stopPropagation()}>
        ${subitems.map(
          subitem => html`
            <div class="schedule-sublist-name">${subitem.name}</div>
            <div class="schedule-sublist-author">
              ${subitem.author}
              <span class="schedule-sublist-affiliation">(${subitem.affiliation})</span>
            </div>
          `
        )}
      </div>
    `;
  }

  render() {
    return html`
      <section id="schedule">
        <header>
          <h1>Schedule</h1>
        </header>
        <div id="schedule-grid-container">
          ${this.scheduleData.map(
            day => html`
              <div class="schedule-day">
                <h2>${day.date} ${day.month}</h2>
                <h3>${day.day}</h3>
                ${day.items.map(
                  item => html`
                    <div>
                      <span class="schedule-item-time">${item.time}</span>
                      <div
                        class="schedule-item-name ${this.activeSublist &&
                        this.activeSublist.dayDate === day.date &&
                        this.activeSublist.itemName === item.name
                          ? 'open'
                          : ''}"
                        @click=${() => this.toggleSublist(day.date, item.name)}
                      >
                        ${item.name}
                        ${item.items
                          ? html`
                              <ion-icon name="chevron-down-outline"></ion-icon>
                              ${this.renderSublist(day.date, item.name, item.items)}
                            `
                          : ''}
                      </div>
                    </div>
                  `
                )}
              </div>
            `
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('schedule-section', ScheduleSection);
