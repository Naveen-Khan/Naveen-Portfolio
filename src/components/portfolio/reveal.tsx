"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

// Reveal-on-scroll helper. Wraps children in a motion div that fades up
// when scrolled into view. Used across every section.

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: "div" | "section" | "span" | "li";
}

export function Reveal({
  children,
  delay = 0,
  className,
  y = 30,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -15% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// For staggered children lists
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
