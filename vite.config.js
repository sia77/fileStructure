import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom', // if you're testing DOM functions
    globals: true,         // allows describe/it/expect globally
  }
});
