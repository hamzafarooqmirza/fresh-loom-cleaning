import type { Metadata } from "next";
import PhotoHero from "@/components/PhotoHero";
import ServicesGrid from "@/components/ServicesGrid";
import AdditionalServices from "@/components/AdditionalServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Services | Fresh Loom Cleaning",
  description:
    "Professional carpet, upholstery, rug, and sofa cleaning, plus stain removal, odour removal, and more across the UK. Book expert cleaning with Fresh Loom Cleaning.",
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
