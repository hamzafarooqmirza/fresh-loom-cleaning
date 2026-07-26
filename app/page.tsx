import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AppointmentSection from "@/components/AppointmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

const title = "Fresh Loom Cleaning | Carpet & Upholstery Cleaning Services";
const description =
  "Professional carpet, sofa, rug, and upholstery cleaning using advanced equipment to remove stains, dirt, and allergens effectively.";

export const metadata: Metadata = {
  title,
  description,
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
      <About />
      <Services />
      <AppointmentSection />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <CtaBanner />
      <Testimonials />
    </>
  );
}
