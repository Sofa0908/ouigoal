# OuiGoal — 邦加國際文教發展股份有限公司

Official website for OuiGoal Consultancy Co. Ltd. — a one-stop international
education platform (study abroad · foreign educators · school partnerships).

**Live preview:** https://sofa0908.github.io/ouigoal/

- Astro 7 + Tailwind CSS 4, fully static — no backend, no CMS.
- zh-TW at `/`, English at `/en/`. All copy lives in `src/i18n/ui.ts`.
- Deploys to GitHub Pages automatically on push to `main`
  (`.github/workflows/deploy.yml`).

Design spec: `docs/superpowers/specs/2026-07-03-ouigoal-site-design.md`

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/ouigoal/
npm run build    # static output in dist/
```

## TODO

- [ ] Confirm official email (currently placeholder `hello@ouigoal.com` in `src/i18n/ui.ts`)
- [ ] Real logo + hero imagery from Maggie
- [ ] Custom domain (ouigoal.com / ouigoal.com.tw) — drops the `/ouigoal` base path
