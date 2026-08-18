import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, SprayCan } from "lucide-react";
import Reveal from "../Reveal";

export default function CarpetCleaningSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/carpet-cleaning.jpg"
              alt="Vacuuming a carpet as part of a professional deep clean"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="eyebrow mb-4">
            <SprayCan size={16} /> Professional Carpet Cleaning
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Professional Carpet Cleaning in Glasgow
          </h2>
          <p className="text-slate-600 mb-4">
            Clean carpets can make a noticeable difference to how a room looks and feels. However,
            vacuuming alone cannot always remove the dirt, stains and fine particles that become
            trapped deeper in carpet fibres.
          </p>
          <p className="text-slate-600 mb-4">
            Fresh Loom Cleaning provides{" "}
            <Link href="/services/carpet-cleaning" className="text-accent-dark font-semibold hover:underline">
              professional carpet cleaning
            </Link>{" "}
            in Glasgow for homes and businesses. We work on carpets affected by everyday foot
            traffic, spills, marks and general wear, using cleaning methods suited to the carpet.
          </p>
          <p className="text-slate-600 mb-8">
            Whether your carpet needs a routine deep clean or you are dealing with a difficult
            stain, professional carpet cleaning can help restore a cleaner and fresher appearance.
          </p>
          <Link href="/services/carpet-cleaning" className="btn-accent">
            Book Carpet Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
