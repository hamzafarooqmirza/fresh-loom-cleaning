import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Waves, Target, Layers3, ClipboardCheck } from "lucide-react";
import { siteInfo } from "@/lib/data";

const trustPoints = [
  { icon: Waves, label: "Material-Aware Cleaning" },
  { icon: Target, label: "Stain-Focused Care" },
  { icon: Layers3, label: "Wool Rug Cleaning" },
  { icon: ClipboardCheck, label: "Careful Rug Assessment" },
];

export default function RugHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <Waves size={16} /> Specialist Rug Care
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Rug Cleaning with Care for Every Fibre
          </h1>
          <div
            className="space-y-4 text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              Rugs bring warmth, colour and character to a room, but everyday use also exposes
              them to dust, foot traffic, spills and dirt that can settle between the fibres.
            </p>
            <p>
              {`${siteInfo.name} provides professional rug cleaning with an approach based on the rug's material, construction and current condition.`}
            </p>
            <p>
              From everyday area rugs to wool rugs that require more careful handling, we look at
              what is being cleaned before deciding on an appropriate treatment.
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
            src="/images/services/rug-cleaning.jpg"
            alt="Professional technician carefully cleaning a large area rug"
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
