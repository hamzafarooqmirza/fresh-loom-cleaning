import Image from "next/image";
import { Info } from "lucide-react";
import Reveal from "../Reveal";

export default function WoolCarpetSection() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/carpet-cleaning.jpg"
              alt="Close-up carpet fibre texture before professional wool carpet cleaning"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Professional Wool Carpet Cleaning
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>
              Wool carpets need careful treatment. Their fibres can react differently to excessive
              moisture, heat and unsuitable cleaning products, which is why they should not simply
              be cleaned in the same way as every synthetic carpet.
            </p>
            <p>
              Our wool carpet cleaning approach starts with the carpet itself. We consider its
              condition and construction before selecting an appropriate cleaning method.
            </p>
            <p>
              For customers with wool flooring, our professional wool carpet cleaning service
              focuses on effective cleaning while taking the characteristics of the fibre into
              account.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-white border border-black/10 p-4">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600">
              If you are unsure what type of carpet you have, speak to us before booking and we
              can discuss the best approach.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
