import Image from "next/image";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const results = [
  { title: "Everyday Dirt & Build-Up", image: "/images/gallery/carpet-cleaning.png" },
  { title: "Treated Marks", image: "/images/gallery/carpet-cleaning.png" },
];

export default function CarpetBeforeAfter() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            See What Professional Cleaning Can Do
          </h2>
          <p className="text-slate-600">
            Every carpet starts in a different condition, so results naturally vary. Real project
            photos are the best way to show what professional cleaning can achieve on everyday
            dirt, heavily used areas and treated marks.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-2 gap-8">
          {results.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-white">
                <div className="relative w-full aspect-[2/1]">
                  <Image
                    src={item.image}
                    alt={`Before and after carpet cleaning result: ${item.title.toLowerCase()}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 text-xs font-bold uppercase tracking-wide bg-navy-dark/80 text-white px-2.5 py-1 rounded-full">
                    Before
                  </span>
                  <span className="absolute right-3 top-3 text-xs font-bold uppercase tracking-wide bg-accent text-white px-2.5 py-1 rounded-full">
                    After
                  </span>
                </div>
                <p className="py-4 text-center font-heading font-bold text-navy-dark">
                  {item.title}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
