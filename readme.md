# GRAPHQUON Website

This repository contains all the code for the new GRAPHQUON (previously MOTOGRAPH) website.
The website is currently hosted using Github and tracks the main branch (any push will trigger an automatic deployment).

The hope is that this codebase can be reused in following years no matter which institution is hosting the event.

## Developing Locally

This website was intentionally kept simple for ease of maintenance. The only thing needed to develop and debug on your local machine is an http server to avoid CORS issues. This can be installed using npm (`npm install http-server`) and run from the root directory (using the command `http-server`).

## Updating for Future Events

Here is a list of everything that needs to be changed from year to year. It includes changing the location (and associated background image), date and schedule:

- `index.html`: Change the Keynote speaker's name and images, and change the registration form link on all the "Register" buttons (they have class `register` which should make it easier to find them)
- `index.js`: At the top of the file, change the location and dates in the `subtitles` variable
- `style.css`: In the `#canvas-container:before` block, change the `background-image` property
- `schedule.json`: Edit this entire json file to match your desired schedule
