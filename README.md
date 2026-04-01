## Kanan Services Limited

Marketing website for Kanan Services Limited built with Next.js App Router.

## Contact Form

The contact form is handled by the Vercel-hosted route:

```text
/api/contact
```

It uses:
- server-side validation
- a honeypot field
- a minimum fill-time check
- Resend email delivery via environment variables

Required environment variables are listed in `.env.example`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

Add the variables from `.env.example` in the Vercel project settings before testing the contact form.
