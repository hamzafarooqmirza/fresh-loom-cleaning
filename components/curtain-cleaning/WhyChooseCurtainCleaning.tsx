"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Layers3, Target, MessageCircle, Award } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const features = [
  {
    icon: ClipboardCheck,
    title: "Curtain Assessment",
    description: "We consider the fabric, condition and visible problem areas before deciding on treatment.",
    span: "md:col-span-2",
  },
  {
    icon: Layers3,
    title: "Fabric-Aware Decisions",
    description: "The material helps determine which cleaning approach may be appropriate.",
    span: "",
  },
  {
    icon: Target,
    title: "Attention to Problem Areas",
    description: "Marks, handled edges and other affected sections can receive additional attention where suitable.",
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Realistic Expectations",
    description: "We explain what professional cleaning may improve without promising impossible results.",
    span: "",
  },
  {
    icon: Award,
    title: "Professional Care",
    description: "Our approach focuses on careful treatment and clear communication throughout the service.",
    span: "md:col-span-2",
  },
];

export default function WhyChooseCurtainCleaning() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Careful Cleaning Starts with Understanding the Curtains
          </h2>
          <p className="text-slate-600">
            Choosing a curtain cleaning company should involve more than applying a product to fabric. Curtains differ in material, lining, construction and condition. {siteInfo.name} considers those differences before treatment and provides clear information about what is realistic.
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
