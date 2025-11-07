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

  // If no campaign ID is provided, show setup instructions
  if (!campaignId) {
    return (
      <div className={`bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 ${className}`}>
        <div className="text-center">
          <div className="text-4xl mb-4">💳</div>
          <h3 className="text-xl font-bold mb-3">Donation Form Ready</h3>
          <p className="text-gray-600 mb-4">
            To activate donations, please complete the Donorbox setup:
          </p>
          <ol className="text-left max-w-md mx-auto space-y-2 text-gray-700">
            <li>1. Create a Donorbox account at donorbox.org</li>
            <li>2. Create a campaign for "Help Westmoreland"</li>
            <li>3. Copy your campaign ID</li>
            <li>4. Add it to your environment variables</li>
          </ol>
          <p className="text-sm text-gray-500 mt-4">
            See <code className="bg-gray-200 px-2 py-1 rounded">DONORBOX_SETUP_GUIDE.md</code> for detailed instructions.
          </p>
        </div>
      </div>
    );
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
