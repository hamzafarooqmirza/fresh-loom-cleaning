import Image from "next/image";
import Reveal from "../Reveal";

export default function RugBeforeAfter() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            See the Difference on Real Rugs
          </h2>
          <p className="text-slate-600">
            Rugs respond differently depending on their fibres, age, condition and how they have
            been used. Genuine project photographs are the best way to show the results
            professional cleaning can achieve.
          </p>
        </Reveal>

        <Reveal className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-white">
            <div className="relative w-full aspect-[2/1]">
              <Image
                src="/images/gallery/rug-cleaning.png"
                alt="Before and after area rug cleaning result"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
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
              Area Rug Cleaning
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
