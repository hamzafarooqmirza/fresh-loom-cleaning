import Image from "next/image";
import { Search, ListChecks, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discuss the Accident",
    description:
      "We ask what caused the mark, when it happened and whether the area has been affected more than once.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Check the Material",
    description:
      "We consider whether it is carpet, a rug, sofa fabric or suitable upholstery.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Examine the Affected Area",
    description:
      "We consider the visible mark, surrounding fibres and previous cleaning signs.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Apply Focused Treatment",
    description:
      "Suitable treatment is applied to the affected area with material and condition in mind.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Review the Result",
    description:
      "After treatment, we explain drying, remaining marks or possible odour concerns.",
  },
];

export default function PetStainProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach Pet Stain Treatment
          </h2>
          <p className="text-slate-600">
            Professional pet stain treatment starts with understanding what happened and what material has been affected. Every accident is assessed individually.
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
              src="/images/services/pet-stain-removal.jpg"
              alt="Targeted professional treatment of a pet accident area"
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
