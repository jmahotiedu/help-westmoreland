# Forms Setup Guide for Help Westmoreland

## Overview
This guide explains how to set up form handling for the Contact, Volunteer, and Partner forms on the Help Westmoreland website.

## Form Components

Three form components have been created:
1. **ContactForm** - Contact page inquiries
2. **VolunteerForm** - Volunteer applications
3. **PartnerForm** - Partnership inquiries

All forms include:
- ✅ Client-side validation
- ✅ Error handling
- ✅ Success/error feedback
- ✅ Honeypot anti-spam protection
- ✅ Responsive design
- ✅ Accessibility features

## Form Submission Options

You have two options for handling form submissions:

### Option 1: Formspree (Recommended - Easy Setup)
### Option 2: Custom API Routes (Advanced - More Control)

---

## Option 1: Formspree Setup (Recommended)

Formspree is a free (up to 50 submissions/month) form backend service that requires minimal setup.

### Why Formspree?

- ✅ **No coding required** - Just create forms and get IDs
- ✅ **Free tier available** - 50 submissions/month free
- ✅ **Spam protection** - Built-in reCAPTCHA and honeypot
- ✅ **Email notifications** - Get emailed when forms are submitted
- ✅ **File uploads** - Support for attachments
- ✅ **Export data** - CSV export of submissions

### Pricing
- **Free**: 50 submissions/month
- **Gold**: $10/month - 1,000 submissions
- **Platinum**: $40/month - 10,000 submissions

### Step-by-Step Setup

#### 1. Create a Formspree Account

1. Go to https://formspree.io/register
2. Sign up with email (use: helpwestmoreland@gmail.com)
3. Verify your email address
4. Log in to your dashboard

#### 2. Create Forms

You need to create **3 separate forms** - one for each type:

##### Form 1: Contact Form

1. Click **"+ New Form"**
2. Fill in details:
   - **Name**: Contact Form
   - **Email**: helpwestmoreland@gmail.com (where submissions go)
3. Click **"Create Form"**
4. Copy the **Form ID** (looks like: `xyzabc123`)
5. Save this ID - you'll need it for the environment variable

##### Form 2: Volunteer Form

1. Click **"+ New Form"**
2. Fill in details:
   - **Name**: Volunteer Applications
   - **Email**: helpwestmoreland@gmail.com
3. Click **"Create Form"**
4. Copy the **Form ID**
5. Save this ID

##### Form 3: Partner Form

1. Click **"+ New Form"**
2. Fill in details:
   - **Name**: Partnership Inquiries
   - **Email**: helpwestmoreland@gmail.com
3. Click **"Create Form"**
4. Copy the **Form ID**
5. Save this ID

#### 3. Configure Form Settings

For each form, configure these settings:

1. Go to **Form Settings** → **Notifications**
   - ✅ Enable email notifications
   - Set reply-to: Use submitter's email
   - Customize subject line:
     - Contact: "New Contact Form Submission"
     - Volunteer: "New Volunteer Application"
     - Partner: "New Partnership Inquiry"

2. Go to **Spam Protection**
   - ✅ Enable reCAPTCHA (optional)
   - ✅ Enable honeypot (already included in components)

3. Go to **Redirects** (optional)
   - Leave blank (forms handle success states internally)

4. Go to **Integrations** (optional)
   - Connect to Google Sheets for automatic logging
   - Connect to Slack for real-time notifications
   - Connect to Zapier for advanced workflows

#### 4. Add Form IDs to Environment Variables

1. Create `.env.local` file in project root:
   ```bash
   cd "c:\Users\Jared Mahotiere\Downloads\Relief Site\help-westmoreland"
   touch .env.local
   ```

2. Add your Formspree Form IDs:
   ```env
   NEXT_PUBLIC_FORMSPREE_CONTACT_ID=xyzabc123
   NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID=def456ghi
   NEXT_PUBLIC_FORMSPREE_PARTNER_ID=jkl789mno
   ```

   Replace the IDs with your actual Formspree Form IDs from Step 2.

3. **Important**: Never commit `.env.local` to Git!
   - It's already in `.gitignore`
   - For production (Vercel), add these as environment variables in the dashboard

#### 5. Test Forms Locally

1. Start development server:
   ```bash
   npm run dev
   ```

2. Navigate to each page:
   - http://localhost:3000/contact
   - http://localhost:3000/help#volunteer
   - http://localhost:3000/partner

3. Fill out and submit each form

4. Check your Formspree dashboard to see submissions

5. Check your email (helpwestmoreland@gmail.com) for notifications

#### 6. Deploy to Production

When deploying to Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the three environment variables:
   - `NEXT_PUBLIC_FORMSPREE_CONTACT_ID`
   - `NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID`
   - `NEXT_PUBLIC_FORMSPREE_PARTNER_ID`
4. Redeploy your site

---

## Option 2: Custom API Routes (Advanced)

If you prefer more control or want to avoid third-party services, you can implement custom API routes.

### Prerequisites
- Email service (SendGrid, AWS SES, Postmark, etc.)
- Database (optional, for storing submissions)

### Step 1: Install Email Service SDK

Example with SendGrid:

```bash
npm install @sendgrid/mail
```

### Step 2: Create API Routes

Create three API route files:

#### `src/app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    await sgMail.send({
      to: 'helpwestmoreland@gmail.com',
      from: 'noreply@helpwestmoreland.org', // Must be verified in SendGrid
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

Create similar routes for:
- `src/app/api/volunteer/route.ts`
- `src/app/api/partner/route.ts`

### Step 3: Update Form Components

Update each form component to use custom API routes instead of Formspree.

In `src/components/forms/ContactForm.tsx`, replace the fetch call (around line 88):

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

Repeat for VolunteerForm and PartnerForm.

### Step 4: Environment Variables

Add to `.env.local`:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Step 5: Configure Email Service

1. Create SendGrid account: https://sendgrid.com
2. Verify sender email: helpwestmoreland@gmail.com or use custom domain
3. Create API key with Mail Send permissions
4. Add API key to environment variables

---

## Fallback: Mailto Links

If no form backend is configured, forms will fall back to opening the user's email client with a pre-filled email. This works but provides a poor user experience.

**Current behavior without setup:**
- Forms will construct a `mailto:` link
- User's email client will open with pre-filled message
- User must manually send the email

**Recommendation**: Set up Formspree (Option 1) for the best user experience.

---

## Testing Checklist

Before going live, test each form:

### Contact Form
- ✅ Submit with valid data
- ✅ Try submitting with missing fields (should show errors)
- ✅ Try submitting with invalid email (should show error)
- ✅ Verify email notification arrives
- ✅ Check submission appears in Formspree dashboard
- ✅ Test honeypot (fill hidden field, should succeed but not send)

### Volunteer Form
- ✅ Submit with all required fields
- ✅ Test checkbox validation (availability required)
- ✅ Test minimum character validation on motivation field
- ✅ Verify email notification arrives
- ✅ Check data is properly formatted in email

### Partner Form
- ✅ Submit with valid company information
- ✅ Test multiple checkbox selections
- ✅ Test dropdown selections
- ✅ Verify email notification arrives
- ✅ Check all fields are included in submission

---

## Spam Protection

### Implemented Protections

1. **Honeypot Field**
   - Hidden field that bots fill but humans don't
   - If filled, form succeeds silently without sending
   - Already implemented in all forms

2. **Client-side Validation**
   - Prevents invalid/malicious data
   - Reduces server load from spam

3. **Formspree reCAPTCHA** (Optional)
   - Can be enabled in Formspree dashboard
   - Adds Google reCAPTCHA v2 or v3
   - Helps prevent automated submissions

### Handling Spam

If you start receiving spam:

1. **Enable reCAPTCHA in Formspree**
   - Go to Form Settings → Spam Protection
   - Enable reCAPTCHA
   - Choose v2 (checkbox) or v3 (invisible)

2. **Block Email Domains**
   - Formspree Pro allows blocking specific domains
   - Add common spam domains to blocklist

3. **Add More Validation**
   - Implement rate limiting
   - Add more specific field validation
   - Require phone number verification

---

## Monitoring & Analytics

### Formspree Analytics

View in dashboard:
- Submission count
- Success/failure rates
- Spam blocked
- Response times

### Custom Analytics

Add to Google Analytics:

```typescript
// After successful submission in each form:
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'form_submit', {
    form_name: 'contact' // or 'volunteer' or 'partner'
  });
}
```

---

## Troubleshooting

### "Form not found" error
- **Cause**: Form ID is incorrect or not set
- **Fix**: Double-check Form ID in `.env.local` matches Formspree dashboard

### Emails not arriving
- **Cause**: Notification email not configured or in spam
- **Fix**:
  - Check Formspree notification settings
  - Check spam folder in helpwestmoreland@gmail.com
  - Verify email address is correct

### CORS errors in development
- **Cause**: Formspree blocks localhost by default
- **Fix**: Test on deployed site, or enable localhost in Formspree settings

### Forms submitting but no data visible
- **Cause**: JavaScript disabled or error in form
- **Fix**:
  - Check browser console for errors
  - Ensure all form fields have proper `name` attributes
  - Test with JavaScript enabled

### Environment variables not working
- **Cause**: Variables not loaded or wrong prefix
- **Fix**:
  - Restart dev server after adding `.env.local`
  - Ensure variables start with `NEXT_PUBLIC_` for client-side access
  - Check for typos in variable names

---

## Security Best Practices

1. **Never expose API keys in client code**
   - Use `NEXT_PUBLIC_` prefix only for Formspree Form IDs (safe to expose)
   - Keep SendGrid/other API keys server-side only

2. **Validate all input**
   - Client-side validation is convenience
   - Always validate on server/backend (Formspree does this)

3. **Rate limiting**
   - Implement if using custom API routes
   - Formspree has built-in rate limiting

4. **HTTPS only**
   - Ensure site uses HTTPS in production
   - Vercel provides this automatically

5. **Sanitize output**
   - When displaying form data, sanitize HTML
   - Prevent XSS attacks

---

## Costs & Scalability

### Formspree Free Tier
- 50 submissions/month free
- Good for initial launch
- If you exceed, forms will stop working until next month or upgrade

### When to Upgrade

Consider upgrading Formspree Gold ($10/month) if:
- You exceed 50 submissions/month
- You need Ajax submission (included in components)
- You want file uploads
- You need more spam protection

### When to Use Custom API Routes

Consider custom implementation if:
- Receiving 1,000+ submissions/month ($40/month on Formspree)
- Need complex workflows (approval processes, etc.)
- Want to store submissions in your own database
- Need advanced integrations

---

## Backup Form Data

### Formspree

Formspree stores submissions for 30 days (free) or unlimited (paid).

**Export data regularly:**
1. Go to Form dashboard
2. Click "Export" button
3. Download CSV of all submissions
4. Store securely

### Custom API Routes

If using custom routes, implement database storage:
- PostgreSQL (Supabase, Vercel Postgres)
- MongoDB (MongoDB Atlas)
- Firebase Firestore

---

## Next Steps After Setup

1. **Test all three forms** thoroughly
2. **Set up email filters** in Gmail to organize form submissions
3. **Create response templates** for common inquiries
4. **Set up auto-responses** (optional):
   - Thank you for contacting us
   - We'll respond within 24-48 hours
5. **Monitor submission volume** and upgrade plan if needed
6. **Integrate with CRM** (optional):
   - Connect Formspree to Google Sheets
   - Use Zapier to send to CRM
   - Auto-create volunteer/partner records

---

## Support Resources

### Formspree
- **Documentation**: https://help.formspree.io
- **Support Email**: help@formspree.io
- **Status Page**: https://status.formspree.io

### Help Westmoreland
- **Email**: helpwestmoreland@gmail.com
- **Forms Code**: See components in `src/components/forms/`

---

## Quick Reference

### Environment Variables Needed

```env
# Formspree Form IDs (Option 1)
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID=your_volunteer_form_id
NEXT_PUBLIC_FORMSPREE_PARTNER_ID=your_partner_form_id

# OR for Custom API Routes (Option 2)
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Form Component Locations

- Contact: `src/components/forms/ContactForm.tsx`
- Volunteer: `src/components/forms/VolunteerForm.tsx`
- Partner: `src/components/forms/PartnerForm.tsx`

### Page Locations

- Contact page: `src/app/contact/page.tsx`
- Volunteer section: `src/app/help/page.tsx` (id="volunteer")
- Partner page: `src/app/partner/page.tsx`

---

**Last Updated**: Phase 5 - Forms & Interactivity
**Status**: Ready for setup - awaiting Formspree account creation
