# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Mackenzie Mittereder (Senior Software Engineer). Built with Next.js 16, React 19, Tailwind CSS 3, and TypeScript 5. Deployed on Vercel with static export support.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run export` — Static export
- `npm run lint` — ESLint across .js/.jsx/.ts/.tsx files

## Architecture

**Routing**: Next.js App Router (`/app`). Single-page structure with hash-based navigation (#experience, #education).

**Component hierarchy** (render order):
`app/layout.js` → `app/page.js` (client) → `Background` → `Layout` → `Navigation` → `Header` → `Home` → `Footer`

**Key components**:
- `components/Nav/Background.js` — Canvas particle system animation
- `components/Nav/Navigation.js` — Fixed navbar with scroll-based active section tracking
- `components/Nav/Header.js` — Hero section with gradient animation
- `components/Pages/Home.js` — Main content: work experience timeline, education, skills (all data hardcoded as arrays in this file)

**Data**: No CMS or external data layer. Work experience, education, and skills are hardcoded objects in `Home.js`. Technologies are dynamically extracted and deduplicated from the experience array.

**Styling**: Tailwind CSS utility classes + custom component classes in `app/globals.css` (glassmorphism, gradient text, buttons, scrollbar). Dark theme with slate-950 background and blue accent gradients. Custom animations defined in `tailwind.config.js` (blob, fade-in-up, fade-in, pulse-slow).

**Analytics**: Vercel Analytics and Google Analytics 4, both wired in `app/layout.js`.

## Configuration Notes

- `next.config.js`: Image optimization disabled (`unoptimized: true`) and trailing slashes enabled for static hosting compatibility
- `tsconfig.json`: Path alias `~/*` → `./tests/*`
- Node engine requirement: 22.x
- ESLint uses flat config format (`eslint.config.mjs`)
