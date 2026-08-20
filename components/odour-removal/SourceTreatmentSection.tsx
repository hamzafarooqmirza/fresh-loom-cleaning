import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import Reveal from "../Reveal";

export default function FabricCareSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/odour-removal.jpg"
              alt="Technician inspecting carpet and upholstery layers for an odour source"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Odour Treatment Should Start at the Source
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>Air fresheners can make a room smell different. That is not the same as removing the cause of an unpleasant odour.</p>
            <p>
              If a smell is coming from contaminated fibres, dried residues or material below the visible surface, adding fragrance may only mix with the existing problem.
            </p>
            <p>
              Professional odour treatment focuses on identifying and treating the affected area where possible.
            </p>
            <p>
              That is especially important with soft furnishings because carpets, sofas and rugs can absorb liquids and smells differently.
            </p>
            <p>
              The best approach depends on what caused the odour, how long it has been present, which material is affected, how deeply the source may have travelled and whether previous products have been used.
            </p>
            <p>
              Explore related care for <Link href="/services/carpet-cleaning" className="font-semibold text-navy hover:underline">carpet odour removal</Link>,{" "}
              <Link href="/services/sofa-cleaning" className="font-semibold text-navy hover:underline">sofa odour removal</Link>,{" "}
              <Link href="/services/upholstery-cleaning" className="font-semibold text-navy hover:underline">upholstery odour removal</Link> and{" "}
              <Link href="/services/rug-cleaning" className="font-semibold text-navy hover:underline">rug odour removal</Link>. If the source has left a visible mark, our{" "}
              <Link href="/services/stain-removal" className="font-semibold text-navy hover:underline">stain removal service</Link> explains how spills and accidents are assessed.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6" aria-label="Soft furnishings we assess">
            {['Carpets', 'Sofas', 'Upholstery', 'Rugs'].map((surface) => (
              <span key={surface} className="rounded-full bg-cream px-4 py-2 text-xs font-bold text-navy-dark">{surface}</span>
            ))}
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-navy/5 border border-navy/10 p-4">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-navy-dark">
              Freshness should come from dealing with the source — not simply covering it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
