import type { LegalContent } from "@/components/legal/LegalPage";
import { siteInfo } from "@/lib/data";

export const cookiesPolicy: LegalContent = {
  title: "Cookies Policy",
  breadcrumbLabel: "Cookies Policy",
  heroImage: "/images/services/rug-cleaning.jpg",
  lastUpdated: "30 August 2026",
  intro: [
    `This Cookies Policy explains what cookies are, and which cookies and similar technologies are used on this website by ${siteInfo.name} ("we", "us", "our").`,
    "This policy should be read alongside our Privacy Policy, which explains more generally how we handle your personal information.",
  ],
  sections: [
    {
      id: "what-are-cookies",
      heading: "1. What Are Cookies",
      blocks: [
        {
          type: "p",
          text: "Cookies are small text files that a website can place on your computer, phone, or other device when you visit it. They are widely used to make websites work, or to work more efficiently, as well as to provide information to the owners of a website.",
        },
        {
          type: "p",
          text: "Cookies can be \"session\" cookies, which are deleted when you close your browser, or \"persistent\" cookies, which remain on your device for a set period of time or until you delete them. Cookies can also be set by the website you are visiting (\"first-party\" cookies) or by another website whose content appears on the page you are viewing (\"third-party\" cookies).",
        },
      ],
    },
    {
      id: "essential-cookies",
      heading: "2. Essential Cookies",
      blocks: [
        {
          type: "p",
          text: "Essential cookies are cookies that are strictly necessary for a website to function, such as remembering security settings or keeping a page working correctly as you navigate it.",
        },
        {
          type: "p",
          text: "This website does not set any first-party cookies of its own to store personal information or track your activity. We do not use this website to set essential cookies beyond what your browser handles automatically to load and display the site.",
        },
      ],
    },
    {
      id: "analytics-cookies",
      heading: "3. Analytics Cookies",
      blocks: [
        {
          type: "p",
          text: "We use Google Tag Manager on this website to manage scripts and tags, which may include analytics tools used to help us understand how visitors use our site — for example, which pages are visited and how visitors reach our website. Depending on how it is configured, Google Tag Manager may place cookies on your device as part of this process.",
        },
        {
          type: "p",
          text: "We do not use any other analytics platform on this website beyond Google Tag Manager.",
        },
      ],
    },
    {
      id: "third-party-cookies",
      heading: "4. Third-Party Cookies",
      blocks: [
        {
          type: "p",
          text: "This website embeds a Google Maps view so you can see our business location. When the map loads, Google may set its own cookies in line with its own privacy and cookie policies. We do not control these cookies, and you can find out more by reviewing Google's own policies at policies.google.com/privacy.",
        },
        {
          type: "p",
          text: "Our website also includes a link to contact us via WhatsApp. If you choose to open WhatsApp from this website, any cookies set from that point onward are governed by WhatsApp's own privacy and cookie policies, not this website.",
        },
        {
          type: "p",
          text: "We do not use any advertising, retargeting, or social media tracking cookies on this website.",
        },
      ],
    },
    {
      id: "control-cookies",
      heading: "5. How You Can Control or Delete Cookies",
      blocks: [
        {
          type: "p",
          text: "Most web browsers allow you to control cookies through their settings, including viewing what cookies are stored on your device, deleting them individually or all at once, and blocking cookies from being set in the future.",
        },
        {
          type: "p",
          text: "Because the process for managing cookies varies by browser, we recommend checking your browser's help section for specific instructions. Please note that blocking or deleting some cookies may affect how parts of this or other websites display or function, such as the Google Maps embed on our Contact Us page.",
        },
      ],
    },
    {
      id: "changes-to-policy",
      heading: "6. Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Cookies Policy from time to time, for example if the cookies or third-party services used on this website change. Any changes will be posted on this page with an updated \"Last Updated\" date.",
        },
      ],
    },
    {
      id: "contact-us",
      heading: "7. Contact Us",
      blocks: [
        {
          type: "p",
          text: `If you have any questions about this Cookies Policy, please contact ${siteInfo.name}:`,
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
