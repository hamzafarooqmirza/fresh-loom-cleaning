import { Hand, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Hand,
    title: "Body Oils & Perspiration",
    description:
      "Headrests, armrests and favourite seats receive repeated contact from hands, skin, hair and clothing.",
  },
  {
    icon: Droplet,
    title: "Dust & Fine Debris",
    description:
      "Fine dust and household build-up can settle on the surface and around seams and creases.",
  },
  {
    icon: Wind,
    title: "Spills & Marks",
    description: "Food, drinks and other substances can leave visible marks or affect the mattress appearance.",
  },
];

export default function MattressBuildUp() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            What Everyday Use Leaves Behind
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Mattress does not hold dirt like carpet or woven upholstery, but it is still affected by everyday life.
            </p>
            <p>
              Frequently used areas can collect body oils, dust and grime. Armrests and headrests often change before less-used sections, while spills can leave noticeable marks.
            </p>
            <p>
              Mattress surfaces, seams and creases can each show use differently.
            </p>
            <p>
              Good mattress cleaning services take these differences into account instead of treating mattress like ordinary fabric upholstery.
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
