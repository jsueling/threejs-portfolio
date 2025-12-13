const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Set a higher default command timeout (acommodates slower hardware)
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:3000/threejs-portfolio',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' || browser.name === 'electron') {
          // Enable software rendering (SwiftShader) for WebGL in CI
          launchOptions.args.push('--enable-unsafe-swiftshader');
          
          // Force WebGL to work even on "unsupported" GPUs
          launchOptions.args.push('--ignore-gpu-blocklist');
          launchOptions.args.push('--use-gl=swiftshader'); 
        }

        return launchOptions;
      });
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