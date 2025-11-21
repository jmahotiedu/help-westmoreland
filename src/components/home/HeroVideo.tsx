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
    if (!video || !videoSrc) return;

    const handleLoadedData = () => setIsLoaded(true);
    const handleCanPlay = () => setIsLoaded(true);
    const handleError = () => setUseFallback(true);

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    // If already ready (e.g. cached or remount), show immediately
    if (video.readyState >= 2) setIsLoaded(true);

    const playPromise = video.play();
    if (playPromise !== undefined) playPromise.catch(() => {});

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc]);

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
        preload="auto"
        poster={posterSrc}
        aria-label="Hero video showing Hurricane Melissa relief efforts"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />
      {/* While loading: show poster if available, else subtle pulse */}
      {!showVideo && !useFallback && (
        posterSrc ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${posterSrc})` }}
            aria-hidden
          />
        ) : (
          <div className="absolute inset-0 bg-gray-800/80 animate-pulse" aria-hidden />
        )
      )}
    </div>
  );
}
