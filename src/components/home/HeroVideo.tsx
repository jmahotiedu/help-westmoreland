"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  /** H.264 MP4 – plays on Chrome, Windows, and most browsers (required). */
  videoSrc: string;
  /** HEVC/H.265 MP4 – optional; Safari/iOS may prefer this. */
  videoSrcHevc?: string;
  posterSrc?: string;
  className?: string;
}

export default function HeroVideo({
  videoSrc,
  videoSrcHevc,
  posterSrc,
  className = "",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Show video by default; only show gradient/poster when video errors
  const [hasError, setHasError] = useState(false);

  const hasMultipleSources = Boolean(videoSrcHevc && videoSrcHevc !== videoSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      setHasError(true);
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "[HeroVideo] Video failed to load. Ensure hero-video.mp4 is H.264 encoded.",
          video.error?.message || ""
        );
      }
    };

    video.addEventListener("error", handleError);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    return () => {
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc, videoSrcHevc]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Fallback: gradient + poster only when video errors */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 transition-opacity duration-500 ${
          hasError ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden
      >
        {/* Poster image over gradient if provided */}
        {posterSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={posterSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Video: visible by default, hidden only on error */}
      <video
        ref={videoRef}
        poster={posterSrc}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          hasError ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Hero video showing Hurricane Melissa relief efforts"
        data-video-status={hasError ? "error" : "ok"}
        {...(!hasMultipleSources && { src: videoSrc })}
      >
        {hasMultipleSources && (
          <>
            {/* HEVC for Safari/iOS – no codec hint, let browser probe */}
            <source src={videoSrcHevc!} type="video/mp4" />
            {/* H.264 fallback for Chrome/Windows/etc */}
            <source src={videoSrc} type="video/mp4" />
          </>
        )}
      </video>

      {/* Overlay for text readability (lighter so video shows through) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/45 pointer-events-none" />
    </div>
  );
}
