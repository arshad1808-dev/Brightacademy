# BrightRise Academy

A redesigned Next.js App Router website for the existing BrightRise Academy business. The visual system uses warm ivory, deep blue, orange accents, DM Sans, and Newsreader. Content and routes follow the client's existing site.

## Run locally

Use Node.js 22 LTS.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Restart a running development server after installing dependency updates.

```sh
npm run build
npm start
```

Development output uses `.next`; production uses `.next-production`, so building does not corrupt a running development server.

## Content and routes

- `lib/site-data.js`: verified business contact details, five subjects, Kindergarten and Grades 1–10.
- `app/globals.css`: shared responsive design system.
- `components/Reveal.js`: progressive scroll reveals. Content is visible without JavaScript and respects reduced motion.
- Home, subjects, grades, all grade pages, four original subject URLs, Social Studies, online tutoring, about, how it works, FAQ, contact, free trial, and journal.
- Legacy `/classes`, `/subjects/math` etc. and `/book-demo` permanently redirect to canonical URLs.
- Unverified reviews and placeholder video pages redirect to About and How It Works; the journal retains the existing coming-soon state.

## SEO and performance

Marketing pages are generated at build time. Metadata includes individual titles, descriptions, canonicals, social previews, and appropriate organization, breadcrumb, course and FAQ JSON-LD. Sitemap and robots routes are generated from the content model. FAQ uses native HTML disclosures without hydration. Photos use responsive Next Image; fonts are self-hosted by Next Font.

SEO metadata does not guarantee search rankings. Lighthouse lab measurements also differ from real-user Core Web Vitals and should be checked on the deployed domain.

## Enquiry delivery

`POST /api/enquiry` validates input server-side and forwards the original field names to the Google Apps Script endpoint already used by the client's existing website. Set `ENQUIRY_ENDPOINT` in the deployment environment to override it.

The frontend shows success only after the server confirms an accepted response. Failure preserves the form and offers email/WhatsApp alternatives. Browser QA uses mocked responses; no test enquiry is submitted to the client's live endpoint. Before launch, the client should confirm an actual test lead appears in their destination. Apply hosting-level abuse protection to the public endpoint.

## Photography

Locally hosted illustrative stock photos; these are not represented as BrightRise staff or customers:

- `student-at-home.jpg`: Pexels photo 4145153, https://www.pexels.com/photo/4145153/
- `student-learning.jpg`: Pexels photo 4145190, https://www.pexels.com/photo/4145190/
- `learning-together.jpg`: Unsplash, https://images.unsplash.com/photo-1588072432836-e10032774350

The social sharing image is generated from `public/social-card.svg` to `public/social-card.png`. Replace stock imagery with client-approved photography when available.
