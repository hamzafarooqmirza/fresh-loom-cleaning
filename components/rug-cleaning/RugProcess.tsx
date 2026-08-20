import Image from "next/image";
import { Search, MapPinned, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Examine the Rug",
    description:
      "We look at the rug's visible fibres, construction, condition, soiling and any areas that may require additional attention.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Identify Spots & Used Areas",
    description:
      "Spills, individual marks and heavily walked sections can be identified before the main cleaning begins.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Prepare for Cleaning",
    description:
      "Where appropriate, suitable preparation or pre-treatment can help loosen accumulated dirt and prepare problem areas.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Clean the Rug",
    description:
      "The rug is professionally cleaned using an approach selected according to its characteristics and condition.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Review",
    description:
      "Once treatment is complete, we check the cleaned rug and provide practical guidance where needed.",
  },
];

export default function RugProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach Professional Rug Cleaning
          </h2>
          <p className="text-slate-600">
            A good result starts before the main cleaning begins. Our professional rug cleaning
            services focus on understanding the rug first, identifying areas that need attention
            and choosing an appropriate approach for its material and condition.
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
              src="/images/services/rug-cleaning.jpg"
              alt="Close-up of professional rug cleaning equipment working across rug fibres"
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
