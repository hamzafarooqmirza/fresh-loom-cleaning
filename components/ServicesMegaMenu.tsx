import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Armchair,
  BedDouble,
  Blinds,
  Droplets,
  KeyRound,
  PawPrint,
  Sofa,
  SprayCan,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { allServices, siteInfo } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  SprayCan,
  Sofa,
  Waves,
  Armchair,
  Droplets,
  Wind,
  Blinds,
  BedDouble,
  PawPrint,
  KeyRound,
};

export default function ServicesMegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[640px] max-w-[90vw]"
    >
      <div className="rounded-2xl bg-navy shadow-2xl overflow-hidden">
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 p-6">
          {allServices.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-accent transition-colors"
              >
                <span className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon size={16} />
                </span>
                {s.title}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-4 bg-navy-dark px-6 py-4">
          <p className="text-sm text-white/70">
            Need a quote? Call{" "}
            <a href={siteInfo.phoneHref} className="text-accent font-semibold">
              {siteInfo.phone}
            </a>
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-heading font-semibold uppercase tracking-wide text-accent hover:text-white transition-colors shrink-0"
          >
            View All Services <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
