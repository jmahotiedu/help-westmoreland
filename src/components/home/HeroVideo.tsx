"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  /** H.264 MP4 – plays on Chrome, Windows, and most browsers (required). */
  videoSrc: string;
  /** HEVC/H.265 MP4 – optional; used by Safari/iOS when available for better quality or smaller file. */
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
  const [hasError, setHasError] = useState(false);

  const hasMultipleSources = Boolean(videoSrcHevc && videoSrcHevc !== videoSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!hasMultipleSources && !videoSrc) return;

    let errorCheckTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleError = () => {
      // With multiple sources, the browser tries each in order; only show fallback after all fail.
      if (hasMultipleSources) {
        errorCheckTimeout = setTimeout(() => {
          if (video.error && video.readyState < 2) {
            setHasError(true);
            if (process.env.NODE_ENV === "development") {
              console.warn(
                "[HeroVideo] All sources failed:",
                video.error.message || `code ${video.error.code}`,
                "- Ensure hero-video.mp4 is H.264 and optionally hero-video-hevc.mp4 is HEVC."
              );
            }
          }
        }, 400);
      } else {
        setHasError(true);
        if (video.error && process.env.NODE_ENV === "development") {
          console.warn(
            "[HeroVideo] Video failed:",
            video.error.message || `code ${video.error.code}`,
            "- Provide H.264 at videoSrc and optionally HEVC at videoSrcHevc."
          );
        }
      }
    };
    video.addEventListener("error", handleError);

    const playPromise = video.play();
    if (playPromise !== undefined) playPromise.catch(() => {});

    return () => {
      if (errorCheckTimeout) clearTimeout(errorCheckTimeout);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc, videoSrcHevc, hasMultipleSources]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Fallback gradient only when all sources fail to load */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 transition-opacity duration-500 ${
          hasError ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden
      />
      {/* HEVC first (Safari/iOS), then H.264 (Chrome/Windows); or single source */}
      <video
        ref={videoRef}
        poster={posterSrc}
        className={`absolute inset-0 w-full h-full object-cover ${
          hasError ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
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
            <source src={videoSrcHevc!} type="video/mp4; codecs=hvc1" />
            <source src={videoSrc} type="video/mp4; codecs=avc1" />
          </>
        )}
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />
    </div>
  );
}
