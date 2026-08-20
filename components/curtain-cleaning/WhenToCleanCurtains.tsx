import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  "The fabric looks dull in daylight",
  "Dust is visible within folds or upper sections",
  "Frequently handled edges have become marked",
  "The curtains have picked up household smells",
  "Small stains remain visible",
  "Pets regularly spend time close to the curtains",
  "The curtains have not been professionally cleaned for a long time",
  "Routine dusting no longer leaves them feeling refreshed",
];

export default function WhenToCleanCurtains() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Could Your Curtains Benefit from Professional Cleaning?
          </h2>
          <p className="text-slate-600 mb-6">
            There is no single cleaning schedule for every set of curtains. Room use, pets, cooking, open windows and curtain material can influence how quickly fabric needs attention.
          </p>
          <p className="text-slate-600 mb-6">
            Consider contacting professional curtain cleaners if:
          </p>
          <p className="text-slate-600">
            Experienced curtain cleaners can consider the material and condition before deciding whether professional cleaning is appropriate.
          </p>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 hidden lg:block">
            <Image
              src="/images/gallery/curtain-cleaning.png"
              alt="Freshly cleaned full-length curtains in daylight"
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
