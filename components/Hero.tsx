"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Tag } from "lucide-react";
import { siteInfo, stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

const statColors = ["text-navy-dark", "text-accent", "text-navy-dark"];
const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <motion.span
            className="eyebrow mb-4"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <Tag size={16} /> Clean your home
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            Expert Carpet And Upholstery Cleaning Services
          </motion.h1>
          <motion.p
            className="text-slate-600 text-lg mb-8 max-w-xl"
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            Professional carpet, sofa, rug, and upholstery cleaning using advanced equipment to
            remove stains, dirt, and allergens effectively.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
          >
            <motion.a
              href="#services"
              className="btn-navy"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Services <ArrowUpRight size={18} />
            </motion.a>
            <motion.a
              href={siteInfo.phoneHref}
              className="btn-navy-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Call uS <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            className="hidden sm:flex gap-10"
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
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
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
