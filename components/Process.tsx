import { CalendarCheck, SprayCan, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/lib/data";

const icons = [CalendarCheck, SprayCan, CheckCircle2];

export default function Process() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center mb-4">
            <SprayCan size={16} /> Working Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">Easy Steps To Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.step} className="relative text-center bg-white rounded-2xl p-10 shadow-sm">
                <div className="w-16 h-16 mx-auto rounded-full bg-navy text-white flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>
                <span className="absolute top-4 right-6 text-5xl font-extrabold text-navy/10">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-navy-dark">{s.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
