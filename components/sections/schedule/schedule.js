import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';
import 'https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';

class ScheduleSection extends LitElement {
  static properties = {
    scheduleData: { type: Array },
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
      background-color: rgb(212, 217, 222);
      color: #252525;
      border-radius: 17px;
      border: solid 4px #d3d3d3;
      cursor: default;
      flex-wrap: wrap;
    }

    .schedule-day {
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: rgb(212, 217, 222);
      color: #252525;
      border-radius: 17px;
      border: solid 4px #d3d3d3;
      cursor: default;
      margin-bottom: 2rem;
      position: relative;

      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Subtle shadow */
      transition: box-shadow 0.3s ease; /* Smooth transition for shadow */
    }

    .schedule-day:hover {
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Increased shadow for hover effect */
    }

    .schedule-day h2 {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
      color: #2b6cb0;
      padding: 8px 0;
      text-align: center;
    }

    .schedule-day h3 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: #b72ce4;
      text-align: center;
    }

    .schedule-item {
      margin-bottom: 1rem;
    }

    .schedule-item-time {
      color: #135eaab8;
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

    .schedule-item-name {
      border-bottom: solid 1px #ddd;
      padding-right: 24px;
      padding-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      position: relative;
    }

    .schedule-item-name a {
      color: inherit;
      text-decoration: none;
      flex: 1;
    }

    .schedule-item-name a:hover {
      color: #b72ce6;
      text-decoration: underline;
    }

    .schedule-sublist {
      margin-top: 10px;
      border-radius: 10px;
      background: linear-gradient(45deg, #549ddc, #b94de4);
      color: white;
      border: none;
      padding: 20px;
      z-index: 10;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .schedule-sublist-author {
      text-align: left;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .schedule-sublist-author a {
      color: inherit;
      text-decoration: none;
    }

    .schedule-sublist-author a:hover {
      text-decoration: underline;
    }

    .schedule-sublist-affiliation {
      font-weight: normal;
      padding-left: 7px;
    }

    ion-icon {
      font-size: 1.25rem;
      transition: transform 0.3s;
    }

    /* Remove rotation since sublists are always open */
    /* .schedule-item-name.open ion-icon {
      transform: rotate(180deg);
    } */

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
    this.scheduleData = [
      {
        date: "9",
        month: "November",
        day: "Saturday",
        items: [
          {
            time: "08:30 - 09:00",
            name: "Arrival (Breakfast)"
          },
          {
            time: "09:00 - 09:20",
            name: "Opening"
          },
          {
            time: "09:30 - 10:30",
            name: "Student presentations",
            items: [
              {
                author: "Quoc-Minh Ton-That",
                affiliation: "École de technologie supérieure",
                link: "https://www.q-minh.com/"
              },
              {
                author: "Melissa Katz",
                affiliation: "McGill University"
              },
              {
                author: "Darsh Kaushik",
                affiliation: "MILA - Université de Montréal",
                link: "https://mila.quebec/en/directory/darsh-kaushik"
              }
            ]
          },
          {
            time: "10:30 - 11:00",
            name: "Break"
          },
          {
            time: "11:00 - 12:00",
            name: "Student presentations",
            items: [
              {
                author: "Justin Benoist",
                affiliation: "École de technologie supérieure",
                link: "https://www.linkedin.com/in/justin-benoist"
              },
              {
                author: "Arthur Delon",
                affiliation: "University of Sherbrooke"
              },
              {
                author: "Joel Pelletier-Guenette",
                affiliation: "École de technologie supérieure",
                link: "https://www.linkedin.com/in/joelpelletierguenette"
              }
            ]
          },
          {
            time: "12:00 - 14:00",
            name: "Lunch"
          },
          {
            time: "14:00 - 15:00",
            name: "Keynote Masha Shugrina (NVIDIA)",
            link: "https://shumash.com/"
          },
          {
            time: "15:00 - 15:15",
            name: "Break"
          },
          {
            time: "15:15 - 16:00",
            name: "Student presentations",
            items: [
              {
                author: "Abhishek Madan",
                affiliation: "University of Toronto",
                link: "https://www.dgp.toronto.edu/~amadan/"
              },
              {
                author: "Clara Kim",
                affiliation: "University of Waterloo"
              }
            ]
          },
          {
            time: "16:00 - 16:30",
            name: "Faculty presentation"
          },
          {
            time: "16:30",
            name: "Workshop Dinner + Trivia Night"
          }
        ]
      },
      {
        date: "10",
        month: "November",
        day: "Sunday",
        items: [
          {
            time: "08:30 - 09:00",
            name: "Arrival (Breakfast)"
          },
          {
            time: "09:00 - 10:30",
            name: "Student presentations",
            items: [
              {
                author: "Victor Rong",
                affiliation: "University of Toronto",
                link: "https://www.lessvrong.com/"
              },
              {
                author: "Ryusuke Sugimoto",
                affiliation: "University of Waterloo",
                link: "https://rsugimoto.net/"
              },
              {
                author: "Yue Chang",
                affiliation: "University of Toronto",
                link: "https://changy1506.github.io/"
              },
              {
                author: "Ege Ciklabakkal",
                affiliation: "University of Waterloo",
                link: "https://cs.uwaterloo.ca/~meciklab/"
              }
            ]
          },
          {
            time: "10:30 - 11:00",
            name: "Break"
          },
          {
            time: "11:00 - 12:00",
            name: "Keynote Lesley Istead (Cartlon University)"
          },
          {
            time: "12:00 - 14:00",
            name: "Lunch"
          },
          {
            time: "14:00 - 14:30",
            name: "Faculty presentation"
          },
          {
            time: "14:30 - 15:00",
            name: "Round table internship"
          },
          {
            time: "15:00 - 15:30",
            name: "Break"
          },
          {
            time: "15:30 - 16:10",
            name: "Student presentations",
            items: [
              {
                author: "Alex Hoang-Cao",
                affiliation: "École de technologie supérieure",
                link: "https://www.linkedin.com/in/alex-hoang-cao/?locale=fr_FR"
              },
              {
                author: "Ivan Puhachov",
                affiliation: "Université de Montréal",
                link: "https://puhachov.xyz/"
              }
            ]
          },
          {
            time: "16:20 - 16:30",
            name: "Closing"
          }
        ]
      }
    ];
  }

  renderSublist(subitems) {
    return html`
      <div class="schedule-sublist">
        ${subitems.map(
          subitem => html`
            <div class="schedule-sublist-author">
              ${subitem.link
                ? html`<a href="${subitem.link}" target="_blank" rel="noopener noreferrer"
                    >${subitem.author}</a
                  >`
                : html`${subitem.author}`}
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
                    <div class="schedule-item">
                      <span class="schedule-item-time">${item.time}</span>
                      <div class="schedule-item-name">
                        ${item.link
                          ? html`<a
                              href="${item.link}"
                              target="_blank"
                              rel="noopener noreferrer"
                              >${item.name}</a
                            >`
                          : html`${item.name}`}
                        ${item.items
                          ? html`
                              <ion-icon name="chevron-down-outline"></ion-icon>
                            `
                          : ''}
                      </div>
                      ${item.items ? this.renderSublist(item.items) : ''}
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
