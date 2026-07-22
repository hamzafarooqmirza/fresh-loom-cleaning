import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AppointmentSection from "@/components/AppointmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <AppointmentSection />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
