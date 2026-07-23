"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const distance = 28;

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: distance },
  down: { x: 0, y: -distance },
  left: { x: distance, y: 0 },
  right: { x: -distance, y: 0 },
  none: { x: 0, y: 0 },
};

function buildVariants(direction: Direction): Variants {
  const { x, y } = directionOffset[direction];
  return {
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={buildVariants(direction)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.div>
  );
}
