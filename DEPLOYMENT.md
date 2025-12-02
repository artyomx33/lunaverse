# Luna-Verse OS - Deployment Guide

## Vercel Deployment

The Luna-Verse OS landing page is automatically deployed to Vercel when you push to GitHub.

### Current Status
- **Repository**: https://github.com/artyomx33/lunaverse
- **Deployment**: Automatic (GitHub → Vercel)
- **Build**: Next.js 16 + Turbopack (zero errors)

### Configuration Required

Before the site goes live, add these environment variables to Vercel:

```bash
NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_form_id
NEXT_PUBLIC_CONVERTKIT_API_KEY=your_api_key
NEXT_PUBLIC_CONTACT_EMAIL=contact@lunaverse.com
```

**Steps:**
1. Go to https://vercel.com/dashboard
2. Select "lunaverse" project
3. Settings → Environment Variables
4. Add the variables above
5. Redeploy (git push any change, or redeploy from dashboard)

### Features Deployed

✓ 11 Production-ready components
✓ Luna's black/gold design system
✓ Responsive mobile design
✓ Email capture form (ConvertKit-ready)
✓ FAQ accordion section
✓ Pricing tier comparison
✓ 3-day breakdown timeline
✓ Identity transformation messaging

### Testing the Site

Once deployed:
1. Visit your Vercel URL (check dashboard for domain)
2. Test form submission (without ConvertKit keys, will show error)
3. Check mobile responsiveness
4. Verify all sections load correctly

### Next Steps

1. **Email Sequences** (Phase 6)
   - Create 6-email nurture sequence in ConvertKit
   - Email 1: Welcome + first lesson
   - Email 2: AI weaponization framework
   - Email 3: Identity resurrection (core narrative)
   - Email 4: Social proof + testimonials
   - Email 5: Scarcity + urgency
   - Email 6: Final CTA + payment options

2. **Custom Domain** (Optional)
   - Go to Vercel project settings
   - Add custom domain
   - Update DNS records

3. **Marketing Outreach** (Phase 8)
   - DM scripts (LinkedIn, Twitter)
   - Email blast to cold list
   - Social media teasers
   - Referral program setup

