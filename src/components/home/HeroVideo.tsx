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
  // Show gradient+poster until video is actually playing (avoids white/blank)
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const hasMultipleSources = Boolean(videoSrcHevc && videoSrcHevc !== videoSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlaying = () => setVideoPlaying(true);
    const handleError = () => {
      setHasError(true);
      if (process.env.NODE_ENV === "development") {
        console.warn("[HeroVideo] Video failed:", video.error?.message || "");
      }
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);

    if (video.readyState >= 2 && !video.paused) {
      setVideoPlaying(true);
    }
    const id = setInterval(() => {
      if (video.readyState >= 2 && !video.paused) {
        setVideoPlaying(true);
        clearInterval(id);
      }
    }, 200);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
      clearInterval(id);
    };
  }, [videoSrc, videoSrcHevc]);

  const showFallback = hasError || !videoPlaying;

  return (
    <div
      className={`overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 ${className}`}
    >
      {/* Gradient + poster until video is actually playing (never white) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 transition-opacity duration-500 ${
          showFallback ? "opacity-100" : "opacity-0 pointer-events-none"
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

      {/* Video: only reveal when playing */}
      <video
        ref={videoRef}
        poster={posterSrc}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showFallback ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Hero video showing Hurricane Melissa relief efforts"
        data-video-status={hasError ? "error" : videoPlaying ? "playing" : "loading"}
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
