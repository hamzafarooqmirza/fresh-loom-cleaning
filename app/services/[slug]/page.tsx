import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServices, serviceDetails, sharedFaqs } from "@/lib/data";
import PhotoHero from "@/components/PhotoHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import Process from "@/components/Process";
import ServiceFaq from "@/components/ServiceFaq";
import UkServicesBlurb from "@/components/UkServicesBlurb";
import CtaBanner from "@/components/CtaBanner";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
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
    title: `${service.title} | Fresh Loom Cleaning`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const faqs = [...detail.faq, ...sharedFaqs];

  return (
    <>
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
