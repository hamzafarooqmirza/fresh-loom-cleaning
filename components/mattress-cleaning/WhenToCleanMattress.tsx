import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  "Armrests look darker than surrounding areas",
  "Headrests show signs of repeated contact",
  "Favourite seat cushions differ from less-used seats",
  "Surface cleaning no longer gives a satisfactory result",
  "Food or drink marks are visible",
  "Dust and grime have collected around seams or creases",
  "You are unsure which household products are safe",
  "Your mattress furniture needs professional attention",
];

export default function WhenToCleanMattress() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Could Your Mattress Furniture Benefit from Professional Cleaning?
          </h2>
          <p className="text-slate-600 mb-6">
            Changes in mattress furniture often happen gradually, particularly on pieces used every day.
          </p>
          <p className="text-slate-600 mb-6">
            You may want to speak to professional mattress cleaners if:
          </p>
          <p className="text-slate-600">
            Experienced mattress cleaners can consider the furniture condition before deciding what cleaning may be appropriate.
          </p>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 hidden lg:block">
            <Image
              src="/images/gallery/mattress-cleaning.png"
              alt="Professionally cleaned mattress furniture"
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
