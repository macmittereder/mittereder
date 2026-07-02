# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Project Overview

Personal portfolio website for Mac Mittereder, a Senior Software Engineer. Built with Next.js 16, React 19, Tailwind CSS 3, and TypeScript tooling. Deployed on Vercel with static export support.

## Codex Workflow

- Use Serena MCP first for code understanding and targeted edits: project memories, symbol overviews, symbol search, reference lookup, and symbolic edits where appropriate.
- Use Playwright MCP for frontend verification: inspect snapshots, take screenshots, and check desktop and mobile viewports after UI changes.
- Use normal shell commands for package scripts, linting, builds, git status, and simple file discovery.
- Prefer `rg` and `rg --files` for local searches.
- Keep edits scoped to the requested behavior and follow the existing component and Tailwind patterns.

## Commands

- `npm run dev` - Start dev server. Defaults to `localhost:3000`; Next may pick another port if `3000` is already in use.
- `npm run build` - Production build.
- `npm run start` - Serve production build.
- `npm run export` - Static export.
- `npm run lint` - ESLint across `.js`, `.jsx`, `.ts`, and `.tsx` files.

## Architecture

**Routing**: Next.js App Router under `app/`. The site is a single-page portfolio with hash-based navigation such as `#experience` and `#education`.

**Component hierarchy**:
`app/layout.js` -> `app/page.js` -> `Background` -> `Layout` -> `Navigation` -> `Header` -> `Home` -> `Footer`

**Key components**:

- `components/Nav/Background.js` - Canvas particle system animation.
- `components/Nav/Navigation.js` - Fixed navbar with scroll-based active section tracking.
- `components/Nav/Header.js` - Hero section with gradient animation.
- `components/Pages/Home.js` - Main content: work experience timeline, education, and skills. Data is hardcoded as arrays in this file.

**Data**: No CMS or external data layer. Work experience, education, and skills are hardcoded in `Home.js`. Technologies are dynamically extracted and deduplicated from the experience array.

**Styling**: Tailwind CSS utility classes plus custom component classes in `app/globals.css`. The visual style is a dark slate background with blue accent gradients, glassmorphism, gradient text, custom buttons, custom scrollbar styling, and animations from `tailwind.config.js`.

**Analytics**: Vercel Analytics is wired in `app/layout.js`.

## Configuration Notes

- `next.config.js`: Image optimization disabled with `unoptimized: true`; trailing slashes enabled for static hosting compatibility.
- `tsconfig.json`: Path alias `~/*` maps to `./tests/*`.
- `package.json`: Node engine requirement is `22.x`.
- `eslint.config.mjs`: ESLint uses flat config format.

## Verification Expectations

- Run `npm run lint` for code changes when practical.
- Run `npm run build` for changes that affect routing, config, rendering, or dependencies.
- For visual changes, start `npm run dev` and verify with Playwright MCP on desktop and mobile viewports.
