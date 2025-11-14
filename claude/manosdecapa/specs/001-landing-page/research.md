# Research & Technical Decisions: Manos Decapa Landing Page

**Phase 0 Output** | **Date**: 2025-11-14 | **Status**: Complete

This document resolves technical decisions required for the implementation plan.

## Decision 1: Form Backend (Contact Lead Management)

**Context**: Contact form (FR-009) must capture customer inquiries and deliver them reliably (SC-008: 99.9% uptime). Decision impacts architecture: serverless function, email service, or CRM integration.

### Decision: Email Service + Serverless Function (Recommended)

**Chosen Solution**: Use Vercel Functions or AWS Lambda to handle form submission, send confirmation email to customer via SendGrid, and forward inquiry to business email (contact@manosdecapa.es).

**Implementation**:
```
Client form submission (React)
  → POST to /api/contact (Vercel Function)
  → Validate & sanitize inputs
  → Send confirmation email to customer (SendGrid)
  → Forward to business email (SendGrid)
  → Return success/error to client
```

**Rationale**:
- **Simplicity**: No database required, stateless function
- **Reliability**: SendGrid provides 99.9%+ SLA, Vercel/Lambda auto-scales
- **Cost-effective**: Pay-per-request pricing, no server maintenance
- **Fast feedback**: Email arrives within seconds
- **GDPR compliant**: No unnecessary data storage
- **Meets spec requirement**: SC-008 (99.9% uptime) achievable with SendGrid + serverless

**Alternatives Considered**:
1. **CRM Integration (HubSpot/Pipedrive)**: More features (lead scoring, follow-up automation) but overkill for initial MVP. Extra cost ($29-99/month). Deferred for future phase.
2. **Direct database (Firebase/Supabase)**: Requires database schema, authentication, admin dashboard. Too complex for MVP. Can migrate from email to database later.
3. **Simple `mailto:` link**: Not reliable, depends on user having email client configured. Doesn't meet SC-008 uptime requirement.

**Selected**: **Email Service + Serverless** (best balance of reliability, simplicity, cost)

**Implementation Details**:
- Email service: SendGrid (free tier: 100 emails/day, sufficient for initial launch)
- Serverless platform: Vercel Functions (integrated with deployment, no separate AWS account needed)
- Email templates: SendGrid Dynamic Templates (professional formatting)
- Confirmation: Send customer receipt with reference number, timeline expectation

**Placeholders to Fill**:
- SENDGRID_API_KEY (environment variable)
- contact@manosdecapa.es (recipient email)
- noreply@manosdecapa.es (sender email)

---

## Decision 2: Image Optimization Strategy

**Context**: Hero section (FR-001) + gallery (FR-006) require high-quality images. Performance constraint: <3 second load time (SC-001). Images are typically largest asset on web pages.

### Decision: WebP + Responsive Images with Cloudinary CDN

**Chosen Solution**:
- Store images on Cloudinary (free tier: 25GB/month)
- Serve WebP format with JPEG fallback
- Use responsive image sizes (320px, 768px, 1024px breakpoints matching FR-013)
- Enable Cloudinary automatic compression and optimization

**Implementation**:
```html
<picture>
  <source
    srcset="https://cdn.cloudinary.com/.../c_scale,w_320,f_webp/..."
    media="(max-width: 640px)"
  />
  <source
    srcset="https://cdn.cloudinary.com/.../c_scale,w_768,f_webp/..."
    media="(max-width: 1024px)"
  />
  <img
    src="https://cdn.cloudinary.com/.../f_auto,q_auto/..."
    alt="Furniture stripping before and after"
  />
</picture>
```

**Rationale**:
- **Performance**: WebP reduces file size 25-35% vs JPEG
- **Reliability**: CDN ensures global fast delivery
- **Responsive**: Serves optimized sizes for each device (no wasted bandwidth on mobile)
- **Maintenance**: Automatic optimization, no manual image processing
- **Meets requirements**: <3 second load time (SC-001) achievable with proper image optimization
- **Cost**: Free tier sufficient for initial traffic

**Alternatives Considered**:
1. **Static files in repo**: Simple but large bundle, poor performance on mobile. Fails SC-001 requirement.
2. **AWS S3 + CloudFront**: More complex setup, requires AWS account, higher cost. Same results as Cloudinary.
3. **Next.js Image component**: Great DX but locks project to Next.js. Current plan uses React + Vite for flexibility.

**Selected**: **Cloudinary CDN** (best for image delivery + automatic optimization)

**Implementation Details**:
- Upload 6 portfolio images to Cloudinary (folder: /manosdecapa/gallery)
- Configure URL transformations for responsive sizes
- Set caching headers (Cache-Control: max-age=31536000 for hash-based URLs)
- Fallback: JPEG format for old browsers (IE11, old Android)
- Alt text required for all images (WCAG AA requirement, FR-014)

**Placeholders to Fill**:
- CLOUDINARY_CLOUD_NAME (environment variable)
- CLOUDINARY_UPLOAD_PRESET (for future admin uploads)
- Image URLs in gallery data (see data-model.md)

---

## Decision 3: WhatsApp Integration Method

**Context**: Floating WhatsApp button (FR-012) must be clickable on mobile and desktop (SC-003). Two approaches: deep link vs WhatsApp Business API.

### Decision: WhatsApp Deep Link (web.whatsapp.com)

**Chosen Solution**:
- Use WhatsApp web link: `https://wa.me/+34XXXXXXXXX?text=Hola%20Manos%20Decapa`
- No authentication or API key required
- Works on all devices with internet connection

**Implementation**:
```jsx
<a
  href="https://wa.me/+34651234567?text=Hola%20Manos%20Decapa%2C%20me%20interesa%20el%20servicio%20de%20decapado"
  target="_blank"
  rel="noopener noreferrer"
  className="floating-whatsapp"
>
  💬 WhatsApp
</a>
```

**Rationale**:
- **Zero complexity**: No API keys, no authentication, no backend integration
- **Universal**: Works on iOS, Android, desktop (web.whatsapp.com)
- **User expectation**: Opens WhatsApp or web interface, familiar to users
- **Meets requirements**: Functional on mobile and desktop (SC-003)
- **Fallback**: If WhatsApp not installed, web.whatsapp.com still works via browser
- **Cost**: Free (no API usage charges)

**Alternatives Considered**:
1. **WhatsApp Business API**: Requires approval, setup complexity, monthly costs. Overkill for MVP.
2. **Phone number fallback**: `tel://` link as fallback. Good but slower than WhatsApp.
3. **Contact form instead**: Form-only approach. Loses WhatsApp immediacy.

**Selected**: **WhatsApp Deep Link** (simplest, no infrastructure needed)

**Implementation Details**:
- Phone number: +34 [PLACEHOLDER] (to be filled with business WhatsApp number)
- Pre-filled message: "Hola Manos Decapa, me interesa el servicio de decapado"
- Button styling: Match brand colors (#8B4513), positioned bottom-right (FR-012)
- Mobile behavior: Direct to WhatsApp app if installed
- Desktop behavior: Open web.whatsapp.com in browser
- Analytics: Track clicks via Google Analytics event

**Placeholders to Fill**:
- WHATSAPP_PHONE_NUMBER (environment variable, format: +34XXXXXXXXX)

---

## Decision 4: Analytics Setup Without Performance Impact

**Context**: Success criteria require tracking (SC-005: 2% conversion rate, SC-006: mobile vs desktop traffic, SC-007: keyword rankings). Analytics must not impact performance (must stay <3 second load time).

### Decision: Google Analytics 4 (GA4) with Web Vitals

**Chosen Solution**:
- Use `gtag.js` with defer attribute to prevent blocking page load
- Integrate `web-vitals` library to track Core Web Vitals automatically
- Send analytics data asynchronously after page load completes

**Implementation**:
```html
<!-- Add defer attribute to prevent blocking -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script defer>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { 'send_page_view': false });
</script>

<!-- Send page view after page load -->
<script defer>
  window.addEventListener('load', () => {
    gtag('event', 'page_view', { page_path: window.location.pathname });
  });
</script>
```

**Rationale**:
- **Non-blocking**: `async` and `defer` attributes prevent page load delays
- **Web Vitals tracking**: Automatic Core Web Vitals data (LCP, CLS, FID) for performance monitoring
- **Conversion tracking**: Goal tracking for form submissions (2% target in SC-005)
- **Mobile vs desktop**: Browser type and device detection automatic
- **Meets requirements**: Track SC-005, SC-006, SC-007 without impacting SC-001
- **Free**: Google Analytics free tier sufficient for initial traffic

**Alternatives Considered**:
1. **Segment or Mixpanel**: More flexible but adds overhead, higher cost
2. **No analytics initially**: Skip metrics tracking. Violates success criteria.
3. **Server-side analytics only**: Harder to track user interactions (gallery views, form errors)

**Selected**: **Google Analytics 4** (free, comprehensive, non-blocking)

**Implementation Details**:
- GA4 property ID: [PLACEHOLDER]
- Events to track:
  - Page view (automatic)
  - Form submission (custom event on success)
  - Form errors (custom event on validation failure)
  - Gallery interaction (click, hover events)
  - WhatsApp button click
  - Scroll depth (user engagement)
- Conversion: Contact form submission = primary conversion goal

**Placeholders to Fill**:
- VITE_GA4_MEASUREMENT_ID (environment variable, format: G-XXXXXXXXXX)

---

## Decision 5: SEO Optimization for Spanish Keywords

**Context**: SC-007 requires first-page Google ranking for "decapado muebles Valencia" within 3 months. SEO requires technical setup (meta tags, structured data, site speed) + content strategy.

### Decision: On-Page SEO + Content Marketing

**Chosen Solution**:
- Implement technical SEO (meta tags, Open Graph, structured data)
- Create high-quality Spanish content targeting key phrases
- Build backlinks from Manos de Hada site
- Monitor keyword rankings monthly

**Implementation**:

**Technical SEO**:
```html
<!-- Meta tags (FR-015) -->
<title>Decapado de Muebles Valencia | Manos Decapa - Servicio Profesional</title>
<meta name="description" content="Decapado profesional de muebles en Valencia...">
<meta name="keywords" content="decapado muebles Valencia, restauración muebles...">

<!-- Open Graph (sharing) -->
<meta property="og:title" content="...">
<meta property="og:image" content="...og-image.jpg">

<!-- Structured Data (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Manos Decapa",
  "image": "logo.png",
  "address": { "addressLocality": "Valencia", "addressCountry": "ES" },
  "telephone": "+34...",
  "areaServed": "Valencia, Spain",
  "serviceType": "Furniture stripping"
}
</script>
```

**Content Strategy**:
- H1: "Decapado Profesional de Muebles en Valencia" (required, FR-015)
- H2s: Service titles, process steps, testimonials section
- Body copy: Target long-tail keywords ("decapado muebles antiguos Valencia", "restauración muebles Valencia")
- Internal links: Link to Manos de Hada complete restoration services
- URL structure: `/` is root, clean and descriptive

**Backlink Strategy**:
- Link from Manos de Hada site (www.manosdehada.es) → manosdecapa.es
- Future: Local business directories (Google My Business, TripAdvisor, Yellow Pages Spain)

**Rationale**:
- **Technical SEO**: Properly formatted meta tags + structured data = better SERP visibility
- **On-page optimization**: Keyword-rich content targeting Spanish search intent
- **Backlinks**: Authority from parent brand site (Manos de Hada) boosts ranking
- **Timeline**: 3-month target achievable with consistent content + backlinks
- **Meets requirement**: SC-007 (first-page ranking for target keywords)

**Alternatives Considered**:
1. **Paid search (Google Ads)**: Fast results but not organic ranking. Higher cost.
2. **No SEO**: Organic growth slower, fails SC-007 requirement.
3. **SEO agency**: Expert help but higher cost ($1000-5000/month). Can revisit after MVP.

**Selected**: **On-Page SEO + Content + Backlinks** (sustainable, cost-effective)

**Implementation Details**:
- Target keyword: "decapado muebles Valencia" (exact match in title, H1, body)
- Secondary keywords: "restauración muebles Valencia", "decapado profesional", "muebles antiguos Valencia"
- Search Console setup: Verify site ownership, submit sitemap.xml
- Monitor: Google Search Console monthly for keyword impressions/clicks
- Tools: Google Keyword Planner (free tier) for keyword research, Search Console for tracking

**Placeholders to Fill**:
- Google Search Console verification code
- Google Analytics property ID (integrated with GA4)
- Manos de Hada backlink URL (www.manosdehada.es/servicios)

---

## Decision 6: Accessibility Testing & Compliance Workflow

**Context**: FR-014 requires WCAG 2.1 AA compliance. Accessibility testing must be integrated into development workflow.

### Decision: Automated Testing + Manual Audits

**Chosen Solution**:
- Automated accessibility testing in CI/CD (axe, Pa11y)
- Manual testing by developer before PR
- Lighthouse accessibility audit (target: 90+)
- Annual professional accessibility audit (deferred to future)

**Implementation**:
- axe DevTools (browser extension) for manual testing
- axe-core in E2E tests (Cypress) for automated CI/CD checks
- Pa11y command-line tool for batch accessibility checks
- Lighthouse CI to track accessibility score over time

**Rationale**:
- **Automated**: Catches common issues (color contrast, missing alt text, heading hierarchy)
- **Manual verification**: Ensures keyboard navigation, screen reader compatibility
- **Meets requirement**: WCAG 2.1 AA compliance (FR-014)
- **Low cost**: Free tools (axe-core, Pa11y, Lighthouse)
- **Workflow**: Integrated into PR review process

**Alternatives Considered**:
1. **No accessibility testing**: Non-compliant with FR-014
2. **Professional audit only**: Too expensive for MVP ($2000-5000)
3. **Manual testing only**: Misses automated issues, not scalable

**Selected**: **Automated + Manual Testing** (cost-effective, catches issues early)

**Implementation Details**:
- **CI/CD checks**: Run axe-core in Cypress tests on every PR
- **Manual checks**: Developer testing checklist (keyboard nav, colors, images)
- **Keyboard navigation**: Tab through all interactive elements (form, buttons, WhatsApp link)
- **Color contrast**: Verify all text meets WCAG AA (4.5:1 for normal text)
- **Alt text**: All images have descriptive alt text
- **Heading hierarchy**: H1 → H2 → H3 (no skipped levels)
- **Form labels**: All inputs have associated `<label>` elements

**Placeholders to Fill**:
- axe accessibility check integration in Cypress tests
- Pa11y command in npm scripts

---

## Summary: All Decisions Resolved

| Decision | Choice | Confidence | Risk |
|----------|--------|-----------|------|
| Form Backend | Email Service + Serverless | High | Low - straightforward, proven pattern |
| Image Optimization | Cloudinary CDN + WebP | High | Low - free tier sufficient |
| WhatsApp Integration | Deep Link (web.whatsapp.com) | High | Very low - no external dependencies |
| Analytics | Google Analytics 4 + Web Vitals | High | Low - GA4 is industry standard |
| SEO Strategy | On-Page + Content + Backlinks | Medium | Medium - 3-month timeline is ambitious but achievable |
| Accessibility | Automated + Manual Testing | High | Low - testing tools are well-established |

**All NEEDS CLARIFICATION items resolved.** Ready to proceed to Phase 1 (data modeling and contracts).

---

## Next: Phase 1 - Design & Data Contracts

Once this research is approved, the following Phase 1 artifacts will be generated:
1. `data-model.md` - Contact lead schema, gallery structure, constants
2. `contracts/form-schema.json` - JSON schema for form validation
3. `contracts/form-submission-api.md` - API endpoint specification
4. `contracts/gallery-data-contract.md` - Gallery data structure
5. `quickstart.md` - Development environment setup
6. Updated agent context (technology stack)
