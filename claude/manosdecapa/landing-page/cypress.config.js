import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videoOnFailOnly: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // Implementar listeners de eventos si es necesario
    }
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
})
