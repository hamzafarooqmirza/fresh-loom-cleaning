"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Droplets, Wine, Utensils, Soup, Droplet, PenLine, PawPrint, CookingPot } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const stains = [
  { label: "Coffee", icon: CookingPot },
  { label: "Red Wine", icon: Wine },
  { label: "Grease", icon: Droplet },
  { label: "Food", icon: Utensils },
  { label: "Curry", icon: Soup },
  { label: "Blood", icon: Droplets },
  { label: "Ink", icon: PenLine },
  { label: "Pet Stains", icon: PawPrint },
];

export default function StainRemovalSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Stubborn Stains? We Can Help
          </h2>
          <p className="text-white/70 mb-4">
            Some spills leave marks that ordinary cleaning cannot shift easily. Coffee, red wine,
            grease, blood, curry and food stains can all behave differently depending on the
            material and how long the stain has been there.
          </p>
          <p className="text-white/70">
            Fresh Loom Cleaning provides professional{" "}
            <Link href="/services/stain-removal" className="text-accent font-semibold hover:underline">
              stain removal
            </Link>{" "}
            as part of its cleaning services, using an approach suited to the type of stain and
            surface. The sooner a difficult stain is treated, the better the chance of improving
            its appearance.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {stains.map((stain) => (
            <StaggerItem key={stain.label}>
              <motion.div
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 py-6 px-3 text-center"
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.09)" }}
                transition={{ duration: 0.2 }}
              >
                <stain.icon size={22} className="text-accent" />
                <span className="text-sm font-medium text-white/90">{stain.label}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="text-center">
          <Link href="/services/stain-removal" className="btn-accent">
            Explore Stain Removal <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
