# GRAPHQUON Website

![GitHub last commit](https://img.shields.io/github/last-commit/GRAPHQUON/graphquon.github.io)
![GitHub license](https://img.shields.io/github/license/GRAPHQUON/graphquon.github.io)

This repository contains the code for the **GRAPHQUON** (formerly **MOTOGRAPH**) website. The site is hosted on **GitHub Pages** and automatically deployed from the `main` branch with every push.

GRAPHQUON is a technology and creative industry event, and this codebase is designed to be flexible for future events, regardless of the hosting institution.

---

## 🚀 Quick Start

### Install the HTTP Server
To run the site locally, you'll need a basic HTTP server to avoid CORS issues.
```bash
npm install http-server
```

### Run the Local Server
```bash
http-server
```

### 4. Access the Site
Navigate to `http://localhost:8080` to see the site running locally.

---

## 🛠️ Project Structure

Here is the structure of the repository:

```
├── components
│   ├── app.js                # Main app component
│   ├── privacy/
│   │   └── privacy.js        # Privacy section
│   ├── sections/
│   │   ├── about/            # About section
│   │   ├── contact/          # Contact section
│   │   ├── footer/           # Footer component
│   │   ├── header/           # Header component
│   │   ├── hero/             # Hero section
│   │   ├── keynote/          # Keynote section
│   │   ├── schedule/         # Schedule section
│   │   └── terms/            # Terms section
├── res/                      # Resources (images, fonts)
├── favicon.png               # Website favicon
├── index.html                # Main HTML file
├── index.js                  # Entry JavaScript file
├── lib/
├── privacy.html              # Privacy policy page
└── terms.html                # Terms and conditions page
```

---

## 🔄 Updating for Future Events

To adapt the website for future editions of GRAPHQUON, you need to update a few files and sections:

## 💻 Local Development

This website is straightforward to maintain and develop locally. Using **npm** and **http-server**, you can run a local version of the site to preview changes.

To test changes:

1. Make necessary updates to files like `index.html`, `schedule.json`, or styles.
2. Start the server using:
   ```bash
   http-server
   ```
3. View the site locally at `http://localhost:8080`.

---

## 🚢 Deployment

The website is hosted on **GitHub Pages**, and any push to the `main` branch automatically triggers a deployment. This ensures that the site is always up-to-date after edits.

Steps for deployment:

1. Commit your changes.
2. Push to the `main` branch.
3. GitHub Pages will automatically deploy the latest version of the site.

---

## 🛡 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
