# Implementation Plan: Manos Decapa Landing Page

**Branch**: `001-landing-page` | **Date**: 2025-11-14 | **Spec**: [specs/001-landing-page/spec.md](spec.md)

**Input**: Feature specification from `/specs/001-landing-page/spec.md`

## Summary

Build a professional single-page landing website for Manos Decapa furniture stripping service in Valencia, Spain. The landing page will showcase services, build customer confidence through before/after gallery and pricing, and capture leads via contact form and WhatsApp integration. Target audience: homeowners with inherited furniture and professional restoration businesses seeking decapado services.

The feature follows a mobile-first responsive design with warm wood-tone color palette. Primary success metrics: <3 second load time, 90+ Lighthouse score, 2%+ form conversion rate, and first-page search ranking for "decapado muebles Valencia" within 3 months.

## Technical Context

**Language/Version**: HTML5 + CSS3 (with CSS Custom Properties), JavaScript ES2020+

**Primary Dependencies**:
- Frontend framework: React 18+ (for interactive gallery, form handling, WhatsApp button)
- Build tool: Vite (recommended for <3 second load time requirement)
- CSS framework: Tailwind CSS 3+ (for responsive design, utility-first approach)
- Form validation: React Hook Form + Zod (type-safe form handling)
- Image optimization: Next.js Image component or native `<picture>` elements with WebP support
- Accessibility: React A11y audit tools + WCAG 2.1 AA compliance

**Storage**: Contact form submissions stored via:
- Email backend: SendGrid, Mailgun, or Nodemailer (for quote request notifications)
- Optional CRM: HubSpot, Pipedrive, or simple email to business address
- Image uploads: AWS S3, Cloudinary, or local file storage with virus scanning

**Testing**:
- Unit tests: Vitest + React Testing Library (component-level testing for gallery, form, interactive elements)
- Integration tests: Cypress or Playwright (full user journeys: discovery, contact, form submission)
- E2E tests: Visual regression testing for responsive design (Percy, Chromatic, or VRT)
- Performance testing: Lighthouse CI, WebPageTest

**Target Platform**:
- Web browsers: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Mobile platforms: iOS Safari 14+, Android Chrome 90+
- Minimum device: 320px width (mobile phones)

**Project Type**: Single-page static site with dynamic elements (React component-based)

**Performance Goals**:
- Page load: < 3 seconds on standard broadband (10 Mbps)
- Largest Contentful Paint (LCP): < 2.5 seconds
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms
- Lighthouse Performance: 90+

**Constraints**:
- WCAG 2.1 AA accessibility compliance (required by spec FR-014)
- SEO optimization for Spanish keywords (spec SC-007 requires first-page ranking)
- Form submission uptime: 99.9% (spec SC-008)
- Mobile-first responsive design (320px+)
- No third-party analytics should impact performance (<100KB combined)

**Scale/Scope**:
- Content: 10 sections, ~50 text blocks, 6 portfolio images
- Interactive elements: 1 contact form, 1 gallery with hover effects, 1 floating WhatsApp button
- Expected traffic: Low to moderate (local business, Valencia region)
- Maintenance: Regular content updates (pricing, portfolio, testimonials in future)

## Constitution Check

**Principles Alignment Assessment** (from Manos de Capa Constitution v1.0.0):

### I. Test-First Development (NON-NEGOTIABLE)
✅ **COMPLIANT**:
- [x] All interactive components (gallery, form, WhatsApp button) will have unit tests written first
- [x] User journeys (discover service, submit form, view gallery) will have Cypress E2E tests written before implementation
- [x] Form validation logic will be tested via contract tests
- [x] Responsive design will be tested via visual regression testing

**Implementation strategy**: Write tests for each user story (US1-US5) independently, ensuring each can be tested in isolation.

### II. Semantic Versioning & Breaking Changes
✅ **COMPLIANT**:
- [x] Landing page will start at v1.0.0
- [x] Future changes (form fields, pricing, services) will follow MAJOR.MINOR.PATCH
- [x] Any breaking changes (e.g., form API changes) will trigger MAJOR version bump with migration guide
- [x] Deprecations of old pricing/services will precede removal by at least one version

**Implementation strategy**: Version the landing page as separate from Manos de Hada site. Form schema changes tracked in data-model.md.

### III. Code Review & Complexity Justification
✅ **COMPLIANT**:
- [x] All PRs will require test passes (unit, integration, E2E)
- [x] Code review will verify: test coverage >80%, accessibility compliance, responsive design on all breakpoints
- [x] Architectural choices (React vs static HTML, Tailwind vs CSS modules) documented in research.md
- [x] No unnecessary complexity: gallery implemented with simple React hooks, form with React Hook Form (industry standard)

**Implementation strategy**: All commits include test validation. Design decisions (React choice vs static) justified in research.md.

### IV. Modular Design & Independent Testing
✅ **COMPLIANT**:
- [x] Hero section independently testable (loads within 3 seconds, contains all required CTA elements)
- [x] Services section independently testable (displays 3 service cards with correct icons)
- [x] Contact form independently testable (validates, submits, shows success message)
- [x] Gallery independently testable (displays 6 images, hover toggles before/after)
- [x] Can deploy each user story (US1, US2, US3, US4, US5) independently

**Implementation strategy**: Feature flags or branch deploys allow testing each story independently. Component library approach (services card = reusable component).

### Gate Assessment

**Pre-Phase 0 Gates** (from constitution):
- ✅ Automated test framework selected (Vitest, Cypress)
- ✅ Code review process defined (all PRs require passing tests + code review)
- ✅ Modular structure planned (5 independent user stories)

**Post-Phase 1 Design Gates**:
- Will verify all entity schemas align with form validation
- Will confirm API contracts (form submission endpoint) match test expectations
- Will validate responsive design breakpoints match requirements

## Project Structure

### Documentation (this feature)

```text
specs/001-landing-page/
├── spec.md                          # Feature specification (done)
├── plan.md                          # This file - implementation plan
├── research.md                      # Phase 0 - Technology decisions & best practices
├── data-model.md                    # Phase 1 - Data structures & form schema
├── quickstart.md                    # Phase 1 - Local development setup
├── contracts/
│   ├── form-schema.json             # Contact form JSON schema
│   ├── form-submission-api.md       # POST /api/contact endpoint specification
│   └── gallery-data-contract.md     # Gallery image data structure
└── checklists/
    └── requirements.md              # Quality checklist (done)
```

### Source Code (repository root)

```text
landing-page/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg                 # Open Graph preview image
│   ├── images/
│   │   ├── hero-background.jpg      # Hero section background
│   │   ├── gallery/
│   │   │   ├── item-1-before.jpg    # Portfolio items
│   │   │   ├── item-1-after.jpg
│   │   │   └── ... (6 items total)
│   │   └── icons/
│   │       ├── wood.svg             # Service icons
│   │       ├── doors.svg
│   │       └── metal.svg
│   └── videos/ (optional for future hero video)
│
├── src/
│   ├── components/
│   │   ├── Hero.jsx                 # Hero section with CTA
│   │   ├── Services.jsx             # 3-card services section
│   │   ├── ForWhom.jsx              # Particulares/Profesionales section
│   │   ├── Process.jsx              # 4-step process flow
│   │   ├── WhyChooseUs.jsx          # 3-pillar trust section
│   │   ├── Gallery.jsx              # Before/after gallery with hover
│   │   ├── Pricing.jsx              # Pricing table
│   │   ├── About.jsx                # Company info section
│   │   ├── ContactForm.jsx          # Contact form with validation
│   │   ├── Footer.jsx               # Footer with links & social
│   │   ├── WhatsAppButton.jsx       # Floating WhatsApp button
│   │   └── common/
│   │       ├── Header.jsx           # Logo, navigation (optional)
│   │       ├── Button.jsx           # Reusable button component
│   │       ├── Card.jsx             # Reusable card component
│   │       └── ImageWithFallback.jsx # Image with error handling
│   │
│   ├── hooks/
│   │   ├── useContactForm.js        # Form state + validation logic
│   │   ├── useGalleryHover.js       # Before/after toggle logic
│   │   └── useWindowSize.js         # Responsive breakpoint detection
│   │
│   ├── utils/
│   │   ├── validation.js            # Form validation helpers
│   │   ├── constants.js             # Services, pricing, process data
│   │   ├── seo.js                   # SEO meta tag helpers
│   │   └── analytics.js             # Event tracking (GA4 optional)
│   │
│   ├── styles/
│   │   ├── globals.css              # Tailwind + custom properties
│   │   ├── colors.css               # Color palette variables (#8B4513, etc.)
│   │   └── animations.css           # Gallery hover, scroll effects
│   │
│   ├── App.jsx                      # Main component wrapper
│   ├── index.css                    # Root styles
│   └── main.jsx                     # React entry point
│
├── tests/
│   ├── unit/
│   │   ├── ContactForm.test.jsx     # Form validation, submission
│   │   ├── Gallery.test.jsx         # Hover toggle, image loading
│   │   ├── validation.test.js       # Email, phone, message validation
│   │   └── constants.test.js        # Data integrity (pricing, services)
│   │
│   ├── integration/
│   │   ├── form-submission.test.js  # Full form flow with API
│   │   ├── page-load.test.js        # Performance (< 3 seconds)
│   │   └── accessibility.test.js    # WCAG compliance for key elements
│   │
│   └── e2e/
│       ├── discover-service.cy.js   # User Story 1: Browse services
│       ├── submit-form.cy.js        # User Story 2: Request quote
│       ├── view-gallery.cy.js       # User Story 3: Before/after
│       ├── understand-process.cy.js # User Story 4: Process + WhatsApp
│       └── responsive-navigation.cy.js # User Story 5: Mobile/desktop
│
├── package.json                     # Dependencies, scripts
├── vite.config.js                   # Build configuration
├── tailwind.config.js               # Tailwind theme (colors, breakpoints)
├── vitest.config.js                 # Unit test configuration
├── cypress.config.js                # E2E test configuration
├── .env.example                     # Environment variables (WhatsApp number, API endpoint)
├── .env.local                       # Actual values (not committed)
├── .github/workflows/
│   ├── test.yml                     # Run unit + E2E tests on PR
│   ├── lighthouse.yml               # Performance audit on staging
│   └── deploy.yml                   # Deploy to production
└── README.md                        # Project setup & development guide
```

**Structure Decision**:
Single React application (not separated backend/frontend) because landing page is primarily static content with minimal backend interaction. Form submissions handled via serverless functions (AWS Lambda, Vercel Functions, or similar) for simplicity. Contact lead data stored in email or CRM, not database.

This structure aligns with Constitution Principle IV (Modular Design): each component is independently testable, can be developed in parallel, and form logic is decoupled from UI via custom hooks.

## Complexity Tracking

No constitution violations. All technical choices are justified and necessary:

| Choice | Rationale | Simpler Alternative Rejected |
|--------|-----------|------------------------------|
| React instead of static HTML | Interactive gallery (hover toggle), form validation, responsive state management | Static HTML requires duplication for mobile/desktop layouts, manual form validation, janky gallery interactions |
| Tailwind CSS instead of CSS modules | Rapid responsive design, consistent spacing/colors across all components, smaller build size | CSS modules require more setup, harder to maintain consistency across 10+ sections |
| Vite instead of Create React App | <3 second build time, faster HMR, optimized bundle (critical for <3s load goal) | CRA has larger overhead, slower builds, less optimized for production |
| Cypress for E2E instead of Selenium | Better DX, visual debugging, faster test execution, better mobile support | Selenium more verbose, slower, harder to debug |

---

## Phase 0: Research & Technical Decisions

**Status**: In Progress → Will generate `research.md` with resolved decisions

**Key Research Areas**:
1. Form backend selection (email vs CRM integration)
2. Image optimization strategy (WebP, responsive images, CDN caching)
3. WhatsApp integration method (web.whatsapp.com link vs API)
4. Analytics setup without impacting performance
5. SEO optimization for Spanish keywords
6. Accessibility testing tools & workflow

**Output**: `research.md` with all decisions documented

---

## Phase 1: Design & Data Contracts

**Prerequisites**: `research.md` complete

**Deliverables**:
1. `data-model.md` - Contact lead schema, gallery data structure, service/pricing definitions
2. `contracts/form-schema.json` - JSON schema for form validation
3. `contracts/form-submission-api.md` - POST /api/contact endpoint specification
4. `contracts/gallery-data-contract.md` - Gallery item data structure
5. `quickstart.md` - Local development setup (npm install, env setup, running tests)
6. Updated agent context file (if applicable)

**Key Design Decisions to Document**:
- Contact form backend: Email service (SendGrid) vs CRM (HubSpot) vs simple email to business address
- Image optimization: Cloudinary vs AWS S3 vs static assets
- WhatsApp: Deep link (web.whatsapp.com) vs API integration
- Form error recovery: Show all errors at once vs step-by-step
- Mobile responsiveness: Breakpoints (320px, 768px, 1024px) and column layouts

---

## Phase 2: Task Generation

**Status**: Pending (will be generated by `/speckit.tasks` command)

**Expected Tasks**:
- Setup: Project initialization, dependencies, build configuration
- Foundational: Tailwind setup, color variables, responsive grid, accessibility framework
- User Story 1: Hero section + Services section components
- User Story 2: Contact form component + validation + submission
- User Story 3: Gallery component + image loading + hover effects
- User Story 4: Process section + WhatsApp button
- User Story 5: Responsive navigation + footer + SEO tags
- Polish: Performance optimization, Lighthouse audit, accessibility audit, image optimization

**Parallel Opportunities**:
- All 5 component groups (Hero, Services, Form, Gallery, Process) can be developed in parallel after foundational setup
- Unit tests for each component can run in parallel
- E2E tests for each user story can run in parallel

---

## Next Steps

1. **Run Phase 0 research** (manual or via agent) to document:
   - Form backend decision (email service recommendation)
   - Image optimization approach
   - WhatsApp integration method
   - Analytics setup
   - SEO strategy for Spanish keywords

2. **Generate Phase 1 artifacts**:
   - `data-model.md` with contact lead schema
   - `contracts/` directory with form schema and API specs
   - `quickstart.md` with development setup

3. **Run `/speckit.tasks`** to generate task list based on 5 user stories

4. **Begin implementation** starting with foundational setup (Tailwind, colors, responsive grid)

---

**Key Metrics to Track**:
- Build time (target: <3 seconds)
- Lighthouse score (target: 90+)
- Test coverage (target: >80%)
- Form conversion rate (target: 2%+)
- Mobile performance (target: LCP <2.5s, CLS <0.1)
