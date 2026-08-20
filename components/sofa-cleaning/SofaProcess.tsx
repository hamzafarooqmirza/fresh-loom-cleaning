import Image from "next/image";
import { Search, ListChecks, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Check the Sofa",
    description:
      "We inspect the visible fabric, cushions, armrests, headrests and areas showing heavier use.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Identify Marks & Problem Areas",
    description:
      "Spills, stains, pet-related marks and heavily used sections are identified so they can receive suitable attention.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Prepare the Fabric",
    description:
      "Where appropriate, the fabric can be prepared or pre-treated before the main cleaning stage.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Deep Clean the Sofa",
    description:
      "Professional equipment is used to clean suitable upholstery and remove loosened dirt from the fabric.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Review",
    description:
      "Once cleaning is finished, we check the treated areas and explain any useful drying or after-care guidance.",
  },
];

export default function SofaProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Clean Your Sofa
          </h2>
          <p className="text-slate-600">
            Sofas come in different fabrics, constructions and conditions, so the process should begin by looking at the furniture rather than immediately applying cleaning products. Our professional sofa cleaning service follows a straightforward process designed around the individual sofa.
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
              src="/images/services/sofa-cleaning.jpg"
              alt="Sofa cleaning hand tool moving across a fabric sofa cushion"
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
