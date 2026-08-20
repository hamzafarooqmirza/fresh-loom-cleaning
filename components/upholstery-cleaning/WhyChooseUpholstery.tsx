"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Layers3, Target, MessageCircle, Award } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const features = [
  {
    icon: ClipboardCheck,
    title: "Furniture Assessment",
    description: "We consider the upholstery and visible problem areas before deciding on the cleaning approach.",
    span: "md:col-span-2",
  },
  {
    icon: Layers3,
    title: "Fabric-Aware Approach",
    description: "Cleaning decisions are based on the material rather than automatically treating every sofa or chair the same way.",
    span: "",
  },
  {
    icon: Target,
    title: "Attention to Used Areas",
    description: "Frequently touched areas and individual marks can receive additional attention where appropriate.",
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Realistic Expectations",
    description: "We explain what professional cleaning is intended to improve without promising impossible results.",
    span: "",
  },
  {
    icon: Award,
    title: "Professional Furniture Care",
    description: "Our approach to professional furniture cleaning focuses on careful work and straightforward communication from enquiry to completion.",
    span: "md:col-span-2",
  },
];

export default function WhyChooseUpholstery() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Furniture Care That Starts With the Fabric
          </h2>
          <p className="text-slate-600">
            A good upholstery cleaner should understand that furniture is not simply another
            surface to wash. Fabric, construction, usage and condition all influence how an
            upholstered item should be approached. {siteInfo.name} focuses on understanding those
            factors before the main cleaning work begins.
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
