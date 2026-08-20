import { Layers, Droplet, Grid3x3 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Layers,
    title: "Trapped Dirt",
    description:
      "Fine particles can settle between rug fibres and become difficult to remove through ordinary vacuuming alone.",
  },
  {
    icon: Droplet,
    title: "Spills & Spots",
    description:
      "Food, drinks, muddy footwear and everyday accidents can leave concentrated marks that need individual attention.",
  },
  {
    icon: Grid3x3,
    title: "Fibre & Construction",
    description:
      "Different rug materials and construction methods can influence which cleaning approach is appropriate.",
  },
];

export default function RugSpecialAttention() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Why Rugs Need Their Own Cleaning Approach
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              A rug may sit on the floor like a carpet, but that does not mean it should
              automatically be treated in exactly the same way.
            </p>
            <p>
              Rugs can vary greatly in fibre, weave, backing, dyes and construction. Some are
              designed for busy family rooms, while others use materials that require more
              careful handling.
            </p>
            <p>
              Fine dirt can also work its way between rug fibres through everyday foot traffic.
              Spills may penetrate below the visible surface, and frequently walked areas can
              gradually become duller than the rest of the rug.
            </p>
            <p>
              Good rug cleaning services should therefore begin by understanding the rug rather
              than applying one standard treatment to everything.
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
