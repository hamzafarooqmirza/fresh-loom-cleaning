import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";

export default function CurtainFinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
      <Image
        src="/images/services/upholstery-cleaning.jpg"
        alt="Fresh full-length curtains in a residential interior"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy-dark/80 to-navy-dark/95" />

      <Reveal className="container-page relative text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wide text-accent mb-3 block">
          Do Your Curtains Need Refreshing?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Bring a Fresher Feel Back to Your Curtains
        </h2>
        <p className="text-white/80 mb-8">
          Whether your curtains have collected everyday dust, developed visible marks or need professional attention after long-term use, {siteInfo.name} can help you understand the appropriate next step. Tell us about your curtains, their condition and anything you would particularly like us to look at.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link href="/contact-us" className="btn-accent">
            Get a Free Quote <ArrowUpRight size={18} />
          </Link>
          <a
            href={siteInfo.phoneHref}
            className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full hover:bg-white hover:text-navy-dark transition-colors"
          >
            <Phone size={18} /> Call {siteInfo.phone}
          </a>
        </div>

        <div className="inline-flex flex-col items-center gap-1 text-sm text-white/70 border-t border-white/15 pt-6">
          <span className="font-heading font-bold text-white">{siteInfo.name}</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {siteInfo.address}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} /> {siteInfo.phone}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
