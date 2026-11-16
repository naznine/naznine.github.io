# Mansura Naznine – research portfolio

Plain HTML/CSS/JS. No build step. **All content lives in `data.js`.**

## Run locally
Open `index.html` in a browser. Or: `python3 -m http.server 8000` in this folder, then visit http://localhost:8000

## What to replace (search `data.js` for `[ADD` and `[CONFIRM`)
- `links.scholar`, `links.github`, `links.linkedin` – your profile URLs (your CV shows the handles `naznine` and `mansura-naznine`; check which is which)
- Each project: `image` (add the line `image:"assets/images/yourfile.png"`), `links.code`
- Project text marked `[ADD ...]` (hydronephrosis role/challenge, multimodal project, QuICK Lab lines, courses taught)
- Qatar University end date; Talanta year (CV says 2027); EAAI waste-paper and glioblastoma details
- Publications: add `scholar`, `pdf`, `project` URLs to any entry
- When finished set `showPlaceholders:false` to hide empty link boxes
- CV: replace `assets/Mansura_Naznine_CV.pdf` (keep the same file name)

## Add a publication or project
Copy an existing entry in `publications` or `projects` and edit it. Order in the file = order on the page.

## Deploy free
- **GitHub Pages:** push the folder to a repo, Settings → Pages → Deploy from branch `main` / root. Site: `https://USERNAME.github.io/REPO/`
- **Netlify:** app.netlify.com → Add new site → Deploy manually → drag the folder in.
- **Vercel:** `npm i -g vercel`, run `vercel` in this folder (framework: Other, no build command).
