# Contributing to Video Portfolio

Thank you for your interest in contributing! This is a personal portfolio project but contributions are welcome for bug fixes, accessibility improvements, and performance enhancements.

---

## Getting Started

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/video_portfolio.git
   cd video_portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a branch** for your change:
   ```bash
   git checkout -b fix/your-fix-name
   ```
5. **Run the dev server:**
   ```bash
   npm run dev
   ```

---

## What to Contribute

**Welcome:**
- Bug fixes (broken layout, animation issues, console errors)
- Accessibility improvements (contrast, keyboard nav, ARIA)
- Performance improvements (image optimization, bundle size)
- Documentation updates (fixing typos, improving setup instructions)

**Not accepted:**
- Design changes without prior discussion (open an issue first)
- New features that change the portfolio content or identity
- Dependency upgrades without a clear reason

---

## Code Style

- Follow the existing ESLint configuration (`eslint.config.js`)
- Run `npm run lint` before submitting a PR — no lint errors allowed
- Use Tailwind utility classes; avoid inline styles
- Component files: PascalCase (`Navbar.jsx`); utils: camelCase
- Keep components small and single-purpose

---

## Submitting a Pull Request

1. Ensure `npm run lint` passes with no errors
2. Test on both mobile (375px) and desktop (1280px) in your browser
3. Write a clear PR title: `fix: navbar flicker on scroll` or `a11y: add focus ring to hero CTA`
4. Describe **what changed** and **why** in the PR description
5. Reference any related issues: `Closes #12`

---

## Reporting Issues

Open a [GitHub Issue](https://github.com/pangerlkr/video_portfolio/issues) with:
- A clear title describing the problem
- Steps to reproduce
- Expected vs. actual behavior
- Screenshot or screen recording if applicable
- Browser + OS info

---

## Contact

For anything outside the scope of a GitHub issue, reach out via the contact form on the portfolio site or through GitHub Discussions.
