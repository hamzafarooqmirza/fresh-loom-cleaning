"use client";

import { motion } from "framer-motion";
import { CalendarCheck, SprayCan, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/lib/data";
import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

const icons = [CalendarCheck, SprayCan, CheckCircle2];

export default function Process({
  variant = "navy",
  title = "Easy Steps To Works",
}: {
  variant?: "navy" | "accent";
  title?: string;
}) {
  const iconBg = variant === "accent" ? "bg-accent" : "bg-navy";

  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center mb-4">
            <SprayCan size={16} /> Working Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">{title}</h2>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-3 gap-8">
          {processSteps.map((s, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={s.step}>
                <motion.div
                  className="relative text-center bg-white rounded-2xl p-10 shadow-sm h-full"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-full ${iconBg} text-white flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon size={28} />
                  </motion.div>
                  <span className="absolute top-4 right-6 text-5xl font-extrabold text-navy/10">
                    {s.step}
                  </span>
                  <h3 className="text-lg font-bold text-navy-dark">{s.title}</h3>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
