"use client";

import { motion, type MotionProps, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: EASE },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "header" | "article";
} & MotionProps;

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={revealUp}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
