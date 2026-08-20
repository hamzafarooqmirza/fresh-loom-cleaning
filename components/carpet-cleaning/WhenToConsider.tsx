import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  "The carpet still looks dull after vacuuming",
  "Busy walkways have become noticeably darker",
  "Spills or marks remain visible",
  "Pets regularly use the room",
  "The carpet has not had a deep clean for a long time",
  "Dirt appears quickly after vacuuming",
  "You are preparing a property for new occupants",
  "You simply want the room to feel cleaner and fresher",
];

export default function WhenToConsider() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Is It Time to Have Your Carpet Professionally Cleaned?
          </h2>
          <p className="text-slate-600 mb-6">
            There is no single cleaning schedule that suits every home. How often your carpet
            needs attention depends on how the room is used.
          </p>
          <p className="text-slate-600 mb-6">
            Consider booking a professional carpet cleaning service if:
          </p>
          <p className="text-slate-600">
            Experienced professional carpet cleaners can also help you understand whether a carpet
            needs a full clean or more focused attention in particular areas.
          </p>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 hidden lg:block">
            <Image
              src="/images/gallery/carpet-cleaning.png"
              alt="Clean finished living-room carpet after professional cleaning"
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
