import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";
import { odourFaqs } from "@/components/odour-removal/odourFaqs";
import OdourHero from "@/components/odour-removal/OdourHero";
import OdourReturnReasons from "@/components/odour-removal/OdourReturnReasons";
import OdourProcess from "@/components/odour-removal/OdourProcess";
import DeepOdourSplit from "@/components/odour-removal/DeepOdourSplit";
import SourceTreatmentSection from "@/components/odour-removal/SourceTreatmentSection";
import CommonOdoursSection from "@/components/odour-removal/CommonOdoursSection";
import PetOdourSection from "@/components/odour-removal/PetOdourSection";
import WhenToConsiderOdourTreatment from "@/components/odour-removal/WhenToConsiderOdourTreatment";
import WhyChooseOdourRemoval from "@/components/odour-removal/WhyChooseOdourRemoval";
import OdourProjectGallery from "@/components/odour-removal/OdourProjectGallery";
import OdourFaq from "@/components/odour-removal/OdourFaq";
import OdourFinalCta from "@/components/odour-removal/OdourFinalCta";

const description = "Professional odour removal for suitable carpets, rugs, sofas and upholstery, with source-focused treatment and realistic expectations.";
export const metadata: Metadata = { title: "Say Goodbye to Odours With Expert Removal Services", description: "Breathe easy! Professional odour removal gets rid of unwanted smells. Reach out for an assessment today.", alternates: { canonical: "/services/odour-removal" } };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Professional Odour Removal", description, url: `${SITE_URL}/services/odour-removal`, serviceType: "Odour Removal", provider: { "@id": BUSINESS_ID } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: odourFaqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const breadcrumbs = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Odour Removal", path: "/services/odour-removal" }]);

export default function OdourRemovalPage() { return <>
  <Script id="odour-service-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(serviceSchema)}</Script>
  <Script id="odour-faq-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(faqSchema)}</Script>
  <Script id="odour-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(breadcrumbs)}</Script>
  <OdourHero /><OdourReturnReasons /><OdourProcess /><DeepOdourSplit /><SourceTreatmentSection /><CommonOdoursSection /><PetOdourSection /><WhenToConsiderOdourTreatment /><WhyChooseOdourRemoval /><OdourProjectGallery /><OdourFaq /><OdourFinalCta />
</>; }
