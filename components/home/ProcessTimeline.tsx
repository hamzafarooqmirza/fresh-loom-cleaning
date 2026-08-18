"use client";

import { motion } from "framer-motion";
import { MessageSquareText, ScanSearch, SprayCan, Sparkles } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Tell Us What Needs Cleaning",
    description: "Tell us whether you need carpet, sofa, upholstery, rug or stain removal and let us know what condition it is in.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "We Assess the Material",
    description: "Different carpets and fabrics need different cleaning approaches. We consider the material and the problem before cleaning.",
  },
  {
    number: "03",
    icon: SprayCan,
    title: "Professional Cleaning",
    description: "We use professional cleaning methods to work through dirt, marks and build-up.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "A Cleaner, Fresher Finish",
    description: "Once the cleaning is complete, your carpet or furnishings are left looking and feeling noticeably fresher.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Our Simple Cleaning Process
          </h2>
          <p className="text-slate-600">
            Professional cleaning does not need to be complicated. We keep the process
            straightforward, from understanding what needs cleaning to choosing the right
            approach for the material.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative h-full bg-white rounded-2xl border border-black/5 shadow-sm p-8 text-center">
                <span className="text-5xl font-extrabold text-navy/10 block mb-2">
                  {step.number}
                </span>
                <motion.div
                  className="w-14 h-14 mx-auto -mt-10 rounded-full bg-navy text-white flex items-center justify-center mb-5 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <step.icon size={24} />
                </motion.div>
                <h3 className="text-lg font-bold text-navy-dark mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
