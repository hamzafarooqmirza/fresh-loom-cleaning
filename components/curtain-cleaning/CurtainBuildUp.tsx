import { Hand, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Hand,
    title: "Settled Dust",
    description:
      "Large fabric surfaces and deep folds give fine household dust plenty of places to collect.",
  },
  {
    icon: Droplet,
    title: "Everyday Airborne Build-Up",
    description:
      "Cooking, open windows, pets and normal household activity can gradually affect curtain fabric.",
  },
  {
    icon: Wind,
    title: "Marks & Contact Areas",
    description: "Edges, lower sections and frequently handled areas can sometimes show more visible signs of use.",
  },
];

export default function CurtainBuildUp() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Curtains Collect More Than You Can See
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Curtains may not be walked on or sat on, but they are exposed to the room every day.
            </p>
            <p>
              Fine household dust can settle across folds and textured fabric. Open windows can introduce outdoor particles, while cooking, pets and everyday living can affect curtains gradually.
            </p>
            <p>
              Because these changes happen slowly, it is easy to become used to the way the fabric looks until it is compared with a cleaner section.
            </p>
            <p>
              Professional curtain cleaning services can help refresh suitable fabrics when routine dusting and household maintenance are no longer enough.
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
