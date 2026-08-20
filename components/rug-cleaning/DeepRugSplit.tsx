import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function DeepRugSplit() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/rug-cleaning.png"
              alt="Well-used area rug undergoing professional deep cleaning"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            For Rugs That Need More Attention
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            A Deeper Clean for Well-Used Rugs
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>Rugs in living rooms, hallways and other busy spaces can take a surprising amount of wear.</p>
            <p>
              Repeated foot traffic can push dirt further between the fibres, while everyday
              spills and general use can gradually affect the rug&apos;s appearance.
            </p>
            <p>
              A deep rug cleaning approach is intended for rugs that need more attention than
              routine vacuuming can provide.
            </p>
            <p>
              If you want to deep clean a rug, the material should be considered before deciding
              how that cleaning will be carried out. Stronger treatment is not automatically
              better, especially with more delicate fibres.
            </p>
            <p>
              Our focus is on cleaning the rug carefully and achieving a realistic improvement
              based on its existing condition.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About Deep Rug Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
