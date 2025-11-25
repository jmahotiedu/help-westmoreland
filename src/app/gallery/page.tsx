import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { galleryItems } from "@/data/gallery";
import GalleryVideoCard from "./GalleryVideoCard";
import GalleryImageCard from "./GalleryImageCard";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from our relief work in Westmoreland, Jamaica after Hurricane Melissa.",
};

export default function GalleryPage() {
  const videos = galleryItems.filter((i) => i.type === "video");
  const images = galleryItems.filter((i) => i.type === "image");

  return (
    <div className="min-h-screen bg-earth-100">
      <section className="py-12 sm:py-16">
        <Container>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-primary-700 mb-2">
            Gallery
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl">
            Photos and videos from our relief efforts in Westmoreland. See the
            impact of your support.
          </p>

          {videos.length > 0 && (
            <>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Videos
              </h2>
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0"
                role="list"
              >
                {videos.map((item) => (
                  <li key={item.id}>
                    <GalleryVideoCard item={item} />
                  </li>
                ))}
              </ul>
            </>
          )}

          {images.length > 0 && (
            <>
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-12 mb-6">
                Photos
              </h2>
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0"
                role="list"
              >
                {images.map((item) => (
                  <li key={item.id}>
                    <GalleryImageCard item={item} />
                  </li>
                ))}
              </ul>
            </>
          )}

          {galleryItems.length === 0 && (
            <p className="text-gray-600">
              Gallery items will appear here. Add videos and images to{" "}
              <code className="bg-gray-200 px-1 rounded">public/videos</code>{" "}
              and <code className="bg-gray-200 px-1 rounded">public/images</code>{" "}
              and list them in <code className="bg-gray-200 px-1 rounded">src/data/gallery.ts</code>.
            </p>
          )}
        </Container>
      </section>
    </div>
  );
}
