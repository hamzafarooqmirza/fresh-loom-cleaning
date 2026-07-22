import { ArrowUpRight } from "lucide-react";
import { siteInfo } from "@/lib/data";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-navy-dark">
      <div className="container-page text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Book Your Cleaning Today
        </h2>
        <p className="text-white/80 mb-8">
          Get professional carpet and upholstery cleaning services across the UK. Contact
          Freshloom today for a free quote and fast, reliable service. Transform your space into
          a cleaner, healthier, and fresher environment with our expert cleaning team.
        </p>
        <a href={siteInfo.phoneHref} className="btn-accent">
          Call us <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
