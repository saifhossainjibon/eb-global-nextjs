# EB Global: Next.js (App Router) with Light / Dark toggle

## 1. Install
```bash
npm i next-themes lenis motion lucide-react sonner @tanstack/react-query clsx tailwind-merge tw-animate-css
npm i -D tailwindcss @tailwindcss/postcss
```
`postcss.config.mjs`
```js
export default { plugins: { "@tailwindcss/postcss": {} } };
```
`lib/utils.ts` (shadcn's `cn`; keep yours if you already have it)
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...i: ClassValue[]) => twMerge(clsx(i));
```

## 2. Where things go
| File | Destination |
|---|---|
| `app/globals.css`, `layout.tsx`, `page.tsx`, `not-found.tsx`, `error.tsx` | `app/` |
| `components/*` | `components/` |
| `lib/nav.ts` | `lib/` |
| your existing `lib/site-data` (COMPANY, EXCELLENCE, MEMBERSHIPS, SOLUTIONS) | keep as is |
| `assets/*.png` (logo, bg, marketing, cotton-right) | `src/assets/` (alias `@/assets`) |
| `heroCotton.mp4`, `port-container.mp4` | **`public/videos/`** (Next can't `import` mp4 files) |
| favicon | `public/favicon.svg` |

If your MEMBERSHIPS logos are static imports, the code already handles it (`imgSrc`).

## 3. Default theme
`components/providers.tsx`: `defaultTheme="dark"` (change to `"light"` if you prefer).
The choice is saved in localStorage and applied before the first paint (no flash).
