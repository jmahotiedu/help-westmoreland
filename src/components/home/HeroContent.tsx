"use client";

import { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto w-full min-w-0 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]"
      variants={container(reduceMotion)}
      initial={mounted ? "hidden" : false}
      animate="visible"
      suppressHydrationWarning
    >
      <motion.h1
        id="hero-heading"
        className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 drop-shadow-2xl"
        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}
        variants={item(reduceMotion)}
        suppressHydrationWarning
      >
        Rebuilding Lives in Westmoreland: One Family at a Time
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-xl leading-relaxed"
        style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)' }}
        variants={item(reduceMotion)}
        suppressHydrationWarning
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
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto"
        variants={item(reduceMotion)}
        suppressHydrationWarning
      >
        <ButtonLink
          href="/donate"
          size="lg"
          className="w-full sm:w-auto min-h-[48px] justify-center bg-accent-600 hover:bg-accent-700 text-white font-bold shadow-lg"
        >
          Donate Now
        </ButtonLink>
        <ButtonLink
          href="/about"
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary-700 hover:border-white min-h-[48px] justify-center font-semibold shadow-lg"
        >
          Learn Our Story
        </ButtonLink>
      </motion.div>
    </motion.div>
  );
}
