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
              src="/images/services/upholstery-cleaning.jpg"
              alt="Detailed curtain fibres and folds being examined before cleaning"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            The Fabric Should Guide the Cleaning Method
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>Curtains can be made from very different materials, and their construction can also vary.</p>
            <p>
              Some are lightweight and simple. Others are heavier, lined or made from fabrics that require more careful handling.
            </p>
            <p>
              Colour stability, moisture sensitivity, lining and decorative details can all influence how professional cleaning should be approached.
            </p>
            <p>
              That is why fabric curtain cleaning should begin by considering the curtains rather than automatically applying one standard process.
            </p>
            <p>
              Customers may search for curtain steam cleaning, but a method should only be used when appropriate for the fabric and construction.
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
              Good curtain care starts with understanding the fabric.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
