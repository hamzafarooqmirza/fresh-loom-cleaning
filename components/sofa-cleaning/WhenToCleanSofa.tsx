import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  "Seat cushions have started to look dull",
  "Armrests or headrests appear darker",
  "Food or drink marks remain visible",
  "Pets frequently use the sofa",
  "The fabric no longer feels fresh after normal vacuuming",
  "One seat looks more heavily used than the others",
  "The sofa has not been professionally cleaned for a long time",
  "You simply want to refresh your main living space",
];

export default function WhenToCleanSofa() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Is Your Sofa Ready for a Professional Clean?
          </h2>
          <p className="text-slate-600 mb-6">
            Because changes happen gradually, it can be difficult to notice how much everyday use has affected a sofa until you compare frequently used areas with less-used sections.
          </p>
          <p className="text-slate-600 mb-6">
            Consider calling professional sofa cleaners if:
          </p>
          <p className="text-slate-600">
            Experienced sofa cleaners can look at the furniture and help determine whether it needs a full clean or more focused treatment.
          </p>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 hidden lg:block">
            <Image
              src="/images/gallery/sofa-cleaning.png"
              alt="Fresh, clean fabric sofa in a modern home after professional cleaning"
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
