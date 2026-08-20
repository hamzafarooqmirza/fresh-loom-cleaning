import { Layers, Sparkles, Footprints } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Layers,
    title: "Embedded Dirt",
    description:
      "Foot traffic can push fine dirt further into carpet fibres where normal vacuuming may struggle to remove it.",
  },
  {
    icon: Sparkles,
    title: "Everyday Marks",
    description:
      "Drink spills, food marks, muddy shoes and other accidents often need more focused treatment.",
  },
  {
    icon: Footprints,
    title: "High-Traffic Areas",
    description:
      "Hallways, stairs and frequently used rooms often need more attention than less-used areas.",
  },
];

export default function MoreThanSurface() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            More Than a Surface Clean
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Vacuuming is important for everyday maintenance, but it mainly deals with loose
              surface debris. Dirt, fine particles, spills and residues can gradually settle
              deeper within carpet fibres.
            </p>
            <p>
              Our professional carpet cleaning approach is designed to work beyond the surface. We
              assess the carpet first, identify areas that need extra attention and select a
              suitable cleaning method before work begins.
            </p>
            <p>
              A proper deep carpet cleaning treatment can be particularly useful for carpets
              affected by regular family life, pets, frequent visitors or busy areas where dirt
              builds up faster.
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
