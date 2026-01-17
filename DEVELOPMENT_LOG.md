# InurPC Digital - Comprehensive Development Log

## 1. Project Overview & Core Identity
InurPC Digital is a high-performance automation ecosystem tailored for the Australian market.
- **Core Value Proposition**: "With your 24/7 365 day AI team."
- **Primary Mission**: Plugging a real automation engine into businesses to generate revenue while owners work or sleep.
- **Support**: Centralized via `esupport@inurpc.com`.

## 2. Recent Architectural Milestones
- **AI Employee Rebrand**: The core SaaS product is now officially "THE INURPC DIGITAL AI EMPLOYEE PLATFORM."
- **Review System**: Implemented `ReviewContext` for local-storage-backed ratings and reviews.
  - Supports average rating calculation on product cards.
  - Interactive submission form on product detail pages (requires authentication).
- **Asset Vault**: Multi-category store (MP3, Snapshots, Prompts, Media) with dynamic filtering.
- **Secure Dashboard**: User-specific control center showing purchased assets and recent activity.

## 3. UI/UX & Aesthetic Standards
- **Color Palette**: Ultra-dark background (`slate-950`), blue accents (`blue-600`), and **strictly all-white headings** for primary titles.
- **Typography**: Inter (High weights: 700/800/900). Headings use `uppercase tracking-tight`.
- **Logo Standards**:
  - **Hero Logo**: Strictly contained within a **350px x 180px** frame.
  - **Header Logo**: Scaled to height of the 80px navigation bar.
  - **Source**: `added/inurpclogo..jpg`.
- **Glassmorphism**: Extensive use of `backdrop-blur-lg` with `white/10` borders.

## 4. Technical Handover (For Antigravity)
- **Deployment**: Configured for HashRouter to ensure stability on static edge providers.
- **Simulation**: Auth and Reviews are persistent via `localStorage`. For production, these context hooks should be swapped with real API endpoints.
- **Headings Rule**: Never use gradients on primary section headings (e.g., "MAKE MORE WHILE YOU WORK AND SLEEP"). Keep them solid `text-white` for maximum impact against the dark UI.
- **Automation Logic**: Focused on CRM, WhatsApp integrations, and high-convert snapshots.

## 5. Maintenance Checklist
- [x] All primary headings updated to All-White Uppercase.
- [x] Hero Logo frame locked to 350x180.
- [x] Review system integrated and tested.
- [x] White-Label terminology purged in favor of "Managed/Enterprise."
