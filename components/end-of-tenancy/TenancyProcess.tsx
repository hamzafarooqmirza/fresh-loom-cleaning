import Image from "next/image";
import { Search, ListChecks, Droplet, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand the Property",
    description:
      "We establish property type, approximate size and areas requiring particular attention.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Work Through Each Room",
    description:
      "Living spaces, bedrooms, kitchens and bathrooms are approached individually.",
  },
  {
    number: "03",
    icon: Droplet,
    title: "Focus on High-Use Areas",
    description:
      "Surfaces affected by cooking, washing and regular contact receive appropriate attention.",
  },
  {
    number: "04",
    icon: SprayCan,
    title: "Clean the Details",
    description:
      "Accessible edges, fittings and overlooked surfaces are included within the agreed scope.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Review",
    description:
      "Cleaned areas are reviewed before the job is finished.",
  },
];

export default function TenancyProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach an End of Tenancy Clean
          </h2>
          <p className="text-slate-600">
            A tenancy cleaning service works best when the property is approached systematically, with attention to high-use surfaces and smaller details.
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
              src="/images/services/end-of-tenancy-deep-clean.jpg"
              alt="Professional cleaner working systematically in an empty flat"
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
