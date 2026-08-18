"use client";

import { useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "../Reveal";

const faqs = [
  {
    q: "What cleaning services does Fresh Loom Cleaning provide?",
    a: "We provide professional carpet, upholstery, sofa and rug cleaning, along with specialist stain removal and other cleaning services.",
  },
  {
    q: "Do you provide carpet cleaning in Glasgow?",
    a: "Yes. Fresh Loom Cleaning provides professional carpet cleaning for customers across Glasgow and surrounding areas.",
  },
  {
    q: "Can you remove difficult carpet stains?",
    a: "We can treat many common stains, including coffee, food, grease, wine and other marks. Results depend on the type of stain, the material and how long it has been present.",
  },
  {
    q: "Can you clean sofas and upholstered furniture?",
    a: "Yes. We provide professional upholstery and sofa cleaning using methods suited to the material being treated.",
  },
  {
    q: "Can you clean rugs?",
    a: "Yes. We provide professional rug cleaning and select the cleaning approach according to the rug's material and condition.",
  },
  {
    q: "How often should carpets be professionally cleaned?",
    a: "It depends on factors such as foot traffic, pets, children and general use. A professional deep clean can be useful when regular vacuuming is no longer enough to keep the carpet looking fresh.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-light">
      <Script id="home-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <div className="container-page max-w-3xl">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`rounded-xl overflow-hidden ${isOpen ? "bg-accent text-white" : "bg-white text-navy-dark"}`}
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
      </div>
    </section>
  );
}
