import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function LeatherHighContact() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/sofa-cleaning.jpg"
              alt="Cleaning a leather sofa armrest"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            For Well-Used Leather Furniture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Extra Attention Where Your Furniture Is Used Most
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>Leather furniture rarely becomes dirty evenly.</p>
            <p>
              A favourite seat may receive daily use while another is hardly touched. Armrests and headrests can darken through repeated contact.
            </p>
            <p>Professional leather sofa cleaning can give high-contact areas focused attention while considering surrounding leather.</p>
            <p>
              The aim is not aggressive scrubbing or making older leather look new, but careful removal of suitable surface build-up while respecting the finish.
            </p>
            <p>
              Existing wear and natural characteristics remain part of the assessment.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About Leather Sofa Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
