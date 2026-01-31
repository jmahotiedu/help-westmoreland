# Media assets

**Node.js:** This project requires **Node.js 18 or newer** for the dev server and build. Use `nvm use` if you have `.nvmrc` (Node 20). Older Node can cause images or scripts to fail.

**Hero video** supports **both computer and mobile** by offering two codecs:

| File | Codec | Used by |
|------|--------|---------|
| `videos/hero-video.mp4` | **H.264** (required) | Chrome, Windows, Edge, Firefox, most browsers |
| `videos/hero-video-hevc.mp4` | **HEVC/H.265** (optional) | Safari, iOS, newer macOS – often smaller or better quality from phones |

The hero uses both when `hero-video-hevc.mp4` exists: Safari/iOS picks HEVC first; Chrome/Windows use the H.264 fallback. If only `hero-video.mp4` exists, that single file is used (must be H.264 for Chrome).

**Hero poster:** `images/hero-poster.jpg` (from Site Photos/other). Replace as needed.

**Setting up both codecs (computer + mobile):**

1. **H.264 (required)** – `public/videos/hero-video.mp4`  
   - Must be H.264 so Chrome/Windows can play it.  
   - If your only file is from a phone (often HEVC), re-encode:  
     `ffmpeg -i input.mp4 -c:v libx264 -c:a aac -movflags +faststart public/videos/hero-video.mp4`

2. **HEVC (optional)** – `public/videos/hero-video-hevc.mp4`  
   - Use the original phone recording or an HEVC encode.  
   - Copy or re-encode and save as `hero-video-hevc.mp4`.  
   - If this file is missing, the site still works using only `hero-video.mp4` (H.264).

**Other media:** Site Photos has more `.MP4`/`.mov` and `.JPG`; convert `.mov` to `.mp4` (H.264 or HEVC as above) and add under `public/videos/` or `public/images/` as needed.

**Testing:** With the dev server running (`npm run dev`), run `npm run test:hero` to verify the video URL(s) and homepage.

---

**Gallery (videos + photos):** The `/gallery` page shows videos and photos listed in `src/data/gallery.ts`. To add items:

1. Put video files in `public/videos/` (e.g. `relief-clip.mp4`) and/or images in `public/images/` or `public/images/gallery/`.
2. Add an entry to the `galleryItems` array in `src/data/gallery.ts` with `type: "video"` or `type: "image"`, `src` (path like `/videos/relief-clip.mp4` or `/images/gallery/photo.jpg`), `title`, and optional `poster` (for videos) and `caption`.
3. Rebuild or refresh; the gallery will show the new items. Use H.264 for videos so they play in all browsers.
