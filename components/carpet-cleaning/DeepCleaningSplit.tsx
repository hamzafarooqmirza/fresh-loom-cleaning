import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function DeepCleaningSplit() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/carpet-cleaning.png"
              alt="Deep carpet cleaning result in a heavily used residential living room"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            For Busy Homes &amp; High-Traffic Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Deep Carpet Cleaning for Heavily Used Carpets
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>Some carpets need more than a quick refresh.</p>
            <p>
              Busy living rooms, hallways, stairs and family spaces can gradually collect dirt
              that makes the carpet look dull even after vacuuming.
            </p>
            <p>
              Our carpet deep cleaning approach focuses on built-up dirt within the carpet rather
              than simply improving the surface appearance.
            </p>
            <p>
              A deep carpet cleaning service can be useful when a carpet has had months of regular
              use, has noticeable traffic areas or simply no longer feels as fresh as it once was.
            </p>
            <p>
              The aim is not to make unrealistic promises about making every old carpet look new.
              It is to clean it properly, treat problem areas carefully and achieve the best
              sensible result for its current condition.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About Deep Carpet Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
