# Muhammad Farhan — Portfolio

Software Developer & AI Engineer — personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Sections

- **Hero** — navbar (desktop spread / mobile hamburger), animated heading, portrait with magnet effect, contact CTA
- **About** — hanging ID card with pendulum swing animation, intro text, contact button
- **Skills** — 8 skills with animated gradient progress bars (Python, JavaScript, TypeScript, Web Dev, OpenAI Agents SDK, AI Tools, Git, Docker)
- **Certifications** — Python (Alkhidmat), Web Dev (NED), GenAI (Governor Initiative) with status badges
- **Services** — Software Development, Web Development, AI Agents
- **Projects** — Flappy Bird, Stokly (sticky-stacking cards with live demo buttons)
- **Contact** — form (formsubmit.co), email, LinkedIn, GitHub
- **Footer** — social links + copyright

## Tech Stack

| | |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | lucide-react |

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # Reusable UI (FadeIn, Magnet, ContactButton, etc.)
  sections/     # Page sections (Hero, About, Skills, etc.)
  data/         # Static content (projects, skills, certifications, services)
  App.tsx       # Section composition
  main.tsx      # Entry point
  index.css     # Tailwind + global styles
public/         # Static assets (images)
```

## Links

- [Live Demo](https://personal-portfolio-farhansaeed204.vercel.app)
- [GitHub](https://github.com/farhansaeed204)
- [LinkedIn](https://www.linkedin.com/in/muhammad-farhan-56a855296)
