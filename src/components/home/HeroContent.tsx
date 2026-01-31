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
      className="relative z-10 text-center text-primary-700 px-4 max-w-5xl mx-auto"
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
        When Hurricane Melissa made landfall in New Hope, Westmoreland, it
        didn&apos;t just destroy homes. It tore through the parish, shattering
        safety, stability, and connection. Families were cut off. Children
        slept in wet clothes. Elders went without medication. Entire communities
        waited, praying help would reach them in time. In that moment, one
        truth became impossible to ignore: Westmoreland needed its own lifeline,
        a movement that refuses to let families suffer in silence. Help
        Westmoreland was created to fill that gap and bring relief, dignity,
        and hope to our people.
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
          className="w-full sm:w-auto border-2 border-primary-700 text-primary-700 bg-white/90 hover:bg-primary-700 hover:text-white hover:border-primary-700"
        >
          Learn Our Story
        </ButtonLink>
      </motion.div>
    </motion.div>
  );
}
