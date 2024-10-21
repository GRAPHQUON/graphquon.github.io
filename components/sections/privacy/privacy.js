import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class PrivacyPolicy extends LitElement {
    static styles = css`
    :host {
      position: relative;
      display: block;
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
    }

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }

    section {
      background-color: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      margin: 1.5rem 0;
    }

    h2 {
      font-size: 1.75rem;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.25rem;
      line-height: 1.8;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.25rem;
    }

    ul li {
      margin-bottom: 0.75rem;
      color: #374151;
    }

    a {
      color: #2563eb;
      text-decoration: underline;
    }

    a:hover {
      color: #1d4ed8;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  `;

    render() {
        return html`
      <header>
        <h1>GraphQUON 2024 - Privacy Policy</h1>
      </header>

      <section aria-labelledby="privacy-policy">
        <h2 id="privacy-policy">Privacy Policy</h2>
        <p>
          At GraphQUON 2024, we value your privacy and take it seriously. This Privacy Policy outlines how we collect, use, and protect your information.
        </p>

        <h2>Types of Data Collected</h2>
        <p>
          We collect various types of information to provide and improve our services to you:
        </p>
        <ul>
          <li><strong>Personal Identification Information:</strong> Name, email address, contact details, affiliation, and other registration information.</li>
          <li><strong>Usage Data:</strong> Information on how you interact with our website, registration portal, and event platforms.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, operating system, and device information.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> To enhance user experience and gather usage statistics.</li>
        </ul>

        <h2>Purpose of Data Collection</h2>
        <p>
          We use the collected data for the following purposes:
        </p>
        <ul>
          <li><strong>Event Management:</strong> To facilitate registration, manage attendance, and communicate event-related information.</li>
          <li><strong>Communication:</strong> To send updates, newsletters, and important notifications about GraphQUON 2024.</li>
          <li><strong>Improvement:</strong> To analyze usage patterns and feedback to enhance future events and services.</li>
          <li><strong>Security:</strong> To protect against fraudulent activities and ensure the safety of our participants.</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep this information confidential.</li>
          <li><strong>Legal Requirements:</strong> To comply with legal obligations, respond to lawful requests, or protect our rights and safety.</li>
          <li><strong>Event Partners:</strong> With your consent, we may share your information with sponsors and partners to enhance your event experience.</li>
        </ul>
        <p>
          We ensure that all third parties adhere to strict data protection standards.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
        </p>

        <h2>User Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the following rights regarding your personal data:
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of any inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data under certain conditions.</li>
          <li><strong>Restriction:</strong> Request restriction of processing your data.</li>
          <li><strong>Data Portability:</strong> Request transfer of your data to another service.</li>
          <li><strong>Objection:</strong> Object to the processing of your data under specific circumstances.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the information provided below.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and deliver personalized content. You can manage your cookie preferences through your browser settings.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          GraphQUON 2024 is not directed towards individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information promptly.
        </p>

        <h2>Changes to the Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at <a href="mailto:graphquon@etsmtl.ca">graphquon@etsmtl.ca</a>.
        </p>
      </section>

      <section>
        <h2>References</h2>
        <ul>
          <li><a href="https://gdpr-info.eu/" target="_blank">GDPR Information</a></li>
          <li><a href="https://www.acm.org/privacy-policy" target="_blank">ACM Privacy Policy</a></li>
          <li><a href="https://cscw.acm.org/2020/code-of-conduct/" target="_blank">ACM CSCW 2020 Code of Conduct</a></li>
          <li><a href="https://www.privacypolicies.com/" target="_blank">Privacy Policies Templates</a></li>
        </ul>
      </section>
    `;
    }
}

customElements.define('privacy-policy', PrivacyPolicy);
