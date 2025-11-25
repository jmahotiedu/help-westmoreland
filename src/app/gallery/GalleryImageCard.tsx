import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

export default function GalleryImageCard({ item }: { item: GalleryItem }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200/80">
      <div className="relative aspect-video bg-gray-100">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-gray-900">{item.title}</h3>
        {item.caption && (
          <p className="text-sm text-gray-600 mt-1">{item.caption}</p>
        )}
      </div>
    </article>
  );
}
