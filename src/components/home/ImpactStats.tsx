"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

interface ImpactStatsProps {
  stats: Stat[];
}

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function ImpactStats({ stats }: ImpactStatsProps) {
  return (
    <div className="bg-primary-700 text-white py-10 sm:py-16">
      <div className="container mx-auto w-full min-w-0 px-4 sm:px-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1 sm:space-y-2">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-primary-100 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
