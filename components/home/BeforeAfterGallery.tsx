import Image from "next/image";
import { galleryItems } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

export default function BeforeAfterGallery() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            See the Difference a Professional Clean Can Make
          </h2>
          <p className="text-slate-600">
            Every carpet, sofa and rug starts with a different level of wear. Our before-and-after
            results show the difference professional cleaning can make to everyday dirt, stains
            and heavily used furnishings.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-white">
                <div className="relative w-full aspect-[2/1]">
                  <Image
                    src={item.image}
                    alt={`Before and after ${item.title.toLowerCase()} result`}
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
