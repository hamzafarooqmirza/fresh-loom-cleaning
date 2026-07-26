"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  title,
  breadcrumbLabel,
  badge,
}: {
  title: string;
  breadcrumbLabel: string;
  badge?: { value: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-4">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent">{breadcrumbLabel}</span>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="relative w-[300px] aspect-[414/602]">
            <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[125%] h-[70%] rounded-full bg-accent/15 -z-10" />
            <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[53%] rounded-full bg-accent -z-10" />
            <Image
              src="/images/hero-cleaner.png"
              alt="Freshloom cleaning team"
              width={414}
              height={602}
              className="drop-shadow-2xl w-full h-full object-contain"
              priority
            />
            {badge && (
              <div className="absolute -bottom-6 -left-6 bg-navy-dark text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-2xl font-extrabold">{badge.value}</div>
                <div className="text-sm text-white/80">{badge.label}</div>
              </div>
            )}
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
