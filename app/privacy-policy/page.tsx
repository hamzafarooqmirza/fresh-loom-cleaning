import type { Metadata } from "next";
import Script from "next/script";
import LegalPage from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/lib/legal/privacy-policy";
import { siteInfo } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo";

const description =
  "Read the Privacy Policy for Fresh Loom Carpet Cleaning to understand how we collect, use and protect your information when you visit our website or request a quote.";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteInfo.name}`,
  description,
  alternates: {
    canonical: "/privacy-policy",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
]);

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script id="privacy-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <LegalPage content={privacyPolicy} />
    </>
  );
}
