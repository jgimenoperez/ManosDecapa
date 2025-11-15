# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Manos Decapa Landing Page** - A Next.js-based landing page for a hair removal services business built with Firebase integration capabilities. The site showcases services, pricing, gallery, process, and includes a contact form with file upload functionality.

**Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS, Firebase, Genkit AI, Radix UI components, shadcn/ui component library

---

## Common Commands

### Development
```bash
# Start dev server (runs on port 9002 with Turbopack)
npm run dev

# Start Genkit AI dev server with hot reload
npm run genkit:watch

# Just start Genkit without watching
npm run genkit:dev
```

### Building & Production
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Code Quality
```bash
# Run linter
npm run lint

# Check TypeScript types
npm run typecheck
```

---

## Architecture Overview

### Directory Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page that orchestrates all section components
  - `layout.tsx` - Root layout wrapper
  - `globals.css` - Global styles

- **`src/components/`** - React components
  - **`sections/`** - Major page sections (Hero, Services, Gallery, Pricing, etc.)
  - **`ui/`** - Radix UI + shadcn/ui primitive components (buttons, dialogs, forms, etc.)
  - Standalone components: `header.tsx`, `footer.tsx`, `logo.tsx`, `section.tsx` (wrapper), `whatsapp-button.tsx`, `back-to-top.tsx`

- **`src/ai/`** - Genkit AI integration
  - `genkit.ts` - AI/LLM model definitions and flows
  - `dev.ts` - Development entry point for Genkit

- **`src/lib/`** - Utilities and helpers
  - `utils.ts` - Common utility functions
  - `placeholder-images.ts` - Image data for gallery/sections

- **`src/hooks/`** - React custom hooks
  - `use-toast.ts` - Toast notifications
  - `use-mobile.tsx` - Mobile viewport detection

### Page Structure

The main `src/app/page.tsx` composes the landing page by importing and rendering sequential section components:
1. Header (navigation)
2. Hero Section
3. Services Section
4. For Whom Section
5. Process Section
6. Why Us Section
7. Gallery Section
8. Pricing Section
9. About Section
10. Contact Section
11. Footer
12. Floating buttons (WhatsApp, Back to Top)

### Component Pattern

Most components follow this structure:
- Accept minimal props for flexibility
- Use Tailwind CSS for styling
- Import from `src/components/ui/` for consistent UI primitives
- Use the `Section` wrapper for consistent section styling and spacing

### Styling & Design System

**Color Palette** (from blueprint):
- Primary: Wood Brown (#8B4513)
- Secondary: Chocolate (#D2691E)
- Accent: Warm Orange (#F4A460)
- Background: Cream (#FFF8DC)
- Text: Dark Brown (#2C1810)

**Typography**:
- Headings: Poppins (bold, sans-serif)
- Body: PT Sans (regular, sans-serif)

**CSS Framework**: Tailwind CSS configured in `tailwind.config.ts`
- Custom colors added to match design system
- Animations for fade-in effects on scroll

---

## Key Features

1. **Responsive Design** - Mobile-first approach with Tailwind breakpoints
2. **Contact Form** - Form handling with validation (uses react-hook-form + Zod)
3. **Gallery** - Before/after image effects with lightbox functionality
4. **Map Embedding** - Google Maps iframe for business location
5. **AI Integration** - Genkit/Google GenAI for potential chatbot/content generation
6. **Firebase Ready** - Firebase SDK imported but not yet fully integrated

---

## Configuration Files

- **`next.config.ts`** - Next.js configuration
  - TypeScript and ESLint error ignoring enabled (can be removed once types are fixed)
  - Remote image domains configured for Unsplash, placehold.co, picsum.photos

- **`tsconfig.json`** - TypeScript compiler options
  - Path alias `@/*` points to `src/`

- **`tailwind.config.ts`** - Tailwind CSS configuration
  - Extends default theme with custom colors

- **`components.json`** - shadcn/ui configuration

- **`apphosting.yaml`** - Firebase App Hosting configuration

---

## Development Notes

- **Build Errors**: TypeScript and ESLint errors are currently ignored in `next.config.ts` (lines 5-10). Fix these as you add features.
- **AI/Genkit**: The Genkit setup exists but may not be fully integrated. Check `src/ai/genkit.ts` before adding AI features.
- **Image Optimization**: The Next.js Image component should be used for remote images to leverage optimization.
- **Mobile Detection**: Use the `use-mobile` hook for responsive behavior that requires JS detection.
