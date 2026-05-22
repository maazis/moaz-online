## about moaz.net

I made a [website](https://moaz.net) to find info about me.

### Overview

This website is built with Astro, TypeScript, Tailwind, and deployed with Bun on Cloudflare Pages. Analytics are handled by GoatCounter.

### Tech stack

- Astro
- Tailwind
- TypeScript
- Bun
- Cloudflare Pages
- GoatCounter

### File structure

```
/ (project root)
├─ astro.config.mjs
├─ bun.lock
├─ package.json
├─ tsconfig.json
├─ README.md
├─ public/
│  ├─ robots.txt
│  └─ sitemap-index.xml
├─ src/
│  ├─ layouts/
│  │  └─ Layout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  └─ about-this-website.mdx
│  ├─ styles/
│  │  └─ global.css
│  └─ utils/
│     ├─ constants.ts
│     └─ types.ts
└─ dist/ (build output)
```

### Run locally

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

### Build

Generate a production build:

```bash
bun run build
```

The build output is written to `dist/`.

### Environment

- `PUBLIC_SPOTIFY_EMBED_URL` — optional environment variable for a Spotify embed (currently commented out in the site).

### Credits

- Fonts: Special Gothic Expanded One, National Park, Coral Pixels, Libre Barcode 128.
- Icons: [Phosphor](https://phosphoricons.com)
- Favicon: The Drifter from [Hyper Light Drifter](https://store.steampowered.com/app/257850/Hyper_Light_Drifter/)
- Open Graph image: [GuangYuan YU](https://www.artstation.com/artwork/4bzAOk)

<br />

> THANK YOU FOR COMING.