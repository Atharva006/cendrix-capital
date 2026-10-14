# CENDRIX CAPITAL — OFFICIAL WEBSITE

> **Precision. Discipline. Performance.**  
> A premium, production-quality website for **Cendrix Capital**, an independent financial markets and proprietary trading brand focused on Foreign Exchange (Forex) and Futures market research and disciplined execution.

---

## 1. Overview & Brand Architecture

This website was built with the restraint and sophistication of an established institutional capital markets firm. It emphasizes mathematical rigor, liquidity research, and strict risk discipline, presenting the two founders with complementary operational responsibilities without fabricating credentials or history.

### Core Colour Palette
- **Midnight Navy**: `#0B1424` (Primary institutional backdrop)
- **Deep Charcoal**: `#10141C` (Card base & structural surfaces)
- **Warm Metallic Gold**: `#C6A15B` (Hairline accents, active states, monogram)
- **Off-White**: `#F5F5F2` (High-contrast typography)
- **Muted Grey**: `#A1A8B3` (Structural copy, metadata)

### Typography
- **Display Headings**: `Cinzel` / `Cormorant Garamond` (Editorial serif authority)
- **Body & Controls**: `Plus Jakarta Sans` (Crisp modern legibility)
- **Data & Timestamps**: `JetBrains Mono` (Precision coordinates & market session clocks)

---

## 2. File & Directory Structure

```text
cendrix-capital/
├── index.html                   # Semantic, accessible, SEO-optimized markup
├── favicon.svg                  # Bespoke geometric monogram favicon
├── README.md                    # Project documentation & customization guide
├── css/
│   └── cendrix-custom.css       # Full bespoke design system, tokens, and utilities
├── js/
│   ├── site-config.js           # Central configuration for founders, contact & branding
│   └── cendrix-core.js          # Interactive engine, market clocks, canvas & form logic
└── assets/
    ├── icons/                   # Bespoke SVG icons (monogram, research, strategy, risk, etc.)
    │   ├── monogram.svg
    │   ├── research.svg
    │   ├── strategy.svg
    │   ├── risk.svg
    │   ├── improvement.svg
    │   ├── linkedin.svg
    │   └── arrow-right.svg
    └── images/                  # Founder portrait slots & architectural fallbacks
        ├── README.txt           # Image slot specs
        ├── founder-placeholder.svg
        └── cofounder-placeholder.svg
```

---

## 3. How to Run the Website Locally

You can run this website instantly using any method below:

### Option A: Double-Click (Zero Setup)
Simply double-click `index.html` in your file explorer (Finder) to open it in any modern browser (Chrome, Safari, Edge, Firefox).

### Option B: Local Python HTTP Server
```bash
cd cendrix-capital
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

### Option C: Node.js (npx serve)
```bash
cd cendrix-capital
npx serve .
```

---

## 4. How to Customize Founder Profiles & Photos

The founders section is designed for effortless maintenance. You can update everything in **one centralized file**: `js/site-config.js`.

### A. Replacing Founder Photographs

1. **Recommended Image Dimensions**:
   - Aspect Ratio: **4:5** (e.g. `800 × 1000 pixels` or `1200 × 1500 pixels`).
   - Format: JPG, PNG, or WebP.
   - Crop: Portrait orientation with head and shoulders centered.

2. **File Placement**:
   - Place Founder 1's photo at: `assets/images/founder.jpg`
   - Place Founder 2's photo at: `assets/images/co-founder.jpg`

3. **In-Browser Previewer (No Code Required)**:
   - Click the **"Preview Photos in Browser"** button in the leadership section or floating dock.
   - Select your portrait images directly from your computer.
   - You can immediately test how the photos look inside the frame before saving them!

4. **Automatic Graceful Fallbacks**:
   - If an image file is missing, the website automatically displays the bespoke gold-and-navy architectural placeholder panel (`founder-placeholder.svg` / `cofounder-placeholder.svg`) with zero broken image icons or layout shifts.

### B. Updating Founder Names, Bios & Roles

Open `js/site-config.js` and edit the `founders` object:

```javascript
founders: {
  founder: {
    name: "Your Name",                           // Replace [FOUNDER NAME]
    role: "Founder & Managing Partner",
    focus: "Quantitative Market Structure & Futures Execution",
    image: "assets/images/founder.jpg",
    bio: "Your biography here...",                // Replace [FOUNDER BIO]
    linkedin: "https://www.linkedin.com/in/username" // Auto-hides if empty ""
  },
  coFounder: {
    name: "Co-Founder Name",                      // Replace [CO-FOUNDER NAME]
    role: "Co-Founder & Partner",
    focus: "Macro Dynamics & Risk Architecture",
    image: "assets/images/co-founder.jpg",
    bio: "Co-founder biography here...",          // Replace [CO-FOUNDER BIO]
    linkedin: "https://www.linkedin.com/in/username" // Auto-hides if empty ""
  }
}
```

> **Note**: If `linkedin` is left blank `""`, the LinkedIn button is automatically hidden from the card.

---

## 5. How to Configure Contact Information

In `js/site-config.js`, update the `contact` block:

```javascript
contact: {
  email: "contact@cendrixcapital.com",
  inquiriesEmail: "inquiries@cendrixcapital.com",
  addressPlaceholder: "Independent Proprietary Trading Group",
  linkedinCompanyUrl: "",
  responseNotice: "Direct correspondence is reviewed by the trading desk."
}
```

### Contact Form Flow:
The contact form includes client-side field validation. When an inquiry is submitted, it prepares a structured transmission directly into the user's default email client (`mailto:`) and provides a 1-click **"Copy Formatted Text"** button. It never displays false "Message sent to server" confirmations if no backend is wired.

---

## 6. Additional Creative Features Implemented

1. **Live Global Market Session Monitor**:
   - Real-time UTC calculation tracking active international trading hours: **Tokyo**, **London**, **New York**, and **Sydney**.
   - Displays real-time status pills in the navigation bar and dynamic island.

2. **Illustrative Geometric Market Canvas**:
   - Hardware-accelerated HTML5 canvas in the hero background displaying subtle coordinate grids, crosshairs, and harmonic resonance curves.
   - Clearly illustrative and structural — zero fake performance or speculative claims.

3. **Dynamic Island / Floating Utility Dock**:
   - A modern floating HUD at the bottom of the screen with quick navigation anchors, live market session clock, and instant access to the Founder Photo Previewer.

4. **Interactive Principle Explorer**:
   - Allows users to click on any of the four principles (*Market Research*, *Strategy*, *Risk Discipline*, *Continuous Improvement*) to expand a detailed operational framework drawer.

5. **Accessibility & Reduced Motion**:
   - Fully compliant with `@media (prefers-reduced-motion: reduce)`.
   - Distinctive gold focus rings (`:focus-visible`) for keyboard navigation.
   - Screen-reader accessible tags, semantic landmark roles, and ARIA attributes.

6. **100% Offline Resilience**:
   - The site uses Bootstrap CDN and Google Fonts when online, but contains complete standalone CSS rules and SVG icons so the page remains fully styled and functional even if opened offline without internet access.

---

## 7. Deployment

This static site is ready for 1-click deployment to any hosting provider:

- **Vercel**: Run `vercel` or connect the Git repository.
- **Netlify**: Drag and drop the `cendrix-capital` directory into the Netlify dashboard.
- **GitHub Pages**: Push to a repository and enable GitHub Pages on the `main` branch.
- **Cloudflare Pages**: Connect repository and set build output to `/`.
