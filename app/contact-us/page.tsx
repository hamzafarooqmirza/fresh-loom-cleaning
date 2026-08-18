import type { Metadata } from "next";
import PhotoHero from "@/components/PhotoHero";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactFormSection from "@/components/ContactFormSection";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact Us | ${siteInfo.name}`,
  description: `Get in touch with ${siteInfo.name} for a free quote on carpet, upholstery, rug, and sofa cleaning across the UK.`,
};

export default function ContactUsPage() {
  return (
    <>
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
