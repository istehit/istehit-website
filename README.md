<p align="center">
  <img src="public/Iste.png" alt="ISTE HIT SC Logo" width="120" />
</p>

<h1 align="center">ISTE HIT Student Chapter — Official Website</h1>

<p align="center">
  <strong>Innovating · Educating · Empowering</strong><br/>
  The official website for the Indian Society for Technical Education – Haldia Institute of Technology Student Chapter.
</p>

<p align="center">
  <a href="https://www.istehitsc.com">Live Site</a> ·
  <a href="https://www.instagram.com/iste.hit.sc/">Instagram</a> ·
  <a href="https://www.linkedin.com/company/iste-hit-sc/">LinkedIn</a> ·
  <a href="https://github.com/istehit">GitHub</a>
</p>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Content Management](#content-management)
- [SEO](#seo)
- [Contributing](#contributing)
- [License](#license)

---

## About

ISTE HIT SC is the technical society at **Haldia Institute of Technology** (Purba Medinipur, West Bengal). This repository houses the source code for its public-facing website — a platform that showcases upcoming events, past memories, membership tiers, FAQs, and more.

The site follows a clean **Swiss / Neo-brutalist design language** with sharp grid layouts, strong typography, and a bold `#FF3300` accent palette.

---

## Features

| Area | Details |
|---|---|
| **Dynamic Hero** | Automatically surfaces the next upcoming event from Sanity CMS; falls back to a static tagline when none exists. |
| **Events (Google Drive)** | Fetches event folders & photos from a shared Google Drive folder via the Drive API, proxied through server-side API routes to avoid CORS. |
| **Gallery** | Album-based photo viewer with `framer-motion` animations, modal lightbox, and `react-query` data fetching. |
| **Sanity Studio** | Embedded at `/studio` — content editors can manage events directly from the website. |
| **Membership Tiers** | Three-tier showcase (Standard → Active → Core Team) with step-by-step joining instructions. |
| **FAQ** | Accordion-based FAQ page with expandable answers. |
| **SEO** | Full OpenGraph / Twitter Card metadata, structured data (JSON-LD), `robots.txt`, `sitemap.xml`, and canonical URLs. |
| **Responsive** | Mobile-first layouts with a collapsible hamburger nav and fluid typography (`clamp()`). |
| **Legal Pages** | Privacy Policy, Terms of Service, and Code of Conduct pages. |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| **Language** | TypeScript |
| **Styling** | Vanilla CSS with CSS custom properties (`swiss.css` design system) + Tailwind CSS v4 (gallery page) |
| **CMS** | [Sanity v5](https://www.sanity.io/) (`next-sanity` integration) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Data Fetching** | [TanStack React Query](https://tanstack.com/query) (gallery), native `fetch` via Sanity client |
| **Icons** | Material Symbols (Google Fonts), Lucide React, React Icons |
| **Images** | Google Drive API (proxied), Supabase Storage, Google Photos |
| **Fonts** | Inter (Google Fonts) |
| **Deployment** | Vercel (inferred) |

---

## Project Structure

```
istehit-website/
├── public/                     # Static assets (logo, SVGs)
├── sanity.config.ts            # Sanity Studio configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (navbar, footer, meta, JSON-LD)
│   │   ├── page.tsx            # Home page (hero, marquee, metrics, sections)
│   │   ├── swiss.css           # Global design system (Swiss / Neo-brutalist)
│   │   ├── globals.css         # Tailwind directives
│   │   ├── robots.ts           # robots.txt generation
│   │   ├── sitemap.ts          # sitemap.xml generation
│   │   ├── about/              # About page (mission, vision, features, contact)
│   │   ├── events/             # Events page (Google Drive integration)
│   │   ├── gallery/            # Gallery page (albums + lightbox)
│   │   ├── membership/         # Membership tiers & how-to-join
│   │   ├── faq/                # FAQ accordion page
│   │   ├── privacy/            # Privacy policy
│   │   ├── terms/              # Terms of service
│   │   ├── code-of-conduct/    # Code of conduct
│   │   ├── studio/             # Sanity Studio (catch-all route)
│   │   └── api/
│   │       ├── drive-events/   # API route → fetches Drive event folders
│   │       └── drive-image/    # API route → proxies Drive image thumbnails
│   ├── components/
│   │   ├── SwissNavbar.tsx     # Sticky navbar with mobile drawer
│   │   ├── SwissFooter.tsx     # Footer with sitemap, social, newsletter
│   │   ├── EventsGrid.tsx      # Grid layout for Drive-based events
│   │   ├── RegistrationForm.tsx# Event registration form
│   │   ├── providers.tsx       # React Query provider wrapper
│   │   ├── sections/           # Home page section components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   ├── MembershipSection.tsx
│   │   │   └── FAQSection.tsx
│   │   └── ui/
│   │       └── gallery/        # Gallery-specific UI (AlbumCard, ImageGallery)
│   ├── hooks/
│   │   └── useFetchAlbums.ts   # Album data (mock/static for now)
│   ├── lib/
│   │   ├── drive.ts            # Google Drive API helpers
│   │   ├── site.ts             # Site-wide metadata constants
│   │   └── utils.ts            # Utility functions (cn helper)
│   ├── sanity/
│   │   ├── client.ts           # Sanity client instance & SanityEvent type
│   │   └── schemaTypes/
│   │       ├── event.ts        # Event document schema
│   │       └── index.ts        # Schema barrel export
│   └── types/
│       └── iconify.d.ts        # Type declarations
├── next.config.ts              # Image remote patterns (Supabase, Google Drive)
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS ← Tailwind plugin
├── eslint.config.mjs           # ESLint configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** (ships with Node) or **pnpm** / **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/istehit/istehit-website.git
cd istehit-website

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local   # then fill in the values (see below)

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Environment Variables

Create a `.env.local` file in the project root with the following keys:

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | ✅ |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name (default: `production`) | ✅ |
| `GOOGLE_DRIVE_FOLDER_ID` | Root Google Drive folder ID containing event photo sub-folders | ✅ |
| `GOOGLE_API_KEY` | Google Cloud API key with Drive API enabled | ✅ |
| `NEXT_PUBLIC_SITE_URL` | Production URL (default: `https://www.istehitsc.com`) | ❌ |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Content Management

### Sanity Studio

The website embeds **Sanity Studio** at the `/studio` route. To manage content:

1. Navigate to `https://www.istehitsc.com/studio` (or `localhost:3000/studio` locally).
2. Log in with your authorized Sanity account.
3. Create or edit **Event** documents (title, description, date, location, image URL, registration link).

Changes propagate to the live site via **ISR** (Incremental Static Regeneration) — the home page revalidates every **60 seconds** and the events page every **5 minutes**.

### Event Schema

The `event` document in Sanity contains:

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Event name (required) |
| `description` | `text` | Short paragraph about the event |
| `location` | `string` | Venue (e.g., "SN Bose Auditorium") |
| `eventDate` | `datetime` | Date & time (required) |
| `imgUrl` | `url` | Hero image URL (e.g., from Supabase) |
| `registration` | `boolean` | Whether registration is open |
| `registrationLink` | `url` | Link to registration form (shown only when `registration` is `true`) |

### Google Drive Gallery

Event photos are served from a **public Google Drive folder**. The folder structure should be:

```
📁 Root Folder (ID in env)
├── 📁 Event Name 1
│   ├── 🖼 photo1.jpg
│   ├── 🖼 photo2.jpg
│   └── ...
├── 📁 Event Name 2
│   └── ...
```

Images are proxied through `/api/drive-image` to avoid CORS and authentication issues in the browser.

---

## SEO

The website implements comprehensive SEO best practices:

- **Metadata** — Dynamic `<title>` & `<meta description>` per page with OpenGraph and Twitter Card tags.
- **Structured Data** — JSON-LD for `Organization` and `WebSite` schemas injected in the root layout.
- **Sitemap** — Auto-generated at `/sitemap.xml` covering all public routes.
- **Robots** — `/robots.txt` allows crawling of all pages except `/studio` and `/api/`.
- **Canonical URLs** — Set per page via `alternates.canonical`.
- **Semantic HTML** — Proper heading hierarchy, `<header>`, `<main>`, `<footer>`, `<section>` elements.

---

## Contributing

1. **Fork** the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m "feat: add my feature"`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a **Pull Request**.

Please follow the project's code style and provide clear PR descriptions.

---

## License

This project is maintained by the **ISTE HIT Student Chapter**. All rights reserved.

---

<p align="center">
  Built with ❤️ by the ISTE HIT SC Tech Team
</p>
