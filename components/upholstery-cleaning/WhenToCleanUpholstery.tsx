import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  "Frequently used seats look duller than the rest of the furniture",
  "Armrests or headrests have developed darker areas",
  "Small spills and marks are becoming noticeable",
  "Pet use has affected the furniture",
  "The upholstery has not been professionally cleaned for a long time",
  "Surface cleaning is no longer giving a fresh result",
  "You want to refresh furniture before or after moving",
  "Your upholstered furniture simply needs a deeper clean",
];

export default function WhenToCleanUpholstery() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Does Your Upholstery Need a Professional Clean?
          </h2>
          <p className="text-slate-600 mb-6">
            Furniture does not need to look heavily stained before professional cleaning becomes
            useful. Because sofas and chairs are used so regularly, changes can happen gradually
            and become easy to overlook.
          </p>
          <p className="text-slate-600 mb-6">
            Consider speaking to professional upholstery cleaners if:
          </p>
          <p className="text-slate-600">
            Professional upholstery cleaners can assess the furniture and help determine whether a
            full clean or more focused treatment is appropriate.
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
