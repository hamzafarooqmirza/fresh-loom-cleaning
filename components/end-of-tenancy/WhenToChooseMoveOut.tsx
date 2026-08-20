import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  "The stain remains after normal cleaning",
  "You do not know what caused the mark",
  "The affected material is valuable or delicate",
  "The stain contains strong colour or oil",
  "Previous DIY treatments have not worked",
  "The mark has spread after cleaning",
  "You are worried about damaging the surrounding fibres",
  "The stain is on wool, a rug or specialist upholstery",
];

export default function WhenToChooseMoveOut() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            When Does Professional Move-Out Cleaning Make Sense?
          </h2>
          <p className="text-slate-600 mb-6">
            Not every small spill needs professional attention. But repeatedly experimenting with different household products can sometimes make a difficult mark harder to deal with.
          </p>
          <p className="text-slate-600 mb-6">
            Consider speaking to a stain removal specialist when:
          </p>
          <p className="text-slate-600">
            A professional assessment can help determine whether further treatment is appropriate and what level of improvement is realistic.
          </p>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 hidden lg:block">
            <Image
              src="/images/gallery/end-of-tenancy-deep-clean.png"
              alt="Professional assessment of a localised household stain"
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
