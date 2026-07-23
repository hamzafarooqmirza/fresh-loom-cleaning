"use client";

import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Sofa } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { StaggerGroup, StaggerItem } from "./Stagger";

const icons = [Droplets, Sofa, ShieldCheck];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <StaggerGroup className="container-page grid md:grid-cols-3 gap-8">
        {whyChooseUs.map((item, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem key={item.title}>
              <motion.div
                className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm h-full"
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(11,15,82,0.15)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-6"
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon size={26} />
                </motion.div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
