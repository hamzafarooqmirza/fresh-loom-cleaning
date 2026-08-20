import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Target, Layers3, Building2 } from "lucide-react";
import { siteInfo } from "@/lib/data";

const trustPoints = [
  { icon: Target, label: "Source-Focused Treatment" },
  { icon: Target, label: "Carpets & Upholstery" },
  { icon: Layers3, label: "Pet Odour Treatment" },
  { icon: Building2, label: "Honest Assessment" },
];

export default function OdourHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <Target size={16} /> Professional Odour Treatment
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Odour Removal for a Fresher Home
          </h1>
          <div
            className="space-y-4 text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              Unpleasant smells can linger long after the original spill, accident or source is no longer visible.
            </p>
            <p>
              Pet accidents, smoke, food, damp-smelling fabrics and everyday use can leave odours trapped in carpets, rugs and upholstered furniture. Sprays may cover the smell for a short time, but masking it does not always deal with what is causing it.
            </p>
            <p>
              {siteInfo.name} provides professional odour removal for suitable soft furnishings, with treatment focused on the affected material and the likely source of the smell.
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
            src="/images/services/odour-removal.jpg"
            alt="Professional odour treatment on carpet"
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
