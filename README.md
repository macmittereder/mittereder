# Mac Mittereder Portfolio

Personal portfolio site for Mac Mittereder, a senior software engineer. Built with Next.js App Router, React 19, Tailwind CSS, and TypeScript tooling. Deployed on Vercel.

## Features

- Single-page portfolio with hash navigation (`#experience`, `#education`)
- Animated particle background with `prefers-reduced-motion` support
- Work experience timeline with multi-role support
- Education section and social links
- Vercel Analytics

## Stack

- **Next.js 16** — App Router
- **React 19**
- **Tailwind CSS 4**
- **Vercel Analytics**

## Structure

```
├── app/                  # App Router entry (layout, page, API)
├── components/           # UI components (Nav, Pages, Footer, icons)
├── data/portfolio.js     # Experience, education, and social content
├── public/images/        # Logos and static assets
└── package.json
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## License

Private — all rights reserved.
