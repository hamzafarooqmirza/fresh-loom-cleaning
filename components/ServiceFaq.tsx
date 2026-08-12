"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

export default function ServiceFaq({
  faqs,
  image,
}: {
  faqs: { q: string; a: string }[];
  image: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.q}
                  className={`rounded-xl overflow-hidden ${isOpen ? "bg-accent text-white" : "bg-light text-navy-dark"}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                  >
                    {faq.q}
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm text-white/90">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <Image
            src={image}
            alt="Freshloom cleaning team at work"
            width={800}
            height={534}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </Reveal>
      </div>
    </section>
  );
}
