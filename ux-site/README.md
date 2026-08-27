# Celine — Independent UI/UX Portfolio

Standalone research-first UI/UX site (separate from the multidisciplinary CELSTUDIOSX portfolio).

## Projects

1. **Ninkatec onboarding** — school 0→1, persona + journey + wireframes vs industry standards  
2. **Amazon redesign** — personal, validated friction + competitive benchmark + flow redesign  
3. **GXS Bank** — internship, workflow gaps, Figma critique, A/B & preference tests, questionnaires  
4. **Shopee design test** — problem-first under timebox; lesson on depth over breadth  

## Run locally

```bash
cd ux-site
npm install
npm run dev
```

Open [http://localhost:3100](http://localhost:3100).

## Deploy (independent of the main portfolio)

In Vercel: set **Root Directory** to `ux-site`, then deploy.

```bash
cd ux-site
npm run build
npx vercel --prod
```

Or deploy anonymously for a temporary preview:

```bash
cd ux-site && npx vercel deploy --yes --temporary
```
