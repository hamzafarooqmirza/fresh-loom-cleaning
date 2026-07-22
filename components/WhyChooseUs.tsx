import { Droplets, ShieldCheck, Sofa } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const icons = [Droplets, Sofa, ShieldCheck];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid md:grid-cols-3 gap-8">
        {whyChooseUs.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-6">
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
