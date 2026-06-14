# CELSTUDIOSX Portfolio

Portfolio site for **Celine Goh Hui Ling** — interaction design, web development, and 3D work presented as a cohesive editorial archive.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Three.js / React Three Fiber

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Environment

Copy `.env.example` to `.env.local` and set your Formspree form ID for the contact form:

```
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

## Project structure

```
app/          Route pages (thin wrappers)
components/   UI, case studies, shared layout primitives
lib/          Content and data (case studies, resume, project lists)
hooks/        Shared client hooks (scroll reveal, typewriter)
public/       Static assets (images, models, PDFs)
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About |
| `/resume` | Resume |
| `/contact` | Contact form |
| `/work/3d-design` | 3D playground index |
| `/work/graphic-design` | Poster A Day gallery |
| `/work/web-development` | Web dev workbench |
| `/work/serenity` | Serenity case study |
| `/work/the-keepsake` | Keepsake case study |
| `/work/twin-pagodas` | Twin Pagodas case study |
| `/work/cayra` | Cayra case study |
| `/work/spirit-sprite` | Spirit Sprite case study |

## Assets

Large video fallbacks (`.mov` files over 100MB) are gitignored. The site uses `.webm` / `.mp4` versions committed to `public/`. Some Cayra and header media are hosted on Vercel Blob storage.

## Links

- GitHub: [xcellsx](https://github.com/xcellsx)
- LinkedIn: [celineghl](https://www.linkedin.com/in/celineghl/)
- Instagram: [@celstudiosx](https://www.instagram.com/celstudiosx)
- Email: celstudiosx@gmail.com
