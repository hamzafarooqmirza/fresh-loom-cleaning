import { Hand, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Hand,
    title: "Seat Build-Up",
    description:
      "Frequently used cushions can collect fine dirt, crumbs and signs of repeated contact.",
  },
  {
    icon: Droplet,
    title: "Armrests & Headrests",
    description:
      "These areas often become dull or darker because they are touched more often than the rest of the sofa.",
  },
  {
    icon: Wind,
    title: "Spills & Everyday Marks",
    description: "Drinks, food, pets and family life can all leave localised marks on sofa fabric.",
  },
];

export default function SofaBuildUp() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Everyday Use Leaves More Behind Than You Think
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Sofas are touched and used far more often than most other furniture.
            </p>
            <p>
              Seat cushions deal with clothing, crumbs and spills. Armrests and headrests come into frequent contact with skin and hair. Pets may use favourite corners, while food and drinks can leave marks that become harder to notice once they dry.
            </p>
            <p>
              Over time, these small things can make fabric look dull even when the sofa does not appear obviously dirty.
            </p>
            <p>
              Professional sofa cleaning services help deal with this accumulated use more thoroughly than simple vacuuming or wiping the surface.
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
