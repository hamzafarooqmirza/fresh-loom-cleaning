import { Sofa, Armchair, UtensilsCrossed, LayoutGrid, MessageCircleQuestion } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const furniture = [
  {
    icon: Sofa,
    title: "Sofas",
    description: "Frequently used seating where cushions, armrests and headrests can show everyday build-up.",
  },
  {
    icon: Armchair,
    title: "Armchairs",
    description: "Individual chairs often develop concentrated wear in the areas people touch most.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Chairs",
    description: "Fabric dining seats can be particularly vulnerable to food and drink marks.",
  },
  {
    icon: LayoutGrid,
    title: "Fabric Chairs",
    description: "Suitable upholstered chairs can benefit from professional cleaning when everyday maintenance is no longer enough.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Other Upholstered Furniture",
    description: "Customers can contact us about other fabric furniture so we can determine whether professional cleaning is appropriate.",
  },
];

export default function FurnitureWeClean() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Professional Cleaning for Everyday Upholstered Furniture
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Upholstery is not limited to sofas. Many pieces of furniture around a home or
              property can gradually collect dust, marks and signs of regular use.
            </p>
            <p>
              Our furniture cleaning services can help refresh suitable upholstered items while
              taking their fabric and construction into account.
            </p>
            <p>
              Depending on the material and condition, professional cleaning may be suitable for a
              range of commonly used furniture.
            </p>
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
