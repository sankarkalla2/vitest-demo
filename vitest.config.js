// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', // Specify the test environment as Node.js
    coverage: {
      provider: 'v8', // Use V8 for code coverage
    },
  },
});