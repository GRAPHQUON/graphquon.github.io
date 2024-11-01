# GRAPHQUON Website

![GitHub last commit](https://img.shields.io/github/last-commit/GRAPHQUON/graphquon.github.io)  
![GitHub license](https://img.shields.io/github/license/GRAPHQUON/graphquon.github.io)  
![GitHub contributors](https://img.shields.io/github/contributors/GRAPHQUON/graphquon.github.io)  
![Website visits](https://img.shields.io/badge/dynamic/json?color=blue&label=Visits&query=value&url=https://api.countapi.xyz/hit/GRAPHQUON/graphquon.github.io)

This repository contains the codebase for the **GRAPHQUON** website, an event hub for the technology and creative industries. Previously known as **MOTOGRAPH**, the site is designed to be flexible and adaptable for future GRAPHQUON events. It is hosted on **GitHub Pages** and automatically deploys from the `main` branch with every push.

---

## 📅 Event Information

For each GRAPHQUON event, the following details are vital to include:

1. **Where**: The event's location, whether it's a physical venue or an online link for virtual events.
2. **When**: Clear dates and times, with time zones if it's online.
3. **Who**: A list of key speakers, panelists, and hosts to generate interest in the event.
4. **Conversations Over Good Food**: Highlights of any special meal-based networking sessions, such as luncheons, dinners, or coffee breaks, to encourage informal discussions and deeper networking.

---

## 🚀 Quick Start

To set up the site locally, you'll need an HTTP server. This will help you avoid CORS issues that might otherwise occur during local testing.

### 1. Install the HTTP Server

Use **npm** to install a basic HTTP server:
```bash
npm install http-server
```

### 2. Run the Local Server

Start the server with:
```bash
http-server
```

### 3. Access the Site

Visit `http://localhost:8080` in your browser to see the site in action.

> **Tip**: Alternatively, you can use the **Live Server** extension in Visual Studio Code to serve the site locally without additional setup.

---

## 🛠️ Project Structure

The repository is organized as follows:

```
├── components
│   ├── app.js                # Main application component
│   ├── sections/
│   │   ├── about/            # About section component
│   │   ├── contact/          # Contact section component
│   │   ├── footer/           # Footer component
│   │   ├── header/           # Header component
│   │   ├── hero/             # Hero section component
│   │   ├── keynote/          # Keynote section component
│   │   ├── schedule/         # Schedule section component
│   │   ├── terms/            # Terms and conditions section component
│   │   ├── privacy/
├── res/                      # Resources (e.g., images, fonts)
├── lib/                      # Libraries used in the project
├── favicon.png
├── index.html                # Main HTML entry point
├── index.js                  # JavaScript entry point
├── privacy.html              # Privacy policy page
└── terms.html                # Terms and conditions page
```

---

## 🔄 Updating for Future Events

GRAPHQUON’s codebase is built to facilitate easy updates for future events. To tailor the website to a new event:

- Update content files such as `index.html` for the homepage.
- Edit `schedule.json` to reflect the latest event details.
- Adjust any necessary CSS or style-related files for the new design theme.

---

## 💻 Local Development

Developing locally is efficient with **npm** and **http-server**. Follow these steps to preview and test changes before pushing them live:

1. Modify relevant files, such as `index.html`, event data in `schedule.json`, or stylesheets.
2. Start the server with:
   ```bash
   http-server
   ```
3. Open the site at `http://localhost:8080` in your browser to view the changes in real time.

> **Note**: **Live Server** in Visual Studio Code is a great alternative for a smoother local preview experience.

---

## 🚢 Deployment

The site is deployed via **GitHub Pages**. Any push to the `main` branch will automatically redeploy the latest version.

**Deployment Steps:**

1. Commit your changes to your local repository.
2. Push your changes to the `main` branch on GitHub.
3. GitHub Pages will automatically build and deploy the latest version of the site.

---

## 🛡 License

This project is licensed under the MIT License. For detailed information, refer to the [LICENSE](LICENSE) file in the repository.

---

Happy coding and welcome to the world of GRAPHQUON