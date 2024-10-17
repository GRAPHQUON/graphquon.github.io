import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';

class TermsOfServiceETS extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #f7fafc;
      color: #111827;
      font-family: Arial, sans-serif;
    }

    header {
      background-color: #1f2937;
      color: white;
      text-align: center;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 2.75rem;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin: 0;
    }

    .container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: white;
      border-radius: 0.75rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    h2 {
      font-size: 1.875rem;
      font-weight: bold;
      margin-bottom: 1.25rem;
      color: #1f2937;
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.75;
      font-size: 1.125rem;
      color: #374151;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.25rem;
      margin-top: 1.25rem;
      color: #374151;
    }

    ul li {
      margin-bottom: 0.75rem;
    }

    a {
      color: #1f2937;
      text-decoration: underline;
    }

    a:hover {
      text-decoration: none;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.25rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      .container {
        padding: 1.5rem;
      }
    }
  `;

  render() {
    return html`
      <header>
        <h1>GraphQUON 2024 at ETS - Terms of Service</h1>
      </header>

      <div class="container">
        <section aria-labelledby="terms-of-service">
          <h2 id="terms-of-service">Terms of Service</h2>
          <p>
            These Terms of Service govern your participation in the GraphQUON 2024 event at ETS. By registering and attending the event, you agree to comply with these terms.
          </p>

          <h2>Event Participation</h2>
          <p>
            You are required to provide accurate information during registration and to adhere to the event’s Code of Conduct. Disruptive behavior or harassment will result in removal from the event.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All materials presented at the event are the intellectual property of their respective authors. Unauthorized reproduction or distribution is prohibited. Participants are encouraged to share ideas and collaborate, but must respect the ownership of presented content.
          </p>

          <h2>Privacy</h2>
          <p>
            We respect your privacy. Personal information collected during registration will be used solely for event-related purposes and will not be shared with third parties without your consent. Please refer to our <a href="/privacy-policy" target="_blank">Privacy Policy</a> for more details.
          </p>

          <h2>Liability</h2>
          <p>
            GraphQUON 2024 at ETS is not liable for any damages or losses incurred during the event. Participation is at your own risk. We recommend that attendees secure their personal belongings and follow safety guidelines provided during the event.
          </p>

          <h2>Code of Conduct</h2>
          <p>
            By participating in GraphQUON 2024 at ETS, you agree to abide by our <a href="/code-of-conduct" target="_blank">Code of Conduct</a>. We are committed to providing a harassment-free experience for everyone.
          </p>

          <h2>Harassment Policy</h2>
          <p>
            We are dedicated to providing a harassment-free experience for all participants. Harassment includes, but is not limited to:
          </p>
          <ul>
            <li>Comments that target other participants based on characteristics such as gender, gender identity and expression, sexual orientation, race, ethnicity, age, ability, status, physical appearance, body size, or religion.</li>
            <li>Deliberate intimidation, stalking, or following.</li>
            <li>Unwelcome personal attention.</li>
            <li>Persistent, unwanted attempts to contact another group member.</li>
            <li>Advocating for, or encouraging, any of the above behavior.</li>
          </ul>
          <p>
            Participants violating these rules may be removed from the event without a refund and may be banned from future events.
          </p>

          <h2>Moderation Guidelines</h2>
          <p>
            Participants are encouraged to work out disagreements or misunderstandings amongst themselves first. If asking for clarification or letting someone know their comment might cause unintended harm does not work, then please let an organizational team member know.
          </p>
          <p>
            Comments, posts, and general discussions identified by the organizational team member as harassment will be removed. We trust everyone in the community to conduct themselves in a professional manner. However, we have these guidelines in place to ensure we have a plan rather than be caught without one.
          </p>

          <h2>Consequences</h2>
          <p>
            Consequences for violating the Code of Conduct will be escalated as follows:
          </p>
          <ul>
            <li><strong>Level 1:</strong> First-time offending posts or comments will be removed if possible or not approved if applicable.</li>
            <li><strong>Level 2:</strong> Continued violations will result in private contact by an organizational team member to explain the infraction and remind the participant of the consequences.</li>
            <li><strong>Level 3:</strong> Further violations will lead to a ban from GraphQUON 2024 at ETS spaces (e.g., Zoom, Discord). Their identity and infractions will be reported to the organizers.</li>
            <li>If a first-time offense is severe, the organizational team reserves the right to ban the attendee outright.</li>
          </ul>

          <h2>References</h2>
          <ul>
            <li><a href="https://queerinhci.wordpress.com/code-of-conduct/" target="_blank">Queer in HCI Code of Conduct</a></li>
            <li><a href="https://www.acm.org/special-interest-groups/volunteer-resources/officers-manual/policy-against-discrimination-and-harassment" target="_blank">ACM Policy Against Discrimination and Harassment</a></li>
            <li><a href="https://cscw.acm.org/2020/code-of-conduct/" target="_blank">ACM CSCW 2020 Code of Conduct</a></li>
            <li>SGP 2021 Code of Conduct</li>
          </ul>

          <h2>Amendments</h2>
          <p>
            GraphQUON 2024 at ETS reserves the right to modify these Terms of Service at any time. Any changes will be communicated to registered participants via email.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to terminate your participation in the event without refund if you violate these Terms of Service or the Code of Conduct.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms of Service, please contact us at <a href="mailto:graphquon@etsmtl.ca">graphquon@etsmtl.ca</a>.
          </p>
        </section>
      </div>
    `;
  }
}

customElements.define('terms-of-service-ets', TermsOfServiceETS);
