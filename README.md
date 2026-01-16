# The X Club — Fractional Ownership Platform

An ultra-luxury website for fractional ownership of high-value physical assets.

## Business Model

Users buy **SHARES** of luxury assets, not products:
- Ownership shares = usage rights per year
- The X Club retains legal ownership
- Manages storage, insurance, and rotation

## Tech Stack

- **Next.js 14** (App Router)
- **JavaScript** (no TypeScript)
- **Tailwind CSS** (custom cream/ivory theme)
- **Framer Motion** (anti-gravity animations)
- **Lucide React** (icons)

## Design Language

| Element | Value |
|---------|-------|
| Background | Cream / Ivory (#FAF8F5) |
| Accent | Muted champagne gold (#A69070) |
| Text | Charcoal / Graphite (#2C2C2C) |
| Shadows | Warm grey (never black) |
| Motion | 10-12s float cycles, ±4px drift |

## Project Structure

```
antigravity/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── HowItWorks.js
│   ├── AssetCard.js
│   ├── AssetModal.js
│   ├── TrustSection.js
│   └── MembershipGate.js
├── lib/
│   ├── motion.js
│   └── constants.js
└── public/visuals/
```

## Running

```bash
cd antigravity
npm install
npm run dev
# → http://localhost:3000
```

## Assets Included

- Rolex Daytona (10 shares, $8,500/share)
- Dior x Air Jordan 1 (5 shares, $2,400/share)
- Patek Philippe Nautilus (12 shares, $15,000/share)
- Porsche 911 GT3 RS (8 shares, $40,000/share)
