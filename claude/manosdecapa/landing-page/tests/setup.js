import '@testing-library/jest-dom'

// Mock environment variables
process.env.VITE_API_URL = 'http://localhost:3000'
process.env.VITE_WHATSAPP_PHONE = '+34651234567'
process.env.VITE_GA4_MEASUREMENT_ID = 'G-TEST'

// Mock fetch API
global.fetch = vi.fn()

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
