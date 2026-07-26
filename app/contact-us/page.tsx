import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Fresh Loom Cleaning",
  description:
    "Get in touch with Fresh Loom Cleaning for a free quote on carpet, upholstery, rug, and sofa cleaning across the UK.",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero title="Contact Us" breadcrumbLabel="Contact Us" />
      <ContactInfoCards />
      <ContactFormSection />
    </>
  );
}
