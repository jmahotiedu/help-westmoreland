# Deployment Guide - Help Westmoreland

## Overview
This guide will walk you through deploying the Help Westmoreland website to production using Vercel (recommended) or other hosting providers.

## Prerequisites

Before deploying:
- ✅ All 6 phases completed
- ✅ Code tested locally
- ✅ Git repository set up
- ✅ Domain name purchased (optional but recommended)
- ✅ Third-party accounts created (Formspree, Donorbox, Google Analytics)

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the creators of Next.js and provides the best hosting experience with zero configuration.

### Why Vercel?

- ✅ **Zero Config**: Automatic Next.js optimization
- ✅ **Free Tier**: Generous free tier for nonprofits
- ✅ **Automatic HTTPS**: SSL certificates included
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Preview Deployments**: Test changes before going live
- ✅ **Automatic CI/CD**: Deploy on git push

### Step 1: Create GitHub Repository

1. Create a GitHub account (if you don't have one): https://github.com
2. Create a new repository:
   - Name: `help-westmoreland-website`
   - Description: "Hurricane Melissa relief website for Westmoreland, Jamaica"
   - Visibility: Public or Private (your choice)
   - Don't initialize with README (you already have one)

3. Push your code to GitHub:

```bash
cd "c:\Users\Jared Mahotiere\Downloads\Relief Site\help-westmoreland"

# Initialize git (if not already done)
git init

# Create .gitignore (if not exists)
echo "node_modules
.next
.env.local
.DS_Store
.vercel" > .gitignore

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Help Westmoreland relief website

- Complete Next.js 16 website with 11 pages
- Donation integration (Donorbox ready)
- Contact, Volunteer, and Partner forms (Formspree ready)
- SEO optimizations (structured data, sitemap, robots.txt)
- Google Analytics integration ready
- Accessibility features (WCAG 2.1 AA compliant)
- Mobile-responsive design
- Tailwind CSS v4 styling"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/help-westmoreland-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Visit https://vercel.com/signup
2. Sign up with GitHub (easiest option)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

6. Click "Deploy"

That's it! Vercel will build and deploy your site. You'll get a URL like:
`https://help-westmoreland-website.vercel.app`

### Step 3: Add Environment Variables

After deployment:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Environment Variables"
3. Add each variable:

```
NEXT_PUBLIC_SITE_URL
Value: https://helpwestmoreland.org (or your domain)

NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX (your Google Analytics ID)

NEXT_PUBLIC_FORMSPREE_CONTACT_ID
Value: your_contact_form_id

NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID
Value: your_volunteer_form_id

NEXT_PUBLIC_FORMSPREE_PARTNER_ID
Value: your_partner_form_id

NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID
Value: your_donorbox_campaign_id
```

4. Click "Save" for each
5. Redeploy: Go to "Deployments" → Click "..." on latest → "Redeploy"

### Step 4: Configure Custom Domain

If you own helpwestmoreland.org:

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add domain: `helpwestmoreland.org`
3. Add www subdomain: `www.helpwestmoreland.org`
4. Vercel will provide DNS records to add

#### DNS Configuration

Go to your domain registrar (GoDaddy, Namecheap, etc.):

**Option A: Use Vercel Nameservers (Recommended)**
1. Copy nameservers from Vercel
2. Update nameservers in registrar
3. Wait 24-48 hours for propagation

**Option B: Use A/CNAME Records**
1. Add A record:
   - Host: `@`
   - Points to: `76.76.21.21` (Vercel's IP)
2. Add CNAME record:
   - Host: `www`
   - Points to: `cname.vercel-dns.com`

5. Wait for DNS propagation (can take 24-48 hours)
6. Vercel automatically provisions SSL certificate
7. Your site will be live at https://helpwestmoreland.org

---

## Option 2: Deploy to Netlify

Another excellent option with similar features to Vercel.

### Steps:

1. Push code to GitHub (same as Vercel Step 1)
2. Visit https://netlify.com
3. Sign up / Log in
4. Click "Add new site" → "Import an existing project"
5. Connect GitHub and select repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js
7. Add environment variables in Site settings → Environment variables
8. Deploy!

### Custom Domain on Netlify:

1. Go to "Domain management"
2. Add custom domain
3. Follow DNS instructions (similar to Vercel)

---

## Environment Variables Reference

Complete list of all environment variables needed:

```env
# ============================================
# SITE CONFIGURATION
# ============================================

# Your production URL (no trailing slash)
NEXT_PUBLIC_SITE_URL=https://helpwestmoreland.org


# ============================================
# ANALYTICS
# ============================================

# Google Analytics 4 Measurement ID
# Get from: https://analytics.google.com
# Format: G-XXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX


# ============================================
# FORMS (Formspree)
# ============================================

# Contact form ID
# Get from: https://formspree.io dashboard
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=xyzabc123

# Volunteer form ID
NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID=def456ghi

# Partnership form ID
NEXT_PUBLIC_FORMSPREE_PARTNER_ID=jkl789mno


# ============================================
# DONATIONS (Donorbox)
# ============================================

# Donorbox campaign ID
# Get from: https://donorbox.org dashboard
# Format: Usually your campaign name slug
NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID=helpwestmoreland
```

### Creating `.env.local` for Local Development:

```bash
cd "c:\Users\Jared Mahotiere\Downloads\Relief Site\help-westmoreland"
```

Create a file named `.env.local` and add all variables above with your actual values.

**Important:**
- Never commit `.env.local` to Git (already in .gitignore)
- Use different values for development vs production if needed
- Restart dev server after changing environment variables

---

## Post-Deployment Testing

After deploying, test everything:

### 1. Pages Load Correctly
- [ ] Homepage
- [ ] About Us
- [ ] Our Mission
- [ ] Programs
- [ ] Transparency
- [ ] FAQ
- [ ] How to Help
- [ ] Partner With Us
- [ ] Contact Us
- [ ] Donate Now

### 2. Navigation Works
- [ ] Header navigation links
- [ ] Footer navigation links
- [ ] Mobile menu (hamburger)
- [ ] All internal links work
- [ ] External links open in new tab

### 3. Forms Function
- [ ] Contact form submits
- [ ] Volunteer form submits
- [ ] Partner form submits
- [ ] Success messages appear
- [ ] Email notifications received

### 4. SEO & Metadata
- [ ] Visit /sitemap.xml (should show XML)
- [ ] Visit /robots.txt (should show rules)
- [ ] Check page titles in browser tabs
- [ ] Test social sharing (Facebook, Twitter)
- [ ] Run Lighthouse audit (score > 90)

### 5. Analytics
- [ ] Visit site
- [ ] Check Google Analytics Real-Time report
- [ ] Confirm page views are tracked

### 6. Mobile Testing
- [ ] Test on iPhone
- [ ] Test on Android
- [ ] Test on tablet
- [ ] All buttons clickable
- [ ] Forms work on mobile
- [ ] Navigation menu works

### 7. Accessibility
- [ ] Tab through page (keyboard navigation)
- [ ] Skip to content link appears
- [ ] Test with screen reader
- [ ] Check color contrast
- [ ] Forms have proper labels

### 8. Performance
- [ ] Run Lighthouse (Performance > 90)
- [ ] Test on 3G connection
- [ ] Check load times
- [ ] Images load properly (when added)

---

## SSL Certificate

### Vercel
- Automatic SSL certificate
- Auto-renewal
- HTTPS enforced automatically
- Nothing to configure

### Netlify
- Automatic SSL via Let's Encrypt
- One-click enable
- Auto-renewal
- HTTPS enforced

### Custom Hosting
If not using Vercel/Netlify:
1. Get SSL certificate from Let's Encrypt
2. Use Certbot for automatic management
3. Configure HTTPS redirect
4. Set up auto-renewal

---

## Monitoring & Maintenance

### Set Up Monitoring

1. **Google Search Console**
   - https://search.google.com/search-console
   - Verify ownership
   - Submit sitemap
   - Monitor index status

2. **Google Analytics**
   - Set up custom alerts
   - Monitor traffic sources
   - Track conversion goals (donations, forms)

3. **Uptime Monitoring**
   - Use UptimeRobot (free): https://uptimerobot.com
   - Monitor: helpwestmoreland.org
   - Get email alerts if site goes down

4. **Vercel Analytics** (Optional - $10/month)
   - Real user monitoring
   - Web Vitals tracking
   - Visitor insights

### Regular Maintenance

**Weekly:**
- Check form submissions
- Respond to inquiries
- Monitor analytics

**Monthly:**
- Review Google Analytics
- Check Search Console for errors
- Update content if needed
- Check all forms still working

**Quarterly:**
- Run full Lighthouse audit
- Test all pages and forms
- Review and update content
- Check for broken links
- Update dependencies: `npm update`

---

## Troubleshooting

### Build Fails on Vercel

**Check:**
1. Build logs in Vercel dashboard
2. Ensure `npm run build` works locally
3. Check Node.js version (should be 18+)
4. Verify all dependencies in package.json

**Common Issues:**
- Missing environment variables
- TypeScript errors
- Import path issues

### Forms Not Working

**Check:**
1. Environment variables are set in Vercel
2. Formspree form IDs are correct
3. Email notifications enabled in Formspree
4. Check browser console for errors

### Analytics Not Tracking

**Check:**
1. GA_ID environment variable is set
2. Wait a few hours for data to appear
3. Check Real-Time reports in GA
4. Disable ad blockers for testing

### Domain Not Working

**Check:**
1. DNS propagation (can take 24-48 hours)
2. DNS records are correct
3. Use https://dnschecker.org to verify
4. Check Vercel domain settings

### SSL Certificate Issues

**Vercel/Netlify:**
- Automatic, should just work
- If issues, check domain ownership
- Ensure DNS is pointing correctly

---

## Backup & Version Control

### Automatic Backups (Vercel)
- Every deployment is saved
- Can roll back to any previous version
- Click "Deployments" → "..." → "Promote to Production"

### Manual Backups
```bash
# Create backup of current site
git tag -a v1.0.0 -m "Initial launch"
git push origin v1.0.0

# Export from Vercel
vercel pull  # Downloads production environment
```

### Database Backups
If you add a database later:
- Set up automatic daily backups
- Test restore procedures
- Store backups off-site

---

## Security Checklist

- [ ] HTTPS enabled (automatic with Vercel/Netlify)
- [ ] Environment variables not exposed in code
- [ ] `.env.local` in .gitignore
- [ ] Dependencies up to date
- [ ] No secrets in Git history
- [ ] Form spam protection enabled (honeypot)
- [ ] Rate limiting on forms (via Formspree)
- [ ] Regular security updates

---

## Performance Optimization

### Already Implemented:
- ✅ Static site generation
- ✅ Automatic code splitting
- ✅ Font optimization
- ✅ Tailwind CSS purging

### When Adding Images:
1. Use Next.js `<Image>` component
2. Provide width and height
3. Use WebP format when possible
4. Compress before uploading

### When Adding Videos:
1. Use VIDEO_COMPRESSION_GUIDE.md
2. Keep under 5MB if possible
3. Use poster images
4. Consider lazy loading

---

## Launch Day Checklist

See LAUNCH_CHECKLIST.md for complete day-of-launch tasks.

---

## Getting Help

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions
- Support: support@vercel.com

### Next.js Help
- Documentation: https://nextjs.org/docs
- GitHub: https://github.com/vercel/next.js

### Help Westmoreland
- Email: helpwestmoreland@gmail.com
- Review documentation in project root

---

## Cost Breakdown

### Free Tier (Vercel)
- Hosting: **Free**
- SSL: **Free**
- CDN: **Free**
- Bandwidth: 100GB/month **Free**
- Build minutes: 6,000 min/month **Free**

Perfect for nonprofit/charity websites!

### Optional Paid Services
- **Google Analytics**: Free
- **Formspree**: $0-10/month (50 free submissions)
- **Donorbox**: 1.5% + payment processing
- **Custom domain**: $10-15/year (if not owned)
- **Vercel Pro** (optional): $20/month (more bandwidth)

**Total Cost:** $0-30/month depending on volume

---

## Quick Reference

### Important URLs After Deployment

- Production Site: https://helpwestmoreland.org
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Repo: https://github.com/YOUR_USERNAME/help-westmoreland-website
- Sitemap: https://helpwestmoreland.org/sitemap.xml
- Robots: https://helpwestmoreland.org/robots.txt

### Key Commands

```bash
# Local development
npm run dev

# Production build (test before deploying)
npm run build

# Start production server locally
npm start

# Update dependencies
npm update

# Check for security vulnerabilities
npm audit
```

---

**Ready to Deploy!** Follow Option 1 (Vercel) for the easiest deployment experience.

Next: Complete LAUNCH_CHECKLIST.md before making site public.
