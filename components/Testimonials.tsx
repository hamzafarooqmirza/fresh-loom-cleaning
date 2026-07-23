"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, SprayCan, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

const PAGE_SIZE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const pages = Math.ceil(testimonials.length / PAGE_SIZE);

  function go(step: 1 | -1) {
    setDir(step);
    setPage((p) => (p + step + pages) % pages);
  }

  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-4">
              <SprayCan size={16} /> Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
              Some Feedbacks From Our Customers
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              aria-label="Previous testimonials"
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              initial={{ opacity: 0, x: 40 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 * dir }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="grid md:grid-cols-3 gap-8"
            >
              {visible.map((t) => (
                <div
                  key={t.name}
                  className="bg-light rounded-2xl p-8 shadow-sm border border-black/5 relative"
                >
                  <Quote className="text-navy/10 absolute top-6 right-6" size={40} />
                  <div className="flex gap-1 text-accent mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-bold text-navy-dark">{t.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
