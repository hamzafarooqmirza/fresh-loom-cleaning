"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { aboutPage } from "@/lib/data";
import { StaggerGroup, StaggerItem } from "./Stagger";

const items = [
  { ...aboutPage.vision, icon: Eye },
  { ...aboutPage.mission, icon: Target },
];

export default function VisionMission() {
  return (
    <section className="py-8 pb-16 bg-light">
      <StaggerGroup className="container-page grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <motion.div
              className="rounded-2xl bg-white border border-black/5 p-8 shadow-sm h-full"
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(11,15,82,0.15)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="w-14 h-14 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-6">
                <item.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
