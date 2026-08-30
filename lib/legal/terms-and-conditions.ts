import type { LegalContent } from "@/components/legal/LegalPage";
import { siteInfo } from "@/lib/data";

export const termsAndConditions: LegalContent = {
  title: "Terms & Conditions",
  breadcrumbLabel: "Terms & Conditions",
  heroImage: "/images/services/upholstery-cleaning.jpg",
  lastUpdated: "30 August 2026",
  intro: [
    `These Terms & Conditions govern your use of this website and the cleaning services provided by ${siteInfo.name} (trading name of ${siteInfo.legalName}). By using this website or requesting a quote or booking, you agree to these terms.`,
    "Please read this page carefully. If you do not agree with any part of these terms, please contact us before requesting a quote or booking a service.",
  ],
  sections: [
    {
      id: "website-use",
      heading: "1. Website Use",
      blocks: [
        {
          type: "p",
          text: "This website is provided to give you information about our carpet and upholstery cleaning services, and to allow you to request a quote or get in touch with us. You agree to use this website only for lawful purposes and in a way that does not restrict or interfere with anyone else's use of it.",
        },
        {
          type: "p",
          text: "We aim to keep the information on this website accurate and up to date, but we make no guarantee that every detail on the website is complete, accurate, or current at all times. Where anything on this website is unclear, please contact us to confirm details before booking.",
        },
      ],
    },
    {
      id: "quotes-and-bookings",
      heading: "2. Quotes and Bookings",
      blocks: [
        {
          type: "p",
          text: "Any quote provided through this website, by phone, or by WhatsApp is an estimate based on the information you provide to us, and may be subject to change once we have seen the property or item to be cleaned in person.",
        },
        {
          type: "p",
          text: "A booking is only confirmed once we have agreed the details directly with you, such as the date, time, and scope of the service. We reserve the right to decline or reschedule a booking where necessary, for example due to unforeseen circumstances or access issues.",
        },
      ],
    },
    {
      id: "customer-responsibilities",
      heading: "3. Customer Responsibilities",
      blocks: [
        {
          type: "p",
          text: "To help us carry out the service safely and effectively, we ask that you:",
        },
        {
          type: "ul",
          items: [
            "Provide accurate information about the items, carpets, or property to be cleaned",
            "Let us know in advance about any fragile, valuable, delicate, or antique items, or any known issues with the carpet, rug, or upholstery to be cleaned",
            "Remove or secure small valuables, breakables, and personal items from the work area before we arrive, where reasonably possible",
            "Ensure pets and children are kept away from the work area for their safety and to allow our technicians to work effectively",
            "Provide access to water and a power supply where required for the service",
          ],
        },
      ],
    },
    {
      id: "access-to-property",
      heading: "4. Access to the Property",
      blocks: [
        {
          type: "p",
          text: "You are responsible for providing our team with reasonable access to the property and the areas or items to be cleaned at the agreed appointment time. If access cannot be provided and this results in a wasted visit, we reserve the right to charge a reasonable call-out fee to be agreed with you directly, or to reschedule the appointment.",
        },
      ],
    },
    {
      id: "service-limitations",
      heading: "5. Cleaning and Service Limitations",
      blocks: [
        {
          type: "p",
          text: "Our team uses professional equipment and cleaning methods appropriate to the material being cleaned. However, cleaning results can vary depending on factors outside our control, including the age, material, condition, and prior treatment of the carpet, rug, or upholstery.",
        },
        {
          type: "p",
          text: "We are not able to guarantee that every stain, mark, or odour will be completely removed. Some stains — such as old or set-in marks, permanent dyes, sun-bleaching, or damage from previous cleaning attempts — may be reduced but not fully eliminated, or may not respond to cleaning at all. We will always aim to advise you honestly if we believe a stain or mark is unlikely to be fully removable before proceeding.",
        },
      ],
    },
    {
      id: "pricing-and-payment",
      heading: "6. Pricing and Payment",
      blocks: [
        {
          type: "p",
          text: "Prices are provided as free, no-obligation quotes based on the information and access you provide to us. Final pricing will be confirmed with you before work begins. Specific payment methods and terms are not published on this website and will be agreed directly with you at the time of quote or booking.",
        },
      ],
    },
    {
      id: "cancellations",
      heading: "7. Cancellations and Rescheduling",
      blocks: [
        {
          type: "p",
          text: "We do not currently publish a fixed cancellation or rescheduling policy on this website. If you need to cancel or reschedule a booking, please contact us as soon as possible using the details below, and we will do our best to accommodate your request. Any specific cancellation terms for your booking will be agreed with you directly.",
        },
      ],
    },
    {
      id: "damage-and-liability",
      heading: "8. Damage and Liability",
      blocks: [
        {
          type: "p",
          text: "We take reasonable care when carrying out our cleaning services. If you believe an item has been damaged as a direct result of our work, please notify us as soon as possible, and in any event within a reasonable time of the service being carried out, so that we can investigate.",
        },
        {
          type: "p",
          text: "We are not responsible for damage or wear that already existed before our visit, for items that were not disclosed to us as fragile or delicate, or for pre-existing conditions of a carpet, rug, or item of upholstery (such as age-related wear, weakened fibres, or colour fastness issues) that become apparent during or after cleaning.",
        },
        {
          type: "p",
          text: "Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud, or for any other liability that cannot be excluded or limited under UK law.",
        },
      ],
    },
    {
      id: "complaints",
      heading: "9. Complaints",
      blocks: [
        {
          type: "p",
          text: "If you are unhappy with any aspect of our service, please contact us as soon as possible using the details below so that we can look into your concerns and try to resolve them fairly and promptly.",
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "10. Intellectual Property",
      blocks: [
        {
          type: "p",
          text: `All content on this website, including text, images, logos, and design, is owned by or licensed to ${siteInfo.name} unless otherwise stated. You may view and print pages from this website for your own personal, non-commercial use, but you may not reproduce, copy, or distribute any content from this website for commercial purposes without our prior written consent.`,
        },
      ],
    },
    {
      id: "governing-law",
      heading: "11. Governing Law",
      blocks: [
        {
          type: "p",
          text: `These Terms & Conditions are governed by the laws of Scotland, reflecting the location of our business at ${siteInfo.address}. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the Scottish courts.`,
        },
      ],
    },
    {
      id: "changes-to-terms",
      heading: "12. Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated \"Last Updated\" date. Continued use of this website after changes are posted means you accept the updated terms.",
        },
      ],
    },
    {
      id: "contact-us",
      heading: "13. Contact Us",
      blocks: [
        {
          type: "p",
          text: `If you have any questions about these Terms & Conditions, please contact ${siteInfo.name}:`,
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
