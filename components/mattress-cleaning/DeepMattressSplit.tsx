import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function DeepMattressSplit() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/upholstery-cleaning.jpg"
              alt="Cleaning a mattress sofa armrest"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            For Mattresses That Need a Thorough Refresh
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Deep Mattress Cleaning for Everyday Build-Up
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>Mattress furniture rarely becomes dirty evenly.</p>
            <p>
              A favourite seat may receive daily use while another is hardly touched. Armrests and headrests can darken through repeated contact.
            </p>
            <p>Professional mattress sofa cleaning can give high-contact areas focused attention while considering surrounding mattress.</p>
            <p>
              The aim is not aggressive scrubbing or making older mattress look new, but careful removal of suitable surface build-up while respecting the finish.
            </p>
            <p>
              Existing wear and natural characteristics remain part of the assessment.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About Deep Mattress Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
