### Portfolio (React + Vite + TypeScript + Tailwind + shadcn/ui)

Modern developer portfolio built with React 18, TypeScript, Vite, Tailwind CSS, and shadcn/ui. It includes a responsive layout, page routing, reusable UI components, and sensible defaults for SEO and DX.

Author: Sushant Gavaraskar

—

### Features

- Routing with `react-router-dom` (Home, About, Projects, Skills, Certifications, Contact, 404)
- UI built on `shadcn/ui` and Radix primitives, themed with Tailwind
- Global toasts via `@/components/ui/toaster` and `sonner`
- Data layer ready with TanStack Query (`@tanstack/react-query`)
- Sensible SEO defaults in `index.html` (meta, Open Graph, Twitter)
- Vite path alias `@` → `src`
- ESLint preconfigured for React + TypeScript

—

### Tech Stack

- React 18, TypeScript, Vite 5 (SWC)
- Tailwind CSS (with `tailwindcss-animate`)
- shadcn/ui components (locally generated under `src/components/ui`)
- Radix UI primitives
- TanStack Query
- lucide-react icons + custom `GitHubIcon`, `LinkedInIcon`

—

### Getting Started

Requirements:
- Node.js 18+ and npm 9+

Install and run:
```sh
npm install
npm run dev
```
By default the dev server runs on `http://localhost:8080` (see `vite.config.ts`).

Build and preview production:
```sh
npm run build
npm run preview
```

Lint:
```sh
npm run lint
```

—

### Available Scripts

- `npm run dev`: start Vite dev server (host `::`, port `8080`)
- `npm run build`: build for production
- `npm run build:dev`: dev-mode build (useful for smoke testing)
- `npm run preview`: preview the production build
- `npm run lint`: run ESLint

—

### Project Structure

```
portfolio/
  public/                # Static assets (favicon, robots.txt, etc.)
  src/
    components/
      icons/             # Custom icons (GitHub, LinkedIn)
      ui/                # shadcn/ui components
      Navigation.tsx     # Top navigation
    hooks/               # Reusable hooks
    lib/                 # Utilities (e.g., class helpers)
    pages/               # Route pages (Home, About, Projects, ...)
    App.tsx              # App providers + Router
    main.tsx             # Entry
    index.css            # Tailwind base/styles
  index.html             # HTML template + SEO meta
  tailwind.config.ts     # Tailwind configuration
  vite.config.ts         # Vite configuration (alias, dev server)
  eslint.config.js       # ESLint config
  components.json        # shadcn/ui config reference
```

—

### Routing

Routes are declared in `src/App.tsx` using `react-router-dom`:
- `/` → `Home`
- `/about` → `About`
- `/projects` → `Projects`
- `/skills` → `Skills`
- `/certifications` → `Certifications`
- `/contact` → `Contact`
- `*` → `NotFound`

To add a page:
1) Create a component in `src/pages/MyPage.tsx`
2) Add a `<Route path="/my-page" element={<MyPage />} />` in `src/App.tsx`
3) Add a link in `src/components/Navigation.tsx`

—

### Styling and UI

- Tailwind CSS is enabled across `src/**/*.{ts,tsx}`. Customize theme in `tailwind.config.ts`.
- Components under `src/components/ui` follow the shadcn/ui patterns, using `class-variance-authority` and `tailwind-merge` where applicable.
- Animations like `fade-in`, `slide-in-right`, and `glow-pulse` are configured in Tailwind.

Icons:
- Use `lucide-react` for general icons.
- Custom icons live in `src/components/icons`.

Toasts and notifications:
- App mounts both `@/components/ui/toaster` and `sonner` in `App.tsx`.

—

### Data Fetching

TanStack Query is configured with a `QueryClient` in `App.tsx`. Use `useQuery`/`useMutation` within pages/components to handle async workflows and caching.

—

### SEO

Edit meta tags and social previews in `index.html`:
- `<title>`, description, keywords
- Open Graph (`og:title`, `og:description`, `og:image`)
- Twitter card (`twitter:card`, `twitter:image`)

—

### Vite Configuration

`vite.config.ts` sets:
- Dev server host `::` and port `8080`
- React SWC plugin
- Path alias `@` → `./src`

—

### Deployment

Any static host that supports SPA routing works:
- Vercel: framework preset “Vite”; build `npm run build`; output `dist`
- Netlify: build command `npm run build`; publish directory `dist`
- GitHub Pages: build and serve `dist` with a SPA fallback

If deploying behind a different base path, configure Vite’s `base` accordingly.

—

### Contributing

1) Create a feature branch
2) Run `npm run lint` and fix issues
3) Ensure `npm run build` succeeds
4) Open a PR with a clear summary and screenshots if UI changes

—

### License

No license specified yet. If you plan to open-source, consider adding `LICENSE` (e.g., MIT) and updating this section.

