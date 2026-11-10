# Instructions for Antigravity 2.0

This is an EXISTING and functional cinematic scroll landing hero. **Preserve the current visuals and scroll interactions unless explicitly asked to alter them.** Do not replace the videos or redesign the page unsolicited.

- Entry point: `index.html` (vanilla HTML/CSS/JavaScript).
- Scrollable hero footage: `assets/hero-scroll-720p.mp4`.
- Poster: `assets/hero-poster.jpg`.
- Original 20-second Full-HD master: `Ferrari_20s_Seamless_Cinematic_1080p.mp4`.
- Titles and scene timeline: `chapters` array near the bottom of `index.html`.
- Local preview: `npm run dev` (no npm install required; Node.js built-ins only), then open http://localhost:4173.
- Scroll scrubbing needs HTTP byte-range requests. The included `server.mjs` supports them.

When adapting this hero for another site, retain a pinned fullscreen section, smooth forward/reverse scroll video scrubbing, scene titles, accessibility and responsive behavior. Do not autoplay the narrative independently of scrolling.
