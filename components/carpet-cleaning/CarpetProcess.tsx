import Image from "next/image";
import { ClipboardList, Droplet, SprayCan, Target, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Carpet Assessment",
    description:
      "We look at the carpet type, visible marks, heavily used areas and overall condition before deciding how to clean it.",
  },
  {
    number: "02",
    icon: Droplet,
    title: "Pre-Treatment",
    description:
      "Areas affected by dirt or visible marks can receive targeted pre-treatment before the main cleaning begins.",
  },
  {
    number: "03",
    icon: SprayCan,
    title: "Deep Cleaning",
    description:
      "The carpet is professionally cleaned to loosen and extract built-up dirt from within the fibres.",
  },
  {
    number: "04",
    icon: Target,
    title: "Focused Stain Treatment",
    description:
      "Where appropriate, individual marks can receive additional carpet stain treatment based on the type of stain and carpet.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Check",
    description:
      "We review the cleaned areas and give customers simple guidance on drying and looking after the carpet afterwards.",
  },
];

export default function CarpetProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How Our Carpet Cleaning Process Works
          </h2>
          <p className="text-slate-600">
            Good carpet cleaning services should not treat every carpet exactly the same way. We
            start by looking at the carpet, its condition and any areas that need particular
            attention.
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
              src="/images/services/carpet-cleaning.jpg"
              alt="Carpet cleaning extraction wand working across carpet fibres"
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
