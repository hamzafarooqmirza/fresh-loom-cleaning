"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Layers3, Target, MessageCircle, Award } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const features = [
  {
    icon: ClipboardCheck,
    title: "Leather Assessment",
    description: "We consider the furniture, visible finish and overall condition before treatment.",
    span: "md:col-span-2",
  },
  {
    icon: Layers3,
    title: "Surface-Specific Care",
    description: "Leather is approached differently from carpets and ordinary fabric upholstery.",
    span: "",
  },
  {
    icon: Target,
    title: "High-Use Area Attention",
    description: "Seat cushions, armrests and headrests can receive focused attention.",
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Realistic Expectations",
    description: "Cleaning can improve suitable build-up but cannot reverse every form of wear, fading or permanent damage.",
    span: "",
  },
  {
    icon: Award,
    title: "Careful Professional Service",
    description: "Our professional leather cleaners focus on sensible treatment and clear communication.",
    span: "md:col-span-2",
  },
];

export default function WhyChooseLeather() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Leather Care Based on the Furniture in Front of Us
          </h2>
          <p className="text-slate-600">
            A leather cleaning company should not approach every sofa with one product. Leather differs in finish, age and condition. {siteInfo.name} considers these factors and explains what cleaning can realistically achieve.
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
