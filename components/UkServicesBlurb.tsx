import { aboutPage } from "@/lib/data";
import Reveal from "./Reveal";

export default function UkServicesBlurb() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <Reveal className="container-page max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
          {aboutPage.ukServices.title}
        </h2>
        {aboutPage.ukServices.paragraphs.map((p) => (
          <p key={p} className="text-slate-600 mb-4">
            {p}
          </p>
        ))}
      </Reveal>
    </section>
  );
}
