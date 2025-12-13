const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/threejs-portfolio',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Defaults to 1280x720 viewport size
    // Set a consistent viewport size for all tests
    viewportWidth: 1920,
    viewportHeight: 1080,
    // Add retries for CI to handle minor network/animation blips
    retries: {
      // 2 times in headless mode
      runMode: 2,
      // 0 times in interactive mode
      openMode: 0,
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})