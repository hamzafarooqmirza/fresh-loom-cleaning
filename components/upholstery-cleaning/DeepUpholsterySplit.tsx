import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function DeepUpholsterySplit() {
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
            For Well-Used Furniture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Deep Cleaning for Everyday Furniture
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>The furniture used most often is usually the first to show signs of everyday life.</p>
            <p>
              Favourite seats can become duller than surrounding areas. Armrests may develop
              darker patches from repeated contact, while cushions can collect small marks and
              general grime.
            </p>
            <p>Deep upholstery cleaning gives these areas more attention than a simple surface refresh.</p>
            <p>
              Our approach is particularly useful for well-used sofas, armchairs and other fabric
              furniture where ordinary household cleaning is no longer producing the result you
              want.
            </p>
            <p>
              We focus on improving the actual condition of the upholstery rather than making
              unrealistic promises about making older furniture look brand new.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About Upholstery Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
