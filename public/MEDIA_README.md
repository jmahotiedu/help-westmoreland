# Media assets

**Hero video** (`videos/hero-video.mp4`) and **hero poster** (`images/hero-poster.jpg`) were copied from:

- **Relief Site / Site Photos / other/**  
  - Video: `VID-20251106-WA0004.MP4` → `hero-video.mp4`  
  - Image: `041a0dac-f1ab-47f8-ab27-77aedf8a8749.JPG` → `hero-poster.jpg`

To use a different hero clip or poster, replace these files (keep the same names so the homepage keeps working), or update the paths in `src/app/page.tsx` and `HeroVideo.tsx`.

**Other media in Site Photos** you can add later:

- **Site Photos (root):** `good.mov`, `One good shot.mov`, `good cut end.mov`, etc. — convert `.mov` to `.mp4` for best browser support, then place in `public/videos/` and reference from any page.
- **Site Photos / other:** More `.MP4` and `.JPG` files for galleries, impact sections, or About/Mission visuals. Copy into `public/images/` or `public/videos/` and use paths like `/images/yourfile.jpg` or `/videos/yourfile.mp4`.
