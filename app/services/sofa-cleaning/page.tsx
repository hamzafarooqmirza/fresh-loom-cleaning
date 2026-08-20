import type { Metadata } from "next";
import Script from "next/script";
import { siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";
import { sofaFaqs } from "@/components/sofa-cleaning/sofaFaqs";
import SofaHero from "@/components/sofa-cleaning/SofaHero";
import SofaBuildUp from "@/components/sofa-cleaning/SofaBuildUp";
import SofaProcess from "@/components/sofa-cleaning/SofaProcess";
import DeepSofaCleaningSplit from "@/components/sofa-cleaning/DeepSofaCleaningSplit";
import FabricCareSection from "@/components/sofa-cleaning/FabricCareSection";
import StainsMarksSection from "@/components/sofa-cleaning/StainsMarksSection";
import FurnitureWeClean from "@/components/sofa-cleaning/FurnitureWeClean";
import WhenToCleanSofa from "@/components/sofa-cleaning/WhenToCleanSofa";
import WhyChooseSofa from "@/components/sofa-cleaning/WhyChooseSofa";
import SofaBeforeAfter from "@/components/sofa-cleaning/SofaBeforeAfter";
import SofaFaq from "@/components/sofa-cleaning/SofaFaq";
import SofaFinalCta from "@/components/sofa-cleaning/SofaFinalCta";

const title = `Professional Sofa Cleaning Services | ${siteInfo.name}`;
const description = "Professional sofa cleaning services for fabric sofas, couches and settees, including deep cleaning, stain-focused treatment and fabric-aware care.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/services/sofa-cleaning" } };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Professional Sofa Cleaning", description, url: `${SITE_URL}/services/sofa-cleaning`, serviceType: "Sofa Cleaning Services", provider: { "@id": BUSINESS_ID } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: sofaFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };
const breadcrumbs = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Sofa Cleaning", path: "/services/sofa-cleaning" }]);

export default function SofaCleaningPage() {
  return <>
    <Script id="sofa-service-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(serviceSchema)}</Script>
    <Script id="sofa-faq-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(faqSchema)}</Script>
    <Script id="sofa-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(breadcrumbs)}</Script>
    <SofaHero /><SofaBuildUp /><SofaProcess /><DeepSofaCleaningSplit /><FabricCareSection /><StainsMarksSection /><FurnitureWeClean /><WhenToCleanSofa /><WhyChooseSofa /><SofaBeforeAfter /><SofaFaq /><SofaFinalCta />
  </>;
}
