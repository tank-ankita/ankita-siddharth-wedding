# Ankita & Siddharth — Wedding Website

A single, self-contained static site (plain HTML/CSS/JS, no build step) styled after your
save-the-date artwork: deep maroon, bottle green, antique gold, on aged cream.

```
wedding-site/
├── index.html
├── css/styles.css
├── js/script.js
├── assets/
│   ├── couple-illustration.png   (background removed, from arch4.png)
│   └── front_v7.png              (your save-the-date front, used in "The Journey")
└── README.md
```

Because there's no build step, you can host this **for free** in a couple of ways. GitHub Pages
is the easiest if you're already comfortable with GitHub.

## Option A — GitHub Pages (recommended, fully free, custom domain optional)

1. Create a new **public** repository on GitHub, e.g. `ankita-siddharth-wedding`.
2. Upload everything in this folder to the repo (keep the same folder structure — `index.html`
   at the root, `css/`, `js/`, `assets/` as subfolders). Easiest way if you don't use git day to
   day: on the repo page, click **Add file → Upload files**, drag the whole folder in, commit.
3. Go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/(root)**. Save.
5. GitHub will give you a live URL in a minute or two, typically:
   `https://<your-username>.github.io/ankita-siddharth-wedding/`
6. (Optional) Under Settings → Pages → Custom domain, you can point a domain you own
   (e.g. `ankitaandsiddharth.com`) at the site for free — GitHub Pages hosting itself never
   costs anything, only the domain name would (roughly $10–15/year if you want one).

## Option B — Netlify Drop (fastest, zero setup, no GitHub needed)

1. Go to **https://app.netlify.com/drop**.
2. Drag the whole `wedding-site` folder onto the page.
3. It deploys instantly to a free `*.netlify.app` URL. You can rename the site or connect a
   custom domain later from the Netlify dashboard, still free.

## Option C — Vercel

1. Create a free account at **https://vercel.com**.
2. "Add New… → Project", import the GitHub repo from Option A (or drag-and-drop via the CLI:
   `npx vercel` from inside this folder).
3. Deploy with default settings — it's a static site, so no framework preset is needed.

Any of the three is genuinely free forever for a site like this (no database, no server).

---

## Before you publish — three things to personalize

1. **RSVP form.** The form currently posts to a placeholder Formspree endpoint. Formspree's
   free tier (50 submissions/month) works great with a static site and needs no backend:
   - Create a free account at **https://formspree.io**.
   - Create a new form, copy the endpoint it gives you (looks like
     `https://formspree.io/f/abc1234`).
   - In `index.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and swap in your ID.
   - Submissions will land in your Formspree inbox and can be forwarded to your email.
   - (Alternative: Google Forms embedded via iframe, or a Google Sheet + Apps Script — happy to
     wire either up instead if you'd prefer.)

2. **Countdown date.** In `js/script.js`, the line
   `const WEDDING_DATE = new Date('2027-01-29T10:00:00+05:30').getTime();`
   controls the countdown on the homepage — it's set to your ceremony day/time in IST. Adjust if
   the muhurat time changes.

3. **Contact email.** Replace `ankita.siddharth.wedding@example.com` (appears twice — RSVP
   section and FAQ) with your real inbox.

## Notes on the build

- No frameworks or bundlers — just semantic HTML, modern CSS (scroll reveals via
  `IntersectionObserver`, the flight-path animation via native CSS `offset-path`, and the
  three-arch motif as inline SVG so it stays crisp at any size), and vanilla JS. This keeps the
  site fast, dependency-free, and trivial to host anywhere that serves static files.
- Fonts are loaded from Google Fonts (Cinzel, Playfair Display, Cormorant Garamond) — free,
  no account needed.
- Fully responsive down to small phones, keyboard-focusable, and respects
  `prefers-reduced-motion`.
