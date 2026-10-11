# Routes

TanStack Start uses **file-based routing**. Each `.tsx` file in this directory
defines a top-level URL. Do **not** create `src/pages/` or Next.js-style layouts.

## Royal Decor site model

| URL | File | Purpose |
| --- | --- | --- |
| `/` | `index.tsx` | Single-page **landing** — sections use `#hash` ids (see `homeSectionIds` in `src/lib/routes.ts`) |
| `/gallery` | `gallery.tsx` | Second **full page** — gallery grid and lightbox |

- **In-page only on `/`:** About, services, FAQ, contact, etc. (`navigation` / `footerSection` hashes in `src/content/site.ts`).
- **Separate routes:** Add `src/routes/<name>.tsx` → `/<name>`, register path in `appPaths` (`src/lib/routes.ts`), and add a `to` entry in `navigation` if it belongs in the header.

Shared chrome: `SiteBrand`, `SiteNavLink` (`src/components/`).  
Scroll: `shouldRestoreScroll` in `src/lib/routes.ts` + `src/router.tsx`.

`routeTree.gen.ts` is auto-generated — do not edit by hand.

## TanStack conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/$id.tsx` | `/users/:id` |
| `_layout.tsx` | layout route (`<Outlet />` for children) |
| `__root.tsx` | app shell — wraps every page |
