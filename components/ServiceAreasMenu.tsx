import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { serviceAreas, siteInfo } from "@/lib/data";

export default function ServiceAreasMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[280px]"
    >
      <div className="rounded-2xl bg-navy shadow-2xl overflow-hidden">
        <div className="p-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={16} />
              </span>
              {area.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3 bg-navy-dark px-6 py-4">
          <p className="text-sm text-white/70 whitespace-nowrap">
            Call{" "}
            <a href={siteInfo.phoneHref} className="text-accent font-semibold">
              {siteInfo.phone}
            </a>
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-1 text-sm font-heading font-semibold uppercase tracking-wide text-accent hover:text-white transition-colors"
          >
            Get a Quote <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
