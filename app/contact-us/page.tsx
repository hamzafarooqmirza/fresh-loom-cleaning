import type { Metadata } from "next";
import Script from "next/script";
import PhotoHero from "@/components/PhotoHero";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactFormSection from "@/components/ContactFormSection";
import { siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";

const description = `Get in touch with ${siteInfo.name} for a free quote on carpet, upholstery, rug, and sofa cleaning across the UK.`;

export const metadata: Metadata = {
  title: `Contact Us | ${siteInfo.name}`,
  description,
  alternates: {
    canonical: "/contact-us",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact Us | ${siteInfo.name}`,
  description,
  url: `${SITE_URL}/contact-us`,
  about: { "@id": BUSINESS_ID },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact-us" },
]);

export default function ContactUsPage() {
  return (
    <>
      <Script id="contact-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(contactPageSchema)}
      </Script>
      <Script id="contact-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <PhotoHero
        title="Contact Us"
        breadcrumbLabel="Contact Us"
        image="/images/services/sofa-cleaning.jpg"
      />
      <ContactInfoCards />
      <ContactFormSection />
    </>
  );
}
