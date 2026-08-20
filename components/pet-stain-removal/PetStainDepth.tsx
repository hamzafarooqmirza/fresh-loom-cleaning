import { Hand, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Hand,
    title: "The Visible Mark",
    description:
      "The area you can see may only be part of the affected section.",
  },
  {
    icon: Droplet,
    title: "Absorbent Materials",
    description:
      "Carpet, upholstery and rug fibres can absorb liquid below the immediate surface.",
  },
  {
    icon: Wind,
    title: "Repeat Accidents",
    description: "Repeated accidents can make staining and odour concerns more difficult.",
  },
];

export default function PetStainDepth() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Why Pet Accidents Can Leave More Than a Surface Mark
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              A pet accident can look like a small surface spot while liquid spreads further than the visible mark.
            </p>
            <p>
              On carpet, moisture can move towards the backing. On sofas it may reach padding, while rugs absorb spills according to their construction.
            </p>
            <p>
              The material and any deeper layers influence what treatment may be suitable.
            </p>
            <p>
              Pet stain cleaning should consider both the visible area and material affected.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-3 gap-6">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-7">
                <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-5">
                  <point.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-dark mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
