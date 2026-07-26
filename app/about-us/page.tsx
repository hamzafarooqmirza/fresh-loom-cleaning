import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TrustedExperts from "@/components/TrustedExperts";
import VisionMission from "@/components/VisionMission";
import AboutIntro from "@/components/AboutIntro";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Fresh Loom Cleaning",
  description:
    "Freshloom Carpet & Upholstery Cleaning Limited provides professional cleaning services designed to restore cleanliness, freshness, and comfort to homes and businesses across the UK.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero title="About Us" breadcrumbLabel="About Us" badge={{ value: "10+", label: "Experience" }} />
      <TrustedExperts />
      <VisionMission />
      <AboutIntro />
      <CtaBanner />
    </>
  );
}
