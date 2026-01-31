"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
}

export default function HeroVideo({
  videoSrc,
  posterSrc,
  className = "",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsLoaded(true);
    const handleError = () => setUseFallback(true);

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    const playPromise = video.play();
    if (playPromise !== undefined) playPromise.catch(() => {});

    const t = setTimeout(() => {
      if (!video.readyState || video.readyState < 2) setUseFallback(true);
    }, 5000);

    return () => {
      clearTimeout(t);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, []);

  const showVideo = isLoaded && !useFallback;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Fallback gradient when no video/poster or load fails */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900"
        aria-hidden
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
        aria-label="Hero video showing Hurricane Melissa relief efforts"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />
      {!showVideo && !useFallback && (
        <div className="absolute inset-0 bg-gray-800/80 animate-pulse" aria-hidden />
      )}
    </div>
  );
}
