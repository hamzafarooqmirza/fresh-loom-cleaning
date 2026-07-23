import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AppointmentSection from "@/components/AppointmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

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
