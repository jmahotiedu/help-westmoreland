"use client";

import { useEffect, useRef, useState } from "react";

interface DonorboxEmbedProps {
  campaignId?: string;
  className?: string;
  defaultAmount?: number;
  showRecurring?: boolean;
}

export default function DonorboxEmbed({
  campaignId,
  className = "",
  defaultAmount,
  showRecurring = true,
}: DonorboxEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!campaignId) return;

    // Load Donorbox script
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.setAttribute("paypalExpress", "false");
    script.async = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [campaignId]);

  if (!campaignId) {
    return null;
  }

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="bg-gray-100 rounded-lg p-8 animate-pulse">
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      )}

      {/* Donorbox iframe */}
      <iframe
        src={`https://donorbox.org/embed/${campaignId}${defaultAmount ? `?default_interval=o&amount=${defaultAmount}` : ""}${showRecurring ? "" : "&hide_recurring=true"}`}
        name="donorbox"
        title="Donorbox donation form"
        width="100%"
        height="900px"
        className={`rounded-lg shadow-lg transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        style={{
          maxWidth: "500px",
          minWidth: "250px",
          maxHeight: "none",
          border: "none",
        }}
      />
    </div>
  );
}
