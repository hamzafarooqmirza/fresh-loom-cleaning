"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Star, Tag } from "lucide-react";
import { siteInfo, stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

const statColors = ["text-navy-dark", "text-accent", "text-navy-dark"];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 right-1/3 w-72 h-72 rounded-full bg-navy/10 blur-3xl" />

      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <motion.div
            className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent">About Us</span>
          </motion.div>

          <motion.span
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Tag size={16} /> Who We Are
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          >
            The Team Behind Every Fresh, Spotless Home
          </motion.h1>

          <motion.p
            className="text-slate-600 text-lg mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          >
            For over a decade, Freshloom Carpet &amp; Upholstery Cleaning Limited has helped
            homes and businesses across the UK breathe easier &mdash; one deep clean at a time.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Link href="/services" className="btn-navy">
              Our Services <ArrowUpRight size={18} />
            </Link>
            <a href={siteInfo.phoneHref} className="btn-navy-outline">
              Call Us <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="flex gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {stats.map((s, i) => (
              <div key={s.label}>
                <div className={`text-3xl font-bold font-heading ${statColors[i % statColors.length]}`}>
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:flex justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="relative w-[320px] aspect-[414/602]">
            <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[125%] h-[70%] rounded-full bg-accent/15 -z-10" />
            <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[53%] rounded-full bg-accent -z-10" />
            <Image
              src="/images/hero-cleaner.png"
              alt="Fresh Loom Carpet Cleaning team"
              width={414}
              height={602}
              className="drop-shadow-2xl w-full h-full object-contain"
              priority
            />

            <motion.div
              className="absolute -bottom-6 -left-6 bg-navy-dark text-white rounded-2xl px-6 py-4 shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-2xl font-extrabold">10+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </motion.div>

            <motion.div
              className="absolute top-6 -left-10 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm font-bold text-navy-dark whitespace-nowrap">
                Trusted by 1,000+
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <svg
        className="block w-full h-10 sm:h-16 text-white"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
        />
      </svg>
    </section>
  );
}
