import type { Metadata } from "next";
import Script from "next/script";
import { siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";
import { rugFaqs } from "@/components/rug-cleaning/rugFaqs";
import RugHero from "@/components/rug-cleaning/RugHero";
import RugSpecialAttention from "@/components/rug-cleaning/RugSpecialAttention";
import RugProcess from "@/components/rug-cleaning/RugProcess";
import DeepRugSplit from "@/components/rug-cleaning/DeepRugSplit";
import RugMethodSection from "@/components/rug-cleaning/RugMethodSection";
import RugStainsSection from "@/components/rug-cleaning/RugStainsSection";
import WoolAreaRugSection from "@/components/rug-cleaning/WoolAreaRugSection";
import WhenToCleanRug from "@/components/rug-cleaning/WhenToCleanRug";
import WhyChooseRug from "@/components/rug-cleaning/WhyChooseRug";
import RugBeforeAfter from "@/components/rug-cleaning/RugBeforeAfter";
import RugFaq from "@/components/rug-cleaning/RugFaq";
import RugFinalCta from "@/components/rug-cleaning/RugFinalCta";

const title = `Professional Rug Cleaning | ${siteInfo.name}`;
const description =
  "Professional rug cleaning with an approach based on the rug's material and condition — deep rug cleaning, wool rug care, spot treatment and area rug cleaning.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services/rug-cleaning",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Rug Cleaning",
  description,
  url: `${SITE_URL}/services/rug-cleaning`,
  serviceType: "Rug Cleaning",
  provider: { "@id": BUSINESS_ID },
  areaServed: {
    "@type": "City",
    name: "Glasgow",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: rugFaqs.map((faq) => ({
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
  { name: "Rug Cleaning", path: "/services/rug-cleaning" },
]);

export default function RugCleaningPage() {
  return (
    <>
      <Script id="rug-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="rug-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="rug-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <RugHero />
      <RugSpecialAttention />
      <RugProcess />
      <DeepRugSplit />
      <RugMethodSection />
      <RugStainsSection />
      <WoolAreaRugSection />
      <WhenToCleanRug />
      <WhyChooseRug />
      <RugBeforeAfter />
      <RugFaq />
      <RugFinalCta />
    </>
  );
}
