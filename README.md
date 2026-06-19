# Video Portfolio - Pangerkumzuk Longkumer

> A cinematic personal portfolio showcasing full-stack development, cybersecurity research, open-source contributions, and community leadership.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Overview

This is a **cinematic, scroll-driven personal portfolio** built with React + Vite + Tailwind CSS. It features a full-screen video hero, animated section reveals, an interactive about section, a services showcase, and a contact form. Designed to highlight the depth and range of the developer's professional profile — from penetration testing tools to Wikipedia contributions and Discord community management.

**Live Site:** _[Deploy URL here]_  
**Designer & Developer:** Pangerkumzuk Longkumer  
**Location:** Dimapur, Nagaland, India

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | React 18 | Component-based UI |
| Build tool | Vite | Fast HMR + production builds |
| Styling | Tailwind CSS v4 | Utility-first CSS |
| Animation | Framer Motion + AOS | Scroll animations & transitions |
| Linting | ESLint | Code quality enforcement |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
git clone https://github.com/pangerlkr/video_portfolio.git
cd video_portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build       # Compile + bundle
npm run preview     # Preview the production build locally
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
video_portfolio/
├── public/                   # Static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive nav with scroll-aware styling
│   │   ├── Hero.jsx          # Full-screen video hero with play/pause
│   │   ├── About.jsx         # ID-badge style about + tech stack grid
│   │   ├── Services.jsx      # Scroll-driven animated service cards
│   │   ├── Contact.jsx       # Contact form + social links
│   │   ├── Footer.jsx        # Site footer with credits
│   │   └── Preloader.jsx     # Entry animation preloader
│   ├── assets/
│   │   ├── hero video/       # Background video file(s)
│   │   └── about/            # About section imagery
│   ├── App.jsx               # Root component + route/section assembly
│   ├── main.jsx              # ReactDOM entry point
│   └── index.css             # Global styles + Tailwind directives
├── .gitignore
├── eslint.config.js
├── index.html                # HTML shell
├── package.json
├── vite.config.js
├── README.md                 # ← You are here
├── prd.md                    # Product Requirements Document
├── design.md                 # Design System & UI Specification
└── CONTRIBUTING.md           # Contribution guidelines
```

---

## Sections

| Section | Description |
|---|---|
| **Preloader** | Animated entry screen before main content loads |
| **Navbar** | Sticky, scroll-aware navigation with mobile menu |
| **Hero** | Full-screen background video with name, title, and CTA |
| **About** | Profile summary, skills grid, and certifications |
| **Services** | Cards for Dev, Cybersecurity, Open Source, Community |
| **Contact** | Form + GitHub, LinkedIn, and email links |
| **Footer** | Minimal footer with year and credits |

---

## Deployment

This project builds to a static `/dist` folder and can be deployed to:

- **GitHub Pages** — via `gh-pages` branch
- **Netlify** — drag-and-drop `/dist` or connect repo
- **Vercel** — zero-config with auto-deploy on push
- **Render** — static site hosting

---

## About the Developer

**Pangerkumzuk Longkumer** is a cybersecurity professional and full-stack developer based in Dimapur, Nagaland, India. He builds open-source security tools, contributes to Wikipedia, manages Discord communities, and hosts tech events.

- **GitHub:** [@pangerlkr](https://github.com/pangerlkr)
- **Certifications:** OSCP | GCP Labs | ISO 27001 Lead Auditor (pursuing)
- **Interests:** Penetration testing · Open source · Community building · Technical writing

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on submitting issues and pull requests.

---

## License

MIT © Pangerkumzuk Longkumer
