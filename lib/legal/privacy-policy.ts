import type { LegalContent } from "@/components/legal/LegalPage";
import { siteInfo } from "@/lib/data";

export const privacyPolicy: LegalContent = {
  title: "Privacy Policy",
  breadcrumbLabel: "Privacy Policy",
  heroImage: "/images/services/carpet-cleaning.jpg",
  lastUpdated: "30 August 2026",
  intro: [
    `This Privacy Policy explains how ${siteInfo.name} ("we", "us", "our") collects, uses, and protects your personal information when you visit this website or contact us about our cleaning services.`,
    "We are committed to handling your information responsibly and in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Please read this policy carefully to understand our practices.",
  ],
  sections: [
    {
      id: "who-we-are",
      heading: "1. Who We Are",
      blocks: [
        {
          type: "p",
          text: `This website is operated by ${siteInfo.name} (trading name of ${siteInfo.legalName}), a carpet and upholstery cleaning business based at ${siteInfo.address}.`,
        },
        {
          type: "p",
          text: `You can contact us by phone on ${siteInfo.phone} or by email at ${siteInfo.email}.`,
        },
      ],
    },
    {
      id: "information-we-collect",
      heading: "2. Information We Collect",
      blocks: [
        {
          type: "p",
          text: "We only collect personal information that you choose to give us. We do not require you to create an account, and we do not collect payment card details through this website.",
        },
        { type: "h3", text: "Contact and Quote Request Forms" },
        {
          type: "p",
          text: "When you use the quote request form on our Contact Us page, we ask for your name, email address, phone number, the services you are interested in, and any message you would like to add. This information is used to prepare and send you a WhatsApp message pre-filled with your enquiry details, which you then choose to send to us from your own device.",
        },
        { type: "h3", text: "Direct Contact" },
        {
          type: "p",
          text: "If you contact us directly by phone, WhatsApp, or email, we will collect whatever information you provide during that conversation, such as your name, contact details, and details about the cleaning service you need.",
        },
        { type: "h3", text: "Newsletter Sign-Up" },
        {
          type: "p",
          text: "Our website footer includes an email sign-up field for occasional updates about our services. If you submit your email address here, it is used solely for the purpose of keeping you informed about our services, and you may ask us to stop contacting you at any time.",
        },
        { type: "h3", text: "Automatically Collected Information" },
        {
          type: "p",
          text: "Like most websites, general technical information (such as browser type, device type, and pages visited) may be collected automatically through the analytics tools described in the Cookies and Analytics section below.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      heading: "3. How We Use Your Information",
      blocks: [
        {
          type: "ul",
          items: [
            "To respond to your enquiries and provide quotes for our cleaning services",
            "To arrange and carry out booked cleaning services",
            "To communicate with you about your enquiry or booking, including by phone, email, or WhatsApp",
            "To send occasional updates about our services, where you have signed up to receive them",
            "To understand how visitors use our website, so we can maintain and improve it",
            "To comply with our legal obligations",
          ],
        },
      ],
    },
    {
      id: "legal-basis",
      heading: "4. Legal Basis for Processing (UK GDPR)",
      blocks: [
        {
          type: "p",
          text: "Where the UK GDPR applies, we rely on the following legal bases to process your personal information:",
        },
        {
          type: "ul",
          items: [
            "Consent — where you submit a form, request a quote, or sign up for updates, you are giving us your consent to use your details for that purpose",
            "Legitimate interests — for general website analytics and to help us understand and improve how our website is used",
            "Contract / steps prior to entering a contract — to respond to quote requests and arrange cleaning services you have asked us to carry out",
          ],
        },
        {
          type: "p",
          text: "You can withdraw your consent at any time by contacting us using the details at the bottom of this page.",
        },
      ],
    },
    {
      id: "cookies-analytics",
      heading: "5. Cookies and Analytics",
      blocks: [
        {
          type: "p",
          text: "This website does not use its own cookies to store personal information about you. The following third-party technologies used on this website may set cookies or use similar technologies as part of their normal operation:",
        },
        { type: "h3", text: "Google Tag Manager" },
        {
          type: "p",
          text: "We use Google Tag Manager to manage scripts and tags on our website, which may include analytics tools used to understand how visitors interact with our site. Depending on how it is configured, Google Tag Manager may place cookies on your device. This helps us see which pages are popular and how visitors reach our site, so we can improve it over time.",
        },
        { type: "h3", text: "Google Maps" },
        {
          type: "p",
          text: "We embed a Google Maps view on our website so you can see our location. When the map loads, Google may set its own cookies in line with its own privacy policy.",
        },
        {
          type: "p",
          text: "You can control or disable cookies through your browser settings at any time. For more information about how Google collects and uses data through these services, please see Google's own Privacy Policy at policies.google.com/privacy.",
        },
      ],
    },
    {
      id: "third-party-services",
      heading: "6. Third-Party Services We Use",
      blocks: [
        {
          type: "p",
          text: "We use a small number of trusted third-party services to run this website and communicate with you. We do not sell your personal information to any third party.",
        },
        {
          type: "ul",
          items: [
            "Google Tag Manager and Google Maps, provided by Google, as described above",
            "WhatsApp, provided by WhatsApp Ireland Limited (part of Meta), which we use to receive quote requests and messages you choose to send us. Messages sent via WhatsApp are subject to WhatsApp's own privacy policy and terms",
          ],
        },
        {
          type: "p",
          text: "We do not use any other analytics, advertising, or marketing platforms on this website beyond those listed above.",
        },
      ],
    },
    {
      id: "data-retention",
      heading: "7. Data Retention",
      blocks: [
        {
          type: "p",
          text: "We keep personal information you send us, such as enquiry or booking details, for as long as reasonably necessary to respond to your enquiry, provide our services, and meet any legal or accounting obligations. Where information is no longer needed for these purposes, we will take reasonable steps to delete or securely dispose of it.",
        },
      ],
    },
    {
      id: "data-security",
      heading: "8. Data Security",
      blocks: [
        {
          type: "p",
          text: "We take reasonable technical and organisational steps to protect the personal information you share with us from unauthorised access, loss, misuse, or alteration. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security of information sent to us online.",
        },
      ],
    },
    {
      id: "your-rights",
      heading: "9. Your Rights Under UK GDPR",
      blocks: [
        {
          type: "p",
          text: "Under UK data protection law, you have the following rights in relation to your personal information:",
        },
        {
          type: "ul",
          items: [
            "The right to be informed about how your data is used",
            "The right to access the personal information we hold about you",
            "The right to have inaccurate information corrected",
            "The right to have your information deleted in certain circumstances",
            "The right to restrict or object to certain processing of your information",
            "The right to data portability, where applicable",
            "The right to withdraw consent at any time, where processing is based on consent",
          ],
        },
        {
          type: "p",
          text: "To exercise any of these rights, please contact us using the details below. If you are unhappy with how we have handled your personal information, you also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's independent authority for data protection, at ico.org.uk.",
        },
      ],
    },
    {
      id: "changes-to-policy",
      heading: "10. Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time to reflect changes in our website or legal requirements. Any changes will be posted on this page with an updated \"Last Updated\" date.",
        },
      ],
    },
    {
      id: "contact-us",
      heading: "11. Contact Us",
      blocks: [
        {
          type: "p",
          text: `If you have any questions about this Privacy Policy or how we handle your personal information, please contact ${siteInfo.name}:`,
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
