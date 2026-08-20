import Image from "next/image";
import { Search, ListChecks, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Examine the Curtains",
    description:
      "We look at the visible fabric, condition, construction and areas that may need particular attention.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Identify Marks & Used Areas",
    description:
      "Individual stains, lower edges and frequently handled sections can be noted before treatment.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Consider the Fabric",
    description:
      "The curtain material and construction help determine what type of cleaning approach may be appropriate.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Professional Cleaning",
    description:
      "Suitable curtains are professionally treated using a method selected with the fabric and condition in mind.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Review",
    description:
      "Once treatment is complete, we check the curtains and provide any relevant drying or after-care guidance.",
  },
];

export default function CurtainProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach Curtain Cleaning
          </h2>
          <p className="text-slate-600">
            Curtains vary in fabric, construction, lining and condition. Professional care should begin with the curtains themselves rather than assuming one method suits everything. Our professional curtain cleaning service follows a considered process.
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
              alt="Professional cleaner treating curtain fabric and folds"
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
