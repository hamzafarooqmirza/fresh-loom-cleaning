"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Tag } from "lucide-react";
import { siteInfo, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-14 lg:py-20">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <Tag size={16} /> Glasgow&apos;s Cleaning Specialists
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-5 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Carpet Cleaning in Glasgow
          </h1>
          <p
            className="text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Professional carpet cleaning for homes across Glasgow, helping to remove built-up
            dirt, everyday marks and stains while leaving carpets cleaner and refreshed.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <motion.a
              href="/contact-us"
              className="btn-navy"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Request a Quote <ArrowUpRight size={18} />
            </motion.a>
            <a
              href={siteInfo.phoneHref}
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-navy-dark hover:text-accent transition-colors"
            >
              <span className="w-11 h-11 shrink-0 rounded-full border-2 border-navy/15 flex items-center justify-center">
                <Phone size={16} />
              </span>
              Call 07778 879063
            </a>
          </div>

          <div
            className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-navy/10 max-w-md animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-heading font-bold text-navy-dark">{s.value}</span>{" "}
                <span className="text-sm text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative z-0 w-full max-w-[440px] aspect-[4/3]">
            <div className="hidden sm:block absolute -right-6 -bottom-6 w-40 h-40 rounded-full bg-accent -z-10" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/services/carpet-cleaning.jpg"
                alt="Professional carpet cleaning technician vacuuming a carpet in a Glasgow home"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
