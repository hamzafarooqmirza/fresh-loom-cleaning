import Image from "next/image";
import { Info } from "lucide-react";
import Reveal from "../Reveal";

export default function RugMethodSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/rug-cleaning.jpg"
              alt="Technician examining rug fibres and construction before treatment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            The Right Cleaning Method Starts with the Rug
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>There is no single cleaning method that is automatically right for every rug.</p>
            <p>
              Material, dyes, backing, construction and overall condition can all influence how a
              rug should be treated.
            </p>
            <p>
              Terms such as rug washing and rug dry cleaning are often used when people look for
              ways to have a rug professionally cleaned, but the important question is not simply
              which method sounds best.
            </p>
            <p>The right approach is the one that suits the individual rug.</p>
            <p>
              That is why we prefer to consider the rug itself before deciding how cleaning should
              be carried out.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-navy/5 border border-navy/10 p-4">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-navy-dark">
              We choose the approach around the rug — not the rug around the cleaning method.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
