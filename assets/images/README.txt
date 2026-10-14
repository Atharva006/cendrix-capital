CENDRIX CAPITAL - FOUNDER IMAGE ASSETS INSTRUCTIONS
===================================================

To display your real founder photos:

1. Founder 1 (Founder):
   - Place your portrait image in this folder as:
     founder.jpg (or .png / .webp)
   - Recommended dimensions: 800 x 1000 pixels (4:5 portrait ratio).
   - Update js/site-config.js if you use a different filename:
     founder: {
       image: "assets/images/founder.jpg",
       ...
     }

2. Founder 2 (Co-Founder):
   - Place your portrait image in this folder as:
     co-founder.jpg (or .png / .webp)
   - Recommended dimensions: 800 x 1000 pixels (4:5 portrait ratio).
   - Update js/site-config.js if you use a different filename:
     coFounder: {
       image: "assets/images/co-founder.jpg",
       ...
     }

Automatic Fallbacks:
- If no custom image is found or if the image fails to load, the system
  automatically falls back to the bespoke architectural placeholder graphics:
  - founder-placeholder.svg
  - cofounder-placeholder.svg

Interactive In-Browser Image Tester:
- You can also click the "Preview Founder Photos" button in the floating utility
  bar on the live website to preview local image files directly without uploading
  or editing code!
