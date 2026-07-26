"use client";

import { motion } from "framer-motion";
import { Armchair, BedDouble, Blinds, KeyRound, PawPrint, SprayCan, type LucideIcon } from "lucide-react";
import { moreServices } from "@/lib/data";
import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

const iconMap: Record<string, LucideIcon> = {
  Blinds,
  Armchair,
  BedDouble,
  PawPrint,
  KeyRound,
};

export default function AdditionalServices() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center mb-4">
            <SprayCan size={16} /> More Ways We Help
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Additional Cleaning Services
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.slug}>
                <motion.div
                  id={service.slug}
                  className="flex gap-4 bg-white rounded-2xl border border-black/5 p-6 shadow-sm h-full scroll-mt-28"
                  whileHover={{ y: -4, boxShadow: "0 16px 32px -12px rgba(11,15,82,0.15)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-navy/10 text-navy flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-dark mb-1">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
