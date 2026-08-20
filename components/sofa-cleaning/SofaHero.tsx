import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Sofa, Target, Layers3, Building2 } from "lucide-react";
import { siteInfo } from "@/lib/data";

const trustPoints = [
  { icon: Sofa, label: "Fabric-Aware Cleaning" },
  { icon: Target, label: "Seat & Armrest Care" },
  { icon: Layers3, label: "Stain-Focused Treatment" },
  { icon: Building2, label: "Professional Sofa Cleaning" },
];

export default function SofaHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <Sofa size={16} /> Professional Sofa Care
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Sofa Cleaning for a Fresher, More Comfortable Home
          </h1>
          <div
            className="space-y-4 text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              Your sofa is one of the most used pieces of furniture in the home. Sitting, relaxing, eating, pets and everyday family life can gradually leave fabric looking tired and less fresh.
            </p>
            <p>
              {siteInfo.name} provides professional sofa cleaning designed to deal with built-up dirt, everyday marks and heavily used areas while considering the fabric before cleaning begins.
            </p>
            <p>
              Whether your sofa needs a routine refresh or a deeper clean after regular use, we choose the approach according to the material, condition and areas that need attention.
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
            src="/images/services/sofa-cleaning.jpg"
            alt="Professional technician cleaning a fabric sofa with upholstery extraction equipment"
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
