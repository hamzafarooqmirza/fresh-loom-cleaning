"use client";

import { motion } from "framer-motion";
import { Layers, Target, Award, HeartHandshake } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const benefits = [
  {
    icon: Layers,
    title: "Deep Fibre Cleaning",
    description: "We target dirt and grime that regular vacuuming cannot remove.",
  },
  {
    icon: Target,
    title: "Stain-Focused Treatment",
    description: "We treat common marks and stubborn stains according to the material and type of stain.",
  },
  {
    icon: Award,
    title: "Professional Results",
    description: "Our cleaning approach is designed around the carpet, fabric, rug or furniture being treated.",
  },
  {
    icon: HeartHandshake,
    title: "Careful Cleaning",
    description: "We take care with different fibres and materials to help protect the appearance of your furnishings.",
  },
];

export default function TrustBenefits() {
  return (
    <section className="py-16 lg:py-24">
      <Reveal className="container-page max-w-2xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
          A Fresh Start for Your Carpets and Upholstery
        </h2>
        <p className="text-slate-600">
          Daily life leaves its mark. Foot traffic, spills, pet mess, dust and general use can
          gradually make carpets and furniture look tired. Fresh Loom Cleaning uses professional
          cleaning methods to lift dirt and stains from deep within the fibres, helping your
          carpets, sofas and upholstery look cleaner and feel fresher again.
        </p>
      </Reveal>

      <StaggerGroup className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((item) => (
          <StaggerItem key={item.title}>
            <motion.div
              className="h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(11,15,82,0.15)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent-dark flex items-center justify-center mb-5">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-navy-dark mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
