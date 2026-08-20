"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Layers3, Target, MessageCircle, Award } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const features = [
  {
    icon: ClipboardCheck,
    title: "Sofa Assessment",
    description: "We check the fabric, condition and areas showing the most use before cleaning begins.",
    span: "md:col-span-2",
  },
  {
    icon: Layers3,
    title: "Fabric-Aware Decisions",
    description: "The cleaning approach is based on the material rather than automatically using one process for every sofa.",
    span: "",
  },
  {
    icon: Target,
    title: "Attention to High-Use Areas",
    description: "Seat cushions, armrests, headrests and visible marks can receive additional attention where appropriate.",
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Realistic Expectations",
    description: "We explain what cleaning may improve without promising that every permanent mark will disappear.",
    span: "",
  },
  {
    icon: Award,
    title: "Professional Service",
    description: "Our professional sofa cleaners focus on careful work and clear communication throughout the cleaning process.",
    span: "md:col-span-2",
  },
];

export default function WhyChooseSofa() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Care That Starts with Your Sofa, Not a Standard Formula
          </h2>
          <p className="text-slate-600">
            A good sofa cleaning company should not treat every piece of furniture as identical. Different fabrics, usage patterns and existing marks all affect how a sofa should be approached. {siteInfo.name} focuses on understanding the furniture first and providing practical cleaning based on what it actually needs.
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
