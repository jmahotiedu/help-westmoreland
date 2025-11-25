/**
 * Gallery items: videos and photos shown on /gallery.
 * Add files to public/videos/ or public/images/gallery/, then add an entry here.
 */

export type GalleryItem = {
  id: string;
  type: "video" | "image";
  /** Path under public (e.g. /videos/hero-video.mp4 or /images/gallery/photo.jpg) */
  src: string;
  /** Optional poster for video (thumbnail); fallback is first frame */
  poster?: string;
  title: string;
  caption?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "hero-video",
    type: "video",
    src: "/videos/hero-video.mp4",
    poster: "/images/hero-poster.jpg",
    title: "Hurricane Melissa relief efforts",
    caption: "Our team on the ground in Westmoreland.",
  },
  {
    id: "hero-poster",
    type: "image",
    src: "/images/hero-poster.jpg",
    title: "Westmoreland community",
    caption: "Families and volunteers in Westmoreland.",
  },
  // Add more: put files in public/videos/ or public/images/gallery/, then add entries above.
];
