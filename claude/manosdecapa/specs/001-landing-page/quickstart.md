# Quickstart: Manos Decapa Landing Page Development

**Phase 1 Output** | **Date**: 2025-11-14 | **Status**: Ready for Development

Get the landing page running locally in 5 minutes.

## Prerequisites

- **Node.js**: 18+ (check with `node --version`)
- **npm**: 8+ (check with `npm --version`)
- **Git**: (for cloning and commits)
- **Text editor/IDE**: VS Code recommended

## Installation

### 1. Clone Repository and Checkout Feature Branch

```bash
cd landing-page
git checkout 001-landing-page
```

### 2. Install Dependencies

```bash
npm install
```

**Expected output**:
```
added XXX packages
```

### 3. Create Environment File

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your local values:

```env
# Email Service
VITE_SENDGRID_API_KEY=SG.xxxxx
VITE_CONTACT_EMAIL=contact@manosdecapa.es
VITE_NOREPLY_EMAIL=noreply@manosdecapa.es

# Image Service (Cloudinary)
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset

# WhatsApp
VITE_WHATSAPP_PHONE=+34651234567
VITE_WHATSAPP_MESSAGE=Hola%20Manos%20Decapa%2C%20me%20interesa%20el%20servicio

# Analytics (Google Analytics 4)
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# API Endpoint
VITE_API_URL=http://localhost:3000
VITE_API_CONTACT_ENDPOINT=/api/contact
```

**Note**: For development, you can use placeholder values. Contact your project lead for actual credentials.

## Development Server

### Start the Development Server

```bash
npm run dev
```

**Expected output**:
```
VITE v4.X.X  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

### Open in Browser

Visit `http://localhost:5173/` to see the landing page.

**You should see**:
- Hero section with title "Manos Decapa - Decapado Profesional de Muebles en Valencia"
- Services section with 3 cards
- Contact form
- Before/after gallery
- Footer

### Hot Module Reload (HMR)

Changes to `.jsx`, `.css`, `.js` files auto-reload in browser. Just edit and save!

```bash
# Edit src/components/Hero.jsx
# Save file
# Browser automatically reloads
```

## Running Tests

### Unit Tests

```bash
# Run all unit tests
npm run test:unit

# Watch mode (re-run on file changes)
npm run test:watch

# With coverage report
npm run test:coverage
```

**Expected output**:
```
✓ src/components/ContactForm.test.jsx (4 tests)
✓ src/utils/validation.test.js (8 tests)
...
Test Files  5 passed (5)
```

### E2E Tests (Cypress)

```bash
# Open Cypress UI
npm run test:e2e

# Or run headless
npm run test:e2e:run
```

**Expected**:
- Opens Cypress test runner
- Lists 5 E2E test files (one per user story)
- Run tests to verify all user journeys work

### Accessibility Tests

```bash
# Run accessibility audit
npm run test:a11y

# Or manually in browser
# 1. npm run dev
# 2. Install "axe DevTools" browser extension
# 3. Right-click → axe DevTools → Scan this page
```

**Expected output**:
- No critical or serious accessibility issues
- WCAG AA compliance verified

## Building for Production

### Build Output

```bash
npm run build
```

**Expected output**:
```
vite v4.X.X building for production...
✓ XXX modules transformed
dist/index.html                   XX.XX KiB
dist/assets/main-abc123.js       XXX.XX KiB │ gzip: XX.XX KiB
dist/assets/main-def456.css      XX.XX KiB │ gzip: XX.XX KiB
```

### Preview Build Locally

```bash
npm run preview
```

Visit `http://localhost:4173/` to see production build locally.

### Performance Check

```bash
npm run lighthouse
```

**Expected Lighthouse scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Project Structure

```
landing-page/
├── src/
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # Global & component styles
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
├── tests/
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── e2e/               # Cypress E2E tests
├── public/                # Static assets
├── specs/                 # Feature specs & docs
├── package.json
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── vitest.config.js       # Vitest configuration
├── cypress.config.js      # Cypress configuration
└── .env.example           # Environment variables template
```

## Development Workflow

### 1. Start Development

```bash
npm run dev
```

### 2. Make Changes

Edit components in `src/components/`, styles in `src/styles/`, logic in `src/utils/`.

### 3. Test Changes

```bash
# Terminal 1: npm run dev (development server running)
# Terminal 2: npm run test:watch (tests running)

# Manual testing in browser:
# 1. Visit http://localhost:5173/
# 2. Try form submission, gallery hover, etc.
```

### 4. Before Commit

```bash
# Run all tests
npm run test

# Check code style
npm run lint

# Build for production
npm run build

# Check accessibility
npm run test:a11y
```

### 5. Commit Changes

```bash
git add .
git commit -m "feat: add hero section with CTA button"
git push origin 001-landing-page
```

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run test:unit` | Run unit tests once |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:e2e` | Open Cypress E2E test UI |
| `npm run test:e2e:run` | Run E2E tests headless |
| `npm run test:a11y` | Run accessibility tests |
| `npm run lint` | Check code style |
| `npm run format` | Format code with Prettier |
| `npm run lighthouse` | Run Lighthouse performance audit |

## Troubleshooting

### "Port 5173 already in use"

```bash
# Kill process using port 5173
# macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :5173
taskkill /PID [PID] /F
```

### "Module not found" errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Tests failing locally but passing in CI

1. Check Node version matches CI (see `.github/workflows/test.yml`)
2. Clear cache: `npm run clean`
3. Reinstall: `npm install`

### Env variables not loading

```bash
# Verify .env.local exists
ls -la .env.local

# Restart dev server
npm run dev
```

### Images not loading

```bash
# Check Cloudinary URL in .env.local
# Verify VITE_CLOUDINARY_CLOUD_NAME is set
# Try accessing image URL directly in browser
```

## Git Workflow

### Create Feature Branch from 001-landing-page

```bash
# Ensure you're on 001-landing-page
git checkout 001-landing-page

# Create feature branch for a specific component
git checkout -b 001/hero-section

# Make changes, commit, push
git add .
git commit -m "feat: implement hero section with animation"
git push origin 001/hero-section
```

### Create Pull Request

1. Push your branch to GitHub
2. Open GitHub → Create Pull Request
3. Set base branch to `001-landing-page`
4. Include test results and screenshots
5. Request review

### Merge to Main

After PR approval:

```bash
git checkout 001-landing-page
git pull origin 001-landing-page
git merge 001/hero-section
git push origin 001-landing-page

# Then merge 001-landing-page → main (with PR)
```

## Deployment

### Vercel (Recommended)

```bash
# Connect GitHub repo to Vercel
# Set environment variables in Vercel dashboard
# Push to main branch → auto-deploys

npm run build  # Vercel runs this automatically
```

### AWS S3 + CloudFront

```bash
npm run build

# Upload dist/ to S3
aws s3 sync dist/ s3://manosdecapa-landing/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"
```

### Docker (for CI/CD)

```bash
# Build Docker image
docker build -t manosdecapa-landing:latest .

# Run locally
docker run -p 3000:3000 manosdecapa-landing:latest
```

## Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_SENDGRID_API_KEY` | Email service key | `SG.xxxxx` |
| `VITE_CONTACT_EMAIL` | Where inquiries are sent | `contact@manosdecapa.es` |
| `VITE_CLOUDINARY_CLOUD_NAME` | Image CDN service | `your-cloud-name` |
| `VITE_WHATSAPP_PHONE` | WhatsApp contact number | `+34651234567` |
| `VITE_GA4_MEASUREMENT_ID` | Google Analytics | `G-XXXXXXXXXX` |
| `VITE_API_URL` | Backend API base URL | `http://localhost:3000` |
| `VITE_API_CONTACT_ENDPOINT` | Form submission endpoint | `/api/contact` |

## Getting Help

### Documentation

- Feature spec: `specs/001-landing-page/spec.md`
- Implementation plan: `specs/001-landing-page/plan.md`
- Data model: `specs/001-landing-page/data-model.md`
- API contracts: `specs/001-landing-page/contracts/`

### Team

- Questions? Ask in #landing-page Slack channel
- Issues? Create GitHub issue with `landing-page` label
- Code review? Comment on PR

### Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress Docs](https://docs.cypress.io)

## Next Steps

1. ✅ You're ready to develop!
2. See `specs/001-landing-page/tasks.md` for task breakdown
3. Implement by user story (US1 → US2 → US3 → US4 → US5)
4. Test each story independently
5. Merge to main when ready for production

Happy coding! 🚀
