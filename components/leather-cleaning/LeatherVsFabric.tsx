import Image from "next/image";
import { Info } from "lucide-react";
import Reveal from "../Reveal";

export default function FabricCareSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/sofa-cleaning.jpg"
              alt="Close-up leather grain, seams and surface condition"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Leather Needs a Different Approach to Fabric Upholstery
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>Leather and fabric may both cover sofas and chairs, but they should not automatically be cleaned in the same way.</p>
            <p>
              Leather has a surface and finish that can react differently to moisture, products and friction.
            </p>
            <p>
              General household products may be unsuitable, while aggressive rubbing can make a problem more noticeable.
            </p>
            <p>
              Professional leather upholstery cleaning should start by considering the leather itself.
            </p>
            <p>
              This is why Leather Cleaning is separate from general fabric upholstery cleaning.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6" aria-label="Surfaces we assess">
            {['Carpets', 'Sofas', 'Upholstery', 'Rugs'].map((surface) => (
              <span key={surface} className="rounded-full bg-cream px-4 py-2 text-xs font-bold text-navy-dark">{surface}</span>
            ))}
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-navy/5 border border-navy/10 p-4">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-navy-dark">
              Leather should be treated as leather — not simply as another upholstery fabric.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
