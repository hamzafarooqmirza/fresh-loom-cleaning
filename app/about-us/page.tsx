import type { Metadata } from "next";
import Script from "next/script";
import AboutHero from "@/components/AboutHero";
import TrustedExperts from "@/components/TrustedExperts";
import VisionMission from "@/components/VisionMission";
import AboutIntro from "@/components/AboutIntro";
import CtaBanner from "@/components/CtaBanner";
import { siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";

const description = `${siteInfo.name} provides professional cleaning services designed to restore cleanliness, freshness, and comfort to homes and businesses across the UK.`;

export const metadata: Metadata = {
  title: `About Us | ${siteInfo.name}`,
  description,
  alternates: {
    canonical: "/about-us",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About Us | ${siteInfo.name}`,
  description,
  url: `${SITE_URL}/about-us`,
  about: { "@id": BUSINESS_ID },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
]);

export default function AboutUsPage() {
  return (
    <>
      <Script id="about-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(aboutPageSchema)}
      </Script>
      <Script id="about-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <AboutHero />
      <TrustedExperts />
      <VisionMission />
      <AboutIntro />
      <CtaBanner />
    </>
  );
}
