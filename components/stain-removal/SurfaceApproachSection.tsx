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
              src="/images/services/stain-removal.jpg"
              alt="Detailed carpet and upholstery texture being assessed before stain treatment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            The Surface Matters as Much as the Stain
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>The same spilled drink can create two very different problems depending on where it lands.</p>
            <p>
              A mark on synthetic carpet may need a different approach from the same substance on wool. Upholstery fabric can have different colour and moisture considerations, while rugs can vary greatly in fibre, dyes and construction.
            </p>
            <p>
              Our professional stain removal service considers both sides of the problem: what caused the stain, and what has been stained?
            </p>
            <p>
              That helps us make more sensible treatment decisions instead of using the same process everywhere.
            </p>
            <p>
              The material is assessed before suitable treatment is selected.
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
              Good stain treatment considers both the substance and the surface.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
