"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Layers3, Target, MessageCircle, Award } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const features = [
  {
    icon: ClipboardCheck,
    title: "Stain Assessment",
    description: "Where possible, we consider what caused the mark before treatment begins.",
    span: "md:col-span-2",
  },
  {
    icon: Layers3,
    title: "Material Awareness",
    description: "The surface and fibres are part of the decision about how the stain should be approached.",
    span: "",
  },
  {
    icon: Target,
    title: "Focused Treatment",
    description: "Attention is directed towards the affected area rather than unnecessarily treating everything around it.",
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Realistic Results",
    description: "Some stains can improve considerably while others may have permanently changed the material.",
    span: "",
  },
  {
    icon: Award,
    title: "Clear Advice",
    description: "We explain the treatment and what result is reasonable instead of making guarantees before seeing the stain.",
    span: "md:col-span-2",
  },
];

export default function WhyChooseStainRemoval() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            A Thoughtful Approach to Difficult Marks
          </h2>
          <p className="text-slate-600">
            Choosing a stain removal company should not simply mean finding someone willing to apply the strongest chemical available. Effective treatment depends on understanding both the stain and the material affected. {siteInfo.name} focuses on careful assessment, appropriate treatment and honest expectations.
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
