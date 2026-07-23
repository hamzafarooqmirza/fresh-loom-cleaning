"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SprayCan } from "lucide-react";
import { galleryItems } from "@/lib/data";
import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

export default function Gallery() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center mb-4">
            <SprayCan size={16} /> Our Project
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Latest Projects From Our Works
          </h2>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-sm border border-black/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="grid grid-cols-2 text-center bg-navy-dark text-white text-sm font-semibold">
                  <div className="py-2">Before</div>
                  <div className="py-2">After</div>
                </div>
                <Image
                  src={item.image}
                  alt={`${item.title} before and after`}
                  width={1408}
                  height={768}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
