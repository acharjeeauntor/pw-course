// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/* Type of Timeout:

Test Timeout
Expect Timeout
Action Timeout - use
Global Timeout
Navigation Timeout - use


*/
module.exports = defineConfig({
  testDir: './e2e/tests',
  // testMatch:['*.app.spec.js','*.app.spec.js'],
  // testIgnore:['*.app.spec.js'],
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry on CI only */
 // retries: 1,
  timeout:40000,
expect:{timeout:10000},
globalTimeout:600000,




  /* Opt out of parallel tests on CI. */
  workers: 5,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,
    ignoreHTTPSErrors:true,
    actionTimeout:5000,
    navigationTimeout:5000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'custom',
      use: { baseURL: "https://google.com/", 
      browserName: 'chromium', 
      screenshot: 'on',
    video:'retain-on-failure',
    trace:'retain-on-failure',
    viewport:{height:700,width:900},
    // @ts-ignore
    headless:false,
    launchOptions:{
    slowMo:500
    }
  },
    },
    {
      name:"BWContext",
      use:{
        ...devices['Desktop Chrome'],
        baseURL: "https://google.com/"
      }
    },
    {
      name:"BWContext2",
      use:{
        baseURL: "https://google.com/"
      }
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],baseURL: "https://google.com/" },fullyParallel:true
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],baseURL: "https://google.com/" },
    },

    {
      name: 'safari',
      use: { ...devices['Desktop Safari'], headless: false,ignoreHTTPSErrors:true,baseURL: "https://google.com/" },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 2 XL'],baseURL: "https://google.com/" },
    },
    {
      name: 'Mobile Safari',
      use:{ ...devices['iPhone X'],baseURL: "https://google.com/"}
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

