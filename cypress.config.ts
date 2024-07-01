import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'w16yvm',
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
})
