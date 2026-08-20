"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Wrench, Target, MessageCircle, Award } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const features = [
  {
    icon: ClipboardCheck,
    title: "Assessment Before Cleaning",
    description: "We look at the carpet and problem areas before deciding how the job should be approached.",
    span: "md:col-span-2",
  },
  {
    icon: Wrench,
    title: "Appropriate Cleaning Methods",
    description: "The cleaning method is selected according to the carpet and its condition.",
    span: "",
  },
  {
    icon: Target,
    title: "Focused Problem Areas",
    description: "Marks and heavily used areas can receive additional attention where appropriate.",
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Customers can ask questions about the process and what results are realistic before work begins.",
    span: "",
  },
  {
    icon: Award,
    title: "Professional Service",
    description: "Our carpet cleaners focus on providing a straightforward, professional service from enquiry through to completion.",
    span: "md:col-span-2",
  },
];

export default function WhyChooseCarpet() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            A Careful Approach to Every Carpet
          </h2>
          <p className="text-slate-600">
            Choosing a carpet cleaning company should come down to more than finding someone with
            a machine. Carpets differ in material, condition, age and how they are used. Fresh
            Loom Carpet Cleaning takes those differences into account and focuses on a practical
            cleaning approach rather than treating every job as identical.
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
