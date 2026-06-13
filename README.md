# Alex Rivera — Orbital Portfolio

A world-class personal portfolio built from scratch with an **Orbital Globe** concept — 8 glass cards mounted on an invisible 3D sphere.

## Tech Stack

- React 18 + Vite
- Three.js + React Three Fiber + Drei (3D globe)
- Framer Motion (animations, layout morphs)
- GSAP + ScrollTrigger (scroll sequences, text reveals)
- Tailwind CSS v4
- Lenis (smooth scroll)

## Getting Started

```bash
cd CUsersKumaralex-rivera-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Features

- **8 portfolio cards** on a Fibonacci sphere (About, Profile, Projects, Skills, Resume, Achievements, Contact, Featured Work)
- **Profile card** with GitHub, LinkedIn, and LeetCode icons
- Cursor-driven globe rotation with inertia
- Scroll-driven globe rotation via GSAP ScrollTrigger
- Card hover pop-out, glow bloom, and cursor tilt
- Full-screen expanded views with lazy-loaded content
- Custom cursor, starfield, background orbs, cursor spotlight
- Responsive: 3D globe (desktop), CSS grid (tablet), swipe carousel (mobile)
- `prefers-reduced-motion` fallback

## Build

```bash
npm run build
npm run preview
```
