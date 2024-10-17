# GRAPHQUON Website

This repository contains the code for the GRAPHQUON (previously MOTOGRAPH) website. The site is hosted on GitHub and automatically deployed from the main branch with every push.

The goal is to maintain this codebase in a way that it can be reused for future events, regardless of the hosting institution.

## Developing Locally

The website is intentionally simple for ease of maintenance. To develop or debug the site locally, all you need is a basic HTTP server to avoid CORS (Cross-Origin Resource Sharing) issues. You can set this up using npm:

1. Install the HTTP server package:

   ```bash
   npm install http-server
   ```

2. From the root directory of the project, run the server:

   ```bash
   http-server
   ```

   This will serve the website locally, allowing you to test changes.

## Updating for Future Events

To update the website for future editions of GRAPHQUON, there are a few specific files and elements that need to be modified:

### 1. `index.html`
- **Event Details**: Update the event date, location, and any other key information in the `<h2>` tags located within the `#canvas-container` section.
- **Keynote Speaker**: Replace the name, image, and any other relevant details for the keynote speaker.
- **Registration Links**: Update all buttons linking to the registration form. These buttons can be easily found by searching for elements with the `register` class.

### 2. `schedule.json`
- **Event Schedule**: Edit the entire `schedule.json` file to reflect the new event’s schedule, including session times, speaker names, and topics.

### 3. Background Image
- **Background Image**: Replace `res/background.jpg` with an image appropriate for the new event’s location or theme. The image should be heavily compressed to minimize page load time, as the background doesn’t need to be high-resolution.

## Repository Structure

Here’s an overview of the key files and directories in this repository:

- **`index.html`**: The main page of the website.
- **`schedule.json`**: JSON file containing the event schedule.
- **`index.js`**: Contains JavaScript code for the site’s functionality.
- **`style.css`**: CSS styles for the website’s appearance.
- **`favicon.png`**: The website's favicon.
- **`res/`**: Directory containing resources like the background image.

## Deployment

The website is hosted via GitHub Pages, and any push to the main branch will automatically trigger a deployment. This ensures the site is always up-to-date after edits are made.
