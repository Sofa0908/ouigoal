# OuiGoal Website — Design Spec (2026-07-03)

## What

Official website for 邦加國際文教發展股份有限公司 (OuiGoal Consultancy Co. Ltd.) — a
one-stop international education platform: study-abroad consulting, foreign educator
recruitment/management, and compliant school/institution partnerships.

## Decisions

- **Stack:** Astro 7 + Tailwind CSS 4, fully static output. No backend, no CMS (後台
  explicitly out of scope — one-shot build). All copy lives in `src/i18n/ui.ts`.
- **Hosting:** GitHub Pages (personal account `Sofa0908`, via `GH_CONFIG_DIR`
  from `.envrc` copied from Omni). Deployed by GitHub Actions on push to `main`.
  Preview URL: `https://sofa0908.github.io/ouigoal/` (`base: '/ouigoal'`).
  Custom domain (ouigoal.com / ouigoal.com.tw) deferred; attaching one later drops
  the base path.
- **i18n:** zh-TW default at root, English mirrored under `/en/`. Language toggle in
  header. All pages are fully bilingual. (The brief originally marked 內頁 B 外國人專區
  as 全英文; Vincent later chose a Chinese version too, for consistency.)

## Pages & routes

| Route | Content |
|---|---|
| `/`, `/en/` | Home: Hero → About → 3 service cards → Contact (email only) |
| `/services/explore-study` (+ `/en/...`) | 內頁 A 留遊學專區: 短期興趣探索 / 留遊學規劃 / 升學顧問 |
| `/services/work-teach-live` (+ `/en/...`) | 內頁 B Work, Teach & Live (English only): careers / visa & ARC / Mandarin / settling-in |
| `/services/partner-solutions` (+ `/en/...`) | 內頁 C 學校/私立機構合作專區: 學校外師招募 / 企業外籍人才支持 |

The three service pages share one template (`src/components/ServicePage.astro`),
differing only in data from the i18n dictionary.

Header: Home / About Us / Services (hover dropdown → 3 subpages) / Contact Us /
language toggle. About & Contact are anchor links into the homepage sections. The
hero 「立即諮詢」 button smooth-scrolls to `#contact`.

## Visual system

- 60/30/10 per brief: deep navy (`navy-900 #0c1d38` family) for nav/headings/cards,
  white background, warm gold (`gold-500 #e8a33d`) reserved for CTAs and accents.
- Type: Playfair Display + Noto Serif TC for display, Inter + Noto Sans TC for body
  (Google Fonts).
- Hero: navy gradient with an abstract flight-path/connection SVG motif (no stock
  photography yet — swappable when real assets arrive).
- Tone: international-school polish (ref: stgeorges.ch, aiglon.ch), 不要補習班感.

## Out of scope (confirmed)

CMS/後台, contact form, phone/LINE/address/socials, analytics, custom domain.

## Open items

- Official email is a placeholder (`hello@ouigoal.com`) — confirm with Maggie.
- Real hero/brand imagery and logo to be supplied later.
