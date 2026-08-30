import type { Metadata } from "next";
import Script from "next/script";
import LegalPage from "@/components/legal/LegalPage";
import { cookiesPolicy } from "@/lib/legal/cookies-policy";
import { siteInfo } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo";

const description =
  "Read the Cookies Policy for Fresh Loom Carpet Cleaning to understand what cookies and similar technologies are used on this website.";

export const metadata: Metadata = {
  title: `Cookies Policy | ${siteInfo.name}`,
  description,
  alternates: {
    canonical: "/cookies-policy",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Cookies Policy", path: "/cookies-policy" },
]);

export default function CookiesPolicyPage() {
  return (
    <>
      <Script id="cookies-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <LegalPage content={cookiesPolicy} />
    </>
  );
}
