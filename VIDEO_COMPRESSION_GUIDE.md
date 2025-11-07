# Video Compression Guide for Help Westmoreland

## Overview
This guide provides instructions for compressing the video files from the "Site Photos" directory for optimal web performance.

## Requirements
- **FFmpeg**: Install from https://ffmpeg.org/download.html
- **Target**: Videos should be under 5MB for hero section
- **Format**: MP4 with H.264 codec for broad browser compatibility
- **Resolution**: 1080p (1920x1080) or 720p (1280x720)

## Video Files Available

Located in: `c:\Users\Jared Mahotiere\Downloads\Relief Site\Site Photos`

### Recommended videos for hero section (based on filenames):
- `good.mov` (74M) - Appears to be high-quality footage
- `One good shot.mov` (46M) - Single compelling shot
- `good cut end.mov` (9.2M) - Already smaller, good edit

### All available videos:
- Various "whole" series videos (50-94M)
- "first part.mov" (57M)
- "good cut end(1).mov" (66M)
- Multiple "part" videos (8-34M)
- "night.mov" (30M)
- "maybe" series (21-23M)

## Compression Commands

### Option 1: High Quality Hero Video (Recommended)
Best for main hero section - balances quality and file size.

```bash
# Navigate to the video directory
cd "c:\Users\Jared Mahotiere\Downloads\Relief Site\Site Photos"

# Compress to 1080p with optimized settings
ffmpeg -i "good.mov" \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -movflags +faststart \
  -an \
  "../help-westmoreland/public/videos/hero-video.mp4"
```

### Option 2: Smaller File Size (Mobile-First)
For faster loading on mobile devices.

```bash
ffmpeg -i "good.mov" \
  -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -crf 30 \
  -preset slow \
  -movflags +faststart \
  -an \
  "../help-westmoreland/public/videos/hero-video.mp4"
```

### Option 3: Multiple Versions (Adaptive)
Create both sizes for responsive serving.

```bash
# Full HD version
ffmpeg -i "good.mov" \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -movflags +faststart \
  -an \
  "../help-westmoreland/public/videos/hero-video-1080p.mp4"

# HD version for mobile
ffmpeg -i "good.mov" \
  -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -crf 30 \
  -preset slow \
  -movflags +faststart \
  -an \
  "../help-westmoreland/public/videos/hero-video-720p.mp4"

# Mobile version
ffmpeg -i "good.mov" \
  -vf "scale=854:480:force_original_aspect_ratio=decrease,pad=854:480:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -crf 32 \
  -preset slow \
  -movflags +faststart \
  -an \
  "../help-westmoreland/public/videos/hero-video-480p.mp4"
```

## Command Explanation

- `-vf "scale=..."`: Scales video to target resolution while maintaining aspect ratio
- `-c:v libx264`: Uses H.264 codec (universal browser support)
- `-crf 28-32`: Constant Rate Factor (lower = better quality, higher = smaller file)
  - 28 = High quality
  - 30 = Good quality, smaller size
  - 32 = Acceptable quality, very small size
- `-preset slow`: Slower encoding for better compression (worth the wait)
- `-movflags +faststart`: Optimizes for web streaming (loads progressively)
- `-an`: Removes audio track (not needed for background hero video)

## Creating a Poster Image

Extract a frame from the video to use as poster/thumbnail:

```bash
ffmpeg -i "good.mov" \
  -ss 00:00:03 \
  -vframes 1 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease" \
  -q:v 2 \
  "../help-westmoreland/public/images/hero-poster.jpg"
```

- `-ss 00:00:03`: Extract frame at 3 seconds (adjust as needed)
- `-vframes 1`: Extract only 1 frame
- `-q:v 2`: High quality JPEG (2-5 is good range)

## Testing Different Videos

To preview which video works best, try compressing a few options:

```bash
# Test "One good shot.mov"
ffmpeg -i "One good shot.mov" \
  -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -crf 30 -preset slow -movflags +faststart -an \
  "../help-westmoreland/public/videos/test-one-good-shot.mp4"

# Test "good cut end.mov" (already smaller)
ffmpeg -i "good cut end.mov" \
  -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -crf 30 -preset slow -movflags +faststart -an \
  "../help-westmoreland/public/videos/test-good-cut-end.mp4"
```

## After Compression

1. Check file sizes:
   ```bash
   cd "../help-westmoreland/public/videos"
   ls -lh *.mp4
   ```

2. Target file size: **Under 5MB** for hero video

3. If file is still too large:
   - Increase CRF value (e.g., from 28 to 32)
   - Reduce resolution (1080p → 720p)
   - Trim video length if possible

4. Update the homepage component if using different filenames:
   - Edit: `src/app/page.tsx`
   - Update the `videoSrc` prop in the `<HeroVideo>` component

## Installing FFmpeg

### Windows:
1. Download from https://www.gyan.dev/ffmpeg/builds/
2. Extract to `C:\ffmpeg`
3. Add `C:\ffmpeg\bin` to PATH environment variable
4. Restart terminal and verify: `ffmpeg -version`

### Mac:
```bash
brew install ffmpeg
```

### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install ffmpeg
```

## Performance Targets

- **LCP (Largest Contentful Paint)**: ≤ 2.5s
- **File size**: < 5MB for hero video
- **Resolution**: 1080p for desktop, 720p for mobile
- **Format**: MP4 (H.264) with faststart flag

## Troubleshooting

### "ffmpeg: command not found"
- FFmpeg is not installed or not in PATH
- Follow installation instructions above

### Video file too large
- Increase CRF value (try 32 or 34)
- Reduce resolution (use 720p instead of 1080p)
- Consider using a shorter clip

### Video quality too low
- Decrease CRF value (try 26 or 24)
- Use `-preset slower` for better compression
- Increase resolution if file size allows

### Video doesn't load in browser
- Ensure `-movflags +faststart` is included
- Check browser console for errors
- Verify file path is correct in component

## Next Steps After Compression

1. Compress the selected video(s) using commands above
2. Create poster image for faster initial load
3. Test the homepage with real video: `npm run dev`
4. Check file sizes and loading performance
5. Optimize further if needed
6. Consider adding multiple resolutions for responsive delivery

## Additional Resources

- FFmpeg documentation: https://ffmpeg.org/documentation.html
- Web video guide: https://web.dev/fast-playback-with-preload/
- Video compression tutorial: https://trac.ffmpeg.org/wiki/Encode/H.264
