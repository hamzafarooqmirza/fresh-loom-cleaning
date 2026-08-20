import { Hand, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Hand,
    title: "Hidden Areas Become Visible",
    description:
      "Once belongings are removed, dust and marks around shelves, edges and covered spaces become easier to see.",
  },
  {
    icon: Droplet,
    title: "High-Use Rooms Need More Attention",
    description:
      "Kitchens and bathrooms need detailed attention because of grease, soap residue, water marks and daily use.",
  },
  {
    icon: Wind,
    title: "The Whole Property Matters",
    description: "Different rooms and surfaces need to be worked through systematically.",
  },
];

export default function TenancyDifference() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            More Than an Everyday House Clean
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Routine household cleaning usually focuses on areas used day to day.
            </p>
            <p>
              At tenancy end, empty shelves, moved furniture and exposed kitchen surfaces reveal areas that were previously hidden.
            </p>
            <p>
              End of tenancy deep cleaning takes a detailed room-by-room approach.
            </p>
            <p>
              The goal is to prepare the property for handover rather than give visible surfaces a quick tidy.
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
