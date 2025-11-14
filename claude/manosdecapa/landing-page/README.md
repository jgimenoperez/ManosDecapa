# Manos Decapa Landing Page

Professional single-page landing site for Manos Decapa furniture stripping service in Valencia, Spain.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test:unit
npm run test:watch
npm run test:e2e
```

## 📋 Project Structure

```
landing-page/
├── src/
│   ├── components/        # React components
│   │   └── common/        # Reusable components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # Global & component styles
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
├── tests/
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   ├── e2e/               # Cypress E2E tests
│   └── contract/          # Contract tests
├── public/                # Static assets
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vitest.config.js
└── cypress.config.js
```

## 🎯 Features

### User Story 1 (P1): Service Discovery
- Hero section with main CTA
- 3 service cards overview
- Why Choose Us section
- Company information

### User Story 2 (P1): Lead Generation
- Contact form with validation
- Email confirmation service
- Form submission tracking

### User Story 3 (P2): Portfolio Gallery
- Before/after image gallery
- Pricing table
- Customer confidence building

### User Story 4 (P2): Process & Support
- 4-step service process explanation
- Floating WhatsApp button
- Customer support accessibility

### User Story 5 (P3): Navigation & Responsiveness
- Full page responsive design
- Footer with contact info
- Accessibility compliance (WCAG AA)

## 🧪 Testing

### Unit Tests (Vitest + React Testing Library)
```bash
npm run test:unit
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
```

### E2E Tests (Cypress)
```bash
npm run test:e2e         # Interactive mode
npm run test:e2e:run     # Headless mode
```

### Accessibility Tests
```bash
npm run test:a11y
```

## 📦 Build

```bash
# Production build
npm run build

# Preview production build
npm run preview

# Performance audit
npm run lighthouse
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` from `.env.example`:

```env
VITE_SENDGRID_API_KEY=your_key
VITE_CLOUDINARY_CLOUD_NAME=your_name
VITE_WHATSAPP_PHONE=+34XXXXXXXXX
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Tailwind CSS
Configured with warm wood-tone color palette:
- Primary: #8B4513 (Wood brown)
- Secondary: #D2691E (Chocolate)
- Accent: #F4A460 (Warm orange)

## 📊 Performance

- **Load Time**: < 3 seconds
- **Lighthouse Score**: 90+
- **Core Web Vitals**: LCP < 2.5s, CLS < 0.1, FID < 100ms
- **Accessibility**: WCAG 2.1 AA compliant

## 🌐 Deployment

See [DEPLOYMENT.md](../DEPLOYMENT.md) for deployment instructions.

## 📄 Documentation

- [Specification](../spec.md)
- [Implementation Plan](../plan.md)
- [Data Model](../data-model.md)
- [API Contracts](../contracts/)
- [Development Guide](../quickstart.md)
- [Task List](../tasks.md)

## 🤝 Contributing

1. Create feature branch from `001-landing-page`
2. Follow test-first development (write tests before code)
3. Ensure all tests pass before submitting PR
4. Code review required before merge

## 📝 License

Copyright © 2025 Manos Decapa. All rights reserved.
