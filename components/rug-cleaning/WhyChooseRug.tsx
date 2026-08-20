"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Layers3, Target, MessageCircle, Award } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const features = [
  {
    icon: ClipboardCheck,
    title: "Individual Rug Assessment",
    description: "We consider the rug and its current condition before deciding how to approach the job.",
    span: "md:col-span-2",
  },
  {
    icon: Layers3,
    title: "Material-Aware Cleaning",
    description: "Different fibres can require different care, so the material forms part of the cleaning decision.",
    span: "",
  },
  {
    icon: Target,
    title: "Attention to Problem Areas",
    description: "Visible spots and heavily used sections can receive focused attention where appropriate.",
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Honest Expectations",
    description: "We explain what professional cleaning is intended to improve without guaranteeing impossible results.",
    span: "",
  },
  {
    icon: Award,
    title: "Professional Care",
    description: "Our approach focuses on careful work, sensible cleaning decisions and clear communication throughout the service.",
    span: "md:col-span-2",
  },
];

export default function WhyChooseRug() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Rug Care That Begins with Understanding the Material
          </h2>
          <p className="text-slate-600">
            {`Rugs can differ significantly, even when they look similar at first glance. ${siteInfo.name} takes a considered approach by looking at the rug, identifying visible problems and considering the material before the main treatment begins. Our goal is straightforward: provide careful, professional cleaning without making promises that cannot be made before the rug has been assessed.`}
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
