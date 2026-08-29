import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  Check,
  ClipboardCheck,
  SprayCan,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { allServices, siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Get in Touch",
    description: "Tell us what needs cleaning and a little about the property so we know what to expect.",
  },
  {
    icon: MapPin,
    title: "We Assess the Job",
    description: "We consider the flooring or furniture, its condition and any areas that need particular attention.",
  },
  {
    icon: SprayCan,
    title: "Professional Cleaning",
    description: "Our team carries out the clean using an approach suited to the material and its condition.",
  },
  {
    icon: CheckCircle2,
    title: "Final Check",
    description: "We review the finished work and give you simple guidance on drying and aftercare.",
  },
];

export type LocationContent = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroH1: string;
  heroParagraphs: string[];
  heroTrustPoints: string[];
  heroImage: string;
  heroImageAlt: string;
  introHeading: string;
  introParagraphs: string[];
  carpetHeading: string;
  carpetParagraphs: string[];
  carpetImage: string;
  carpetImageAlt: string;
  localNeedsHeading: string;
  localNeedsIntro: string;
  localNeedsPoints: { title: string; description: string }[];
  processHeading: string;
  processIntro: string;
  nearbyHeading: string;
  nearbyIntro: string;
  nearbyAreas: string[];
  whyChooseHeading: string;
  whyChooseParagraphs: string[];
  galleryHeading: string;
  galleryIntro: string;
  galleryImages: { title: string; image: string }[];
  faqs: { q: string; a: string }[];
  finalCtaEyebrow: string;
  finalCtaHeading: string;
  finalCtaParagraph: string;
};

export default function LocationPage({ content }: { content: LocationContent }) {
  const url = `${SITE_URL}/areas/${content.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Carpet Cleaning ${content.city}`,
    description: content.metaDescription,
    url,
    serviceType: "Carpet Cleaning",
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: content.city,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
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
    { name: content.city, path: `/areas/${content.slug}` },
  ]);

  return (
    <>
      <Script id={`area-service-schema-${content.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id={`area-faq-schema-${content.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id={`area-breadcrumb-schema-${content.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-cream border-b border-black/5">
        <div className="container-page py-3 text-sm text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-navy-dark font-medium">{content.city}</span>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <div>
            <span className="eyebrow mb-4 animate-fade-up">
              <MapPin size={16} /> {content.heroEyebrow}
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              {content.heroH1}
            </h1>
            <div
              className="space-y-4 text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {content.heroParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/contact-us" className="btn-navy">
                Get a Free Quote <ArrowUpRight size={18} />
              </Link>
              <a href={siteInfo.phoneHref} className="btn-navy-outline">
                <Phone size={16} /> Call {siteInfo.phone}
              </a>
            </div>
            <div
              className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {content.heroTrustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-accent" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={content.heroImage}
              alt={content.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Local introduction */}
      <section className="py-16 lg:py-24">
        <Reveal className="container-page max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            {content.introHeading}
          </h2>
          <div className="space-y-4 text-slate-600">
            {content.introParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3. Carpet Cleaning */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={content.carpetImage}
                alt={content.carpetImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
              {content.carpetHeading}
            </h2>
            <div className="space-y-4 text-slate-600 mb-8">
              {content.carpetParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link href="/services/carpet-cleaning" className="btn-accent">
              Explore Carpet Cleaning <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Cleaning Services grid */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
              Cleaning Services in {content.city}
            </h2>
            <p className="text-slate-600">
              Alongside carpet cleaning, we provide a range of professional cleaning services for
              homes and businesses in {content.city}.
            </p>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between h-full bg-white rounded-2xl border border-black/5 shadow-sm p-6 hover:border-navy transition-colors"
                >
                  <span className="font-bold text-navy-dark">{service.title}</span>
                  <ArrowUpRight size={18} className="text-accent shrink-0" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. Locally relevant cleaning needs */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-page">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
              {content.localNeedsHeading}
            </h2>
            <p className="text-slate-600">{content.localNeedsIntro}</p>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {content.localNeedsPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-7">
                  <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-5">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 6. How the service works */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
              {content.processHeading}
            </h2>
            <p className="text-slate-600">{content.processIntro}</p>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-6 relative">
                  <span className="text-4xl font-extrabold text-navy/10 block mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center mb-4 -mt-2">
                    <step.icon size={20} />
                  </div>
                  <h3 className="font-bold text-navy-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 7. Nearby areas */}
      <section className="py-16 lg:py-24 bg-navy-dark">
        <Reveal className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {content.nearbyHeading}
          </h2>
          <p className="text-white/70 mb-8">{content.nearbyIntro}</p>
          <div className="flex flex-wrap gap-3">
            {content.nearbyAreas.map((area) => (
              <span
                key={area}
                className="text-sm font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 8. Why Choose Fresh Loom */}
      <section className="py-16 lg:py-24">
        <Reveal className="container-page max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            {content.whyChooseHeading}
          </h2>
          <div className="space-y-4 text-slate-600">
            {content.whyChooseParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 9. Related services / internal links */}
      <section className="py-16 lg:py-24 bg-light">
        <Reveal className="container-page max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark mb-6">
            Related Cleaning Services
          </h2>
          <p className="text-slate-600 mb-6">
            Explore more of our professional cleaning services, including{" "}
            <Link href="/services/upholstery-cleaning" className="text-accent-dark font-semibold hover:underline">
              upholstery cleaning
            </Link>
            ,{" "}
            <Link href="/services/sofa-cleaning" className="text-accent-dark font-semibold hover:underline">
              sofa cleaning
            </Link>
            ,{" "}
            <Link href="/services/rug-cleaning" className="text-accent-dark font-semibold hover:underline">
              rug cleaning
            </Link>{" "}
            and{" "}
            <Link href="/services/stain-removal" className="text-accent-dark font-semibold hover:underline">
              stain removal
            </Link>
            .
          </p>
          <Link href="/services" className="btn-outline">
            View All Services <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </section>

      {/* 10. Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
              {content.galleryHeading}
            </h2>
            <p className="text-slate-600">{content.galleryIntro}</p>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 gap-8">
            {content.galleryImages.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-white">
                  <div className="relative w-full aspect-[2/1]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="py-4 text-center font-heading font-bold text-navy-dark">
                    {item.title}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 11. FAQs */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-page max-w-3xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
              Carpet Cleaning {content.city} FAQs
            </h2>
          </Reveal>

          <div className="space-y-3">
            {content.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl bg-white p-5">
                <p className="font-semibold text-navy-dark mb-2">{faq.q}</p>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
        <Image
          src={content.heroImage}
          alt={content.heroImageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy-dark/80 to-navy-dark/95" />

        <Reveal className="container-page relative text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wide text-accent mb-3 block">
            {content.finalCtaEyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {content.finalCtaHeading}
          </h2>
          <p className="text-white/80 mb-8">{content.finalCtaParagraph}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link href="/contact-us" className="btn-accent">
              Get a Free Quote <ArrowUpRight size={18} />
            </Link>
            <a
              href={siteInfo.phoneHref}
              className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full hover:bg-white hover:text-navy-dark transition-colors"
            >
              <Phone size={18} /> Call {siteInfo.phone}
            </a>
          </div>

          <div className="inline-flex flex-col items-center gap-1 text-sm text-white/70 border-t border-white/15 pt-6">
            <span className="font-heading font-bold text-white">{siteInfo.name}</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {siteInfo.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> {siteInfo.phone}
            </span>
          </div>
        </Reveal>
      </section>
    </>
  );
}
