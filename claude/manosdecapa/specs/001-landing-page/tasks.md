---
description: "Task list for Manos Decapa Landing Page implementation"
---

# Tasks: Manos Decapa Landing Page

**Input**: Design documents from `/specs/001-landing-page/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Test-First Development per Constitution Principle I - Tests written BEFORE implementation. Each phase includes test tasks that must PASS (red phase) before implementation begins.

**Organization**: Tasks organized by user story to enable independent implementation and testing of each story. Each user story is a complete, deployable increment.

## Format: `[ID] [P?] [Story] Description`

- **[ID]**: Task identifier (T001, T002, etc.) in execution order
- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4, US5) or none for setup/foundational
- Include exact file paths in all descriptions

## Path Conventions

- **Project root**: `landing-page/`
- **React components**: `src/components/`
- **Tests**: `tests/unit/`, `tests/integration/`, `tests/e2e/`
- **Styles**: `src/styles/`
- **Data/Constants**: `src/utils/constants.js`
- **Validation**: `src/utils/validation.js`

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize React + Vite project with all dependencies and build configuration

- [ ] T001 Create project structure with directories per plan.md: `src/components/`, `src/hooks/`, `src/utils/`, `src/styles/`, `tests/`, `public/`
- [ ] T002 Initialize Vite React project with TypeScript support: `package.json`, `vite.config.js`, `tsconfig.json`
- [ ] T003 [P] Install core dependencies: React 18, React DOM 18, Vite, Tailwind CSS 3, React Hook Form, Zod
- [ ] T004 [P] Install dev dependencies: Vitest, @testing-library/react, Cypress, @testing-library/jest-dom, prettier, eslint
- [ ] T005 [P] Setup Tailwind CSS configuration: `tailwind.config.js` with custom colors (#8B4513, #D2691E, #F4A460, #FFF8DC, #2C1810)
- [ ] T006 [P] Configure Vitest for unit tests: `vitest.config.js` with React + jsdom
- [ ] T007 [P] Configure Cypress for E2E tests: `cypress.config.js` with base URL, viewport sizes for mobile (320px), tablet (768px), desktop (1024px)
- [ ] T008 Create `.env.example` with all required environment variables (SendGrid, Cloudinary, WhatsApp, GA4, API endpoint)
- [ ] T009 [P] Setup code linting & formatting: `.eslintrc.json`, `.prettierrc`, pre-commit hooks
- [ ] T010 [P] Setup GitHub Actions workflows: `test.yml` (unit + E2E), `lighthouse.yml` (performance audit), `deploy.yml`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core styling, responsive framework, and shared utilities that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T011 Create global styles: `src/styles/globals.css` with Tailwind @import, CSS reset, custom properties for colors/fonts
- [ ] T012 [P] Create color system CSS variables: `src/styles/colors.css` with all 10 colors from spec, light/dark variants
- [ ] T013 [P] Create typography system: `src/styles/typography.css` with font families (Poppins, Open Sans), sizes (h1-h3, body, small), weights
- [ ] T014 [P] Create responsive grid system: `src/styles/grid.css` with Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1440px)
- [ ] T015 Create animation utilities: `src/styles/animations.css` with hover effects, fade-in, smooth transitions for gallery
- [ ] T016 Create validation utility functions: `src/utils/validation.js` with email, phone (flexible intl format), required field validators using Zod
- [ ] T017 [P] Create constants file: `src/utils/constants.js` with services (3), process steps (4), pricing tiers (4), why choose us (3), all Spanish text
- [ ] T018 [P] Create form configuration: `src/utils/formConfig.js` with field definitions, error messages (Spanish), validation rules
- [ ] T019 Create image fallback utility: `src/components/common/ImageWithFallback.jsx` to handle Cloudinary URLs, WebP format, error states
- [ ] T020 [P] Create reusable Button component: `src/components/common/Button.jsx` with variants (primary, secondary), sizes, loading states, Tailwind styling
- [ ] T021 [P] Create reusable Card component: `src/components/common/Card.jsx` for service cards, pricing cards, responsive padding/shadows
- [ ] T022 Create custom hooks for shared logic:
  - [ ] T022a `src/hooks/useWindowSize.js` - detect viewport size for responsive behavior
  - [ ] T022b `src/hooks/useContactForm.js` - form state, validation, submission logic with React Hook Form
  - [ ] T022c `src/hooks/useGalleryHover.js` - before/after image toggle state management

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Discover Service and View Offerings (Priority: P1) 🎯 MVP

**Goal**: Visitors can understand services offered, see why Manos Decapa is trustworthy, and view company information. This is the awareness-building MVP.

**Independent Test**: Load landing page, verify hero section renders within 3 seconds, all 3 service cards visible, "Why Choose Us" section complete, professional Spanish copy throughout.

### Tests for User Story 1 (REQUIRED - Test-First per Constitution)

Tests MUST be written first, fail on current empty components, then implementation makes them pass.

- [ ] T023 [P] Contract test for Hero section in `tests/contract/test_hero.cy.js`:
  - Verify hero displays in < 3 seconds
  - Title: "Manos Decapa - Decapado Profesional de Muebles en Valencia"
  - Subtitle present with service description
  - Hero image loads from correct path
  - CTA button "Solicitar Presupuesto" is visible and clickable
- [ ] T024 [P] Contract test for Services section in `tests/contract/test_services.cy.js`:
  - Verify 3 service cards render
  - Each card has icon, title, description
  - Titles: "Decapado de Muebles de Madera", "Puertas y Ventanas Antiguas", "Elementos Metálicos Decorativos"
  - Cards are responsive grid layout (stacked on mobile, 3-column on desktop)
- [ ] T025 [P] Contract test for Why Choose Us in `tests/contract/test_why_us.cy.js`:
  - Verify 3 pillar cards (Experience, Technology, Guaranteed Results)
  - Each has icon, title, description
  - Icons display correctly
  - Spanish text accurate and professional
- [ ] T026 Contract test for About section in `tests/contract/test_about.cy.js`:
  - Company history text present
  - Link to Manos de Hada (www.manosdehada.es) functional
  - Spanish copy clear and professional
- [ ] T027 Integration test for full discovery journey in `tests/integration/test_discover_journey.test.jsx`:
  - Page loads and renders all sections
  - Scroll from hero → services → about works smoothly
  - All text visible and accessible
  - No console errors
- [ ] T028 [P] Unit tests for Hero component in `tests/unit/Hero.test.jsx`:
  - Tests <Hero /> renders correctly with props
  - CTA button click tracked in analytics
  - Image alt text present
  - Title/subtitle text matches spec
- [ ] T029 [P] Unit tests for Services component in `tests/unit/Services.test.jsx`:
  - Tests <Services /> renders 3 cards
  - Each card has correct content
  - Icons load without errors
  - Responsive to viewport changes
- [ ] T030 [P] Unit tests for About component in `tests/unit/About.test.jsx`:
  - Tests <About /> renders company history
  - Link to Manos de Hada present and functional
  - Spanish text integrity

### Implementation for User Story 1

- [ ] T031 [P] Create Hero component: `src/components/Hero.jsx`
  - Display hero section with:
    - H1: "Manos Decapa - Decapado Profesional de Muebles en Valencia"
    - Subtitle: "Recuperamos la madera original de tus muebles y piezas antiguas..."
    - Hero image from public/images/hero-background.jpg (with ImageWithFallback)
    - CTA button "Solicitar Presupuesto" that scrolls to contact form
  - Styling: Full-width, responsive image, centered text overlay, warm colors
  - Performance: Image loads with Cloudinary optimization if remote URL

- [ ] T032 [P] Create Services component: `src/components/Services.jsx`
  - Display 3 service cards in responsive grid (3-column on desktop, 1-column on mobile)
  - Each card: icon (from constants), title, description, subtle shadow/hover effect
  - Data from `src/utils/constants.js` services array
  - Styling: Card component with hover effects, Tailwind responsive grid

- [ ] T033 [P] Create WhyChooseUs component: `src/components/WhyChooseUs.jsx`
  - Display 3 pillar cards (Experience, Technology, Guaranteed Results)
  - Each card: icon, title (bold), description paragraph
  - Data from `src/utils/constants.js` whyChooseUs array
  - Styling: Card component with consistent spacing, icons styled with brand colors

- [ ] T034 Create About component: `src/components/About.jsx`
  - Display company history paragraph
  - Include link to www.manosdehada.es with text "Visita Manos de Hada"
  - Styling: Content width, readable line-length (~60-70 chars), proper typography hierarchy
  - Accessibility: Link has aria-label, proper semantic HTML

- [ ] T035 Create App.jsx main component: `src/App.jsx`
  - Import and compose: Hero, Services, WhyChooseUs, About (and future: For Whom, Process, Gallery, Pricing, Contact, Footer)
  - Add SEO meta tags (title, description, og:image) via react-helmet or native <head> manipulation
  - Setup layout wrapper with container width

- [ ] T036 Create index entry point: `src/main.jsx`
  - React 18 strict mode
  - Render App.jsx to #root element in public/index.html

- [ ] T037 Update public/index.html with:
  - Title: "Decapado de Muebles Valencia | Manos Decapa - Servicio Profesional"
  - Meta description: "Decapado profesional de muebles en Valencia..."
  - Meta viewport for mobile responsive
  - Open Graph tags for social sharing
  - Favicon reference
  - Root element <div id="root"></div>

- [ ] T038 [P] Add Spanish language constants: `src/utils/constants.js`
  - services: [3 services with titles/descriptions]
  - whyChooseUs: [3 pillars with titles/descriptions]
  - Process steps, pricing, etc. (can add as needed for future stories)
  - All text in Spanish, professional copy per spec

- [ ] T039 Run tests from T023-T030 and verify all PASS after implementation

**Checkpoint**: User Story 1 complete and independently testable. MVP can be deployed at this point (discovery page only).

---

## Phase 4: User Story 2 - Request Quote and Contact Service (Priority: P1)

**Goal**: Customers can submit contact form with personal info, project details, photos, and receive confirmation. Revenue-critical conversion path.

**Independent Test**: Fill and submit contact form with valid data, verify success message displays, form data submits to /api/contact endpoint, customer receives confirmation email.

### Tests for User Story 2 (REQUIRED - Test-First)

- [ ] T040 Contract test for form submission API in `tests/contract/test_contact_api.cy.js`:
  - POST /api/contact with valid form data returns 200 OK
  - Response includes leadId, referenceNumber, successMessage
  - Required fields validated (fullName, email, phone, clientType, itemType, itemDescription)
  - Invalid email returns 400 with error
  - Invalid phone format returns 400 with error
  - Missing required fields returns 400
  - Rate limiting: >5 submissions per IP per hour returns 429

- [ ] T041 Contract test for form validation schema in `tests/contract/test_form_schema.test.js`:
  - Validates fullName: required, 2-100 chars, no special chars
  - Validates email: required, RFC 5322 format
  - Validates phone: required, flexible intl format (+34XXXXXXXXX or 6XX XXX XXX)
  - Validates clientType: required, enum (Particular | Profesional)
  - Validates itemType: required, enum (7 types)
  - Validates itemDescription: required, 10-1000 chars
  - Validates message: optional, max 2000 chars
  - Validates photos: optional, max 5 files, max 5MB each, JPEG/PNG/WebP only

- [ ] T042 Integration test for full form submission journey in `tests/integration/test_form_submission.test.jsx`:
  - User fills form with valid data
  - Submit button click triggers validation
  - Form submits to API
  - Success message displays with reference number
  - Form clears or shows confirmation
  - No errors in console

- [ ] T043 [P] Unit tests for ContactForm component in `tests/unit/ContactForm.test.jsx`:
  - Tests form renders with all 7 fields
  - Tests validation errors display for empty fields
  - Tests phone format flexibility (accepts multiple formats)
  - Tests file upload field works
  - Tests client type dropdown works
  - Tests item type dropdown works
  - Tests form submission

- [ ] T044 [P] Unit tests for form validation in `tests/unit/validation.test.js`:
  - Tests email validator
  - Tests phone validator (multiple formats)
  - Tests required field validator
  - Tests character length validators
  - Tests file type validator

### Implementation for User Story 2

- [ ] T045 Create ContactForm component: `src/components/ContactForm.jsx`
  - Form with 7 fields:
    1. fullName (text input, required)
    2. email (email input, required)
    3. phone (tel input, required, flexible format)
    4. clientType (select: Particular | Profesional, required)
    5. itemType (select: 7 furniture types, required)
    6. itemDescription (textarea, required, 10-1000 chars)
    7. message (textarea, optional, max 2000 chars)
    8. photos (file input, optional, max 5 files, 5MB each)
  - Submit button: "Solicitar Presupuesto Gratuito"
  - Validation on submit (prevent server submission of invalid data)
  - Error messages in Spanish (from constants)
  - Show loading state during submission
  - Display success message with reference number on success
  - File path: `src/components/ContactForm.jsx`

- [ ] T046 Create form validation logic using React Hook Form + Zod: `src/hooks/useContactForm.js`
  - Configure react-hook-form with Zod schema
  - Validation rules per form-schema.json contract
  - Phone number accepts flexible international formats
  - File validation (type, size)
  - Return form state (values, errors, isSubmitting, handleSubmit, watch)

- [ ] T047 Create form submission handler: `src/services/formSubmission.js`
  - Function submitContactForm(formData)
  - Calls POST /api/contact with form data
  - Handles success response (show confirmation)
  - Handles error response (show error message)
  - Includes retry logic with exponential backoff
  - Tracks analytics event "form_submission"

- [ ] T048 Create Vercel serverless function: `api/contact.js` (or AWS Lambda equivalent)
  - Receive POST request with form data
  - Validate all fields against form-schema.json
  - Sanitize inputs (prevent XSS, SQL injection)
  - Generate leadId (UUID) and referenceNumber
  - Save lead to storage (Vercel KV, S3, or email log)
  - Send confirmation email to customer (SendGrid template)
  - Send lead notification to contact@manosdecapa.es (SendGrid template)
  - Return 200 with leadId, referenceNumber
  - Handle errors: return 400 (validation), 500 (server error)
  - Implement rate limiting (max 5 per IP per hour)

- [ ] T049 Create email templates in SendGrid:
  - Customer confirmation email template:
    - Subject: "Solicitud de presupuesto recibida - Manos Decapa {{referenceNumber}}"
    - Body: Thank you, reference number, submission details, what to expect
  - Business lead notification template:
    - Subject: "NUEVO PRESUPUESTO - {{customerName}} ({{referenceNumber}})"
    - Body: All lead details, photos count, link to admin

- [ ] T050 [P] Setup environment variables: `.env.local`
  - VITE_SENDGRID_API_KEY: [placeholder]
  - VITE_CONTACT_EMAIL: contact@manosdecapa.es
  - VITE_NOREPLY_EMAIL: noreply@manosdecapa.es
  - VITE_API_URL: http://localhost:3000 (dev) or https://api.manosdecapa.es (prod)
  - VITE_API_CONTACT_ENDPOINT: /api/contact

- [ ] T051 Create Form service integration: `src/services/formService.js`
  - Wrapper around fetch() to POST to /api/contact
  - Error handling and user-friendly messages
  - Analytics tracking

- [ ] T052 Add form submission analytics: Track in Google Analytics
  - Event: "form_submission" (successful submit)
  - Event: "form_error" (validation failure)
  - Track conversion rate per success criteria SC-005

- [ ] T053 Run tests from T040-T044 and verify all PASS after implementation

**Checkpoint**: User Story 2 complete. Now have MVP + lead generation (US1 + US2 = core value).

---

## Phase 5: User Story 3 - View Before/After Results and Pricing (Priority: P2)

**Goal**: Show portfolio gallery with before/after hover effects and pricing table to build confidence and help customers self-qualify.

**Independent Test**: View gallery section, hover over images to toggle before/after, view pricing table with all 4 categories and prices.

### Tests for User Story 3 (REQUIRED - Test-First)

- [ ] T054 Contract test for Gallery in `tests/contract/test_gallery.cy.js`:
  - Verify 6 gallery items display in 3x2 grid on desktop
  - Grid is 2-column on tablet, 1-column on mobile
  - Each item shows before image initially
  - Hover toggles to after image with smooth transition
  - After hover off, returns to before image
  - Touch devices: tap button to toggle before/after
  - Images load from Cloudinary URLs
  - Alt text present on all images for accessibility

- [ ] T055 Contract test for Pricing in `tests/contract/test_pricing.cy.js`:
  - Verify pricing table displays with 4 categories (Silla, Mesita, Cómoda, Puerta)
  - Each row shows category name and starting price in euros
  - Footer notes present: "*Precio final según estado", "**Profesionales: consulta tarifas"
  - Table is responsive (scrollable or stacked on mobile)

- [ ] T056 Integration test for gallery user journey in `tests/integration/test_gallery_journey.test.jsx`:
  - User scrolls to gallery section
  - Gallery loads without errors
  - User can hover/tap images to see before/after
  - Images transition smoothly
  - No layout shift during transitions (CLS < 0.1)

- [ ] T057 [P] Unit tests for Gallery component in `tests/unit/Gallery.test.jsx`:
  - Tests Gallery renders 6 items
  - Tests before/after toggle works
  - Tests Cloudinary image URLs load
  - Tests alt text is present and descriptive
  - Tests responsive grid layout

- [ ] T058 [P] Unit tests for Pricing component in `tests/unit/Pricing.test.jsx`:
  - Tests pricing table renders with 4 rows
  - Tests prices are displayed correctly
  - Tests footer notes present

### Implementation for User Story 3

- [ ] T059 Create Gallery component: `src/components/Gallery.jsx`
  - Display 6 portfolio items in responsive grid
  - Desktop (1024px+): 3-column grid
  - Tablet (768px-1023px): 2-column grid
  - Mobile (320px-767px): 1-column grid
  - Each item:
    - Before image visible by default
    - On hover (desktop) or click (mobile): toggle to after image
    - Smooth fade transition (0.3s)
    - Title and category below image
    - Estimated time for completion
  - Data from `src/utils/constants.js` or gallery.json import
  - File path: `src/components/Gallery.jsx`

- [ ] T060 Create Pricing component: `src/components/Pricing.jsx`
  - Display pricing table with 4 furniture categories:
    - Silla: desde 35€
    - Mesita/Silla tapizada: desde 50€
    - Cómoda/Aparador: desde 120€
    - Puerta: desde 80€
  - Footer notes in Spanish:
    - "*Precio final según estado y dimensiones"
    - "**Profesionales: consulta tarifas para volumen"
  - Table responsive: stacked on mobile, tabular on desktop
  - Data from `src/utils/constants.js`
  - File path: `src/components/Pricing.jsx`

- [ ] T061 Create custom hook for gallery interaction: `src/hooks/useGalleryHover.js` (if not already done in Phase 2)
  - State: hoveredItemId
  - Toggle function: toggleBefore/After(itemId)
  - Returns current images based on hover state

- [ ] T062 [P] Add gallery image data to constants: `src/utils/constants.js`
  - portfolioItems array with 6 items
  - Each item: id, title, category, beforeImage (Cloudinary URL), afterImage (Cloudinary URL), estimatedTime, description

- [ ] T063 [P] Add pricing data to constants: `src/utils/constants.js`
  - pricingTiers array with 4 items
  - Each item: id, category, startingPrice, description, note

- [ ] T064 [P] Create ImageWithFallback component enhancements: `src/components/common/ImageWithFallback.jsx`
  - Support Cloudinary URLs with transformations
  - Lazy loading for images below fold
  - Error boundary: show alt text or placeholder if image fails
  - Track image load performance

- [ ] T065 Implement image lazy loading:
  - Use native loading="lazy" on <img> elements
  - Or use Intersection Observer for better control
  - Track LCP (Largest Contentful Paint) for performance budget

- [ ] T066 Add hover animation CSS: `src/styles/animations.css`
  - Smooth fade transition for before/after toggle (opacity 0.3s ease)
  - Hover effect on gallery items (subtle scale or shadow)
  - Touch-friendly: increase tap target size to 44px minimum

- [ ] T067 Setup Cloudinary image optimization:
  - Confirm all portfolio images have Cloudinary URLs
  - URL format: `https://res.cloudinary.com/{cloud_name}/image/upload/c_scale,w_{width},f_webp,q_auto/...`
  - Images should load in < 1 second each

- [ ] T068 Run tests from T054-T058 and verify all PASS after implementation

**Checkpoint**: User Story 3 complete. Now have awareness + conversion + confidence (US1 + US2 + US3).

---

## Phase 6: User Story 4 - Understand Process and Get Support (Priority: P2)

**Goal**: Explain 4-step service process and provide WhatsApp button for immediate customer support.

**Independent Test**: Read 4-step process section with clear explanations, click WhatsApp button and verify it opens WhatsApp or web.whatsapp.com.

### Tests for User Story 4 (REQUIRED - Test-First)

- [ ] T069 Contract test for Process section in `tests/contract/test_process.cy.js`:
  - Verify 4 numbered steps display horizontally (desktop) or vertically (mobile)
  - Each step has: number, title in Spanish, description
  - Titles: VALORACIÓN, RECOGIDA, DECAPADO, ENTREGA
  - Descriptions match spec
  - Step numbers are clearly visible

- [ ] T070 Contract test for WhatsApp button in `tests/contract/test_whatsapp.cy.js`:
  - Verify floating button appears in bottom-right corner
  - Button is visible on desktop and mobile
  - Click opens WhatsApp (app on mobile if installed, web.whatsapp.com otherwise)
  - href is correct format: `https://wa.me/+34XXXXXXXXX?text=...`
  - Button has aria-label for accessibility

- [ ] T071 Integration test for process discovery in `tests/integration/test_process_journey.test.jsx`:
  - User scrolls to process section
  - All 4 steps visible and readable
  - No console errors

- [ ] T072 [P] Unit tests for Process component in `tests/unit/Process.test.jsx`:
  - Tests 4 steps render
  - Tests step content is correct
  - Tests responsive layout (horizontal vs vertical)

- [ ] T073 Unit tests for WhatsAppButton in `tests/unit/WhatsAppButton.test.jsx`:
  - Tests button renders with correct href
  - Tests button position is fixed bottom-right
  - Tests aria-label present

### Implementation for User Story 4

- [ ] T074 Create Process component: `src/components/Process.jsx`
  - Display 4 process steps:
    1. VALORACIÓN: "Envíanos fotos de tu pieza y te damos presupuesto"
    2. RECOGIDA: "Opcionalmente recogemos en Valencia y área metropolitana"
    3. DECAPADO: "Proceso profesional que respeta la madera original"
    4. ENTREGA: "Tu pieza lista para restaurar o darle nuevo acabado"
  - Layout: Horizontal timeline on desktop (1024px+), vertical on tablet/mobile
  - Each step shows: large number, title (bold), description
  - Data from `src/utils/constants.js` processSteps array
  - Styling: Alternating left/right on desktop, centered on mobile
  - File path: `src/components/Process.jsx`

- [ ] T075 Create WhatsAppButton component: `src/components/WhatsAppButton.jsx`
  - Floating button positioned fixed, bottom-right corner
  - Icon: WhatsApp logo (SVG or emoji 💬)
  - Text: "WhatsApp" or just icon
  - href: `https://wa.me/+34{PHONE}?text={MESSAGE}` from environment variables
  - Styling: Brand color (#8B4513 or accent), rounded, shadow, hover effect
  - Accessibility: aria-label="Contacta con nosotros por WhatsApp"
  - Mobile-friendly: tap target 44px minimum
  - File path: `src/components/WhatsAppButton.jsx`

- [ ] T076 [P] Add process steps to constants: `src/utils/constants.js`
  - processSteps array with 4 items
  - Each item: id, title (Spanish), description (Spanish), duration (optional)

- [ ] T077 Setup WhatsApp integration: `.env.local`
  - VITE_WHATSAPP_PHONE: +34[NUMBER] (placeholder)
  - VITE_WHATSAPP_MESSAGE: Pre-filled message text (Spanish)
  - Message example: "Hola Manos Decapa, me interesa el servicio de decapado"

- [ ] T078 Add WhatsApp CSS styling: `src/styles/components.css` or inline Tailwind
  - Fixed positioning: `bottom-6 right-6`
  - Responsive: Adjust padding for mobile (`bottom-4 right-4`)
  - Hover effect: Scale or shadow increase
  - Z-index: Ensure above other elements but below modals

- [ ] T079 Add analytics tracking to WhatsAppButton:
  - Track click event: "whatsapp_click"
  - Include WhatsApp phone number in event properties

- [ ] T080 Run tests from T069-T073 and verify all PASS after implementation

**Checkpoint**: User Story 4 complete. Now have full customer journey with support (US1-4).

---

## Phase 7: User Story 5 - Navigate Professionally Structured Content (Priority: P3)

**Goal**: Ensure all sections are properly arranged, responsive on all devices, and footer has all required links and information.

**Independent Test**: Navigate full page on desktop and mobile, verify all 10 sections present in correct order, responsive layout works, footer links functional.

### Tests for User Story 5 (REQUIRED - Test-First)

- [ ] T081 Contract test for page layout in `tests/contract/test_page_layout.cy.js`:
  - Verify all 10 sections present in correct order:
    1. Hero
    2. Services
    3. Para Quién (Particulares/Profesionales)
    4. Process
    5. Why Choose Us
    6. Gallery
    7. Pricing
    8. About
    9. Contact Form
    10. Footer
  - Test on desktop (1024px), tablet (768px), mobile (320px)
  - Verify responsive layout (stacked on mobile, side-by-side on desktop)

- [ ] T082 Contract test for Footer in `tests/contract/test_footer.cy.js`:
  - Verify footer displays:
    - Logo/branding
    - Service description text
    - Contact info (phone, email, address)
    - Link to Manos de Hada (www.manosdehada.es)
    - Social media icons (Instagram, Facebook)
  - Links are clickable and have correct href
  - All links open in new tab (target="_blank")
  - Footer is responsive (single column on mobile, multi-column on desktop)

- [ ] T083 E2E test for full page responsive behavior in `tests/e2e/responsive-navigation.cy.js`:
  - Test on mobile (320px), tablet (768px), desktop (1024px)
  - Scroll through all sections on each size
  - Verify no horizontal overflow
  - Verify touch targets are 44px+ on mobile
  - Verify text is readable (font size, contrast)
  - Test landscape mode on mobile devices

- [ ] T084 [P] Unit tests for Footer component in `tests/unit/Footer.test.jsx`:
  - Tests footer renders all required elements
  - Tests links are present and correct
  - Tests social icons display
  - Tests responsive layout

- [ ] T085 Accessibility E2E test in `tests/e2e/accessibility-scan.cy.js`:
  - Run axe accessibility audit on full page
  - Check WCAG AA compliance:
    - Color contrast (4.5:1 for normal text, 3:1 for large text)
    - Alt text on all images (descriptive, not redundant)
    - Heading hierarchy (H1, then H2, no skipped levels)
    - Form labels properly associated
    - Keyboard navigation works (tab through all interactive elements)

### Implementation for User Story 5

- [ ] T086 Create ForWhom component: `src/components/ForWhom.jsx`
  - Display 2-column section addressing two audiences:
    - PARTICULARES: "¿Tienes un mueble heredado con capas de pintura?..."
    - PROFESIONALES: "Servicio para carpinterías, restauradores y anticuarios..."
  - Each column has title (H2), description paragraph, icons
  - Mobile: Stack to single column
  - Data from constants or inline
  - File path: `src/components/ForWhom.jsx`

- [ ] T087 Create Footer component: `src/components/Footer.jsx`
  - Logo: "Manos Decapa"
  - Service description: "Servicio de decapado profesional en Valencia"
  - Contact info:
    - Phone: [PLACEHOLDER] (from env)
    - Email: contact@manosdecapa.es (from env)
    - Address: "Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia"
  - Links:
    - Manos de Hada: www.manosdehada.es
    - Instagram: [PLACEHOLDER]
    - Facebook: [PLACEHOLDER]
  - Copyright: "© 2025 Manos Decapa. All rights reserved."
  - Responsive: 1-column (mobile) to 3-4 columns (desktop)
  - File path: `src/components/Footer.jsx`

- [ ] T088 Update App.jsx with complete page structure: `src/App.jsx`
  - Import all 10 components in correct order
  - Layout: Vertical stacking with proper spacing
  - Add container wrapper for content width (max-width: 1200px center)
  - Ensure responsive on all breakpoints
  - Add SEO meta tags (via react-helmet or native)

- [ ] T089 Create responsive grid helper: `src/styles/grid.css`
  - Define container max-width (1200px or 1280px)
  - Padding/margin for mobile (16px), tablet (24px), desktop (32px)
  - Utility classes for common grid patterns

- [ ] T090 Add accessibility features to components:
  - Ensure all images have descriptive alt text
  - All form fields have associated labels
  - Heading hierarchy: H1 (page title) → H2 (section titles) → H3 (subsections)
  - Focus management: Keyboard tab order logical
  - Color contrast: WCAG AA minimum (4.5:1 for normal, 3:1 for large)

- [ ] T091 Add mobile responsiveness CSS: `src/styles/responsive.css`
  - Media queries for breakpoints (320px, 768px, 1024px, 1440px)
  - Typography adjustments (smaller on mobile, larger on desktop)
  - Spacing adjustments (padding/margin scale with device)
  - Touch-friendly: Increase button/link tap targets to 44px minimum on mobile

- [ ] T092 [P] Add footer contact data to constants: `src/utils/constants.js`
  - footer object with:
    - phone: [PLACEHOLDER]
    - email: contact@manosdecapa.es
    - address: Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia
    - instagram: [PLACEHOLDER]
    - facebook: [PLACEHOLDER]
    - manosDehada: www.manosdehada.es

- [ ] T093 Setup environment variables for footer: `.env.local`
  - VITE_FOOTER_PHONE: [PLACEHOLDER]
  - VITE_FOOTER_EMAIL: contact@manosdecapa.es
  - VITE_INSTAGRAM_URL: [PLACEHOLDER]
  - VITE_FACEBOOK_URL: [PLACEHOLDER]

- [ ] T094 Add keyboard navigation testing:
  - Test tab through all interactive elements
  - Verify focus visible (outline or highlight)
  - Test form submission with keyboard (Enter key)
  - Test modal/overlay close with Escape key

- [ ] T095 Run Lighthouse audit: `npm run lighthouse`
  - Performance: >= 90
  - Accessibility: >= 95
  - Best Practices: >= 95
  - SEO: >= 95
  - Fix any issues identified

- [ ] T096 Run all accessibility tests (T085) and verify WCAG AA compliance

**Checkpoint**: User Story 5 complete. All 5 user stories implemented and independently testable.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Performance optimization, SEO finalization, analytics setup, documentation, testing coverage

- [ ] T097 [P] Optimize bundle size:
  - Run `npm run build` and check bundle size
  - Target: < 100KB gzipped for JS, < 50KB for CSS
  - Use dynamic imports for large components if needed
  - Remove unused dependencies

- [ ] T098 [P] Setup Service Worker (optional but recommended):
  - Cache static assets and hero image
  - Offline fallback page
  - File path: `public/service-worker.js`, `src/sw-register.js`

- [ ] T099 [P] Image optimization verification:
  - All portfolio images served from Cloudinary
  - WebP format with JPEG fallback
  - Responsive sizing for mobile/tablet/desktop
  - LCP target: < 2.5 seconds
  - CLS target: < 0.1 (no layout shift)

- [ ] T100 Setup Google Analytics 4: `src/utils/analytics.js`
  - Initialize GA4 with measurement ID from env
  - Track page views (auto)
  - Track form submission (conversion goal)
  - Track WhatsApp clicks
  - Track gallery interactions (optional engagement metric)
  - File path: `src/utils/analytics.js` + `src/main.jsx` initialization

- [ ] T101 [P] Setup Google Search Console:
  - Verify site ownership
  - Submit sitemap.xml
  - Monitor keyword rankings for target terms
  - Track "Decapado de Muebles Valencia" and related

- [ ] T102 Create sitemap.xml: `public/sitemap.xml`
  - Single entry for landing page (no subpages)
  - Include lastmod, changefreq (monthly), priority (1.0)

- [ ] T103 Create robots.txt: `public/robots.txt`
  - Allow all crawlers
  - Point to sitemap.xml

- [ ] T104 Setup SEO schema (structured data): `src/utils/seo.js`
  - LocalBusiness schema for Manos Decapa
  - Include: name, address, phone, description, areaServed (Valencia)
  - Inject into <head> as <script type="application/ld+json">

- [ ] T105 Create performance monitoring:
  - Setup Lighthouse CI for automated audits on PR
  - Setup web-vitals tracking
  - Create dashboard or alerts for performance regression

- [ ] T106 [P] Test coverage report:
  - Run `npm run test:coverage`
  - Target: >= 80% coverage
  - Document any untested edge cases
  - Coverage report: `coverage/index.html`

- [ ] T107 Create comprehensive README.md: `.../README.md`
  - Project overview
  - Tech stack
  - Getting started (npm install, npm run dev)
  - Testing (npm run test, npm run test:e2e)
  - Building for production
  - Deployment
  - Environment variables
  - Contributing guidelines
  - See specs/001-landing-page/quickstart.md for detailed dev guide

- [ ] T108 [P] Setup CI/CD GitHub Actions:
  - test.yml: Run unit + E2E tests on every PR
  - lighthouse.yml: Performance audit on staging
  - deploy.yml: Auto-deploy to production on merge to main

- [ ] T109 Create error tracking & monitoring setup:
  - Setup Sentry or similar for error reporting
  - Track 404s, form submission failures, API errors
  - File path: `src/utils/errorTracking.js`

- [ ] T110 [P] Add PWA features (optional but recommended):
  - Web manifest: `public/manifest.json`
  - App icon (512x512 PNG)
  - Splash screen colors
  - Theme colors

- [ ] T111 Create deployment guide: `DEPLOYMENT.md`
  - Vercel deployment steps
  - AWS S3 + CloudFront deployment
  - Environment variables setup
  - DNS configuration
  - SSL/TLS cert setup

- [ ] T112 Performance validation checklist:
  - [ ] Page load time: < 3 seconds (SC-001)
  - [ ] Lighthouse Performance: >= 90 (SC-004)
  - [ ] Mobile usability: >= 80 PageSpeed (SC-002)
  - [ ] Form submission uptime: 99.9% (SC-008)
  - [ ] Gallery animations: smooth, no jank (SC-009)
  - [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms

- [ ] T113 Final testing & validation:
  - [ ] Run full E2E test suite on all user stories
  - [ ] Test on iOS Safari 14+, Android Chrome 90+
  - [ ] Test form submission with real email (SendGrid)
  - [ ] Verify WhatsApp link works on iOS and Android
  - [ ] Check all links (Manos de Hada, social, contact)
  - [ ] Verify image loading from Cloudinary
  - [ ] Test analytics tracking

- [ ] T114 Create CHANGELOG.md: `CHANGELOG.md`
  - Version 1.0.0 (2025-11-14)
  - Features: All 5 user stories complete
  - Known limitations or deferred features

- [ ] T115 [P] Documentation:
  - [ ] API documentation: `specs/001-landing-page/contracts/form-submission-api.md` ✅ (done)
  - [ ] Data model: `specs/001-landing-page/data-model.md` ✅ (done)
  - [ ] Quickstart guide: `specs/001-landing-page/quickstart.md` ✅ (done)
  - [ ] Component documentation (Storybook optional, or JSDoc comments)
  - [ ] Deployment guide: `DEPLOYMENT.md` (create)

**Checkpoint**: Landing page complete, tested, documented, and ready for production deployment.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - **BLOCKS all user stories**
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - US1 & US2 are P1 (high priority, should implement first for MVP)
  - US3 & US4 are P2 (can implement after US1/US2)
  - US5 is P3 (responsive/structural, can overlap with other stories)
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: No dependencies on other stories - Can start after Foundational ✅ **MVP ready**
- **User Story 2 (P1)**: No dependencies on other stories - Can start after Foundational ✅ **MVP ready with US1**
- **User Story 3 (P2)**: No dependencies on other stories - Can start after Foundational
- **User Story 4 (P2)**: No dependencies on other stories - Can start after Foundational
- **User Story 5 (P3)**: Structural/responsive, overlaps with other stories - Can start after Foundational but should complete last

### Within Each User Story

- Tests (from Template Rules) MUST be written first, FAIL, then implementation makes them pass
- Models/data before services before endpoints
- Core implementation before integration
- Story complete and tested before moving to next priority

### Parallel Opportunities

#### Phase 1 (Setup)
All marked [P] can run in parallel:
- T003: Install dependencies (parallel with T004)
- T004: Install dev dependencies (parallel with T003)
- T005-T009: All setup tasks can run in parallel

#### Phase 2 (Foundational)
All marked [P] can run in parallel:
- T012, T013, T014, T015: CSS/styling tasks
- T018, T019, T020, T021: Component/config tasks
- T022a, T022b, T022c: Hook creation

#### Phase 3-7 (User Stories)
- US1 & US2 (both P1) can run in parallel:
  - T023-T030: US1 tests (all [P], parallel)
  - T031-T039: US1 implementation
  - T040-T044: US2 tests (all [P], parallel)
  - T045-T053: US2 implementation
- US3 & US4 can run in parallel after US1/US2:
  - T054-T058: US3 tests (all [P])
  - T059-T068: US3 implementation
  - T069-T073: US4 tests (all [P])
  - T074-T080: US4 implementation

#### Phase 8 (Polish)
All marked [P] can run in parallel:
- T097, T098, T099, T101, T106, T110: Optimization & setup tasks

---

## Parallel Example: User Story 1

If implementing in parallel (with 2 developers):

```
Developer A: T023, T024, T025 (Hero & Services tests - write FIRST, fail)
Developer B: T026, T027, T028, T029, T030 (About & Integration tests - write FIRST, fail)

Once tests written & failing:

Developer A: T031, T032, T033 (Hero, Services, WhyChooseUs components)
Developer B: T034, T035, T036, T037, T038 (About, App, index.html, constants)

Both developers: T039 (run tests, verify all pass)
```

---

## Implementation Strategy

### MVP First (User Story 1 + 2 Only)

Minimum viable product for launch:
1. Complete Phase 1: Setup ✅
2. Complete Phase 2: Foundational ✅
3. Complete Phase 3: User Story 1 (awareness) ✅
4. Complete Phase 4: User Story 2 (lead generation) ✅
5. **STOP and VALIDATE**: Test User Stories 1 & 2 independently on mobile & desktop
6. Deploy to staging/production if ready
7. **Phase 8 minimum**: T100-T105 (Analytics, SEO, monitoring)

**MVP Timeline**: ~2 weeks for experienced team, ~3-4 weeks for new team

### Incremental Delivery (Recommended)

After MVP (US1 + US2) deployed:

1. Add User Story 3 (gallery & pricing) - Builds confidence, improves conversion
2. Add User Story 4 (process & WhatsApp) - Reduces friction
3. Add User Story 5 (responsive refinement) - Polish & accessibility
4. Complete Phase 8 (optimization, monitoring, documentation)

**Full Release Timeline**: ~4-6 weeks for experienced team

### Parallel Team Strategy

With 3+ developers:

```
Team A: Phase 1 Setup + Phase 2 Foundational (1 developer, 1 week)
Team B: Phase 3 US1 (1 developer, 1-2 weeks) - while A is working
Team C: Phase 4 US2 (1 developer, 1-2 weeks) - while A is working

Then rotate:
Team B: Phase 5 US3
Team C: Phase 6 US4
Team A: Phase 7 US5

Finally all together:
All: Phase 8 Polish, testing, deployment
```

---

## Notes

- [P] tasks = different files, no dependencies - can be assigned to different developers
- [Story] label (e.g., [US1]) maps task to specific user story for traceability
- Each user story should be independently completable and testable
- **Verify tests FAIL before implementing** - Red-Green-Refactor cycle per Constitution
- Commit after each task or logical group (e.g., after all tests pass for a story)
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- **Test-First**: All tests written before implementation code. Tests define the contract, code fulfills it.
- **Constitution Compliance**: All tasks support Test-First, Semantic Versioning, Code Review, Modular Design principles

---

## Execution Checklist

- [ ] Read this tasks.md completely
- [ ] Review spec.md, plan.md, data-model.md for full context
- [ ] Run Phase 1 Setup tasks (T001-T010)
- [ ] Run Phase 2 Foundational tasks (T011-T022)
- [ ] Implement US1 or US2 first (both P1, equal priority)
- [ ] **Test-First**: Write failing tests before implementation code
- [ ] Verify each task with `npm run test:unit`, `npm run test:watch`, or manual testing
- [ ] Commit after each phase checkpoint
- [ ] Run Lighthouse audit periodically: `npm run lighthouse`
- [ ] Before merging to main: Run full test suite + manual QA
- [ ] Deploy to staging first, validate metrics, then prod

Ready to implement! 🚀
