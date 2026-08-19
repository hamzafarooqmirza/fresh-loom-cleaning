"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { contactPage } from "@/lib/data";
import { StaggerGroup, StaggerItem } from "./Stagger";

const iconMap: Record<string, LucideIcon> = { MapPin, Phone, Mail, Clock };

export default function ContactInfoCards() {
  return (
    <section className="py-16">
      <div className="container-page">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-10 text-center">
          Our Contact Details
        </h2>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactPage.cards.map((card) => {
          const Icon = iconMap[card.icon];
          return (
            <StaggerItem key={card.title}>
              <motion.div
                className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm h-full text-center"
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(11,15,82,0.15)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-navy/10 text-navy flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-slate-600">
                    {line}
                  </p>
                ))}
              </motion.div>
            </StaggerItem>
          );
        })}
        </StaggerGroup>
      </div>
    </section>
  );
}
