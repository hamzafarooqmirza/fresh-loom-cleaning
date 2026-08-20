import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, SprayCan, Target, Layers3, Building2 } from "lucide-react";
import { siteInfo } from "@/lib/data";

const trustPoints = [
  { icon: SprayCan, label: "Professional Carpet Cleaning" },
  { icon: Target, label: "Stain-Focused Treatment" },
  { icon: Layers3, label: "Different Carpet Types" },
  { icon: Building2, label: "Homes & Businesses" },
];

export default function CarpetHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <SprayCan size={16} /> Professional Carpet Care
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Carpet Cleaning for a Deeper, Fresher Clean
          </h1>
          <div
            className="space-y-4 text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              Carpets deal with a lot every day — shoes, spills, dust, pets and constant foot
              traffic. Over time, dirt works its way deeper into the fibres where ordinary
              vacuuming cannot always reach.
            </p>
            <p>
              {`${siteInfo.name} provides a professional carpet cleaning service designed to lift built-up dirt, treat troublesome marks and leave your carpets looking and feeling noticeably fresher.`}
            </p>
            <p>
              Whether you need routine carpet cleaning or help with a heavily used carpet, we
              choose the cleaning approach according to the carpet, its condition and the problem
              being treated.
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
            src="/images/services/carpet-cleaning.jpg"
            alt="Professional carpet cleaning using extraction equipment in a modern home"
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
