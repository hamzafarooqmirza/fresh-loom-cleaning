import { Sofa, Armchair, LayoutGrid } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const furniture = [
  { icon: Sofa, title: "Sofas", description: "Professional cleaning for suitable fabric sofas used throughout living rooms and family spaces." },
  { icon: Armchair, title: "Couches", description: "Careful cleaning for fabric couches affected by everyday use, marks and general build-up." },
  { icon: LayoutGrid, title: "Settees", description: "Suitable settees can be professionally cleaned according to their fabric and current condition." },
];

export default function FurnitureWeClean() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Care for Fabric Sofas, Couches & Settees
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>Whether you call it a sofa, couch or settee, the important thing is how the furniture is made and what fabric covers it.</p>
            <p>Our fabric sofa cleaning approach takes the upholstery into consideration before treatment begins.</p>
            <p>Suitable fabric couches can also benefit from fabric couch cleaning when seat cushions, armrests and frequently used areas have accumulated dirt through everyday use.</p>
            <p>For customers searching for a couch cleaning service or professional settee care, we apply the same principle: understand the furniture first, then choose a suitable cleaning approach.</p>
          </div>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {furniture.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-7">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent-dark flex items-center justify-center mb-5">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-dark mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
