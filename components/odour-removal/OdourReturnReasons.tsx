import { Hand, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Hand,
    title: "Below the Surface",
    description:
      "Liquids and residues can travel deeper into carpet, rug and furniture materials than the visible mark suggests.",
  },
  {
    icon: Droplet,
    title: "Repeated Exposure",
    description:
      "Pet use, smoke or repeated spills can gradually build up and make the source harder to identify.",
  },
  {
    icon: Wind,
    title: "Masking vs Treating",
    description: "Fragrance may temporarily hide an unpleasant smell without dealing with the material causing it.",
  },
];

export default function OdourReturnReasons() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Why Some Smells Return After Cleaning
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              A room can smell fresh immediately after cleaning and then develop the same unpleasant odour again later.
            </p>
            <p>
              That often happens because the smell is connected to something within the material rather than simply sitting on the surface.
            </p>
            <p>
              Liquid can soak below the top of a carpet. Pet accidents may reach backing or padding. Upholstery can absorb spills and body oils. Smoke particles can settle into soft furnishings.
            </p>
            <p>
              A professional odour removal service therefore needs to consider where the smell may be coming from instead of simply covering it with fragrance.
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
