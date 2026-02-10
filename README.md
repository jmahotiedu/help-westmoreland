# Help Westmoreland

A disaster relief website for families in Westmoreland, Jamaica affected by Hurricane Melissa. Connects residents with resources, volunteers, and donation channels.

**Live site**: [jmahotiedu-help-westmoreland.vercel.app](https://jmahotiedu-help-westmoreland.vercel.app)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Features

- 11 responsive pages (Home, About, Mission, Programs, Transparency, FAQ, How to Help, Partner, Contact, Donate)
- Donorbox donation integration with PayPal support
- Contact, Volunteer, and Partnership forms via Formspree with honeypot spam protection
- SEO: structured data (JSON-LD), auto-generated sitemap/robots.txt, Open Graph and Twitter Card tags
- Google Analytics 4 via environment configuration
- Accessibility: WCAG 2.1 AA intent, skip-to-content, keyboard navigation, ARIA labels
- Hero section with auto-playing background video and scroll-triggered counter animations
- Mobile-first responsive design with hamburger navigation

## Getting Started

```bash
git clone https://github.com/jmahotiedu/help-westmoreland.git
cd help-westmoreland
npm install
cp .env.example .env.local   # edit with your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example` for all options. Key variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` | Formspree form ID for contact |
| `NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID` | Formspree form ID for volunteer |
| `NEXT_PUBLIC_FORMSPREE_PARTNER_ID` | Formspree form ID for partner |
| `NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID` | Donorbox campaign ID |

## Deployment

Deployed via Vercel with automatic deploys on push to `main`. AWS static-site DR option documented (S3 + CloudFront + Route 53).

## Repo topics

`nextjs` `react` `typescript` `tailwindcss` `vercel` `disaster-relief`

## License

MIT
