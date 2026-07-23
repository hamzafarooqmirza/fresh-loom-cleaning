import Image from "next/image";
import { ArrowUpRight, Tag } from "lucide-react";
import { siteInfo, stats } from "@/lib/data";

const statColors = ["text-navy-dark", "text-accent", "text-navy-dark"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4">
            <Tag size={16} /> Clean your home
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6">
            Expert Carpet And Upholstery Cleaning Services
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-xl">
            Professional carpet, sofa, rug, and upholstery cleaning using advanced equipment to
            remove stains, dirt, and allergens effectively.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#services" className="btn-navy">
              Our Services <ArrowUpRight size={18} />
            </a>
            <a href={siteInfo.phoneHref} className="btn-navy-outline">
              Call uS <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="hidden sm:flex gap-10">
            {stats.map((s, i) => (
              <div key={s.label}>
                <div className={`text-3xl font-bold font-heading ${statColors[i % statColors.length]}`}>
                  {s.value}
                </div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative z-0 w-[280px] sm:w-[340px] lg:w-[380px] aspect-[414/602]">
            <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[125%] h-[70%] rounded-full bg-accent/15 -z-10" />
            <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[53%] rounded-full bg-accent -z-10" />
            <Image
              src="/images/hero-cleaner.png"
              alt="Professional cleaner at work"
              width={414}
              height={602}
              className="drop-shadow-2xl w-full h-full object-contain"
              priority
            />
            <div className="hidden sm:block absolute -bottom-10 -right-6 w-[150px] h-[150px]">
              <Image
                src="/images/hero-tools.png"
                alt="Cleaning tools"
                width={284}
                height={300}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
