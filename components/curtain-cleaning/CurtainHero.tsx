import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Target, Layers3, Building2 } from "lucide-react";
import { siteInfo } from "@/lib/data";

const trustPoints = [
  { icon: Target, label: "Fabric-Aware Care" },
  { icon: Target, label: "Professional Treatment" },
  { icon: Layers3, label: "Stain Attention" },
  { icon: Building2, label: "Curtain & Drape Cleaning" },
];

export default function CurtainHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <Target size={16} /> Professional Curtain Care
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Curtain Cleaning for Fresher, Brighter Fabrics
          </h1>
          <div
            className="space-y-4 text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              Curtains spend every day exposed to dust, household activity and the air moving through a room. Over time, fabric can lose its fresh appearance even when there are no obvious marks.
            </p>
            <p>
              {siteInfo.name} provides professional curtain cleaning with an approach that considers the fabric, construction and condition of the curtains before treatment begins.
            </p>
            <p>
              Whether your curtains need general refreshing or attention to particular marks and areas, we focus on appropriate care rather than treating every fabric in exactly the same way.
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
            src="/images/services/upholstery-cleaning.jpg"
            alt="Professional curtain cleaning in a residential home"
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
