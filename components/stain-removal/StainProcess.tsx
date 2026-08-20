import Image from "next/image";
import { Search, ListChecks, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Identify the Stain",
    description:
      "Where possible, we establish what caused the mark and how long it may have been present.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Check the Material",
    description:
      "We consider whether the affected surface is carpet, upholstery, rug or another suitable material.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Assess Previous Treatment",
    description:
      "If household products or previous cleaning attempts have been used, this information can help us understand the current condition of the stain.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Target the Affected Area",
    description:
      "Suitable professional treatment can then be focused on the mark rather than unnecessarily treating the surrounding material.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Review the Result",
    description:
      "Once treatment is complete, we assess the improvement and explain anything relevant about the remaining mark or after-care.",
  },
];

export default function StainProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach Stain Removal
          </h2>
          <p className="text-slate-600">
            Good stain treatment is about making informed decisions before trying to remove the mark. We first consider the stain and surface so that the treatment can be approached with the material in mind.
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
              src="/images/services/stain-removal.jpg"
              alt="Technician carefully applying professional spotting treatment to a localised stain"
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
