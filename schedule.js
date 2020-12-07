
const request = new XMLHttpRequest();

request.onreadystatechange = () => {
    if (request.readyState !== XMLHttpRequest.DONE) return;
    if (request.status !== 200) return;

    const data = JSON.parse(request.responseText);
    const scheduleEl = document.getElementById('schedule-grid');
    
    for (const day of data) {
        const dayEl = document.createElement('div');
        dayEl.className = 'schedule-day';
        const titleEl = document.createElement('h2');
        titleEl.textContent = day['date'];
        const subtitleEl = document.createElement('h3');
        subtitleEl.textContent = day['day'];

        dayEl.appendChild(titleEl);
        dayEl.appendChild(subtitleEl);

        for (const item of day['items']) {
            const timeEl = document.createElement('span');
            timeEl.textContent = item['time'];
            timeEl.className = 'schedule-item-time';
            const nameEl = document.createElement('span');
            nameEl.textContent = item['name'];
            nameEl.className = 'schedule-item-name';

            if (item['items']) {
                nameEl.classList.add('sublist');
                const iconEl = document.createElement('ion-icon');
                iconEl.setAttribute('name', 'chevron-down-outline');
                nameEl.appendChild(iconEl);

                nameEl.addEventListener('click', function (e) {
                    const clickedSublist = this.querySelector('.schedule-sublist');

                    if (clickedSublist) {
                        clickedSublist.classList.toggle('active');

                        // Hide all other sublists:
                        const sublists = document.getElementsByClassName('schedule-sublist');
                        for (const sublist of sublists) {
                            if (sublist !== clickedSublist) {
                                sublist.classList.remove('active');
                            }
                        }
                    }
                });

                const sublistEl = document.createElement('div');
                sublistEl.className = 'schedule-sublist';
                for (const subitem of item['items']) {
                    const subitemNameEl = document.createElement('div');
                    subitemNameEl.textContent = subitem['name'];
                    subitemNameEl.className = 'schedule-sublist-name';
                    const subitemAuthorEl = document.createElement('div');
                    subitemAuthorEl.className = 'schedule-sublist-author';
                    const authorNameEl = document.createElement('span');
                    const affiliationEl = document.createElement('span');
                    authorNameEl.textContent = subitem['author'];
                    authorNameEl.className = 'schedule-sublist-author-name';
                    affiliationEl.textContent = '(' + subitem['affiliation'] + ')';
                    affiliationEl.className = 'schedule-sublist-affiliation';
                    subitemAuthorEl.appendChild(authorNameEl);
                    subitemAuthorEl.appendChild(affiliationEl);

                    sublistEl.appendChild(subitemNameEl);
                    sublistEl.appendChild(subitemAuthorEl);
                }

                nameEl.appendChild(sublistEl);
            }

            dayEl.appendChild(timeEl);
            dayEl.appendChild(nameEl);
        }

        const dayContainerEl = document.createElement('div');
        dayContainerEl.appendChild(dayEl);
        scheduleEl.appendChild(dayContainerEl);
    }
};

request.open('GET', 'schedule.json');
request.send();
