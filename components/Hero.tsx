"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Tag } from "lucide-react";
import { stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

const statColors = ["text-navy-dark", "text-accent", "text-navy-dark"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="eyebrow mb-4 animate-fade-up">
            <Tag size={16} /> Glasgow&apos;s Cleaning Specialists
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Carpet &amp; Upholstery Cleaning in Glasgow
          </h1>
          <p
            className="text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Give your carpets, sofas, rugs and upholstery a deeper clean with Fresh Loom Cleaning.
            We provide professional cleaning services designed to remove everyday dirt, stains,
            odours and built-up grime while helping your furnishings look and feel fresh again.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <motion.a
              href="/contact-us"
              className="btn-navy"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Free Quote <ArrowUpRight size={18} />
            </motion.a>
            <motion.a
              href="/contact-us"
              className="btn-navy-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Cleaning
            </motion.a>
          </div>

          <div className="flex gap-6 sm:gap-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((s, i) => (
              <div key={s.label}>
                <div className={`text-2xl sm:text-3xl font-bold font-heading ${statColors[i % statColors.length]}`}>
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative z-0 w-[280px] sm:w-[340px] lg:w-[380px] aspect-[414/602]">
            <motion.div
              className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[125%] h-[70%] rounded-full bg-accent/15 -z-10"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[53%] rounded-full bg-accent -z-10"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <Image
              src="/images/hero-cleaner.png"
              alt="Professional cleaner at work"
              width={414}
              height={602}
              className="drop-shadow-2xl w-full h-full object-contain"
              priority
            />
            <motion.div
              className="hidden sm:block absolute -bottom-10 -right-6 w-[150px] h-[150px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero-tools.png"
                alt="Cleaning tools"
                width={284}
                height={300}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
