# Rohan Vishwakarma — Portfolio

A fast, animated personal portfolio with a dark neon aesthetic. Built as a single-page
React app with route-based sections for projects, experience, skills, certificates, and a
working contact form.

🔗 **Live:** [rohanvishwakarma.co.in](https://rohanvishwakarma.co.in/)

## Tech Stack

| Area        | Tools                                                        |
| ----------- | ----------------------------------------------------------- |
| Framework   | React 18 + TypeScript, Vite                                 |
| Routing     | React Router v6 (`/`, `/projects`, `/experience`, `/skills`, `/certificates`, `/contact`) |
| Styling     | Tailwind CSS (custom neon theme), Syne + JetBrains Mono     |
| Animation   | Framer Motion (page transitions, reveals)                   |
| Icons       | lucide-react                                                |
| Contact     | EmailJS (`@emailjs/browser`)                                |
| Hosting     | Vercel (SPA rewrites via `vercel.json`)                     |

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
```

### Environment variables

The contact form uses [EmailJS](https://www.emailjs.com/). Copy `.env.example` to `.env`
and fill in your credentials:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Your EmailJS template should reference these fields: `{{name}}`, `{{email}}`,
`{{subject}}`, `{{message}}`.

## Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the Vite dev server                |
| `npm run build`     | Production build to `dist/`              |
| `npm run preview`   | Preview the production build locally     |
| `npm run typecheck` | Type-check with `tsc --noEmit`           |
| `npm run lint`      | Lint with ESLint                         |

## Project Structure

```
src/
├── components/     # Section components (Hero, About, Projects, Skills, …)
├── pages/          # Route-level pages (Home, ProjectsPage, ContactPage, …)
├── constants/      # Single source of truth for all content & theme tokens
│   ├── projects.ts      # Projects + neon accent token system
│   ├── experience.ts    # Work experience + education
│   ├── skills.ts        # Skill categories & levels
│   ├── certificates.ts  # Certificates (files in public/certificate/)
│   ├── about.ts         # Highlights & stats
│   ├── social.ts        # Social + contact links
│   └── navigation.ts    # Nav links
├── App.tsx         # Router + layout (Navbar / Footer)
└── main.tsx        # Entry point
```

Content lives in `src/constants/` — update those files to change what the site shows,
no component edits required.

## Deployment

Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` so client-side
routing works on refresh/deep links.
