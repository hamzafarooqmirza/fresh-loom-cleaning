import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";
import { carpetFaqs } from "@/components/carpet-cleaning/carpetFaqs";
import CarpetHero from "@/components/carpet-cleaning/CarpetHero";
import MoreThanSurface from "@/components/carpet-cleaning/MoreThanSurface";
import CarpetProcess from "@/components/carpet-cleaning/CarpetProcess";
import DeepCleaningSplit from "@/components/carpet-cleaning/DeepCleaningSplit";
import SteamCleaningSection from "@/components/carpet-cleaning/SteamCleaningSection";
import StainCleaningSection from "@/components/carpet-cleaning/StainCleaningSection";
import WoolCarpetSection from "@/components/carpet-cleaning/WoolCarpetSection";
import WhenToConsider from "@/components/carpet-cleaning/WhenToConsider";
import WhyChooseCarpet from "@/components/carpet-cleaning/WhyChooseCarpet";
import CarpetBeforeAfter from "@/components/carpet-cleaning/CarpetBeforeAfter";
import CarpetFaq from "@/components/carpet-cleaning/CarpetFaq";
import CarpetFinalCta from "@/components/carpet-cleaning/CarpetFinalCta";

const description =
  "Professional carpet cleaning that goes beyond the surface — deep cleaning, carpet steam cleaning, stain treatment and wool carpet care, with the method chosen to suit your carpet.";

export const metadata: Metadata = {
  title: "Transform Your Home with Carpet Cleaning Experts",
  description:
    "Need a deep clean? Our professional carpet cleaning ensures a fresh look and feel. Learn more now!",
  alternates: {
    canonical: "/services/carpet-cleaning",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Carpet Cleaning",
  description,
  url: `${SITE_URL}/services/carpet-cleaning`,
  serviceType: "Carpet Cleaning",
  provider: { "@id": BUSINESS_ID },
  areaServed: {
    "@type": "City",
    name: "Glasgow",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: carpetFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Carpet Cleaning", path: "/services/carpet-cleaning" },
]);

export default function CarpetCleaningPage() {
  return (
    <>
      <Script id="carpet-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="carpet-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="carpet-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <CarpetHero />
      <MoreThanSurface />
      <CarpetProcess />
      <DeepCleaningSplit />
      <SteamCleaningSection />
      <StainCleaningSection />
      <WoolCarpetSection />
      <WhenToConsider />
      <WhyChooseCarpet />
      <CarpetBeforeAfter />
      <CarpetFaq />
      <CarpetFinalCta />
    </>
  );
}
