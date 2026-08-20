import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  "Colours appear duller than they used to",
  "Frequently walked areas look different from less-used sections",
  "Vacuuming no longer leaves the rug feeling properly refreshed",
  "Visible spots or spills remain",
  "Pets regularly use the rug",
  "Fine dirt appears to be trapped within the fibres",
  "The rug has not received a deeper clean for a long time",
  "You want to refresh it as part of cleaning the room",
];

export default function WhenToCleanRug() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Could Your Rug Benefit from Professional Cleaning?
          </h2>
          <p className="text-slate-600 mb-6">
            Because rugs are often part of a room for years, gradual changes in their appearance
            can be easy to miss.
          </p>
          <p className="text-slate-600 mb-6">
            You may want to consider a professional rug cleaning service when:
          </p>
          <p className="text-slate-600">
            Professional rug cleaning specialists can assess the rug and help determine an
            appropriate approach based on its material and condition.
          </p>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 hidden lg:block">
            <Image
              src="/images/gallery/rug-cleaning.png"
              alt="Finished clean area rug in a modern living room"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1} className="bg-light rounded-3xl border border-black/5 p-8">
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-6 h-6 shrink-0 rounded-full bg-accent/15 text-accent-dark flex items-center justify-center mt-0.5">
                  <Check size={14} />
                </span>
                <span className="text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
