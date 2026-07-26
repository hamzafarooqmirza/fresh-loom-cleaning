import { contactPage, siteInfo } from "@/lib/data";
import Reveal from "./Reveal";
import AppointmentForm from "./AppointmentForm";

export default function ContactFormSection() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">Get In Touch</h2>
          <p className="text-slate-600 max-w-md mb-8">{contactPage.intro}</p>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={siteInfo.mapEmbedUrl}
              width="600"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteInfo.name} location`}
              className="w-full h-[300px] lg:h-[360px] border-0"
            />
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.1}>
          <AppointmentForm />
        </Reveal>
      </div>
    </section>
  );
}
