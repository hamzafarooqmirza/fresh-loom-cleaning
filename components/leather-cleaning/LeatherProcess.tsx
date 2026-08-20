import Image from "next/image";
import { Search, ListChecks, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Inspect the Leather",
    description:
      "We look at the furniture, visible finish, overall condition and areas showing heavier use.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Identify Problem Areas",
    description:
      "Armrests, headrests, seat cushions, spills and visible marks can be identified before cleaning.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Consider the Finish",
    description:
      "The characteristics of the leather help determine which products and treatment approach may be suitable.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Clean Carefully",
    description:
      "Suitable leather is cleaned using an approach intended for the surface rather than general fabric-cleaning methods.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Review the Finish",
    description:
      "After cleaning, we check the treated areas and provide relevant leather-care guidance where appropriate.",
  },
];

export default function LeatherProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach Leather Cleaning
          </h2>
          <p className="text-slate-600">
            Leather furniture needs to be understood before it is cleaned. Its finish, existing wear and areas requiring attention influence treatment. Our professional leather cleaning service begins with those considerations.
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
              alt="Professional hand cleaning on detailed leather grain"
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
