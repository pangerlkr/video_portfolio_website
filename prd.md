# Product Requirements Document (PRD)

**Project:** Video Portfolio — Pangerkumzuk Longkumer  
**Version:** 1.0  
**Status:** Active Development  
**Owner:** Pangerkumzuk Longkumer ([@pangerlkr](https://github.com/pangerlkr))  
**Last Updated:** June 2026

---

## 1. Problem Statement

Most developer portfolios are static, text-heavy, and indistinguishable from one another. They fail to communicate the personality, range, and depth of the person behind the work. Hiring managers, collaborators, and community members need a quick, engaging way to understand who Pangerkumzuk is — across cybersecurity, full-stack development, open source, and community leadership — within the first 30 seconds of landing on the page.

---

## 2. Goals

### Primary Goals

- **Differentiate** from typical developer portfolios through cinematic, scroll-driven visual storytelling.
- **Communicate depth** across four professional domains: full-stack development, cybersecurity, open-source contribution, and community management.
- **Drive action** — prompt visitors to reach out, follow on GitHub, or engage with projects.

### Secondary Goals

- Achieve a Lighthouse performance score ≥ 90 on mobile.
- Be deployable to GitHub Pages / Netlify / Render with zero backend.
- Serve as a reusable template foundation for other developers.

---

## 3. Target Audience

| Audience | Goal When Visiting | Key Info They Need |
|---|---|---|
| Recruiters / HR | Quickly assess professional profile | Skills, experience, certifications |
| Technical collaborators | Evaluate project compatibility | GitHub activity, tech stack, open-source work |
| Community members | Connect and engage | Social links, contact form, event history |
| Potential clients | Assess for freelance / contract work | Services, projects, reliability |

---

## 4. User Stories

### Visitor (General)

- As a visitor, I want to immediately understand who this person is and what they do, so I can decide if this is relevant to me.
- As a visitor, I want to see the work visually, not just read about it.
- As a visitor, I want a contact option that feels accessible, not formal.

### Recruiter

- As a recruiter, I want to see the tech stack and certifications at a glance, so I don't have to dig for information.
- As a recruiter, I want a link to GitHub and LinkedIn, so I can do deeper due diligence.

### Collaborator / Developer

- As a developer, I want to see the source code is clean and well-structured.
- As a developer, I want to understand the project setup quickly to fork or contribute.

---

## 5. Functional Requirements

### 5.1 Pages / Sections

| Section | Priority | Requirements |
|---|---|---|
| Preloader | P1 | Animated entry before main content; dismisses automatically |
| Navbar | P1 | Sticky on scroll; collapses to hamburger on mobile; smooth-scroll links |
| Hero | P1 | Full-screen background video; name + title + CTA button; play/pause control |
| About | P1 | Developer bio; tech stack icon grid; certifications list; profile image |
| Services | P1 | Cards for Dev, Cybersecurity, Open Source, Community; scroll-reveal animation |
| Contact | P1 | Email form with name/email/message fields; social links (GitHub, LinkedIn) |
| Footer | P2 | Copyright, year, quick links |

### 5.2 Interactions

- Scroll-triggered section animations (AOS or Framer Motion)
- Video hero plays on load (muted autoplay); user can toggle play/pause
- Mobile navigation hamburger with smooth open/close animation
- Contact form: client-side validation before submission
- All external links open in a new tab

### 5.3 Non-Functional Requirements

- **Performance:** Lighthouse score ≥ 90 (mobile), ≥ 95 (desktop)
- **Accessibility:** WCAG AA — 4.5:1 text contrast, keyboard navigable, semantic HTML
- **Responsiveness:** Works on 375px (mobile) through 2560px (4K desktop)
- **No backend:** 100% static output; all data is hardcoded or JSON-config driven
- **Browser support:** Latest 2 versions of Chrome, Firefox, Safari, Edge

---

## 6. Out of Scope (v1.0)

- CMS or admin panel for content editing
- Blog or long-form writing section
- Dark mode toggle (may be added in v1.1)
- Multi-language support
- Authentication

---

## 7. Success Metrics

| Metric | Target |
|---|---|
| Time-to-first-impression (hero loads) | < 2 seconds on 4G |
| Lighthouse Performance (mobile) | ≥ 90 |
| Bounce rate after contact form view | < 50% |
| GitHub profile click-through | Track via UTM or analytics |
| Contact form submissions | Baseline to measure in first 30 days |

---

## 8. Dependencies

- React 18, Vite, Tailwind CSS v4 (build deps)
- Framer Motion, AOS (animation libs)
- Hero video file (self-hosted in `/src/assets/hero video/`)
- Deployment platform (GitHub Pages / Netlify / Render)

---

## 9. Milestones

| Milestone | Description | Status |
|---|---|---|
| M1 | Project scaffold + base component structure | ✅ Done |
| M2 | Hero + Navbar + Preloader implemented | ✅ Done |
| M3 | About + Services + Contact sections | 🔄 In Progress |
| M4 | Polish: animations, responsiveness, accessibility | ⏳ Pending |
| M5 | Production build + deployment | ⏳ Pending |
| M6 | Analytics integration + performance audit | ⏳ Pending |

---

## 10. Open Questions

- Will the contact form connect to a backend (e.g., Formspree, EmailJS) or remain a UI-only mock?
- Should a "Projects" section be added to showcase GitHub repos with live previews?
- Is a dark/light mode toggle planned for v1.1?
- Should the hero video be self-hosted or served from a CDN for performance?
