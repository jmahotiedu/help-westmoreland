"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  /** Only animate when in view (use for below-fold content). */
  whileInView?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  as: Tag = "section",
  whileInView = false,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" },
    },
  };

  const MotionTag = Tag === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial={mounted ? "hidden" : false}
      suppressHydrationWarning
      {...(whileInView
        ? { whileInView: "visible", viewport: { once: true, margin: "-40px" } }
        : { animate: "visible" })}
    >
      {children}
    </MotionTag>
  );
}
