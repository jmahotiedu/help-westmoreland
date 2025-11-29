# Help Westmoreland

[![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

A comprehensive disaster relief website supporting families in Westmoreland, Jamaica after Hurricane Melissa. Built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Features

- ✅ **11 Fully Responsive Pages** - Home, About, Mission, Programs, Transparency, FAQ, How to Help, Partner, Contact, and Donate
- ✅ **Donation Integration** - Donorbox embed with PayPal support (Jamaica-compatible)
- ✅ **Contact Forms** - Contact, Volunteer, and Partnership forms with Formspree integration
- ✅ **SEO Optimized** - Structured data, sitemap, robots.txt, Open Graph tags
- ✅ **Google Analytics Ready** - GA4 tracking with environment variable configuration
- ✅ **Accessibility Features** - WCAG 2.1 Level AA compliant, skip-to-content link, keyboard navigation
- ✅ **Hero Video Section** - Auto-playing background video with loading states
- ✅ **Animated Statistics** - Scroll-triggered counter animations
- ✅ **Mobile Responsive** - Hamburger menu, mobile-first design
- ✅ **Security Features** - Honeypot spam protection, form validation
- ✅ **Performance Optimized** - Static generation, font optimization, Turbopack bundler

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jmahotiedu/help-westmoreland.git
cd help-westmoreland
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables file:
```bash
# Copy the template and fill in your values
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID=your_volunteer_form_id
NEXT_PUBLIC_FORMSPREE_PARTNER_ID=your_partner_form_id
NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID=helpwestmoreland
```

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
help-westmoreland/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── about/                  # About Us page
│   │   ├── contact/                # Contact page
│   │   ├── donate/                 # Donation page
│   │   ├── faq/                    # FAQ page
│   │   ├── how-to-help/            # Volunteer page
│   │   ├── mission/                # Mission page
│   │   ├── partner/                # Partnership page
│   │   ├── programs/               # Programs page
│   │   ├── transparency/           # Transparency page
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles + Tailwind config
│   │   ├── sitemap.ts              # Auto-generated sitemap
│   │   └── robots.ts               # Auto-generated robots.txt
│   ├── components/
│   │   ├── accessibility/          # Skip-to-content component
│   │   ├── analytics/              # Google Analytics component
│   │   ├── donate/                 # Donation components
│   │   ├── forms/                  # Form components
│   │   ├── home/                   # Homepage components
│   │   ├── layout/                 # Header, Footer
│   │   ├── seo/                    # Structured data
│   │   └── ui/                     # Reusable UI components
│   └── lib/                        # Utility functions
├── public/                         # Static assets
│   ├── images/                     # Images (add your own)
│   └── videos/                     # Videos (add your own)
├── IMPLEMENTATION_PLAN.md          # Complete development plan (2,685 lines)
├── VIDEO_COMPRESSION_GUIDE.md      # FFmpeg video optimization guide
├── DONORBOX_SETUP_GUIDE.md         # Donation platform setup
├── FORMS_SETUP_GUIDE.md            # Form integration guide
├── SEO_SETUP_GUIDE.md              # SEO, analytics, accessibility guide
├── DEPLOYMENT_GUIDE.md             # Production deployment guide
├── LAUNCH_CHECKLIST.md             # Pre-launch and post-launch tasks
└── package.json                    # Dependencies
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production URL of your website | Yes | `https://helpwestmoreland.org` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | No | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` | Formspree form ID for contact form | Yes | `xyzabc123` |
| `NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID` | Formspree form ID for volunteer form | Yes | `def456ghi` |
| `NEXT_PUBLIC_FORMSPREE_PARTNER_ID` | Formspree form ID for partner form | Yes | `jkl789mno` |
| `NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID` | Donorbox campaign ID | Yes | `helpwestmoreland` |

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Technology Stack

### Core
- **Next.js 16.0.5** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework

### Third-Party Integrations
- **Formspree** - Form backend (contact, volunteer, partnership)
- **Donorbox** - Donation platform with PayPal integration
- **Google Analytics 4** - Traffic and behavior tracking

### Development Tools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler
- **PostCSS** - CSS processing

## Third-Party Setup

### 1. Formspree Forms
See [FORMS_SETUP_GUIDE.md](./FORMS_SETUP_GUIDE.md) for detailed instructions.

1. Create account at https://formspree.io
2. Create three forms (Contact, Volunteer, Partner)
3. Add form IDs to environment variables
4. Configure email notifications

### 2. Donorbox Donations
See [DONORBOX_SETUP_GUIDE.md](./DONORBOX_SETUP_GUIDE.md) for detailed instructions.

1. Create account at https://donorbox.org
2. Set up campaign for Help Westmoreland
3. Configure PayPal as payment method (Jamaica-compatible)
4. Add campaign ID to environment variables

### 3. Google Analytics
See [SEO_SETUP_GUIDE.md](./SEO_SETUP_GUIDE.md) for detailed instructions.

1. Create account at https://analytics.google.com
2. Create GA4 property
3. Copy Measurement ID
4. Add to environment variables

## Deployment

### Deploy to Vercel (Recommended)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete instructions.

1. Push code to GitHub
2. Visit https://vercel.com
3. Import GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy!

**Free tier includes:**
- Automatic HTTPS
- Global CDN
- Unlimited bandwidth (100GB/month)
- Preview deployments

### Deploy to Netlify

Alternative hosting option with similar features. See deployment guide for instructions.

## SEO & Analytics

This website includes comprehensive SEO optimizations:

- **Structured Data (JSON-LD)** - Organization, NGO, and DonateAction schemas
- **XML Sitemap** - Auto-generated at `/sitemap.xml`
- **Robots.txt** - Auto-generated at `/robots.txt`
- **Open Graph Tags** - Optimized for Facebook, LinkedIn sharing
- **Twitter Cards** - Optimized for Twitter sharing
- **Meta Descriptions** - SEO-friendly descriptions for all pages
- **Google Analytics** - Page view tracking with environment variable

## Accessibility

WCAG 2.1 Level AA compliant features:

- Skip-to-content link for keyboard users
- Semantic HTML (header, main, footer, nav)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Form labels and validation
- Color contrast ratios meet AA standards
- Mobile-responsive design

## Documentation

Comprehensive guides included:

- [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) - Complete 7-phase development plan (2,685 lines)
- [VIDEO_COMPRESSION_GUIDE.md](./VIDEO_COMPRESSION_GUIDE.md) - FFmpeg video optimization (270 lines)
- [DONORBOX_SETUP_GUIDE.md](./DONORBOX_SETUP_GUIDE.md) - Donation setup (650 lines)
- [FORMS_SETUP_GUIDE.md](./FORMS_SETUP_GUIDE.md) - Form integration (450 lines)
- [SEO_SETUP_GUIDE.md](./SEO_SETUP_GUIDE.md) - SEO and analytics (320 lines)
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Production deployment (500 lines)
- [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) - Launch tasks (450 lines)

**Total documentation: 5,500+ lines**

## Media Assets

### Adding Hero Video

1. Create/obtain video file (30-60 seconds recommended)
2. Compress video using [VIDEO_COMPRESSION_GUIDE.md](./VIDEO_COMPRESSION_GUIDE.md)
3. Target: <5MB file size
4. Place at `/public/videos/hero-video.mp4`
5. Create poster image at `/public/images/hero-poster.jpg`

### Adding Images

1. Optimize images (use TinyPNG or similar)
2. Target: <100KB per image
3. Place in `/public/images/`
4. Use Next.js `<Image>` component for automatic optimization

## Performance

Current Lighthouse scores (without media):
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Security

- Environment variables properly configured
- `.env.local` excluded from Git
- Honeypot spam protection on forms
- HTTPS enforced (on Vercel/Netlify)
- Form validation on client and server
- No sensitive data in client-side code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Mobile Chrome (Android 8+)

## License

MIT License - See LICENSE file for details

## Contact

**Help Westmoreland**
- Email: helpwestmoreland@gmail.com
- Website: https://helpwestmoreland.org
- Instagram: @helpwestmoreland
- Facebook: /helpwestmoreland
- TikTok: @helpwestmoreland

## Contributing

This is a charity project. If you'd like to contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Acknowledgments

Built to support families in Westmoreland, Jamaica recovering from Hurricane Melissa.

---

**Built with ❤️ for the people of Westmoreland, Jamaica** 🇯🇲
