import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Target, Layers3, Building2 } from "lucide-react";
import { siteInfo } from "@/lib/data";

const trustPoints = [
  { icon: Target, label: "Targeted Stain Treatment" },
  { icon: Target, label: "Carpet & Upholstery" },
  { icon: Layers3, label: "Different Stain Types" },
  { icon: Building2, label: "Honest Expectations" },
];

export default function StainHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <Target size={16} /> Professional Stain Treatment
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Stain Removal for Carpets, Rugs & Upholstery
          </h1>
          <div
            className="space-y-4 text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              A spilled drink, dropped meal or unexpected accident can leave a mark in seconds, but removing it is rarely as simple as applying one cleaning product.
            </p>
            <p>
              {siteInfo.name} provides professional stain removal for suitable carpets, rugs and upholstered furniture. We consider what caused the mark, the material affected and any previous cleaning attempts before deciding how to approach it.
            </p>
            <p>
              From everyday spills to more stubborn marks, our aim is to treat the affected area carefully and give you a realistic idea of what improvement may be possible.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/contact-us" className="btn-navy">
              Get a Free Quote <ArrowUpRight size={18} />
            </Link>
            <a href={siteInfo.phoneHref} className="btn-navy-outline">
              <Phone size={16} /> Call {siteInfo.phone}
            </a>
          </div>
          <div
            className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-2 text-sm text-slate-600">
                <point.icon size={16} className="text-accent" />
                {point.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/services/stain-removal.jpg"
            alt="Professional stain removal treatment on carpet"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
