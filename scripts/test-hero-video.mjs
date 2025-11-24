#!/usr/bin/env node
/**
 * Test hero video and homepage.
 * Run with: node scripts/test-hero-video.mjs
 * Requires dev server: npm run dev (in another terminal)
 */
const BASE = process.env.BASE_URL || "http://localhost:3000";

async function test() {
  console.log("Testing hero video and homepage at", BASE, "\n");

  let ok = true;

  // 1. H.264 video (required for Chrome/Windows)
  try {
    const videoRes = await fetch(`${BASE}/videos/hero-video.mp4`, { method: "HEAD" });
    const ct = videoRes.headers.get("content-type") || "";
    if (videoRes.status !== 200) {
      console.error("FAIL: /videos/hero-video.mp4 (H.264) returned", videoRes.status);
      ok = false;
    } else if (!ct.includes("video")) {
      console.warn("WARN: Content-Type is", ct, "(expected video/mp4)");
    } else {
      console.log("OK: /videos/hero-video.mp4 (H.264) returns 200", ct);
    }
  } catch (e) {
    console.error("FAIL: Could not reach H.264 video URL:", e.message);
    ok = false;
  }

  // 2. HEVC video (optional, for Safari/iOS)
  try {
    const hevcRes = await fetch(`${BASE}/videos/hero-video-hevc.mp4`, { method: "HEAD" });
    if (hevcRes.status === 200) {
      console.log("OK: /videos/hero-video-hevc.mp4 (HEVC) returns 200 – computer + mobile supported");
    } else {
      console.log("INFO: /videos/hero-video-hevc.mp4 not found (optional; add for Safari/iOS)");
    }
  } catch (e) {
    console.log("INFO: HEVC URL not reachable (optional)");
  }

  // 3. Homepage returns 200 and contains video element
  try {
    const homeRes = await fetch(BASE);
    if (homeRes.status !== 200) {
      console.error("FAIL: Homepage returned", homeRes.status);
      ok = false;
    } else {
      const html = await homeRes.text();
      const hasVideo = html.includes("/videos/hero-video.mp4") || html.includes('src="/videos/');
      const hasPoster = html.includes("/images/hero-poster");
      console.log("OK: Homepage returns 200");
      if (!hasVideo) console.warn("WARN: Homepage HTML does not reference hero video src");
      else console.log("OK: Homepage includes hero video reference");
      if (hasPoster) console.log("OK: Homepage includes poster image reference");
    }
  } catch (e) {
    console.error("FAIL: Could not reach homepage:", e.message);
    ok = false;
  }

  console.log("");
  if (ok) {
    console.log("All checks passed. For computer + mobile: hero-video.mp4 = H.264 (required),");
    console.log("hero-video-hevc.mp4 = HEVC (optional). See public/MEDIA_README.md.");
  } else {
    process.exit(1);
  }
}

test();
