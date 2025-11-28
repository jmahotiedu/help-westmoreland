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
  // Start with video NOT ready – show gradient/poster until video plays
  const [videoReady, setVideoReady] = useState(false);

  const hasMultipleSources = Boolean(videoSrcHevc && videoSrcHevc !== videoSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      // Video has enough data to start playing
      setVideoReady(true);
    };

    const handlePlaying = () => {
      // Video is actually playing
      setVideoReady(true);
    };

    const handleError = () => {
      // Keep gradient visible (videoReady stays false)
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "[HeroVideo] Video failed to load. Ensure hero-video.mp4 is H.264 encoded.",
          video.error?.message || ""
        );
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);

    // Try to play
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked or failed – gradient stays visible
      });
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc, videoSrcHevc]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Gradient + poster: visible by default, fades out when video plays */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 transition-opacity duration-700 ${
          videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
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

      {/* Video: multiple sources (HEVC + H.264) or single source */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Hero video showing Hurricane Melissa relief efforts"
        data-video-status={videoReady ? "playing" : "loading"}
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

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />
    </div>
  );
}
