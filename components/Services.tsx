"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, SprayCan } from "lucide-react";
import { services } from "@/lib/data";
import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-4">
              <SprayCan size={16} /> Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
              The Services We Provide for Our Customers
            </h2>
          </div>
          <Link href="/services" className="btn-outline shrink-0">
            More Services <ArrowUpRight size={18} />
          </Link>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-sm group h-full"
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
                    Read More <ArrowUpRight size={16} />
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
