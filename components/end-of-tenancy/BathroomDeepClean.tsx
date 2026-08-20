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
              src="/images/services/end-of-tenancy-deep-clean.jpg"
              alt="Detailed carpet and upholstery texture being assessed before stain treatment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Bathrooms Need Their Own Cleaning Approach
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>Pet urine can create a visible stain and odour concern at different depths.</p>
            <p>
              A surface mark may be visible while moisture has travelled into backing, padding or rug layers.
            </p>
            <p>
              Pet urine stain removal is different from simply wiping away a fresh spill.
            </p>
            <p>
              The approach depends on material, liquid amount, age, repetition and products already used.
            </p>
            <p>
              Dog urine stain removal and cat urine stain removal both begin with assessment.
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
              A good tenancy clean treats each room according to how that space is actually used.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
