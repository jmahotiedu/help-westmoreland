"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

const container = (reduceMotion: boolean) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: reduceMotion
      ? { duration: 0 }
      : { staggerChildren: 0.12, delayChildren: 0.2 },
  },
});

const item = (reduceMotion: boolean) => ({
  hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" },
  },
});

export default function HeroContent() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
      variants={container(reduceMotion)}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        id="hero-heading"
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 drop-shadow-lg leading-tight"
        variants={item(reduceMotion)}
      >
        Rebuilding Lives in Westmoreland: One Family at a Time
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed"
        variants={item(reduceMotion)}
      >
        When Hurricane Melissa made landfall, it didn&apos;t just destroy
        homes. It tore through the parish, shattering safety, stability, and
        connection. Help Westmoreland was created to fill that gap and bring
        relief, dignity, and hope to our people.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        variants={item(reduceMotion)}
      >
        <ButtonLink href="/donate" size="lg" className="w-full sm:w-auto">
          Donate Now
        </ButtonLink>
        <ButtonLink
          href="/about"
          variant="outline"
          size="lg"
          className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700"
        >
          Learn Our Story
        </ButtonLink>
      </motion.div>
    </motion.div>
  );
}
