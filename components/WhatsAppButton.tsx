"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Fresh Loom Cleaning! I need more info about your cleaning services."
  );

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <motion.a
        href={siteInfo.phoneHref}
        className="hidden sm:flex items-center gap-2 bg-navy-dark text-white text-sm font-heading font-semibold uppercase tracking-wide px-4 py-3 rounded-full shadow-xl"
        whileHover={{ scale: 1.05, backgroundColor: "#0b0f52" }}
        whileTap={{ scale: 0.96 }}
      >
        <Phone size={16} /> Call Us
      </motion.a>
      <motion.a
        href={`https://wa.me/447778879063?text=${message}`}
        target="_blank"
        rel="nofollow noopener"
        aria-label="Chat with us on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25d366] text-white shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25d366]"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <MessageCircle size={26} fill="currentColor" strokeWidth={0} className="relative" />
      </motion.a>
    </motion.div>
  );
}
