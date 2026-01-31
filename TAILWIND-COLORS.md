# Tailwind Color Guide — Portfolio

This file documents the global color tokens and how to use them.

## Palette (tokens)
- Primary: `--primary` (light: sky/skyblue, dark: lighter sky)
- Accent: `--accent` (blue shades)
- Teal: `--teal` (supporting accent)
- Background: `--bg`
- Surface (cards / panels): `--surface`
- Text: `--text`
- Muted text: `--muted`
- Border: `--border`

Dark theme values are activated when the `dark` class is on the root element (e.g. `<html class="dark">`).

## Usage examples
- Tailwind utilities (recommended): use built-in classes like `text-slate-900`, `bg-sky-500`, `dark:bg-navy-900` (navy is custom in `tailwind.config.js`).
- Token helpers (project-specific classes in `index.css`):
  - Buttons: `.btn-primary`, `.btn-accent`
  - Cards: `.card`
  - Direct tokens: `.bg-primary`, `.text-primary`, `.bg-accent`, `.bg-teal`

Example JSX:
```jsx
<div className="container-max">
  <div className="card">
    <h2 className="text-2xl font-bold text-primary">Hello</h2>
    <p className="muted">Subtext in muted color</p>
    <button className="btn-primary mt-4">Primary</button>
  </div>
</div>
```

## Dark mode
- Toggle dark mode by adding/removing the `dark` class on the root element:
  - Manual: `document.documentElement.classList.toggle('dark')`
  - Server/user preference: add `class="dark"` server-side or on initial load.

## Notes
- The config extends Tailwind with `navy`, `skyblue`, and `tealsoft` palettes — you can use them as `bg-navy-900`, `text-skyblue-600`, `bg-tealsoft-500`, etc.
- Prefer using the provided helper classes for consistent theming across components.