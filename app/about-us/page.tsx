import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import TrustedExperts from "@/components/TrustedExperts";
import VisionMission from "@/components/VisionMission";
import AboutIntro from "@/components/AboutIntro";
import CtaBanner from "@/components/CtaBanner";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us | ${siteInfo.name}`,
  description:
    "Freshloom Carpet & Upholstery Cleaning Limited provides professional cleaning services designed to restore cleanliness, freshness, and comfort to homes and businesses across the UK.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <TrustedExperts />
      <VisionMission />
      <AboutIntro />
      <CtaBanner />
    </>
  );
}
