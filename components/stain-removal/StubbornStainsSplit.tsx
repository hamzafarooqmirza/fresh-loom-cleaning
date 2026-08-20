import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function StubbornStainsSplit() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/stain-removal.jpg"
              alt="Professional focused treatment of a realistic household stain"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            For Marks That Need Extra Attention
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            When a Stain Needs More Than Household Cleaning
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>Some marks disappear quickly when dealt with correctly. Others remain even after repeated attempts with household products.</p>
            <p>
              A stubborn stain may contain pigments, oils or other substances that have worked further into the material. Heat, rubbing or unsuitable products can also change the way a mark responds.
            </p>
            <p>Where appropriate, deep stain removal may need careful, staged attention. Our approach to stubborn stain removal focuses on understanding the affected material and treating the problem carefully rather than repeatedly applying stronger products.</p>
            <p>
              There are situations where a stain has permanently altered the colour or fibres of the material. In those cases, cleaning may improve the appearance without removing every trace.
            </p>
            <p>
              We prefer to set realistic expectations rather than promise a perfect result before seeing the problem.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About a Stubborn Stain <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
