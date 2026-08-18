import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Tag } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <Tag size={16} /> Glasgow&apos;s Cleaning Specialists
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Carpet &amp; Upholstery Cleaning in Glasgow
          </h1>
          <p
            className="text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Give your carpets, sofas, rugs and upholstery a deeper clean with Fresh Loom Cleaning.
            We provide professional cleaning services designed to remove everyday dirt, stains,
            odours and built-up grime while helping your furnishings look and feel fresh again.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/contact-us" className="btn-accent">
              Get a Free Quote <ArrowUpRight size={18} />
            </Link>
            <Link href="/contact-us" className="btn-navy-outline">
              Book a Cleaning
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/carpet-cleaning.jpg"
              alt="Professional carpet cleaning in progress on a living room carpet"
              fill
              priority
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
