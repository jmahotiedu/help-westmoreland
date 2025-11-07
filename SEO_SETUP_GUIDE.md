# SEO & Analytics Setup Guide

## Overview
Phase 6 has implemented comprehensive SEO, analytics, and accessibility features. This guide explains what's been added and how to configure it.

## Features Implemented

### 1. Structured Data (JSON-LD)

**What it does:** Helps search engines understand your organization and display rich snippets in search results.

**Implemented:**
- Organization schema on all pages
- NGO/Charity classification
- Social media profiles linking
- Contact information
- Logo and description

**Location:** `src/components/seo/StructuredData.tsx`

**Configuration:** Update in the component if needed:
- Organization name
- Logo URL
- Social media URLs
- Contact email

### 2. Sitemap

**What it does:** Tells search engines about all pages on your website.

**URL:** `https://helpwestmoreland.org/sitemap.xml`

**Location:** `src/app/sitemap.ts`

**Pages included:**
- Homepage (priority: 1.0, weekly updates)
- /donate (priority: 0.9, weekly updates)
- All other pages (priority: 0.8, monthly updates)

**Auto-generated:** Next.js automatically generates the sitemap on build.

### 3. Robots.txt

**What it does:** Tells search engines which pages to crawl.

**URL:** `https://helpwestmoreland.org/robots.txt`

**Location:** `src/app/robots.ts`

**Configuration:**
- Allows all pages (/)
- Blocks API routes (/api/)
- Blocks Next.js internals (/_next/)
- Links to sitemap

### 4. Google Analytics 4

**What it does:** Tracks website traffic, user behavior, and conversions.

**Location:** `src/components/analytics/GoogleAnalytics.tsx`

**Setup Required:**

1. Create Google Analytics account: https://analytics.google.com
2. Create a GA4 property for helpwestmoreland.org
3. Copy your Measurement ID (looks like: G-XXXXXXXXXX)
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. For production (Vercel), add as environment variable in dashboard

**Features:**
- Page view tracking
- Auto-detects page changes (SPA navigation)
- Only loads if GA_ID is configured
- Uses `afterInteractive` strategy for performance

**Verify Setup:**
1. Add GA ID to environment variables
2. Restart dev server: `npm run dev`
3. Visit site in browser
4. Check Google Analytics Real-Time reports
5. You should see your visit

### 5. Accessibility Features

#### Skip to Content Link

**What it does:** Allows keyboard users to skip navigation and go straight to main content.

**Location:** `src/components/accessibility/SkipToContent.tsx`

**How to test:**
1. Visit any page
2. Press Tab key (don't click anywhere first)
3. "Skip to main content" link should appear
4. Press Enter to jump to main content

**Styling:**
- Hidden by default (sr-only)
- Visible on keyboard focus
- High contrast colors
- Clear focus indicator

## Metadata & Open Graph

Already configured in `src/app/layout.tsx`:

- **Page titles:** Template format for all pages
- **Descriptions:** SEO-optimized descriptions
- **Keywords:** Relevant search terms
- **Open Graph:** For social media sharing
  - Facebook, LinkedIn sharing
  - Custom OG image: `/images/og-image.jpg`
  - 1200x630px recommended
- **Twitter Cards:** Optimized for Twitter sharing

## Environment Variables Needed

Create `.env.local` in project root:

```env
# Google Analytics (optional but recommended)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL (for sitemap and metadata)
NEXT_PUBLIC_SITE_URL=https://helpwestmoreland.org

# Forms (from Phase 5)
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_form_id
NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID=your_form_id
NEXT_PUBLIC_FORMSPREE_PARTNER_ID=your_form_id

# Donations (from Phase 4)
NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID=your_campaign_id
```

## Performance Optimizations

### Already Implemented:

1. **Font Optimization**
   - Google Fonts loaded with Next.js font optimization
   - Subsets specified (latin)
   - Variable fonts for better performance

2. **Image Optimization** (when images are added)
   - Use Next.js `<Image>` component
   - Automatic WebP conversion
   - Lazy loading
   - Responsive sizes

3. **Code Splitting**
   - Automatic with Next.js App Router
   - Each page loads only needed code

4. **Static Generation**
   - All pages pre-rendered at build time
   - Fast initial page loads
   - Good for SEO

### Recommendations for Production:

1. **Compress Images**
   - Use TinyPNG or similar before uploading
   - Target: < 100KB per image
   - Use next/image for automatic optimization

2. **Add Content Security Policy**
   - Prevent XSS attacks
   - Configure in next.config.ts

3. **Enable Compression**
   - Vercel does this automatically
   - Gzip/Brotli compression

4. **Monitor Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

## Google Search Console Setup

After deploying:

1. Visit: https://search.google.com/search-console
2. Add property: helpwestmoreland.org
3. Verify ownership (multiple methods available)
4. Submit sitemap: https://helpwestmoreland.org/sitemap.xml
5. Monitor:
   - Index coverage
   - Search performance
   - Mobile usability
   - Core Web Vitals

## Testing SEO

### 1. Structured Data Test

Visit: https://search.google.com/test/rich-results

Enter your URL and verify structured data is detected.

### 2. Meta Tags Test

Visit: https://metatags.io

Enter your URL to see how it appears on:
- Google Search
- Facebook
- Twitter
- LinkedIn

### 3. Lighthouse Audit

Run in Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Run audit
5. Target scores: All > 90

### 4. Accessibility Test

Tools:
- **WAVE:** https://wave.webaim.org
- **axe DevTools:** Browser extension
- **Keyboard navigation:** Tab through entire site
- **Screen reader:** Test with NVDA (Windows) or VoiceOver (Mac)

## Social Media Optimization

### Create OG Image

Create `/public/images/og-image.jpg`:
- Size: 1200x630px
- Format: JPG or PNG
- Content:
  - Help Westmoreland logo
  - Tagline: "Rebuilding Lives in Jamaica"
  - Hurricane relief visual
  - High contrast, readable text

### Test Social Sharing

1. **Facebook Debugger:**
   https://developers.facebook.com/tools/debug/
   - Enter your URL
   - Check OG image displays
   - Refresh cache if needed

2. **Twitter Card Validator:**
   https://cards-dev.twitter.com/validator
   - Enter your URL
   - Preview Twitter card
   - Verify image and text

3. **LinkedIn Post Inspector:**
   https://www.linkedin.com/post-inspector/
   - Enter your URL
   - Preview LinkedIn share

## Analytics Events to Track

Consider adding custom event tracking:

```typescript
// Example: Track donation button clicks
gtag('event', 'click', {
  event_category: 'engagement',
  event_label: 'donate_button',
  value: 'header'
});

// Track form submissions
gtag('event', 'form_submit', {
  form_name: 'contact'
});

// Track outbound links
gtag('event', 'click', {
  event_category: 'outbound',
  event_label: 'social_media',
  value: 'instagram'
});
```

Add these in relevant components as needed.

## Accessibility Checklist

- ✅ Skip to content link
- ✅ Semantic HTML (header, main, footer, nav)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Alt text for images (add when images are added)
- ✅ Form labels
- ✅ Color contrast (WCAG AA compliant)
- ✅ Responsive design (mobile-friendly)
- ⏳ Screen reader testing (manual)
- ⏳ ARIA live regions for dynamic content (if needed)

## Monitoring & Maintenance

### Monthly Tasks:
- Review Google Analytics reports
- Check Search Console for errors
- Monitor Core Web Vitals
- Review top landing pages
- Check mobile usability

### Quarterly Tasks:
- Full Lighthouse audit
- Accessibility review
- Update structured data if organization changes
- Review and update keywords
- Check broken links

### Annual Tasks:
- Comprehensive SEO audit
- Competitor analysis
- Content refresh
- Meta description updates
- Image optimization review

## Troubleshooting

### Sitemap not showing in Google
- Wait 24-48 hours after submission
- Check robots.txt allows crawling
- Verify sitemap URL is correct
- Resubmit in Search Console

### Analytics not tracking
- Verify GA_ID is correct (starts with G-)
- Check browser console for errors
- Disable ad blockers for testing
- Wait a few hours for data to appear

### Structured data errors
- Use Rich Results Test tool
- Check for syntax errors
- Verify all required properties
- Update organization details

### Low Lighthouse scores
- Compress images
- Remove unused JavaScript
- Enable caching
- Use CDN for static assets
- Minimize render-blocking resources

## Resources

- **Google Search Central:** https://developers.google.com/search
- **Schema.org:** https://schema.org
- **Web.dev:** https://web.dev (Performance guides)
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Next.js SEO:** https://nextjs.org/learn/seo/introduction-to-seo

## Quick Reference

### URLs After Deployment

- Site: https://helpwestmoreland.org
- Sitemap: https://helpwestmoreland.org/sitemap.xml
- Robots: https://helpwestmoreland.org/robots.txt

### Key Files

- Layout: `src/app/layout.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- Structured Data: `src/components/seo/StructuredData.tsx`
- Analytics: `src/components/analytics/GoogleAnalytics.tsx`
- Accessibility: `src/components/accessibility/SkipToContent.tsx`

### Environment Variables

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://helpwestmoreland.org
```

---

**Phase 6 Status:** Complete
**Next:** Phase 7 - Testing, Polish & Launch
