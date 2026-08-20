import { Hand, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Hand,
    title: "Everyday Contact",
    description:
      "Armrests, cushions and headrests are regularly exposed to skin contact, clothing and general household use.",
  },
  {
    icon: Droplet,
    title: "Spills & Marks",
    description:
      "Food, drinks and accidental spills can settle into upholstery and become more difficult to treat over time.",
  },
  {
    icon: Wind,
    title: "Dust & Fine Debris",
    description: "Textured furniture fabrics can hold fine particles below the visible surface.",
  },
];

export default function UpholsteryBuildUp() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            What Builds Up in Upholstered Furniture?
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              A sofa or armchair may look reasonably clean while still holding the effects of
              everyday use within its fabric.
            </p>
            <p>
              Dust settles into textured fibres. Skin contact can leave oils on armrests and
              headrests. Food and drink create marks, while pets and busy family life can make
              certain seats look worn faster than others.
            </p>
            <p>
              Professional upholstery cleaning services are designed to deal with this type of
              build-up while taking the furniture&apos;s fabric into consideration.
            </p>
            <p>
              Instead of treating every piece in exactly the same way, the upholstery should first
              be checked so the cleaning approach suits both the material and its condition.
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
