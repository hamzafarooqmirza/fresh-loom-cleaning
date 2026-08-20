import Image from "next/image";
import { Search, ListChecks, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Inspect the Upholstery",
    description:
      "We look at the fabric, overall condition, frequently used areas and visible marks before deciding how to proceed.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Identify Problem Areas",
    description:
      "Armrests, seat cushions, headrests and individual stains can be identified for additional attention.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Prepare the Fabric",
    description:
      "Where appropriate, suitable pre-treatment can be used to help loosen accumulated dirt and prepare the upholstery for cleaning.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Clean the Upholstery",
    description:
      "Professional equipment is used to work across the fabric carefully and remove loosened dirt from the upholstery.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Review the Finish",
    description:
      "Once cleaning is complete, we check the treated areas and provide practical advice about drying and using the furniture afterwards.",
  },
];

export default function UpholsteryProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach Upholstery Cleaning
          </h2>
          <p className="text-slate-600">
            Furniture fabrics vary considerably, so good cleaning starts with understanding what
            is being cleaned. Our approach considers the upholstery, its current condition and the
            areas that need the most attention before the main cleaning begins.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <StaggerGroup className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-6 relative">
                  <span className="text-4xl font-extrabold text-navy/10 block mb-1">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center mb-4 -mt-2">
                    <step.icon size={20} />
                  </div>
                  <h3 className="font-bold text-navy-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal direction="right" className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl hidden lg:block">
            <Image
              src="/images/services/upholstery-cleaning.jpg"
              alt="Upholstery cleaning hand tool moving across a fabric sofa cushion"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
