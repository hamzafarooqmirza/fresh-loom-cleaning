import Image from "next/image";
import { SprayCan, Layers3, Search, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";

const points = [
  {
    icon: SprayCan,
    title: "Professional Cleaning Approach",
    description: "We use professional cleaning techniques rather than relying on basic household cleaning methods.",
  },
  {
    icon: Layers3,
    title: "Suitable for Different Materials",
    description: "Carpets, upholstery, rugs and leather all require different care. We choose the cleaning approach according to the material.",
  },
  {
    icon: Search,
    title: "Focused on Real Problems",
    description: "From everyday dirt to stubborn stains and unwanted odours, we focus on the actual condition of the item.",
  },
  {
    icon: CheckCircle2,
    title: "Local Cleaning Service",
    description: "Fresh Loom Cleaning provides professional cleaning services for customers looking for reliable carpet and upholstery cleaners in Glasgow.",
  },
];

export default function WhyChooseFreshLoom() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left" className="relative">
          <div className="hidden sm:block absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/10 -z-0" />
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/upholstery-cleaning.jpg"
              alt="Fresh Loom Cleaning technician deep cleaning upholstery"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Why Choose Fresh Loom Cleaning?
          </h2>
          <p className="text-slate-600 mb-10">
            Choosing a cleaning company is about more than making a carpet look clean for a few
            days. The right approach considers the material, the type of dirt or stain and the
            condition of the item before cleaning begins. At Fresh Loom Cleaning, we focus on
            providing a practical, careful service that leaves your carpets and furnishings
            feeling cleaner and fresher.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point) => (
              <div key={point.title} className="flex gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-navy/10 text-navy flex items-center justify-center">
                  <point.icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-dark mb-1">{point.title}</h3>
                  <p className="text-sm text-slate-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
