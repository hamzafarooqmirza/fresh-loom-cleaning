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
              alt="Close-up of upholstery fabric texture during professional cleaning"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Choosing the Right Cleaning Method for Your Sofa
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>Customers often search for sofa steam cleaning, but the best cleaning method depends on the sofa itself.</p>
            <p>
              Fabric type, construction, colour stability and the condition of the upholstery can all influence how the furniture should be treated.
            </p>
            <p>
              Some professional cleaning methods use hot water extraction or equipment that customers commonly describe as steam cleaning. Other fabrics may require a different approach.
            </p>
            <p>
              Fresh Loom Carpet Cleaning focuses on the sofa first rather than automatically using one method for every piece of furniture.
            </p>
            <p>
              If you are unsure what type of fabric you have, we can consider that before deciding how the sofa should be cleaned.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-navy/5 border border-navy/10 p-4">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-navy-dark">
              The sofa determines the cleaning approach — not the other way around.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
