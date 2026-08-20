import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { allServices, serviceDetails, sharedFaqs, siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";
import PhotoHero from "@/components/PhotoHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import Process from "@/components/Process";
import ServiceFaq from "@/components/ServiceFaq";
import UkServicesBlurb from "@/components/UkServicesBlurb";
import CtaBanner from "@/components/CtaBanner";

// "carpet-cleaning", "upholstery-cleaning" and "rug-cleaning" have their
// own dedicated routes (app/services/<slug>), so they're excluded here
// to avoid two routes resolving to the same path.
const DEDICATED_SLUGS = ["carpet-cleaning", "upholstery-cleaning", "rug-cleaning"];

export function generateStaticParams() {
  return allServices
    .filter((s) => !DEDICATED_SLUGS.includes(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${siteInfo.name}`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (DEDICATED_SLUGS.includes(slug)) notFound();
  const service = allServices.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const faqs = [...detail.faq, ...sharedFaqs];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${slug}`,
    serviceType: service.title,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: "Glasgow",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
    { name: service.title, path: `/services/${slug}` },
  ]);

  return (
    <>
      <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="service-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="service-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <PhotoHero title={service.title} image={service.image} />

      <section className="py-16 lg:py-24">
        <div className="container-page grid lg:grid-cols-[300px_1fr] gap-12">
          <ServiceSidebar activeSlug={slug} />
          <ServiceDetailContent
            title={service.title}
            image={service.image}
            intro={detail.intro}
            included={detail.included}
          />
        </div>
      </section>

      <Process variant="accent" title="How It Works?" />
      <ServiceFaq faqs={faqs} image={service.image} />
      <UkServicesBlurb />
      <CtaBanner />
    </>
  );
}
