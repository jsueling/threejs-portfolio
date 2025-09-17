const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to Next.js app to load next.config.js and .env files in test environment
  dir: './',
})

// Add custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)