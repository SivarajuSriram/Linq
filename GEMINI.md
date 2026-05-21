# Project Instructions: LINQ_NEW (kingshaus-app)

## Critical Mandates
- **Next.js 16+ Warning:** This project uses a version of Next.js (v16.2.6) with significant breaking changes. Training data may be outdated. 
- **Consult Documentation:** Always refer to `node_modules/next/dist/docs/` (if available) before implementing new Next.js patterns.
- **Tech Stack:** 
    - Framework: Next.js 16.2.6 (App Router)
    - Library: React 19.2.4
    - Animations: GSAP 3.15.0 with `@gsap/react`
    - Scrolling: Lenis
    - Styling: Tailwind CSS 4 (using `@tailwindcss/postcss`)

## Workspace Conventions
- **Source Structure:** All application code resides in `src/`.
- **Components:** Reusable components are in `src/components/`.
- **Pages:** App Router structure is used in `src/app/`.
- **Animations:** Extensive use of GSAP and ScrollTrigger.
- **Client Components:** Pages often use `"use client"` at the top level to coordinate animations and loaders.

## Key Files
- `src/app/page.tsx`: Primary landing page.
- `src/components/Navbar.tsx`: Animated navigation.
- `src/app/globals.css`: Tailwind 4 imports and global styles.
