# Donorbox Setup Guide for Help Westmoreland

## Overview
This guide will help you set up Donorbox as the donation platform for Help Westmoreland. Donorbox is recommended because it works in Jamaica and integrates with PayPal, which is essential for Caribbean operations.

## Why Donorbox?

### ✅ Jamaica-Compatible
- **Works in Jamaica**: Unlike Stripe or Square, Donorbox operates in Jamaica through PayPal integration
- **PayPal Support**: Accepts PayPal payments, which work globally including in the Caribbean
- **Multi-Currency**: Handles USD, JMD, and other currencies

### ✅ Charity-Focused Features
- **Recurring Donations**: Built-in monthly giving options
- **Mobile Optimized**: 65-70% of charity donations happen on mobile
- **No Setup Fees**: Free to start, only pay 1.5% platform fee + payment processing
- **Tax Receipts**: Automatic tax receipt generation
- **Donor Management**: Built-in CRM for managing donor relationships

### ✅ Cost Structure
- **Platform Fee**: 1.5% per transaction (can be covered by donors)
- **Payment Processing**: 2.9% + $0.30 for credit cards (standard Stripe rates)
- **PayPal**: 2.89% + fixed fee based on currency
- **Total Cost**: ~4.4% per transaction (competitive for charity platforms)

## Step 1: Create Donorbox Account

1. Visit https://donorbox.org/nonprofit-signup
2. Click "Start Free" or "Sign Up"
3. Fill in organization details:
   - **Organization Name**: Help Westmoreland
   - **Email**: helpwestmoreland@gmail.com
   - **Country**: Jamaica
   - **Organization Type**: Nonprofit/Charity
   - **Tax ID**: (Your organization's registration number)

4. Verify your email address

## Step 2: Complete Organization Profile

1. Log in to your Donorbox dashboard
2. Navigate to **Settings** → **Organization**
3. Complete the following:
   - **Organization Name**: Help Westmoreland
   - **Website**: https://helpwestmoreland.org
   - **Mission Statement**: Copy from your About page
   - **Logo**: Upload Help Westmoreland logo
   - **Contact Information**:
     - Email: helpwestmoreland@gmail.com
     - Social media links (Instagram, Facebook, TikTok)
   - **Tax Information**: Add tax-exempt status details

4. Save changes

## Step 3: Set Up Payment Processing

### Option A: PayPal (Recommended for Jamaica)

1. In Donorbox dashboard, go to **Settings** → **Payment Processing**
2. Click "Connect PayPal"
3. You'll need a **PayPal Business Account**:
   - If you don't have one, create at: https://www.paypal.com/bizsignup
   - Use helpwestmoreland@gmail.com as the account email
   - Complete PayPal's verification process
4. Authorize Donorbox to connect to your PayPal account
5. Set PayPal as your primary payment processor

### Option B: Stripe (If Available in Your Region)

1. Go to **Settings** → **Payment Processing**
2. Click "Connect Stripe"
3. Complete Stripe onboarding
4. Note: Stripe may not work in Jamaica - verify availability first

**Recommendation**: Use PayPal as primary, add Stripe if/when available for maximum donor flexibility.

## Step 4: Create Your First Campaign

1. Go to **Campaigns** → **Create New Campaign**
2. Fill in campaign details:

   **Basic Information:**
   - **Campaign Name**: "Hurricane Melissa Relief Fund"
   - **Campaign Goal**: $50,000 (or your target)
   - **Campaign URL**: helpwestmoreland (creates: donorbox.org/helpwestmoreland)
   - **Description**:
     ```
     Help families in Westmoreland, Jamaica rebuild after Hurricane Melissa.
     Your donation provides food, shelter, medical supplies, and long-term
     recovery support to families who have lost everything.
     ```

   **Donation Settings:**
   - **Default Amount**: $100
   - **Suggested Amounts**: $25, $50, $100, $250, $500, $1000
   - **Minimum Donation**: $5
   - **Currency**: USD (primary), JMD (optional)
   - **Allow Recurring**: ✅ Yes
   - **Default Frequency**: One-time (let donors choose)

   **Form Customization:**
   - **Primary Color**: #0ea5e9 (your primary-500 color)
   - **Accent Color**: #f59e0b (your accent-500 color)
   - **Thank You Message**:
     ```
     Thank you for standing with Westmoreland! Your donation will directly
     help families rebuild their lives after Hurricane Melissa. You'll receive
     a tax receipt via email within 24 hours.
     ```

   **Additional Options:**
   - ✅ Enable donor comments
   - ✅ Enable anonymous donations
   - ✅ Enable tribute donations (in honor/memory of)
   - ✅ Show campaign goal progress
   - ✅ Allow donors to cover fees

3. Click **Create Campaign**

## Step 5: Customize Donation Form

1. Go to your campaign → **Form Design**
2. Customize the embedded form:
   - Upload your logo
   - Add a compelling hero image (from your Site Photos)
   - Enable fields:
     - ✅ Name (required)
     - ✅ Email (required)
     - ⬜ Phone (optional)
     - ✅ Address (for tax receipts)
     - ✅ Employer (for matching gifts)

3. Set up custom fields (optional):
   - "Adopt-A-Family" checkbox
   - "Send me updates" newsletter signup
   - "I'd like to volunteer" interest indicator

4. Preview and save

## Step 6: Get Your Campaign ID

1. In your campaign dashboard, look for the **Embed Code** section
2. You'll see a URL like: `https://donorbox.org/embed/YOUR-CAMPAIGN-ID`
3. Copy the campaign ID (the part after `/embed/`)
4. Example: If URL is `donorbox.org/embed/helpwestmoreland`, your ID is `helpwestmoreland`

## Step 7: Add Campaign ID to Your Website

### Method 1: Environment Variable (Recommended)

1. Create a `.env.local` file in your project root (if it doesn't exist):
   ```bash
   cd "c:\Users\Jared Mahotiere\Downloads\Relief Site\help-westmoreland"
   touch .env.local
   ```

2. Add your campaign ID:
   ```
   NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID=helpwestmoreland
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### Method 2: Direct Component Update

If you prefer not to use environment variables, you can edit the donate page directly:

1. Open: `src/app/donate/page.tsx`
2. Find line 15: `const donorboxCampaignId = process.env.NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID;`
3. Replace with: `const donorboxCampaignId = "helpwestmoreland";`

## Step 8: Test Your Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: http://localhost:3000/donate

3. You should now see the Donorbox donation form embedded on your page

4. Test the form (use Donorbox test mode):
   - In Donorbox dashboard, enable **Test Mode**
   - Make a test donation with test credit card:
     - Card: 4242 4242 4242 4242
     - Expiry: Any future date
     - CVC: Any 3 digits
   - Verify donation appears in your Donorbox dashboard
   - Verify you receive test email receipt

5. When ready, disable Test Mode to accept real donations

## Step 9: Set Up Tax Receipts

1. Go to **Settings** → **Email Receipts**
2. Customize receipt template:
   - Add your logo
   - Include tax-exempt number
   - Add custom message thanking donors
   - Include social media links

3. Set up automatic receipt sending:
   - ✅ Send immediately after donation
   - ✅ Include donation breakdown
   - ✅ Provide PDF attachment

## Step 10: Configure Recurring Donation Settings

1. Go to **Settings** → **Recurring Donations**
2. Configure:
   - **Frequency Options**: Monthly, Quarterly, Annually
   - **Default**: Monthly
   - **Update Reminders**: Send before renewal
   - **Failed Payment Retries**: 3 attempts over 7 days
   - **Cancellation**: Allow self-service cancellation

## Step 11: Set Up Donor Management

1. Go to **Donors** tab
2. Configure donor portal:
   - ✅ Enable donor accounts
   - ✅ Allow donors to update payment methods
   - ✅ Allow donors to manage recurring donations
   - ✅ Show donation history

2. Set up segments for:
   - One-time donors
   - Monthly donors
   - High-value donors ($500+)
   - Adopt-A-Family sponsors

## Step 12: Enable Advanced Features

### Matching Gifts
1. Go to **Settings** → **Matching Gifts**
2. Enable matching gift detection
3. This helps donors identify if their employer matches donations

### Donor Cover Fees
1. Go to **Settings** → **Donor Covers Fees**
2. ✅ Enable "Cover processing fees" option
3. This allows donors to cover the 4.4% fee, ensuring 100% goes to relief

### Social Proof
1. Enable **Recent Donations** widget
2. Shows real-time donation activity
3. Increases conversion by 15-20%

### Fundraising Thermometer
1. Enable **Goal Progress Bar**
2. Shows how close you are to campaign goal
3. Creates urgency and motivates donors

## Step 13: Set Up Analytics

1. Go to **Settings** → **Integrations**
2. Connect Google Analytics:
   - Add your GA4 tracking ID
   - Enable e-commerce tracking
   - Track donation conversion events

3. Set up Facebook Pixel (optional):
   - Add Facebook Pixel ID
   - Track donations for ad optimization

## Step 14: Launch Checklist

Before going live, verify:

- ✅ PayPal account connected and verified
- ✅ Test donation successful
- ✅ Tax receipts sending correctly
- ✅ Campaign ID added to website
- ✅ Donation form displays correctly on mobile
- ✅ Thank you message is personalized
- ✅ Email notifications working
- ✅ Donor portal accessible
- ✅ Recurring donations configured
- ✅ Test Mode disabled
- ✅ SSL certificate active on your domain

## Ongoing Management

### Daily Tasks
- Check new donations
- Respond to donor messages
- Monitor failed payment retries

### Weekly Tasks
- Review donation analytics
- Segment donors for follow-up
- Update campaign progress

### Monthly Tasks
- Send donor updates/newsletters
- Review and optimize donation amounts
- Analyze conversion rates
- Generate financial reports

## Troubleshooting

### "Campaign ID not found"
- Verify campaign ID is correct
- Check spelling and capitalization
- Ensure campaign is published (not draft)

### "Payment failed"
- Verify PayPal account is active
- Check for account limits or holds
- Ensure donor's payment method is valid

### Form not displaying
- Check browser console for errors
- Verify Donorbox script is loading
- Clear browser cache
- Try different browser

### Donations not tracking in Analytics
- Verify Google Analytics ID is correct
- Check that e-commerce tracking is enabled
- May take 24-48 hours for data to appear

## Support Resources

- **Donorbox Help Center**: https://donorbox.org/nonprofit-blog/help
- **Live Chat**: Available in Donorbox dashboard
- **Email Support**: support@donorbox.org
- **Phone Support**: Available for campaigns raising $10k+/year

## Security Best Practices

1. **Enable 2FA**: Add two-factor authentication to your Donorbox account
2. **Limit Access**: Only give admin access to trusted team members
3. **Review Permissions**: Regularly audit who has access
4. **Secure Email**: Use strong passwords for helpwestmoreland@gmail.com
5. **Monitor Activity**: Check dashboard regularly for unusual activity

## Compliance & Legal

- **PCI Compliance**: Donorbox is PCI Level 1 compliant
- **GDPR**: If accepting European donors, review GDPR settings
- **Privacy Policy**: Add link to your privacy policy in form
- **Terms of Service**: Include terms for refund policy
- **Transparency**: Regularly publish how donations are used

## Next Steps After Setup

1. **Promote Your Donation Page**:
   - Share on social media
   - Email to mailing list
   - Add to email signatures
   - Create QR code for print materials

2. **Set Up Social Media Integration**:
   - Add "Donate" button to Facebook page
   - Use Instagram link in bio
   - Pin donation link on TikTok profile

3. **Create Donation Campaigns**:
   - Holiday giving campaigns
   - Matching gift challenges
   - Giving Tuesday participation
   - Specific project fundraisers

4. **Optimize Conversion**:
   - A/B test donation amounts
   - Test different hero images
   - Experiment with urgency messaging
   - Add video testimonials

## Cost Estimate (Year 1)

Assuming $50,000 in donations:

- **Donorbox Fee** (1.5%): $750
- **Payment Processing** (2.9% + $0.30): ~$1,470
- **Total Fees**: ~$2,220 (4.4%)
- **Net to Relief**: $47,780 (95.6%)

**Note**: If donors cover fees, 100% goes to relief efforts.

## Alternative: Stripe + PayPal Direct Integration

If you prefer to avoid Donorbox's 1.5% fee and have technical resources:

1. Set up Stripe account (if available in Jamaica)
2. Set up PayPal Business account
3. Build custom donation form with both integrations
4. Use Next.js API routes for server-side processing
5. Implement your own receipt generation

**Pros**: Lower fees (~2.9% instead of 4.4%)
**Cons**: Requires development time, maintenance, PCI compliance responsibilities

**Recommendation**: Start with Donorbox for ease of setup. Once you're processing $100k+/year, consider custom integration to save on fees.

## Questions?

If you need help with Donorbox setup, contact:
- **Email**: helpwestmoreland@gmail.com
- **Developer Notes**: See inline comments in `src/components/donate/DonorboxEmbed.tsx`
