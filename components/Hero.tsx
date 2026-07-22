import Image from "next/image";
import { ArrowUpRight, SprayCan } from "lucide-react";
import { siteInfo, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4">
            <SprayCan size={16} /> Clean your home
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-dark leading-tight mb-6">
            Expert Carpet And Upholstery Cleaning Services
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-xl">
            Professional carpet, sofa, rug, and upholstery cleaning using advanced equipment to
            remove stains, dirt, and allergens effectively.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#services" className="btn-accent">
              Our Services <ArrowUpRight size={18} />
            </a>
            <a href={siteInfo.phoneHref} className="btn-outline">
              Call uS <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="hidden sm:flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-navy-dark">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-x-6 inset-y-4 rounded-[3rem] bg-gradient-to-br from-navy/10 via-accent/10 to-navy/5 -z-10" />
          <Image
            src="/images/hero-cleaner.png"
            alt="Professional cleaner at work"
            width={414}
            height={602}
            className="drop-shadow-2xl w-[280px] sm:w-[340px] lg:w-[380px] h-auto"
            priority
          />
          <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center justify-center w-[170px] h-[170px] rounded-full bg-white shadow-xl p-4">
            <Image
              src="/images/hero-tools.png"
              alt="Cleaning tools"
              width={284}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
