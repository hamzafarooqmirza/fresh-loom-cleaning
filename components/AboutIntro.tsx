import { aboutPage, siteInfo } from "@/lib/data";
import Reveal from "./Reveal";
import ConsentGatedMap from "./cookies/ConsentGatedMap";

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
          <ConsentGatedMap
            title={`${siteInfo.name} location`}
            className="h-[350px] lg:h-[420px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
