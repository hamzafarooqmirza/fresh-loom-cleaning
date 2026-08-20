import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function DeepOdourSplit() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/odour-removal.jpg"
              alt="Professional treatment concentrated on a persistent odour source"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            For Odours That Keep Returning
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            When a Persistent Smell Needs More Attention
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>Some odours disappear after routine cleaning. Others return because the source sits deeper within the material.</p>
            <p>
              This can happen after repeated pet accidents, large liquid spills, long-term smoke exposure or when a smell has been present for some time.
            </p>
            <p>A deep odour treatment approach focuses on the areas most likely to be contributing to the problem instead of simply adding more fragrance.</p>
            <p>
              The final result depends on how deeply the source has travelled and whether materials beneath the visible surface have also been affected. In some cases, professional treatment can make a significant improvement. In others, contamination below the surface may limit what cleaning alone can achieve.
            </p>
            <p>
              We would rather explain that clearly than promise that every persistent smell will disappear completely.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About a Persistent Odour <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
