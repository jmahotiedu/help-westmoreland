"use client";

import { useState, useRef } from "react";
import type { GalleryItem } from "@/data/gallery";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function GalleryVideoCard({ item }: { item: GalleryItem }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCardClick = () => {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  };

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200/80">
      <button
        type="button"
        onClick={handleCardClick}
        className="w-full block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-xl overflow-hidden"
        aria-label={playing ? "Pause video" : `Play video: ${item.title}`}
      >
        <div className="relative aspect-video bg-gray-900">
          <video
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            onEnded={() => setPlaying(false)}
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
          />
          {!playing && (
            <span
              className="absolute inset-0 flex items-center justify-center bg-black/40 transition"
              aria-hidden
            >
              <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center text-primary-600 shadow-lg">
                <PlayIcon className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />
              </span>
            </span>
          )}
        </div>
      </button>
      <div className="p-4">
        <h3 className="font-display font-bold text-gray-900">{item.title}</h3>
        {item.caption && (
          <p className="text-sm text-gray-600 mt-1">{item.caption}</p>
        )}
      </div>
    </article>
  );
}
