import Image from "next/image";
import { Search, ListChecks, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discuss the Problem",
    description:
      "We ask what the smell is like, where it is strongest and whether there is a known cause such as pets, spills, smoke or food.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Check the Affected Material",
    description:
      "We look at the relevant carpet, rug, sofa or other suitable upholstery and consider where contamination may have reached.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Identify Likely Source Areas",
    description:
      "Particular sections may need more attention if they have been repeatedly exposed or affected by a spill or accident.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Apply Suitable Treatment",
    description:
      "Where appropriate, professional treatment is used on the affected material with the aim of reducing the source of the odour rather than simply disguising it.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Review & After-Care",
    description:
      "After treatment, we can explain relevant drying, ventilation or care guidance and discuss whether anything else may be contributing to the smell.",
  },
];

export default function OdourProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach Odour Problems
          </h2>
          <p className="text-slate-600">
            Treating an unpleasant smell starts with understanding where it is coming from. Our professional odour treatment process focuses on the affected area and material rather than immediately applying fragrance or deodoriser.
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
              src="/images/services/odour-removal.jpg"
              alt="Targeted professional treatment on a soft furnishing"
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
