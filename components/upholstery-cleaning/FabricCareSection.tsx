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
              alt="Close-up of upholstery fabric texture during professional cleaning"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Different Upholstery Fabrics Need Different Care
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>One cleaning method should not automatically be used on every piece of furniture.</p>
            <p>
              Upholstery fabrics can differ in fibre type, construction, colour stability and how
              they react to moisture or cleaning products. That is why identifying the material is
              an important part of professional furniture care.
            </p>
            <p>
              Our upholstery fabric cleaning services take these differences into account before
              cleaning begins.
            </p>
            <p>
              The goal is to choose an appropriate approach for the furniture rather than simply
              applying the strongest treatment available.
            </p>
            <p>
              If you are unsure what material your sofa or chair is made from, we can look at the
              upholstery before deciding how it should be cleaned.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-navy/5 border border-navy/10 p-4">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-navy-dark">
              The cleaning approach should fit the fabric — not the other way around.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
