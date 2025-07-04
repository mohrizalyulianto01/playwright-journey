import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */

    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [

    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],  storageState: 'playwright/.auth/user.json', },
       dependencies: ['setup'],
    },

 
  ],

});
