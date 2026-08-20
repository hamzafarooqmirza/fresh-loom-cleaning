import Image from "next/image";
import { Info } from "lucide-react";
import Reveal from "../Reveal";

export default function WoolAreaRugSection() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/rug-cleaning.png"
              alt="Detailed wool rug with visible natural fibre texture in a UK interior"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Careful Cleaning for Wool &amp; Area Rugs
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>
              Some rugs deserve a more considered approach because of the fibres and construction
              used to make them.
            </p>
            <p>
              Wool is a good example. Natural wool fibres have characteristics that should be
              considered when choosing cleaning products, moisture levels and treatment methods.
            </p>
            <p>
              Our wool rug cleaning approach begins by looking at the rug rather than assuming it
              can be treated like a standard synthetic floor covering.
            </p>
            <p>
              For suitable rugs, professional wool rug cleaning can help remove accumulated dirt
              while respecting the characteristics of the natural fibres.
            </p>
            <p>
              We also provide area rug cleaning for suitable rugs used throughout living rooms,
              bedrooms and other spaces.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-white border border-black/10 p-4">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600">
              If you are unsure what your rug is made from, speak to us before booking.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
