import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { allServices, siteInfo } from "@/lib/data";

export default function ServiceSidebar({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="lg:sticky lg:top-28 space-y-6">
      <div className="bg-light rounded-2xl p-6">
        <p className="font-heading font-bold text-navy-dark text-lg mb-4">Our Services</p>
        <ul className="space-y-2">
          {allServices.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  s.slug === activeSlug
                    ? "bg-navy text-white"
                    : "bg-white text-navy-dark border border-black/10 hover:border-navy"
                }`}
              >
                {s.title.toUpperCase()}
                <ArrowUpRight size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-dark text-white p-6">
        <p className="text-sm text-white/70 mb-1">Need Any Help?</p>
        <p className="font-heading font-bold text-xl mb-2">Contact Our Team!</p>
        <p className="text-sm text-white/70 mb-5">
          Contact our team for fast, reliable cleaning service support today.
        </p>
        <a href={siteInfo.phoneHref} className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
            <Phone size={18} />
          </span>
          <span>
            <span className="block text-xs text-white/70">Call Us</span>
            <span className="block font-bold">{siteInfo.phone}</span>
          </span>
        </a>
      </div>
    </aside>
  );
}
