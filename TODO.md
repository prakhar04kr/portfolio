# TODO - Portfolio Updates

## Step 0: Prep / Discovery
- [x] Read key files: `src/App.jsx`, `src/main.jsx`, `src/index.css`, `src/components/layout/PageLoader.jsx`
- [x] Read components/data involved: `Navbar.jsx`, `data/cards.js`, `IndexSection.jsx`, `AboutExpanded.jsx`, `AchievementsExpanded.jsx`, `FeaturedExpanded.jsx`, `ProjectsExpanded.jsx`, `ProfileExpanded.jsx`, `MobileCarousel.jsx`, `PortfolioCard.jsx`, `ResumeExpanded.jsx`, `ContactExpanded.jsx`

## Step 1: Homepage loading behavior
- [x] Disabled intro/loading by removing `PageLoader` usage and forcing loaderDone=true in `src/App.jsx`.

## Step 2: Light mode fix
- [ ] Implement proper light/dark theme switching and persistence (refresh-safe) and ensure light-mode contrast correctness.

## Step 3: About section content
- [x] Updated `DEVELOPER.bio` in `src/data/cards.js`.

## Step 4: Project order + data consistency
- [x] Reordered `PROJECTS` array to required order in `src/data/cards.js`.
- [x] Updated `FeaturedExpanded` to use first three projects (removes Expense Tracker from Featured).

## Step 5: Project links verification/updates
- [x] Set YojnaConnect Live/GitHub links in `src/data/cards.js`.
- [x] Set Chess Engine GitHub link in `src/data/cards.js`.
- [x] Set TypeRacer Live/GitHub links in `src/data/cards.js`.

## Step 6: Achievements section
- [x] Replaced `ACHIEVEMENTS` with requested resume-based list in `src/data/cards.js`.

## Step 7: Education section fix
- [x] Corrected `RESUME.education` entries/order in `src/data/cards.js`.

## Step 8: Featured project section
- [x] Updated Featured cards to show: YojnaConnect, Chess Engine Web App, TypeRacer.
- [x] Updated Featured card preview items in `CARDS` featured preview.

## Step 9: Remove hire me button
- [x] Removed “Hire Me” from Navbar.

## Step 10: Validation
- [x] Verified no remaining “Hire Me” / “Expense Tracker” / old about intro string in searchable source (except `PageLoader.jsx` which is now unused).
- [x] Ran build successfully via `npx vite build`.
- [ ] Verify theme toggle/light mode after implementation.

