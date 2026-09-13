import type { LegalContent } from "@/components/legal/LegalPage";
import { siteInfo } from "@/lib/data";

export const cookiesPolicy: LegalContent = {
  title: "Cookie Policy",
  breadcrumbLabel: "Cookie Policy",
  heroImage: "/images/services/rug-cleaning.jpg",
  lastUpdated: "13 September 2026",
  intro: [
    `This Cookie Policy explains what cookies are, which cookies and similar technologies ${siteInfo.name} ("we", "us", "our") actually uses on this website, and how you can control them.`,
    "This policy has been written with UK GDPR and the Privacy and Electronic Communications Regulations (PECR) in mind, and should be read alongside our Privacy Policy, which explains more generally how we handle your personal information.",
    "It describes our current cookie and consent practices in good faith. It is not a substitute for independent legal advice, and does not itself guarantee compliance with every requirement that may apply to this business — see the note in the \"How Consent Works\" section below.",
  ],
  sections: [
    {
      id: "what-are-cookies",
      heading: "1. What Are Cookies",
      blocks: [
        {
          type: "p",
          text: "Cookies are small text files that a website can place on your computer, phone, or other device when you visit it. Similar technologies, such as data stored in your browser's local storage, work in much the same way. They are widely used to make websites work, to work more efficiently, or to provide information to the owners of a website.",
        },
        {
          type: "p",
          text: "Cookies can be \"session\" cookies, which are deleted when you close your browser, or \"persistent\" cookies, which remain on your device for a set period of time or until you delete them. They can also be set by the website you are visiting (\"first-party\") or by another website whose content appears on the page you are viewing (\"third-party\").",
        },
      ],
    },
    {
      id: "how-we-use-cookies",
      heading: "2. How Fresh Loom Uses Cookies",
      blocks: [
        {
          type: "p",
          text: "We keep our use of cookies as limited as possible. This website does not use cookies for advertising or marketing purposes, and we do not sell or share cookie data with third parties for their own marketing use.",
        },
        {
          type: "p",
          text: "When you first visit this website, you'll see a cookie banner asking you to accept all cookies, reject non-essential cookies, or choose your own settings. Non-essential cookies and related scripts are not activated until you give your permission — nothing beyond what's strictly necessary runs before you make a choice.",
        },
      ],
    },
    {
      id: "categories-used",
      heading: "3. Cookie Categories We Use",
      blocks: [
        { type: "h3", text: "Strictly Necessary (always active)" },
        {
          type: "p",
          text: "These are required for the site to work and to remember your cookie choice. They don't require consent under PECR because the site can't function as intended without them, and they aren't used to track you.",
        },
        {
          type: "ul",
          items: [
            "Cookie consent preference — stores whether you've accepted, rejected, or customised optional cookies, so we don't ask you again on every visit.",
          ],
        },
        { type: "h3", text: "Analytics (optional — off until you consent)" },
        {
          type: "p",
          text: "We use Google Tag Manager to manage scripts on this site, which may include analytics tools to help us understand how visitors use it — for example, which pages are visited and how visitors reach the site. The Google Tag Manager script itself is not loaded until you switch this category on, so no analytics cookies are set beforehand.",
        },
        { type: "h3", text: "Functional — Embedded Maps (optional — off until you consent)" },
        {
          type: "p",
          text: "We embed a Google Map on our Home, About Us and Contact Us pages so you can see our location. The map is only loaded once you consent to this category (or click \"Show Map\" directly on the page, which counts as your consent for that feature). Once loaded, Google may set its own cookies as part of how the map works.",
        },
      ],
    },
    {
      id: "necessary-vs-optional",
      heading: "4. Necessary vs Optional Cookies",
      blocks: [
        {
          type: "p",
          text: "Strictly necessary cookies do not require your consent and cannot be switched off, since the site relies on them to function and to remember your cookie choice. Analytics and Functional (Maps) cookies are optional: they are switched off by default and only activate once you choose to allow them, either via the cookie banner, the Cookie Settings panel, or (for the map) the on-page \"Show Map\" button.",
        },
      ],
    },
    {
      id: "third-party-services",
      heading: "5. Third-Party Services We Use",
      blocks: [
        {
          type: "p",
          text: "We use a small number of third-party services on this website. We do not control the cookies these services set, and their exact cookie names and durations are set by the provider and may change — see their own policies for full detail.",
        },
        { type: "h3", text: "Google Tag Manager (Analytics category)" },
        {
          type: "p",
          text: "Provided by Google. Manages scripts on this site, which may include analytics tools. Loaded only after you consent to Analytics cookies. See Google's Privacy Policy at policies.google.com/privacy.",
        },
        { type: "h3", text: "Google Maps (Functional category)" },
        {
          type: "p",
          text: "Provided by Google. Used to embed our location on the Home, About Us and Contact Us pages. Loaded only after you consent to Functional cookies, or click \"Show Map\" directly. See Google's Privacy Policy at policies.google.com/privacy.",
        },
        { type: "h3", text: "WhatsApp" },
        {
          type: "p",
          text: "Our website includes links and a quote form that open WhatsApp so you can message us. WhatsApp is only opened if you choose to click through to it, and any cookies set from that point are governed by WhatsApp's own privacy and cookie policies, not this website.",
        },
        {
          type: "p",
          text: "We do not use any advertising, retargeting, or social media tracking cookies on this website.",
        },
      ],
    },
    {
      id: "cookie-duration",
      heading: "6. Cookie Duration and Retention",
      blocks: [
        {
          type: "p",
          text: "Your cookie consent preference is stored in your browser's local storage. It does not have a fixed expiry date — it remains until you change your choice via Cookie Settings, or clear your browser's site data.",
        },
        {
          type: "p",
          text: "Cookies set by Google Tag Manager or Google Maps, if you allow them, have durations set by Google rather than by us. We don't control or publish these directly — please refer to Google's own cookie information for current details.",
        },
      ],
    },
    {
      id: "how-consent-works",
      heading: "7. How Consent Works",
      blocks: [
        {
          type: "p",
          text: "On your first visit, a cookie banner lets you Accept All, Reject Non-Essential, or open Cookie Settings to choose individually per category. Rejecting is just as straightforward as accepting — both options are given equal, one-click prominence, and no optional category is switched on by default or pre-selected for you.",
        },
        {
          type: "p",
          text: "This consent system and this policy have been implemented with UK GDPR and PECR principles in mind, based on the cookies and third-party services this website actually uses. This does not amount to a guarantee of complete legal compliance for every circumstance — Fresh Loom Carpet Cleaning should seek independent legal confirmation that this implementation fully meets its specific obligations.",
        },
      ],
    },
    {
      id: "reject-or-change",
      heading: "8. How to Reject or Change Your Preferences",
      blocks: [
        {
          type: "p",
          text: "You can change your mind at any time. Click \"Cookie Settings\" in the footer of any page to reopen the preferences panel, review what each category does, and switch Analytics or Functional (Maps) cookies on or off. Your updated choice is saved immediately and applies straight away — for example, switching off Analytics stops Google Tag Manager from loading on your next page view.",
        },
      ],
    },
    {
      id: "browser-controls",
      heading: "9. Managing Cookies in Your Browser",
      blocks: [
        {
          type: "p",
          text: "Most web browsers also let you control cookies directly, including viewing what's stored on your device, deleting cookies individually or all at once, and blocking cookies from being set in future. Since this varies by browser, check your browser's help section for exact steps, or see general guidance at aboutcookies.org.",
        },
        {
          type: "p",
          text: "Please note that blocking all cookies at the browser level, including strictly necessary ones, means this site won't be able to remember your cookie choice, and the banner may reappear on every visit.",
        },
      ],
    },
    {
      id: "changes-to-policy",
      heading: "10. Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Cookie Policy from time to time, for example if the cookies or third-party services used on this website change. Any changes will be posted on this page with an updated \"Last Updated\" date. If we make a material change to the categories or how they work, we may ask for your consent again.",
        },
      ],
    },
    {
      id: "privacy-policy-link",
      heading: "11. Our Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "For more general information on how we collect, use and protect your personal information, please see our Privacy Policy.",
        },
      ],
    },
    {
      id: "contact-us",
      heading: "12. Contact Us",
      blocks: [
        {
          type: "p",
          text: `If you have any questions about this Cookie Policy, please contact ${siteInfo.name}:`,
        },
        {
          type: "ul",
          items: [
            `Phone: ${siteInfo.phone}`,
            `Email: ${siteInfo.email}`,
            `Address: ${siteInfo.address}`,
          ],
        },
      ],
    },
  ],
};
