import type { Metadata } from "next";
import PhotoHero from "@/components/PhotoHero";
import ServicesGrid from "@/components/ServicesGrid";
import AdditionalServices from "@/components/AdditionalServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: `Our Services | ${siteInfo.name}`,
  description: `Professional carpet, upholstery, rug, and sofa cleaning, plus stain removal, odour removal, and more across the UK. Book expert cleaning with ${siteInfo.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PhotoHero
        title="Our Services"
        breadcrumbLabel="Services"
        image="/images/services/carpet-cleaning.jpg"
      />
      <ServicesGrid />
      <AdditionalServices />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
