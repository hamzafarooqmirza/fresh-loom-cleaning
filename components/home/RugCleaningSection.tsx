import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Waves } from "lucide-react";
import Reveal from "../Reveal";

const materials = ["Wool", "Silk", "Synthetic", "Hand-Woven"];

export default function RugCleaningSection() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/rug-cleaning.jpg"
              alt="Professional rug cleaning on a patterned area rug"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="eyebrow mb-4">
            <Waves size={16} /> Professional Rug Cleaning
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Professional Rug Cleaning
          </h2>
          <p className="text-slate-600 mb-4">
            Rugs can collect a surprising amount of dirt between their fibres, especially in busy
            areas of the home. Regular vacuuming helps, but it does not replace a deeper
            professional clean.
          </p>
          <p className="text-slate-600 mb-6">
            Fresh Loom Cleaning provides{" "}
            <Link href="/services/rug-cleaning" className="text-accent-dark font-semibold hover:underline">
              professional rug cleaning
            </Link>{" "}
            to help remove accumulated dirt, marks and everyday grime while taking the rug&apos;s
            material and construction into consideration. Whether you have a modern area rug or a
            more delicate material, the cleaning method should be chosen carefully rather than
            treating every rug in exactly the same way.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {materials.map((m) => (
              <span
                key={m}
                className="text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full border border-navy/15 text-navy"
              >
                {m}
              </span>
            ))}
          </div>

          <Link href="/services/rug-cleaning" className="btn-accent">
            Explore Rug Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
