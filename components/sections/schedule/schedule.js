import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class ScheduleSection extends LitElement {
  static styles = css`
    section {
      padding: 2rem;
      background-color: #f7fafc;
      border-radius: 15px;
      text-align: center;
    }

    h1 {
      color: #2d3748;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    #schedule-grid-container {
      border-radius: 23px;
      background-color: white;
      padding: 15px;
    }

    .schedule-day {
      display: grid;
      grid-template-columns: 60px 200px;
      row-gap: 19px;
      padding: 20px;
      background-color: white;
      color: #252525;
      border-radius: 17px;
      border: solid 2px #d4d4d4;
      cursor: default;
      margin-bottom: 2rem;
    }

    h2 {
      grid-column: 1 / 3;
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
      color: #2b6cb0;
    }

    h3 {
      grid-column: 1 / 3;
      margin: 0;
      font-size: 1.5rem;
      color: #b72ce4;
    }

    .schedule-item-time {
      color: #135eaab8;
    }

    .schedule-item-name {
      border-bottom: solid 1px #ddd;
      cursor: pointer;
      position: relative;
    }

    .schedule-item-name.sublist ion-icon {
      position: absolute;
      right: 0;
    }

    .schedule-sublist {
      display: none;
      position: absolute;
      left: -67px;
      border-radius: 10px;
      background: linear-gradient(45deg, #549ddc, #b94de4);
      color: white;
      border: none;
      padding: 20px;
      padding-bottom: 0;
      width: 280px;
      font-size: 14px;
      z-index: 10;
    }

    .schedule-sublist.active {
      display: block;
    }
  `;

  render() {
    return html`
      <section id="schedule">
        <h1>Schedule</h1>
        <div id="schedule-grid-container"></div>
      </section>
    `;
  }

  firstUpdated() {
    this.fetchScheduleData();
  }

  async fetchScheduleData() {
    try {
      const response = await fetch('schedule.json');
      if (!response.ok) throw new Error('Failed to load schedule data');
      const data = await response.json();
      this.renderSchedule(data);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  }

  renderSchedule(data) {
    const scheduleContainer = this.shadowRoot.getElementById('schedule-grid-container');
    const fragment = document.createDocumentFragment();

    data.forEach(day => {
      const dayEl = this.createDayElement(day);
      fragment.appendChild(dayEl);
    });

    scheduleContainer.appendChild(fragment);
  }

  createDayElement(day) {
    const dayEl = document.createElement('div');
    dayEl.className = 'schedule-day';

    const titleEl = document.createElement('h2');
    titleEl.textContent = `${day.date} ${day.month}`;
    const subtitleEl = document.createElement('h3');
    subtitleEl.textContent = day.day;

    dayEl.appendChild(titleEl);
    dayEl.appendChild(subtitleEl);

    day.items.forEach(item => {
      const timeEl = this.createTimeElement(item.time);
      const nameEl = this.createNameElement(item);

      dayEl.appendChild(timeEl);
      dayEl.appendChild(nameEl);
    });

    return dayEl;
  }

  createTimeElement(time) {
    const timeEl = document.createElement('span');
    timeEl.className = 'schedule-item-time';
    timeEl.textContent = time;
    return timeEl;
  }

  createNameElement(item) {
    const nameEl = document.createElement('span');
    nameEl.className = 'schedule-item-name';
    nameEl.textContent = item.name;

    if (item.items) {
      nameEl.classList.add('sublist');
      const iconEl = document.createElement('ion-icon');
      iconEl.setAttribute('name', 'chevron-down-outline');
      nameEl.appendChild(iconEl);

      nameEl.addEventListener('click', () => {
        this.toggleSublist(nameEl);
      });

      const sublistEl = this.createSublistElement(item.items);
      nameEl.appendChild(sublistEl);
    }

    return nameEl;
  }

  createSublistElement(subitems) {
    const sublistEl = document.createElement('div');
    sublistEl.className = 'schedule-sublist';

    subitems.forEach(subitem => {
      const subitemNameEl = document.createElement('div');
      subitemNameEl.className = 'schedule-sublist-name';
      subitemNameEl.textContent = subitem.name;

      const subitemAuthorEl = document.createElement('div');
      subitemAuthorEl.className = 'schedule-sublist-author';
      subitemAuthorEl.innerHTML = `${subitem.author} <span class="schedule-sublist-affiliation">(${subitem.affiliation})</span>`;

      sublistEl.appendChild(subitemNameEl);
      sublistEl.appendChild(subitemAuthorEl);
    });

    return sublistEl;
  }

  toggleSublist(nameEl) {
    const sublist = nameEl.querySelector('.schedule-sublist');
    if (sublist) {
      sublist.classList.toggle('active');

      // Close other active sublists
      const sublists = this.shadowRoot.querySelectorAll('.schedule-sublist');
      sublists.forEach(s => {
        if (s !== sublist) s.classList.remove('active');
      });
    }
  }
}

customElements.define('schedule-section', ScheduleSection);
