# Media assets

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
