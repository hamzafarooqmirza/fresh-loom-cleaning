import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  "The smell returns soon after ordinary cleaning",
  "One particular section of carpet or furniture smells stronger",
  "A pet has repeatedly used the same area",
  "Smoke smell remains in soft furnishings",
  "A spill has left a lingering smell",
  "Your sofa or rug smells stale despite surface cleaning",
  "Air fresheners only hide the smell temporarily",
  "You are unsure where the odour is coming from",
];

export default function WhenToConsiderOdourTreatment() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            When Is Professional Odour Treatment Worth Considering?
          </h2>
          <p className="text-slate-600 mb-6">
            Some household smells disappear once the room is cleaned and ventilated. Others continue returning because the underlying source has not been dealt with.
          </p>
          <p className="text-slate-600 mb-6">
            Consider a professional odour removal service if:
          </p>
          <p className="text-slate-600">
            Finding the likely source can help determine whether professional treatment is suitable or whether another underlying issue needs attention.
          </p>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 hidden lg:block">
            <Image
              src="/images/gallery/odour-removal.png"
              alt="Targeted carpet odour treatment in a home"
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
