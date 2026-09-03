# Running this project

Next.js 16 static-export site (React 19, Tailwind 4, GSAP) deployed to GitHub Pages.
Config: `next.config.ts` sets `output: "export"` and `trailingSlash: true`.
No `.env*` files exist — nothing to copy from the main checkout.

## Reproduce the artifacts

1. Install dependencies (from the project root):

   ```bash
   npm ci
   # or, if node_modules already exists: npm install
   ```

2. Build the static export (required for the production artifact the deploy workflow uploads):

   ```bash
   npm run build
   ```

   Output goes to `out/` (gitignored). GitHub Pages serves that directory directly;
   deep links work because of `trailingSlash: true` (e.g. `/about/` → `out/about/index.html`).

## Run the server

Dev server (default port 3000):

```bash
npm run dev
```

Notes:
- Next.js 16 refuses to start a SECOND dev server for the same project directory.
  If `npm run dev` fails with "Another next dev server is already running", either reuse
  the existing server (check `http://localhost:3000`) or stop it with
  `taskkill /PID <pid> /F` first.
- To force a different port: `npm run dev -- -p <port>` (still blocked by the
  per-project dev lock while another instance of this project is running).
- Alternative when the dev server is locked but a static build exists: serve the
  `out/` directory with any static file server (it is a complete site).