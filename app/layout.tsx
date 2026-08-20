import type { Metadata } from "next";
import { Quicksand, Open_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID } from "@/lib/seo";
import "./globals.css";

const GTM_ID = "GTM-TNCWZXNX";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${siteInfo.name} | Carpet & Upholstery Cleaning Services`,
  description:
    "Professional carpet, sofa, rug, and upholstery cleaning using advanced equipment to remove stains, dirt, and allergens effectively.",
};

// NAP (Name, Address, Phone) structured data — kept identical to siteInfo
// everywhere on the site for local SEO / Google Business Profile consistency.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: siteInfo.name,
  legalName: siteInfo.legalName,
  image: `${SITE_URL}/images/logo.png`,
  url: SITE_URL,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/2, 156 Charles St",
    addressLocality: "Glasgow",
    postalCode: "G21 2QH",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "City",
    name: "Glasgow",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${openSans.variable} h-full antialiased`}
    >
      <Script id="local-business-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <body className="min-h-full flex flex-col font-body">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
