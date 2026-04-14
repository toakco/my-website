# /public/assets/higgsfield

Drop Higgsfield-generated video assets here before referencing them in components.

## Naming convention

```
[type]-[descriptor]-[resolution].[ext]

Examples:
  loop-brand-1080p.mp4
  loop-brand-1080p.webm        ← web-optimized WebM alongside MP4
  ad-forest-character-720p.mp4
  hero-nature-4k.mp4
  hero-nature-1080p.mp4        ← compressed web version
  hero-nature-720p.mp4         ← mobile fallback
```

## Compression

Run the compression script to convert 4K outputs to web-optimized formats:

```bash
python C:\Projects\TOAKCO\Toaks\Automation\Scripts\higgsfield-compress.py --input hero-nature-4k.mp4
```

This produces:
- `*-1080p.mp4`  — desktop (H.264, ~8Mbps)
- `*-1080p.webm` — desktop WebM (VP9, ~5Mbps)
- `*-720p.mp4`   — mobile fallback (H.264, ~3Mbps)
- `*-poster.jpg` — first-frame poster image for fallback display

## Usage in components

```tsx
import { HiggsVideoBackground } from '@/components/higgsfield'

<HiggsVideoBackground
  videoSrc="/assets/higgsfield/hero-nature-1080p.mp4"
  fallbackSrc="/assets/higgsfield/hero-nature-poster.jpg"
  overlay
  overlayOpacity={0.5}
/>
```
