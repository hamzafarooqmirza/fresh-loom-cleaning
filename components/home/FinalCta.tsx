import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
      <Image
        src="/images/services/upholstery-cleaning.jpg"
        alt="Professional upholstery steam cleaning"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy-dark/80 to-navy-dark/95" />

      <Reveal className="container-page relative text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready for a Cleaner, Fresher Home?
        </h2>
        <p className="text-white/80 mb-10">
          Whether you need carpet cleaning, sofa cleaning, upholstery cleaning, rug cleaning or
          help with a stubborn stain, {siteInfo.name} is ready to help. Tell us what needs
          cleaning and we&apos;ll help you choose the right service.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact-us" className="btn-accent">
            Get Your Free Quote <ArrowUpRight size={18} />
          </Link>
          <a
            href={siteInfo.phoneHref}
            className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full hover:bg-white hover:text-navy-dark transition-colors"
          >
            <Phone size={18} /> Call {siteInfo.name}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
