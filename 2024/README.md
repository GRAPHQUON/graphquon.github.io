# GRAPHQUON Website

![GitHub last commit](https://img.shields.io/github/last-commit/GRAPHQUON/graphquon.github.io)
![GitHub license](https://img.shields.io/github/license/GRAPHQUON/graphquon.github.io)
![GitHub contributors](https://img.shields.io/github/contributors/GRAPHQUON/graphquon.github.io)
![Website visits](https://img.shields.io/badge/dynamic/json?color=blue&label=Visits&query=value&url=https://api.countapi.xyz/hit/GRAPHQUON/graphquon.github.io)

Welcome to the **GRAPHQUON** website repository! GRAPHQUON serves as an event hub for the technology and creative industries. Formerly known as **MOTOGRAPH**, our platform is designed to be flexible and easily adaptable for future GRAPHQUON events. Hosted on **GitHub Pages**, the site automatically deploys from the `main` branch with every push, ensuring seamless updates.

---

## 📜 Table of Contents

- [📅 Event Information](#-event-information)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Project Structure](#️-project-structure)
- [🔄 Updating for Future Events](#-updating-for-future-events)
- [💻 Local Development](#-local-development)
- [🚢 Deployment](#-deployment)
- [🛡️ License](#️-license)
- [🤝 Contributing](#-contributing)
- [📞 Contact](#-contact)

---

## 📅 Event Information

For each GRAPHQUON event, ensure the following details are clearly included:

1. **Where**: Specify the event's location, whether it's a physical venue or an online platform link for virtual events.
2. **When**: Provide clear dates and times, including time zones for online events.
3. **Who**: List key speakers, panelists, and hosts to generate interest and attract attendees.
4. **Conversations Over Good Food**: Highlight any special meal-based networking sessions, such as luncheons, dinners, or coffee breaks, to encourage informal discussions and deeper networking opportunities.

---

## 🚀 Quick Start

To set up the site locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/GRAPHQUON/graphquon.github.io.git
cd graphquon.github.io
```

### 2. Install Dependencies

Ensure you have **npm** installed. Then, install the necessary packages:

```bash
npm install
```

### 3. Run the Local Server

Start the server to serve the site locally:

```bash
npx http-server
```

Alternatively, you can install `http-server` globally:

```bash
npm install -g http-server
http-server
```

### 4. Access the Site

Open your browser and navigate to `http://localhost:8080` to view the site.

> **Tip**: For a more integrated experience, use the **Live Server** extension in Visual Studio Code, which allows you to serve the site locally with live reloading.

---

## 🛠️ Project Structure

The repository is organized as follows:

```
├── components
│   ├── app.js                # Main application component
│   ├── background            # Background script
│   └── sections
│       ├── about               # About
│       ├── contact             # Contact
│       ├── footer              # Footer
│       ├── header              # Header
│       ├── hero                # Hero
│       ├── keynote             # Keynote
│       ├── privacy             # Privacy policy
│       ├── schedule            # Event schedule
│       └── terms               # Terms and conditions
├── lib                        # Third-party libraries
│   ├── particles.min.js       # Particle effects library
│   └── three.min.js           # Three.js library
├── res                        # Resources (e.g., images, fonts)
├── favicon.png
├── index.css                  # Main CSS stylesheet
├── index.html                 # Main HTML entry point
├── index.js                   # JavaScript entry point
├── particles.json             # Particle effects configuration
├── privacy.html               # Privacy policy page
├── schedule.json              # Event schedule data
└── terms.html                 # Terms and conditions page
```

---

## 🔄 Updating for Future Events

GRAPHQUON’s codebase is built for easy updates to accommodate future events. To tailor the website for a new event, follow these steps:

1. **Update Content Files**:
   - **Homepage**: Modify `index.html` to reflect the new event's details.
   - **Event Schedule**: Edit `schedule.json` with the latest event schedule and speaker information.
   - **Event Schedule**: Edit `sponsors.json` with the latest sponsors information.

2. **Update Assets**:
   - **Images and Media**: Replace or add new images in the `res/` directory as needed.
   - **3D Models and Textures**: Update or add new models and textures in the `components/background/` directory.

3. **Adjust Styles and Themes**:
   - Modify `index.css` or other relevant CSS files to update the design theme for the new event.

4. **Review Sections**:
   - Ensure all sections in `components/sections/` are up-to-date and relevant to the new event.

5. **Test Locally**:
   - Use the [Local Development](#-local-development) steps to preview changes before deploying.

---

## 💻 Local Development

Developing locally allows you to preview and test changes before making them live. Here's how to set up your local development environment:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/GRAPHQUON/graphquon.github.io.git
   cd graphquon.github.io
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Local Server**:
   ```bash
   npx http-server
   ```
   Or, if installed globally:
   ```bash
   http-server
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:8080` to view the site.

> **Note**: For live reloading and a smoother development experience, consider using the **Live Server** extension in Visual Studio Code.

5. **Make Changes**:
   - Edit HTML, CSS, JavaScript, or JSON files as needed.
   - Save your changes and refresh the browser to see updates in real time.

6. **Lint and Test**:
   - Ensure your code adheres to project standards.
   - Test interactive elements and responsiveness across different devices.

---

## 🚢 Deployment

The site is deployed via **GitHub Pages**, ensuring that any push to the `main` branch automatically redeploys the latest version. Follow these steps to deploy your changes:

1. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

3. **Automatic Deployment**:
   - GitHub Pages will detect the push to the `main` branch.
   - It will automatically build and deploy the latest version of the site.

4. **Verify Deployment**:
   - Visit `https://GRAPHQUON.github.io/graphquon.github.io` to ensure your changes are live.

> **Troubleshooting**:
> - If deployment fails, check the [GitHub Actions](https://github.com/GRAPHQUON/graphquon.github.io/actions) for build logs and error messages.
> - Ensure all dependencies are correctly installed and there are no syntax errors in your code.

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code, provided you include the original license and copyright.

---

## 🤝 Contributing

We welcome contributions from the community! To contribute:

1. **Fork the Repository**:
   - Click the **Fork** button at the top right of the repository page.

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/your-username/graphquon.github.io.git
   cd graphquon.github.io
   ```

3. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**:
   - Implement your feature or bug fix.
   - Ensure your code follows the project's coding standards.

5. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "Add your detailed commit message"
   ```

6. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**:
   - Navigate to your fork on GitHub.
   - Click **Compare & pull request**.
   - Provide a clear description of your changes and submit the pull request.

> **Guidelines**:
> - Ensure your contributions are well-documented.
> - Follow the existing code style and project structure.
> - Test your changes thoroughly before submitting.

---

## 📞 Contact

For any questions, suggestions, or support, feel free to reach out:

- **GitHub Issues**: [Open an Issue](https://github.com/GRAPHQUON/graphquon.github.io/issues)

---

Happy coding and welcome to the world of **GRAPHQUON**!
