import type { Metadata } from "next";
import Script from "next/script";
import LegalPage from "@/components/legal/LegalPage";
import { cookiesPolicy } from "@/lib/legal/cookies-policy";
import { siteInfo } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo";

const description =
  "Read the Cookie Policy for Fresh Loom Carpet Cleaning to understand what cookies and similar technologies are used on this website, and how to manage your preferences.";

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteInfo.name}`,
  description,
  alternates: {
    canonical: "/cookies-policy",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Cookie Policy", path: "/cookies-policy" },
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
