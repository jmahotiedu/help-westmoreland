# Client Questions — Help Westmoreland

Use this list when talking to the person who requested the website. Answers will replace placeholders and inferred data so the site is ready to go live.

---

## Recent updates (already in place)

- **Copy & style:** Em dashes replaced with commas sitewide; Jamaican-inspired palette (greens, golds, deep black, earth tones); hero text is green; homepage “Opening Statement” and “100% of donations go directly to relief” added; volunteer opportunities list, What to Expect, Partner/Transparency/Contact/FAQ wording updated per client request.
- **Contact / urgent:** Site now says “For urgent matters, email us at helpwestmoreland@gmail.com” (no 24–48 hr promise, no “DM us”). Response-time and “Response Times” blocks removed from Contact.
- **Donate:** “Change a Family’s Story Today” quote updated; More Ways to Give includes Basic food supplies, GoFundMe (with fallback URL), and “Send Interac e-Transfer to: helpwestmoreland@gmail.com”; tax/FAQ wording aligned to “contact us for your jurisdiction” and “working toward formal charity registration.”
- **Media:** Hero video and hero poster are in use from **Site Photos** (one MP4 and one JPG from `Site Photos/other/`). If the hero video doesn’t play in some browsers, the file may need re-encoding to H.264; we can swap in a different clip from Site Photos if the client prefers.
- **Volunteer form:** Phone placeholder no longer uses 876; skills/interests list matches the new volunteer opportunities (Counseling, Education, Social media & Digital presence, etc.); parish field not present (only “Your Location”). Partner form success message no longer mentions “2–3 business days.”

---

## 1. Contact & identity

- **Primary email**  
  Site uses `helpwestmoreland@gmail.com` everywhere (footer, contact, donate, forms). Is this the correct address, or should we use a different one?

- **Social media**  
  Currently: Instagram `@helpwestmoreland`, TikTok `@helpwestmoreland`, Facebook `helpwestmoreland`.  
  - Are these the real handles/URLs?  
  - Any other channels (e.g. Twitter/X, YouTube) to add or use instead?

- **Phone / urgent contact**  
  Site currently says “For urgent matters, email us at helpwestmoreland@gmail.com” (no phone, no DM). Should we add a phone number or keep email-only for urgent contact?

- **Legal / organization name**  
  Is “Help Westmoreland” the official name for receipts, partnerships, and legal text, or is there a registered entity name we should use (e.g. “Help Westmoreland Inc.”)?

---

## 2. Domain & live URL

- **Live website address**  
  We assume `https://helpwestmoreland.org`. Confirm the final URL (and whether it’s www or non-www) so metadata, sitemap, and links are correct.

---

## 3. Impact statistics (homepage)

The homepage currently shows:

- **500+** Families Helped  
- **2,000+** People Supported  
- **15,000+** Meals Provided  
- **100+** Homes Rebuilt  
- Plus a line: **“100% of donations go directly to relief.”**

Your Site Specifications suggested alternative stats: “10,000+ families affected”, “100% of donations go directly to relief”, “Dozens of communities still in recovery.”  

- Do you want to keep the current numbers above, or switch to the spec’s numbers (or a mix)?  
- Any other stats to add (e.g. “Communities Served”, “Volunteer Hours”)?

---

## 4. Donations & payments

- **Donorbox**  
  Do you have (or plan to have) a Donorbox campaign? If yes, we need the campaign ID so the donate page can show the embed. If no, the page will keep the “Email Us to Donate” option only.

- **GoFundMe**  
  The site shows a GoFundMe option with URL `https://www.gofundme.com/f/help-westmoreland` (or your env var if set). Confirm this is the correct campaign URL.

- **Interac e-Transfer**  
  The site now says “Send Interac e-Transfer to: helpwestmoreland@gmail.com” with an email link for details. Confirm this is correct or send the exact email/name and any instructions.

- **Tax receipts / tax-deductible**  
  The FAQ now says: “Tax deductibility depends on your country of residence and our registration status. We are working toward formal charity registration. Contact us for specific questions about tax receipts in your jurisdiction.” Confirm this is accurate and whether you issue receipts (and in which countries).

- **“100% to relief”**  
  The site states that 100% of donations go to relief (no salaries, no hidden fees). Confirm that this is accurate so we don’t have to change the wording.

---

## 5. Media assets

- **Hero video**  
  We’re using a video from **Site Photos/other** (`VID-20251106-WA0004.MP4`) as the hero. If it doesn’t play in some browsers, it may need re-encoding to H.264. Do you want to keep this clip, or swap in another from Site Photos (e.g. `good.mov`, `One good shot.mov` — we’d convert to MP4 for best support)?

- **Hero poster image**  
  We’re using a still from **Site Photos/other** as the poster while the video loads. Prefer a different image or size (e.g. 1920×1080)?

- **Logo**  
  Do you have a logo for the header and for social/share images? Format (PNG/SVG) and background (e.g. transparent, white). We use it in the header and in `/public/images/logo.png` for metadata.

- **Open Graph image**  
  Image used when the site is shared on social (Facebook, Twitter, etc.). Preferred size 1200×630 px. Do you have one, or should we use the logo + tagline on a simple background?

- **Other photos / gallery**  
  Site Photos has more videos and images (e.g. in `other/`, `iffy/`). Any you want on About, Mission, Programs, or a “Before & After” / impact gallery? List which page and what the asset shows.

---

## 6. Forms (contact, volunteer, partner)

- **Where should submissions go?**  
  Right now, if Formspree isn’t set up, forms fall back to opening a mailto link. Do you want:  
  - Formspree (or similar) so submissions go to email and you get a dashboard?  
  - Or another service?  
  If you want forms to submit to a service, we need the form IDs or setup details.

- **Who receives submissions?**  
  Same email for all three (contact, volunteer, partner) or different addresses per form?

- **Auto-reply**  
  Do you want an automatic “We received your message” email? If yes, what short message and from which address?

---

## 7. Content to verify

- **Hurricane name**  
  Site says “Hurricane Melissa.” Confirm the correct name and year if different.

- **Location**  
  We use “Westmoreland, Jamaica” and “Based in Westmoreland, Jamaica” on Contact. Confirm spelling and preferred wording.

- **Drop-off / in-kind donations**  
  The “How to Help” page still needs real drop-off locations for goods. Please send:  
  - Physical addresses and any instructions (hours, what to bring).  
  - Any other ways to donate goods (e.g. “Contact us to arrange pickup”).

- **FAQ**  
  Tax-deductible answer is updated per your request (jurisdiction, registration in progress). Still to confirm:  
  - “How do I know this is real?” — any specific proof or links (e.g. social, press, partners) to mention?  
  - “Where do donations go?” — confirm it matches the Transparency page and the “100%” claim.

---

## 8. Legal & compliance

- **Privacy policy**  
  Do you have a privacy policy (e.g. for form data, cookies)? If yes, send the URL or text so we can link to it (e.g. in the footer).

- **Cookie or consent notice**  
  Do you want a cookie banner or consent notice (e.g. for analytics)? If yes, do you have wording or a template?

- **Donation disclaimers**  
  Any required disclaimer for donations (e.g. “Donations are not tax-deductible in [country]” or “No refunds”)?

---

## 9. Analytics & tracking

- **Google Analytics**  
  Do you want GA4 on the site? If yes, we need the Measurement ID (e.g. `G-XXXXXXXXXX`). If no, we won’t add any tracking.

- **Other tracking**  
  Any other tools (e.g. Meta Pixel, email signup) you want integrated? If yes, what and for what purpose?

---

## 10. Ongoing updates

- **Who updates the site?**  
  Will you (or someone on your team) update impact stats, stories, or news? If yes, we can note which parts of the site to update and how often.

- **Emergency / crisis updates**  
  Is there a plan for posting urgent updates (e.g. after another storm)? Who decides what goes on the site and where (e.g. a short banner, a dedicated page)?

---

## Quick checklist for you

Before going live, we need at least:

- [ ] Confirm contact email and social links  
- [ ] Confirm or correct impact stats (current: 500+ families, 2000+ people, etc.; spec suggested 10,000+ / dozens of communities)  
- [ ] Confirm live URL (e.g. helpwestmoreland.org)  
- [ ] Donation setup: Donorbox ID and/or confirm GoFundMe URL and Interac wording  
- [ ] Tax / receipt status so FAQ and “100%” are accurate  
- [ ] Logo and OG image (or confirm we use placeholders)  
- [ ] Drop-off locations for “How to Help” (or remove that section)  
- [ ] Privacy policy link if required  

**Already in place:** Urgent contact = email; volunteer/partner copy and form wording; donate copy and tax FAQ; hero video and poster from Site Photos; Jamaican palette and hero green text; opening statement and 100% relief line.

Everything else can be added or refined after launch if needed.
