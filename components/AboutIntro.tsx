import { aboutPage, siteInfo } from "@/lib/data";
import Reveal from "./Reveal";

export default function AboutIntro() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            {aboutPage.ukServices.title}
          </h2>
          {aboutPage.ukServices.paragraphs.map((p) => (
            <p key={p} className="text-slate-600 mb-4">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal direction="right" delay={0.1} className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src={aboutPage.mapEmbedUrl}
            width="600"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${siteInfo.name} location`}
            className="w-full h-[350px] lg:h-[420px] border-0"
          />
        </Reveal>
      </div>
    </section>
  );
}
