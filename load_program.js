// Please modify this to first date of conference:
const initialDate = "2024-11-09";

// Please modify data below to change the program.
// Minimal keys required for the calendar to work:
// { title: '', day: 0, startTime  : '00:00', endTime    : '00:00' }

const program_data = {
  food : [
    { title  : 'Breakfast'       , day : 0, startTime  : '08:30' , endTime    : '09:00'  },
    { title  : 'Lunch'           , day : 0, startTime  : '12:00' , endTime    : '14:00' },
    { title  : 'Dinner + Trivia' , day : 0, startTime  : '16:30' , endTime    : '17:00' },

    { title  : 'Breakfast'  , day : 1, startTime  : '08:30'  , endTime    : '09:00'  },
    { title  : 'Lunch'      , day : 1, startTime  : '12:00' , endTime    : '14:00' },
    
  ],
  
  admin: [
    { title  : 'Opening'             , day : 0, startTime  : '09:00'  , endTime    : '09:20'  },
    { title  : 'Faculty presentation', day : 0, startTime  : '16:00' , endTime    : '16:30' },
    
    { title  : 'Faculty presentation', day : 1, startTime  : '14:00' , endTime    : '14:30' },
    { title  : 'Round table'         , day : 1, startTime  : '14:30' , endTime    : '15:00' },
    { title  : 'Closing'             , day : 1, startTime  : '16:20' , endTime    : '16:30' },
        
  ],
  keynotes: [
    { title  : 'Keynote Masha Shugrina', day : 0, startTime  : '14:00',  endTime    : '15:00' },
    { title  : 'Keynote Lesley Istead', day : 1, startTime  : '11:00',  endTime    : '12:00' },
    
  ],
  paperSessions:[
    { title  : 'Presentations 1', day : 0, startTime  : '09:30', endTime    : '10:30' },
    { title  : 'Presentations 2', day : 0, startTime  : '11:00', endTime    : '12:00' },
    { title  : 'Presentations 3', day : 0, startTime  : '15:15', endTime    : '16:00' },
    { title  : 'Presentations 4', day : 1, startTime  : '09:00', endTime    : '10:30' },
    { title  : 'Presentations 5', day : 1, startTime  : '15:30', endTime    : '16:10' },
  ]
}


function objectToValidEvent(event){
    valid = {title: event.title}
    var Sdate = new Date(`${initialDate}T${event.startTime}:00`)
    var Edate = new Date(`${initialDate}T${event.endTime}:00`)
    Sdate.setDate(Sdate.getDate() + event.day)
    Edate.setDate(Edate.getDate() + event.day)
    valid.start = Sdate.toISOString()
    valid.end = Edate.toISOString()

    if ('description' in event){
      valid.description = event.description
    }
    else {
      valid.description = event.title
    }
    if ('anchor' in event){
      valid.anchor = event.anchor
    }
    return valid
}

function initializeSectionHeader(title, docElement){
  const headerDiv = document.createElement("div");
  headerDiv.innerHTML=`
  <h3 id="about"><span class="text-bg is-primary" style="color: white;">${title}</span></h3>
  <hr class="separator">
  `
  headerDiv.style.display = "none";
  if (docElement !== null) {
    docElement.appendChild(headerDiv);
  }
}

function setUpCalendar(){
  var calendarEl = document.getElementById("calendar");

      // Aliases for the numbers (for clarity)
      const Sunday = 0; const Monday = 1; const Tuesday = 2; const Wednesday = 3; 
      const Thursday = 4; const Friday = 5; const Saturday = 6;
      

      // COLOURS (easier to edit this way)
      const FoodColor                 = 'rgb(227, 227, 227)';
      const SessionColor              = 'rgb(48, 163, 61)';
      const KeynoteColor              = 'rgb(197, 83, 66)';
      const OtherColor                = 'rgb(53, 162, 213)';

      // EVENTS
      const FoodEvents = program_data.food.map(event => objectToValidEvent(event))
      const SessionEvents = program_data.paperSessions.map(event => objectToValidEvent(event))
      const KeynoteEvents = program_data.keynotes.map(event => objectToValidEvent(event))
      const OtherEvents = program_data.admin.map(event => objectToValidEvent(event))


      // Put it all together
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "timeGridWeek",
        hiddenDays: [Monday, Tuesday, Wednesday, Thursday, Friday], // Conference is on the weekend
        allDaySlot: false,
        contentHeight:"auto",
        slotMinTime: "08:00:00",
        slotMaxTime: "20:00:00",
        headerToolbar: {left:"title", center:"", right:""},
        nowIndicator: true,
        initialDate: initialDate,
        firstDay: Saturday, // default 0, which is Sunday
        eventDisplay: "block",
        eventTimeFormat: { // 24-hour time, but only on events
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        },
        eventSources: [
          { // Food
            events: FoodEvents,
            color: FoodColor,
            textColor: 'black'
          },
          { // Sessions
            events: SessionEvents,
            color: SessionColor,
            textColor: 'black'
          },
          { // Keynotes
            events: KeynoteEvents,
            color: KeynoteColor,
            textColor: 'black'
          },
          { // Other
            events: OtherEvents,
            color: OtherColor,
            textColor: 'black'
          },
        ],
        // eventDidMount: function(info) {
        
        //   if (screen.width <= 768) {
        //     var tooltip = new Tooltip(info.el, {
        //     title: info.event.extendedProps.description,
        //     placement: 'top',
        //     trigger: 'hover',
        //     container: 'body'
        //   });
        //   }
        // },
        eventClick: function(info) {
          const anchor = info.event.extendedProps.anchor;
          if (anchor) {
            // Prevent the default browser action
            info.jsEvent.preventDefault();

            // Use scrollIntoView for smooth scrolling
            const target = document.getElementById(anchor);
            if (target) {
              target.scrollIntoView({block: "center", behavior: 'smooth' });
            }
            else { console.log("missing element " + anchor)}
          }
        },
      });

    calendar.render();
}

document.addEventListener("DOMContentLoaded", function() {
  setUpCalendar();

  var bios = document.getElementsByClassName("hiddenblock");
  var i;
  
  for (i = 0; i < bios.length; i++) {
    bios[i].addEventListener("click", function() {
      this.classList.toggle("visibleblock");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }  
  
});
