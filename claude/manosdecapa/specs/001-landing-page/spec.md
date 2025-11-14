# Feature Specification: Manos Decapa Landing Page

**Feature Branch**: `001-landing-page`
**Created**: 2025-11-14
**Status**: Draft
**Input**: Professional single-page landing site for Manos Decapa furniture stripping service in Valencia, Spain

## User Scenarios & Testing

### User Story 1 - Discover Service and View Offerings (Priority: P1)

A prospective customer visits the landing page for the first time and needs to quickly understand what services Manos Decapa offers, who provides them, and what value they deliver.

**Why this priority**: Core awareness-building flow; directly drives business discovery and initial engagement

**Independent Test**: Can be fully tested by loading the landing page and verifying all service descriptions, hero section, and "Why Choose Us" section are visible and complete. Delivers immediate value by communicating service value proposition.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the page, **When** page loads, **Then** hero section displays with title, subtitle, professional image, and primary CTA button within 3 seconds
2. **Given** hero section is visible, **When** visitor scrolls down, **Then** Services section displays 3 service cards (Wooden Furniture Stripping, Antique Doors/Windows, Decorative Metal Elements) with icons and descriptions
3. **Given** Services section is visible, **When** visitor continues scrolling, **Then** "Why Choose Us" section displays with 3 pillars (Experience, Technology, Guaranteed Results)
4. **Given** any section is visible, **When** text is inspected, **Then** copy is clear, professional, and in Spanish

---

### User Story 2 - Request Quote and Contact Service (Priority: P1)

A customer interested in the service needs to submit their information and project details to receive a quote, with support for photo attachments and flexible client type selection.

**Why this priority**: Revenue-critical conversion path; enables lead generation and business inquiries; required for core business function

**Independent Test**: Can be fully tested by completing the contact form with all required fields, selecting client type, and successfully submitting. Delivers value by generating business leads.

**Acceptance Scenarios**:

1. **Given** customer scrolls to contact form, **When** form is visible, **Then** all input fields are present and accessible (name, email, phone, client type, item type, message, photo upload)
2. **Given** customer fills in required fields, **When** "Solicitar Presupuesto Gratuito" button is clicked, **Then** form submission succeeds and displays success message
3. **Given** form has validation, **When** required fields are empty, **Then** validation error appears before submission
4. **Given** customer is a Professional, **When** form is submitted, **Then** client type selection influences messaging or follow-up process

---

### User Story 3 - View Before/After Results and Pricing (Priority: P2)

A prospective customer wants to see example results of previous work and understand pricing to evaluate if the service is appropriate for their needs.

**Why this priority**: Builds confidence and demonstrates quality; helps customers self-qualify by showing pricing ranges

**Independent Test**: Can be fully tested by viewing the before/after gallery, hovering over images to see before state, and viewing the pricing table. Delivers value by showcasing quality and managing expectations around cost.

**Acceptance Scenarios**:

1. **Given** visitor scrolls to gallery section, **When** section loads, **Then** 6 before/after furniture images display in 3x2 grid
2. **Given** before/after images are visible, **When** mouse hovers over an image, **Then** image reveals before state (default) or after state with smooth transition
3. **Given** pricing section is visible, **When** customer reads pricing table, **Then** 4 categories display with starting prices (Chair €35, Small furniture €50, Cabinet €120, Door €80)
4. **Given** pricing is displayed, **When** customer reads footnotes, **Then** professional pricing tier is mentioned with direction to contact for volume rates

---

### User Story 4 - Understand Process and Get Support (Priority: P2)

A customer wants to understand the complete service process from initial contact to delivery, and needs quick contact options including WhatsApp for immediate inquiry.

**Why this priority**: Reduces customer friction by clarifying process; WhatsApp integration improves accessibility and response time

**Independent Test**: Can be fully tested by reading the 4-step process section and verifying WhatsApp button is functional. Delivers value by enabling quick customer support.

**Acceptance Scenarios**:

1. **Given** visitor scrolls to "Nuestro Proceso" section, **When** section is visible, **Then** 4 numbered steps display with titles and descriptions (Valoración, Recogida, Decapado, Entrega)
2. **Given** process section is visible, **When** customer reads each step, **Then** clear explanation of what happens at each stage is provided
3. **Given** customer is on any page, **When** page loads, **Then** floating WhatsApp button appears in bottom right corner
4. **Given** WhatsApp button is visible, **When** customer clicks button, **Then** link opens WhatsApp with pre-filled message or contact phone number

---

### User Story 5 - Navigate Professionally Structured Content (Priority: P3)

A visitor benefits from clear information architecture with logical flow from awareness (services) to evaluation (results/pricing) to action (contact), supporting different decision-making styles.

**Why this priority**: Enhances user experience and accommodates different visitor preferences; supports SEO with proper content hierarchy

**Independent Test**: Can be fully tested by navigating the full page and verifying all major sections are present, in logical order, and fully responsive on mobile and desktop. Delivers value through professional presentation.

**Acceptance Scenarios**:

1. **Given** page is viewed on desktop, **When** entire page is scrolled, **Then** sections appear in order: Hero → Services → For Whom → Process → Why Us → Gallery → Pricing → About → Contact → Footer
2. **Given** page is viewed on mobile, **When** page is scrolled, **Then** layout is optimized for mobile (single column, touch-friendly buttons) and all content remains accessible
3. **Given** footer is visible, **When** customer reviews footer, **Then** links to Manos de Hada (www.manosdehada.es), contact info, and social icons are present

---

### Edge Cases

- What happens when a user visits the page on very old browsers that don't support modern CSS features? → Graceful degradation with readable layout
- How does the page handle when WhatsApp is not installed on mobile? → Link still works via web.whatsapp.com or shows fallback contact method
- What happens when before/after images fail to load? → Placeholder or alt text displays with fallback message
- How does form validation handle international phone number formats? → Accept flexible formats or provide clear format guidance

## Requirements

### Functional Requirements

- **FR-001**: Landing page MUST display complete hero section with title "Manos Decapa - Decapado Profesional de Muebles en Valencia", subtitle describing the service, professional hero image, and "Solicitar Presupuesto" button
- **FR-002**: Services section MUST display 3 cards in responsive grid layout, each with icon, title, and description (Wooden furniture, doors/windows, decorative metals)
- **FR-003**: "Para Quién" section MUST display 2 content columns addressing Particulares and Profesionales with distinct value propositions
- **FR-004**: Process section MUST display 4 numbered steps horizontally with titles and descriptions (Valoración, Recogida, Decapado, Entrega)
- **FR-005**: "Por Qué Elegirnos" section MUST display 3 feature cards with icons and descriptions (Experience 20+ years, Advanced technology, Guaranteed results)
- **FR-006**: Gallery section MUST display 6 before/after furniture images in 3x2 responsive grid with hover effect to toggle before/after states
- **FR-007**: Pricing table MUST display 4 furniture categories with starting prices in euros and footnotes about final pricing and professional rates
- **FR-008**: About section MUST display information about Manos Decapa history, connection to Manos de Hada, and link to www.manosdehada.es
- **FR-009**: Contact form MUST include fields: full name, email, phone, client type dropdown (Particular/Profesional), item type to strip, message/description, and file upload for photos
- **FR-010**: Contact form MUST validate required fields before submission and display validation errors
- **FR-011**: Footer MUST display logo, service description, contact information (phone, email, address), link to Manos de Hada, and social media icons (Instagram, Facebook)
- **FR-012**: Floating WhatsApp button MUST appear in bottom right corner on all pages and be clickable on mobile and desktop devices
- **FR-013**: Page MUST be fully responsive and display correctly on mobile (320px+), tablet (768px+), and desktop (1024px+) breakpoints
- **FR-014**: All text MUST be in Spanish and all content MUST be accessible (WCAG AA standards for alt text, contrast, font sizes)
- **FR-015**: Page MUST include SEO meta tags: title "Decapado de Muebles Valencia | Manos Decapa - Servicio Profesional", description with keywords about furniture stripping service, and H1 heading "Decapado Profesional de Muebles en Valencia"

### Key Entities

- **Contact Lead**: Represents customer inquiry with fields (name, email, phone, clientType, itemType, message, attachments)
- **Service**: Represents service offering with fields (title, description, icon)
- **Portfolio Item**: Represents before/after gallery entry with fields (beforeImage, afterImage, title)
- **Process Step**: Represents process stage with fields (number, title, description)

## Success Criteria

### Measurable Outcomes

- **SC-001**: Landing page loads completely within 3 seconds on standard broadband (10 Mbps)
- **SC-002**: Contact form has at least 80% mobile usability score on Google PageSpeed Insights
- **SC-003**: All interactive elements (buttons, form fields, WhatsApp link) are functional on both iOS and Android devices
- **SC-004**: Page achieves 90+ Lighthouse performance score
- **SC-005**: Conversion rate: at least 2% of visitors complete the contact form (measured after 1 month)
- **SC-006**: Mobile traffic represents at least 60% of page views and has equivalent conversion rate to desktop
- **SC-007**: Page ranks on first page of Google search results for "decapado muebles Valencia" and related keywords within 3 months
- **SC-008**: Contact form submissions are delivered reliably with 99.9% uptime
- **SC-009**: Before/after image gallery displays smoothly with no layout shift on hover transitions
- **SC-010**: Pricing table and service descriptions are accurate and match printed materials or verbal quotes

## Assumptions

1. **Design System**: Color palette and typography as specified (warm wood tones, Poppins/Montserrat titles, Open Sans body) will be implemented consistently across all sections
2. **Contact Form Backend**: Form submission will be handled by email service or CRM integration (not specified in requirements); placeholders use [PLACEHOLDER] for phone/email
3. **Image Assets**: High-quality before/after furniture images will be provided separately; current spec uses professional placeholder images
4. **Social Media Links**: Instagram and Facebook links use [PLACEHOLDER] to be filled with actual Manos de Hada accounts
5. **Professional Rates**: Specific pricing for professional/volume clients will be quoted case-by-case; footer directs them to contact
6. **WhatsApp Integration**: WhatsApp contact number uses [PLACEHOLDER] to be configured during implementation
7. **Manos de Hada Link**: Reference to complete restoration service at www.manosdehada.es is confirmed as valid external link
8. **Form Handling**: Contact form includes optional photo upload; if photos are received, they are stored securely and referenced in follow-up communication
9. **Analytics**: Google Analytics or similar tracking is assumed to measure SC-005, SC-006, SC-007 metrics
10. **Accessibility**: Page will follow WCAG 2.1 AA standards with proper heading hierarchy, alt text for all images, and sufficient color contrast
