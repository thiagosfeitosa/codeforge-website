# CodeForge Site

Lean institutional landing page built with Next.js, React, and TypeScript.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS 4 utilities with a small global stylesheet
- Vercel-ready deployment flow

## Current Scope

- Single marketing landing page
- Shared layout with header and footer
- Basic SEO metadata
- `robots.txt` and `sitemap.xml`
- Contact CTA via email

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── ui/
│       └── button.tsx
├── lib/
│   ├── cn.ts
│   └── site.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build both stacks

```bash
npm run build:all
```

- Frontend: Vite compiles to `frontend/dist/` with manual chunk splitting (`react-vendor`, `motion`).
- Backend: `tsc` compiles to `backend/dist/`.

### Docker Compose (recommended for production)

```bash
docker-compose up --build
```

| Service | Port | Description |
|---------|------|-------------|
| `frontend` | `3000 → 80` | Nginx serving the Vite build; proxies `/api` to backend |
| `backend` | `3001` | Node.js Express API |

Both containers share a `portfolio-network` bridge. The Nginx config inside the frontend image handles `/api` proxying with WebSocket upgrade headers, gzip compression, and SPA history-API fallback (`try_files $uri /index.html`).

### Build images individually

```bash
docker build -t portfolio-frontend ./frontend
docker build -t portfolio-backend ./backend
```

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| UI framework | React 19 (concurrent features, new JSX transform) |
| Language | TypeScript 5.9 (strict mode, `noUnusedLocals`) |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 (`@theme` tokens, `@layer components`) |
| Animation | Framer Motion 12 (`useAnimationFrame`, `AnimatePresence`) |
| Routing | React Router 7 |
| Backend framework | Express 5 |
| Backend language | TypeScript (compiled to CommonJS) |
| Runtime | Node.js 20 (Alpine) |
| Testing — frontend | Vitest 4 + React Testing Library 16 |
| Testing — backend | Jest 30 + Supertest 7 |
| Containerisation | Docker (multi-stage) + Nginx Alpine |
| Linting | ESLint 9 flat config (typescript-eslint + react-hooks) |

---

## License

MIT
