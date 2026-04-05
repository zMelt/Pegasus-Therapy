# Pegasus Therapy Website

A React + Vite website for Pegasus Therapy, built for Iris Melton, LPTA.

## Tech Stack

- **React 18** — UI library
- **React Router v6** — client-side routing / multi-page navigation
- **Vite** — fast dev server and build tool
- **Plain CSS** — component-scoped CSS files (no extra dependencies)
- **Google Fonts** — Cormorant Garamond + Barlow (loaded via `index.html`)

## Getting Started

### 1. Prerequisites

Make sure you have **Node.js** installed (v18+ recommended):
```bash
node -v
```
If not installed, download from https://nodejs.org

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Dev Server

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

This outputs to `dist/` — ready to deploy.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   └── Footer.jsx / Footer.css
├── pages/
│   ├── Home.jsx / Home.css
│   ├── About.jsx / About.css
│   ├── Services.jsx / Services.css
│   ├── Forms.jsx / Forms.css
│   └── Contact.jsx / Contact.css
├── App.jsx         ← Router setup
├── main.jsx        ← Entry point
└── index.css       ← Global styles & design tokens
public/
└── forms/          ← Drop PDF forms here when ready
```

## Design System

CSS variables are defined in `src/index.css`:

```css
--red: #C41230
--black: #0d0d0d
--white: #fafaf8
--font-display: 'Cormorant Garamond'  /* headings */
--font-body: 'Barlow'                  /* body text */
--font-condensed: 'Barlow Condensed'   /* labels, nav */
```

---

## Adding Real Forms (PDFs)

1. Place PDF files in `public/forms/` using these exact filenames:
   - `pediatric-intake-form.pdf`
   - `hippotherapy-consent.pdf`
   - `hippotherapy-intake.pdf`
   - `hipaa-authorization.pdf`

2. In `src/pages/Forms.jsx`, find the `onClick` handler on each download button and **delete it entirely** (along with the `e.preventDefault()` line). The `href` + `download` attributes will then work automatically.

---

## Adding a Photo of Iris

In `src/pages/About.jsx`, find the `bio__photo-placeholder` div and replace it with:

```jsx
<img src="/iris-photo.jpg" alt="Iris Melton, LPTA" className="bio__photo" />
```

Then add to `About.css`:
```css
.bio__photo { width: 100%; aspect-ratio: 3/4; object-fit: cover; }
```

Place the photo file in the `public/` folder as `iris-photo.jpg`.

---

## Deploying to Netlify (Free)

1. Push this repo to GitHub
2. Go to https://netlify.com and sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repo
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click Deploy ✓

Every future `git push` auto-deploys. That's your CI/CD pipeline.

---

## Resume Bullet Points

- Built and deployed a responsive multi-page React website using React Router v6, Vite, and component-scoped CSS
- Implemented a mobile-first responsive design system with CSS custom properties (design tokens)
- Set up a continuous deployment pipeline using GitHub + Netlify with zero downtime deploys
- Designed and developed a complete client-facing website for a licensed medical private practice
