"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "../Reveal";
import { mattressFaqs } from "./mattressFaqs";

export default function MattressFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page max-w-3xl">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Professional Mattress Cleaning FAQs
          </h2>
        </Reveal>

        <div className="space-y-3">
          {mattressFaqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`rounded-xl overflow-hidden ${isOpen ? "bg-accent text-white" : "bg-white text-navy-dark"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                >
                  {faq.q}
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <motion.div
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  initial={false}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm text-white/90">{faq.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
