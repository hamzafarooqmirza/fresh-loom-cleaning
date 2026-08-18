import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sofa } from "lucide-react";
import Reveal from "../Reveal";

export default function UpholsterySection() {
  return (
    <section className="py-16 lg:py-24 bg-cream relative overflow-hidden">
      <div className="hidden sm:block absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent/10 -z-0" />
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center relative">
        <Reveal direction="left" delay={0.1} className="lg:order-2">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/sofa-cleaning.jpg"
              alt="Vacuuming a sofa as part of an upholstery cleaning service"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" className="lg:order-1">
          <span className="eyebrow mb-4">
            <Sofa size={16} /> Upholstery &amp; Sofa Cleaning
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Refresh Your Sofas &amp; Upholstery
          </h2>
          <p className="text-slate-600 mb-4">
            Sofas and upholstered furniture are used every day, so they can collect dust, body
            oils, food marks and spills over time.
          </p>
          <p className="text-slate-600 mb-4">
            Our professional{" "}
            <Link href="/services/upholstery-cleaning" className="text-accent-dark font-semibold hover:underline">
              upholstery cleaning
            </Link>{" "}
            service helps remove built-up dirt from fabric furniture while taking care with the
            material being cleaned.
          </p>
          <p className="text-slate-600 mb-8">
            From everyday{" "}
            <Link href="/services/sofa-cleaning" className="text-accent-dark font-semibold hover:underline">
              sofa cleaning
            </Link>{" "}
            to more stubborn marks, Fresh Loom Cleaning can help give your furniture a cleaner,
            fresher appearance.
          </p>
          <Link href="/services/upholstery-cleaning" className="btn-accent">
            Explore Upholstery Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
