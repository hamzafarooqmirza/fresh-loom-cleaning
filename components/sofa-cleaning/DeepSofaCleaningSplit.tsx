import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function DeepSofaCleaningSplit() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/sofa-cleaning.jpg"
              alt="Technician professionally cleaning a frequently used fabric sofa"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            For Sofas Used Every Day
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Deep Sofa Cleaning for Heavily Used Seating
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>A sofa does not have to be covered in stains before it needs a deeper clean.</p>
            <p>
              Regular use can gradually affect the areas people sit on most. Favourite cushions may look duller, armrests may show darker patches and the overall fabric may lose some of its fresher appearance.
            </p>
            <p>Our sofa deep cleaning approach focuses on these signs of everyday use.</p>
            <p>
              If you want to deep clean a sofa, the fabric and condition should be considered first. The aim is not simply to use more moisture or stronger products, but to choose an appropriate method for the furniture.
            </p>
            <p>
              A professional deep sofa cleaning service can be particularly useful for family sofas, frequently used seating and furniture that has not received a thorough clean for some time.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About Deep Sofa Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
