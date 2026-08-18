import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseFreshLoom from "@/components/home/WhyChooseFreshLoom";
import CarpetCleaningSection from "@/components/home/CarpetCleaningSection";
import UpholsterySection from "@/components/home/UpholsterySection";
import StainRemovalSection from "@/components/home/StainRemovalSection";
import RugCleaningSection from "@/components/home/RugCleaningSection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import BeforeAfterGallery from "@/components/home/BeforeAfterGallery";
import GlasgowCoverage from "@/components/home/GlasgowCoverage";
import HomeFaq from "@/components/home/HomeFaq";
import FinalCta from "@/components/home/FinalCta";
import { siteInfo } from "@/lib/data";

const title = `${siteInfo.name} | Carpet & Upholstery Cleaning in Glasgow`;
const description =
  "Professional carpet, upholstery, sofa and rug cleaning in Glasgow. Fresh Loom Cleaning removes everyday dirt, stains and odours to leave your home fresher.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseFreshLoom />
      <CarpetCleaningSection />
      <UpholsterySection />
      <StainRemovalSection />
      <RugCleaningSection />
      <ProcessTimeline />
      <BeforeAfterGallery />
      <GlasgowCoverage />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
