# Yosefa Ferdianto Portfolio

A compact, responsive portfolio built with Next.js, React, TypeScript, and Tailwind CSS. The homepage puts Yosefa's profile and four selected projects together, while the full portfolio and project detail pages keep the rest of the work easy to explore.

## Pages

- `/` — profile, four featured projects, short background, and direct contact links
- `/portfolio/` — all eight professional and personal projects
- `/projects/[slug]/` — project overview, features, outcomes, and optional technical details

Project content lives in `data/projects.ts`. The featured project list is defined in `app/page.tsx`.

## Development

```bash
npm install
npm run dev
```

## Static build

```bash
npm run build
```

The generated site is in `out/`. The build script uses webpack to produce a reliable static export with the current Next.js version. Deploy `out/` to a static host that serves directory index files and the `/_next/` assets.
