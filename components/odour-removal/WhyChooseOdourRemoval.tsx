"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Layers3, Target, MessageCircle, Award } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const features = [
  {
    icon: ClipboardCheck,
    title: "Source-Focused Assessment",
    description: "We consider where the smell appears strongest and what may have caused it.",
    span: "md:col-span-2",
  },
  {
    icon: Layers3,
    title: "Material-Aware Treatment",
    description: "Carpets, rugs and upholstery can respond differently, so the affected material matters.",
    span: "",
  },
  {
    icon: Target,
    title: "Targeted Attention",
    description: "Treatment can be focused on relevant areas rather than unnecessarily treating the whole room.",
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Honest Expectations",
    description: "We explain when professional treatment may help and when deeper contamination could limit the result.",
    span: "",
  },
  {
    icon: Award,
    title: "Clear Advice",
    description: "We provide practical information about treatment, drying and anything else that may affect the outcome.",
    span: "md:col-span-2",
  },
];

export default function WhyChooseOdourRemoval() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            A Practical Approach to Unwanted Odours
          </h2>
          <p className="text-slate-600">
            Persistent smells can be frustrating, especially when you have already cleaned the area yourself. {siteInfo.name} approaches odour problems by looking at the material and possible source rather than promising that a single product will solve every situation.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title} className={feature.span}>
              <motion.div
                className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-7"
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(11,15,82,0.15)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent-dark flex items-center justify-center mb-5">
                  <feature.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-dark mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
