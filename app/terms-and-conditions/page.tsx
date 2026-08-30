import type { Metadata } from "next";
import Script from "next/script";
import LegalPage from "@/components/legal/LegalPage";
import { termsAndConditions } from "@/lib/legal/terms-and-conditions";
import { siteInfo } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo";

const description =
  "Read the Terms & Conditions for Fresh Loom Carpet Cleaning, covering website use, quotes and bookings, service limitations, liability and more.";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteInfo.name}`,
  description,
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
]);

export default function TermsAndConditionsPage() {
  return (
    <>
      <Script id="terms-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <LegalPage content={termsAndConditions} />
    </>
  );
}
