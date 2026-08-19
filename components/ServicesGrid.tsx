"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { StaggerGroup, StaggerItem } from "./Stagger";

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-12">
          Our Core Cleaning Services
        </h2>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <motion.div
                id={service.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 group h-full scroll-mt-28"
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(11,15,82,0.18)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={534}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-dark mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-accent-dark hover:text-navy-dark transition-colors"
                  >
                    View Details <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
